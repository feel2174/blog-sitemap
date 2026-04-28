'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoupangAds from '@/components/CoupangAds';
import Image from 'next/image';

const WEBTOON_LINKS = [
  {
    name: '조아툰🏆',
    url: 'https://xn--he5b11d80l.org/',
    description: '최신 인기 웹툰이 매일 업데이트되는 대표 무료 웹툰 플랫폼',
    icon: '🏆',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    name: '블랙툰',
    url: 'https://xn--he5b11d80l.xyz/',
    description: '다양한 장르의 완결 및 연재 웹툰을 한곳에서 즐기는 블랙툰',
    icon: '🖤',
    color: 'from-zinc-700 to-black'
  },
  {
    name: '무료웹툰 최신주소',
    url: 'https://t.me/s/joatoon',
    description: '막히지 않는 최신 접속 주소를 실시간으로 확인하세요 (텔레그램)',
    icon: '📢',
    color: 'from-blue-400 to-blue-600'
  },
  {
    name: '무료웹툰',
    url: 'https://xn--he5b11d80l.site/',
    description: '로그인 없이 간편하게 즐기는 고화질 무료 웹툰 서비스',
    icon: '📖',
    color: 'from-emerald-400 to-teal-600'
  },
  {
    name: '웹툰모아',
    url: 'https://xn--v52b27qokbe3x.com/',
    description: '모든 웹툰을 한눈에! 강력한 검색 기능의 웹툰 모음 사이트',
    icon: '🔍',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    name: '툰코주소',
    url: 'https://xn--he5b11d80l.asia/',
    description: '빠른 로딩과 쾌적한 인터페이스를 자랑하는 인기 툰코 공식 주소',
    icon: '⚡',
    color: 'from-rose-400 to-red-600'
  }
];

export default function FreeWebtoonContent() {
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
    <div className="min-h-screen bg-slate-50 font-['Pretendard']">
      <Header />
      
      <main className="pb-20">
        {/* Hero Section */}
        <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
          <Image 
            src="/free-webtoon-bg.png"
            alt="무료웹툰 배너"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-4 text-center">
            <span className="px-4 py-1.5 bg-blue-500 text-white rounded-full text-sm font-black mb-6 animate-bounce">
              실시간 업데이트 완료 ⚡
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
              2026 무료웹툰 <span className="text-blue-400">최신 주소 모음</span>
            </h1>
            <p className="text-slate-200 text-lg sm:text-xl font-bold max-w-2xl break-keep">
              막힘 없는 최신 접속 주소를 실시간으로 제공합니다. <br className="hidden sm:block" />
              정식 연재 플랫폼의 감동을 그대로, 고화질로 즐기세요.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
          {/* Link Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WEBTOON_LINKS.map((link, index) => (
              <div 
                key={index}
                className="group bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
              >
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${link.color}`}></div>
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl group-hover:scale-125 transition-transform duration-500">
                      {link.icon}
                    </div>
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                      {link.name}
                    </h3>
                  </div>
                  <p className="text-slate-500 font-medium mb-8 flex-grow leading-relaxed break-keep">
                    {link.description}
                  </p>
                  <button
                    onClick={() => handleLinkClick(link.url)}
                    className={`w-full py-4 rounded-2xl bg-gradient-to-r ${link.color} text-white font-black shadow-lg group-hover:shadow-xl transition-all flex items-center justify-center gap-2`}
                  >
                    사이트 바로가기
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-10 flex items-center gap-4">
                <span className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">💡</span>
                이용 꿀팁 및 유의사항
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-400 font-medium leading-relaxed break-keep">
                <div className="space-y-4">
                  <h4 className="text-white text-xl font-bold">1. 접속이 되지 않을 때</h4>
                  <p>
                    웹툰 사이트의 특성상 주소가 자주 변경될 수 있습니다. 텔레그램 공식 채널을 통해 실시간으로 변경되는 주소를 가장 빠르게 확인할 수 있습니다.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white text-xl font-bold">2. 쾌적한 감상을 위한 팁</h4>
                  <p>
                    일부 사이트의 과도한 광고가 불편하시다면, 애드블록(AdBlock) 확장 프로그램이나 브레이브(Brave) 브라우저 사용을 권장합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <CoupangAds 
          keyword="웹툰 단행본" 
          title="📚 소장하고 싶은 명작 웹툰 단행본"
          hookText="무료로 즐겼던 감동을 영원히 간직하세요. 한정판 굿즈와 미공개 컷이 포함된 인기 웹툰 단행본 특가 모음입니다."
      />

      <Footer />

      {/* Interstitial Ad Screen */}
      {showInterstitial && (
        <div className="fixed inset-0 z-[100] bg-slate-950/95 flex flex-col items-center justify-center p-4 backdrop-blur-sm">
          <div className="max-w-md w-full text-white text-center">
            {counter > 0 ? (
              <>
                <div className="relative w-24 h-24 mx-auto mb-10">
                  <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-2xl font-black">
                    {counter}
                  </div>
                </div>
                <h2 className="text-3xl font-black mb-6">사이트로 이동 중입니다</h2>
                <p className="text-slate-400 text-lg mb-10 break-keep">
                    안전한 링크 연결을 위해 <br className="hidden sm:block" />
                    잠시만 기다려주세요.
                </p>
              </>
            ) : (
              <>
                <div className="w-24 h-24 bg-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-10 text-4xl shadow-2xl shadow-blue-500/40 animate-bounce">
                  🚀
                </div>
                <h2 className="text-3xl font-black mb-6">준비가 완료되었습니다</h2>
                <a 
                  href={targetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowInterstitial(false)}
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-slate-900 font-black rounded-2xl mb-10 hover:bg-blue-50 transition-all shadow-xl hover:scale-105 active:scale-95"
                >
                  지금 바로 이동하기
                </a>
              </>
            )}
            
            <div className="p-8 bg-slate-900 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <p className="text-[10px] text-slate-500 mb-6 uppercase tracking-[0.2em] font-black">Sponsored Content</p>
              <div className="w-full h-48 bg-slate-800/50 rounded-2xl flex items-center justify-center border border-white/5 italic text-slate-500 text-sm">
                광고 확인 후 서비스가 계속됩니다
              </div>
            </div>
            
            <button 
                onClick={() => setShowInterstitial(false)}
                className="mt-10 text-slate-500 text-sm font-bold hover:text-white transition-colors underline underline-offset-4"
            >
                건너뛰기 (Skip)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
