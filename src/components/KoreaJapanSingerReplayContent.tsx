'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoupangAds from '@/components/CoupangAds';
import Image from 'next/image';

const REPLAY_LINKS = [
  {
    name: 'MBN 편성표 및 라이브 바로가기',
    url: 'https://zucca100.com/mbn-channel-live/',
    icon: '📺',
    color: 'from-orange-500 to-red-600',
    tag: '실시간/편성표'
  },
  {
    name: '2026 한일가왕전 투표하기',
    url: 'https://zucca100.com/2026-%ed%95%9c%ec%9d%bc%ea%b0%80%ec%99%95%ec%a0%84-%ed%88%ac%ed%91%9c%eb%b0%a9%eb%b2%95-%ed%88%ac%ed%91%9c%ed%95%98%ea%b8%b0-%ed%8b%b1%ed%86%a1-%eb%b0%94%eb%a1%9c%ea%b0%80%ea%b8%b0/',
    icon: '🗳️',
    color: 'from-pink-600 to-rose-700',
    tag: '공식투표'
  },
  {
    name: '티빙(TVING)에서 다시보기',
    url: 'https://www.tving.com/contents/P001785421',
    icon: '🔴',
    color: 'from-red-600 to-red-800',
    tag: 'VOD/다시보기'
  },
  {
    name: '웨이브(Wavve)에서 다시보기',
    url: 'https://www.wavve.com/player/vod?programid=C2401_PR1027',
    icon: '🌊',
    color: 'from-blue-600 to-indigo-700',
    tag: 'VOD/다시보기'
  }
];

export default function KoreaJapanSingerReplayContent() {
  const handleLinkClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-['Pretendard']">
      <Header />
      
      <main className="pb-20">
        {/* Hero Section */}
        <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
          <Image 
            src="/korea-japan-singer-replay-bg.png"
            alt="한일가왕전 재방송 배너"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-4 text-center">
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-2xl">
              2026 <span className="text-orange-400">한일가왕전</span> 재방송 & 다시보기
            </h1>
            <p className="text-slate-300 text-base sm:text-lg font-bold max-w-2xl break-keep">
              본방사수를 놓치셨나요? 실시간 채널 및 OTT 다시보기 서비스를 이용하세요.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 -mt-8 relative z-10">
          {/* Button List */}
          <div className="space-y-4">
            {REPLAY_LINKS.map((link, index) => (
              <button
                key={index}
                onClick={() => handleLinkClick(link.url)}
                className="w-full group bg-white hover:bg-slate-50 rounded-2xl p-6 shadow-lg border border-slate-100 flex items-center gap-4 transition-all hover:scale-[1.01] active:scale-[0.99] text-left"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center text-2xl shadow-inner`}>
                  {link.icon}
                </div>
                <div className="flex-grow">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">
                    {link.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-800">
                    {link.name}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* Minimal Info Section */}
          <div className="mt-12 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2">
              <span className="text-orange-500">ℹ️</span> 시청 안내
            </h4>
            <ul className="space-y-4 text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span>MBN 공식 홈페이지에서 실시간 온에어 및 일일 편성표를 확인할 수 있습니다.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span>티빙과 웨이브를 통해 방송 직후 업로드되는 고화질 다시보기(VOD)를 이용 가능합니다.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span>공식 투표는 틱톡 앱을 통해 진행되며, 위 투표 링크를 클릭하시면 바로 연결됩니다.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <CoupangAds 
        keyword="사운드바" 
        title="🎬 안방극장을 콘서트장으로!"
        hookText="한일가왕전의 압도적인 라이브 감동을 거실에서! 생생한 현장감을 더해줄 베스트 사운드바와 헤드셋을 추천합니다."
      />

      <Footer />
    </div>
  );
}
