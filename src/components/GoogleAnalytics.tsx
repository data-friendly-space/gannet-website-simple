'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { pageview } from '@/lib/gtag';

const GoogleAnalytics = (): React.ReactElement | null => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Get GA ID - try environment variable first, fallback to hardcoded
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-29SQJJER92';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && gaId) {
      const url = new URL(window.location.href);
      pageview(url);
    }
  }, [pathname, mounted, gaId]);

  // Only render on client to prevent hydration mismatch
  if (!mounted || !gaId) {
    return null;
  }

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