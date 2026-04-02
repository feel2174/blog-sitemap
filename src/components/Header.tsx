'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">
          {/* Right Section: Coupang Image */}
          <a href="https://link.coupang.com/a/bTj90O" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/coupang.png" 
              alt="쿠팡" 
              width={200}
              className="w-[150px] sm:w-[200px]"
              style={{ objectFit: 'contain' }}
            />
          </a>
        </div>
      </div>
    </header>
  );
} 