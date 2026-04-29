'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoupangAds from '@/components/CoupangAds';
import Image from 'next/image';

const LINKS = [
  {
    name: '홈페이지 바로가기',
    url: 'https://www.banksalad.com',
    description: 'PC와 모바일 웹에서 뱅크샐러드의 다양한 서비스를 확인하세요.',
    icon: '🌐',
    color: 'from-emerald-400 to-green-600'
  },
  {
    name: '안드로이드 앱 다운로드',
    url: 'https://play.google.com/store/apps/details?id=com.rainist.banksalad2&hl=ko',
    description: '구글 플레이스토어에서 뱅크샐러드 앱을 설치하고 자산을 관리하세요.',
    icon: '🤖',
    color: 'from-green-500 to-emerald-700'
  },
  {
    name: 'iOS 앱 다운로드',
    url: 'https://apps.apple.com/kr/app/%EB%B1%85%ED%81%AC%EC%83%90%EB%9F%AC%EB%93%9C/id1195804784',
    description: '앱스토어에서 뱅크샐러드 앱을 설치하고 스마트한 금융 생활을 시작하세요.',
    icon: '🍎',
    color: 'from-slate-700 to-slate-900'
  }
];

export default function BanksaladContent() {
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
            src="/banksalad-bg.png"
            alt="뱅크샐러드 배너"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-4 text-center">
            <span className="px-4 py-1.5 bg-green-500 text-white rounded-full text-sm font-black mb-6 animate-bounce shadow-lg shadow-green-500/30">
              내 돈 관리 앱 💸
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
              <span className="text-green-400">뱅크샐러드</span> 다운로드 및 바로가기
            </h1>
            <p className="text-slate-200 text-lg sm:text-xl font-bold max-w-2xl break-keep">
              흩어진 내 자산을 한눈에! <br className="hidden sm:block" />
              가계부부터 건강검진, 유전자 검사까지 한 번에 관리하세요.
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
                  <p className="text-slate-500 font-medium mb-8 flex-grow leading-relaxed break-keep text-center text-sm">
                    {link.description}
                  </p>
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-10 flex items-center gap-4">
                <span className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">💡</span>
                뱅크샐러드 주요 기능
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-400 font-medium leading-relaxed break-keep">
                <div className="space-y-4">
                  <h4 className="text-white text-xl font-bold">1. 자동 가계부 및 자산 관리</h4>
                  <p>
                    흩어져 있는 은행, 카드, 증권, 보험 등 모든 금융 자산을 한 번에 연결하여 자동으로 내역을 불러오고 분석해 줍니다.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white text-xl font-bold">2. 무료 유전자 검사</h4>
                  <p>
                    매일 선착순으로 무료 유전자 검사를 신청할 수 있으며, 건강 상태부터 탈모, 피부 등 다양한 유전적 특징을 확인할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <CoupangAds 
          keyword="재테크" 
          title="💰 슬기로운 재테크를 위한 추천 도서"
          hookText="자산 관리가 처음이라면? 부자들이 읽는 베스트셀러 재테크 도서를 만나보세요."
      />

      <Footer />

      {/* Interstitial Ad Screen */}
      {showInterstitial && (
        <div className="fixed inset-0 z-[100] bg-slate-950/95 flex flex-col items-center justify-center p-4 backdrop-blur-sm">
          <div className="max-w-md w-full text-white text-center">
            {counter > 0 ? (
              <>
                <div className="relative w-24 h-24 mx-auto mb-10">
                  <div className="absolute inset-0 border-4 border-green-500/20 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-2xl font-black">
                    {counter}
                  </div>
                </div>
                <h2 className="text-3xl font-black mb-6">해당 페이지로 이동 중입니다</h2>
                <p className="text-slate-400 text-lg mb-10 break-keep">
                    안전한 링크 연결을 위해 <br className="hidden sm:block" />
                    잠시만 기다려주세요.
                </p>
              </>
            ) : (
              <>
                <div className="w-24 h-24 bg-green-500 rounded-3xl flex items-center justify-center mx-auto mb-10 text-4xl shadow-2xl shadow-green-500/40 animate-bounce">
                  🚀
                </div>
                <h2 className="text-3xl font-black mb-6">준비가 완료되었습니다</h2>
                <a 
                  href={targetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowInterstitial(false)}
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-slate-900 font-black rounded-2xl mb-10 hover:bg-green-50 transition-all shadow-xl hover:scale-105 active:scale-95"
                >
                  지금 바로 이동하기
                </a>
              </>
            )}
            
            <div className="p-8 bg-slate-900 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
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
