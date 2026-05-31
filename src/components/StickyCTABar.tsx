'use client';

import Link from 'next/link';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import {
  buildTelLink,
  buildWhatsAppLink,
  trackEvent,
} from '@/lib/analytics';

/**
 * Mobile-only sticky CTA bar with three primary conversion paths.
 * Hidden on desktop where the floating buttons + header CTAs take over.
 */
export default function StickyCTABar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 border-t border-gray-200 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.08)]"
      role="region"
      aria-label="Quick contact"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <a
        href={buildTelLink()}
        onClick={() => trackEvent('phone_call', { source: 'sticky_bar' })}
        className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-white font-semibold bg-orange-600 active:bg-orange-700"
        aria-label="Call Chaukanna"
      >
        <Phone className="w-5 h-5" aria-hidden />
        <span className="text-xs">Call</span>
      </a>
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('whatsapp_click', { source: 'sticky_bar' })}
        className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-white font-semibold bg-green-600 active:bg-green-700"
        aria-label="WhatsApp Chaukanna"
      >
        <MessageCircle className="w-5 h-5" aria-hidden />
        <span className="text-xs">WhatsApp</span>
      </a>
      <Link
        href="/book-site-survey"
        onClick={() => trackEvent('cta_click', { source: 'sticky_bar_survey' })}
        className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-white font-semibold bg-gray-900 active:bg-black"
        aria-label="Book free site survey"
      >
        <CalendarCheck className="w-5 h-5" aria-hidden />
        <span className="text-xs">Survey</span>
      </Link>
    </div>
  );
}
