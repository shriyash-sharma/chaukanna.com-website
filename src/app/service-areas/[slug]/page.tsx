import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTAButtons from '@/components/CTAButtons';
import FAQ from '@/components/FAQ';
import EmergencyCTA from '@/components/EmergencyCTA';
import PageTracker from '@/components/PageTracker';
import { SERVICE_AREAS, getServiceAreaBySlug } from '@/data/serviceAreas';
import { services } from '@/data/services';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICE_AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) {
    return buildMetadata({
      title: 'Area not found',
      description: 'This service area is not listed.',
      path: `/service-areas/${slug}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: `CCTV, Fire Alarm & Smart Home Services in ${area.fullName}`,
    description: `Chaukanna provides ${area.popularServices.length} services in ${area.fullName}. ${area.hero}`,
    path: `/service-areas/${area.slug}`,
    keywords: [
      `CCTV ${area.city}`,
      `CCTV installation ${area.city}`,
      `fire alarm ${area.city}`,
      `smart home ${area.city}`,
      `security systems ${area.city}`,
    ].join(', '),
  });
}

export default async function ServiceAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) notFound();

  const popular = services.filter((s) => area.popularServices.includes(s.slug));

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <PageTracker
        event="service_area_visit"
        params={{ slug: area.slug, city: area.city }}
      />
      <Breadcrumbs
        items={[
          { name: 'Service Areas', path: '/service-areas' },
          { name: area.fullName, path: `/service-areas/${area.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <div className="max-w-3xl">
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <MapPin className="w-4 h-4 mr-1" aria-hidden />
              {area.fullName}{area.pincode ? ` · PIN ${area.pincode}` : ''}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {area.hero}
            </h1>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              {area.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <CTAButtons source={`service_area_${area.slug}_hero`} variant="primary" />
            <p className="text-sm text-gray-500 mt-3">
              Or{' '}
              <Link href="/book-site-survey" className="underline text-orange-700 font-medium">
                book a free site survey
              </Link>{' '}
              in {area.city}.
            </p>
          </div>
        </div>
      </section>

      {/* Customer profile + response */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="font-bold text-gray-900 mb-2">Who we typically serve in {area.city}</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{area.customerProfile}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="font-bold text-gray-900 mb-2 flex items-center">
              <Clock className="w-5 h-5 text-orange-600 mr-2" aria-hidden />
              Typical response time
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">{area.responseTime}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 pb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Services we offer in {area.city}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {popular.map((s) => (
            <Link
              key={s.id}
              href={s.slug}
              className="group bg-white rounded-xl border border-gray-200 hover:border-orange-400 p-5 transition-colors"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-700 transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{s.description}</p>
              <span className="text-orange-700 text-sm font-semibold inline-flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Local context + landmarks */}
      <section className="container mx-auto px-4 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="font-bold text-gray-900 mb-3">Local install context</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{area.localContext}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="font-bold text-gray-900 mb-3">Areas &amp; landmarks covered</h2>
            <div className="flex flex-wrap gap-2">
              {area.landmarks.map((l) => (
                <span
                  key={l}
                  className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 pb-10">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Why customers in {area.city} choose us</h2>
          <ul className="space-y-2">
            {area.benefits.map((b) => (
              <li key={b} className="flex items-start text-gray-700">
                <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" aria-hidden />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-10">
        <EmergencyCTA variant="compact" context={`service_area_${area.slug}`} />
      </div>

      <section className="container mx-auto px-4 pb-10 max-w-3xl">
        <FAQ items={area.faqs} title={`${area.city} — frequently asked questions`} schemaId={`area-faq-${area.slug}`} />
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-orange-600 text-white rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to start in {area.city}?</h2>
          <p className="text-orange-100 mb-5 max-w-xl mx-auto text-sm sm:text-base">
            WhatsApp us your address — we&apos;ll do a free survey and share a written quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/book-site-survey"
              className="bg-white text-orange-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book free site survey
            </Link>
            <CTAButtons source={`service_area_${area.slug}_footer`} variant="inverted" />
          </div>
        </div>
      </section>
    </div>
  );
}
