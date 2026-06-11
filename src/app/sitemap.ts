import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/branding';
import { LOCATIONS } from '@/data/locations';
import { getAllBlogPosts } from '@/data/blogPosts';
import { services } from '@/data/services';
import { PROJECTS } from '@/data/projects';
import { SERVICE_AREAS } from '@/data/serviceAreas';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    '',
    '/about',
    '/about/technology',
    '/services',
    '/contact',
    '/blog',
    '/projects',
    '/service-areas',
    '/cctv-cost-calculator',
    '/book-site-survey',
    '/faqs',
    '/reviews',
    '/home-security-tips',
    '/cctv-installation-guide',
    '/privacy-policy',
    '/terms-of-service',
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${SITE.url}${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const locationRoutes = LOCATIONS.map((l) => ({
    url: `${SITE.url}${l.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const projectRoutes = PROJECTS.map((p) => ({
    url: `${SITE.url}/projects/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const serviceAreaRoutes = SERVICE_AREAS.map((a) => ({
    url: `${SITE.url}/service-areas/${a.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogRoutes = getAllBlogPosts().map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...projectRoutes,
    ...serviceAreaRoutes,
    ...blogRoutes,
  ];
}
