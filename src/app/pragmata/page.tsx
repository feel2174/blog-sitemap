import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '프래그마타(PRAGMATA) 다운로드 및 게임 정보 안내',
  description: '캡콤의 신작 SF 액션 어드벤처 프래그마타(PRAGMATA). 휴와 다이애나의 달 표면 기지 모험을 지금 바로 확인하고 다운로드하세요.',
  keywords: ['프래그마타', 'PRAGMATA', '캡콤신작', '프래그마타다운로드', '캡콤', 'SF게임'],
};

export default function PragmataPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-['Pretendard'] overflow-hidden">
      {/* Dynamic Sci-Fi Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-20%] w-[70%] h-[70%] bg-blue-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-20%] w-[70%] h-[70%] bg-indigo-600/10 blur-[150px] rounded-full"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 sm:py-24">
        {/* Header Section */}
        <header className="text-center mb-12 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-black tracking-widest uppercase mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            CAPCOM NEW RELEASE
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-blue-200">
            PRAGMATA
          </h1>
          <p className="text-slate-400 font-medium text-lg sm:text-xl max-w-2xl mx-auto break-keep">
            아포칼립스 이후의 달 기지에서 펼쳐지는 <br className="hidden sm:block" />
            우주비행사 휴와 안드로이드 다이애나의 장대한 여정.
          </p>
        </header>

        {/* Hero Banner */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[2rem] sm:rounded-[3rem] overflow-hidden mb-16 shadow-[0_0_50px_rgba(37,99,235,0.15)] border border-white/10 group">
          <Image
            src="/pragmata.png"
            alt="Pragmata Game Banner"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent opacity-80"></div>
          
          <div className="absolute bottom-10 left-8 right-8 sm:left-12 sm:right-12">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded border border-white/20 text-xs font-bold tracking-widest uppercase text-white">PS5</span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded border border-white/20 text-xs font-bold tracking-widest uppercase text-white">Xbox Series X|S</span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded border border-white/20 text-xs font-bold tracking-widest uppercase text-white">PC</span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded border border-white/20 text-xs font-bold tracking-widest uppercase text-white">Switch 2</span>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 hover:bg-white/[0.04] transition-colors">
            <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center text-2xl mb-6 border border-blue-500/20">
              🌕
            </div>
            <h3 className="text-xl font-bold text-white mb-3">무대: 달 표면 연구 기지</h3>
            <p className="text-slate-400 text-sm leading-relaxed break-keep">
              아름답지만 적대적인 달의 연구 기지. 중력의 변화와 위험한 AI &apos;IDUS&apos;가 지배하는 환경을 돌파하세요.
            </p>
          </div>
          <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 hover:bg-white/[0.04] transition-colors">
            <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center text-2xl mb-6 border border-indigo-500/20">
              🤖
            </div>
            <h3 className="text-xl font-bold text-white mb-3">전투와 해킹의 융합</h3>
            <p className="text-slate-400 text-sm leading-relaxed break-keep">
              긴장감 넘치는 3인칭 슈팅 액션과 퍼즐을 푸는 해킹 메커니즘을 교차하며 위협적인 기계 병기들을 물리치세요.
            </p>
          </div>
          <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 hover:bg-white/[0.04] transition-colors">
            <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-xl flex items-center justify-center text-2xl mb-6 border border-purple-500/20">
              🤝
            </div>
            <h3 className="text-xl font-bold text-white mb-3">특별한 동반자, 다이애나</h3>
            <p className="text-slate-400 text-sm leading-relaxed break-keep">
              신비한 능력을 지닌 안드로이드 소녀 다이애나와 협력하십시오. 그녀는 여정의 핵심이자 희망입니다.
            </p>
          </div>
        </div>

        {/* Main CTA */}
        <div className="relative group max-w-2xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          <Link
            href="https://www.capcom-games.com/pragmata/ko-kr/"
            className="relative flex items-center justify-between gap-6 bg-[#0f172a] hover:bg-[#1e293b] p-6 sm:p-8 rounded-[2.5rem] border border-slate-700 transition-colors shadow-2xl"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-white mb-1 group-hover:text-blue-400 transition-colors">공식 페이지 및 다운로드</h2>
                <p className="text-slate-400 font-medium text-sm">캡콤 공식 스토어에서 자세한 정보를 확인하세요</p>
              </div>
            </div>
            <div className="hidden sm:flex w-12 h-12 rounded-full border border-slate-600 items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-400/10 transition-all">
              <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
