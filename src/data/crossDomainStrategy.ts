/**
 * CROSS-DOMAIN SEO STRATEGY
 * Connect shriyashsharma.com (thought leadership) with chaukanna.com (leads)
 */

export const CROSS_DOMAIN_STRATEGY = {
  overview: {
    goal: 'Build Shriyash Sharma as a recognized security tech thought leader while driving qualified leads to Chaukanna.',
    domains: {
      shriyashsharma: 'Portfolio + Engineering insights + Case studies',
      chaukanna: 'Lead generation + Sales + Service showcase',
    },
    synergy: [
      'Shriyash as thought leader → attracts inbound opportunities',
      'Chaukanna success stories → shareable case studies for shriyashsharma.com',
      'Cross-linking improves authority for both domains',
      'Author schema creates SEO link between domains',
    ],
  },

  contentOnChaukanna: {
    page: '/about/technology',
    title: 'About Technology — Platform & Engineering Behind Chaukanna',
    path: '/about/technology',
    sections: [
      {
        name: 'Our Technology Stack',
        anchor: 'Next.js 16, React 19, TypeScript, Supabase, Vercel PWA',
      },
      {
        name: 'Engineering Approach',
        anchor: 'Scalable, mobile-first, resilient lead capture',
      },
      {
        name: 'Platform Leadership',
        anchor: 'Led by Shriyash Sharma [LINK to shriyashsharma.com]',
      },
      {
        name: 'AI & Automation',
        anchor: 'Intelligent lead routing, predictive maintenance, anomaly detection',
      },
    ],
    inboundLink: {
      text: 'Learn more about engineering & innovation',
      url: 'https://shriyashsharma.com',
      anchorText: "Shriyash Sharma's Portfolio",
      placement: 'End of section, in bio',
    },
  },

  contentOnShriyashsharma: {
    caseStudy: {
      slug: 'building-chaukanna-security-platform',
      title: 'Building Chaukanna: Security Platform Architecture',
      description: 'A deep dive into the technology decisions, scalability challenges, and AI integrations behind Chaukanna — a market-leading security platform serving 5000+ customers in Pune.',
      sections: [
        {
          heading: 'Problem Statement',
          content: 'Fragmented security industry needed a unified, modern platform for CCTV, fire safety, access control, and smart home systems.',
        },
        {
          heading: 'Architecture Decisions',
          content: [
            'Why Next.js 16 (App Router, SSG)',
            'Supabase over Firebase (PostgreSQL flexibility, India data residency)',
            'Vercel for global edge deployment',
            'PWA for offline field operations',
          ],
        },
        {
          heading: 'Challenges & Solutions',
          content: [
            'Lead capture resilience: never lose a customer inquiry',
            'Mobile responsiveness for technicians in field',
            'Integrating diverse product lines (CCTV, fire alarm, etc.)',
            'Scaling from startup to 5000+ customers',
          ],
        },
        {
          heading: 'AI & Automation Layer',
          content: [
            'Intelligent lead routing based on service + location',
            'Predictive maintenance alerts',
            'Anomaly detection for security incidents',
            'Future vision: autonomous monitoring systems',
          ],
        },
        {
          heading: 'Results & Impact',
          content: [
            'Deployed to Vercel: 40+ cities in India',
            '184 Google reviews with 4.8★ rating',
            'Zero data loss: 100% lead capture reliability',
            'Sub-3s page load time on mobile',
          ],
        },
        {
          heading: 'Lessons Learned',
          content: [
            'Security-first architecture is non-negotiable',
            'Founder involvement in technical decisions ensures quality',
            'Modern frameworks (Next.js) enable faster iteration than legacy stacks',
            'Local context (Pune-first) was key to market fit',
          ],
        },
      ],
      backlinks: [
        {
          text: 'Visit Chaukanna →',
          url: 'https://chaukanna.com',
          anchorText: 'Chaukanna: CCTV & Security Services in Pune',
          placement: 'End of case study, in CTA section',
        },
        {
          text: 'See the platform in action',
          url: 'https://chaukanna.com/cctv-installation-guide',
          anchorText: 'Read the CCTV Installation Guide',
          placement: 'Within relevant sections discussing CCTV architecture',
        },
      ],
    },

    authorPage: {
      slug: 'shriyash-sharma',
      title: 'Shriyash Sharma — Platform Engineer & Founder',
      bio: 'Shriyash Sharma is the founder and lead architect behind Chaukanna, a modern security platform serving 5000+ customers across India. He specializes in platform engineering, security systems integration, and AI-driven automation. With expertise in Next.js, React, TypeScript, and distributed systems, he builds scalable, user-focused software.',
      expertise: [
        'Platform Architecture',
        'Security Systems Integration',
        'Web Development (Next.js, React, TypeScript)',
        'AI & Machine Learning',
        'DevOps & Cloud Infrastructure',
      ],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/shriyash-sharma',
        github: 'https://github.com/shriyash-sharma',
        twitter: 'https://twitter.com/shriyash_sharma',
      },
      contributedTo: ['Chaukanna', 'Open Source Security Projects'],
      contactCTA: 'Interested in architecture discussions, consulting, or partnerships?',
    },
  },

  authorSchemaImplemtation: {
    description: 'Add Author schema to all blog posts on Chaukanna, attributed to Shriyash Sharma',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Shriyash Sharma',
      url: 'https://shriyashsharma.com',
      jobTitle: 'Platform Engineer & Founder',
      affiliation: 'Chaukanna',
      image: '[photo-url]',
      sameAs: [
        'https://linkedin.com/in/shriyash-sharma',
        'https://github.com/shriyash-sharma',
      ],
    },
    implementation: 'Add to <script type="application/ld+json"> in blog post metadata for each article',
  },

  internalLinkingGuidelines: {
    chaukanna_to_shriyashsharma: [
      {
        context: 'About Technology page',
        anchor: 'platform engineering',
        url: 'https://shriyashsharma.com/projects/chaukanna',
        frequency: 'Once per page',
      },
      {
        context: 'Team / Author pages',
        anchor: "Shriyash Sharma's portfolio",
        url: 'https://shriyashsharma.com',
        frequency: 'In bio or author bio section',
      },
      {
        context: 'Blog articles (optional)',
        anchor: 'Engineering decisions explained in case study',
        url: 'https://shriyashsharma.com/case-studies/chaukanna',
        frequency: 'Once per relevant article, if applicable',
      },
    ],
    shriyashsharma_to_chaukanna: [
      {
        context: 'Case study: Building Chaukanna',
        anchor: 'Visit Chaukanna platform',
        url: 'https://chaukanna.com',
        frequency: 'End of case study + 1–2 contextual links',
      },
      {
        context: 'Project showcase / portfolio',
        anchor: 'Live product: Chaukanna',
        url: 'https://chaukanna.com',
        frequency: 'In project description',
      },
      {
        context: 'Bio / About Me page',
        anchor: 'Founder of Chaukanna',
        url: 'https://chaukanna.com/about',
        frequency: 'Once in main bio',
      },
    ],
  },

  anchorTextGuidelines: {
    avoidExactMatch: 'Avoid repeating same anchor; vary between branded, descriptive, and generic',
    examples: [
      'Chaukanna platform',
      'Security platform in Pune',
      'Chaukanna: CCTV & Security Services',
      'Visit Chaukanna',
      'See live product',
    ],
    doNotUse: [
      'click here',
      'link',
      'website',
    ],
  },

  expectedOutcomes: {
    month_1: {
      shriyashsharma: '+1 high-quality backlink from Chaukanna case study',
      chaukanna: '+1 backlink from shriyashsharma.com, stronger thought leadership association',
    },
    month_3: {
      shriyashsharma: 'Case study driving 10–20 monthly referral clicks',
      chaukanna: 'Backlink improving domain authority +0.5–1 point',
      seo: 'Author schema helping rank blog posts',
    },
    month_6: {
      shriyashsharma: 'Brand queries like "Shriyash Sharma" generating top results linking to Chaukanna',
      chaukanna: '5–10% of leads originating from shriyashsharma.com referrals',
      trust: 'Thought leadership connection attracting B2B partnership inquiries',
    },
  },

  implementationChecklist: [
    '☐ Write /about/technology page on Chaukanna with link to shriyashsharma.com',
    '☐ Write case study on shriyashsharma.com with backlinks to Chaukanna',
    '☐ Create author bio page on Chaukanna (Shriyash Sharma) with link to shriyashsharma.com',
    '☐ Add author schema to blog posts (structured data)',
    '☐ Update shriyashsharma.com bio to link to Chaukanna as "founder"',
    '☐ Cross-link in footer/contact sections of both sites',
    '☐ Monitor referral traffic between domains in GA4',
    '☐ Measure backlink impact on both domain authorities (Ahrefs/Semrush)',
  ],
};
