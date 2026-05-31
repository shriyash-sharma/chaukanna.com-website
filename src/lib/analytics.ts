/**
 * GA4 + Supabase event tracking helper.
 *
 * `trackEvent` fires both:
 *   1. `gtag('event', name, params)` for Google Analytics 4
 *   2. logInteraction(...) in Supabase (for self-owned funnel data)
 *
 * Safe to call from anywhere (server-noop, client-fires).
 */
import { logInteraction } from './supabase';

type GtagFn = (
  command: 'event' | 'config' | 'set' | 'js',
  targetIdOrEvent: string,
  params?: Record<string, unknown>,
) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

export type AnalyticsEvent =
  | 'whatsapp_click'
  | 'phone_call'
  | 'email_click'
  | 'contact_form_submit'
  | 'site_survey_submit'
  | 'calculator_usage'
  | 'calculator_result_view'
  | 'service_page_visit'
  | 'location_page_visit'
  | 'service_area_visit'
  | 'project_page_view'
  | 'blog_post_view'
  | 'faq_open'
  | 'cta_click';

export function trackEvent(
  name: AnalyticsEvent,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === 'undefined') return;

  try {
    window.gtag?.('event', name, {
      ...params,
      send_to: 'G-Q1LSVKTZ2F',
    });
  } catch {
    /* GA failures must never break the UX */
  }

  // Map analytics event to supabase interaction type where applicable.
  const supabaseType =
    name === 'whatsapp_click'
      ? 'whatsapp'
      : name === 'phone_call'
        ? 'call'
        : name === 'email_click'
          ? 'email'
          : null;

  if (supabaseType) {
    void logInteraction(supabaseType, {
      ...params,
      event: name,
      url: typeof window !== 'undefined' ? window.location.pathname : null,
      timestamp: new Date().toISOString(),
    });
  }
}

export const PHONE_NUMBER = '+918888696046';
export const WHATSAPP_NUMBER = '917697012040';
export const WHATSAPP_DEFAULT_MESSAGE =
  'Hi Chaukanna, I am interested in your CCTV and home automation services.';

export function buildWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(message || WHATSAPP_DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function buildTelLink(): string {
  return `tel:${PHONE_NUMBER}`;
}
