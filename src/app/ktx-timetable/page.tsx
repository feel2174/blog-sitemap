'use client';

import React from 'react';
import CoupangAds from '@/components/CoupangAds';

interface ActionLink {
  title: string;
  subtitle: string;
  url: string;
  badge: string;
  badgeColor: string;
  icon: string;
  gradient: string;
  shadow: string;
  highlight?: boolean;
}

const PRIMARY_LINKS: ActionLink[] = [
  {
    title: '코레일 기차표 예매 바로가기',
    subtitle: 'KTX · ITX-새마을 · 무궁화호 실시간 좌석 예매',
    url: 'https://www.korail.com/ticket/main',
    badge: '코레일 공식 예매처',
    badgeColor: 'bg-blue-600 text-white',
    icon: '🚅',
    gradient: 'from-blue-600 via-indigo-600 to-blue-700',
    shadow: 'shadow-blue-500/20',
    highlight: true,
  },
  {
    title: '전국 KTX 열차 시간표 조회',
    subtitle: '노선별 첫차·막차 및 역별 상세 정차 시간표 확인',
    url: 'https://www.korail.com/ticket/reserve/train-timeTable',
    badge: '실시간 시간표',
    badgeColor: 'bg-sky-100 text-sky-800',
    icon: '🕒',
    gradient: 'from-slate-700 to-slate-900',
    shadow: 'shadow-slate-500/10',
  },
];

