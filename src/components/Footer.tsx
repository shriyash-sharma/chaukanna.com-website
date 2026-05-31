import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Star, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { BRAND_ASSETS, SITE, GOOGLE_PROFILE_URL } from '@/lib/branding';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'CCTV Cost Calculator', href: '/cctv-cost-calculator' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Book Free Site Survey', href: '/book-site-survey' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'CCTV Installation', href: '/cctv-installation' },
    { name: 'CCTV AMC', href: '/cctv-amc' },
    { name: 'Fire Alarm Systems', href: '/fire-alarm-systems' },
    { name: 'Biometric Attendance', href: '/biometric-attendance' },
    { name: 'Repair & Maintenance', href: '/repair-maintenance' },
    { name: 'Video Door Phone', href: '/video-door-phone' },
    { name: 'Smart Home Automation', href: '/smart-home-automation' },
    { name: 'Access Control Systems', href: '/access-control-systems' },
    { name: 'Public Address Systems', href: '/public-address-systems' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src={BRAND_ASSETS.logoSvg}
                alt={`${SITE.legalName} logo`}
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-xl font-bold">{SITE.name}</h3>
                <p className="text-sm text-gray-400">{SITE.tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional CCTV installation, AMC, fire alarm, biometric attendance, smart home and access control across Pune. Trusted by 5000+ customers. Free site survey, same-day response, GST-billed work with 1-year service warranty.
            </p>
            <a
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200 transition-colors"
              aria-label="See Chaukanna on Google"
            >
              <Star className="w-4 h-4 text-yellow-400 fill-current" aria-hidden />
              See us on Google
            </a>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">+91 88886 96046</p>
                  <p className="text-gray-300 text-sm">+91 83906 96046</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">info@chaukanna.com</p>
                  <p className="text-gray-300 text-sm">support@chaukanna.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                  Shop No 13, Satya Plaza Building,<br />
                    Pune, Maharashtra 412207
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-300 text-sm">Sun: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Chaukanna By Shri CCTV & Home Automation Services Services. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-orange-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
