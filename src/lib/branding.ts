/**
 * Centralized branding configuration for Chaukanna.
 *
 * All logo, favicon, PWA, and social-share asset paths live here so the rest
 * of the app references a single source of truth. The files themselves live
 * in `/public/icons/`.
 */

export const SITE = {
  name: 'Chaukanna',
  legalName: 'Chaukanna By Shri CCTV & Home Automation Services',
  tagline: 'By Shri CCTV & Home Automation Services',
  description:
    'Professional CCTV installation, AMC, fire alarm systems, biometric attendance, and smart home automation services in Pune. Trusted by 5000+ customers.',
  shortDescription:
    'Professional CCTV installation, AMC, fire alarm systems, biometric attendance, and smart home automation services in Pune.',
  url: 'https://chaukanna.com',
  locale: 'en_IN',
  themeColor: '#f97316',
  backgroundColor: '#ffffff',
  email: 'info@chaukanna.com',
  phone: '+918888696046',
  phoneDisplay: '+91 88886 96046',
  address: {
    street: 'Shop No 13, Satya Plaza Building',
    locality: 'Pune',
    region: 'Maharashtra',
    postalCode: '412207',
    country: 'IN',
  },
} as const;

/**
 * All branding image paths are derived from `/public/icons/`.
 * Add new sizes here whenever the assets in /public/icons change.
 */
const ICONS_BASE = '/icons';

export const BRAND_ASSETS = {
  favicon: `${ICONS_BASE}/favicon.ico`,
  logoSvg: `${ICONS_BASE}/chaukanna-logo.svg`,
  png: {
    16: `${ICONS_BASE}/chaukanna-16x16.png`,
    32: `${ICONS_BASE}/chaukanna-32x32.png`,
    48: `${ICONS_BASE}/chaukanna-48x48.png`,
    64: `${ICONS_BASE}/chaukanna-64x64.png`,
    128: `${ICONS_BASE}/chaukanna-128x128.png`,
    180: `${ICONS_BASE}/chaukanna-180x180.png`,
    192: `${ICONS_BASE}/chaukanna-192x192.png`,
    256: `${ICONS_BASE}/chaukanna-256x256.png`,
    512: `${ICONS_BASE}/chaukanna-512x512.png`,
    1024: `${ICONS_BASE}/chaukanna-1024x1024.png`,
  },
} as const;

/** Image used for Open Graph / Twitter cards / social sharing previews. */
export const SOCIAL_SHARE_IMAGE = {
  url: BRAND_ASSETS.png[1024],
  width: 1024,
  height: 1024,
  alt: `${SITE.legalName} logo`,
} as const;

/** Logo URL used inside schema.org structured data (absolute). */
export const STRUCTURED_DATA_LOGO = `${SITE.url}${BRAND_ASSETS.png[512]}`;

/**
 * Next.js Metadata `icons` block. Imported by `app/layout.tsx`.
 */
export const METADATA_ICONS = {
  icon: [
    { url: BRAND_ASSETS.favicon, sizes: 'any' },
    { url: BRAND_ASSETS.png[16], sizes: '16x16', type: 'image/png' },
    { url: BRAND_ASSETS.png[32], sizes: '32x32', type: 'image/png' },
    { url: BRAND_ASSETS.png[48], sizes: '48x48', type: 'image/png' },
    { url: BRAND_ASSETS.png[192], sizes: '192x192', type: 'image/png' },
    { url: BRAND_ASSETS.png[512], sizes: '512x512', type: 'image/png' },
    { url: BRAND_ASSETS.logoSvg, type: 'image/svg+xml' },
  ],
  apple: [
    { url: BRAND_ASSETS.png[180], sizes: '180x180', type: 'image/png' },
  ],
  shortcut: [BRAND_ASSETS.favicon],
  other: [
    {
      rel: 'mask-icon',
      url: BRAND_ASSETS.logoSvg,
      color: SITE.themeColor,
    },
  ],
} as const;

/**
 * Schema.org Organization JSON-LD payload.
 */
export const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.legalName,
  alternateName: SITE.name,
  url: SITE.url,
  logo: STRUCTURED_DATA_LOGO,
  image: STRUCTURED_DATA_LOGO,
  description: SITE.description,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  sameAs: [] as string[],
} as const;
