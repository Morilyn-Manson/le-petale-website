import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Le pétale | 仙台・一番町のBAR',
  description: '仙台市青葉区一番町にあるBAR「Le pétale（ル・ペタル）」。ラグジュアリーで落ち着いた大人の空間でお酒をお楽しみいただけます。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18470280778"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18470280778');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}