import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import SiteSurveyForm from '@/components/SiteSurveyForm';
import CTAButtons from '@/components/CTAButtons';
import { CalendarCheck, ShieldCheck, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'Book a Free Site Survey — CCTV, Fire Alarm, Smart Home (Pune)',
  description:
    'Book a free, no-obligation site survey from Chaukanna for CCTV, fire alarm, smart home, biometric or access control. We visit your address, share a written quote — no upfront payment.',
  path: '/book-site-survey',
});

const trust = [
  {
    icon: CalendarCheck,
    label: 'Free survey',
    text: 'No visit charge across PMC and PCMC.',
  },
  {
    icon: ShieldCheck,
    label: 'No obligation',
    text: 'Get the quote first. Decide later.',
  },
  {
    icon: Clock,
    label: 'Within 24 hours',
    text: 'Most surveys confirmed same day.',
  },
  {
    icon: MapPin,
    label: '15+ Pune areas',
    text: 'Local technicians, local response.',
  },
];

export default function BookSiteSurveyPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <Breadcrumbs items={[{ name: 'Book Free Site Survey', path: '/book-site-survey' }]} />

      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Book a free site survey
            </h1>
            <p className="text-base sm:text-lg text-gray-700">
              Tell us your address and what you need. A technician will visit, measure angles, photograph install points and share a written quote with model numbers. No charge, no obligation, no follow-up calls.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <SiteSurveyForm />
          </div>
          <aside className="lg:col-span-2 space-y-5">
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <h2 className="font-bold text-gray-900 mb-3">Prefer to skip the form?</h2>
              <p className="text-sm text-gray-700 mb-3">
                Just WhatsApp us with your address and a few photos. We&apos;ll do the rest.
              </p>
              <CTAButtons source="site_survey_aside" variant="inverted" />
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-4">
              {trust.map((t) => (
                <div key={t.label} className="flex items-start">
                  <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0 mr-3">
                    <t.icon className="w-5 h-5 text-orange-600" aria-hidden />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.label}</p>
                    <p className="text-sm text-gray-600">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
