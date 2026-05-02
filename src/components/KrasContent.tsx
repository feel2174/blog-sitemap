'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoupangAds from '@/components/CoupangAds';
import Image from 'next/image';

const KRAS_LINKS = [
  {
    name: '토지 및 건축물 정보',
    url: 'https://www.kras.go.kr/mainView.do',
    description: '토지대장, 건축물대장 등 부동산의 기본 정보를 한눈에 열람하세요.',
    icon: '🏢',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: '토지이용계획',
    url: 'https://www.kras.go.kr/mainView.do',
    description: '용도지역, 지구 등 토지이용규제 및 개발 가능 여부를 확인하세요.',
    icon: '🗺️',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    name: '가격 정보',
    url: 'https://www.kras.go.kr/mainView.do',
    description: '개별공시지가, 개별주택가격, 공동주택가격 등 상세 가격 정보를 조회하세요.',
    icon: '💰',
    color: 'from-amber-400 to-orange-500'
  }
];

export default function KrasContent() {
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
            src="/kras-bg.png"
            alt="일사편리 부동산정보조회 배너"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-4 text-center">
            <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-black mb-6 animate-pulse shadow-lg shadow-blue-500/50">
              국토교통부 공식 서비스 🏛️
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
              일사편리 <span className="text-blue-400">부동산정보조회</span>
            </h1>
            <p className="text-slate-200 text-lg sm:text-xl font-bold max-w-2xl break-keep">
              18종의 복잡한 부동산 공부를 하나로! <br className="hidden sm:block" />
              부동산 종합증명서 발급부터 기본 정보 조회까지 간편하게 확인하세요.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
          {/* Link Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {KRAS_LINKS.map((link, index) => (
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
                    조회 바로가기
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
                일사편리 이용 안내
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-400 font-medium leading-relaxed break-keep">
                <div className="space-y-4">
                  <h4 className="text-white text-xl font-bold">1. 공동인증서 준비</h4>
                  <p>
                    부동산 종합증명서를 열람하거나 발급받기 위해서는 본인 확인을 위한 공동인증서(구 공인인증서) 또는 간편인증이 필요할 수 있습니다.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white text-xl font-bold">2. 열람과 발급의 차이</h4>
                  <p>
                    단순 정보 확인 목적이라면 &apos;열람&apos; 서비스를, 관공서나 은행 제출용이 필요하다면 법적 효력이 있는 &apos;발급&apos; 서비스를 이용해 주세요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <CoupangAds 
          keyword="부동산 투자" 
          title="📚 성공적인 부동산 투자를 위한 지침서"
          hookText="부동산 상식부터 실전 투자 전략까지, 초보자와 전문가 모두를 위한 베스트셀러를 확인해보세요."
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
                <h2 className="text-3xl font-black mb-6">일사편리 시스템으로 이동 중입니다</h2>
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
                  onClick={() => setShowInterstitial(false)}
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-slate-900 font-black rounded-2xl mb-10 hover:bg-blue-50 transition-all shadow-xl hover:scale-105 active:scale-95"
                >
                  지금 바로 이동하기
                </a>
              </>
            )}
            
            <div className="p-8 bg-slate-900 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
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
