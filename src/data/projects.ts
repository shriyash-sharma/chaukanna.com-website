/**
 * Project showcase data — anonymised real-world install patterns.
 *
 * Customer names / building names are intentionally generic to respect privacy
 * and to avoid claiming endorsements that haven't been formally given.
 * Imagery uses brand placeholder until customer-provided photos are added.
 */

export type ProjectCategory =
  | 'cctv'
  | 'fire-alarm'
  | 'biometric'
  | 'smart-home'
  | 'access-control';

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  serviceSlug: string; // links to /<service> page
  area: string;
  city: string;
  propertyType: string; // home, shop, office, society, factory
  problem: string;
  solution: string;
  servicesUsed: string[];
  scopeBullets: string[];
  outcome: string[];
  /**
   * Primary project image. Use a real photo (≥1200x800, JPG/WEBP)
   * in `/public/projects/`. Defaults to the brand placeholder.
   */
  image: string;
  /** Optional gallery of additional photos (real photos only). */
  gallery?: string[];
  publishedAt: string;
}

/** Brand placeholder used until customer-approved real photos arrive. */
export const PROJECT_PLACEHOLDER_IMAGE = '/icons/chaukanna-1024x1024.png';

export function isPlaceholderImage(src: string): boolean {
  return src === PROJECT_PLACEHOLDER_IMAGE;
}

const IMG = PROJECT_PLACEHOLDER_IMAGE;

export const PROJECT_CATEGORIES: { value: ProjectCategory; label: string }[] = [
  { value: 'cctv', label: 'CCTV Installations' },
  { value: 'fire-alarm', label: 'Fire Alarm Installations' },
  { value: 'biometric', label: 'Biometric Systems' },
  { value: 'smart-home', label: 'Smart Home Automation' },
  { value: 'access-control', label: 'Access Control Systems' },
];

