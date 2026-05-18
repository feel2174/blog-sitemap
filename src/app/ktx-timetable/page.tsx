'use client';

import React from 'react';

const LINKS = [
  {
    name: '전국 KTX 시간표 조회',
    desc: '코레일 공식 홈페이지에서 최신 열차 시간표 확인하기',
    url: 'https://www.korail.com/ticket/reserve/train-timeTable',
    emoji: '🚅',
    gradient: 'from-blue-500 to-indigo-600',
    shadow: 'shadow-blue-200',
    ring: 'ring-blue-400/30',
    badge: 'bg-blue-100 text-blue-700',
    badgeText: 'KORAIL',
  },
];

export default function KtxTimetablePage() {
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-indigo-500/10 blur-[80px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5 bg-white/10 border border-white/20 text-slate-300 backdrop-blur-sm">
            KTX TIMETABLE
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-300 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
              전국 KTX
            </span>{' '}
            시간표 바로가기
          </h1>
          <p className="text-slate-400 text-base sm:text-lg font-medium break-keep max-w-md mx-auto">
            코레일 공식 홈페이지에서 제공하는
            <br className="hidden sm:block" />
            최신 열차 시간표를 확인하세요.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-2xl mx-auto px-4 py-10 flex flex-col gap-4">
        {LINKS.map((v, i) => (
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
        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5">
          <h3 className="text-sm font-black text-sky-800 mb-2 flex items-center gap-1.5">
            <span>💡</span> 이용 안내
          </h3>
          <ul className="text-xs sm:text-sm text-sky-700 font-medium space-y-1.5 leading-relaxed">
            <li>• KTX, SRT 등 열차 시간은 철도공사 운영 상황에 따라 변경될 수 있습니다.</li>
            <li>• 정확한 출발 및 도착 시간은 공식 예매 페이지를 참고하시기 바랍니다.</li>
            <li>• 휴가철 및 명절 기간에는 시간표가 다를 수 있으니 사전에 확인하세요.</li>
          </ul>
        </div>
      </div>

      <footer className="text-center text-xs text-slate-400 pb-8 tracking-wide">
        © 2026 KTX Timetable Guide. All Rights Reserved.
      </footer>
    </main>
  );
}
