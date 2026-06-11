import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'Read Chaukanna privacy policy for data collection, usage, retention, and rights related to contact forms, site surveys, and analytics.',
  path: '/privacy-policy',
  keywords: 'privacy policy chaukanna, data privacy CCTV services Pune',
});

const sections = [
  {
    title: '1. Information we collect',
    body: 'We collect information you submit through forms on this website, such as name, phone number, email address, location, and service requirements. We may also collect technical usage information such as browser type and page interactions for analytics.',
  },
  {
    title: '2. How we use your information',
    body: 'We use your information to respond to enquiries, schedule site surveys, share quotes, provide service updates, and improve our website experience. We do not sell your personal information to third parties.',
  },
  {
    title: '3. Third-party processors',
    body: 'To provide our services, we use trusted providers such as Supabase (data storage), Resend (transactional email), and Google Analytics (traffic measurement). Data shared with these providers is limited to what is required for service delivery.',
  },
  {
    title: '4. Data retention',
    body: 'Lead and enquiry records are retained for operational, support, and compliance purposes for a reasonable business duration. If you request deletion and no legal retention requirement applies, we will process the request within a reasonable period.',
  },
  {
    title: '5. Your rights',
    body: 'You can request access, correction, or deletion of your personal data by contacting us. You may also opt out of non-essential communication at any time.',
  },
  {
    title: '6. Security',
    body: 'We apply appropriate technical and organizational safeguards to protect customer data. While no system can guarantee absolute security, we continuously improve controls to reduce risk.',
  },
  {
    title: '7. Contact',
    body: 'For privacy-related requests, email info@chaukanna.com or use our contact page. Please include sufficient details so we can verify and process your request.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <Breadcrumbs items={[{ name: 'Privacy Policy', path: '/privacy-policy' }]} />

      <section className="container mx-auto px-4 py-10 max-w-4xl">
        <article className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: June 11, 2026</p>

          <div className="space-y-6">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>

          <p className="mt-8 text-sm text-gray-600">
            This policy should be read along with our
            {' '}
            <Link href="/terms-of-service" className="text-orange-700 hover:text-orange-800 font-medium">
              Terms of Service
            </Link>
            .
          </p>
        </article>
      </section>
    </div>
  );
}
