/**
 * Service-area data for the 15 Pune neighbourhoods we cover.
 *
 * Each area has UNIQUE copy — local landmarks, typical customer profile,
 * usage patterns. This is the canonical source for `/service-areas` index
 * and `/service-areas/[slug]` dynamic pages.
 */

import type { FAQItem } from '@/components/FAQ';

export interface ServiceArea {
  slug: string; // url-friendly area key
  city: string;
  fullName: string; // display name e.g. "Wagholi, Pune"
  pincode?: string;
  hero: string;
  intro: string[];
  customerProfile: string;
  popularServices: string[]; // service slugs from /data/services
  localContext: string;
  benefits: string[];
  responseTime: string;
  landmarks: string[];
  faqs: FAQItem[];
}

const STANDARD_SERVICES = [
  '/cctv-installation',
  '/cctv-amc',
  '/fire-alarm-systems',
  '/biometric-attendance',
  '/smart-home-automation',
  '/access-control-systems',
  '/video-door-phone',
  '/repair-maintenance',
];

const AREA_FAQ_TEMPLATE = (city: string): FAQItem[] => [
  {
    question: `Do you charge a visit fee for site surveys in ${city}?`,
    answer: `No. Site surveys in ${city} are free. We visit your address, measure the angles and share a written quote — at no cost and with no obligation to confirm.`,
  },
  {
    question: `How fast can you install CCTV in ${city}?`,
    answer: `For most addresses in ${city}, we can do the survey same-day and install within 24–48 hours. Urgent installs can usually be done the same day if confirmed before noon.`,
  },
  {
    question: `Do you provide GST invoice and warranty paperwork in ${city}?`,
    answer: `Yes. Every install in ${city} comes with a proper GST invoice, manufacturer warranty cards for cameras and recorder, plus our 1-year workmanship warranty in writing.`,
  },
  {
    question: `Do you handle societies and commercial buildings in ${city}?`,
    answer: `Yes. We work with housing societies, offices, shops, schools and factories in ${city}, including AGM-ready proposals for society boards.`,
  },
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: 'pune',
    city: 'Pune',
    fullName: 'Pune City',
    hero: 'Security & smart home services across Pune city',
    intro: [
      'We cover the entire Pune Municipal Corporation (PMC) area — old city, peth localities, civil lines, central business district and the eastern / western suburbs. Our technicians operate out of a Pune base, so response times are typically same-day across the city.',
      'For Pune residents and businesses, our most-asked services are residential CCTV (gated bungalows, 2–3 BHK flats), shop CCTV (FC Road, MG Road, Camp), and office CCTV + access control in the IT corridor.',
    ],
    customerProfile:
      'A mix of long-term Pune residents wanting genuine warranty hardware, IT professionals upgrading to smart automation, and SMB owners who need transparent quoting without aggressive upsells.',
    popularServices: STANDARD_SERVICES,
    localContext:
      'Pune has dense residential blocks and old wiring in many heritage areas. Our installs use FRLS cabling and conduit even on rough surfaces, so the work blends with old construction without compromising safety.',
    benefits: [
      'Same-day site surveys across PMC',
      'Genuine Hikvision / CP Plus / Dahua with full warranty',
      'GST invoice + AMC option on every install',
      'Marathi-speaking technicians available',
    ],
    responseTime: 'Same-day across PMC',
    landmarks: [
      'FC Road', 'MG Road', 'JM Road', 'Camp', 'Deccan',
      'Kothrud', 'Karve Nagar', 'Aundh', 'Shivajinagar', 'Erandwane',
    ],
    faqs: AREA_FAQ_TEMPLATE('Pune'),
  },
  {
    slug: 'wagholi',
    city: 'Wagholi',
    fullName: 'Wagholi, Pune',
    pincode: '412207',
    hero: 'CCTV, fire alarm & home automation in Wagholi',
    intro: [
      'Wagholi has grown rapidly into a residential hotspot for Kharadi and Viman Nagar workers. We cover most of the Wagholi gram panchayat area plus the surrounding gated communities along Nagar Road.',
      'New row-houses, premium 3 BHK apartments and emerging societies make up most of our Wagholi installs. Many residents want strong outdoor coverage because of the still-developing perimeter security in newer projects.',
    ],
    customerProfile:
      'Mostly working professionals in Wagholi gated communities who want full external camera coverage, mobile monitoring while at the office, and clean cabling that the society committee will approve.',
    popularServices: STANDARD_SERVICES,
    localContext:
      'Many Wagholi properties are still on developing roads with limited streetlights, so outdoor camera placement and IR range matter. We recommend 4MP cameras at gates and 2MP elsewhere for the best price-performance balance.',
    benefits: [
      'Wagholi-area same-day site survey',
      'Society-friendly proposals (committee-ready)',
      'Outdoor IR coverage tuned for unlit lanes',
      'AMC pickup within 4–6 hours for emergency calls',
    ],
    responseTime: 'Within 60 minutes for survey',
    landmarks: [
      'Awfis Wagholi', 'Skyi Songbirds', 'Vilas Javdekar', 'Kolte Patil Life Republic vicinity', 'Bakori Phata',
    ],
    faqs: AREA_FAQ_TEMPLATE('Wagholi'),
  },
  {
    slug: 'kharadi',
    city: 'Kharadi',
    fullName: 'Kharadi, Pune',
    pincode: '411014',
    hero: 'Office & home security solutions in Kharadi',
    intro: [
      'Kharadi is one of Pune’s major IT hubs, anchored by EON IT Park and World Trade Center. We work with both the residential blocks (Magarpatta-adjacent, Riverside, Tata Aria, Mantra Properties) and small-to-mid commercial offices in the surrounding business parks.',
      'For homes, the dominant requirement is smart-home + CCTV combos. For offices, it’s IP-based CCTV with PoE NVRs, integrated with access control and visitor management.',
    ],
    customerProfile:
      'IT professionals and 30–200 seat IT/ITES offices that want clean install work, audit-ready logs and modern app-based controls.',
    popularServices: STANDARD_SERVICES,
    localContext:
      'Most Kharadi offices already have Cat6 cabling in the false ceiling, which makes IP CCTV + PoE access control much faster to deploy. Residential towers are mostly newer construction with neutral wires available, so smart-home rollouts are smooth.',
    benefits: [
      'IP CCTV + access control specialists for Kharadi offices',
      'Smart home automation with brand-supported hardware',
      'Quick-turnaround for IT campus tenants',
      'After-hours installation windows available',
    ],
    responseTime: 'Same-day for most addresses',
    landmarks: [
      'EON IT Park', 'WTC Kharadi', 'Phoenix MarketCity', 'Reliance Smart', 'Zensar campus',
    ],
    faqs: AREA_FAQ_TEMPLATE('Kharadi'),
  },
  {
    slug: 'hadapsar',
    city: 'Hadapsar',
    fullName: 'Hadapsar, Pune',
    pincode: '411028',
    hero: 'Mixed-use property security solutions in Hadapsar',
    intro: [
      'Hadapsar is one of the most mixed-use areas in Pune — residential societies, the Amanora township, manufacturing units, and a strong retail base around Magarpatta. Our installs reflect this mix: society NVR rollouts, factory perimeter systems, and shop CCTV around Solapur Road.',
      'Our Hadapsar AMC base is one of the busiest because of the older first-generation IT-park offices that need ongoing maintenance.',
    ],
    customerProfile:
      'A balanced mix of homeowners, society committees, shopkeepers and small factory owners — most prioritise reliability and quick fault response.',
    popularServices: STANDARD_SERVICES,
    localContext:
      'Mixed-use means a range of cable runs from short shop installs to multi-block society rollouts. We deploy local techs for sub-2-hour AMC response across Hadapsar.',
    benefits: [
      'Local AMC pickup within 2 hours',
      'Society + factory installation expertise',
      'Shop CCTV with anti-shrinkage focus',
      'Genuine hardware with traceable warranty',
    ],
    responseTime: 'Within 60–90 minutes',
    landmarks: [
      'Amanora Park Town', 'Magarpatta City vicinity', 'Solapur Road', 'Manjri', 'Sasane Nagar',
    ],
    faqs: AREA_FAQ_TEMPLATE('Hadapsar'),
  },
  {
    slug: 'viman-nagar',
    city: 'Viman Nagar',
    fullName: 'Viman Nagar, Pune',
    pincode: '411014',
    hero: 'Premium residential & retail security in Viman Nagar',
    intro: [
      'Viman Nagar is dense with premium apartments, gated communities and a strong retail strip around Phoenix Marketcity. Many of our installs here are for owners who already have a CCTV system but want to upgrade to higher resolution or integrate with smart home.',
      'For retail and F&B businesses around Nagar Road, we deploy counter-focused CCTV with 4MP+ resolution for cash-handling visibility.',
    ],
    customerProfile:
      'Premium homeowners, restaurant owners around Nagar Road, and small office occupiers in Datta Mandir/airport-side blocks.',
    popularServices: STANDARD_SERVICES,
    localContext:
      'Higher property value means buyers expect premium brand hardware (Hikvision ColorVu, Honeywell, Bosch). Smart home + CCTV bundles are common.',
    benefits: [
      'Premium-brand CCTV stocked on demand',
      'Smart-home + security integrations',
      'F&B / restaurant counter coverage specialists',
      'Discreet residential install (concealed cabling)',
    ],
    responseTime: 'Same-day',
    landmarks: [
      'Phoenix MarketCity', 'Datta Mandir', 'Symbiosis Viman Nagar', 'Pune Airport (vicinity)', 'Vimannagar Chowk',
    ],
    faqs: AREA_FAQ_TEMPLATE('Viman Nagar'),
  },
  {
    slug: 'baner',
    city: 'Baner',
    fullName: 'Baner, Pune',
    pincode: '411045',
    hero: 'CCTV, smart home & office automation in Baner',
    intro: [
      'Baner is one of Pune’s premium residential and office belts. We cover the entire Baner-Pashan stretch with regular installs in mid-rise apartments, independent bungalows and 30–100 seat offices.',
      'Smart home automation is one of our most-requested Baner services — typically a combination of Wiser/Schneider switch modules, curtain motors and CCTV integration on a single app.',
    ],
    customerProfile:
      'Premium homeowners, tech professionals upgrading their existing setups, and growing startups in the Baner office corridor.',
    popularServices: STANDARD_SERVICES,
    localContext:
      'Newer construction in Baner has neutral wiring available, which makes smart-home retrofits straightforward. We use brand-supported hardware (no Tuya-only options) for long-term reliability.',
    benefits: [
      'Smart home rollouts that survive Wi-Fi outages',
      'CCTV + smart lock + intercom integration',
      'Office-grade access control',
      'Premium brand stocking',
    ],
    responseTime: 'Same-day',
    landmarks: [
      'Baner Road', 'Sus Road', 'Pashan-Baner Link Road', 'Mahabaleshwar Petrol Pump', 'Balewadi High Street vicinity',
    ],
    faqs: AREA_FAQ_TEMPLATE('Baner'),
  },
  {
    slug: 'wakad',
    city: 'Wakad',
    fullName: 'Wakad, Pune',
    pincode: '411057',
    hero: 'Security and smart home solutions in Wakad',
    intro: [
      'Wakad is a high-growth residential belt on the way to Hinjewadi. Our installs are dominated by 2–3 BHK apartments and townships. Most clients here are dual-income IT couples who travel often and want strong mobile monitoring.',
      'Society rollouts are common around the Hinjewadi-adjacent areas — typically 18–28 IP cameras across multiple blocks with committee-tier mobile access.',
    ],
    customerProfile:
      'IT professionals in 2–3 BHK apartments, growing society committees, and small shops along Wakad-Pimple Saudagar Road.',
    popularServices: STANDARD_SERVICES,
    localContext:
      'New apartments come with shared cable ducts, making society installs efficient. The Wakad-Hinjewadi traffic corridor means we typically schedule large jobs outside peak hours.',
    benefits: [
      'Apartment-friendly install (committee permissions handled)',
      'Society-grade IP CCTV rollouts',
      'Mobile-first monitoring setup',
      'After-hours install windows',
    ],
    responseTime: 'Same-day or next-day',
    landmarks: [
      'Datta Mandir Chowk Wakad', 'Wakad Bridge', 'Bhumkar Chowk', 'Kaspate Vasti', 'Hinjewadi Phase 1 entry',
    ],
    faqs: AREA_FAQ_TEMPLATE('Wakad'),
  },
  {
    slug: 'hinjewadi',
    city: 'Hinjewadi',
    fullName: 'Hinjewadi, Pune',
    pincode: '411057',
    hero: 'Office & residential security in Hinjewadi IT Park',
    intro: [
      'Hinjewadi (Rajiv Gandhi Infotech Park) is one of India’s largest IT corridors. We work with both the surrounding residential clusters (Megapolis, Life Republic, Blue Ridge) and the small-to-mid offices in Phase 1, 2 and 3.',
      'For offices we typically deploy 16–48 channel IP CCTV with access control + visitor management. For homes we deploy 4–8 camera kits with smart-home addons.',
    ],
    customerProfile:
      'IT/ITES offices, large gated communities, single-family homes in Megapolis, and shops/cafes along the Hinjewadi-Wakad strip.',
    popularServices: STANDARD_SERVICES,
    localContext:
      'Offices here often need ISO/SOC-2 compatible audit trails — we deliver retention policies and access-log exports in standard formats.',
    benefits: [
      'Audit-ready CCTV + access control for offices',
      'Large gated-community NVR rollouts',
      'Same-day repair within Phase 1–3',
      'Multi-block site management',
    ],
    responseTime: 'Same-day in Phase 1–3',
    landmarks: [
      'Phase 1 (Infosys)', 'Phase 2', 'Phase 3', 'Megapolis', 'Blue Ridge', 'Life Republic',
    ],
    faqs: AREA_FAQ_TEMPLATE('Hinjewadi'),
  },
  {
    slug: 'pimpri',
    city: 'Pimpri',
    fullName: 'Pimpri, PCMC',
    pincode: '411017',
    hero: 'CCTV & security systems across Pimpri',
    intro: [
      'Pimpri is part of the PCMC twin-cities and one of our oldest service zones. We cover residential blocks, the Pimpri main market, schools and a sizable factory belt.',
      'Demand here is dominated by shop CCTV (Pimpri market), school CCTV + biometric attendance, and small-factory perimeter systems.',
    ],
    customerProfile:
      'Shopkeepers, factory owners, schools and middle-class apartment owners. Cost-conscious but warranty-conscious.',
    popularServices: STANDARD_SERVICES,
    localContext:
      'Older Pimpri buildings have legacy wiring; we often need surface casing in lieu of in-wall conduiting, which we flag at the quote stage so customers aren’t surprised.',
    benefits: [
      'Cost-effective brand options (CP Plus default)',
      'School + factory installation experience',
      'Shop CCTV with anti-shrinkage focus',
      'Genuine GST invoice + warranty',
    ],
    responseTime: 'Same-day across Pimpri',
    landmarks: [
      'Pimpri Bus Stand', 'Pimpri Market', 'Nigdi-Pimpri Road', 'Bajaj Auto vicinity', 'YCM Hospital',
    ],
    faqs: AREA_FAQ_TEMPLATE('Pimpri'),
  },
  {
    slug: 'chinchwad',
    city: 'Chinchwad',
    fullName: 'Chinchwad, PCMC',
    pincode: '411033',
    hero: 'Reliable security installations in Chinchwad',
    intro: [
      'Chinchwad spans residential blocks, the Bird Valley vicinity, industrial belts and a strong retail strip along Chinchwad Station Road. Our installs here are split across residential (40%), retail (35%) and industrial/factory (25%).',
    ],
    customerProfile:
      'A mix of long-term Chinchwad residents, factory owners and busy retail shopkeepers. Most want simple, reliable systems with clear after-sale support.',
    popularServices: STANDARD_SERVICES,
    localContext:
      'Factory installs in Chinchwad often need rugged outdoor cameras (IP67) and high-clearance beam detectors for warehousing. We carry these on hand.',
    benefits: [
      'Industrial-grade cameras and detectors stocked',
      'Same-day shop install',
      'Reliable AMC schedule',
      'Marathi-speaking field team',
    ],
    responseTime: 'Same-day',
    landmarks: [
      'Chinchwad Station', 'Bird Valley', 'Walhekarwadi', 'Thergaon', 'Chinchwad Gaon',
    ],
    faqs: AREA_FAQ_TEMPLATE('Chinchwad'),
  },
  {
    slug: 'mundhwa',
    city: 'Mundhwa',
    fullName: 'Mundhwa, Pune',
    pincode: '411036',
    hero: 'CCTV, smart home & access control in Mundhwa',
    intro: [
      'Mundhwa has transformed in the last 5 years into a high-density residential and commercial belt next to Magarpatta and Keshavnagar. Most of our Mundhwa installs are premium apartment complexes (4–8 cameras + smart home) and small commercial offices.',
    ],
    customerProfile:
      'IT professionals in new premium apartments, single-family bungalow owners along the riverfront, and small businesses.',
    popularServices: STANDARD_SERVICES,
    localContext:
      'Newer construction means smart-home retrofits are smooth. Premium apartment owners typically want brand-supported hardware (no cheap Tuya alternatives).',
    benefits: [
      'Premium-brand stocking',
      'Smart home + CCTV bundles',
      'Riverfront-property cabling expertise',
      'Quick install windows',
    ],
    responseTime: 'Same-day',
    landmarks: [
      'Mundhwa Bridge', 'Riverside Towers vicinity', 'Magarpatta-Mundhwa Road', 'Keshavnagar approach',
    ],
    faqs: AREA_FAQ_TEMPLATE('Mundhwa'),
  },
  {
    slug: 'keshavnagar',
    city: 'Keshavnagar',
    fullName: 'Keshavnagar, Pune',
    pincode: '411036',
    hero: 'CCTV & home automation in Keshavnagar',
    intro: [
      'Keshavnagar has emerged as a sought-after residential pocket between Mundhwa and Manjri. Our installs here are concentrated in newer high-rise apartments and a growing cluster of mid-size offices.',
    ],
    customerProfile:
      'Working professionals and young families in newer towers; small offices and clinics.',
    popularServices: STANDARD_SERVICES,
    localContext:
      'High-rise installs often require coordination with society maintenance for cable routing; we handle the paperwork side too.',
    benefits: [
      'High-rise installation experience',
      'Society-friendly approach',
      'Clean concealed cabling',
      'Mobile-first monitoring setup',
    ],
    responseTime: 'Same-day',
    landmarks: [
      'Keshavnagar Chowk', 'Mundhwa-Keshavnagar Road', 'Riverside complexes', 'Manjri vicinity',
    ],
    faqs: AREA_FAQ_TEMPLATE('Keshavnagar'),
  },
  {
    slug: 'lohegaon',
    city: 'Lohegaon',
    fullName: 'Lohegaon, Pune',
    pincode: '411047',
    hero: 'Security & smart home services in Lohegaon',
    intro: [
      'Lohegaon — covering the area between Viman Nagar and the airport — has a fast-growing residential population and a steady retail base. Our installs span single-family homes, 2–3 BHK apartments and small shops.',
    ],
    customerProfile:
      'Airline and airport-area workers, IT professionals, shopkeepers along the Lohegaon-Wagholi road.',
    popularServices: STANDARD_SERVICES,
    localContext:
      'Properties closer to the airport need cabling that respects local zoning; our team handles common cabling questions up-front.',
    benefits: [
      'Airport-area zoning-aware installs',
      'Shop counter coverage specialists',
      'Same-day survey',
      'AMC option on every install',
    ],
    responseTime: 'Same-day',
    landmarks: [
      'Lohegaon Airport', 'Lohegaon Gaonthan', 'Wagholi Road junction', 'Symbiosis Lohegaon road',
    ],
    faqs: AREA_FAQ_TEMPLATE('Lohegaon'),
  },
  {
    slug: 'magarpatta',
    city: 'Magarpatta',
    fullName: 'Magarpatta, Pune',
    pincode: '411013',
    hero: 'Premium residential & office security in Magarpatta',
    intro: [
      'Magarpatta City is one of Pune’s premium walk-to-work townships with a strong IT base. Our installs here are dominated by premium apartments (smart-home + CCTV) and Cybercity offices.',
      'For offices in Cybercity, we deploy IP-based CCTV with PoE NVRs and access control + visitor management on a cloud-managed platform.',
    ],
    customerProfile:
      'Premium homeowners, IT professionals, and mid-to-large offices in Cybercity.',
    popularServices: STANDARD_SERVICES,
    localContext:
      'Magarpatta township has its own facility-management approval flow for installations; we handle those approvals end-to-end.',
    benefits: [
      'Township-FM approval handling',
      'Smart home + CCTV integration',
      'Office-grade access control + visitor management',
      'Premium brand stocking',
    ],
    responseTime: 'Same-day',
    landmarks: [
      'Cybercity', 'Seasons Mall', 'Aditi Garden', 'Sopan Baug entry',
    ],
    faqs: AREA_FAQ_TEMPLATE('Magarpatta'),
  },
  {
    slug: 'koregaon-park',
    city: 'Koregaon Park',
    fullName: 'Koregaon Park, Pune',
    pincode: '411001',
    hero: 'Premium home security in Koregaon Park',
    intro: [
      'Koregaon Park is Pune’s most prestigious residential pocket. Our installs are almost exclusively premium independent bungalows, premium apartments and boutique commercial spaces along North Main Road.',
      'Customers here expect Premium-brand hardware (Hikvision ColorVu, Honeywell, Bosch, Axis) and discreet installation that respects the home’s architecture.',
    ],
    customerProfile:
      'Premium homeowners, expat residents, boutique restaurant and retail owners.',
    popularServices: STANDARD_SERVICES,
    localContext:
      'Architectural sensitivity matters — we use concealed cabling, painted conduits and small-footprint cameras to blend into premium interiors.',
    benefits: [
      'Discreet, architecturally sensitive installs',
      'Premium-brand stocking',
      'Smart home + CCTV + intercom integration',
      'White-glove installation experience',
    ],
    responseTime: 'Same-day',
    landmarks: [
      'North Main Road', 'Lane 5', 'Lane 7', 'ABC Farms vicinity', 'Boat Club Road approach',
    ],
    faqs: AREA_FAQ_TEMPLATE('Koregaon Park'),
  },
];

export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  const clean = slug.replace(/^\/+/, '');
  return SERVICE_AREAS.find((a) => a.slug === clean);
}
