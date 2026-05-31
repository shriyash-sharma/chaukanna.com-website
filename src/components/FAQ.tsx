'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Script from 'next/script';
import { buildFAQSchema } from '@/lib/seo';

export type FAQItem = { question: string; answer: string };

export default function FAQ({
  items,
  title = 'Frequently Asked Questions',
  schemaId = 'faq-jsonld',
}: {
  items: FAQItem[];
  title?: string;
  schemaId?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items?.length) return null;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
            {title}
          </h2>
          <div className="space-y-3">
            {items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-orange-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-orange-600 flex-shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden
                    />
                  </button>
                  {isOpen && (
                    <div
                      id={`faq-panel-${i}`}
                      className="px-5 pb-5 text-gray-700 leading-relaxed"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <Script
          id={schemaId}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildFAQSchema(items)),
          }}
        />
      </div>
    </section>
  );
}
