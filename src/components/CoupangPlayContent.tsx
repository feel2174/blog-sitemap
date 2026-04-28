'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoupangAds from '@/components/CoupangAds';
import Image from 'next/image';
import Link from 'next/link';

export default function CoupangPlayContent() {
  const [showInterstitial, setShowInterstitial] = useState(false);
  const [targetLink, setTargetLink] = useState('');
  const [counter, setCounter] = useState(3);

  const handleLinkClick = (url: string) => {
    setTargetLink(url);
    setShowInterstitial(true);
    setCounter(3);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showInterstitial && counter > 0) {
      timer = setTimeout(() => setCounter(counter - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [showInterstitial, counter]);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-['Pretendard']">
      <Header />
      
      <main className="pb-20">
        {/* Hero Section */}
        <div className="relative h-[500px] sm:h-[650px] overflow-hidden">
          <Image 
            src="/coupang-play-bg.png"
            alt="쿠팡플레이 배너"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 px-4 text-center">
            <div className="mb-8 p-3 bg-blue-600 rounded-2xl shadow-2xl shadow-blue-500/50 animate-pulse">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                </svg>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight drop-shadow-2xl">
              COUPANG <span className="text-blue-500">PLAY</span>
            </h1>
            <p className="text-slate-300 text-xl sm:text-2xl font-bold max-w-3xl break-keep leading-relaxed mb-10">
              와우 회원이라면 누구나 무제한 감상! <br className="hidden sm:block" />
              SNL 코리아부터 독점 스포츠 생중계까지, 지금 바로 즐겨보세요.
            </p>
            <button
                onClick={() => handleLinkClick('https://www.coupangplay.com/')}
                className="px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl text-xl shadow-2xl shadow-blue-500/30 transition-all hover:scale-105 active:scale-95"
            >
                쿠팡플레이 바로가기
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-10">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/5 hover:border-blue-500/30 transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">🎭</div>
              <h3 className="text-2xl font-black mb-4">독점 오리지널</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                SNL 코리아, 안나, 소년시대 등 쿠팡플레이에서만 볼 수 있는 강력한 오리지널 콘텐츠를 만나보세요.
              </p>
            </div>
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/5 hover:border-blue-500/30 transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">⚽</div>
              <h3 className="text-2xl font-black mb-4">스포츠 생중계</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                K리그, 라리가, 리그앙, NFL 등 전 세계 주요 스포츠 경기를 가장 선명한 화질로 생중계합니다.
              </p>
            </div>
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/5 hover:border-blue-500/30 transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">📱</div>
              <h3 className="text-2xl font-black mb-4">다양한 기기 지원</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                스마트폰, 태블릿, PC는 물론 스마트 TV에서도 최대 2대까지 동시 시청이 가능합니다.
              </p>
            </div>
          </div>

          {/* Download Section */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3.5rem] p-10 sm:p-20 shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>
            <h2 className="text-4xl sm:text-5xl font-black mb-8 relative z-10">어디서나 간편하게 설치하세요</h2>
            <p className="text-white/80 text-lg sm:text-xl font-bold mb-12 max-w-2xl relative z-10">
              지금 앱을 다운로드하고 오프라인에서도 즐길 수 있도록 <br className="hidden sm:block" /> 콘텐츠를 저장해보세요.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10 w-full max-w-2xl">
                <Link 
                    href="https://apps.apple.com/kr/app/%EC%BF%A1%ED%8C%A1%ED%94%8C%EB%A0%88%EC%9D%B4/id1536412173"
                    className="flex-1 min-w-[200px] py-4 bg-black rounded-2xl flex items-center justify-center gap-3 hover:bg-zinc-900 transition-colors border border-white/10"
                >
                    <span className="text-3xl">🍎</span>
                    <div className="text-left">
                        <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest">Download on the</p>
                        <p className="text-xl font-black">App Store</p>
                    </div>
                </Link>
                <Link 
                    href="https://play.google.com/store/apps/details?id=com.coupang.mobile.play&hl=ko"
                    className="flex-1 min-w-[200px] py-4 bg-black rounded-2xl flex items-center justify-center gap-3 hover:bg-zinc-900 transition-colors border border-white/10"
                >
                    <span className="text-3xl">🤖</span>
                    <div className="text-left">
                        <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest">Get it on</p>
                        <p className="text-xl font-black">Google Play</p>
                    </div>
                </Link>
            </div>
          </div>
        </div>
      </main>

      <CoupangAds 
          keyword="쿠팡 로켓프레시" 
          title="🛒 와우 회원을 위한 특급 혜택"
          hookText="쿠팡플레이를 즐기고 계신가요? 와우 회원이라면 지금 바로 로켓프레시 신선식품과 무제한 무료배송 혜택까지 누려보세요."
      />

      <Footer />

      {/* Interstitial Ad Screen */}
      {showInterstitial && (
        <div className="fixed inset-0 z-[100] bg-black/98 flex flex-col items-center justify-center p-4 backdrop-blur-md">
          <div className="max-w-md w-full text-white text-center">
            {counter > 0 ? (
              <>
                <div className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-10 shadow-2xl shadow-blue-500/20"></div>
                <h2 className="text-3xl font-black mb-6">쿠팡플레이로 이동 중</h2>
                <p className="text-slate-400 text-lg mb-10 break-keep">
                    와우 회원의 무제한 감동, <br className="hidden sm:block" />
                    곧 시작됩니다. ({counter}초)
                </p>
              </>
            ) : (
              <>
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-10 text-4xl animate-bounce shadow-2xl shadow-blue-600/40">
                  🎬
                </div>
                <h2 className="text-3xl font-black mb-6">준비가 완료되었습니다</h2>
                <a 
                  href={targetLink}
                  onClick={() => setShowInterstitial(false)}
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-900 font-black rounded-2xl mb-10 hover:bg-blue-50 transition-all shadow-xl"
                >
                  지금 바로 감상하기
                </a>
              </>
            )}
            
            <div className="p-8 bg-zinc-900 rounded-[2.5rem] border border-white/5 shadow-2xl">
              <p className="text-[10px] text-zinc-500 mb-6 uppercase tracking-widest font-black">Sponsored</p>
              <div className="w-full h-48 bg-zinc-800/50 rounded-2xl flex items-center justify-center border border-dashed border-zinc-700 italic text-zinc-600 text-sm">
                광고 확인 후 이동이 완료됩니다
              </div>
            </div>
            
            <button 
                onClick={() => setShowInterstitial(false)}
                className="mt-10 text-zinc-600 text-sm font-bold hover:text-white transition-colors"
            >
                SKIP AD
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
