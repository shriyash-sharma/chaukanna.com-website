/**
 * Service catalogue mapping for SEO schema + FAQ topic linkage.
 * Keep slugs aligned with /src/data/services.ts and folder names under /src/app.
 */
import type { FaqTopic } from '@/data/faqs';

export interface ServiceCatalogEntry {
  slug: string; // route path
  name: string;
  description: string;
  serviceType: string;
  faqTopic: FaqTopic;
  faqTitle?: string;
}

export const SERVICE_CATALOG: ServiceCatalogEntry[] = [
  {
    slug: '/cctv-installation',
    name: 'CCTV Installation in Pune',
    description:
      'Professional CCTV camera installation for homes, shops, offices and societies across Pune. HD, 4K, IP and analog setups with mobile app monitoring.',
    serviceType: 'CCTV Installation',
    faqTopic: 'cctv',
    faqTitle: 'CCTV Installation FAQs',
  },
  {
    slug: '/cctv-amc',
    name: 'CCTV AMC (Annual Maintenance Contract) in Pune',
    description:
      'Quarterly health checks, lens cleaning, firmware updates, HDD health tests, and priority same-day response for CCTV systems across Pune.',
    serviceType: 'CCTV Annual Maintenance',
    faqTopic: 'amc',
    faqTitle: 'AMC & Maintenance FAQs',
  },
  {
    slug: '/fire-alarm-systems',
    name: 'Fire Alarm Systems in Pune',
    description:
      'Conventional and addressable fire alarm system design, installation, and AMC. Compliant with NBC Part IV and IS 2189 for offices, schools, and warehouses.',
    serviceType: 'Fire Alarm Installation',
    faqTopic: 'fire-alarm',
    faqTitle: 'Fire Alarm FAQs',
  },
  {
    slug: '/biometric-attendance',
    name: 'Biometric Attendance Systems in Pune',
    description:
      'Fingerprint, face recognition, and RFID attendance systems with cloud HRMS integration for offices, schools and factories across Pune.',
    serviceType: 'Biometric Attendance',
    faqTopic: 'biometric',
    faqTitle: 'Biometric Attendance FAQs',
  },
  {
    slug: '/repair-maintenance',
    name: 'CCTV & Security System Repair / Maintenance in Pune',
    description:
      'Same-day pickup, on-site diagnostics, and repair for CCTV, fire alarm, biometric, and access control systems — even if installed by another vendor.',
    serviceType: 'Security System Repair',
    faqTopic: 'amc',
    faqTitle: 'Repair & Maintenance FAQs',
  },
  {
    slug: '/video-door-phone',
    name: 'Video Door Phone (VDP) Installation in Pune',
    description:
      'Wired, smart Wi-Fi, and hybrid video door phone installation with optional smart lock integration for homes and apartments.',
    serviceType: 'Video Door Phone Installation',
    faqTopic: 'video-door-phone',
    faqTitle: 'Video Door Phone FAQs',
  },
  {
    slug: '/smart-home-automation',
    name: 'Smart Home Automation in Pune',
    description:
      'Smart switches, curtain motors, smart locks, AC IR blasters and full multi-room automation with Alexa and Google Assistant support.',
    serviceType: 'Smart Home Automation',
    faqTopic: 'smart-home',
    faqTitle: 'Smart Home FAQs',
  },
  {
    slug: '/access-control-systems',
    name: 'Access Control Systems in Pune',
    description:
      'Card, PIN, biometric, and mobile credential access control for single doors to multi-floor offices, with cloud-managed audit logs.',
    serviceType: 'Access Control Installation',
    faqTopic: 'access-control',
    faqTitle: 'Access Control FAQs',
  },
  {
    slug: '/public-address-systems',
    name: 'Public Address (PA) Systems in Pune',
    description:
      'Public address system design and installation for schools, offices, warehouses, and houses of worship across Pune.',
    serviceType: 'Public Address System Installation',
    faqTopic: 'general',
    faqTitle: 'PA System FAQs',
  },
];

export function getServiceCatalogEntry(
  slug: string,
): ServiceCatalogEntry | undefined {
  return SERVICE_CATALOG.find((s) => s.slug === slug);
}
