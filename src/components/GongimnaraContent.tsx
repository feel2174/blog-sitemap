'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoupangAds from '@/components/CoupangAds';
import Image from 'next/image';

const GONGIM_LINKS = [
  {
    name: '엔진 교체 및 오일',
    url: 'https://www.gongim.com/',
    description: '합리적인 공임비로 진행하는 투명한 엔진 오일 및 엔진 교체 서비스',
    icon: '🔧',
    color: 'from-orange-400 to-red-500'
  },
  {
    name: '타이어 교체',
    url: 'https://www.gongim.com/',
    description: '인터넷에서 구매한 타이어도 저렴하고 안전하게 장착 가능',
    icon: '🛞',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: '일반 차량 정비',
    url: 'https://www.gongim.com/',
    description: '브레이크, 배터리 등 믿고 맡길 수 있는 꼼꼼한 기본 정비',
    icon: '🚗',
    color: 'from-emerald-400 to-teal-600'
  }
];

export default function GongimnaraContent() {
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
            src="/gongimnara-bg.png"
            alt="공임나라 배너"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-4 text-center">
            <span className="px-4 py-1.5 bg-red-500 text-white rounded-full text-sm font-black mb-6 animate-pulse">
              표준 공임비로 투명하게 🔧
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
              믿을 수 있는 <span className="text-orange-400">공임나라</span>
            </h1>
            <p className="text-slate-200 text-lg sm:text-xl font-bold max-w-2xl break-keep">
              엔진 교체부터 타이어 교체, 일반 차량 정비까지! <br className="hidden sm:block" />
              부품은 내가 사고, 장착은 전문가에게 합리적으로 맡기세요.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
          {/* Link Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GONGIM_LINKS.map((link, index) => (
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
                    예약하러 가기
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-10 flex items-center gap-4">
                <span className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">💡</span>
                공임나라 이용 꿀팁
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-400 font-medium leading-relaxed break-keep">
                <div className="space-y-4">
                  <h4 className="text-white text-xl font-bold">1. 부품은 미리 준비하세요</h4>
                  <p>
                    원하는 엔진오일, 타이어, 브레이크 패드 등을 인터넷으로 저렴하게 구매한 뒤 공임나라에 방문하시면 정비 비용을 크게 절약할 수 있습니다.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white text-xl font-bold">2. 사전 예약 필수</h4>
                  <p>
                    대기 시간을 줄이고 원활한 서비스를 받기 위해 방문 전 공식 홈페이지에서 원하시는 지점에 온라인 예약을 꼭 진행해주세요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <CoupangAds 
          keyword="차량용품 타이어 엔진오일" 
          title="🚗 차량 정비의 시작, 필수 용품"
          hookText="엔진오일, 와이퍼, 워셔액부터 다양한 차량 용품까지. 로켓배송으로 빠르게 받아 공임나라에서 장착하세요."
      />

      <Footer />

      {/* Interstitial Ad Screen */}
      {showInterstitial && (
        <div className="fixed inset-0 z-[100] bg-slate-950/95 flex flex-col items-center justify-center p-4 backdrop-blur-sm">
          <div className="max-w-md w-full text-white text-center">
            {counter > 0 ? (
              <>
                <div className="relative w-24 h-24 mx-auto mb-10">
                  <div className="absolute inset-0 border-4 border-orange-500/20 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-2xl font-black">
                    {counter}
                  </div>
                </div>
                <h2 className="text-3xl font-black mb-6">공임나라로 이동 중입니다</h2>
                <p className="text-slate-400 text-lg mb-10 break-keep">
                    안전한 링크 연결을 위해 <br className="hidden sm:block" />
                    잠시만 기다려주세요.
                </p>
              </>
            ) : (
              <>
                <div className="w-24 h-24 bg-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-10 text-4xl shadow-2xl shadow-orange-500/40 animate-bounce">
                  🚀
                </div>
                <h2 className="text-3xl font-black mb-6">준비가 완료되었습니다</h2>
                <a 
                  href={targetLink}
                  onClick={() => setShowInterstitial(false)}
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-slate-900 font-black rounded-2xl mb-10 hover:bg-orange-50 transition-all shadow-xl hover:scale-105 active:scale-95"
                >
                  지금 바로 이동하기
                </a>
              </>
            )}
            
            <div className="p-8 bg-slate-900 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
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
