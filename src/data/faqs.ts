/**
 * FAQ knowledge base for /faqs hub + per-topic injection on service pages.
 *
 * Each entry is plain-English, India-specific, and safe to publish.
 * Use `getFaqsByTopic(topic)` to render filtered sets on service pages.
 */

import type { FAQItem } from '@/components/FAQ';

export type FaqTopic =
  | 'cctv'
  | 'fire-alarm'
  | 'smart-home'
  | 'biometric'
  | 'access-control'
  | 'video-door-phone'
  | 'amc'
  | 'general';

export interface KnowledgeFaq extends FAQItem {
  topic: FaqTopic;
  topicLabel: string;
  serviceSlug?: string;
}

const T = (
  topic: FaqTopic,
  topicLabel: string,
  serviceSlug: string | undefined,
  pairs: [string, string][],
): KnowledgeFaq[] =>
  pairs.map(([question, answer]) => ({
    topic,
    topicLabel,
    serviceSlug,
    question,
    answer,
  }));

export const FAQ_TOPICS: { value: FaqTopic; label: string }[] = [
  { value: 'cctv', label: 'CCTV' },
  { value: 'fire-alarm', label: 'Fire Alarm' },
  { value: 'smart-home', label: 'Smart Home' },
  { value: 'biometric', label: 'Biometric Attendance' },
  { value: 'access-control', label: 'Access Control' },
  { value: 'video-door-phone', label: 'Video Door Phone' },
  { value: 'amc', label: 'AMC & Maintenance' },
  { value: 'general', label: 'General' },
];

