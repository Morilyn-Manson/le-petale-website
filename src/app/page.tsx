'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen';

const HeroSlider = dynamic(() => import('./HeroSlider'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-auto bg-[#120307] aspect-[16/9] md:aspect-[21/9]" />
  ),
});

const InstagramFeed = dynamic(() => import('./InstagramFeed'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-48 bg-[#2E0812] animate-pulse rounded-lg" />
  ),
});

export default function Home() {
  const address = "宮城県仙台市青葉区一番町4丁目2-20 ブラザービル";
  const googleMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const instagramUrl = "https://www.instagram.com/le_petale.vinylonly/";
  const phoneNumber = "02230024963";

  // オープニングアニメーション終了後（3秒後）にIntersectionObserverを開始する
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let fadeElements: NodeListOf<Element> | null = null;

    const startObserver = () => {
      const observerCallback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      };

      const observerOptions: IntersectionObserverInit = {
        root: null,
        rootMargin: '0px 0px -15% 0px',
        threshold: 0.05,
      };

      observer = new IntersectionObserver(observerCallback, observerOptions);
      fadeElements = document.querySelectorAll('.fade-in-section');

      fadeElements.forEach((el) => {
        observer?.observe(el);
      });
    };

    const timer = setTimeout(() => {
      startObserver();
    }, 3000);

    return () => {
      clearTimeout(timer);
      if (observer && fadeElements) {
        fadeElements.forEach((el) => observer?.unobserve(el));
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#2E0812] text-slate-100 relative">
      {/* 0. ローディング（オープニング）画面 */}
      <LoadingScreen />
      
      {/* 画面左右・上下を黒ワインレッド(#120307)へ落とし込むグラデーションオーバーレイ */}
      <div 
        className="fixed inset-0 pointer-events-none z-30 opacity-60 md:opacity-100 transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(circle at center, transparent 50%, #120307 98%),
            linear-gradient(to right, #120307 0%, transparent 8%, transparent 92%, #120307 100%)
          `
        }}
      />

      {/* 画面右下固定：電話発信ボタン（SP版のみ表示：md:hidden） */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a
          href={`tel:${phoneNumber}`}
          aria-label="店舗へ電話をかける"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2E0812]/90 border border-amber-200/40 text-amber-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md active:scale-95 transition-all duration-300"
        >
          {/* 電話アイコン（SVG） */}
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
      </div>

      {/* 1. ヒーロー（スライダー）セクション */}
      <div className="sticky top-0 z-0 w-full bg-[#120307] overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full relative">
          
          {/* スライダー本体 */}
          <HeroSlider />

          {/* 境界線を背景となじませるフェードオーバーレイ */}
          <div 
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              boxShadow: 'inset 0 0 50px 15px #120307',
              background: `
                linear-gradient(to right, #120307 0%, transparent 4%, transparent 96%, #120307 100%),
                linear-gradient(to bottom, #120307 0%, transparent 3%, transparent 94%, #120307 100%)
              `
            }}
          />

        </div>
      </div>

      {/* 2. メインコンテンツ */}
      <main className="relative z-10 bg-[#2E0812] rounded-t-[36px] md:rounded-t-[56px] shadow-[0_-30px_60px_rgba(18,3,7,0.95)] border-t border-rose-900/30">
        
        {/* 上端のグラデーションフェード */}
        <div className="w-full h-10 md:h-14 bg-gradient-to-b from-[#120307]/50 md:from-[#120307]/70 to-transparent rounded-t-[36px] md:rounded-t-[56px] pointer-events-none" />

        <div className="px-6 max-w-4xl mx-auto space-y-16 md:space-y-24 pb-12 md:pb-16">
          
          {/* ロゴセクション */}
          <section className="flex justify-center items-center pt-2 fade-in-section">
            <img
              src="/le_petale_transparent.png"
              alt="Le pétale Logo"
              className="w-48 md:w-64 h-auto object-contain invert"
            />
          </section>

          {/* Instagramセクション */}
          <section className="pt-12 border-t border-rose-900/30 fade-in-section">
            <h2 className="text-center mb-10">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-serif text-amber-200/80 hover:text-amber-100 tracking-widest text-lg md:text-xl transition-all duration-300 transform hover:scale-105"
              >
                INSTAGRAM
              </a>
            </h2>
            <InstagramFeed />
          </section>

          {/* ACCESS（Googleマップ）セクション */}
          <section className="pt-12 border-t border-rose-900/30 fade-in-section">
            <h2 className="text-center font-serif text-amber-200/80 tracking-widest text-lg md:text-xl mb-8">
              ACCESS
            </h2>
            
            <div className="text-center mb-8 space-y-2 text-sm md:text-base font-light text-rose-100/90">
              <p className="font-serif tracking-wider text-base md:text-lg">Le pétale</p>
              <p>〒980-0811 宮城県仙台市青葉区一番町４丁目２−２０ ブラザービル</p>
            </div>

            {/* Googleマップ埋め込み */}
            <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden border border-rose-900/40 shadow-2xl relative">
              <iframe
                title="Google Map"
                src={googleMapUrl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'grayscale(0.8) invert(0.92) contrast(1.2) hue-rotate(180deg)'
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>

          {/* 3. FOOTER セクション */}
          <Footer instagramUrl={instagramUrl} />

        </div>
      </main>
    </div>
  );
}