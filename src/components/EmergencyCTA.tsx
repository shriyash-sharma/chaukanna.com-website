'use client';

import { AlertTriangle, Phone, MessageCircle } from 'lucide-react';
import {
  buildTelLink,
  buildWhatsAppLink,
  trackEvent,
} from '@/lib/analytics';
import { SITE } from '@/lib/branding';

interface Props {
  variant?: 'default' | 'compact';
  context?: string;
}

export default function EmergencyCTA({
  variant = 'default',
  context = 'home_emergency',
}: Props) {
  if (variant === 'compact') {
    return (
      <aside className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4 sm:p-5 my-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" aria-hidden />
            <div>
              <p className="font-semibold text-red-900">CCTV not working? DVR offline?</p>
              <p className="text-sm text-red-800">
                Same-day repair across Pune. Call us now.
              </p>
            </div>
          </div>
          <a
            href={buildTelLink()}
            onClick={() => trackEvent('phone_call', { source: `${context}_compact` })}
            className="inline-flex items-center justify-center bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors whitespace-nowrap"
          >
            <Phone className="w-4 h-4 mr-2" aria-hidden />
            {SITE.phoneDisplay}
          </a>
        </div>
      </aside>
    );
  }

  return (
    <section className="py-12 sm:py-16 bg-red-50 border-y border-red-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-t-4 border-red-500">
          <div className="flex items-start">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
              <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 text-red-600" aria-hidden />
            </div>
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Need urgent CCTV or security system support?
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                CCTV not recording? DVR / NVR offline? Camera replacement? Fire alarm fault? We respond the same day across Pune.
              </p>
              <ul className="text-sm text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 mb-5">
                <li>• CCTV repair &amp; troubleshooting</li>
                <li>• Camera replacement</li>
                <li>• DVR / NVR fault fix</li>
                <li>• Hard disk replacement</li>
                <li>• Fire alarm fault response</li>
                <li>• Biometric / access control fix</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={buildTelLink()}
                  onClick={() => trackEvent('phone_call', { source: `${context}` })}
                  className="inline-flex items-center justify-center bg-red-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" aria-hidden />
                  Call {SITE.phoneDisplay}
                </a>
                <a
                  href={buildWhatsAppLink('Urgent: I need same-day support for my security system. Please call back.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', { source: `${context}` })}
                  className="inline-flex items-center justify-center bg-green-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" aria-hidden />
                  WhatsApp us now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
