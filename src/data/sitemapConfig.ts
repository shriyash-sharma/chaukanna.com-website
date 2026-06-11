/**
 * SITEMAP GENERATION HELPER
 * Generates sitemap.xml dynamically based on route structure
 */

export const SITEMAP_CONFIG = {
  baseUrl: 'https://chaukanna.com',
  lastModDate: new Date().toISOString().split('T')[0],

  staticPages: [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/services', priority: '0.9', changefreq: 'monthly' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/blog', priority: '0.9', changefreq: 'daily' },
    { path: '/projects', priority: '0.8', changefreq: 'weekly' },
    { path: '/contact', priority: '0.9', changefreq: 'monthly' },
    { path: '/book-site-survey', priority: '0.95', changefreq: 'weekly' },
    { path: '/cctv-cost-calculator', priority: '0.85', changefreq: 'weekly' },
    { path: '/faqs', priority: '0.7', changefreq: 'monthly' },
    { path: '/service-areas', priority: '0.8', changefreq: 'monthly' },
    { path: '/reviews', priority: '0.85', changefreq: 'weekly' },
    { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
    { path: '/team', priority: '0.6', changefreq: 'quarterly' },
    { path: '/testimonials', priority: '0.7', changefreq: 'monthly' },
    { path: '/case-studies', priority: '0.75', changefreq: 'monthly' },
    { path: '/certifications-partnerships', priority: '0.5', changefreq: 'quarterly' },
    { path: '/why-choose-chaukanna', priority: '0.8', changefreq: 'quarterly' },
  ],

  servicePages: [
    { path: '/cctv-installation', priority: '0.95', changefreq: 'weekly' },
    { path: '/cctv-amc', priority: '0.85', changefreq: 'monthly' },
    { path: '/fire-alarm-systems', priority: '0.9', changefreq: 'monthly' },
    { path: '/biometric-attendance', priority: '0.85', changefreq: 'monthly' },
    { path: '/access-control-systems', priority: '0.85', changefreq: 'monthly' },
    { path: '/video-door-phone', priority: '0.85', changefreq: 'monthly' },
    { path: '/smart-home-automation', priority: '0.85', changefreq: 'monthly' },
    { path: '/public-address-systems', priority: '0.75', changefreq: 'monthly' },
    { path: '/repair-maintenance', priority: '0.8', changefreq: 'monthly' },
  ],

  guidePages: [
    { path: '/home-security-tips', priority: '0.8', changefreq: 'quarterly' },
    { path: '/cctv-installation-guide', priority: '0.85', changefreq: 'quarterly' },
    { path: '/office-security-best-practices', priority: '0.8', changefreq: 'quarterly' },
    { path: '/fire-safety-checklist', priority: '0.8', changefreq: 'quarterly' },
    { path: '/security-audit-services', priority: '0.75', changefreq: 'quarterly' },
    { path: '/visitor-management-system', priority: '0.75', changefreq: 'quarterly' },
    { path: '/warehouse-security-guide', priority: '0.8', changefreq: 'quarterly' },
    { path: '/apartment-security-guide', priority: '0.8', changefreq: 'quarterly' },
    { path: '/school-security-best-practices', priority: '0.8', changefreq: 'quarterly' },
    { path: '/emergency-response-planning', priority: '0.75', changefreq: 'quarterly' },
    { path: '/business-risk-assessment', priority: '0.75', changefreq: 'quarterly' },
    { path: '/security-guides', priority: '0.85', changefreq: 'weekly' },
  ],

  blogPages: [
    { path: '/blog', priority: '0.9', changefreq: 'daily' },
    { path: '/blog/how-cctv-systems-reduce-business-risks', priority: '0.7', changefreq: 'quarterly' },
    { path: '/blog/top-security-mistakes-small-businesses-make', priority: '0.7', changefreq: 'quarterly' },
    { path: '/blog/security-checklist-residential-societies', priority: '0.7', changefreq: 'quarterly' },
    { path: '/blog/visitor-management-best-practices', priority: '0.7', changefreq: 'quarterly' },
    { path: '/blog/physical-security-vs-digital-security', priority: '0.7', changefreq: 'quarterly' },
    { path: '/blog/ai-improve-security-monitoring', priority: '0.7', changefreq: 'quarterly' },
    { path: '/blog/security-audit-framework-growing-businesses', priority: '0.7', changefreq: 'quarterly' },
    { path: '/blog/emergency-preparedness-guide-offices', priority: '0.7', changefreq: 'quarterly' },
  ],

  // Dynamic pages (example structure — actual data comes from database)
  dynamicPages: {
    locationPages: 'From /data/locations (40+ city combinations)',
    serviceAreas: 'From /data/serviceAreas (15+ Pune neighborhoods)',
    projects: 'From /data/projects (generate from project DB)',
    blogArchive: 'From /data/blogPosts (all published articles)',
  },

  generateSitemapXML: function () {
    const allPages = [
      ...this.staticPages,
      ...this.servicePages,
      ...this.guidePages,
      ...this.blogPages,
    ];

    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const urlsetOpening =
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const urlsetClosing = '</urlset>';

    const urls = allPages
      .map(
        (page) =>
          `  <url>
    <loc>${this.baseUrl}${page.path}</loc>
    <lastmod>${this.lastModDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
      )
      .join('\n');

    return `${xmlHeader}
<${urlsetOpening}
${urls}
${urlsetClosing}`;
  },

  instructions: `
IMPLEMENTATION STEPS:

1. Create a new file: src/app/sitemap.ts
2. Import this config
3. Generate sitemap using next/sitemap or manual generation
4. If using Next.js 13+ with dynamic routes, add to next.config.js:
   
   async function generateSitemap() {
     // Fetch dynamic routes from database
     // Combine with static + service + guide + blog pages
     // Return XML
   }

5. Submit to Google Search Console: chaukanna.com/sitemap.xml
6. Monitor in GSC for crawl errors

DYNAMIC ROUTES TO INCLUDE:
- /service-areas/[slug] (15+ neighborhoods)
- /cctv-installation-[city] (40+ cities/neighborhoods)
- /blog/[slug] (all published blog posts)
- /projects/[slug] (all completed projects)
- /authors/[slug] (team + shriyash-sharma)
  `,
};

export const ALTERNATE_ROUTES = [
  '/cctv-installation',
  '/cctv-amc',
  '/fire-alarm-systems',
  '/biometric-attendance',
  '/access-control-systems',
  '/video-door-phone',
  '/smart-home-automation',
  '/public-address-systems',
  '/repair-maintenance',
];

export function generateSitemapInstructions() {
  return `
STEP-BY-STEP SITEMAP SETUP:

1. CREATE: src/app/sitemap.ts
   - Import MetadataRoute from 'next'
   - Create generateSitemap() function
   - Return array of { url, lastModified, changeFrequency, priority }

2. EXAMPLE IMPLEMENTATION:
   
   import { MetadataRoute } from 'next'
   import { SITEMAP_CONFIG } from '@/data/sitemapConfig'
   
   export default function sitemap(): MetadataRoute.Sitemap {
     const baseUrl = 'https://chaukanna.com'
     
     // Static pages
     const pages = SITEMAP_CONFIG.staticPages.map(p => ({
       url: \`\${baseUrl}\${p.path}\`,
       lastModified: new Date(),
       changeFrequency: p.changefreq,
       priority: parseFloat(p.priority)
     }))
     
     // Service pages, guides, blog (same pattern)
     // Dynamic pages (location, projects, blog posts) from data
     
     return pages
   }

3. NEXT.CONFIG.JS (if using separate sitemap file)
   - Add 'public/sitemap.xml' to next.config.js publicRuntimeConfig

4. SUBMIT TO GOOGLE SEARCH CONSOLE
   - URL: https://chaukanna.com/sitemap.xml
   - Let GSC crawl for 24–48 hours

5. MONITOR
   - Check GSC monthly for crawl errors
   - Add new pages to sitemap as they launch
  `;
}
