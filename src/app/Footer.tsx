'use client';

import React from 'react';

interface FooterProps {
  instagramUrl?: string;
}

export default function Footer({
  instagramUrl = 'https://www.instagram.com/',
}: FooterProps) {
  return (
    <footer className="pt-12 border-t border-rose-900/30 flex flex-col items-center justify-center space-y-6 text-center">
      {/* 店名 */}
      <h3 className="font-serif text-xl md:text-2xl text-amber-200/90 tracking-widest">
        Le pétale
      </h3>

      {/* 住所 */}
      <p className="text-xs md:text-sm font-light text-rose-200/70 tracking-wider leading-relaxed">
        〒980-0811 宮城県仙台市青葉区一番町４丁目２−２０ ブラザービル
      </p>

      {/* Instagram アイコンリンク */}
      <div className="pt-2">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="inline-flex items-center justify-center p-3 rounded-full bg-rose-950/40 border border-rose-900/40 text-rose-200/80 hover:text-amber-200 hover:border-amber-200/60 hover:bg-rose-900/30 transition-all duration-300 group shadow-lg"
        >
          {/* SVG Instagram アイコン */}
          <svg
            className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>

      {/* コピーライト */}
      <p className="text-[10px] md:text-xs text-rose-300/40 tracking-widest pt-4">
        &copy; {new Date().getFullYear()} Le pétale. All Rights Reserved.
      </p>
    </footer>
  );
}