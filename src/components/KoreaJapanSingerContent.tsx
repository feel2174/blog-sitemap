'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoupangAds from '@/components/CoupangAds';
import Image from 'next/image';

const LINKS = [
  {
    name: '2026 한일가왕전 투표 채널 바로가기',
    url: 'https://www.tiktok.com/@k_trot_king',
    icon: '🗳️',
    color: 'from-pink-600 to-rose-700'
  },
  {
    name: '틱톡 라이트 (Android) 다운로드',
    url: 'https://play.google.com/store/apps/details?id=com.ss.android.ugc.tiktok.lite&hl=ko&gl=kr',
    icon: '🤖',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    name: '틱톡 라이트 (iOS) 다운로드',
    url: 'https://apps.apple.com/kr/app/tiktok-lite/id6447160980',
    icon: '🍎',
    color: 'from-gray-700 to-gray-900'
  }
];

export default function KoreaJapanSingerContent() {
  const handleLinkClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-['Pretendard']">
      <Header />
      
      <main className="pb-20">
        {/* Hero Section */}
        <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
          <Image 
            src="/korea-japan-singer-bg.png"
            alt="2026 한일가왕전 배너"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-4 text-center">
            <span className="px-4 py-1.5 bg-rose-600 text-white rounded-full text-sm font-black mb-6 animate-bounce shadow-lg shadow-rose-500/30">
              한일 양국의 자존심 대결 🎤
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
              2026 <span className="text-rose-400">한일가왕전</span> 투표 안내
            </h1>
            <p className="text-slate-200 text-lg sm:text-xl font-bold max-w-2xl break-keep">
              당신이 사랑하는 가수를 위해 투표하세요! <br className="hidden sm:block" />
              틱톡 공식 채널을 통해 실시간으로 응원 메시지를 전달할 수 있습니다.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10">
          {/* Link Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LINKS.map((link, index) => (
              <div 
                key={index}
                className="group bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative flex flex-col"
              >
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${link.color}`}></div>
                <div className="flex flex-col h-full">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="text-5xl group-hover:scale-125 transition-transform duration-500 mb-4">
                      {link.icon}
                    </div>
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                      {link.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => handleLinkClick(link.url)}
                    className={`w-full py-4 rounded-2xl bg-gradient-to-r ${link.color} text-white font-black shadow-lg group-hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-auto`}
                  >
                    이동하기
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Guide Section */}
          <div className="mt-20 bg-slate-900 rounded-[3rem] p-8 sm:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 blur-[100px] rounded-full"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-10 flex items-center gap-4">
                <span className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">📢</span>
                투표 참여 시 유의사항
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-400 font-medium leading-relaxed break-keep">
                <div className="space-y-4">
                  <h4 className="text-white text-xl font-bold">1. 투표 기간 엄수</h4>
                  <p>
                    각 라운드별 투표 마감 시간을 확인하시기 바랍니다. 마감 이후의 투표는 결과에 반영되지 않습니다.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white text-xl font-bold">2. 다중 투표 안내</h4>
                  <p>
                    틱톡 계정당 부여된 투표권 개수가 다를 수 있습니다. 매일 업데이트되는 투표 기회를 놓치지 마세요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <CoupangAds 
        keyword="블루투스 마이크" 
        title="🎙️ 집에서도 가왕처럼! 추천 노래방 아이템"
        hookText="한일가왕전의 감동을 그대로! 집에서 즐길 수 있는 프리미엄 무선 마이크와 방음 부스 아이템을 소개합니다."
      />

      <Footer />
    </div>
  );
}
