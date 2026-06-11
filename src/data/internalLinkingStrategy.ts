/**
 * INTERNAL LINKING STRATEGY
 * Topic clusters connecting guides → blog → services → contact
 */

export const INTERNAL_LINKING_MAP = {
  clusters: [
    {
      name: 'Home Security Cluster',
      pillarPage: '/home-security-tips',
      linkedResources: {
        blog: ['/blog/top-security-mistakes-small-businesses-make'],
        services: [
          '/cctv-installation',
          '/video-door-phone',
          '/smart-home-automation',
          '/fire-alarm-systems',
        ],
        guides: [
          '/cctv-installation-guide',
          '/fire-safety-checklist',
        ],
        conversion: '/book-site-survey',
      },
      interlinkingRules: [
        'Pillar → all sub-pages',
        'Blog → Pillar + 2 Services',
        'Service pages → Pillar + Related blog',
        'Guides → Pillar + Specific services',
      ],
    },
    {
      name: 'Office Security Cluster',
      pillarPage: '/office-security-best-practices',
      linkedResources: {
        blog: [
          '/blog/top-security-mistakes-small-businesses-make',
          '/blog/visitor-management-best-practices',
        ],
        services: [
          '/cctv-installation',
          '/access-control-systems',
          '/fire-alarm-systems',
          '/video-door-phone',
        ],
        guides: [
          '/security-audit-services',
          '/visitor-management-system',
          '/emergency-response-planning',
          '/business-risk-assessment',
        ],
        conversion: '/book-site-survey',
      },
    },
    {
      name: 'Fire & Emergency Cluster',
      pillarPage: '/fire-safety-checklist',
      linkedResources: {
        blog: ['/blog/emergency-preparedness-guide-offices'],
        services: [
          '/fire-alarm-systems',
          '/public-address-systems',
          '/cctv-installation',
        ],
        guides: [
          '/emergency-response-planning',
          '/school-security-best-practices',
        ],
        conversion: '/book-site-survey',
      },
    },
    {
      name: 'CCTV & Surveillance Cluster',
      pillarPage: '/cctv-installation-guide',
      linkedResources: {
        blog: [
          '/blog/how-cctv-systems-reduce-business-risks',
          '/blog/ai-improve-security-monitoring',
        ],
        services: [
          '/cctv-installation',
          '/cctv-amc',
          '/cctv-cost-calculator',
        ],
        guides: [
          '/warehouse-security-guide',
          '/apartment-security-guide',
          '/security-audit-services',
        ],
        conversion: '/book-site-survey',
      },
    },
    {
      name: 'Residential Security Cluster',
      pillarPage: '/apartment-security-guide',
      linkedResources: {
        blog: ['/blog/security-checklist-residential-societies'],
        services: [
          '/video-door-phone',
          '/access-control-systems',
          '/cctv-installation',
          '/fire-alarm-systems',
        ],
        guides: [
          '/home-security-tips',
          '/security-audit-services',
        ],
        conversion: '/book-site-survey',
      },
    },
  ],

  crossClusterLinks: [
    {
      from: 'Home Security Tips',
      to: 'Emergency Response Planning',
      anchorText: 'family emergency evacuation plan',
    },
    {
      from: 'Office Security Best Practices',
      to: 'Visitor Management System',
      anchorText: 'secure visitor management',
    },
    {
      from: 'School Security Best Practices',
      to: 'Emergency Response Planning',
      anchorText: 'school emergency protocols',
    },
    {
      from: 'Business Risk Assessment',
      to: 'Security Audit Services',
      anchorText: 'professional risk assessment',
    },
  ],

  navStructure: {
    primaryNav: [
      { text: 'Services', link: '/services' },
      { text: 'Guides', link: '/security-guides' },
      { text: 'Blog', link: '/blog' },
      { text: 'Projects', link: '/projects' },
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact' },
    ],
    footerLinks: [
      { section: 'Popular Guides', links: ['/home-security-tips', '/office-security-best-practices', '/fire-safety-checklist'] },
      { section: 'Popular Services', links: ['/cctv-installation', '/fire-alarm-systems', '/access-control-systems'] },
      { section: 'Quick Links', links: ['/blog', '/projects', '/book-site-survey', '/cctv-cost-calculator'] },
    ],
  },

  breadcrumbs: {
    guides: 'Home > Security Guides > [Guide Title]',
    blog: 'Home > Blog > [Article Title]',
    services: 'Home > Services > [Service Name]',
  },
};

/**
 * SEO-FOCUSED LINK VELOCITY TARGETS
 */
export const LINK_BUILDING_ROADMAP = {
  month1: {
    goal: '5 quality backlinks',
    tactics: [
      'GBP + local directories (Justdial, IndiaMART, Sulekha, Yellow Pages)',
      'Facebook + LinkedIn + YouTube profile links',
      'Get featured in 1–2 local Pune blogs',
    ],
  },
  month2: {
    goal: '8 quality backlinks',
    tactics: [
      'Guest post outreach to 5 security/tech blogs',
      '2–3 vendor/partner links (builders, electricians)',
      '1 local news mention',
    ],
  },
  month3: {
    goal: '10 quality backlinks',
    tactics: [
      'Launch case studies with backlinking clients',
      'Sponsor local business event, get linked from organizer',
      'Create linkable tool (CCTV cost calculator extended)',
    ],
  },
  accumulated6months: {
    goal: '40+ quality backlinks',
    authority_improvement: 'Domain Rating +5–8 points',
    keyword_rankings: 'Rank for 20+ long-tail "security" keywords',
  },
};
