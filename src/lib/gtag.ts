// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL): void => {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || '';
  if (typeof window !== 'undefined' && window.gtag && gaId) {
    window.gtag('config', gaId, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (
  action: string,
  category: string,
  label?: string,
  value?: number
): void => {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || '';
  if (typeof window !== 'undefined' && window.gtag && gaId) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}; 