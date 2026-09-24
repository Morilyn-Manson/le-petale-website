'use client';

interface FooterProps {
  instagramUrl: string;
}

export default function Footer({ instagramUrl }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "02230024963";

  return (
    <footer className="pt-12 border-t border-rose-900/30 text-center space-y-6 text-rose-100/70 text-xs md:text-sm font-light">
      <div className="space-y-2">
        <p className="font-serif tracking-widest text-sm md:text-base text-rose-100/90">
          Le pétale
        </p>
        <p>〒980-0811 宮城県仙台市青葉区一番町４丁目２−２０ ブラザービル</p>
        <p className="pt-1">
          <a
            href={`tel:${phoneNumber}`}
            className="hover:text-amber-200 transition-colors duration-300 tracking-wider inline-flex items-center gap-1.5"
          >
            <svg
              className="w-3.5 h-3.5 fill-current opacity-80"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            TEL: 022-300-24963
          </a>
        </p>
      </div>

      {/* Instagram アイコンリンク */}
      <div className="pt-2 flex justify-center items-center">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="inline-block p-2 text-rose-200/70 hover:text-amber-200 transition-colors duration-300 transform hover:scale-110"
        >
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>

      <p className="text-[10px] text-rose-200/40 tracking-wider">
        &copy; {currentYear} Le pétale. All rights reserved.
      </p>
    </footer>
  );
}