import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { PROJECTS, getProjectBySlug, isPlaceholderImage } from '@/data/projects';
import {
  buildMetadata,
  buildBreadcrumbSchema,
} from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTAButtons from '@/components/CTAButtons';
import EmergencyCTA from '@/components/EmergencyCTA';
import PageTracker from '@/components/PageTracker';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return buildMetadata({
      title: 'Project not found',
      description: 'This project could not be found.',
      path: `/projects/${slug}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: `${project.title} — Chaukanna Project`,
    description: `${project.problem} See how Chaukanna solved it in ${project.area}, ${project.city}.`,
    path: `/projects/${project.slug}`,
    type: 'article',
    image: project.image,
  });
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const breadcrumbs = [
    { name: 'Projects', path: '/projects' },
    { name: project.title, path: `/projects/${project.slug}` },
  ];

  const related = PROJECTS.filter(
    (p) => p.slug !== project.slug && p.category === project.category,
  ).slice(0, 3);

  return (
    <>
      <PageTracker
        event="project_page_view"
        params={{
          slug: project.slug,
          category: project.category,
          area: project.area,
        }}
      />
      <Script
        id={`project-breadcrumb-${project.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: 'Home', path: '/' },
              ...breadcrumbs,
            ]),
          ),
        }}
      />
      <div className="bg-gray-50 min-h-screen pb-16">
        <Breadcrumbs items={breadcrumbs} />

        <article className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <MapPin className="w-4 h-4 mr-1" aria-hidden />
              {project.area}, {project.city} · {project.propertyType}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {project.title}
            </h1>
          </header>

          {/* Hero image */}
          <div className="relative aspect-[16/9] bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl overflow-hidden mb-10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
              className={
                isPlaceholderImage(project.image)
                  ? 'object-contain p-10'
                  : 'object-cover'
              }
            />
          </div>

          {/* Body */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">The problem</h2>
              <p className="text-gray-700 leading-relaxed">{project.problem}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">What we did</h2>
              <p className="text-gray-700 leading-relaxed">{project.solution}</p>
            </section>

            <section className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Scope of work</h2>
              <ul className="space-y-2">
                {project.scopeBullets.map((b) => (
                  <li key={b} className="flex items-start text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Outcome</h2>
              <ul className="space-y-2">
                {project.outcome.map((o) => (
                  <li key={o} className="flex items-start text-gray-800">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Services used */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Services involved</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.servicesUsed.map((s) => (
                  <span
                    key={s}
                    className="inline-block bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full text-sm font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <Link
                href={project.serviceSlug}
                className="inline-flex items-center text-orange-700 hover:text-orange-800 font-semibold underline underline-offset-4"
              >
                Learn about this service <ArrowRight className="w-4 h-4 ml-1" aria-hidden />
              </Link>
            </section>

            {/* CTA */}
            <section className="bg-orange-600 text-white rounded-2xl p-6 sm:p-8 text-center">
              <h2 className="text-2xl font-bold mb-2">Want a similar setup at your property?</h2>
              <p className="text-orange-100 mb-5 max-w-xl mx-auto">
                Tell us your address and a few photos. We&apos;ll send a sized, line-itemed quote within 30 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Link
                  href="/book-site-survey"
                  className="bg-white text-orange-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Book free site survey
                </Link>
                <CTAButtons source={`project_${project.slug}_cta`} variant="inverted" />
              </div>
            </section>

            <EmergencyCTA variant="compact" context={`project_${project.slug}`} />

            {/* Related */}
            {related.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">More like this</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/projects/${r.slug}`}
                      className="bg-white rounded-lg border border-gray-200 hover:border-orange-400 p-4 transition-colors"
                    >
                      <p className="text-xs text-gray-500 mb-1">{r.area}</p>
                      <p className="font-semibold text-gray-900 text-sm leading-snug">{r.title}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </div>
    </>
  );
}
