import { NextRequest, NextResponse } from 'next/server';
// import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  console.log('🚀 Contact form API called');
  
  try {
    const { name, email, phone, message } = await request.json();
    console.log('📝 Received form data:', { name, email, phone, message });

    // Store in Supabase
    console.log('💾 Attempting to save to Supabase...');
    const { data: dbData, error: dbError } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          phone,
          message,
        },
      ])
      .select();

    if (dbError) {
      console.error('❌ Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save contact form data' },
        { status: 500 }
      );
    }

    console.log('✅ Contact form saved to Supabase successfully!');
    console.log('📊 Database response:', dbData);

    // Email functionality commented out temporarily
    // TODO: Add email functionality later if needed
    /*
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'Chaukanna Website <noreply@chaukanna.com>',
      to: ['shriyash.sharma@example.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>This email was sent from the Chaukanna website contact form.</em></p>
      `,
    });

    if (emailError) {
      console.error('Email error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email notification' },
        { status: 500 }
      );
    }
    */

    console.log('🎉 Returning success response to client');
    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        databaseId: dbData?.[0]?.id,
        emailStatus: 'commented_out'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('💥 Contact form error:', error);
    console.error('💥 Error details:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
