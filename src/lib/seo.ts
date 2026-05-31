/**
 * SEO helpers: JSON-LD schema generators + shared metadata builders.
 *
 * Everything routes through the single brand source-of-truth in `branding.ts`,
 * so a page only needs to call `buildMetadata({ title, description, path })`
 * and the rest (canonical, OG, Twitter, robots) is consistent site-wide.
 */
import type { Metadata } from 'next';
import {
  SITE,
  BRAND_ASSETS,
  SOCIAL_SHARE_IMAGE,
  STRUCTURED_DATA_LOGO,
} from './branding';

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string; // e.g. "/cctv-installation"
  keywords?: string;
  image?: string; // absolute or root-relative
  type?: 'website' | 'article';
  publishedTime?: string;
  noIndex?: boolean;
};

export function abs(path: string): string {
  if (!path) return SITE.url;
  if (path.startsWith('http')) return path;
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
}

export function buildMetadata(input: BuildMetadataInput): Metadata {
  const url = abs(input.path);
  const image = input.image ? abs(input.image) : SOCIAL_SHARE_IMAGE.url;

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: { canonical: url },
    robots: input.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    openGraph: {
      type: input.type || 'website',
      locale: SITE.locale,
      siteName: SITE.name,
      url,
      title: input.title,
      description: input.description,
      images: [
        {
          url: image,
          width: input.image ? 1200 : SOCIAL_SHARE_IMAGE.width,
          height: input.image ? 630 : SOCIAL_SHARE_IMAGE.height,
          alt: input.title,
        },
      ],
      ...(input.type === 'article' && input.publishedTime
        ? { publishedTime: input.publishedTime }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: [image],
    },
  };
}

/* ------------------------------------------------------------------ */
/* Schema.org JSON-LD generators                                       */
/* ------------------------------------------------------------------ */

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.url}/#localbusiness`,
  name: SITE.legalName,
  alternateName: SITE.name,
  image: STRUCTURED_DATA_LOGO,
  logo: STRUCTURED_DATA_LOGO,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: '₹₹',
  description: SITE.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.5204,
    longitude: 73.8567,
  },
  areaServed: [
    'Pune',
    'Pimpri-Chinchwad',
    'Wagholi',
    'Kharadi',
    'Hadapsar',
    'Hinjewadi',
    'Viman Nagar',
    'Baner',
    'Wakad',
    'Aundh',
    'Kothrud',
    'Magarpatta',
  ].map((name) => ({ '@type': 'City', name })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '10:00',
      closes: '17:00',
    },
  ],
  sameAs: [] as string[],
};

export function buildServiceSchema(args: {
  name: string;
  description: string;
  slug: string;
  serviceType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: args.serviceType,
    name: args.name,
    description: args.description,
    provider: { '@id': `${SITE.url}/#localbusiness` },
    areaServed: { '@type': 'City', name: 'Pune' },
    url: abs(args.slug),
    image: STRUCTURED_DATA_LOGO,
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function buildArticleSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  author: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image ? abs(post.image) : STRUCTURED_DATA_LOGO,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: SITE.legalName,
      logo: { '@type': 'ImageObject', url: STRUCTURED_DATA_LOGO },
    },
    mainEntityOfPage: abs(`/blog/${post.slug}`),
  };
}

export const BRAND_FAVICON = BRAND_ASSETS.favicon;
