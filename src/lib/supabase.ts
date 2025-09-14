import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://jfzktlaafwdztyfwjgss.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmemt0bGFhZndkenR5ZndqZ3NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3OTc0OTIsImV4cCI6MjA3MzM3MzQ5Mn0.jpX-G7riRLOAwVTC4Vo84xSst4wi83t4QvzOq71b7tA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}) {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .insert([formData]);

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
}

export async function logInteraction(type: 'whatsapp' | 'call' | 'email', details?: any) {
  try {
    const { data, error } = await supabase
      .from('click_logs')
      .insert([{
        button_type: type,
        details,
        created_at: new Date().toISOString(),
        user_agent: typeof window !== 'undefined' ? window.navigator.userAgent : null
      }]);

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error logging interaction:', error);
    return { success: false, error };
  }
}
