import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { buildMetadata, buildFAQSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTAButtons from '@/components/CTAButtons';
import EmergencyCTA from '@/components/EmergencyCTA';
import FaqExplorer from '@/components/FaqExplorer';
import { KNOWLEDGE_FAQS, FAQ_TOPICS } from '@/data/faqs';

export const metadata: Metadata = buildMetadata({
  title: 'FAQs — CCTV, Fire Alarm, Smart Home & Security Systems (Pune)',
  description: `Answers to ${KNOWLEDGE_FAQS.length}+ common questions about CCTV, fire alarm, smart home, biometric attendance, access control, video door phone, and AMC in Pune.`,
  path: '/faqs',
});

export default function FaqsPage() {
  const faqSchema = buildFAQSchema(
    KNOWLEDGE_FAQS.map((f) => ({ question: f.question, answer: f.answer })),
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <Breadcrumbs items={[{ name: 'FAQs', path: '/faqs' }]} />

      <Script
        id="faqs-hub-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-5">
              {KNOWLEDGE_FAQS.length}+ answers covering CCTV, fire alarm, smart home, biometric attendance, access control and AMC — all India-specific and Pune-grounded.
            </p>
            <CTAButtons source="faqs_hero" />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <FaqExplorer />
      </div>

      {/* Topic shortcuts to service pages */}
      <section className="bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Explore by topic</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {FAQ_TOPICS.map((t) => (
              <Link
                key={t.value}
                href={`/faqs#${t.value}`}
                className="bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-xl px-4 py-3 text-sm font-semibold text-orange-800 text-center transition-colors"
              >
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <EmergencyCTA variant="compact" />
      </section>
    </div>
  );
}
