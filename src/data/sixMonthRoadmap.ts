/**
 * 6-MONTH SEO CONTENT ROADMAP
 * Phased implementation plan with deliverables & success metrics
 */

export const SIX_MONTH_ROADMAP = {
  phase1_week1to4: {
    name: 'Foundation & Structure',
    goals: [
      'Create SEO pages (12 guides + 8 blog outlines)',
      'Build internal linking framework',
      'Implement robots.txt & sitemap',
      'Setup trust pages',
    ],
    deliverables: [
      '✅ robots.txt (created)',
      '✅ Content outlines for 12 guides (created)',
      '✅ Content outlines for 8 blog articles (created)',
      '✅ Internal linking map (created)',
      '✅ Trust pages templates (created)',
      '⏳ Sitemap.xml (next step)',
    ],
    contentTasks: [
      {
        priority: 'P0 — Start immediately',
        items: [
          'Write /home-security-tips (1800 words)',
          'Write /cctv-installation-guide (2000 words)',
          'Write /office-security-best-practices (1900 words)',
        ],
      },
      {
        priority: 'P1 — Parallel',
        items: [
          'Write /fire-safety-checklist (1700 words)',
          'Write /security-audit-services (1600 words)',
          'Write /about/technology (600 words, link to shriyashsharma.com)',
        ],
      },
    ],
    ownershipModel:
      'User writes content with AI assistance. Templates & outlines provided. Schema & metadata handled by agent.',
    metrics: {
      indexedPages: 30,
      internalLinks: 50,
      structured_data: '100% guides',
    },
    deliveryDate: 'End of Week 4',
  },

  phase2_week5to8: {
    name: 'Trust & Authority Build',
    goals: [
      'Complete remaining SEO guides',
      'Launch blog articles',
      'Create trust signal pages',
      'Implement author schema',
    ],
    contentTasks: [
      {
        priority: 'P0 — Finish guides',
        items: [
          'Write /visitor-management-system (1500 words)',
          'Write /warehouse-security-guide (1800 words)',
          'Write /apartment-security-guide (1700 words)',
          'Write /school-security-best-practices (1750 words)',
          'Write /emergency-response-planning (1800 words)',
          'Write /business-risk-assessment (1900 words)',
        ],
      },
      {
        priority: 'P1 — Launch blog',
        items: [
          'Publish /blog/how-cctv-systems-reduce-business-risks (1400 words)',
          'Publish /blog/top-security-mistakes-small-businesses-make (1500 words)',
          'Publish /blog/security-checklist-residential-societies (1600 words)',
        ],
      },
      {
        priority: 'P2 — Trust pages',
        items: [
          'Create /privacy-policy (template provided)',
          'Create /terms-of-service (template provided)',
          'Create /team page (expand existing About)',
          'Create /testimonials (use real GBP reviews)',
        ],
      },
    ],
    technicalTasks: [
      'Build sitemap.xml with dynamic page generation',
      'Add author schema to blog posts',
      'Implement breadcrumb schema on all pages',
      'Add FAQ schema to guide pages',
    ],
    metrics: {
      indexedPages: 50,
      blogPosts: 3,
      trustPages: 4,
      authorSchema: 'Active on all blog posts',
    },
    deliveryDate: 'End of Week 8',
  },

  phase3_week9to12: {
    name: 'Cross-Domain & Authority',
    goals: [
      'Complete all blog articles',
      'Setup cross-domain linking',
      'Begin backlink outreach',
      'Monitor search performance',
    ],
    contentTasks: [
      {
        priority: 'P0 — Finish blog series',
        items: [
          'Publish /blog/visitor-management-best-practices (1400 words)',
          'Publish /blog/physical-security-vs-digital-security (1500 words)',
          'Publish /blog/ai-improve-security-monitoring (1600 words)',
          'Publish /blog/security-audit-framework-growing-businesses (1700 words)',
          'Publish /blog/emergency-preparedness-guide-offices (1800 words)',
        ],
      },
      {
        priority: 'P1 — Cross-domain content',
        items: [
          'Coordinate case study on shriyashsharma.com: "Building Chaukanna" (2000 words)',
          'Add /authors/shriyash-sharma page on Chaukanna',
          'Update shriyashsharma.com bio to link to Chaukanna',
        ],
      },
    ],
    backlinksOutreach: [
      'Outreach to 10–15 Pune-local blogs (guest post proposals)',
      'Partner with 5 CCTV/fire safety brands for mentions',
      'Get mentioned in 3 local business publications',
      'Request backlinks from builder/electrician partner websites',
    ],
    metrics: {
      indexedPages: 65,
      blogPosts: 8,
      crossDomainLinks: 2,
      backlinks: 10,
      gscImpressions: 500,
      gscClicks: 30,
    },
    deliveryDate: 'End of Week 12 (End of Month 3)',
  },

  phase4_week13to24: {
    name: 'Growth & Optimization (Ongoing)',
    goals: [
      'Scale blog publishing (2–3 posts/month)',
      'Grow backlinks (15–20/month)',
      'Optimize top-performing pages',
      'Build case studies with customers',
    ],
    contentTasks: [
      {
        priority: 'Ongoing — Monthly blog',
        frequency: '2–3 new blog posts per month',
        topics: [
          'Seasonal security tips',
          'Industry case studies',
          'Technology updates',
          'Customer success stories',
        ],
      },
      {
        priority: 'Q2 — Case studies',
        items: [
          'Create /case-studies page',
          'Publish 3–5 detailed project case studies (1500–2000 words each)',
          'Interview customer for testimonials & photos',
        ],
      },
      {
        priority: 'Q3 — Expansion content',
        items: [
          'Create /security-training (educational resources)',
          "Develop CCTV buyer's guide (2000+ words)",
          'Build interactive security risk assessment tool',
        ],
      },
    ],
    backlinkStrategy: [
      'Guest posting (2–3 posts/month)',
      'Partnership mentions (5–10/month)',
      'Local news feature pitches (2–3/month)',
      'Create linkable tools & resources',
    ],
    metrics: {
      phase_4months: {
        indexedPages: 80,
        rankings_longTail: '30+ keywords in top 50',
        rankings_top10: '5–10 keywords',
        backlinks: 40,
        monthlyImpressions: '2000+',
        monthlyClic: '150+',
        estimatedOrganicLeads: '20–30/month',
      },
    },
    deliveryDate: 'Ongoing through Month 6',
  },

  contentWritingOptions: {
    option1_aiAssisted: {
      description: 'User provides outline, AI drafts content, user edits & approves',
      effort: 'Medium (30–40% reduction vs. from-scratch)',
      quality: 'Good with proper editing',
      cost: 'Time-efficient',
      timeline: '2–3 days per 1500-word article',
    },
    option2_userOwned: {
      description: 'User writes all content. Agent provides templates, SEO guidelines, schema.',
      effort: 'High (full ownership)',
      quality: 'Excellent (authentic brand voice)',
      cost: 'Slower but complete control',
      timeline: '5–7 days per 1500-word article',
    },
    option3_hybrid: {
      description: 'Agent writes first draft (80%), user provides feedback, agent refines (20%)',
      effort: 'Low-Medium',
      quality: 'Very good with brand alignment review',
      cost: 'Fast + good quality',
      timeline: '3–4 days per 1500-word article',
      recommendedForChaukanna: 'YES — Efficient for 20+ articles',
    },
  },

  successMetricsTracking: {
    month1: {
      organic_impressions: '300–500',
      organic_clicks: '20–40',
      indexed_pages: 35,
      rankings_longTail: 5,
    },
    month3: {
      organic_impressions: '1500–2500',
      organic_clicks: '100–150',
      indexed_pages: 55,
      rankings_longTail: 20,
      backlinks: 10,
    },
    month6: {
      organic_impressions: '3000–5000',
      organic_clicks: '250–400',
      indexed_pages: 65,
      rankings_longTail: 40,
      rankings_top10: '5–10',
      backlinks: 25,
      estimatedOrganicLeads: '15–25',
    },
  },

  reportingCadence: [
    {
      frequency: 'Weekly (Weeks 1–4)',
      focus: 'Content creation progress, technical setup',
    },
    {
      frequency: 'Bi-weekly (Weeks 5–12)',
      focus: 'Content + backlink outreach status',
    },
    {
      frequency: 'Monthly (Months 4–6)',
      focus: 'GSC impressions, rankings, organic traffic, leads',
    },
  ],
};

export const IMPLEMENTATION_CHECKLIST = {
  prelaunch: [
    '☐ Finalize keyword list + content outlines',
    '☐ Review all trust pages for legal compliance (privacy, terms)',
    '☐ Setup Google Search Console + submit sitemap',
    '☐ Setup GA4 event tracking for guide conversions',
    '☐ Prepare content writing template (for consistency)',
  ],
  launch_week: [
    '☐ Create & publish first 3 guide pages',
    '☐ Launch /about/technology page (link to shriyashsharma.com)',
    '☐ Submit sitemap to GSC',
    '☐ Publish Privacy + Terms pages',
    '☐ Update robots.txt + robots.txt (already done)',
  ],
  ongoing: [
    '☐ Monitor GSC weekly for crawl errors',
    '☐ Track rankings in Search Console (add tracking keywords)',
    '☐ Monitor backlink growth (Ahrefs/Semrush)',
    '☐ A/B test title tags + meta descriptions',
    '☐ Measure conversion rate from guides → /book-site-survey',
  ],
};
