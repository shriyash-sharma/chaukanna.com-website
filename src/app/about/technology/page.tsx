import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Cpu, Shield, Workflow, Rocket, CheckCircle2, ExternalLink } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTAButtons from '@/components/CTAButtons';
import { SITE } from '@/lib/branding';

export const metadata: Metadata = buildMetadata({
  title: 'Engineering & Innovation Behind Chaukanna',
  description:
    'Explore the technology stack and engineering approach behind Chaukanna: Next.js, Supabase, resilient lead capture, performance-first architecture, and automation initiatives.',
  path: '/about/technology',
  keywords:
    'security platform engineering, CCTV technology platform, Next.js security website, Shriyash Sharma engineering',
});

const techPillars = [
  {
    icon: Cpu,
    title: 'Modern Web Platform',
    points: [
      'Built on Next.js + TypeScript for reliable SSR/SSG performance.',
      'Mobile-first UI designed for customers and field teams.',
      'Structured metadata and schema baked into every major page.',
    ],
  },
  {
    icon: Shield,
    title: 'Reliability & Security',
    points: [
      'Lead-capture APIs are designed to avoid dropped enquiries.',
      'Production traffic runs on HTTPS with secure third-party integrations.',
      'Operational fallbacks are in place for critical customer flows.',
    ],
  },
  {
    icon: Workflow,
    title: 'Automation-First Workflows',
    points: [
      'Form submissions route into structured records and email alerts.',
      'Tracking instrumentation supports campaign and channel analysis.',
      'Reusable components reduce errors while shipping faster updates.',
    ],
  },
  {
    icon: Rocket,
    title: 'Performance & SEO Engineering',
    points: [
      'Core pages are optimized for fast mobile loading and crawlability.',
      'JSON-LD schemas are rendered for better search understanding.',
      'Sitemap and robots directives are maintained for index health.',
    ],
  },
];

const stack = [
  'Next.js 16 + React 19 + TypeScript',
  'Tailwind CSS for scalable UI system',
  'Supabase (PostgreSQL) for lead data workflows',
  'Resend for transactional lead-notification emails',
  'Vercel hosting with production deployment pipeline',
  'GA4 + Search Console integrations for growth tracking',
];

const engineeringSchema = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Engineering & Innovation Behind Chaukanna',
  description:
    'Architecture, platform engineering, and automation strategy behind Chaukanna security services website.',
  author: {
    '@type': 'Person',
    name: 'Shriyash Sharma',
    url: 'https://shriyashsharma.com/',
  },
  publisher: {
    '@type': 'Organization',
    name: SITE.legalName,
    url: SITE.url,
  },
  mainEntityOfPage: `${SITE.url}/about/technology`,
};

export default function AboutTechnologyPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <Breadcrumbs
        items={[
          { name: 'About', path: '/about' },
          { name: 'Technology', path: '/about/technology' },
        ]}
      />

      <Script
        id="about-technology-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(engineeringSchema) }}
      />

      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Engineering & innovation behind Chaukanna
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Chaukanna is built as a performance-first service platform for local security operations: fast pages,
              resilient lead flow, and practical automation that supports real on-ground work in Pune.
            </p>
            <CTAButtons source="about_technology_hero" />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {techPillars.map((pillar) => (
            <article key={pillar.title} className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <pillar.icon className="w-5 h-5 text-orange-600" aria-hidden />
                <h2 className="text-xl font-bold text-gray-900">{pillar.title}</h2>
              </div>
              <ul className="space-y-2">
                {pillar.points.map((point) => (
                  <li key={point} className="text-sm text-gray-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-10">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology stack</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {stack.map((item) => (
              <li key={item} className="text-sm text-gray-700">• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Technology leadership</h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            Technology and platform engineering for Chaukanna are led by Shriyash Sharma, with focus on scalable
            architecture, automation-ready systems, and measurable business outcomes.
          </p>
          <a
            href="https://shriyashsharma.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-700 hover:text-orange-800 font-semibold"
          >
            Visit Shriyash Sharma portfolio
            <ExternalLink className="w-4 h-4" aria-hidden />
          </a>
          <div className="mt-4 text-sm text-gray-700">
            Also explore:
            {' '}
            <Link href="/projects" className="text-orange-700 hover:text-orange-800 font-medium">
              project showcases
            </Link>
            {' '}
            and
            {' '}
            <Link href="/blog" className="text-orange-700 hover:text-orange-800 font-medium">
              technical guides
            </Link>
            .
          </div>
        </div>
      </section>
    </div>
  );
}
