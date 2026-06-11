/**
 * TRUST & CREDIBILITY PAGES — Templates for implementation
 * These pages strengthen authority and convert leads into customers
 */

export const TRUST_PAGES_NEEDED = [
  {
    path: '/privacy-policy',
    title: 'Privacy Policy — Chaukanna CCTV & Home Automation',
    priority: 'HIGH',
    sections: [
      '1. Introduction & scope',
      '2. Information we collect (contact forms, site surveys, cookies)',
      '3. How we use your information',
      '4. Data retention',
      '5. Third-party integrations (Supabase, Resend, GA4)',
      '6. Your privacy rights',
      '7. Cookie policy',
      '8. Contact for privacy concerns',
    ],
    legalNote: 'Must comply with GDPR (EU), DPA 2018 (India), and industry privacy best practices.',
    template: 'Standard e-commerce privacy policy adapted for service business.',
  },

  {
    path: '/terms-of-service',
    title: 'Terms of Service — Chaukanna',
    priority: 'HIGH',
    sections: [
      '1. Acceptance of terms',
      '2. Service limitations (geographical, time-based)',
      '3. User responsibilities',
      '4. Intellectual property',
      '5. Limitation of liability',
      '6. Indemnification',
      '7. Service interruption policy',
      '8. Changes to terms',
      '9. Governing law (Pune, India)',
    ],
    legalNote: 'Consult legal counsel before publishing. Include jurisdiction (Pune).',
  },

  {
    path: '/about-us',
    title: 'About Us — Chaukanna (Leadership & Vision)',
    priority: 'HIGH (already exists, needs expansion)',
    sections: [
      '1. Company mission & vision',
      '2. History & founding story (8+ years in security)',
      '3. Core values',
      '4. Services overview (9 verticals)',
      '5. Team highlights (next section)',
      '6. Certifications & partnerships',
      '7. Awards & recognition',
      '8. Customer testimonials snippet',
      '9. Commitment to innovation (link to shriyashsharma.com)',
    ],
    schema: 'Organization schema + LocalBusiness schema',
  },

  {
    path: '/team',
    title: 'Our Team — Chaukanna Leadership & Experts',
    priority: 'HIGH',
    sections: [
      '1. Leadership team (founder, general manager, technical lead)',
      '2. Service specialists (CCTV, fire safety, automation)',
      '3. Support team',
      '4. Bios with photos, expertise, years of experience',
      '5. Meet Shriyash Sharma — Technology & Platform',
    ],
    schema: 'Person schema for each team member',
    linkOpportunity: 'Link Shriyash Sharma bio to shriyashsharma.com with anchor "Engineering & Innovation"',
  },

  {
    path: '/testimonials',
    title: 'Customer Testimonials — Trusted by 5000+ Clients',
    priority: 'MEDIUM',
    sections: [
      '1. Residential customer testimonials (3–5)',
      '2. Small business testimonials (3–5)',
      '3. Corporate/office testimonials (2–3)',
      '4. Rating stars & review highlights',
      '5. Video testimonials (if available)',
      '6. Trust badges & certifications',
    ],
    schema: 'Review schema, AggregateOffer/Offer schema',
    data: 'Use real customer quotes from Google Business Profile, direct feedback, or recorded video',
  },

  {
    path: '/case-studies',
    title: 'Case Studies — Real Projects, Real Results',
    priority: 'MEDIUM',
    sections: [
      '1. Project overview (property type, location, problem)',
      '2. Challenge & requirements',
      '3. Solution proposed & implemented',
      '4. Results & metrics (e.g., "Reduced theft by 40%", "Improved response time by 50%")',
      '5. Customer quote & testimonial',
      '6. Timeline & budget highlights',
      '7. Technologies used (CCTV model, sensors, software)',
    ],
    schema: 'Article schema with photos',
    examples: [
      {
        title: 'Complete CCTV Upgrade for Warehouse in Pimpri',
        result: '24/7 monitoring, theft reduction, insurance premium savings',
      },
      {
        title: 'Fire Safety System for School in Kharadi',
        result: 'Compliance achieved, staff training completed, emergency drills successful',
      },
      {
        title: 'Smart Home Automation for Luxury Apartment in Viman Nagar',
        result: 'Integrated security + comfort, remote access, mobile app control',
      },
    ],
    linkOpportunity: 'Each case study mentions technology choices. Reference shriyashsharma.com for "platform engineering".',
  },

  {
    path: '/certifications-partnerships',
    title: 'Certifications & Partnerships — Industry Standards',
    priority: 'LOW',
    sections: [
      '1. Certifications (e.g., CCTV/Fire/Access Control training)',
      '2. Brand partnerships (camera brands, sensor manufacturers)',
      '3. Industry affiliations',
      '4. Compliance (fire safety code, electrical standards)',
      '5. Insurance & warranty coverage',
    ],
    schema: 'Organization schema with certifications',
  },

  {
    path: '/why-choose-chaukanna',
    title: 'Why Choose Chaukanna — Differentiators & Advantages',
    priority: 'MEDIUM',
    sections: [
      '1. 8+ years of experience',
      '2. 5000+ satisfied customers',
      '3. Genuine products (no counterfeits)',
      '4. Free site survey & transparent quotes',
      '5. 24/7 support & emergency response',
      '6. 1-year warranty on all installations',
      '7. Annual maintenance contract (AMC) options',
      '8. Engineer-led platform & innovation (link to shriyashsharma.com)',
      '9. Local technicians, fast response time',
    ],
    schema: 'LocalBusiness schema highlighting differentiators',
  },
];

