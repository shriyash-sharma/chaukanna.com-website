import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { buildMetadata, buildFAQSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTAButtons from '@/components/CTAButtons';
import EmergencyCTA from '@/components/EmergencyCTA';
import { SITE } from '@/lib/branding';

export const metadata: Metadata = buildMetadata({
  title: 'CCTV Installation Guide (2026): Cameras, Placement, Cost',
  description:
    'Complete CCTV installation guide for homes and offices: camera types, placement strategy, storage planning, wiring standards, and maintenance checklist.',
  path: '/cctv-installation-guide',
  keywords:
    'CCTV installation guide, camera placement guide, CCTV cost Pune, home office CCTV setup',
  type: 'article',
});

const faqs = [
  {
    question: 'Which is better for new setup: IP cameras or analog HD?',
    answer:
      'For most new installations, IP/PoE systems offer better scalability and image quality. Analog HD remains cost-effective for small budgets and simple home setups.',
  },
  {
    question: 'How much storage is required for 30 days recording?',
    answer:
      'Storage depends on camera count, resolution, fps, and compression. A 4-camera HD setup may need around 1TB to 2TB for 30-day retention; larger 4K setups need significantly more.',
  },
  {
    question: 'What is the most common CCTV installation mistake?',
    answer:
      'Poor camera angle selection. Many setups capture movement but fail to capture useful facial or number-plate detail due to wrong height, lens choice, or backlight glare.',
  },
  {
    question: 'Should CCTV be integrated with alarm or access control?',
    answer:
      'Yes, where possible. Integration improves incident response by connecting visual evidence with door events, intrusion alerts, and visitor logs.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'CCTV Installation Guide (2026): Cameras, Placement, Cost',
  description:
    'Step-by-step CCTV installation guide covering camera selection, layout planning, storage, and maintenance.',
  author: {
    '@type': 'Organization',
    name: SITE.legalName,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE.legalName,
    url: SITE.url,
  },
  mainEntityOfPage: `${SITE.url}/cctv-installation-guide`,
};

export default function CCTVInstallationGuidePage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <Breadcrumbs items={[{ name: 'CCTV Installation Guide', path: '/cctv-installation-guide' }]} />

      <Script
        id="cctv-installation-guide-faq-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(faqs)) }}
      />
      <Script
        id="cctv-installation-guide-article-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              CCTV installation guide: planning, setup, and long-term reliability
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              This guide helps you choose the right CCTV architecture, place cameras correctly, estimate cost,
              and avoid the mistakes that make footage unusable.
            </p>
            <CTAButtons source="cctv_installation_guide_hero" />
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 space-y-7">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Define objective before selecting hardware</h2>
            <p className="text-gray-700 leading-relaxed">
              Start with outcomes: theft deterrence, incident evidence, employee safety, visitor control, or all of them.
              A residential setup and an office setup have different priorities. Homes focus on entry and perimeter.
              Businesses often need cash counter detail, stock movement visibility, and after-hours zone monitoring.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              If you need implementation support, use
              {' '}
              <Link href="/book-site-survey" className="text-orange-700 hover:text-orange-800 font-medium">
                free site survey booking
              </Link>
              {' '}
              to map exact camera points.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Choose camera type by use case</h2>
            <p className="text-gray-700 leading-relaxed">
              Dome cameras suit indoor common areas and apartment corridors. Bullet cameras work well outdoors with
              longer directional coverage. Turret options are useful for low-light clarity with fewer reflection issues.
              PTZ should be chosen only when active monitoring workflow exists; otherwise fixed coverage is often better.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Keep at least one camera dedicated to each critical decision point: main entrance, parking approach,
              payment zone, or restricted door.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Plan placement for detail, not just coverage</h2>
            <p className="text-gray-700 leading-relaxed">
              A common mistake is mounting all cameras too high with ultra-wide view. This creates broad visibility but
              weak identification detail. For high-value points, place one camera at a tighter angle so you can read
              faces or plates. Avoid direct backlight and verify night performance from actual installed height.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              For residential setups, combine this with
              {' '}
              <Link href="/home-security-tips" className="text-orange-700 hover:text-orange-800 font-medium">
                home security planning
              </Link>
              {' '}
              to cover doors, visitors, and family safety workflows.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Select recording architecture: DVR/NVR/cloud hybrid</h2>
            <p className="text-gray-700 leading-relaxed">
              DVR with analog HD cameras is budget-friendly for small sites. NVR with IP/PoE cameras gives better
              scalability and cleaner cabling for medium-to-large properties. Hybrid or cloud backup is useful for
              critical footage access when local hardware fails.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Define retention target first (15, 30, or 45 days), then size storage. This prevents under-provisioning
              and constant overwriting.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Installation quality standards that matter</h2>
            <p className="text-gray-700 leading-relaxed">
              Use proper cable routes and weather protection for outdoor lines. Label channels and keep a simple handover
              document with camera map, recorder credentials, playback steps, and support contacts. Test playback on
              local display and mobile app before sign-off.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              For commercial projects, integrate with
              {' '}
              <Link href="/access-control-systems" className="text-orange-700 hover:text-orange-800 font-medium">
                access control
              </Link>
              {' '}
              and
              {' '}
              <Link href="/fire-alarm-systems" className="text-orange-700 hover:text-orange-800 font-medium">
                fire safety systems
              </Link>
              {' '}
              where needed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Cost planning and lifecycle maintenance</h2>
            <p className="text-gray-700 leading-relaxed">
              Initial installation cost is only part of ownership. Budget for annual maintenance, storage health,
              firmware updates, and occasional camera replacements. Systems without maintenance often fail during
              critical incidents, which defeats the purpose of CCTV investment.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              To estimate budget quickly, use our
              {' '}
              <Link href="/cctv-cost-calculator" className="text-orange-700 hover:text-orange-800 font-medium">
                CCTV cost calculator
              </Link>
              {' '}
              and compare with an on-site proposal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{faq.question}</h3>
                  <p className="text-sm text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>

      <section className="container mx-auto px-4 py-2 max-w-4xl">
        <EmergencyCTA variant="compact" />
      </section>
    </div>
  );
}
