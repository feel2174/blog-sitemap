'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    _taboola?: Array<Record<string, unknown>>;
  }
}

export default function TaboolaWidgets() {
  const pathname = usePathname();
  const isArticlePage = pathname !== '/';

  if (!isArticlePage) {
    return null;
  }

  return (
    <>
      <aside className="pointer-events-none fixed right-6 top-32 z-40 hidden xl:block">
        <div className="pointer-events-auto w-[300px]">
          <div id="taboola-right-rail-thumbnails" />
          <Script
            id={`taboola-right-rail-${pathname}`}
            strategy="afterInteractive"
          >
            {`
              window._taboola = window._taboola || [];
              window._taboola.push({
                mode: 'thumbnails-rr',
                container: 'taboola-right-rail-thumbnails',
                placement: 'Right Rail Thumbnails',
                target_type: 'mix'
              });
            `}
          </Script>
        </div>
      </aside>

      <div className="mx-auto mt-12 w-full max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
        <div id="taboola-below-article-thumbnails" />
        <Script
          id={`taboola-below-article-${pathname}`}
          strategy="afterInteractive"
        >
          {`
            window._taboola = window._taboola || [];
            window._taboola.push({
              mode: 'alternating-thumbnails-a',
              container: 'taboola-below-article-thumbnails',
              placement: 'Below Article Thumbnails',
              target_type: 'mix'
            });
          `}
        </Script>
        <Script
          id={`taboola-flush-${pathname}`}
          strategy="afterInteractive"
        >
          {`
            window._taboola = window._taboola || [];
            window._taboola.push({ flush: true });
          `}
        </Script>
      </div>
    </>
  );
}
