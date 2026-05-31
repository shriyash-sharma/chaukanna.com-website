'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, Info } from 'lucide-react';
import {
  buildWhatsAppLink,
  trackEvent,
} from '@/lib/analytics';

type PropertyType = 'home' | 'shop' | 'office' | 'society';
type Resolution = '2mp' | '4mp' | '4k';
type RetentionDays = 7 | 15 | 30;

/* --- pricing model (Pune 2026 indicative) ---------------------------------- */

// Per-camera installed cost (camera + share of cabling/install/labour) in INR
const PER_CAM_PRICE: Record<Resolution, [number, number]> = {
  '2mp': [3000, 4500],
  '4mp': [4500, 6500],
  '4k': [7000, 10000],
};

// Recorder + accessories base cost (DVR/NVR + power, mounts, brackets) in INR
function recorderBase(cameras: number, propertyType: PropertyType): [number, number] {
  if (propertyType === 'society' || cameras >= 16) {
    // NVR + PoE switch
    if (cameras >= 24) return [22000, 32000];
    if (cameras >= 16) return [16000, 24000];
  }
  if (cameras >= 8) return [9000, 13000];
  if (cameras >= 4) return [6000, 9000];
  return [4500, 6500];
}

// HDD cost based on storage need
function hddCost(tb: number): [number, number] {
  if (tb <= 1) return [3500, 5000];
  if (tb <= 2) return [5500, 7500];
  if (tb <= 4) return [9000, 12000];
  if (tb <= 8) return [16000, 22000];
  return [28000, 38000];
}

// Storage formula (TB) ≈ cameras × bitrate (Mbps) × hours × days / 8 / 1024 × H.265 factor
function recommendedTb(
  cameras: number,
  resolution: Resolution,
  retention: RetentionDays,
): number {
  const bitrate = resolution === '2mp' ? 2 : resolution === '4mp' ? 4 : 8; // Mbps
  // 24h * 3600s * Mbps / 8 = MB/day per camera, * cameras * days / 1024 = GB / 1024 = TB
  const gbPerCameraPerDay = (bitrate * 24 * 3600) / (8 * 1024); // ≈ MB->GB
  const h265Factor = 0.5;
  const totalGb = gbPerCameraPerDay * cameras * retention * h265Factor;
  const tb = totalGb / 1024;
  // round up to next standard size
  if (tb <= 1) return 1;
  if (tb <= 2) return 2;
  if (tb <= 4) return 4;
  if (tb <= 8) return 8;
  if (tb <= 12) return 12;
  return Math.ceil(tb);
}

function recommendationLine(
  propertyType: PropertyType,
  cameras: number,
  resolution: Resolution,
): string {
  if (propertyType === 'shop')
    return 'For shops we recommend at least one 4MP camera directly above the cash counter for note + card visibility.';
  if (propertyType === 'society' || cameras >= 16)
    return 'For your scale, an IP NVR with PoE cabling is the right architecture — easier expansion and cleaner audit-ready footage.';
  if (propertyType === 'office')
    return 'For offices we recommend 4MP+ cameras at entry / reception and 2MP elsewhere; H.265+ recording will keep your HDD lean.';
  if (resolution === '4k')
    return 'Use 4K only where you need plate / face detail (gate, entry) — elsewhere 2MP saves storage without losing usable detail.';
  return 'Most homes are well-served by a mix of 4 cameras (2MP) covering main entry, parking and balcony — with overhead 4MP if you have a high-value area.';
}

