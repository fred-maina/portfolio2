type AnalyticsEvent =
  | 'view_cv'
  | 'book_coffee'
  | 'open_booking_page'
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
  import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || 'G-0KEFVWQ33N';

export function initializeAnalytics() {
  if (!measurementId || typeof window === 'undefined' || window.gtag) return;

  const dataLayer = (window.dataLayer = window.dataLayer || []);
  window.gtag = (...args: unknown[]) => dataLayer.push(args);
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { send_page_view: true });

  let loaded = false;
  const loadGoogleTag = () => {
    if (loaded) return;
    loaded = true;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  };

  // Keep third-party analytics off the critical rendering path. Interactions
  // load it immediately; otherwise it loads after the page has settled.
  ['pointerdown', 'keydown', 'touchstart'].forEach((eventName) =>
    window.addEventListener(eventName, loadGoogleTag, { once: true, passive: true }),
  );
  window.setTimeout(loadGoogleTag, 5000);
}

export function trackEvent(name: AnalyticsEvent, parameters: EventParameters = {}) {
  window.gtag?.('event', name, parameters);
}
