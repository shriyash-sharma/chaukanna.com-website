import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { buildMetadata, buildFAQSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTAButtons from '@/components/CTAButtons';
import EmergencyCTA from '@/components/EmergencyCTA';
import { SITE } from '@/lib/branding';

export const metadata: Metadata = buildMetadata({
  title: 'Home Security Tips for Pune Homes (2026 Guide)',
  description:
    'Practical home security tips for Pune homeowners: CCTV placement, door security, fire alarms, visitor control, maintenance plans, and emergency readiness.',
  path: '/home-security-tips',
  keywords:
    'home security tips pune, home CCTV placement, residential security checklist, smart home security pune',
  type: 'article',
});

const faqs = [
  {
    question: 'How many CCTV cameras are enough for a typical 2BHK home?',
    answer:
      'Most 2BHK homes need 3 to 5 cameras: main entrance, living area near entry, parking/gate view, and one rear/balcony blind spot if present. Final count depends on access points and visibility requirements.',
  },
  {
    question: 'Do wireless cameras work well for home security?',
    answer:
      'Wireless cameras can work for light use, but for reliable 24x7 recording and fewer outages, wired or PoE setups are generally more stable, especially during monsoon and power fluctuations.',
  },
  {
    question: 'Should I install indoor cameras in private rooms?',
    answer:
      'For privacy and legal comfort, avoid private spaces. Focus on entry points, shared spaces, and perimeter zones. Use clear household consent policies if cameras capture helpers or staff activity.',
  },
  {
    question: 'How often should a home CCTV system be maintained?',
    answer:
      'At minimum, perform a monthly visual check and quarterly health check for playback, storage, and camera focus. Annual preventive service helps avoid sudden recorder or hard-disk failures.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Home Security Tips for Pune Homes (2026 Guide)',
  description:
    'Practical home security checklist for Pune homeowners with CCTV, access control, and emergency planning guidance.',
  author: {
    '@type': 'Organization',
    name: SITE.legalName,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE.legalName,
    url: SITE.url,
  },
  mainEntityOfPage: `${SITE.url}/home-security-tips`,
};

export default function HomeSecurityTipsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <Breadcrumbs items={[{ name: 'Home Security Tips', path: '/home-security-tips' }]} />

      <Script
        id="home-security-tips-faq-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(faqs)) }}
      />
      <Script
        id="home-security-tips-article-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Home security tips: a practical guide for Pune homeowners
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Good home security is not just buying cameras. It is planning visibility, controlling entry points,
              preparing for emergencies, and maintaining the system so it actually works when needed.
            </p>
            <CTAButtons source="home_security_tips_hero" />
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 space-y-7">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Start with entry points, not gadgets</h2>
            <p className="text-gray-700 leading-relaxed">
              The highest-risk zones in most homes are the main door, parking gate, side passage, and rear access.
              Before selecting camera models, map every entry and exit point. In apartment homes, include lift lobby and
              common corridor approach. In bungalows and row houses, include front gate, driveway, and back wall.
              This simple map often prevents over-buying indoor cameras while missing outdoor blind spots.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Place CCTV where incidents are actionable</h2>
            <p className="text-gray-700 leading-relaxed">
              A useful camera gives identifiable footage, not just movement. Position cameras at face height approach
              angles where possible, and avoid direct headlight glare on driveway views. At entrances, use one wide
              camera for context and one tighter frame for detail if budget allows. For apartment corridors, use
              discreet dome cameras with sufficient low-light capability.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              If you are comparing options, see
              {' '}
              <Link href="/cctv-installation-guide" className="text-orange-700 hover:text-orange-800 font-medium">
                CCTV Installation Guide
              </Link>
              {' '}
              and
              {' '}
              <Link href="/cctv-installation" className="text-orange-700 hover:text-orange-800 font-medium">
                CCTV Installation Services
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Strengthen door, visitor, and access workflow</h2>
            <p className="text-gray-700 leading-relaxed">
              Cameras alone do not stop unauthorized entry. Pair surveillance with access controls: quality locks,
              video door phone, and visitor verification habits. For families with elders or children at home during
              daytime, video door screening reduces risk from unknown visitors and delivery confusion.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              For apartment and villa setups, a
              {' '}
              <Link href="/video-door-phone" className="text-orange-700 hover:text-orange-800 font-medium">
                video door phone system
              </Link>
              {' '}
              plus entrance camera gives both convenience and safety.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Include fire safety in your home security plan</h2>
            <p className="text-gray-700 leading-relaxed">
              Home security should include life-safety, not only intrusion monitoring. At minimum, plan smoke detection
              near kitchen approach zones and electrical-heavy areas. For larger homes, integrate alarms so family
              members are alerted quickly in all floors or wings. Keep extinguishers accessible and train family members
              on basic response.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Related reading:
              {' '}
              <Link href="/fire-alarm-systems" className="text-orange-700 hover:text-orange-800 font-medium">
                Fire Alarm Systems
              </Link>
              {' '}
              and
              {' '}
              <Link href="/fire-safety-checklist" className="text-orange-700 hover:text-orange-800 font-medium">
                Fire Safety Checklist
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Plan recording, retention, and playback discipline</h2>
            <p className="text-gray-700 leading-relaxed">
              Many homes fail not because cameras are absent, but because recordings are unavailable when needed.
              Decide retention target first. For most homes, 15 to 30 days is practical. Ensure the recorder health is
              checked, timestamps are accurate, and playback access is known to at least two family members.
              Configure motion alerts intelligently to avoid alarm fatigue.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Maintain systems proactively</h2>
            <p className="text-gray-700 leading-relaxed">
              A simple maintenance checklist can prevent downtime: lens cleaning, night-view checks, recording verification,
              power backup testing, and cable inspection. If your system is older than 3 years, review camera clarity,
              storage health, and app support compatibility. Scheduled maintenance costs far less than emergency recovery
              after an incident.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              If you already have cameras installed, a
              {' '}
              <Link href="/cctv-amc" className="text-orange-700 hover:text-orange-800 font-medium">
                CCTV AMC plan
              </Link>
              {' '}
              can keep your setup reliable year-round.
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
