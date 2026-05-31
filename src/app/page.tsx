import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  Award,
  MapPin,
  Calculator,
  CalendarCheck,
  HelpCircle,
  PhoneCall,
  MessageCircle,
  Star,
  ExternalLink,
} from 'lucide-react';
import { services } from '@/data/services';
import { LOCATIONS } from '@/data/locations';
import { buildMetadata, buildFAQSchema } from '@/lib/seo';
import CTAButtons from '@/components/CTAButtons';
import EmergencyCTA from '@/components/EmergencyCTA';
import FAQ from '@/components/FAQ';
import { SITE, GOOGLE_PROFILE_URL, GOOGLE_RATING } from '@/lib/branding';

export const metadata: Metadata = buildMetadata({
  title: 'CCTV, Fire Alarm & Smart Home Automation Services in Pune',
  description:
    'Chaukanna offers professional CCTV installation, AMC, fire alarm systems, biometric attendance, access control and smart home automation across Pune, Wagholi, Kharadi, Hadapsar, Hinjewadi and PCMC. Free site survey. Same-day install. Transparent pricing.',
  path: '/',
  keywords:
    'CCTV installation Pune, fire alarm system Pune, biometric attendance Pune, smart home automation Pune, access control Pune, CCTV AMC Pune, security systems Pune',
});

const homeFaqs = [
  {
    question: 'How quickly can Chaukanna install CCTV in my home or shop?',
    answer:
      'For most addresses in Pune we can do a free site survey same-day and schedule installation within 24–48 hours. Urgent requests can usually be accommodated the same day.',
  },
  {
    question: 'Do you give a written quote before any payment?',
    answer:
      'Yes. Every quote we share on WhatsApp or email lists camera models, recorder model, HDD brand and size, cable length and labour separately. No payment is taken until you approve the quote in writing.',
  },
  {
    question: 'Which areas of Pune do you serve?',
    answer:
      'We cover all of Pune city, PCMC, Wagholi, Kharadi, Hadapsar, Hinjewadi, Viman Nagar, Baner, Wakad, Mundhwa, Keshavnagar, Lohegaon, Magarpatta and Koregaon Park. For areas more than 30 km from central Pune, a small travel charge may apply.',
  },
  {
    question: 'Is there a warranty on the products and labour?',
    answer:
      'Yes. All cameras and recorders carry 1–2 year manufacturer warranty (per brand). Our installation work carries a 1-year workmanship warranty. We provide proper GST invoices and warranty paperwork.',
  },
  {
    question: 'Do you offer AMC (Annual Maintenance Contracts)?',
    answer:
      'Yes. AMC includes quarterly health checks, lens cleaning, firmware updates, mobile-app re-verification and priority response on faults. AMC pricing depends on your camera count and starts at ₹3,000/year for small home systems.',
  },
  {
    question: 'Can you install equipment I purchased online?',
    answer:
      'Yes, we install customer-supplied equipment for a labour fee. However, the manufacturer warranty for online-purchased items remains with the seller, not with us. We strongly recommend buying through us for end-to-end warranty.',
  },
];

const trustSignals = [
  {
    icon: MapPin,
    label: 'Areas served',
    value: '15+ Pune localities',
  },
  {
    icon: Clock,
    label: 'Typical response',
    value: 'Within 60 minutes',
  },
  {
    icon: Award,
    label: 'Field experience',
    value: '8+ years in Pune',
  },
  {
    icon: Shield,
    label: 'Workmanship warranty',
    value: '1 year on every install',
  },
];

