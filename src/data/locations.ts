/**
 * Static data for Pune-area location landing pages.
 * Each entry powers a dedicated SEO landing page.
 */

export type LocationContent = {
  slug: string; // route path
  city: string; // e.g. "Wagholi"
  fullName: string; // e.g. "Wagholi, Pune"
  service:
    | 'CCTV Installation'
    | 'Fire Alarm Installation'
    | 'Biometric Attendance System'
    | 'Access Control System';
  hero: string;
  intro: string; // 2-3 paragraphs (unique per page)
  highlights: string[];
  neighbourhoods: string[]; // sub-areas covered
  responseTime: string;
  faqs: { question: string; answer: string }[];
};

const CCTV_FAQ_TEMPLATE = (city: string) => [
  {
    question: `How much does CCTV installation cost in ${city}?`,
    answer: `A basic 4-camera HD setup with DVR and 1TB storage typically starts around ₹15,000–₹28,000 in ${city}, including professional installation and basic cabling. 4K systems, IP cameras, or larger setups for offices and societies scale up from there. Final pricing depends on camera count, brand (Hikvision, CP Plus, Dahua), cable distance, and any civil work required.`,
  },
  {
    question: `Do you provide same-day CCTV installation in ${city}?`,
    answer: `Yes. For most homes and small offices in ${city} we complete a site survey and full installation on the same day if confirmed before 11 AM. For larger commercial sites or societies we book a survey first and schedule installation within 24–48 hours.`,
  },
  {
    question: `Can I view my ${city} CCTV cameras on my mobile phone?`,
    answer: `Absolutely. Every system we install in ${city} is configured for free mobile viewing on iOS and Android via the manufacturer app (Hik-Connect, iVMS-4500, gDMSS, etc.). We handle port forwarding, P2P setup, and account creation as part of the installation, then walk you through the app before we leave.`,
  },
  {
    question: `Do you offer AMC (Annual Maintenance) for CCTV systems in ${city}?`,
    answer: `Yes. Our CCTV AMC for ${city} customers covers scheduled health-checks, lens cleaning, firmware updates, configuration backups, and priority on-site response for faults. AMC pricing depends on number of cameras and starts around ₹3,000/year for a basic 4-camera setup.`,
  },
  {
    question: `Is the CCTV warranty valid if you install it in ${city}?`,
    answer: `Yes. We use genuine Hikvision, CP Plus, Dahua, and Honeywell products with full manufacturer warranty (typically 1–2 years on cameras, 2 years on DVR/NVR, 1 year on hard disks). Installation work also carries our own service warranty.`,
  },
];

