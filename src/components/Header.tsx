'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { BRAND_ASSETS, SITE } from '@/lib/branding';
import { trackEvent, buildTelLink, buildWhatsAppLink } from '@/lib/analytics';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'Calculator', href: '/cctv-cost-calculator' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'About', href: '/about' },
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

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar — slim, single-line on all sizes */}
      <div className="bg-orange-600 text-white text-xs sm:text-sm">
        <div className="container mx-auto px-4 h-8 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6 min-w-0">
            <a
              href={buildTelLink()}
              onClick={() => trackEvent('phone_call', { source: 'header_topbar' })}
              className="flex items-center gap-1.5 hover:underline truncate"
            >
              <Phone className="w-3.5 h-3.5 flex-shrink-0" aria-hidden />
              <span className="truncate">+91 88886 96046</span>
            </a>
            <a
              href="mailto:info@chaukanna.com"
              onClick={() => trackEvent('email_click', { source: 'header_topbar' })}
              className="hidden sm:flex items-center gap-1.5 hover:underline truncate"
            >
              <Mail className="w-3.5 h-3.5 flex-shrink-0" aria-hidden />
              <span className="truncate">info@chaukanna.com</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" aria-hidden />
            <span>Pune, Maharashtra</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 h-16">
          {/* Logo + brand — single line, never wraps */}
          <Link
            href="/"
            className="flex items-center gap-2.5 min-w-0 flex-shrink-0"
            aria-label={`${SITE.name} home`}
          >
            <Image
              src={BRAND_ASSETS.logoSvg}
              alt={`${SITE.legalName} logo`}
              width={36}
              height={36}
              priority
              className="w-9 h-9 flex-shrink-0"
            />
            <div className="leading-tight min-w-0">
              <span className="block text-lg sm:text-xl font-bold text-gray-900 truncate">
                {SITE.name}
              </span>
              <span className="hidden sm:block text-[11px] text-gray-500 truncate">
                CCTV &amp; Home Automation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation — only on xl+ to avoid overflow */}
          <div className="hidden xl:flex items-center gap-6 flex-1 justify-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-700 hover:text-orange-600 font-medium transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
            <div className="relative group">
              <button className="text-sm text-gray-700 hover:text-orange-600 font-medium transition-colors flex items-center whitespace-nowrap">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons — compact, icon-led on desktop */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <Link
              href="/book-site-survey"
              onClick={() => trackEvent('cta_click', { source: 'header_desktop_survey' })}
              className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              Free Survey
            </Link>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { source: 'header_desktop' })}
              aria-label="WhatsApp Chaukanna"
              className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
            <a
              href={buildTelLink()}
              onClick={() => trackEvent('phone_call', { source: 'header_desktop' })}
              aria-label="Call Chaukanna"
              className="bg-orange-600 text-white text-sm px-3 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <Phone className="w-4 h-4" aria-hidden />
              Call
            </a>
          </div>

          {/* Mobile: quick-call + menu button */}
          <div className="lg:hidden flex items-center gap-1">
            <a
              href={buildTelLink()}
              onClick={() => trackEvent('phone_call', { source: 'header_mobile_inline' })}
              aria-label="Call Chaukanna"
              className="p-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700"
            >
              <Phone className="w-5 h-5" aria-hidden />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" aria-hidden /> : <Menu className="w-6 h-6" aria-hidden />}
            </button>
          </div>
        </div>

        {/* Mobile / tablet Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden pb-4 border-t border-gray-100">
            <div className="pt-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-3 pb-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                  Services
                </p>
                <div className="space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-3 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="px-4 pt-4 grid grid-cols-1 gap-2">
                <Link
                  href="/book-site-survey"
                  onClick={() => { setIsMenuOpen(false); trackEvent('cta_click', { source: 'header_mobile_survey' }); }}
                  className="block w-full bg-gray-900 text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors text-center"
                >
                  Book Free Site Survey
                </Link>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', { source: 'header_mobile_menu' })}
                  className="block w-full bg-green-600 text-white px-4 py-2.5 rounded-lg hover:bg-green-700 transition-colors text-center"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