const whyChoose = [
  {
    icon: CalendarCheck,
    title: 'Free site survey',
    desc: 'A technician visits your address, measures angles and shares a written quote — at no cost, no obligation.',
  },
  {
    icon: Calculator,
    title: 'Transparent pricing',
    desc: 'Every quote lists model numbers, HDD brand, cable length and labour separately. No hidden line items.',
  },
  {
    icon: Shield,
    title: 'Genuine brand hardware',
    desc: 'Hikvision, CP Plus, Dahua, Honeywell — all with verifiable warranty paperwork and GST invoice.',
  },
  {
    icon: PhoneCall,
    title: 'After-sale support',
    desc: 'We pick up the phone after installation. Same-day visits for urgent faults, scheduled visits within AMC SLA.',
  },
];

export default function HomePage() {
  return (
    <>
      <Script
        id="home-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFAQSchema(homeFaqs)),
        }}
      />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-orange-50 to-orange-100 py-16 sm:py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4">
                  <p className="inline-block bg-orange-600 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
                    Trusted local security partner in Pune
                  </p>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                    CCTV, Fire Alarm & Home Automation —{' '}
                    <span className="text-orange-600">Installed Right, Across Pune</span>
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    Free site survey. Written quote with model numbers. Same-day install for most Pune addresses. Genuine brand hardware with proper warranty and GST invoice.
                  </p>
                </div>

                <CTAButtons source="home_hero" variant="primary" />

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 text-sm text-gray-700">
                  <Link
                    href="/book-site-survey"
                    className="font-semibold text-orange-700 hover:text-orange-800 underline underline-offset-4 inline-flex items-center"
                  >
                    Book free site survey <ArrowRight className="w-4 h-4 ml-1" aria-hidden />
                  </Link>
                  <Link
                    href="/cctv-cost-calculator"
                    className="font-semibold text-orange-700 hover:text-orange-800 underline underline-offset-4 inline-flex items-center"
                  >
                    CCTV cost calculator <ArrowRight className="w-4 h-4 ml-1" aria-hidden />
                  </Link>
                </div>
              </div>

              {/* Quick-action card (mobile-optimised) */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 space-y-5">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Get a quote in 60 seconds
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      Pick the fastest channel for you.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    <CTAButtons source="home_hero_card" variant="inverted" />
                  </div>

                  <Link
                    href="/book-site-survey"
                    className="flex items-center justify-center w-full bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
                  >
                    <CalendarCheck className="w-5 h-5 mr-2" aria-hidden />
                    Book a free site survey
                  </Link>

                  <Link
                    href="/cctv-cost-calculator"
                    className="flex items-center justify-center w-full border-2 border-orange-600 text-orange-700 px-4 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold"
                  >
                    <Calculator className="w-5 h-5 mr-2" aria-hidden />
                    Estimate CCTV cost
                  </Link>

                  <p className="text-xs text-gray-500 text-center">
                    No spam. No pushy follow-ups. Quote first, decision yours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="py-10 sm:py-14 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <p className="text-center text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
              Trusted by{' '}
              <span className="font-bold text-orange-600">5000+ customers</span> for reliable
              security solutions. From CCTV installation to smart home automation, we provide
              comprehensive security services across Pune.
            </p>

            {/* Google rating badge — real, verifiable, links to GBP */}
            <div className="flex justify-center mb-10 sm:mb-12">
              <a
                href={GOOGLE_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-xl font-bold text-gray-900">
                  {GOOGLE_RATING.value.toFixed(1)}
                </span>
                <span className="flex" aria-label={`${GOOGLE_RATING.value} out of 5`}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i <= Math.round(GOOGLE_RATING.value)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                      aria-hidden
                    />
                  ))}
                </span>
                <span className="text-sm text-gray-700">
                  on Google &middot; {GOOGLE_RATING.count}+ reviews
                </span>
                <ExternalLink className="w-4 h-4 text-gray-400" aria-hidden />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {trustSignals.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <s.icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600" aria-hidden />
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">{s.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Complete security and automation solutions for homes, shops, offices, societies and factories across Pune.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service) => (
                <article
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="h-40 sm:h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">C</span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-5">
                      {service.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-orange-600 font-semibold text-sm">{service.price}</span>
                      <Link
                        href={service.slug}
                        className="text-orange-600 hover:text-orange-700 font-medium flex items-center text-sm"
                      >
                        Learn more <ArrowRight className="w-4 h-4 ml-1" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold inline-flex items-center"
              >
                View all services <ArrowRight className="w-5 h-5 ml-2" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why customers in Pune pick Chaukanna</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                No fake awards, no inflated numbers. Just honest install work and after-sale support.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChoose.map((w) => (
                <div key={w.title} className="bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <w.icon className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{w.title}</h3>
                  <p className="text-sm text-gray-700">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency support */}
        <EmergencyCTA />

        {/* Service areas */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Areas we serve in &amp; around Pune</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Dedicated landing pages for every neighbourhood we cover. Local technicians, local response time.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  href={loc.slug}
                  className="bg-white border border-gray-200 hover:border-orange-400 rounded-lg px-4 py-3 text-center text-sm font-medium text-gray-800 hover:text-orange-700 transition-colors"
                >
                  {loc.city}
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/service-areas"
                className="inline-flex items-center text-orange-700 hover:text-orange-800 font-semibold underline underline-offset-4"
              >
                View all service areas <ArrowRight className="w-4 h-4 ml-1" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* Discover more (internal links) */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/projects"
                className="group bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 rounded-xl p-6 transition-colors"
              >
                <Shield className="w-8 h-8 text-orange-600 mb-3" aria-hidden />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Our recent projects</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Real installations across Pune — homes, shops, societies, offices.
                </p>
                <span className="text-orange-700 font-semibold inline-flex items-center text-sm">
                  See projects <ArrowRight className="w-4 h-4 ml-1" aria-hidden />
                </span>
              </Link>
              <Link
                href="/faqs"
                className="group bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 rounded-xl p-6 transition-colors"
              >
                <HelpCircle className="w-8 h-8 text-orange-600 mb-3" aria-hidden />
                <h3 className="text-lg font-bold text-gray-900 mb-2">100+ FAQs</h3>
                <p className="text-sm text-gray-700 mb-3">
                  CCTV, fire alarm, smart home, biometric, access control — every question answered.
                </p>
                <span className="text-orange-700 font-semibold inline-flex items-center text-sm">
                  Browse FAQs <ArrowRight className="w-4 h-4 ml-1" aria-hidden />
                </span>
              </Link>
              <Link
                href="/blog"
                className="group bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 rounded-xl p-6 transition-colors"
              >
                <MessageCircle className="w-8 h-8 text-orange-600 mb-3" aria-hidden />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Buying guides &amp; pricing</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Honest, India-specific guides on CCTV, fire alarm and smart home pricing.
                </p>
                <span className="text-orange-700 font-semibold inline-flex items-center text-sm">
                  Read the blog <ArrowRight className="w-4 h-4 ml-1" aria-hidden />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <FAQ items={homeFaqs} title="Common questions" schemaId="home-faq-display" />
            <div className="text-center mt-10">
              <Link
                href="/faqs"
                className="inline-flex items-center text-orange-700 hover:text-orange-800 font-semibold underline underline-offset-4"
              >
                See all FAQs <ArrowRight className="w-4 h-4 ml-1" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-20 bg-orange-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to secure your property?
            </h2>
            <p className="text-base sm:text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Book a free site survey or just WhatsApp us with your address. We&apos;ll send a sized, line-itemed quote in 30 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/book-site-survey"
                className="bg-white text-orange-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center"
              >
                <CalendarCheck className="w-5 h-5 mr-2" aria-hidden />
                Book free site survey
              </Link>
              <CTAButtons source="home_final_cta" variant="inverted" />
            </div>
            <p className="mt-6 text-sm text-orange-100">
              Or call us directly:{' '}
              <a href={`tel:${SITE.phone}`} className="font-semibold underline">
                {SITE.phoneDisplay}
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
