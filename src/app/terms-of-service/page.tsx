import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service',
  description:
    'Read Chaukanna terms of service covering service scope, quotations, warranties, liabilities, and customer responsibilities.',
  path: '/terms-of-service',
  keywords: 'terms of service chaukanna, CCTV installation terms Pune',
});

const sections = [
  {
    title: '1. Scope of services',
    body: 'Chaukanna provides consultation, installation, repair, and maintenance services for security and automation systems. Service availability may vary by location and project scope.',
  },
  {
    title: '2. Quotations and approvals',
    body: 'All quotations are based on site requirements shared by the customer or identified during survey. Work begins after customer confirmation. Any major scope change may require revised pricing.',
  },
  {
    title: '3. Warranty and support',
    body: 'Products carry applicable manufacturer warranty. Installation workmanship is covered for the period committed in writing on invoice or proposal. AMC terms apply only when AMC is purchased.',
  },
  {
    title: '4. Customer responsibilities',
    body: 'Customers must provide required site access, electricity availability, and permissions from society/building authority when needed. Delays caused by access or civil restrictions may impact delivery timelines.',
  },
  {
    title: '5. Payments',
    body: 'Payment terms are specified in quotation or invoice. Delayed payments may affect service timelines, support windows, or warranty claim processing where applicable.',
  },
  {
    title: '6. Limitation of liability',
    body: 'Chaukanna is not liable for indirect or consequential losses arising from service interruptions, misuse, or third-party system failures. Liability, where applicable, is limited to the value of contracted service.',
  },
  {
    title: '7. Changes to terms',
    body: 'We may update these terms periodically. The latest published version on this page will apply to new service requests from the updated date onward.',
  },
  {
    title: '8. Governing law',
    body: 'These terms are governed by the laws applicable in India. Jurisdiction for disputes, if any, shall be Pune, Maharashtra.',
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <Breadcrumbs items={[{ name: 'Terms of Service', path: '/terms-of-service' }]} />

      <section className="container mx-auto px-4 py-10 max-w-4xl">
        <article className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
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
            For data handling details, read our
            {' '}
            <Link href="/privacy-policy" className="text-orange-700 hover:text-orange-800 font-medium">
              Privacy Policy
            </Link>
            .
          </p>
        </article>
      </section>
    </div>
  );
}