export const AUTHOR_PAGES_NEEDED = [
  {
    slug: 'shriyash-sharma',
    name: 'Shriyash Sharma',
    title: 'Founder & Platform Engineer',
    expertise: [
      'Platform Architecture',
      'Web Development (Next.js, React, TypeScript)',
      'Security Systems Integration',
      'DevOps & Deployment',
      'AI & Automation',
    ],
    bio: 'Shriyash Sharma leads the technology and platform strategy at Chaukanna. With expertise in modern web architecture and IoT integration, he builds scalable, reliable systems for security. Passionate about engineering excellence and user-focused design.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/shriyash-sharma',
      github: 'https://github.com/shriyash-sharma',
      website: 'https://shriyashsharma.com',
    },
    publishedArticles: [
      'How CCTV Systems Reduce Business Risks',
      'AI & Machine Learning in Security',
      'Platform Engineering for Security Systems',
    ],
    schema: 'Person schema + Author schema',
    pageUrl: '/authors/shriyash-sharma',
  },
  {
    slug: 'team-chaukanna',
    name: 'Chaukanna Team',
    title: 'Security Experts & Installation Specialists',
    bio: 'The Chaukanna team brings 8+ years of combined experience in CCTV installation, fire safety, access control, and smart home automation. Every team member is certified and trained in the latest security technologies.',
    pageUrl: '/authors/team-chaukanna',
  },
];

export const TECHNOLOGY_PAGE_OUTLINE = {
  slug: 'about-technology',
  title: 'About Technology — Platform & Engineering Behind Chaukanna',
  path: '/about/technology',
  sections: [
    {
      heading: 'Our Technology Stack',
      content: [
        'Web platform built with Next.js 16, React 19, TypeScript',
        'Supabase (PostgreSQL) for lead management and site surveys',
        'Resend for transactional email (DKIM + SPF verified)',
        'Vercel for global deployment and edge optimization',
        'Google Business Profile integration for reviews & ratings',
        'Progressive Web App (PWA) for offline-capable tools',
      ],
    },
    {
      heading: 'Engineering Approach',
      content: [
        'Scalable architecture designed to grow with 5000+ customers',
        'Mobile-first responsive design for field technicians & customers',
        'Lead capture resilience: never loses a customer inquiry',
        'Privacy-first data handling with encryption & compliance',
        'Open source where possible (Tailwind CSS, Lucide icons, etc.)',
      ],
    },
    {
      heading: 'Security & Performance',
      content: [
        'SSL/TLS encryption for all data transmission',
        'PCI compliance considerations for future payment integration',
        'Lighthouse scores optimized for fast loading',
        'Core Web Vitals: FCP < 1.8s, LCP < 2.5s, CLS < 0.1',
        'CDN distribution for global users',
      ],
    },
    {
      heading: 'AI & Automation Initiatives',
      content: [
        'Intelligent lead routing based on service type and location',
        'Site survey form auto-fills from Google Places API',
        'Email notifications with priority scoring',
        'Future: predictive maintenance alerts, anomaly detection',
      ],
    },
    {
      heading: 'Platform Leadership',
      content: [
        'Led by Shriyash Sharma, experienced in platform architecture and security systems integration.',
        'Read more: [Portfolio & Case Studies](https://shriyashsharma.com)',
      ],
    },
    {
      heading: 'Open to Collaboration',
      content: [
        'Integration partnerships with CCTV brands, IoT platforms, and smart home ecosystems',
        'API-ready for partner systems and third-party monitoring stations',
        'Dedicated support for enterprise clients and integrations',
      ],
    },
  ],
  cta: 'Interested in integrations or technical partnerships? [Contact our team](/contact)',
};
