'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { GA_TRACKING_ID, pageview } from '@/lib/gtag';

const GoogleAnalytics = (): React.ReactElement | null => {
  const pathname = usePathname();

  useEffect(() => {
    console.log('GA_TRACKING_ID:', GA_TRACKING_ID);
    if (GA_TRACKING_ID) {
      const url = new URL(window.location.href);
      console.log('Tracking pageview for:', url.href);
      pageview(url);
    } else {
      console.log('No GA_TRACKING_ID found');
    }
  }, [pathname]);

  if (!GA_TRACKING_ID) {
    console.log('GoogleAnalytics component not rendering - no GA_TRACKING_ID');
    return null;
  }

  console.log('GoogleAnalytics component rendering with ID:', GA_TRACKING_ID);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics; 