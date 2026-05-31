import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendSiteSurveyEmail } from '@/lib/email';

/**
 * Site Survey lead capture endpoint.
 * Inserts into `site_surveys` table (create one in Supabase mirroring this shape).
 * Falls back to the `contacts` table if `site_surveys` is missing.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      email,
      location,
      propertyType,
      services,
      preferredContact,
      preferredTime,
      notes,
    } = body;

    if (!name || !phone || !location) {
      return NextResponse.json(
        { error: 'Name, phone and location are required.' },
        { status: 400 },
      );
    }

    const payload = {
      name,
      phone,
      email: email || null,
      location,
      property_type: propertyType || null,
      services: Array.isArray(services) ? services.join(', ') : services || null,
      preferred_contact: preferredContact || 'whatsapp',
      preferred_time: preferredTime || null,
      notes: notes || null,
      source: 'site_survey_form',
      created_at: new Date().toISOString(),
    };

    // Try the dedicated site_surveys table first.
    const { data, error } = await supabase
      .from('site_surveys')
      .insert([payload])
      .select();

    if (!error) {
      void sendSiteSurveyEmail({
        name,
        phone,
        email,
        location,
        propertyType,
        services,
        preferredContact,
        preferredTime,
        notes,
      });
      return NextResponse.json(
        { ok: true, id: data?.[0]?.id, table: 'site_surveys' },
        { status: 200 },
      );
    }

    // Fallback into `contacts` if the dedicated table doesn't exist.
    const fallback = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email: email || null,
          phone,
          message: `Site Survey Request — Location: ${location}; Property: ${payload.property_type}; Services: ${payload.services}; Preferred contact: ${payload.preferred_contact}; Preferred time: ${payload.preferred_time}; Notes: ${payload.notes || '-'}`,
        },
      ])
      .select();

    // Always fire the email — even if Supabase is down, we should not
    // lose a lead. The customer's submission becomes a successful response
    // as long as the notification email is queued.
    void sendSiteSurveyEmail({
      name,
      phone,
      email,
      location,
      propertyType,
      services,
      preferredContact,
      preferredTime,
      notes,
    });

    if (fallback.error) {
      console.error('Site survey: Supabase insert failed for BOTH tables.', {
        siteSurveysError: error,
        contactsError: fallback.error,
      });
      // Still return success — the email pipeline will deliver the lead.
      return NextResponse.json(
        { ok: true, table: 'email_only', warning: 'db_unavailable' },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { ok: true, id: fallback.data?.[0]?.id, table: 'contacts_fallback' },
      { status: 200 },
    );
  } catch (err) {
    console.error('Site survey error:', err);
    return NextResponse.json(
      { error: 'Unexpected error. Please WhatsApp us instead.' },
      { status: 500 },
    );
  }
}
