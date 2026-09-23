'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // 2.5秒後にフェードアウトアニメーション開始
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2500);

    // 3.0秒後に要素を完全非表示
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#120307] transition-opacity duration-500 ease-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center justify-center px-6">
        {/* 透過ロゴ画像（invertで白浮き上がらせ＋パルスアニメーション） */}
        <img
          src="/le_petale_transparent.png"
          alt="Le pétale Logo"
          className="w-48 md:w-64 h-auto object-contain invert animate-pulse duration-1000"
        />
      </div>
    </div>
  );
}