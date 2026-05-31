import type { Metadata } from 'next';
import Link from 'next/link';
import { Star, ExternalLink, MessageCircle, ShieldCheck, FileText, Calendar, Wrench } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { GOOGLE_REVIEW_URL, GOOGLE_PROFILE_URL } from '@/lib/branding';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTAButtons from '@/components/CTAButtons';

export const metadata: Metadata = buildMetadata({
  title: 'Customer Reviews — Chaukanna CCTV & Security Services in Pune',
  description:
    'Read real customer reviews for Chaukanna on Google. Share your own experience after we complete your install.',
  path: '/reviews',
});

/**
 * This page intentionally does NOT publish fabricated reviews.
 * It links out to Google Business Profile reviews (which can be verified)
 * and invites customers to share their experience after install.
 *
 * As real reviews are imported / approved by the customer, replace the
 * "Reviews coming soon" block with a curated, attributed list.
 */
export default function ReviewsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <Breadcrumbs items={[{ name: 'Reviews', path: '/reviews' }]} />

      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Customer reviews
            </h1>
            <p className="text-base sm:text-lg text-gray-700">
              We do not publish made-up testimonials. Below are our real Google reviews, plus a way to share your own experience after we finish your install.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10 space-y-8">
        {/* Verifiable trust signals — no fake claims */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { icon: FileText, label: 'GST invoice on every job' },
            { icon: Calendar, label: 'Free site survey, written quote first' },
            { icon: Wrench, label: '1-year service warranty' },
            { icon: ShieldCheck, label: 'AMC-backed support' },
          ].map((t) => (
            <div
              key={t.label}
              className="bg-white border border-gray-200 rounded-xl p-3 flex items-center gap-3"
            >
              <t.icon className="w-5 h-5 text-orange-600 flex-shrink-0" aria-hidden />
              <span className="text-sm text-gray-800 font-medium">{t.label}</span>
            </div>
          ))}
        </div>

        {/* Google reviews CTA */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
          <div className="flex items-start mb-4">
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4 flex-shrink-0">
              <Star className="w-6 h-6 text-yellow-500 fill-current" aria-hidden />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                Read our reviews on Google
              </h2>
              <p className="text-gray-700 text-sm">
                Verified, public, can&apos;t be edited by us — the most honest way to read what customers say.
              </p>
            </div>
          </div>
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg"
          >
            View Google reviews <ExternalLink className="w-4 h-4 ml-2" aria-hidden />
          </a>
        </div>

        {/* Placeholder for curated real reviews — to be populated as customers approve */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Curated reviews — coming soon</h2>
          <p className="text-gray-700 text-sm max-w-xl mx-auto">
            We&apos;re rolling out a curated list of attributed customer reviews here. Until then, please rely on our public Google reviews above.
          </p>
        </div>

        {/* Share your experience */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
          <div className="flex items-start mb-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-green-600" aria-hidden />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                Recently installed by us?
              </h2>
              <p className="text-gray-700 text-sm">
                We&apos;d love your honest review on Google — it directly helps other Pune homeowners and businesses make better choices. Or WhatsApp us feedback if you prefer privately.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg"
            >
              Leave a Google review
            </a>
            <CTAButtons source="reviews_share_feedback" variant="inverted" />
          </div>
        </div>

        {/* Pre-empt skepticism: anti-fake-review note */}
        <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 text-sm text-gray-700">
          <h3 className="font-bold text-gray-900 mb-2">Why no glossy testimonials on this page?</h3>
          <p>
            Because most “5-star testimonials” on local service websites are fake. We&apos;ve chosen to link directly to public Google reviews instead — they&apos;re verifiable and we can&apos;t edit them. As real customers approve sharing their experience, we&apos;ll add attributed reviews here.
          </p>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/projects"
            className="inline-block text-orange-700 hover:text-orange-800 font-semibold underline underline-offset-4"
          >
            Or see our recent projects →
          </Link>
        </div>
      </div>
    </div>
  );
}
