'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoupangAds from '@/components/CoupangAds';
import Image from 'next/image';

const SCHEDULE = [
  {
    date: '05월 05일 (화) 오늘',
    matches: [
      { time: '17:00', status: '예정', stage: 'Road to EWC 1R', team1: '한화생명e스포츠', team2: 'DN 수퍼스' },
      { time: '19:00', status: '예정', stage: 'Road to EWC 1R', team1: 'Dplus Kia', team2: '농심 레드포스' }
    ]
  },
  {
    date: '05월 12일 (화)',
    matches: [
      { time: '17:00', status: '예정', stage: 'Road to EWC 2R', team1: 'BNK 피어엑스', team2: 'T1' },
      { time: '19:00', status: '예정', stage: 'Road to EWC 2R', team1: 'TBD', team2: 'TBD' }
    ]
  },
  {
    date: '05월 18일 (월)',
    matches: [
      { time: '17:00', status: '예정', stage: 'Road to EWC 패자조 1R', team1: 'kt 롤스터', team2: '한진 브리온' },
      { time: '19:00', status: '예정', stage: 'Road to EWC 패자조 1R', team1: 'TBD', team2: 'TBD' }
    ]
  },
  {
    date: '05월 19일 (화)',
    matches: [
      { time: '17:00', status: '예정', stage: 'Road to EWC 패자조 2R', team1: 'TBD', team2: 'TBD' },
      { time: '19:00', status: '예정', stage: 'Road to EWC 패자조 2R', team1: 'TBD', team2: 'TBD' }
    ]
  }
];

export default function EwcLolContent() {
  return (
    <div className="min-h-screen bg-black font-['Pretendard'] text-white">
      <Header />
      
      <main className="pb-20">
        {/* Hero Section */}
        <div className="relative h-[300px] sm:h-[500px] overflow-hidden">
          <Image 
            src="/ewc-lol-bg.png"
            alt="Esports World Cup 배너"
            fill
            className="object-cover opacity-60 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 sm:pb-16 px-4 text-center">
            <span className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-[0_0_20px_rgba(79,70,229,0.5)] border border-blue-400/30">
              🎮 Road to EWC 2026
            </span>
            <h1 className="text-4xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300 mb-4 sm:mb-6 tracking-tighter drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">
              Esports World Cup
            </h1>
            <p className="text-blue-100/80 text-sm sm:text-xl font-medium max-w-2xl break-keep">
              리그 오브 레전드 사우디 e스포츠 월드컵 중계 및 일정
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10">
          
          {/* Main Action Button */}
          <div className="mb-16">
            <a
              href="https://game.naver.com/esports/League_of_Legends/schedule/ewc_lol"
              className="group relative flex items-center justify-center w-full sm:w-3/4 mx-auto py-5 sm:py-6 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 overflow-hidden shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_rgba(79,70,229,0.6)] transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-opacity duration-500"></div>
              <div className="relative flex items-center gap-3">
                <span className="text-xl sm:text-3xl font-black text-white tracking-tight drop-shadow-md">
                  네이버 e스포츠 실시간 중계 보기
                </span>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          </div>

          {/* Schedule Section */}
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-[2rem] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  경기 일정
                </h3>
              </div>

              <div className="space-y-8">
                {SCHEDULE.map((day, idx) => (
                  <div key={idx} className="bg-slate-950/50 rounded-2xl p-5 border border-slate-800/50">
                    <div className="text-blue-400 font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      {day.date}
                    </div>
                    
                    <div className="space-y-3">
                      {day.matches.map((match, mIdx) => (
                        <div key={mIdx} className="group flex flex-col sm:flex-row sm:items-center justify-between bg-slate-900 hover:bg-slate-800 transition-colors rounded-xl p-4 border border-slate-800">
                          <div className="flex items-center gap-4 mb-3 sm:mb-0">
                            <span className="text-slate-400 font-medium font-mono text-lg bg-slate-950 px-3 py-1 rounded-lg">
                              {match.time}
                            </span>
                            <span className="text-xs font-bold px-2 py-1 bg-slate-800 text-slate-300 rounded">
                              {match.status}
                            </span>
                            <span className="text-sm text-blue-200/60 hidden sm:block">
                              {match.stage}
                            </span>
                          </div>
                          
                          <div className="flex items-center justify-center gap-4 sm:flex-1 sm:px-8">
                            <div className="flex-1 text-right font-bold text-slate-200 text-base sm:text-lg">
                              {match.team1}
                            </div>
                            <div className="text-sm font-black text-slate-500 bg-slate-950 px-2 py-0.5 rounded">
                              VS
                            </div>
                            <div className="flex-1 text-left font-bold text-slate-200 text-base sm:text-lg">
                              {match.team2}
                            </div>
                          </div>
                          
                          <div className="hidden sm:flex items-center gap-2 text-slate-500 text-sm">
                            <span className="flex h-2 w-2 relative">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            온라인 대회
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="bg-slate-950 pt-10">
        <CoupangAds 
            keyword="게이밍 모니터" 
            title="🎮 프로게이머 장비 특가"
            hookText="최고의 플레이를 위한 선택, 게이밍 모니터와 기어를 로켓배송으로 만나보세요."
        />
        <Footer />
      </div>
    </div>
  );
}
