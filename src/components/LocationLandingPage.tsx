import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, MapPin, Clock, Shield } from 'lucide-react';
import { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { getLocationBySlug } from '@/data/locations';
import {
  buildMetadata,
  buildServiceSchema,
  buildBreadcrumbSchema,
} from '@/lib/seo';
import { BRAND_ASSETS, SITE } from '@/lib/branding';
import CTAButtons from '@/components/CTAButtons';
import FAQ from '@/components/FAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageTracker from '@/components/PageTracker';

/**
 * Shared template for every location landing page.
 * Each /cctv-installation-<city>/page.tsx file simply imports this and passes a slug.
 */
export function buildLocationMetadata(slug: string): Metadata {
  const loc = getLocationBySlug(slug);
  if (!loc) return {};

  const title = `${loc.service} in ${loc.city} | Free Quote | Chaukanna`;
  const description = `Professional ${loc.service.toLowerCase()} in ${loc.fullName}. Same-day service, genuine equipment, free site survey. Call +91 88886 96046 or get a WhatsApp quote in 60 seconds.`;

  return buildMetadata({
    title,
    description,
    path: loc.slug,
    keywords: `${loc.service} ${loc.city}, ${loc.service} ${loc.fullName}, ${loc.service.toLowerCase()} near me, security system ${loc.city}`,
  });
}

export default function LocationLandingPage({ slug }: { slug: string }) {
  const loc = getLocationBySlug(slug);
  if (!loc) notFound();

  const crumbs = [
    { name: 'Services', path: '/services' },
    { name: `${loc.service} in ${loc.city}`, path: loc.slug },
  ];

  const serviceSchema = buildServiceSchema({
    name: `${loc.service} in ${loc.city}`,
    description: loc.intro.split('\n')[0],
    slug: loc.slug,
    serviceType: loc.service,
  });

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-0">
      <PageTracker
        event="location_page_visit"
        params={{ slug: loc.slug, city: loc.city, service: loc.service }}
      />
      <Breadcrumbs items={crumbs} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4 shadow-sm">
                <MapPin className="w-4 h-4" aria-hidden />
                Serving {loc.fullName}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
                {loc.hero}
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {loc.intro.split('\n\n')[0]}
              </p>
              <CTAButtons
                source={`location_hero_${loc.city.toLowerCase().replace(/\s+/g, '_')}`}
                whatsappMessage={`Hi, I need a quote for ${loc.service} in ${loc.city}.`}
              />
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-600" aria-hidden />
                  {loc.responseTime}
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-orange-600" aria-hidden />
                  Genuine equipment + warranty
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <Image
                  src={BRAND_ASSETS.logoSvg}
                  alt={`${SITE.legalName} logo`}
                  width={80}
                  height={80}
                />
                <h2 className="text-xl font-bold text-gray-900 mt-3 mb-2">
                  Why customers in {loc.city} choose Chaukanna
                </h2>
                <ul className="space-y-2">
                  {loc.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" aria-hidden />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO LONG-FORM */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-5 text-gray-700 leading-relaxed">
            {loc.intro
              .split('\n\n')
              .slice(1)
              .map((p, i) => (
                <p key={i} className="text-base sm:text-lg">
                  {p}
                </p>
              ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS GRID (mobile-friendly version of hero card) */}
      <section className="lg:hidden py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Why customers in {loc.city} choose Chaukanna
          </h2>
          <ul className="space-y-3">
            {loc.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 bg-white p-3 rounded-lg">
                <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" aria-hidden />
                <span className="text-gray-800">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AREAS COVERED */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Areas we cover around {loc.city}
            </h2>
            <div className="flex flex-wrap gap-2">
              {loc.neighbourhoods.map((n) => (
                <span
                  key={n}
                  className="bg-orange-50 text-orange-800 px-3 py-1.5 rounded-full text-sm border border-orange-100"
                >
                  {n}
                </span>
              ))}
            </div>
            <p className="mt-6 text-gray-600">
              Not sure if we cover your address? Just send your pincode on WhatsApp
              and we will confirm within minutes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={loc.faqs}
        title={`${loc.service} in ${loc.city} — FAQs`}
        schemaId={`faq-${slug}`}
      />

      {/* FINAL CTA */}
      <section className="py-16 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to secure your property in {loc.city}?
          </h2>
          <p className="text-lg text-orange-100 mb-7 max-w-2xl mx-auto">
            Get a free site survey and an honest quote, with no obligation.
          </p>
          <div className="flex justify-center">
            <CTAButtons
              source={`location_footer_${loc.city.toLowerCase().replace(/\s+/g, '_')}`}
              whatsappMessage={`Hi, I need a quote for ${loc.service} in ${loc.city}.`}
              variant="inverted"
            />
          </div>
          <p className="mt-6 text-orange-100 text-sm">
            Or browse our{' '}
            <Link href="/services" className="underline hover:text-white">
              full list of services
            </Link>
            .
          </p>
        </div>
      </section>

      <Script
        id={`service-schema-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id={`breadcrumb-schema-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([{ name: 'Home', path: '/' }, ...crumbs]),
          ),
        }}
      />
    </div>
  );
}
