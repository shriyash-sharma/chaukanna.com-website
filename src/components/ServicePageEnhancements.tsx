import Script from 'next/script';
import FAQ from '@/components/FAQ';
import PageTracker from '@/components/PageTracker';
import { buildServiceSchema, buildFAQSchema } from '@/lib/seo';
import { getServiceCatalogEntry } from '@/data/serviceCatalog';
import { getFaqsByTopic } from '@/data/faqs';

interface ServicePageEnhancementsProps {
  /** Route slug starting with '/' — e.g. "/cctv-installation". */
  slug: string;
}

/**
 * Drop-in enhancer for each canonical service page. Adds:
 *  - Service JSON-LD schema
 *  - Topic-specific FAQ section (with embedded FAQPage JSON-LD)
 *  - GA4 `service_page_visit` event firing once on mount
 *
 * Renders nothing visual if the slug is not in the catalogue.
 */
export default function ServicePageEnhancements({
  slug,
}: ServicePageEnhancementsProps) {
  const entry = getServiceCatalogEntry(slug);
  if (!entry) return null;

  const faqs = getFaqsByTopic(entry.faqTopic);
  const serviceSchema = buildServiceSchema({
    name: entry.name,
    description: entry.description,
    slug: entry.slug,
    serviceType: entry.serviceType,
  });

  return (
    <>
      <Script
        id={`service-schema-${entry.slug.replace(/\W+/g, '-')}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageTracker
        event="service_page_visit"
        params={{ slug: entry.slug, service: entry.serviceType }}
      />
      {faqs.length > 0 && (
        <FAQ
          items={faqs.map(({ question, answer }) => ({ question, answer }))}
          title={entry.faqTitle || 'Frequently Asked Questions'}
          schemaId={`faq-${entry.slug.replace(/\W+/g, '-')}`}
        />
      )}
    </>
  );
}
