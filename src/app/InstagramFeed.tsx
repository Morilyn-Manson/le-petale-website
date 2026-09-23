'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'behold-widget': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { 'feed-id': string },
        HTMLElement
      >;
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'behold-widget': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { 'feed-id': string },
        HTMLElement
      >;
    }
  }
}

export default function InstagramFeed() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-full h-48 bg-[#120307]" />;
  }

  return (
    <>
      {/* Beholdブランディングロゴのみ非表示 */}
      <style jsx global>{`
        behold-branding,
        .behold-branding {
          display: none !important;
        }
      `}</style>

      <div className="w-full">
        <behold-widget feed-id="AuPdSfOgH6Nx79rbNGm6" />
      </div>

      <Script
        src="https://w.behold.so/widget.js"
        type="module"
        strategy="lazyOnload"
      />
    </>
  );
}