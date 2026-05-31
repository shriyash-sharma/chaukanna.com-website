'use client';

import { Phone, MessageCircle } from 'lucide-react';
import {
  buildTelLink,
  buildWhatsAppLink,
  trackEvent,
} from '@/lib/analytics';

type Variant = 'primary' | 'inverted' | 'compact';

type Props = {
  source: string; // analytics source label e.g. "service_hero", "homepage_cta"
  whatsappMessage?: string;
  variant?: Variant;
  className?: string;
};

/**
 * Conversion-optimised CTA pair (WhatsApp + Call) with built-in GA4 tracking.
 * Use this everywhere instead of hand-rolled anchors so events are consistent.
 */
export default function CTAButtons({
  source,
  whatsappMessage,
  variant = 'primary',
  className = '',
}: Props) {
  const onWhatsApp = () =>
    trackEvent('whatsapp_click', { source, message: whatsappMessage });
  const onCall = () => trackEvent('phone_call', { source });

  if (variant === 'compact') {
    return (
      <div className={`flex gap-3 ${className}`}>
        <a
          href={buildWhatsAppLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onWhatsApp}
          aria-label="Chat on WhatsApp"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <MessageCircle className="w-4 h-4" aria-hidden />
          WhatsApp
        </a>
        <a
          href={buildTelLink()}
          onClick={onCall}
          aria-label="Call Chaukanna"
          className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Phone className="w-4 h-4" aria-hidden />
          Call Now
        </a>
      </div>
    );
  }

  const wrapper = 'flex flex-col sm:flex-row gap-3 sm:gap-4';
  const base =
    'inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors min-h-12';

  if (variant === 'inverted') {
    return (
      <div className={`${wrapper} ${className}`}>
        <a
          href={buildWhatsAppLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onWhatsApp}
          aria-label="Get a free quote on WhatsApp"
          className={`${base} bg-white text-orange-600 hover:bg-gray-100`}
        >
          <MessageCircle className="w-5 h-5" aria-hidden />
          Get Free Quote on WhatsApp
        </a>
        <a
          href={buildTelLink()}
          onClick={onCall}
          aria-label="Call Chaukanna now"
          className={`${base} border-2 border-white text-white hover:bg-white hover:text-orange-600`}
        >
          <Phone className="w-5 h-5" aria-hidden />
          Call +91 88886 96046
        </a>
      </div>
    );
  }

  return (
    <div className={`${wrapper} ${className}`}>
      <a
        href={buildWhatsAppLink(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onWhatsApp}
        aria-label="Get a free quote on WhatsApp"
        className={`${base} bg-green-600 hover:bg-green-700 text-white`}
      >
        <MessageCircle className="w-5 h-5" aria-hidden />
        WhatsApp for Free Quote
      </a>
      <a
        href={buildTelLink()}
        onClick={onCall}
        aria-label="Call Chaukanna now"
        className={`${base} bg-orange-600 hover:bg-orange-700 text-white`}
      >
        <Phone className="w-5 h-5" aria-hidden />
        Call +91 88886 96046
      </a>
    </div>
  );
}