export const LOCATIONS: LocationContent[] = [
  {
    slug: '/cctv-installation-pune',
    city: 'Pune',
    fullName: 'Pune, Maharashtra',
    service: 'CCTV Installation',
    hero: 'Professional CCTV Installation in Pune',
    intro: `Pune has grown faster than most Indian cities in the last decade — and so have its security needs. From standalone bungalows in Aundh to high-rise societies in Kharadi and shop-line markets in Hadapsar, every type of property has very different camera, cabling and storage requirements. We install CCTV systems that are matched to your building, not pulled off a generic price-list.

Our installation team handles everything end-to-end in Pune: free on-site survey, custom camera plan, genuine Hikvision / CP Plus / Dahua equipment, cabling, DVR/NVR setup, mobile app configuration and a complete handover walk-through. Most home installations are finished the same day.

If you already have a system that has stopped working, we also offer same-day CCTV repair and AMC anywhere within Pune city limits.`,
    highlights: [
      'Same-day installation across most of Pune',
      'Genuine Hikvision, CP Plus, Dahua, Honeywell equipment',
      'HD, 4K, IP & wireless camera options',
      'Free mobile viewing setup (iOS + Android)',
      'On-site warranty and AMC support',
      'GST invoice provided',
    ],
    neighbourhoods: [
      'Kothrud', 'Aundh', 'Baner', 'Wakad', 'Hinjewadi', 'Kharadi',
      'Wagholi', 'Hadapsar', 'Magarpatta', 'Viman Nagar', 'Koregaon Park',
      'Camp', 'Shivaji Nagar', 'Pimpri', 'Chinchwad', 'Akurdi', 'Nigdi',
    ],
    responseTime: 'Same-day across Pune city',
    faqs: CCTV_FAQ_TEMPLATE('Pune'),
  },
  {
    slug: '/cctv-installation-wagholi',
    city: 'Wagholi',
    fullName: 'Wagholi, Pune East',
    service: 'CCTV Installation',
    hero: 'CCTV Installation in Wagholi',
    intro: `Wagholi has changed dramatically in the last few years. What used to be a quiet stretch along Nagar Road is now a dense cluster of housing societies, IT-employee rentals, schools and warehousing units. The flip side is that residents and shop owners are increasingly concerned about unattended parking lots, unmonitored building lobbies and night-time movement on the service roads.

We install CCTV cameras for Wagholi homes, gated societies, shops and warehouses with a focus on real-world coverage — entry/exit gates, lift lobbies, parking, common areas, and perimeter walls. We use weatherproof IP66/IP67 cameras suitable for Pune's monsoon, and we cable everything cleanly so it doesn't become an eyesore.

For Wagholi societies specifically, we offer multi-block packages, NVR-based central recording rooms and society-wide mobile access for the managing committee.`,
    highlights: [
      'CCTV systems sized for Wagholi bungalows, flats & shops',
      'Society-wide installations with central NVR',
      'IP66/IP67 weatherproof cameras for outdoor exposure',
      'Same-day install for most residential sites',
      'GST invoice and warranty paperwork provided',
    ],
    neighbourhoods: [
      'Kesnand Road', 'Awhalwadi', 'Lohegaon Road side',
      'Bakori Phata', 'Tulja Bhavani Nagar', 'Shikrapur Road',
    ],
    responseTime: 'Within 24 hours in Wagholi',
    faqs: CCTV_FAQ_TEMPLATE('Wagholi'),
  },
  {
    slug: '/cctv-installation-kharadi',
    city: 'Kharadi',
    fullName: 'Kharadi, Pune East',
    service: 'CCTV Installation',
    hero: 'CCTV Installation in Kharadi',
    intro: `Kharadi's mix of EON IT Park, World Trade Center, large residential towers and busy commercial frontage means most properties here need more than a basic 4-camera kit. Offices need vendor-grade IP camera networks. Apartment societies need multi-block NVR setups with mobile access for the committee. Shops on Kharadi Bypass need vandal-proof outdoor cameras that hold up to monsoon and dust.

We do all three. Our Kharadi team plans coverage around the actual blind-spots in your property — parking ramps, service lifts, rear access — and uses IP cameras with PoE wiring for clean installs and central NVR recording.`,
    highlights: [
      'IP / PoE camera networks for Kharadi offices',
      'Apartment & tower society CCTV with central NVR',
      'Vandal-proof outdoor cameras for shops & ground-floor units',
      '4K and 8MP options for parking and entry gates',
      'Same-day installation for residential systems',
    ],
    neighbourhoods: [
      'EON IT Park area', 'World Trade Center side', 'Chandan Nagar',
      'Tulip Road', 'Gera Greensville', 'Pawar Public School side',
    ],
    responseTime: 'Same-day for residential, 24–48 hours for commercial',
    faqs: CCTV_FAQ_TEMPLATE('Kharadi'),
  },
  {
    slug: '/cctv-installation-hadapsar',
    city: 'Hadapsar',
    fullName: 'Hadapsar, Pune South-East',
    service: 'CCTV Installation',
    hero: 'CCTV Installation in Hadapsar',
    intro: `Hadapsar is a true mixed-use neighbourhood — Magarpatta City offices on one side, dense residential lanes around Sasanenagar and Gondhalenagar on the other, and a long commercial frontage on Solapur Road. Each of these needs a different camera plan, and that's exactly how we approach Hadapsar installations.

Whether you are a shop owner who needs counter and entrance coverage, an IT employee securing a 2BHK in Amanora, or a society managing committee planning a 6-block tower install, we will survey the site first and propose a system that actually fits the property.`,
    highlights: [
      'Residential, shop and society installations',
      'CCTV for jewellery & high-value retail with vandal-proof housings',
      'Amanora / Magarpatta gated-community packages',
      'Hindi, Marathi & English-speaking technicians',
      'Same-day install for most homes',
    ],
    neighbourhoods: [
      'Magarpatta City', 'Amanora Park Town', 'Sasanenagar',
      'Gondhalenagar', 'Mundhwa side', 'Fursungi border', 'Manjari',
    ],
    responseTime: 'Same-day across Hadapsar',
    faqs: CCTV_FAQ_TEMPLATE('Hadapsar'),
  },
  {
    slug: '/cctv-installation-hinjewadi',
    city: 'Hinjewadi',
    fullName: 'Hinjewadi, Pune West',
    service: 'CCTV Installation',
    hero: 'CCTV Installation in Hinjewadi',
    intro: `Hinjewadi's three IT-park phases pull thousands of IT-employee rentals, PG accommodations, gated societies, and small commercial units around Wakad Road and Mann village. Most of our Hinjewadi installations are for working professionals who want a quick, clean install they can monitor from their phone while they're at the office.

We are familiar with the building styles in Phase 1, Phase 2 and Phase 3 — the cabling routes that work in Megapolis-type towers, the camera angles that cover narrow Hinjewadi-village lanes, and the IP camera setups that hold up to the heavy rain near Mulshi side.`,
    highlights: [
      'PG, flat, villa and society installations',
      'Quick same-day install for working IT professionals',
      'Mobile-first viewing setup before we leave',
      'Hidden cabling and clean install finish',
      'Compatible with Alexa/Google Home where possible',
    ],
    neighbourhoods: [
      'Phase 1', 'Phase 2', 'Phase 3', 'Marunji', 'Maan',
      'Wakad Road side', 'Megapolis area', 'Blue Ridge area',
    ],
    responseTime: 'Same-day across Hinjewadi phases',
    faqs: CCTV_FAQ_TEMPLATE('Hinjewadi'),
  },
  {
    slug: '/cctv-installation-viman-nagar',
    city: 'Viman Nagar',
    fullName: 'Viman Nagar, Pune East',
    service: 'CCTV Installation',
    hero: 'CCTV Installation in Viman Nagar',
    intro: `Viman Nagar's mix of premium apartments, Phoenix Marketcity frontage, restaurants, clinics and serviced bungalows means cameras need to look good as well as work hard. Most of our Viman Nagar customers are particular about clean cabling, neutral camera colours that don't clash with the interior, and very clear mobile-viewing setup.

We deliver that. From hidden conduit runs in modular interiors to vandal-proof discreet domes at restaurant entrances, we plan the install around how your property actually looks and is used.`,
    highlights: [
      'Discreet, design-friendly camera placement',
      'Hidden cabling and conduit routing',
      'Premium apartment and bungalow installations',
      'Restaurant, salon, clinic and shop coverage',
      'High-resolution 4K options for entry & parking',
    ],
    neighbourhoods: [
      'Clover Park side', 'Konark Pyramid area', 'Datta Mandir Road',
      'Symbiosis side', 'Lohegaon road', 'Phoenix Marketcity area',
    ],
    responseTime: 'Same-day across Viman Nagar',
    faqs: CCTV_FAQ_TEMPLATE('Viman Nagar'),
  },
  {
    slug: '/cctv-installation-baner',
    city: 'Baner',
    fullName: 'Baner, Pune West',
    service: 'CCTV Installation',
    hero: 'CCTV Installation in Baner',
    intro: `Baner has one of the densest concentrations of independent bungalows, co-working spaces, restaurants and high-end apartments in Pune. The road is busy, parking is contested, and properties open out directly onto main lanes — which makes CCTV coverage of front gates, parking strips and entry doors genuinely useful.

Our Baner installations are quick, clean and tuned for actual usage: cameras covering the parking, front door, garden and any blind side, with mobile alerts on motion at night.`,
    highlights: [
      'Bungalow, row-house and apartment installations',
      'Co-working and small-office camera networks',
      'Restaurant & boutique-shop coverage',
      'Smart motion alerts on your phone at night',
      'Clean cabling, hidden conduits',
    ],
    neighbourhoods: [
      'Baner Road', 'Pashan-Baner Link Road', 'Sus Road side',
      'Balewadi border', 'Veerbhadra Nagar', 'Mahalunge side',
    ],
    responseTime: 'Same-day across Baner',
    faqs: CCTV_FAQ_TEMPLATE('Baner'),
  },
  {
    slug: '/cctv-installation-wakad',
    city: 'Wakad',
    fullName: 'Wakad, Pune North-West',
    service: 'CCTV Installation',
    hero: 'CCTV Installation in Wakad',
    intro: `Wakad sits at the junction of IT employee housing, large apartment complexes, the Mumbai-Bangalore highway frontage and busy commercial corridors near Datta Mandir Chowk. That mix is exactly the kind of environment where well-placed cameras pay for themselves quickly — parking lots, society gates, shop frontages and society common areas all benefit from clear, recoverable footage.

We install CCTV systems across Wakad for homes, societies, shops and small offices, with same-day completion for most residential setups.`,
    highlights: [
      'Apartment and tower society installations',
      'Shop & small-office camera packages',
      'High-traffic outdoor cameras for highway-side units',
      'Mobile viewing setup on the same day',
      'Local Wakad technicians for fast service calls',
    ],
    neighbourhoods: [
      'Datta Mandir Chowk', 'Kaspate Wasti', 'Tathawade side',
      'Pimple Saudagar border', 'Wakad-Hinjewadi link', 'Bhumkar Chowk',
    ],
    responseTime: 'Same-day across Wakad',
    faqs: CCTV_FAQ_TEMPLATE('Wakad'),
  },
  {
    slug: '/cctv-installation-pimpri-chinchwad',
    city: 'Pimpri-Chinchwad',
    fullName: 'Pimpri-Chinchwad (PCMC)',
    service: 'CCTV Installation',
    hero: 'CCTV Installation in Pimpri-Chinchwad',
    intro: `Pimpri-Chinchwad has its own ecosystem — large industrial pockets in Bhosari and Chakan, dense residential clusters around Akurdi and Nigdi, schools and clinics across PCMC, and shop lines along Chinchwad Station Road. Each of these needs cameras tuned for the actual environment: dust, vibration, monsoon water, and long cable runs in industrial sheds.

We install CCTV systems for PCMC homes, shops, schools, clinics and industrial units, with industrial-grade equipment options for factory and warehouse sites.`,
    highlights: [
      'Industrial-grade cameras for Bhosari & Chakan units',
      'Apartment, row-house & bungalow installations',
      'School, clinic & retail-shop coverage',
      'Long-run cabling for warehouses & sheds',
      'PCMC-area technicians for fast service',
    ],
    neighbourhoods: [
      'Pimpri', 'Chinchwad', 'Akurdi', 'Nigdi', 'Bhosari',
      'Pimple Saudagar', 'Pimple Gurav', 'Sangvi', 'Dapodi',
    ],
    responseTime: '24-hour response across PCMC',
    faqs: CCTV_FAQ_TEMPLATE('Pimpri-Chinchwad'),
  },
  {
    slug: '/fire-alarm-installation-pune',
    city: 'Pune',
    fullName: 'Pune, Maharashtra',
    service: 'Fire Alarm Installation',
    hero: 'Fire Alarm System Installation in Pune',
    intro: `Fire alarm installations in Pune are increasingly driven by mandatory compliance — for occupancy certificates, school and hospital licensing, factory operations, and society audits. We install conventional and addressable fire alarm systems across Pune for residential towers, offices, schools, hospitals, warehouses and industrial units.

Every system we install meets the relevant National Building Code (NBC) and IS 2189 expectations, with smoke detectors, heat detectors, manual call points, hooter/strobe units, a control panel and battery backup. We provide commissioning documentation suitable for compliance submissions.`,
    highlights: [
      'Conventional & addressable fire alarm panels',
      'Smoke, heat, beam and multi-sensor detectors',
      'Compliance-ready documentation (NBC / IS 2189)',
      'Battery backup and zone-wise hooter/strobe',
      'AMC and quarterly testing services',
    ],
    neighbourhoods: [
      'Schools & hospitals across Pune & PCMC',
      'High-rise apartment societies',
      'IT-park tenant fit-outs',
      'Warehouses & industrial sheds (Bhosari, Chakan, Ranjangaon)',
    ],
    responseTime: '24–72 hours depending on site size',
    faqs: [
      {
        question: 'Is a fire alarm system mandatory for my building in Pune?',
        answer:
          'Yes for most non-residential buildings and for residential buildings above certain heights. Schools, hospitals, hotels, warehouses, factories and offices generally require either a conventional or addressable fire alarm system as part of their fire NOC. We help you size the system based on built-up area, occupancy and the local fire department requirements.',
      },
      {
        question: 'What is the difference between conventional and addressable fire alarm systems?',
        answer:
          'A conventional system tells you which zone has triggered an alarm (a group of detectors). An addressable system tells you which exact detector triggered, by address — making it far easier to locate the source in large buildings. We help you choose based on building size, budget and compliance requirements.',
      },
      {
        question: 'Do you provide AMC for fire alarm systems in Pune?',
        answer:
          'Yes. Our fire alarm AMC covers quarterly testing of every detector, battery backup health, panel diagnostics, hooter/strobe checks and a written compliance log suitable for audit submissions.',
      },
      {
        question: 'How long does fire alarm installation take?',
        answer:
          'For a small office or school floor: 1–3 days. For a full multi-storey building: 1–3 weeks depending on zone count, cabling routes and ceiling access. We share a clear schedule before starting work.',
      },
    ],
  },
  {
    slug: '/biometric-attendance-system-pune',
    city: 'Pune',
    fullName: 'Pune, Maharashtra',
    service: 'Biometric Attendance System',
    hero: 'Biometric Attendance Systems in Pune',
    intro: `We supply and install biometric attendance systems across Pune for offices, schools, factories, hospitals, gyms and societies. Whether you need a simple fingerprint punch device for a 20-person office or a multi-location face-recognition setup with cloud-based attendance reports, we will configure it and integrate it with your payroll workflow.

All systems we install support shift management, half-day rules, late-mark policies and exportable reports for payroll. We also handle the network and access-control wiring so the device works reliably from day one.`,
    highlights: [
      'Fingerprint, face, RFID-card and hybrid devices',
      'Cloud and on-premise attendance software',
      'Payroll-ready exports (Excel / CSV / API)',
      'Multi-branch and multi-shift support',
      'Integration with access-control door locks',
    ],
    neighbourhoods: [
      'Offices in Kharadi, Hinjewadi, Magarpatta, Baner',
      'Factories in Bhosari, Chakan, Ranjangaon',
      'Schools, gyms, clinics across Pune & PCMC',
    ],
    responseTime: 'Install within 24–48 hours',
    faqs: [
      {
        question: 'Which biometric device should I choose for my office in Pune?',
        answer:
          'For most small-to-mid offices (up to 100 staff) a fingerprint + RFID device works well. For 100+ staff or hygienic environments (clinics, food units), face-recognition devices are better — they are touchless and faster. We help you pick based on staff count, footfall and hygiene requirements.',
      },
      {
        question: 'Will the biometric system integrate with our payroll?',
        answer:
          'Yes. Every device we install exports attendance to Excel, CSV or directly to common payroll software via API. We configure shift rules, late-marks and half-days as part of the setup.',
      },
      {
        question: 'Can biometric attendance work across multiple branches?',
        answer:
          'Yes. We deploy cloud-based attendance for multi-branch businesses so HR can see consolidated attendance in real time, regardless of which Pune office the employee punched in at.',
      },
      {
        question: 'Do you offer AMC and on-site support for biometric devices?',
        answer:
          'Yes. AMC covers device health-checks, sensor cleaning, firmware updates, and on-site response for hardware faults — typically within 24 hours anywhere in Pune.',
      },
    ],
  },
  {
    slug: '/access-control-system-pune',
    city: 'Pune',
    fullName: 'Pune, Maharashtra',
    service: 'Access Control System',
    hero: 'Access Control Systems in Pune',
    intro: `Access control upgrades your door from a lock to an audit-trail. We install RFID-card, PIN, biometric and mobile-credential access systems across Pune for offices, server rooms, labs, residential blocks and high-security areas.

Every install includes a clear access policy — who can enter where, on which days, between which hours — and a downloadable audit trail. We also integrate access control with CCTV so each door event has matching camera footage for incident review.`,
    highlights: [
      'RFID card, PIN, fingerprint & mobile-credential options',
      'Time-based and role-based access policies',
      'Audit-trail reporting and CCTV integration',
      'Mag-lock, strike-lock and turnstile installations',
      'Visitor management and gate access modules',
    ],
    neighbourhoods: [
      'IT offices in Kharadi, Hinjewadi, Magarpatta',
      'Manufacturing units in Bhosari & Chakan',
      'Residential towers across Pune & PCMC',
    ],
    responseTime: '24–72 hours depending on site',
    faqs: [
      {
        question: 'Can access control work with our existing CCTV?',
        answer:
          'Yes. We integrate access control with most popular CCTV NVR brands so every door event (open, denied, force-open) is paired with camera footage for easy incident review.',
      },
      {
        question: 'Which is better — RFID card or biometric for office doors?',
        answer:
          'For most Pune offices, RFID cards (with a fallback PIN) are fastest and most practical. For server rooms, R&D labs and finance floors, biometric or 2-factor (card + fingerprint) is the better choice for stronger control.',
      },
      {
        question: 'Can we set different access timings per employee?',
        answer:
          'Yes. Every system we install supports role-based and time-based policies — eg. housekeeping staff only between 6–10 AM, IT admins 24×7, contractors only on specific dates.',
      },
      {
        question: 'Do you provide visitor management for office reception?',
        answer:
          'Yes. We integrate visitor management — pre-registration, QR-pass entry, host notification and exit logging — into the same platform as employee access control.',
      },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationContent | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