export default function CalculatorClient() {
  const [propertyType, setPropertyType] = useState<PropertyType>('home');
  const [camerasInput, setCamerasInput] = useState<string>('4');
  const [resolution, setResolution] = useState<Resolution>('2mp');
  const [retention, setRetention] = useState<RetentionDays>(30);

  const cameras = Math.max(2, Math.min(64, Number(camerasInput) || 4));

  const result = useMemo(() => {
    const [perLow, perHigh] = PER_CAM_PRICE[resolution];
    const camLow = cameras * perLow;
    const camHigh = cameras * perHigh;
    const [recLow, recHigh] = recorderBase(cameras, propertyType);
    const tb = recommendedTb(cameras, resolution, retention);
    const [hLow, hHigh] = hddCost(tb);
    const labour = cameras < 8 ? [3000, 5000] : cameras < 16 ? [6000, 9000] : [12000, 18000];

    const totalLow = camLow + recLow + hLow + labour[0];
    const totalHigh = camHigh + recHigh + hHigh + labour[1];

    return {
      totalLow,
      totalHigh,
      tb,
      camLow,
      camHigh,
      recLow,
      recHigh,
      hLow,
      hHigh,
      labour,
    };
  }, [cameras, resolution, retention, propertyType]);

  const inr = (n: number) =>
    n.toLocaleString('en-IN', { maximumFractionDigits: 0 });

  const whatsappMessage = `Hi Chaukanna, I used your CCTV calculator. My setup:\n- Property: ${propertyType}\n- Cameras: ${cameras}\n- Resolution: ${resolution.toUpperCase()}\n- Retention: ${retention} days\nEstimate received: ₹${inr(result.totalLow)} – ₹${inr(result.totalHigh)}. Please share a sized quote for my address.`;

  function handleQuoteClick() {
    trackEvent('calculator_result_view', {
      property: propertyType,
      cameras,
      resolution,
      retention,
      estimate_low: result.totalLow,
      estimate_high: result.totalHigh,
    });
  }

  // Track input changes lightly (only on meaningful change)
  function handleChange(
    name: 'propertyType' | 'cameras' | 'resolution' | 'retention',
    value: string | number,
  ) {
    trackEvent('calculator_usage', { field: name, value });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      {/* Inputs */}
      <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-6">
        <div className="flex items-center mb-2 text-gray-900">
          <Calculator className="w-5 h-5 mr-2 text-orange-600" aria-hidden />
          <h2 className="font-bold text-lg">Tell us about your property</h2>
        </div>

        {/* Property type */}
        <fieldset>
          <legend className="block text-sm font-medium text-gray-700 mb-2">
            Property type
          </legend>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {(['home', 'shop', 'office', 'society'] as PropertyType[]).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => {
                  setPropertyType(p);
                  handleChange('propertyType', p);
                }}
                className={`px-3 py-2.5 rounded-lg border text-sm font-medium capitalize transition-colors ${
                  propertyType === p
                    ? 'bg-orange-600 text-white border-orange-600'
                    : 'bg-white text-gray-800 border-gray-300 hover:border-orange-400'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </fieldset>

        {/* Cameras */}
        <div>
          <label htmlFor="cam-count" className="block text-sm font-medium text-gray-700 mb-2">
            Number of cameras
          </label>
          <div className="grid grid-cols-5 gap-2 mb-3">
            {[2, 4, 8, 16].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => {
                  setCamerasInput(String(n));
                  handleChange('cameras', n);
                }}
                className={`px-3 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                  Number(camerasInput) === n
                    ? 'bg-orange-600 text-white border-orange-600'
                    : 'bg-white text-gray-800 border-gray-300 hover:border-orange-400'
                }`}
              >
                {n}
              </button>
            ))}
            <input
              id="cam-count"
              type="number"
              min={2}
              max={64}
              value={camerasInput}
              onChange={(e) => {
                setCamerasInput(e.target.value);
                handleChange('cameras', e.target.value);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-center focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Custom"
            />
          </div>
          <p className="text-xs text-gray-500">Pick a preset or type a custom number (2–64).</p>
        </div>

        {/* Resolution */}
        <fieldset>
          <legend className="block text-sm font-medium text-gray-700 mb-2">
            Camera resolution
          </legend>
          <div className="grid grid-cols-3 gap-2">
            {([
              ['2mp', '2MP (1080p)'],
              ['4mp', '4MP'],
              ['4k', '4K / 8MP'],
            ] as [Resolution, string][]).map(([v, l]) => (
              <button
                key={v}
                type="button"
                onClick={() => {
                  setResolution(v);
                  handleChange('resolution', v);
                }}
                className={`px-3 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                  resolution === v
                    ? 'bg-orange-600 text-white border-orange-600'
                    : 'bg-white text-gray-800 border-gray-300 hover:border-orange-400'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </fieldset>

        {/* Retention */}
        <fieldset>
          <legend className="block text-sm font-medium text-gray-700 mb-2">
            How many days of footage?
          </legend>
          <div className="grid grid-cols-3 gap-2">
            {([7, 15, 30] as RetentionDays[]).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => {
                  setRetention(d);
                  handleChange('retention', d);
                }}
                className={`px-3 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                  retention === d
                    ? 'bg-orange-600 text-white border-orange-600'
                    : 'bg-white text-gray-800 border-gray-300 hover:border-orange-400'
                }`}
              >
                {d} days
              </button>
            ))}
          </div>
        </fieldset>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start text-sm text-blue-900">
          <Info className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" aria-hidden />
          <p>{recommendationLine(propertyType, cameras, resolution)}</p>
        </div>
      </div>

      {/* Result */}
      <div className="lg:col-span-2 space-y-4">
        <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl p-6 shadow-lg">
          <p className="text-sm uppercase tracking-wide opacity-80">Estimated all-in cost</p>
          <p className="text-3xl sm:text-4xl font-bold mt-1">
            ₹{inr(result.totalLow)} – ₹{inr(result.totalHigh)}
          </p>
          <p className="text-sm opacity-90 mt-2">
            Includes cameras, recorder, HDD, cabling and labour (excl. GST).
          </p>
          <div className="mt-4 text-xs space-y-1 bg-white/10 rounded-lg p-3">
            <p>Cameras: ₹{inr(result.camLow)} – ₹{inr(result.camHigh)}</p>
            <p>Recorder + power: ₹{inr(result.recLow)} – ₹{inr(result.recHigh)}</p>
            <p>HDD ({result.tb} TB): ₹{inr(result.hLow)} – ₹{inr(result.hHigh)}</p>
            <p>Cabling + labour: ₹{inr(result.labour[0])} – ₹{inr(result.labour[1])}</p>
          </div>
        </div>

        <a
          href={buildWhatsAppLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleQuoteClick}
          className="block bg-green-600 hover:bg-green-700 text-white text-center font-semibold px-5 py-3.5 rounded-xl"
        >
          Get a written quote on WhatsApp
        </a>
        <Link
          href="/book-site-survey"
          onClick={handleQuoteClick}
          className="block bg-white border-2 border-orange-600 text-orange-700 hover:bg-orange-50 text-center font-semibold px-5 py-3.5 rounded-xl"
        >
          Book a free site survey <ArrowRight className="w-4 h-4 inline ml-1" aria-hidden />
        </Link>
        <p className="text-xs text-gray-500 text-center">
          This is an indicative range for Pune in 2026. Final pricing depends on cabling routes, brand selection and any civil work needed.
        </p>
      </div>
    </div>
  );
}
