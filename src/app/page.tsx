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
        rootMargin: '0px 0px -15% 0px', // 下部15%〜30%付近で確実に検出
        threshold: 0.05,
      };

      observer = new IntersectionObserver(observerCallback, observerOptions);
      fadeElements = document.querySelectorAll('.fade-in-section');

      fadeElements.forEach((el) => {
        observer?.observe(el);
      });
    };

    // オープニング(3秒)の終了を待ってからスクロール監視を開始
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
    <div className="min-h-screen bg-[#2E0812] text-slate-100">
      {/* 0. ローディング（オープニング）画面 */}
      <LoadingScreen />
      
      {/* 画面左右・上下を黒ワインレッド(#120307)へ落とし込むグラデーションオーバーレイ */}
      <div 
        className="fixed inset-0 pointer-events-none z-30"
        style={{
          background: `
            radial-gradient(circle at center, transparent 30%, #120307 95%),
            linear-gradient(to right, #120307 0%, transparent 15%, transparent 85%, #120307 100%)
          `
        }}
      />

      {/* 1. ヒーロー（スライダー）セクション */}
      <div className="sticky top-0 z-0 w-full bg-[#120307] overflow-hidden">
        <HeroSlider />
      </div>

      {/* 2. メインコンテンツ */}
      <main className="relative z-10 bg-[#2E0812] rounded-t-[36px] md:rounded-t-[56px] shadow-[0_-30px_60px_rgba(18,3,7,0.95)] border-t border-rose-900/30">
        
        {/* 上端のグラデーションフェード */}
        <div className="w-full h-10 md:h-14 bg-gradient-to-b from-[#120307]/70 to-transparent rounded-t-[36px] md:rounded-t-[56px] pointer-events-none" />

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
            <h2 className="text-center font-serif text-amber-200/80 tracking-widest text-lg md:text-xl mb-10">
              INSTAGRAM
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

          {/* 3. FOOTER セクション（アニメーション対象外） */}
          <Footer instagramUrl={instagramUrl} />

        </div>
      </main>
    </div>
  );
}