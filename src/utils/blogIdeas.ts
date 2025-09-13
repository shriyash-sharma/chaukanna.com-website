export const blogIdeas = {
  'cctv-installation': [
    'Best CCTV Cameras for Homes and Offices in Pune (2025 Guide)',
    'Top Benefits of Installing CCTV in Apartments and Societies',
    'CCTV Installation Cost Guide for Pune Properties',
    'How to Choose the Right CCTV System for Your Business',
    'CCTV Camera Placement Tips for Maximum Security',
    'Wireless vs Wired CCTV Systems: Which is Better?',
    'CCTV Installation Process: What to Expect',
    'Common CCTV Installation Mistakes to Avoid',
    'CCTV Maintenance Tips for Long-lasting Performance',
    'Legal Requirements for CCTV Installation in Pune'
  ],
  'cctv-amc': [
    'Why AMC is Essential for CCTV Maintenance in Pune',
    'CCTV AMC vs One-Time Repair: Which is Better?',
    'What\'s Included in Our CCTV AMC Package',
    'Signs Your CCTV System Needs Professional Maintenance',
    'CCTV AMC Cost Benefits: Save Money in the Long Run',
    'How Often Should You Service Your CCTV System?',
    'CCTV AMC Checklist: What to Look For',
    'Emergency CCTV Repair vs Scheduled Maintenance',
    'CCTV System Health Check: DIY vs Professional',
    'Extending CCTV System Lifespan with Proper AMC'
  ],
  'fire-alarm-systems': [
    'Fire Alarm System Installation Guide for Commercial Buildings',
    'How Fire Alarms Save Lives in Residential Complexes',
    'Types of Fire Detection Systems: Which One Do You Need?',
    'Fire Alarm System Maintenance: A Complete Guide',
    'Fire Safety Compliance in Pune: What You Need to Know',
    'Wireless vs Wired Fire Alarm Systems',
    'Fire Alarm System Testing: Frequency and Procedures',
    'Emergency Evacuation Planning with Fire Alarms',
    'Fire Alarm System Integration with Building Management',
    'Common Fire Alarm System Problems and Solutions'
  ],
  'biometric-attendance': [
    'Benefits of Biometric Attendance Systems for Offices',
    'How Biometrics Improve Workforce Management in Pune Companies',
    'Fingerprint vs Face Recognition: Which is Better?',
    'Biometric Attendance System Setup: Step-by-Step Guide',
    'Data Security in Biometric Attendance Systems',
    'Biometric Attendance ROI: Calculate Your Savings',
    'Integration of Biometric Systems with HR Software',
    'Biometric Attendance for Remote and Hybrid Work',
    'Troubleshooting Common Biometric System Issues',
    'Future of Biometric Technology in Workplace Management'
  ],
  'repair-maintenance': [
    'Common CCTV Problems and How We Fix Them',
    'Annual Maintenance Checklist for Security Systems',
    'DIY vs Professional Security System Repairs',
    'Preventive Maintenance: Save on Security System Costs',
    'Emergency Security System Repair: What to Do',
    'Security System Troubleshooting Guide',
    'When to Replace vs Repair Security Equipment',
    'Maintenance Contracts: Are They Worth It?',
    'Security System Health Monitoring',
    'Upgrading Legacy Security Systems'
  ],
  'video-door-phone': [
    'Top Video Door Phone Systems for Modern Homes in Pune',
    'Why Every Apartment Needs a Video Door Phone',
    'Video Door Phone vs Traditional Intercom: Comparison',
    'Smart Video Door Phone Features You Need',
    'Video Door Phone Installation: DIY vs Professional',
    'Mobile Integration with Video Door Phone Systems',
    'Video Door Phone Security: Protecting Your Privacy',
    'Choosing the Right Video Door Phone for Your Building',
    'Video Door Phone Maintenance and Troubleshooting',
    'Future of Video Door Phone Technology'
  ],
  'smart-home-automation': [
    'Smart Home Automation Trends in 2025',
    'Top Benefits of Home Automation for Security in Pune',
    'Getting Started with Smart Home Automation',
    'Smart Home Security: Integration and Best Practices',
    'Voice Control in Home Automation: Setup Guide',
    'Energy Efficiency with Smart Home Automation',
    'Smart Home Automation for Senior Citizens',
    'Privacy and Security in Smart Home Systems',
    'Cost-Benefit Analysis of Home Automation',
    'Future-Proofing Your Smart Home Investment'
  ],
  'access-control-systems': [
    'Types of Access Control Systems for Offices and Homes',
    'Why Access Control is Critical for Businesses in Pune',
    'Card vs Biometric Access Control: Which to Choose?',
    'Access Control System Integration with Security',
    'Visitor Management with Modern Access Control',
    'Access Control for Multi-tenant Buildings',
    'Cloud-based vs On-premise Access Control',
    'Access Control System Maintenance and Updates',
    'Emergency Access Control Procedures',
    'Access Control Compliance and Regulations'
  ],
  'public-address-systems': [
    'Public Address Systems for Schools, Malls, and Offices',
    'How PAS Enhances Safety in Commercial Buildings',
    'Choosing the Right PA System for Your Venue',
    'PA System Installation: Indoor vs Outdoor Considerations',
    'Emergency Communication with Public Address Systems',
    'PA System Maintenance: Keeping Your System Reliable',
    'Wireless vs Wired PA Systems: Pros and Cons',
    'PA System Integration with Security and Fire Alarms',
    'Audio Quality in Public Address Systems',
    'Future of Public Address Technology'
  ]
};

export function getRandomBlogIdeas(service: string, count: number = 5): string[] {
  const ideas = blogIdeas[service as keyof typeof blogIdeas] || [];
  return ideas.sort(() => 0.5 - Math.random()).slice(0, count);
}

export function getAllBlogIdeas(): Record<string, string[]> {
  return blogIdeas;
}
