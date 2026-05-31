import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProjectsExplorer from '@/components/ProjectsExplorer';
import CTAButtons from '@/components/CTAButtons';

export const metadata: Metadata = buildMetadata({
  title: 'Projects — Real CCTV, Fire Alarm & Smart Home Installations in Pune',
  description:
    'Browse Chaukanna’s recent CCTV, fire alarm, biometric, smart home and access-control installations across Pune. Filter by service or by location.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <Breadcrumbs items={[{ name: 'Projects', path: '/projects' }]} />

      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Recent projects across Pune
            </h1>
            <p className="text-base sm:text-lg text-gray-700">
              A selection of CCTV, fire alarm, biometric, smart home and access-control installs we’ve completed in homes, shops, offices and societies around Pune. Use the filters to find a project similar to yours.
            </p>
            <div className="mt-6">
              <CTAButtons source="projects_index_hero" variant="compact" />
              <p className="text-xs text-gray-500 mt-2">
                Or{' '}
                <Link href="/book-site-survey" className="underline text-orange-700 font-medium">
                  book a free site survey
                </Link>{' '}
                for your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <ProjectsExplorer />
      </div>
    </div>
  );
}