export default function KtxTimetablePage() {
  const navigateTo = (url: string) => {
    window.location.href = url;
  };

  return (
    <main
      className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white"
      style={{
        fontFamily:
          '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans KR", sans-serif',
      }}
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 pb-12 px-4 border-b border-slate-800/80">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-indigo-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5 bg-blue-500/10 border border-blue-400/30 text-blue-300 backdrop-blur-md shadow-inner">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            KORAIL TICKET & TIMETABLE
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            전국 KTX{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
              기차표 예매
            </span>
          </h1>
          
          <p className="text-slate-400 text-sm sm:text-base font-medium break-keep max-w-lg mx-auto leading-relaxed">
            코레일(한국철도공사) 공식 홈페이지에서
            <br className="hidden sm:block" />
            실시간 승차권 예매 및 열차 운행 시간표를 확인하세요.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-6">
        {/* Buttons Section */}
        <div className="flex flex-col gap-4">
          {PRIMARY_LINKS.map((item, idx) => (
            <div key={idx} className="relative group">
              {item.highlight && (
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 opacity-60 blur-lg group-hover:opacity-100 transition duration-500 animate-pulse" />
              )}
              
              <button
                type="button"
                onClick={() => navigateTo(item.url)}
                className={`relative w-full rounded-2xl p-5 sm:p-6 transition-all duration-200 text-left flex items-center justify-between gap-4 active:scale-[0.98] ${
                  item.highlight
                    ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white shadow-2xl border border-blue-400/40 hover:brightness-110'
                    : 'bg-slate-800/90 hover:bg-slate-800 text-white border border-slate-700 shadow-xl hover:border-slate-600'
                }`}
              >
                <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                  {/* Icon */}
                  <div
                    className={`shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shadow-inner ${
                      item.highlight ? 'bg-white/20 backdrop-blur-md text-white' : 'bg-slate-700/80 text-blue-400'
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* Title & Desc */}
                  <div className="min-w-0 flex-1">
                    <span
                      className={`inline-block text-[11px] font-black px-2.5 py-0.5 rounded-full mb-1.5 tracking-wide ${
                        item.highlight ? 'bg-white text-blue-900 shadow-sm' : item.badgeColor
                      }`}
                    >
                      {item.badge}
                    </span>
                    <h2 className="text-lg sm:text-xl font-black tracking-tight leading-snug break-keep">
                      {item.title}
                    </h2>
                    <p
                      className={`text-xs sm:text-sm font-medium truncate mt-0.5 ${
                        item.highlight ? 'text-blue-100' : 'text-slate-400'
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Arrow Action */}
                <div
                  className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 ${
                    item.highlight
                      ? 'bg-white text-blue-700 shadow-md'
                      : 'bg-slate-700 text-slate-300 group-hover:bg-blue-600 group-hover:text-white'
                  }`}
                >
                  <svg
                    className="w-5 h-5"
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

        {/* Mobile App Download Grid */}
        <div className="bg-slate-850/80 bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-black text-slate-400 tracking-wider uppercase">
              KORAIL TALK APP
            </span>
            <span className="text-xs text-blue-400 font-semibold">모바일 코레일톡</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => navigateTo('https://play.google.com/store/apps/details?id=com.korail.talk')}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 text-xs sm:text-sm font-bold transition active:scale-95"
            >
              <span>🤖</span> 안드로이드 (구글플레이)
            </button>
            <button
              type="button"
              onClick={() => navigateTo('https://apps.apple.com/kr/app/%EC%BD%94%EB%A0%88%EC%9D%BC%ED%86%A1/id540562503')}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 text-xs sm:text-sm font-bold transition active:scale-95"
            >
              <span>🍎</span> 아이폰 (앱스토어)
            </button>
          </div>
        </div>

        {/* Quick Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-slate-850/80 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col">
            <span className="text-2xl mb-2">⏱️</span>
            <h3 className="text-sm font-bold text-slate-200 mb-1">예매 오픈 시간</h3>
            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              출발 1개월 전 오전 07:00부터 예매 가능합니다.
            </p>
          </div>

          <div className="bg-slate-850/80 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col">
            <span className="text-2xl mb-2">🏷️</span>
            <h3 className="text-sm font-bold text-slate-200 mb-1">할인 혜택</h3>
            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              힘내라 청춘, N카드 등 최대 10~40% 맞춤 할인.
            </p>
          </div>

          <div className="bg-slate-850/80 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col">
            <span className="text-2xl mb-2">🔄</span>
            <h3 className="text-sm font-bold text-slate-200 mb-1">취소 / 환불</h3>
            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              출발 3시간 전까지 인터넷/앱 취소 시 수수료 무료.
            </p>
          </div>
        </div>

        {/* Notice Info Box */}
        <div className="bg-blue-950/40 border border-blue-800/50 rounded-2xl p-5 shadow-inner">
          <h3 className="text-sm font-black text-blue-300 mb-2.5 flex items-center gap-2">
            <span>💡</span> 기차표 예매 필수 안내
          </h3>
          <ul className="text-xs sm:text-sm text-slate-300 font-medium space-y-2 leading-relaxed">
            <li className="flex items-start gap-1.5">
              <span className="text-blue-400 font-bold shrink-0">•</span>
              <span><strong>명절 및 주말 티켓:</strong> 예매 개시와 동시에 마감될 수 있으니 미리 코레일 회원가입 및 결제수단을 등록해 두시는 것을 권장합니다.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-blue-400 font-bold shrink-0">•</span>
              <span><strong>모바일 발권:</strong> 코레일톡 앱을 설치하시면 종이 승차권 발권 없이 스마트폰으로 바로 탑승하실 수 있습니다.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-blue-400 font-bold shrink-0">•</span>
              <span><strong>입석 / 자유석:</strong> 매진된 경우에도 출발 당일 일부 구간 입석 또는 자유석 승차권 예매가 가능할 수 있습니다.</span>
            </li>
          </ul>
        </div>

        {/* Coupang Ads */}
        <CoupangAds
          keyword="여행용 목베개"
          title="🚄 쾌적한 기차 여행을 위한 준비물"
          hookText="장시간 KTX 이동에도 편안한 수면을 돕는 메모리폼 목베개와 초고속 보조배터리 특가 모음입니다."
        />
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-10 text-center text-xs text-slate-500">
        <div className="max-w-2xl mx-auto px-4 space-y-2">
          <p className="font-semibold text-slate-400">
            © 2026 KTX TICKET & TIMETABLE GUIDE. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[11px] text-slate-500 leading-relaxed break-keep">
            본 페이지는 이용자의 편의를 위해 공식 승차권 예매처 및 시간표 링크를 안내하는 보조 페이지입니다.
            승차권 예매, 결제, 취소, 환불 등 모든 서비스 관련 책임은 한국철도공사(KORAIL)에 있습니다.
          </p>
        </div>
      </footer>
    </main>
  );
}