export const PROJECTS: Project[] = [
  {
    slug: 'cctv-3bhk-wagholi',
    title: '8-camera CCTV install for a 3 BHK in Wagholi',
    category: 'cctv',
    serviceSlug: '/cctv-installation',
    area: 'Wagholi',
    city: 'Pune',
    propertyType: 'Residential — 3 BHK',
    problem:
      'New residents in a Wagholi gated row-house wanted full external coverage after a neighbour reported a break-in attempt. They also wanted to monitor their domestic help and delivery activity from their phones while at work.',
    solution:
      'We did a free survey on the same day, mapped 8 viable angles (gate, driveway, both side walls, back door, balcony, living room, parents’ room entry) and installed an 8-channel Hikvision DVR with 2 TB WD Purple HDD. All cables routed through PVC conduits, with the DVR placed inside a lockable cabinet above the false ceiling.',
    servicesUsed: ['CCTV Installation', 'Mobile app setup', 'AMC enrollment'],
    scopeBullets: [
      '6 × 2MP Hikvision bullet cameras (outdoor, IR 30m)',
      '2 × 2MP Hikvision dome cameras (indoor)',
      'Hikvision 8-channel DVR with H.265+',
      'WD Purple 2 TB surveillance HDD',
      'Hik-Connect mobile app — 2 user accounts',
      'Motion siren at front gate',
    ],
    outcome: [
      '30+ days of 24×7 footage retention',
      'Push notifications for any after-9 PM motion at the gate',
      'Customer cancelled their separate guard-rounds because of clearer visibility',
    ],
    image: IMG,
    publishedAt: '2026-03-12',
  },
  {
    slug: 'cctv-retail-shop-kharadi',
    title: '4-camera retail shop CCTV in Kharadi',
    category: 'cctv',
    serviceSlug: '/cctv-installation',
    area: 'Kharadi',
    city: 'Pune',
    propertyType: 'Commercial — Retail shop',
    problem:
      'A multi-brand mobile accessories shop owner noticed stock discrepancies and wanted clear counter visibility plus night-time monitoring after a couple of attempted break-ins on the same lane.',
    solution:
      'We placed an overhead 4MP CP Plus dome directly above the cash counter for note + card visibility, a 4MP customer-facing dome to capture buyer faces, and 2 × 2MP outdoor cameras covering the shutter and side alley.',
    servicesUsed: ['CCTV Installation', 'Motion siren', 'Mobile app setup'],
    scopeBullets: [
      '2 × 4MP CP Plus dome cameras (counter + customer)',
      '2 × 2MP CP Plus bullet cameras (shutter + alley)',
      '4-channel CP Plus DVR + 2 TB SkyHawk HDD',
      '110 dB motion siren wired to shutter cam',
      'Hik-Connect equivalent app for owner + manager',
    ],
    outcome: [
      'Counter shrinkage stopped within 2 weeks',
      'Owner now reviews end-of-day playback in 5 minutes from home',
      '30-day rolling retention',
    ],
    image: IMG,
    publishedAt: '2026-02-22',
  },
  {
    slug: 'cctv-housing-society-hadapsar',
    title: '24-camera IP CCTV rollout for a Hadapsar society',
    category: 'cctv',
    serviceSlug: '/cctv-installation',
    area: 'Hadapsar',
    city: 'Pune',
    propertyType: 'Society — 4 blocks, 96 flats',
    problem:
      'Society committee wanted to replace an ageing analog system that had unreliable retention and no number-plate visibility at the gate. They also wanted committee-only playback access.',
    solution:
      'Migrated the society to an IP PoE NVR system with a dedicated 4MP plate-readable camera at the entry boom barrier, 4 × 4MP cameras per block (entry, lift lobby, parking, stairwell ground) and a 16-TB NVR for 45-day retention.',
    servicesUsed: ['CCTV Installation', 'AMC', 'Network design'],
    scopeBullets: [
      '24 × Hikvision IP cameras (mix of 2MP & 4MP)',
      '32-channel Hikvision PoE NVR + 8 TB × 2 HDD',
      'Dedicated 24-port PoE switch in security cabin',
      'Committee-tier and chairperson-tier app accounts',
      'Mock-test for committee on footage export workflow',
    ],
    outcome: [
      '45 days of 24×7 footage retention',
      'Number-plate captures verified at 2 m/s vehicle speed',
      'Single NVR room consolidates all 4 blocks',
    ],
    image: IMG,
    publishedAt: '2026-01-30',
  },
  {
    slug: 'cctv-office-baner',
    title: 'IP CCTV for a 30-seat office in Baner',
    category: 'cctv',
    serviceSlug: '/cctv-installation',
    area: 'Baner',
    city: 'Pune',
    propertyType: 'Commercial — Office',
    problem:
      'A tech company in Baner needed CCTV coverage for entry, server room, finance cabin and pantry, with audit-log integration for ISO compliance.',
    solution:
      'Deployed 8 × 4MP IP cameras on a Dahua PoE NVR with 4 TB storage. Server room camera tied to access-control events. Retention set to 30 days with restricted export rights to HR + IT-Admin only.',
    servicesUsed: ['CCTV Installation', 'Access Control integration', 'AMC'],
    scopeBullets: [
      '8 × 4MP Dahua IP cameras (PoE)',
      '8-channel Dahua NVR + 4 TB',
      'Integration with existing access control logs',
      'Restricted-export user policy documented',
    ],
    outcome: [
      'Cleared ISO audit on first attempt',
      'Door + camera events linked in a single audit timeline',
    ],
    image: IMG,
    publishedAt: '2026-01-14',
  },
  {
    slug: 'fire-alarm-school-hinjewadi',
    title: 'Addressable fire alarm system for a Hinjewadi school',
    category: 'fire-alarm',
    serviceSlug: '/fire-alarm-systems',
    area: 'Hinjewadi',
    city: 'Pune',
    propertyType: 'Institutional — School',
    problem:
      'A K-12 school was upgrading its fire safety to meet revised PMC fire NOC requirements. Existing conventional zoning made it slow to locate the exact fault point during drills.',
    solution:
      'Installed a 1-loop addressable Honeywell panel with 78 detectors across 4 floors, integrated with public-address voice evacuation, plus quarterly testing schedule and full as-built documentation.',
    servicesUsed: ['Fire Alarm Systems', 'Public Address Systems', 'AMC'],
    scopeBullets: [
      'Honeywell 1-loop addressable panel',
      '52 smoke detectors + 18 heat detectors + 8 MCPs',
      '6 hooter-strobes per floor',
      'Voice evacuation tie-in',
      'As-built drawings + per-detector test certificates',
    ],
    outcome: [
      'Fire NOC cleared on first inspection',
      'Drill response time reduced from 8 min to under 4 min',
    ],
    image: IMG,
    publishedAt: '2025-12-18',
  },
  {
    slug: 'fire-alarm-warehouse-pcmc',
    title: 'Conventional fire alarm for a PCMC warehouse',
    category: 'fire-alarm',
    serviceSlug: '/fire-alarm-systems',
    area: 'Pimpri-Chinchwad',
    city: 'Pune',
    propertyType: 'Industrial — Warehouse',
    problem:
      'A logistics warehouse with 8 m ceilings needed cost-effective fire detection without expensive addressable hardware.',
    solution:
      'Deployed a 4-zone conventional Notifier panel with 2 beam detectors at 7.5 m height, perimeter heat detectors, MCPs at every exit and 110 dB hooters at each loading bay.',
    servicesUsed: ['Fire Alarm Systems', 'AMC'],
    scopeBullets: [
      '4-zone conventional panel',
      '2 × beam smoke detectors (high ceiling)',
      '14 heat detectors around perimeter',
      '6 manual call points at exits',
      '4 hooter-strobes',
      'FRLS cabling throughout',
    ],
    outcome: [
      'Insurance premium reduced 8% on renewal',
      'Quarterly drill log maintained',
    ],
    image: IMG,
    publishedAt: '2025-11-25',
  },
  {
    slug: 'biometric-attendance-office-viman-nagar',
    title: 'Face-recognition attendance for a 60-staff office in Viman Nagar',
    category: 'biometric',
    serviceSlug: '/biometric-attendance',
    area: 'Viman Nagar',
    city: 'Pune',
    propertyType: 'Commercial — Office',
    problem:
      'A growing healthcare BPO had three shifts with frequent late-mark disputes and proxy-attendance suspicions on their existing fingerprint device.',
    solution:
      'Replaced fingerprint with two ZKTeco face devices (entry + back exit), connected to a cloud-based attendance platform with auto-shift detection, late-grace policy and WhatsApp alerts for first-day-absentees.',
    servicesUsed: ['Biometric Attendance', 'Cloud HRMS integration'],
    scopeBullets: [
      '2 × ZKTeco face recognition devices',
      'Cloud attendance platform with shift roster',
      'WhatsApp automation for late / absent alerts',
      'Payroll-ready CSV export',
    ],
    outcome: [
      'Proxy attendance eliminated',
      'HR saves ~6 hours/week in reconciliation',
    ],
    image: IMG,
    publishedAt: '2025-11-10',
  },
  {
    slug: 'biometric-school-wakad',
    title: 'Face + RFID attendance for a Wakad school',
    category: 'biometric',
    serviceSlug: '/biometric-attendance',
    area: 'Wakad',
    city: 'Pune',
    propertyType: 'Institutional — School',
    problem:
      'A K-10 school wanted reliable staff attendance and a child-safety entry log without forcing biometric on young students.',
    solution:
      'Face devices for staff, RFID cards for students with entry/exit logs sent to parents via WhatsApp. Visitor pass tablet at reception.',
    servicesUsed: ['Biometric Attendance', 'Access Control', 'Visitor Management'],
    scopeBullets: [
      'Face devices for teaching + non-teaching staff',
      'RFID cards for students (entry / exit log)',
      'WhatsApp parent alerts on entry/exit',
      'Visitor tablet with photo capture',
    ],
    outcome: [
      'Parent satisfaction improved at next PTA',
      'Zero attendance disputes for two consecutive quarters',
    ],
    image: IMG,
    publishedAt: '2025-10-28',
  },
  {
    slug: 'smart-home-3bhk-koregaon-park',
    title: 'Smart home automation for a 3 BHK in Koregaon Park',
    category: 'smart-home',
    serviceSlug: '/smart-home-automation',
    area: 'Koregaon Park',
    city: 'Pune',
    propertyType: 'Residential — 3 BHK',
    problem:
      'Frequent-traveller couple wanted to control lights, ACs, curtains and a smart lock from their phone, with scenes for "Welcome Home", "Movie" and "Sleep".',
    solution:
      'Wiser/Schneider switch modules across 14 points, 2 AC IR blasters, 4 curtain motors, a Yale smart lock and a central hub. Programmed 5 scenes and integrated with Alexa.',
    servicesUsed: ['Smart Home Automation', 'Door access', 'Hub integration'],
    scopeBullets: [
      '14 × Wiser smart switch modules',
      '2 AC IR blasters',
      '4 curtain motors (single + double track)',
      'Yale smart door lock',
      'Alexa + mobile app + 5 mood scenes',
    ],
    outcome: [
      'Couple now controls full home before reaching the door',
      'Lighting bill down ~14% due to scheduled-off scenes',
    ],
    image: IMG,
    publishedAt: '2025-10-12',
  },
  {
    slug: 'smart-home-bungalow-mundhwa',
    title: 'Full bungalow automation in Mundhwa',
    category: 'smart-home',
    serviceSlug: '/smart-home-automation',
    area: 'Mundhwa',
    city: 'Pune',
    propertyType: 'Residential — Bungalow',
    problem:
      'Owners of a 4 BHK independent bungalow wanted full lighting, AC, curtain, gate and garden-irrigation control from a single app, plus integration with their CCTV and intercom.',
    solution:
      'Wiser + custom relays across 38 control points, 6 curtain motors, gate motor integration, irrigation timer, video-doorbell linked to indoor monitor. Single dashboard via Wiser Home app.',
    servicesUsed: ['Smart Home Automation', 'CCTV Integration', 'Video Door Phone'],
    scopeBullets: [
      '38 smart switch + relay points',
      '6 curtain motors',
      'Gate motor automation',
      '4-zone irrigation timer',
      'Video doorbell to indoor monitor + app',
    ],
    outcome: [
      'Single-app control across home, gate and garden',
      'Owner travels confidently for 2+ weeks at a time',
    ],
    image: IMG,
    publishedAt: '2025-09-22',
  },
  {
    slug: 'access-control-coworking-magarpatta',
    title: 'Multi-floor access control for a Magarpatta co-working space',
    category: 'access-control',
    serviceSlug: '/access-control-systems',
    area: 'Magarpatta',
    city: 'Pune',
    propertyType: 'Commercial — Co-working',
    problem:
      'A co-working operator across two floors needed per-member access cards, day-pass support, time-bound entry and a clean audit trail per company tenant.',
    solution:
      '12-door card + mobile credential system on a cloud-managed Spintly platform, integrated with visitor pre-registration and per-tenant audit reports exportable on demand.',
    servicesUsed: ['Access Control Systems', 'Visitor Management'],
    scopeBullets: [
      '12 doors with maglock + reader',
      'Cloud-managed credential system',
      'Mobile-credential option for premium plans',
      'Per-tenant audit log export',
      'Day-pass workflow with QR code',
    ],
    outcome: [
      'Eliminated all physical keys',
      'Tenant audit reports delivered in 1 click',
    ],
    image: IMG,
    publishedAt: '2025-09-08',
  },
  {
    slug: 'access-control-server-room-keshavnagar',
    title: 'Two-factor access control for a Keshavnagar startup’s server room',
    category: 'access-control',
    serviceSlug: '/access-control-systems',
    area: 'Keshavnagar',
    city: 'Pune',
    propertyType: 'Commercial — Office (server room)',
    problem:
      'A SaaS startup needed two-factor (card + fingerprint) entry into their server room with an audit trail tied to their CCTV.',
    solution:
      'Single-door 2FA solution with door-held-open alarm, anti-passback, and DVR event linkage. All events appear in a unified log alongside the camera footage.',
    servicesUsed: ['Access Control Systems', 'CCTV Integration'],
    scopeBullets: [
      'Card + fingerprint 2FA reader',
      'Electric strike lock',
      'Door-held-open alarm at 30 sec',
      'Anti-passback policy',
      'CCTV + door event correlation',
    ],
    outcome: [
      'Tight audit trail for SOC2 readiness',
      'Zero unauthorised entries in 6 months of operation',
    ],
    image: IMG,
    publishedAt: '2025-08-20',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  const clean = slug.replace(/^\/+/, '');
  return PROJECTS.find((p) => p.slug === clean);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return PROJECTS.filter((p) => p.category === category);
}

export function getAllProjectAreas(): string[] {
  return Array.from(new Set(PROJECTS.map((p) => p.area))).sort();
}
