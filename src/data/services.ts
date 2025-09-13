import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'cctv-installation',
    title: 'CCTV Installation',
    description: 'Professional CCTV camera installation for homes, offices, and commercial spaces in Pune.',
    slug: '/cctv-installation',
    icon: 'Camera',
    features: [
      'HD & 4K Camera Installation',
      'Night Vision & Weatherproof',
      'Remote Monitoring Setup',
      'Mobile App Integration',
      '24/7 Technical Support'
    ],
    price: 'Starting from ₹15,000',
    image: '/images/cctv-installation.jpg'
  },
  {
    id: 'cctv-amc',
    title: 'CCTV AMC',
    description: 'Annual Maintenance Contract for CCTV systems to ensure optimal performance.',
    slug: '/cctv-amc',
    icon: 'Shield',
    features: [
      'Regular System Health Checks',
      'Camera Cleaning & Calibration',
      'Software Updates',
      '24/7 Emergency Support',
      'Replacement of Faulty Parts'
    ],
    price: 'Starting from ₹3,000/year',
    image: '/images/cctv-amc.jpg'
  },
  {
    id: 'fire-alarm-systems',
    title: 'Fire Alarm Systems',
    description: 'Complete fire detection and alarm system installation for safety compliance.',
    slug: '/fire-alarm-systems',
    icon: 'Flame',
    features: [
      'Smoke & Heat Detectors',
      'Manual Call Points',
      'Control Panel Integration',
      'Audible & Visual Alarms',
      'Emergency Lighting'
    ],
    price: 'Starting from ₹25,000',
    image: '/images/fire-alarm.jpg'
  },
  {
    id: 'biometric-attendance',
    title: 'Biometric Attendance',
    description: 'Fingerprint and face recognition attendance systems for accurate time tracking.',
    slug: '/biometric-attendance',
    icon: 'Fingerprint',
    features: [
      'Fingerprint Recognition',
      'Face Recognition Technology',
      'Mobile App Integration',
      'Attendance Reports',
      'Multi-location Support'
    ],
    price: 'Starting from ₹8,000',
    image: '/images/biometric.jpg'
  },
  {
    id: 'repair-maintenance',
    title: 'Repair & Maintenance',
    description: 'Expert repair and maintenance services for all security and automation systems.',
    slug: '/repair-maintenance',
    icon: 'Wrench',
    features: [
      'CCTV System Repairs',
      'Access Control Fixes',
      'Network Troubleshooting',
      'Component Replacement',
      'Same-day Service Available'
    ],
    price: 'Starting from ₹500',
    image: '/images/repair.jpg'
  },
  {
    id: 'video-door-phone',
    title: 'Video Door Phone',
    description: 'Smart video door phone systems with mobile connectivity for enhanced security.',
    slug: '/video-door-phone',
    icon: 'DoorOpen',
    features: [
      'HD Video Calling',
      'Mobile App Integration',
      'Night Vision',
      'Two-way Communication',
      'Remote Door Unlocking'
    ],
    price: 'Starting from ₹12,000',
    image: '/images/video-door.jpg'
  },
  {
    id: 'smart-home-automation',
    title: 'Smart Home Automation',
    description: 'Complete home automation solutions for lighting, security, and climate control.',
    slug: '/smart-home-automation',
    icon: 'Home',
    features: [
      'Smart Lighting Control',
      'Climate Management',
      'Security Integration',
      'Voice Control',
      'Mobile App Control'
    ],
    price: 'Starting from ₹50,000',
    image: '/images/smart-home.jpg'
  },
  {
    id: 'access-control-systems',
    title: 'Access Control Systems',
    description: 'Advanced access control solutions for secure entry management.',
    slug: '/access-control-systems',
    icon: 'Key',
    features: [
      'Card & Biometric Access',
      'Time-based Access Control',
      'Visitor Management',
      'Audit Trail Reports',
      'Integration with CCTV'
    ],
    price: 'Starting from ₹20,000',
    image: '/images/access-control.jpg'
  },
  {
    id: 'public-address-systems',
    title: 'Public Address Systems',
    description: 'Professional PA systems for announcements and emergency communications.',
    slug: '/public-address-systems',
    icon: 'Volume2',
    features: [
      'Crystal Clear Audio',
      'Zone-wise Broadcasting',
      'Emergency Announcements',
      'Background Music',
      'Wireless Microphone Support'
    ],
    price: 'Starting from ₹30,000',
    image: '/images/pa-system.jpg'
  }
];
