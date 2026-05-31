'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Filter, ArrowRight } from 'lucide-react';
import {
  PROJECTS,
  PROJECT_CATEGORIES,
  isPlaceholderImage,
  type ProjectCategory,
} from '@/data/projects';
import { trackEvent } from '@/lib/analytics';

type CategoryFilter = ProjectCategory | 'all';

export default function ProjectsExplorer() {
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [area, setArea] = useState<string>('all');

  const areas = useMemo(
    () => Array.from(new Set(PROJECTS.map((p) => p.area))).sort(),
    [],
  );

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      if (category !== 'all' && p.category !== category) return false;
      if (area !== 'all' && p.area !== area) return false;
      return true;
    });
  }, [category, area]);

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div className="flex items-center mb-4 text-gray-900">
          <Filter className="w-5 h-5 mr-2" aria-hidden />
          <h2 className="font-semibold">Filter projects</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Service category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as CategoryFilter)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            >
              <option value="all">All categories</option>
              {PROJECT_CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Location
            </label>
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            >
              <option value="all">All areas</option>
              {areas.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-gray-500 mt-3">
          Showing {filtered.length} of {PROJECTS.length} projects.
        </p>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center text-gray-700">
          No projects match these filters. Reset filters to see more.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              onClick={() =>
                trackEvent('cta_click', {
                  source: 'projects_explorer',
                  slug: p.slug,
                })
              }
              className="group bg-white rounded-xl shadow hover:shadow-lg transition-shadow overflow-hidden border border-gray-100"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-orange-200 relative">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className={
                    isPlaceholderImage(p.image)
                      ? 'object-contain p-10 opacity-80 group-hover:opacity-100 transition-opacity'
                      : 'object-cover group-hover:scale-105 transition-transform duration-300'
                  }
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <MapPin className="w-3.5 h-3.5 mr-1" aria-hidden />
                  {p.area}, {p.city}
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5 leading-snug group-hover:text-orange-700 transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">{p.problem}</p>
                <div className="mt-4 inline-flex items-center text-sm font-semibold text-orange-700 group-hover:text-orange-800">
                  See project <ArrowRight className="w-4 h-4 ml-1" aria-hidden />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
