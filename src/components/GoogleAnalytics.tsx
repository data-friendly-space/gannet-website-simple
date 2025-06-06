'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { pageview } from '@/lib/gtag';

const GoogleAnalytics = (): React.ReactElement | null => {
  const pathname = usePathname();
  const [gaId, setGaId] = useState<string>('');

  useEffect(() => {
    // Get GA ID from environment variable at runtime, fallback to hardcoded value for testing
    const runtimeGaId = process.env.NEXT_PUBLIC_GA_ID || 'G-29SQJJER92';
    setGaId(runtimeGaId);
    console.log('Runtime GA_TRACKING_ID:', runtimeGaId);
  }, []);

  useEffect(() => {
    if (gaId) {
      const url = new URL(window.location.href);
      console.log('Tracking pageview for:', url.href);
      pageview(url);
    } else {
      console.log('No GA_TRACKING_ID found at runtime');
    }
  }, [pathname, gaId]);

  if (!gaId) {
    console.log('GoogleAnalytics component not rendering - no GA_TRACKING_ID');
    return null;
  }

  console.log('GoogleAnalytics component rendering with ID:', gaId);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics; 