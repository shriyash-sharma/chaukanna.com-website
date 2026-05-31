/**
 * Email notification helpers using Resend.
 *
 * Both helpers no-op gracefully if RESEND_API_KEY is not configured —
 * the form will still succeed and save to Supabase. This keeps local
 * development friction-free.
 *
 * Required env:
 *   RESEND_API_KEY        — Resend API key
 *   RESEND_FROM_EMAIL     — e.g. "Chaukanna Leads <leads@chaukanna.com>"
 *                           (defaults to "Chaukanna <onboarding@resend.dev>")
 *   LEAD_NOTIFY_EMAIL     — destination, e.g. "info@chaukanna.com"
 *                           (defaults to "info@chaukanna.com")
 */
import { Resend } from 'resend';

const FROM =
  process.env.RESEND_FROM_EMAIL ||
  'Chaukanna <onboarding@resend.dev>';
const TO = process.env.LEAD_NOTIFY_EMAIL || 'info@chaukanna.com';

function getClient(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function escapeHtml(s: string): string {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function row(label: string, value: string | null | undefined): string {
  if (!value) return '';
  return `
    <tr>
      <td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#1f2937;width:200px;">${escapeHtml(label)}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111827;">${escapeHtml(value)}</td>
    </tr>`;
}

function shell(title: string, contentRows: string): string {
  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;color:#111827;">
  <div style="max-width:640px;margin:0 auto;padding:24px;">
    <div style="background:#f97316;color:#ffffff;padding:18px 24px;border-radius:12px 12px 0 0;">
      <h1 style="margin:0;font-size:20px;">${escapeHtml(title)}</h1>
      <p style="margin:6px 0 0;opacity:0.9;font-size:13px;">Chaukanna lead notification</p>
    </div>
    <div style="background:#ffffff;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;padding:8px 0 16px;">
      <table style="width:100%;border-collapse:collapse;">${contentRows}</table>
    </div>
    <p style="font-size:12px;color:#6b7280;margin:16px 4px 0;">This message was generated from a form submission on chaukanna.com. Reply directly to follow up with the customer.</p>
  </div>
</body></html>`;
}

interface ContactPayload {
  name: string;
  email?: string | null;
  phone?: string | null;
  service?: string | null;
  message: string;
}

export async function sendContactEmail(p: ContactPayload): Promise<void> {
  const client = getClient();
  if (!client) {
    console.warn('[email] RESEND_API_KEY missing — skipping contact email');
    return;
  }
  const html = shell(
    'New contact form submission',
    [
      row('Name', p.name),
      row('Phone', p.phone),
      row('Email', p.email),
      row('Service', p.service),
      row('Message', p.message),
      row('Received', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })),
    ].join(''),
  );
  try {
    const { error } = await client.emails.send({
      from: FROM,
      to: [TO],
      replyTo: p.email || undefined,
      subject: `New enquiry: ${p.name}${p.service ? ` — ${p.service}` : ''}`,
      html,
    });
    if (error) console.error('[email] contact send error:', error);
  } catch (err) {
    console.error('[email] contact exception:', err);
  }
}

interface SiteSurveyPayload {
  name: string;
  phone: string;
  email?: string | null;
  location: string;
  propertyType?: string | null;
  services?: string[] | string | null;
  preferredContact?: string | null;
  preferredTime?: string | null;
  notes?: string | null;
}

export async function sendSiteSurveyEmail(p: SiteSurveyPayload): Promise<void> {
  const client = getClient();
  if (!client) {
    console.warn('[email] RESEND_API_KEY missing — skipping site-survey email');
    return;
  }
  const services = Array.isArray(p.services) ? p.services.join(', ') : p.services || '';
  const html = shell(
    'New free site survey request',
    [
      row('Name', p.name),
      row('Phone', p.phone),
      row('Email', p.email),
      row('Location', p.location),
      row('Property type', p.propertyType),
      row('Services requested', services),
      row('Preferred contact', p.preferredContact),
      row('Preferred time', p.preferredTime),
      row('Notes', p.notes),
      row('Received', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })),
    ].join(''),
  );
  try {
    const { error } = await client.emails.send({
      from: FROM,
      to: [TO],
      replyTo: p.email || undefined,
      subject: `Site survey: ${p.name} — ${p.location}`,
      html,
    });
    if (error) console.error('[email] survey send error:', error);
  } catch (err) {
    console.error('[email] survey exception:', err);
  }
}
