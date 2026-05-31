import type { Metadata } from 'next';
import Script from 'next/script';
import { buildMetadata, buildFAQSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import CalculatorClient from '@/components/CalculatorClient';
import FAQ from '@/components/FAQ';
import EmergencyCTA from '@/components/EmergencyCTA';

export const metadata: Metadata = buildMetadata({
  title: 'CCTV Cost Calculator — Estimate Your Install Price (Pune 2026)',
  description:
    'Free CCTV cost calculator for Pune. Pick property type, camera count, resolution and storage days — get an instant estimated price range with line-itemed breakdown.',
  path: '/cctv-cost-calculator',
  keywords:
    'CCTV cost calculator Pune, CCTV installation price estimator, CCTV pricing tool, CCTV budget calculator',
});

const faqs = [
  {
    question: 'Is this CCTV cost calculator accurate?',
    answer:
      'It uses real 2026 Pune installation prices for cameras, recorders, HDDs and labour. The range you see is a realistic min/max for a typical install. Final pricing depends on cabling routes, the brand you pick and any civil work needed — which is why we always confirm with a free site survey before invoicing.',
  },
  {
    question: 'Does the estimate include GST?',
    answer:
      'No — the range shown is the equipment + installation cost excluding 18% GST. Your final invoice will show GST separately.',
  },
  {
    question: 'What if I want 4K cameras only at the gate?',
    answer:
      'That’s usually the smartest choice. Pick 2MP in the calculator for an apples-to-apples baseline, then mention the 4K gate camera in your WhatsApp quote request — we’ll adjust the line item.',
  },
  {
    question: 'How fast can installation happen after I confirm?',
    answer:
      'For most addresses in Pune we install within 24–48 hours of quote confirmation. Same-day install is possible for confirmations received before 11 AM.',
  },
];

export default function CalculatorPage() {
  return (
    <>
      <Script
        id="calculator-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFAQSchema(faqs)),
        }}
      />
      <div className="bg-gray-50 min-h-screen pb-16">
        <Breadcrumbs items={[{ name: 'CCTV Cost Calculator', path: '/cctv-cost-calculator' }]} />

        <section className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-10 sm:py-14">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                CCTV cost calculator <span className="text-orange-600">(Pune 2026)</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700">
                Pick your property type, camera count, resolution and how many days of footage you want stored. We&apos;ll show a realistic, line-itemed cost range — and you can WhatsApp the result to us for a written quote.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-10">
          <CalculatorClient />
        </div>

        <div className="container mx-auto px-4 pb-10">
          <EmergencyCTA variant="compact" context="calculator" />
        </div>

        <section className="container mx-auto px-4 pb-10 max-w-3xl">
          <FAQ items={faqs} title="Calculator FAQs" schemaId="calculator-faq-display" />
        </section>
      </div>
    </>
  );
}
