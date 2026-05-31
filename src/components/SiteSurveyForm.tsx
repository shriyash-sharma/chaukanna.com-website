'use client';

import { useState } from 'react';
import { CalendarCheck, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import {
  buildWhatsAppLink,
  trackEvent,
} from '@/lib/analytics';

const SERVICE_OPTIONS = [
  'CCTV Installation',
  'CCTV AMC / Repair',
  'Fire Alarm Systems',
  'Biometric Attendance',
  'Smart Home Automation',
  'Access Control Systems',
  'Video Door Phone',
  'Not sure — suggest the right service',
];

const PROPERTY_OPTIONS = [
  'Home (apartment / villa)',
  'Shop / retail',
  'Office',
  'Society / building',
  'School',
  'Factory / warehouse',
  'Other',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function SiteSurveyForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  function toggleService(s: string) {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get('name') || '').trim(),
      phone: String(fd.get('phone') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      location: String(fd.get('location') || '').trim(),
      propertyType: String(fd.get('propertyType') || '').trim(),
      services: selectedServices,
      preferredContact: String(fd.get('preferredContact') || 'whatsapp'),
      preferredTime: String(fd.get('preferredTime') || '').trim(),
      notes: String(fd.get('notes') || '').trim(),
    };

    if (!payload.name || !payload.phone || !payload.location) {
      setStatus('error');
      setErrorMsg('Please fill name, phone and location.');
      return;
    }

    try {
      const res = await fetch('/api/site-survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Could not submit. Please WhatsApp us instead.');
      }
      trackEvent('site_survey_submit', {
        property: payload.propertyType,
        location: payload.location,
        services: selectedServices.join(','),
        preferred_contact: payload.preferredContact,
      });
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Unexpected error.');
    }
  }

  if (status === 'success') {
    const waMsg = `Hi Chaukanna, I just submitted a site survey request on your website. Please confirm the visit timing.`;
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 sm:p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" aria-hidden />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Survey request received
        </h2>
        <p className="text-gray-700 mb-5 max-w-md mx-auto">
          Thanks! A team member will call you shortly to confirm the visit. For an even faster response, ping us on WhatsApp.
        </p>
        <a
          href={buildWhatsAppLink(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_click', { source: 'survey_confirmation' })}
          className="inline-block bg-green-600 text-white font-semibold px-5 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-7 space-y-5"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Your name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            placeholder="e.g., Anil S."
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            pattern="[0-9+\- ]{10,16}"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            placeholder="10-digit mobile"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email (optional)
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            placeholder="name@example.com"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1.5">
            Location / area <span className="text-red-500">*</span>
          </label>
          <input
            id="location"
            name="location"
            required
            autoComplete="address-level2"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            placeholder="e.g., Wagholi, Pune"
          />
        </div>
      </div>

      <div>
        <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1.5">
          Property type
        </label>
        <select
          id="propertyType"
          name="propertyType"
          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
          defaultValue=""
        >
          <option value="" disabled>
            Select…
          </option>
          {PROPERTY_OPTIONS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className="block text-sm font-medium text-gray-700 mb-2">
          What service(s) do you need?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {SERVICE_OPTIONS.map((s) => {
            const active = selectedServices.includes(s);
            return (
              <button
                type="button"
                key={s}
                onClick={() => toggleService(s)}
                className={`text-left px-3 py-2.5 rounded-lg border text-sm transition-colors ${
                  active
                    ? 'bg-orange-50 border-orange-500 text-orange-800 font-medium'
                    : 'bg-white border-gray-300 text-gray-700 hover:border-orange-400'
                }`}
                aria-pressed={active}
              >
                {active ? '✓ ' : ''}
                {s}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-1.5">
            Preferred contact
          </label>
          <select
            id="preferredContact"
            name="preferredContact"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            defaultValue="whatsapp"
          >
            <option value="whatsapp">WhatsApp</option>
            <option value="phone">Phone call</option>
            <option value="email">Email</option>
          </select>
        </div>
        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1.5">
            Preferred visit time
          </label>
          <input
            id="preferredTime"
            name="preferredTime"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            placeholder="e.g., Tomorrow 11 AM"
          />
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1.5">
          Anything else? (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
          placeholder="Number of cameras, building floors, urgency, etc."
        />
      </div>

      {status === 'error' && (
        <div className="flex items-start bg-red-50 border border-red-200 text-red-800 rounded-lg p-3 text-sm">
          <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" aria-hidden />
          <p>{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-orange-600 hover:bg-orange-700 disabled:opacity-60 text-white font-semibold px-5 py-3.5 rounded-xl inline-flex items-center justify-center"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" aria-hidden /> Submitting…
          </>
        ) : (
          <>
            <CalendarCheck className="w-5 h-5 mr-2" aria-hidden /> Book free site survey
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We&apos;ll only use your details to schedule the survey. No spam, no third-party sharing.
      </p>
    </form>
  );
}
