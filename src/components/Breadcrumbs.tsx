import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import Script from 'next/script';
import { buildBreadcrumbSchema } from '@/lib/seo';

export type Crumb = { name: string; path: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  // Always start with Home for both UI and schema.
  const full: Crumb[] = [{ name: 'Home', path: '/' }, ...items];

  return (
    <nav
      aria-label="Breadcrumb"
      className="container mx-auto px-4 pt-4 text-sm text-gray-600"
    >
      <ol className="flex flex-wrap items-center gap-1">
        {full.map((c, i) => {
          const isLast = i === full.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1">
              {i === 0 ? (
                <Home className="w-4 h-4 text-gray-400" aria-hidden />
              ) : null}
              {isLast ? (
                <span className="text-gray-700 font-medium" aria-current="page">
                  {c.name}
                </span>
              ) : (
                <Link
                  href={c.path}
                  className="hover:text-orange-600 transition-colors"
                >
                  {c.name}
                </Link>
              )}
              {!isLast && (
                <ChevronRight
                  className="w-4 h-4 text-gray-400"
                  aria-hidden
                />
              )}
            </li>
          );
        })}
      </ol>

      <Script
        id={`breadcrumb-jsonld-${items.map((i) => i.path).join('-')}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema(full)),
        }}
      />
    </nav>
  );
}
