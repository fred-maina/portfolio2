type AnalyticsEvent =
  | 'view_cv'
  | 'book_coffee'
  | 'view_available_times'
  | 'view_project'
  | 'contact_email'
  | 'linkedin_click'
  | 'open_social_profile'
  | 'page_not_found';

type EventParameters = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId =
  import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || 'G-KGPV4QZLKS';

export function initializeAnalytics() {
  if (!measurementId || typeof window === 'undefined' || window.gtag) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);

  const dataLayer = (window.dataLayer = window.dataLayer || []);
  window.gtag = (...args: unknown[]) => dataLayer.push(args);
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { send_page_view: true });
}

export function trackEvent(name: AnalyticsEvent, parameters: EventParameters = {}) {
  window.gtag?.('event', name, parameters);
}
