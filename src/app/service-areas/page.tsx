import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTAButtons from '@/components/CTAButtons';
import { SERVICE_AREAS } from '@/data/serviceAreas';

export const metadata: Metadata = buildMetadata({
  title: 'Service Areas — CCTV & Security Services Across Pune',
  description:
    'Chaukanna serves Pune, Wagholi, Kharadi, Hadapsar, Viman Nagar, Baner, Wakad, Hinjewadi, Pimpri, Chinchwad, Mundhwa, Keshavnagar, Lohegaon, Magarpatta and Koregaon Park.',
  path: '/service-areas',
});

export default function ServiceAreasIndex() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <Breadcrumbs items={[{ name: 'Service Areas', path: '/service-areas' }]} />

      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Service areas across Pune &amp; PCMC
            </h1>
            <p className="text-base sm:text-lg text-gray-700">
              We operate out of Pune with a dedicated technician base. Pick your area for local service info, typical install patterns and customer FAQs.
            </p>
            <div className="mt-6">
              <CTAButtons source="service_areas_index" variant="compact" />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICE_AREAS.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="group bg-white rounded-xl border border-gray-200 hover:border-orange-400 hover:shadow-md transition-all p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-600" aria-hidden />
                </div>
                {area.pincode && (
                  <span className="text-xs text-gray-500">PIN {area.pincode}</span>
                )}
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-700 transition-colors">
                {area.fullName}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-2 mb-4">{area.hero}</p>
              <span className="inline-flex items-center text-sm font-semibold text-orange-700 group-hover:text-orange-800">
                Local info <ArrowRight className="w-4 h-4 ml-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
