'use client';

import { useEffect } from 'react';
import { trackEvent, type AnalyticsEvent } from '@/lib/analytics';

interface PageTrackerProps {
  event: AnalyticsEvent;
  params?: Record<string, unknown>;
}

/**
 * Lightweight client component that fires a single GA4 event on mount.
 * Use to track page categories (project, service, area, etc.) beyond
 * GA's automatic page_view.
 */
export default function PageTracker({ event, params }: PageTrackerProps) {
  useEffect(() => {
    trackEvent(event, params);
    // intentionally ignore params changes — page mount is the moment we track
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event]);

  return null;
}