export const KNOWLEDGE_FAQS: KnowledgeFaq[] = [
  /* ---------------- CCTV (25) ---------------- */
  ...T('cctv', 'CCTV', '/cctv-installation', [
    ['How many CCTV cameras do I need for a 2 BHK in Pune?', 'Most 2 BHK homes are well-covered with 4 cameras — main door, balcony, parking corridor and one indoor common area. If you have an external gate, a 5th camera focused on the gate adds significant value.'],
    ['What is the difference between DVR and NVR?', 'DVR records footage from analog HD cameras over coax cable. NVR records from IP cameras over Cat6/PoE. NVR is more expensive but cleaner cabling, higher resolutions and easier expansion.'],
    ['Which CCTV brand is best in India?', 'For most homes and shops, Hikvision and CP Plus offer the best price/performance with reliable India service. For premium or industrial use, Honeywell and Axis are stronger choices.'],
    ['How much does CCTV installation cost in Pune in 2026?', 'A 4-camera 2MP install with proper cabling and 2 TB HDD is typically ₹16,000–₹28,000. 8-camera installs run ₹32,000–₹48,000. 4K installs add 30–50%.'],
    ['Can I view CCTV footage on my phone?', 'Yes. All modern DVRs/NVRs come with mobile apps (Hik-Connect, gDMSS, iVMS-4500, CP Plus apps) that show live and recorded footage from anywhere.'],
    ['Do I need internet at home for CCTV recording?', 'No. Recording happens locally to the DVR/NVR hard disk. Internet is only needed if you want to view live or playback footage from outside your network.'],
    ['How many days of footage can a 2 TB hard disk store?', 'For 4 × 2MP cameras with H.265+, about 30–45 days of 24×7 footage. For 4 × 4MP cameras, about 15–25 days.'],
    ['Are wireless / Wi-Fi cameras good for whole-home coverage?', 'No. Wi-Fi cameras drop frames, depend on router uptime, and are not reliable for whole-property coverage. Use wired (HD analog or IP PoE) for serious installs.'],
    ['Do CCTV cameras work in power cuts?', 'Only if you connect the DVR/NVR and camera power supply to a UPS. Most homes use a 600VA UPS which keeps a 4-camera system alive for 1–2 hours.'],
    ['Is CCTV installation legal at my flat door?', 'Yes, if it covers only your door area. Most Maharashtra societies allow it after written notice to the secretary. Cameras should never cover other flats or shared toilets.'],
    ['Do I need to display a CCTV sign?', 'Yes — a clear "CCTV in operation" sign at the entry is required for evidence admissibility and good DPDP Act practice.'],
    ['Can CCTV footage be used in court?', 'Yes, provided the system records continuously, the time/date is correct, signage is in place and the footage is exported with proper hash / signed export.'],
    ['Does CCTV reduce insurance premiums?', 'Many shop and commercial insurance policies offer 5–10% premium discount for documented CCTV coverage.'],
    ['How long does CCTV installation take?', 'A 4-camera home install in Pune takes 4–6 hours including mobile app setup. Larger sites (8+ cameras) take 1–2 days.'],
    ['What is the warranty on CCTV cameras in India?', 'Hikvision: 2 years. CP Plus: 1–2 years (model dependent). Dahua: 2 years. Honeywell: 2–3 years. Always retain GST invoice for warranty.'],
    ['Can I install CCTV myself?', 'Technically yes, but you lose manufacturer warranty support for cabling and mounting issues. For most homes the labour cost (~₹3,000–₹5,000) is worth the warranty and clean cable routing.'],
    ['What is ColorVu / Starlight in CCTV?', 'ColorVu (Hikvision) and Starlight (Dahua) are camera lines that capture full-colour images in very low light without infrared. Best at gates, driveways and shop fronts.'],
    ['Can I record audio along with CCTV video?', 'Yes, but Indian law requires you to disclose audio recording to anyone being recorded. Most home/office installs skip audio for this reason.'],
    ['What is the IP rating I need for outdoor cameras?', 'IP66 is the minimum for outdoor cameras in Pune. IP67 is preferred for cameras directly exposed to monsoon rain.'],
    ['Can CCTV detect motion and send alerts?', 'Yes — most modern DVR/NVR systems support motion-based notifications to your phone via the mobile app. Smart NVRs also support line-crossing and zone-intrusion alerts.'],
    ['Can I integrate CCTV with my smart home system?', 'Yes. Hikvision, Dahua and CP Plus all support ONVIF, which means they can be added to most smart home hubs (Home Assistant, Hubitat, etc.).'],
    ['What happens when the hard disk fills up?', 'The DVR/NVR loops — it overwrites the oldest footage first. That is why retention day-count matters when planning the HDD size.'],
    ['How often should the CCTV hard disk be replaced?', 'Every 3–4 years in 24×7 recording use. Use surveillance-grade HDDs only (WD Purple, Seagate SkyHawk, Toshiba S300).'],
    ['Why is my CCTV showing "video loss"?', 'Usually a loose BNC connector, water in an outdoor junction box, a dead camera power supply or a rodent-chewed cable. Schedule an AMC visit.'],
    ['Can I get same-day CCTV repair in Pune?', 'Yes, in most cases. Same-day pickup is standard for AMC customers and best-effort within 24 hours for non-AMC walk-ins.'],
  ]),

  /* ---------------- Fire Alarm (15) ---------------- */
  ...T('fire-alarm', 'Fire Alarm', '/fire-alarm-systems', [
    ['What is the difference between conventional and addressable fire alarm?', 'Conventional groups detectors by zone — you know the zone but not the exact detector. Addressable identifies each detector by ID. Addressable is required for medium-to-large buildings.'],
    ['Is a fire alarm system mandatory in India?', 'Yes for most commercial buildings (offices, schools, hospitals, warehouses, factories) and for residential buildings above certain heights per NBC Part IV.'],
    ['How much does a fire alarm system cost in Pune?', 'A small office (2-zone conventional with 12 detectors) starts at ₹35,000–₹55,000. An addressable 1-loop system for a 4-floor school runs ₹2,80,000–₹4,50,000.'],
    ['Which Indian standards apply to fire alarm systems?', 'NBC Part IV, IS 2189 (fire detection and alarm system design), TAC guidelines (where insurance is involved), and any local fire authority requirements.'],
    ['How often should fire alarms be tested?', 'Quarterly is the minimum; some authorities require monthly. Each test must be logged in writing.'],
    ['How long does fire alarm installation take?', 'A small office: 1–2 days. A school floor with addressable: 3–5 days. Larger sites are typically completed in stages.'],
    ['What is FRLS cable and why does fire alarm use it?', 'FRLS = Fire Retardant Low Smoke. It limits flame propagation and smoke emission, which is mandatory for fire alarm wiring per IS 2189.'],
    ['What is a beam smoke detector?', 'A detector that uses a transmitter-receiver beam across a wide space (e.g. warehouses, atriums). It is used where ceilings are too high (>5 m) for standard point detectors.'],
    ['Can I integrate fire alarm with public address?', 'Yes — most addressable panels support voice evacuation integration. Schools and hospitals typically require this.'],
    ['What is a manual call point (MCP)?', 'A break-glass button at exit points used by occupants to manually trigger the fire alarm.'],
    ['Do fire alarms work in power cuts?', 'Yes. All fire alarm panels have battery backup (typically 24–72 hours of standby + 30 min of alarm time).'],
    ['Who can issue a fire NOC in Pune?', 'PMC Fire Department (within PMC), PCMC Fire Department (within PCMC), or the local fire authority for outlying areas.'],
    ['Can I retrofit fire alarms in an old building?', 'Yes. Wireless addressable options exist for retrofits where cable routing is difficult; price is higher but install is much faster.'],
    ['What is the AMC cost for fire alarm systems?', 'Typically ₹15,000–₹60,000 per year depending on detector count and system type. AMC should include quarterly testing and a written log.'],
    ['How fast do fire alarms respond to a fire?', 'Smoke detectors: 30 seconds to 2 minutes depending on smoke density. Heat detectors: 1–5 minutes depending on rise rate. Beam detectors: 5–30 seconds across the protected area.'],
  ]),

  /* ---------------- Smart Home (12) ---------------- */
  ...T('smart-home', 'Smart Home', '/smart-home-automation', [
    ['How much does smart home automation cost in Pune?', 'A 2 BHK lights-and-fans setup starts at ₹35,000–₹55,000. A 3 BHK with curtains and ACs: ₹85,000–₹1,35,000. Premium 4 BHK with full automation: ₹2,20,000–₹3,80,000.'],
    ['Do I need to replace my fans, lights or ACs for smart home?', 'No. We replace the switch modules behind your existing fans, lights and AC switches. The appliances themselves stay the same.'],
    ['Do smart switches need a neutral wire?', 'Most modern smart switches do. Older Indian wiring sometimes lacks neutral at the switch box; if so, an electrician adds it.'],
    ['Will smart home work if Wi-Fi is down?', 'Quality brands (Wiser, Schneider, Crestron) keep working via local hub control. Cheaper Tuya-only setups often break without internet — we don\'t recommend those.'],
    ['Which is the best brand for smart home in India?', 'For mid-range, Wiser by Schneider, Wipro and Syska are reliable. For premium installs, Crestron and Lutron. Avoid no-name brands with no India service.'],
    ['Can I control smart home with Alexa or Google?', 'Yes. All mainstream brands support Alexa and Google Assistant for voice control.'],
    ['Will smart automation increase my power bill?', 'No — switch modules draw negligible standby power. Scheduled scenes typically reduce consumption.'],
    ['Can I phase the installation room by room?', 'Yes — start with one room, expand later. Pick a brand with a strong ecosystem so you don\'t end up with multiple apps.'],
    ['What is a curtain motor and how much does it cost?', 'A motor that opens/closes existing curtain tracks via app, voice or schedule. Single track motors run ₹8,500–₹18,000 installed; double track ₹15,000–₹28,000.'],
    ['Can I integrate smart locks with my home?', 'Yes. Yale, Godrej and Ultraloq locks integrate with most automation hubs for keyless entry, scheduled access and entry logs.'],
    ['Will smart home work for my elderly parents?', 'Yes — physical switches still work, voice control adds convenience, and family members can monitor / help remotely.'],
    ['Can smart home automation be retrofitted in old houses?', 'Yes, in most cases. Older houses may need an electrician to add neutral wire at switch boxes. We flag this during the survey.'],
  ]),

  /* ---------------- Biometric (12) ---------------- */
  ...T('biometric', 'Biometric Attendance', '/biometric-attendance', [
    ['What is biometric attendance?', 'A system that records employee in/out using a unique identifier — fingerprint, face, retina, or RFID card. The data feeds into payroll automatically.'],
    ['Which is better — fingerprint or face recognition?', 'Face recognition is faster, touchless, and scales better. Fingerprint is cheaper and proven, but fails for dry / mehndi / injured hands.'],
    ['How much does a biometric attendance system cost?', 'A 1-device fingerprint setup for up to 30 staff: ₹12,000–₹22,000. A 1-device face setup for 100 staff: ₹22,000–₹38,000. Cloud HRMS adds ₹3,500–₹14,000/year.'],
    ['Can biometric data be stolen?', 'Modern devices store an encrypted template, not the actual fingerprint or face image. Templates cannot be reversed into biometric data.'],
    ['Is biometric attendance legal in India?', 'Yes. Employers can require biometric attendance as a workplace policy, with written disclosure in the offer letter or HR policy.'],
    ['Can biometric attendance work across multiple branches?', 'Yes — cloud-based systems consolidate attendance from all branches into one dashboard.'],
    ['What if an employee refuses biometric?', 'Most Indian businesses make biometric attendance a condition of employment. Always confirm via your HR policy and offer letter language.'],
    ['Can biometric devices be used for door access too?', 'Yes — many biometric attendance devices double as access control units, releasing an electric lock on a verified scan.'],
    ['Does biometric work in power cuts?', 'With a small UPS or built-in battery backup, yes.'],
    ['Can I integrate biometric with my payroll software?', 'Yes — modern cloud HRMS platforms export to Excel, CSV, Tally, Zoho Payroll, GreytHR and many others via API.'],
    ['What is mobile-based attendance?', 'A geo-fenced selfie attendance via a mobile app. Best for sales / field staff who do not visit a single office.'],
    ['How fast is face recognition attendance?', 'Most modern face devices recognise a face in under 1 second from up to 1.5 m away.'],
  ]),

  /* ---------------- Access Control (10) ---------------- */
  ...T('access-control', 'Access Control', '/access-control-systems', [
    ['What is access control and why do I need it?', 'Access control replaces traditional locks with credential-based entry (cards, biometric, mobile) and creates an audit trail of every entry — useful for offices, server rooms, and any sensitive area.'],
    ['What types of credentials can I use?', 'RFID cards, PIN, fingerprint, face, mobile (Bluetooth/NFC), or any 2-factor combination for high-security areas.'],
    ['How much does access control cost in Pune?', 'Single-door RFID install: ₹15,000–₹25,000. 4-door cloud-managed system: ₹85,000–₹1,40,000. Multi-floor office: ₹2,50,000–₹4,50,000.'],
    ['What is a maglock and an electric strike?', 'Maglock = electromagnetic lock that holds via current; fails open (good for fire safety). Electric strike = drop-in replacement for normal door strike; fails secure.'],
    ['Do access systems work in power cuts?', 'Yes, with built-in battery backup (UPS). Locks chosen must comply with local fire safety code — typically fail-open at exits.'],
    ['Can access logs be tampered with?', 'Cloud systems store logs off-device with cryptographic chaining, making tampering effectively impossible.'],
    ['Can I integrate access control with CCTV?', 'Yes — every door event can be linked to the corresponding CCTV clip for one-click playback during audits.'],
    ['What is anti-passback?', 'A policy preventing the same credential from being used to enter twice without exiting — prevents card sharing.'],
    ['Can mobile phones replace access cards?', 'Yes — mobile credentials via Bluetooth or NFC are now standard on modern systems.'],
    ['Does access control help with ISO / SOC2 audits?', 'Yes — auditors want a documented access policy and an exportable audit log, both of which modern systems provide out of the box.'],
  ]),

  /* ---------------- Video Door Phone (8) ---------------- */
  ...T('video-door-phone', 'Video Door Phone', '/video-door-phone', [
    ['What is a video door phone (VDP)?', 'A doorbell that includes a camera and 2-way audio. You see and talk to whoever is at the door from an indoor monitor or your phone.'],
    ['What is the difference between wired and smart VDP?', 'Wired VDP uses a hardwired indoor monitor and does not need internet. Smart VDP connects via Wi-Fi to your phone for remote answering.'],
    ['How much does a VDP cost?', 'Basic 7" wired VDP: ₹8,000–₹14,000. 10" wired with recording: ₹14,000–₹22,000. Smart Wi-Fi VDP: ₹9,000–₹18,000. Hybrid: ₹18,000–₹32,000.'],
    ['Can I integrate VDP with smart lock?', 'Yes — premium VDP brands let you unlock the door with one tap after verifying the visitor.'],
    ['Does VDP work without internet?', 'Wired VDP works fully offline. Smart Wi-Fi VDP rings the indoor doorbell but cannot send app notifications without internet.'],
    ['Can VDP record visitor history?', 'Yes — most VDPs with SD card or cloud storage can record every doorbell event and motion-triggered approach.'],
    ['Can multiple family members answer VDP?', 'Yes — app-based VDPs allow multiple phones to receive the doorbell notification.'],
    ['Can I reuse existing intercom wiring for VDP?', 'Often yes, if it is a 4-wire intercom. We test before quoting.'],
  ]),

  /* ---------------- AMC (8) ---------------- */
  ...T('amc', 'AMC & Maintenance', '/cctv-amc', [
    ['What is included in a CCTV AMC?', 'Quarterly health checks, lens cleaning, IR LED check, BNC connector check, firmware updates, mobile app re-verification, HDD health test, and priority same-day response on faults.'],
    ['How much does CCTV AMC cost in Pune?', 'Small home (4 cameras): ₹3,000–₹8,000/year. Office (8–12 cameras): ₹8,000–₹18,000/year. Society (20–30 cameras): ₹22,000–₹35,000/year.'],
    ['Is AMC mandatory after installation?', 'No, but strongly recommended for shops, offices, societies and any commercial site where downtime hurts. For homes, AMC is optional but useful past year 2.'],
    ['How fast do you respond under AMC?', 'Same-day pickup is standard for AMC customers in Pune. Critical faults (system down) within 4 hours.'],
    ['Can AMC be transferred when I move?', 'Yes — AMC follows the system. Inform us in advance and we will adjust the visit schedule.'],
    ['Do I need a separate AMC for each device?', 'No. AMC is per-site, covering all our installed CCTV, recorders and accessories.'],
    ['What is not covered under AMC?', 'Physical damage, theft, water damage from outside the property (e.g. floods), and replacement of consumables like HDDs (these are billed at cost).'],
    ['Can I switch AMC providers?', 'Yes — we take over AMC for any existing system after a free audit visit.'],
  ]),

  /* ---------------- General (10) ---------------- */
  ...T('general', 'General', undefined, [
    ['Where is Chaukanna located?', 'Shop No 13, Satya Plaza Building, Pune 412207. We service across PMC, PCMC and the surrounding neighbourhoods.'],
    ['What areas of Pune do you serve?', 'PMC, PCMC, Wagholi, Kharadi, Hadapsar, Viman Nagar, Baner, Wakad, Hinjewadi, Pimpri, Chinchwad, Mundhwa, Keshavnagar, Lohegaon, Magarpatta and Koregaon Park.'],
    ['Do you provide GST invoice?', 'Yes, every quote and every install comes with a GST invoice.'],
    ['What payment methods do you accept?', 'UPI, NEFT/IMPS, cheque, and cash for small amounts. We accept advance + balance-on-completion for most projects.'],
    ['Is the site survey really free?', 'Yes — no visit charge, no obligation. You receive the written quote and decide later.'],
    ['Do you also do repair work for systems you didn\'t install?', 'Yes, we take over any existing CCTV, fire alarm, biometric or access control system after a free audit visit.'],
    ['Do you provide AMC to other vendors\' systems?', 'Yes — most of our AMC base started with systems installed by other vendors.'],
    ['How can I reach you fastest?', 'WhatsApp is fastest — we typically respond within minutes during business hours. Phone call is best for urgent issues.'],
    ['Do you have Marathi-speaking technicians?', 'Yes — our field team is bilingual (Marathi + Hindi) and most members speak conversational English.'],
    ['Can I get a custom solution for an unusual property?', 'Yes — we regularly do farmhouses, warehouses, schools and unusual layouts. Send us photos and we\'ll design a tailored solution.'],
  ]),
];

export function getFaqsByTopic(topic: FaqTopic): KnowledgeFaq[] {
  return KNOWLEDGE_FAQS.filter((f) => f.topic === topic);
}

export function countFaqs(): number {
  return KNOWLEDGE_FAQS.length;
}
