'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { FAQ_TOPICS, KNOWLEDGE_FAQS, type FaqTopic } from '@/data/faqs';

export default function FaqExplorer() {
  const [activeTopic, setActiveTopic] = useState<FaqTopic | 'all'>('all');
  const [query, setQuery] = useState('');
  const [openKey, setOpenKey] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return KNOWLEDGE_FAQS.filter((f) => {
      const topicOk = activeTopic === 'all' || f.topic === activeTopic;
      const queryOk =
        !q ||
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q);
      return topicOk && queryOk;
    });
  }, [activeTopic, query]);

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" aria-hidden />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search FAQs…"
          className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
          aria-label="Search frequently asked questions"
        />
      </div>

      {/* Topic chips */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTopic('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
            activeTopic === 'all'
              ? 'bg-orange-600 text-white border-orange-600'
              : 'bg-white text-gray-700 border-gray-300 hover:border-orange-400'
          }`}
        >
          All ({KNOWLEDGE_FAQS.length})
        </button>
        {FAQ_TOPICS.map((t) => {
          const count = KNOWLEDGE_FAQS.filter((f) => f.topic === t.value).length;
          const active = activeTopic === t.value;
          return (
            <button
              type="button"
              key={t.value}
              onClick={() => setActiveTopic(t.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                active
                  ? 'bg-orange-600 text-white border-orange-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-orange-400'
              }`}
            >
              {t.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <p className="text-gray-600 text-center py-8 bg-white border border-gray-200 rounded-xl">
          No FAQs match that search. Try a different keyword.
        </p>
      ) : (
        <div className="space-y-3">
          {filtered.map((f, i) => {
            const key = `${f.topic}-${i}-${f.question.slice(0, 20)}`;
            const isOpen = openKey === key;
            return (
              <div
                key={key}
                className="border border-gray-200 rounded-xl bg-white overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between text-left px-5 py-4 hover:bg-orange-50 transition-colors"
                  aria-expanded={isOpen}
                  onClick={() => {
                    setOpenKey(isOpen ? null : key);
                    if (!isOpen) {
                      trackEvent('faq_open', { topic: f.topic, q: f.question });
                    }
                  }}
                >
                  <span className="font-semibold text-gray-900 pr-3">{f.question}</span>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="hidden sm:inline text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                      {f.topicLabel}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-orange-600 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden
                    />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-gray-700 leading-relaxed text-sm">
                    <p>{f.answer}</p>
                    {f.serviceSlug && (
                      <Link
                        href={f.serviceSlug}
                        className="inline-block mt-3 text-orange-700 hover:text-orange-800 font-semibold text-sm"
                      >
                        Read more about this service →
                      </Link>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
