'use client';

import { Metadata } from 'next';
import React from 'react';

const VOUCHERS = [
  {
    name: '신세계 상품권 사용처',
    desc: '신세계백화점·이마트 등 전국 가맹점 안내',
    url: 'https://www.shinsegae.com/service/membership/certificate.do',
    emoji: '🏬',
    gradient: 'from-emerald-500 to-teal-600',
    shadow: 'shadow-emerald-200',
    ring: 'ring-emerald-400/30',
    badge: 'bg-emerald-100 text-emerald-700',
    badgeText: '신세계',
  },
  {
    name: '롯데 상품권 사용처',
    desc: '롯데백화점·마트·프리미엄 아울렛 가맹점 안내',
    url: 'https://www.lotteshopping.com/serviceInformation/voucher/using',
    emoji: '🛍️',
    gradient: 'from-red-500 to-rose-600',
    shadow: 'shadow-red-200',
    ring: 'ring-red-400/30',
    badge: 'bg-red-100 text-red-700',
    badgeText: '롯데',
  },
  {
    name: '문화 상품권 사용처',
    desc: '온라인·오프라인 서점·문화시설 가맹점 안내',
    url: 'https://www.culturegift.co.kr/giftcard/',
    emoji: '🎭',
    gradient: 'from-violet-500 to-purple-600',
    shadow: 'shadow-violet-200',
    ring: 'ring-violet-400/30',
    badge: 'bg-violet-100 text-violet-700',
    badgeText: '문화',
  },
  {
    name: '현대백화점 상품권 사용처',
    desc: '현대백화점·프리미엄 아울렛 가맹점 안내',
    url: 'https://www.ehyundai.com/newPortal/GC/GC000001_V.do',
    emoji: '🏙️',
    gradient: 'from-sky-500 to-blue-600',
    shadow: 'shadow-sky-200',
    ring: 'ring-sky-400/30',
    badge: 'bg-sky-100 text-sky-700',
    badgeText: '현대',
  },
  {
    name: 'SK 상품권 사용처',
    desc: 'SK에너지·주유소·편의점 가맹점 안내',
    url: 'https://www.skenergy.com/business/gift?curTab=init',
    emoji: '⛽',
    gradient: 'from-orange-500 to-amber-600',
    shadow: 'shadow-orange-200',
    ring: 'ring-orange-400/30',
    badge: 'bg-orange-100 text-orange-700',
    badgeText: 'SK',
  },
];

export default function GiftVoucherPage() {
  const handleClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <main
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100"
      style={{
        fontFamily:
          '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans KR", sans-serif',
      }}
    >
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-violet-500/10 blur-[80px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5 bg-white/10 border border-white/20 text-slate-300 backdrop-blur-sm">
            GIFT VOUCHER GUIDE
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
              상품권 사용처
            </span>{' '}
            바로가기
          </h1>
          <p className="text-slate-400 text-base sm:text-lg font-medium break-keep max-w-md mx-auto">
            신세계·롯데·문화·현대·SK 상품권 사용 가능 매장을
            <br className="hidden sm:block" />
            공식 홈페이지에서 한 번에 확인하세요.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-2xl mx-auto px-4 py-10 flex flex-col gap-4">
        {VOUCHERS.map((v, i) => (
          <button
            key={i}
            onClick={() => handleClick(v.url)}
            className={`w-full group bg-white rounded-2xl p-5 sm:p-6 shadow-lg ${v.shadow} border border-slate-100 flex items-center gap-4 sm:gap-5 transition-all duration-200 hover:scale-[1.015] active:scale-[0.98] ring-2 ring-transparent hover:${v.ring} text-left`}
          >
            {/* Icon */}
            <div
              className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${v.gradient} flex items-center justify-center text-2xl sm:text-3xl shadow-md`}
            >
              {v.emoji}
            </div>

            {/* Text */}
            <div className="flex-grow min-w-0">
              <span
                className={`inline-block text-[10px] font-black px-2 py-0.5 rounded-full mb-1.5 ${v.badge}`}
              >
                {v.badgeText}
              </span>
              <h2 className="text-base sm:text-lg font-black text-slate-800 leading-tight mb-0.5">
                {v.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-medium truncate">
                {v.desc}
              </p>
            </div>

            {/* Arrow */}
            <div
              className={`flex-shrink-0 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-gradient-to-br group-hover:${v.gradient} group-hover:text-white transition-all duration-200`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Info box */}
      <div className="max-w-2xl mx-auto px-4 pb-16">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <h3 className="text-sm font-black text-amber-800 mb-2 flex items-center gap-1.5">
            <span>💡</span> 이용 안내
          </h3>
          <ul className="text-xs sm:text-sm text-amber-700 font-medium space-y-1.5 leading-relaxed">
            <li>• 각 상품권별 공식 사이트에서 최신 가맹점 정보를 확인하세요.</li>
            <li>• 온라인몰 사용 여부는 상품권 종류에 따라 다를 수 있습니다.</li>
            <li>• 일부 가맹점은 상품권 부분 사용 또는 잔액 환불이 제한될 수 있습니다.</li>
          </ul>
        </div>
      </div>

      <footer className="text-center text-xs text-slate-400 pb-8 tracking-wide">
        © 2026 Gift Voucher Guide. All Rights Reserved.
      </footer>
    </main>
  );
}
