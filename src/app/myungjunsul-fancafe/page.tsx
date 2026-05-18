'use client';

import React from 'react';

const FANCAFES = [
  {
    name: '성리 팬카페',
    desc: '무명전설 성리 공식 팬카페 (다음 카페)',
    url: 'https://cafe.daum.net/seonglee',
    emoji: '🎤',
    gradient: 'from-rose-500 to-pink-600',
    shadow: 'shadow-rose-200',
    ring: 'ring-rose-400/30',
    badge: 'bg-rose-100 text-rose-700',
    badgeText: '성리',
  },
  {
    name: '장한별 팬카페',
    desc: '무명전설 장한별 공식 팬카페 (네이버 카페)',
    url: 'https://cafe.naver.com/janghanbyeol77',
    emoji: '⭐',
    gradient: 'from-amber-500 to-yellow-600',
    shadow: 'shadow-amber-200',
    ring: 'ring-amber-400/30',
    badge: 'bg-amber-100 text-amber-700',
    badgeText: '장한별',
  },
  {
    name: '최우진 팬카페',
    desc: '무명전설 최우진 공식 팬카페 (다음 카페)',
    url: 'https://m.cafe.daum.net/woojinchoi',
    emoji: '🔥',
    gradient: 'from-orange-500 to-red-600',
    shadow: 'shadow-orange-200',
    ring: 'ring-orange-400/30',
    badge: 'bg-orange-100 text-orange-700',
    badgeText: '최우진',
  },
  {
    name: '정연호 팬카페',
    desc: '무명전설 정연호 공식 팬카페 (네이버 카페)',
    url: 'https://cafe.naver.com/yeonhorang',
    emoji: '🎵',
    gradient: 'from-sky-500 to-blue-600',
    shadow: 'shadow-sky-200',
    ring: 'ring-sky-400/30',
    badge: 'bg-sky-100 text-sky-700',
    badgeText: '정연호',
  },
  {
    name: '한가락 팬카페',
    desc: '무명전설 한가락 공식 팬카페 (네이버 카페)',
    url: 'https://cafe.naver.com/legendhangarak',
    emoji: '🎸',
    gradient: 'from-emerald-500 to-teal-600',
    shadow: 'shadow-emerald-200',
    ring: 'ring-emerald-400/30',
    badge: 'bg-emerald-100 text-emerald-700',
    badgeText: '한가락',
  },
  {
    name: '김태웅 팬카페',
    desc: '무명전설 김태웅 공식 팬카페 (네이버 카페)',
    url: 'https://cafe.naver.com/tae8139',
    emoji: '🎶',
    gradient: 'from-violet-500 to-purple-600',
    shadow: 'shadow-violet-200',
    ring: 'ring-violet-400/30',
    badge: 'bg-violet-100 text-violet-700',
    badgeText: '김태웅',
  },
  {
    name: '문은석 팬카페',
    desc: '무명전설 문은석 공식 팬카페 (네이버 카페)',
    url: 'https://cafe.naver.com/mooneunseok',
    emoji: '🌙',
    gradient: 'from-indigo-500 to-blue-700',
    shadow: 'shadow-indigo-200',
    ring: 'ring-indigo-400/30',
    badge: 'bg-indigo-100 text-indigo-700',
    badgeText: '문은석',
  },
  {
    name: '김한율 팬카페',
    desc: '무명전설 김한율 공식 팬카페 (네이버 카페)',
    url: 'https://cafe.naver.com/kimhanyullove',
    emoji: '💫',
    gradient: 'from-fuchsia-500 to-pink-600',
    shadow: 'shadow-fuchsia-200',
    ring: 'ring-fuchsia-400/30',
    badge: 'bg-fuchsia-100 text-fuchsia-700',
    badgeText: '김한율',
  },
  {
    name: '이루네 팬카페',
    desc: '무명전설 이루네 공식 팬카페 (네이버 카페)',
    url: 'https://cafe.naver.com/leerune',
    emoji: '🌟',
    gradient: 'from-cyan-500 to-teal-600',
    shadow: 'shadow-cyan-200',
    ring: 'ring-cyan-400/30',
    badge: 'bg-cyan-100 text-cyan-700',
    badgeText: '이루네',
  },
  {
    name: '이대환 팬카페',
    desc: '무명전설 이대환 공식 팬카페 (네이버 카페)',
    url: 'https://cafe.naver.com/leedaehwan',
    emoji: '🎙️',
    gradient: 'from-lime-500 to-green-600',
    shadow: 'shadow-lime-200',
    ring: 'ring-lime-400/30',
    badge: 'bg-lime-100 text-lime-700',
    badgeText: '이대환',
  },
];

export default function MyungjunsulFancafePage() {
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rose-500/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-amber-500/10 blur-[80px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5 bg-white/10 border border-white/20 text-slate-300 backdrop-blur-sm">
            FAN CAFE GUIDE
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            <span className="bg-gradient-to-r from-rose-300 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
              무명전설
            </span>{' '}
            팬카페 모음
          </h1>
          <p className="text-slate-400 text-base sm:text-lg font-medium break-keep max-w-md mx-auto">
            무명전설 출연진 10인의 공식 팬카페를
            <br className="hidden sm:block" />
            한곳에서 바로 방문하세요.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-2xl mx-auto px-4 py-10 flex flex-col gap-4">
        {FANCAFES.map((v, i) => (
          <div key={i} className="relative group/wrapper">
            {/* Pulse Glow Effect */}
            <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${v.gradient} opacity-40 blur-md animate-pulse group-hover/wrapper:opacity-70 transition duration-500`}></div>
            
            <button
              onClick={() => handleClick(v.url)}
              className={`relative w-full group bg-white rounded-2xl p-5 sm:p-6 shadow-lg ${v.shadow} border border-slate-100 flex items-center gap-4 sm:gap-5 transition-all duration-200 hover:scale-[1.015] active:scale-[0.98] ring-1 ring-slate-200/50 text-left`}
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
          </div>
        ))}
      </div>

      {/* Info box */}
      <div className="max-w-2xl mx-auto px-4 pb-16">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <h3 className="text-sm font-black text-amber-800 mb-2 flex items-center gap-1.5">
            <span>💡</span> 이용 안내
          </h3>
          <ul className="text-xs sm:text-sm text-amber-700 font-medium space-y-1.5 leading-relaxed">
            <li>• 각 팬카페는 다음 카페 또는 네이버 카페에서 운영됩니다.</li>
            <li>• 팬카페 가입 후 등업 절차가 필요할 수 있습니다.</li>
            <li>• 무명전설은 TV조선 예능 프로그램으로, 출연진의 최신 소식을 팬카페에서 확인하세요.</li>
          </ul>
        </div>
      </div>

      <footer className="text-center text-xs text-slate-400 pb-8 tracking-wide">
        © 2026 무명전설 팬카페 모음. All Rights Reserved.
      </footer>
    </main>
  );
}
