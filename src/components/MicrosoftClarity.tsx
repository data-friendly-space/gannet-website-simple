'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

const MicrosoftClarity = (): React.ReactElement | null => {
  const [mounted, setMounted] = useState(false);

  // Clarity project ID from the provided script
  const clarityId = 'sgv91y9zpm';

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only render on client to prevent hydration mismatch
  if (!mounted || !clarityId) {
    return null;
  }

  return (
    <>
      <Script
        id="microsoft-clarity-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `,
        }}
      />
    </>
  );
};

export default MicrosoftClarity; 