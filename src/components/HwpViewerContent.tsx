'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoupangAds from '@/components/CoupangAds';
import Image from 'next/image';

const VIEWER_URL = 'https://www.hancom.com/product/office/officeViewer';

const PLATFORMS = [
  {
    id: 'windows',
    name: 'Windows',
    icon: '💻',
    description: 'PC에서 한글 문서를 완벽하게 확인하세요.',
    color: 'bg-blue-600'
  },
  {
    id: 'mac',
    name: 'macOS',
    icon: '🍎',
    description: '맥 OS 환경에서도 끊김 없는 문서 열람.',
    color: 'bg-zinc-800'
  },
  {
    id: 'android',
    name: 'Android',
    icon: '🤖',
    description: '갤럭시 등 모바일에서 간편하게 확인.',
    color: 'bg-green-600'
  },
  {
    id: 'ios',
    name: 'iOS (iPhone/iPad)',
    icon: '📱',
    description: '아이폰과 아이패드 전용 고화질 뷰어.',
    color: 'bg-slate-700'
  }
];

export default function HwpViewerContent() {
  const [showInterstitial, setShowInterstitial] = useState(false);
  const [counter, setCounter] = useState(3);

  const handleDownloadClick = () => {
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
    <div className="min-h-screen bg-white font-['Pretendard']">
      <Header />
      
      <main className="pb-20">
        {/* Hero Section */}
        <div className="relative h-[450px] sm:h-[550px] overflow-hidden">
          <Image 
            src="/hwp-viewer-bg.png"
            alt="한글 뷰어 배너"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-16 max-w-6xl mx-auto">
            <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-black mb-6 w-fit">
              한컴오피스 공식 뷰어
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white mb-8 leading-tight drop-shadow-lg">
              한글(HWP) 뷰어 <br />
              <span className="text-blue-300">무료 다운로드</span>
            </h1>
            <p className="text-white/90 text-lg sm:text-xl font-bold max-w-2xl break-keep leading-relaxed">
              언제 어디서나 한글 문서를 확인하세요. <br className="hidden sm:block" />
              편집 기능 없이도 원본 그대로의 서식을 완벽하게 지원합니다.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-10">
          {/* Download Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLATFORMS.map((platform) => (
              <div 
                key={platform.id}
                className="bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-blue-900/5 border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`w-20 h-20 ${platform.color} rounded-3xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {platform.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-4">{platform.name}</h3>
                <p className="text-slate-500 font-medium mb-8 break-keep flex-grow">
                  {platform.description}
                </p>
                <button
                  onClick={handleDownloadClick}
                  className={`w-full py-4 ${platform.color} text-white font-black rounded-2xl shadow-xl hover:opacity-90 transition-all flex items-center justify-center gap-2`}
                >
                  다운로드
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Guide Section */}
          <div className="mt-20 bg-slate-50 rounded-[3.5rem] p-10 sm:p-20 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 blur-[80px] rounded-full"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                    <h3 className="text-3xl font-black mb-8 text-slate-900">
                        왜 한글 뷰어를 <br className="hidden sm:block" /> 써야 하나요?
                    </h3>
                    <div className="space-y-6 text-slate-600 font-medium text-lg break-keep">
                        <p className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs mt-1 shrink-0">✓</span>
                            <span>한컴오피스가 설치되어 있지 않아도 <strong>HWP, HWPX</strong> 문서를 즉시 확인할 수 있습니다.</span>
                        </p>
                        <p className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs mt-1 shrink-0">✓</span>
                            <span>표, 글상자, 그림 등 복잡한 개체도 <strong>원본 서식 그대로</strong> 오차 없이 보여줍니다.</span>
                        </p>
                        <p className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs mt-1 shrink-0">✓</span>
                            <span>개인 사용자는 물론 기업 및 단체에서도 <strong>무료로 사용 가능</strong>한 공식 배포용 소프트웨어입니다.</span>
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-[400px] aspect-square bg-white rounded-[3rem] shadow-2xl p-8 flex items-center justify-center">
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-blue-50 rounded-2xl animate-pulse"></div>
                        <div className="absolute inset-4 border-2 border-dashed border-blue-200 rounded-2xl flex flex-col items-center justify-center gap-4 text-blue-300 italic font-bold">
                            <span className="text-6xl">📄</span>
                            HWP Viewer Ready
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </main>

      <CoupangAds 
          keyword="한컴오피스 2026" 
          title="✍️ 편집이 필요하신가요?"
          hookText="단순 열람을 넘어 문서 편집과 작성이 필요하다면, 한컴오피스 최신 버전을 합리적인 가격에 만나보세요."
      />

      <Footer />

      {/* Interstitial Ad Screen */}
      {showInterstitial && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-sm">
          <div className="max-w-md w-full text-white text-center">
            {counter > 0 ? (
              <>
                <div className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-10"></div>
                <h2 className="text-3xl font-black mb-6">한컴 공식 페이지로 연결 중</h2>
                <p className="text-slate-400 text-lg mb-10 break-keep">
                    안전한 다운로드를 위해 <br className="hidden sm:block" />
                    잠시만 기다려주세요. ({counter}초)
                </p>
              </>
            ) : (
              <>
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-10 text-4xl shadow-2xl shadow-blue-500/20">
                  ✅
                </div>
                <h2 className="text-3xl font-black mb-6">준비가 완료되었습니다</h2>
                <a 
                  href={VIEWER_URL}
                  onClick={() => setShowInterstitial(false)}
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-900 font-black rounded-2xl mb-10 hover:bg-blue-50 transition-all shadow-xl"
                >
                  다운로드 페이지로 이동
                </a>
              </>
            )}
            
            <div className="p-8 bg-zinc-900 rounded-[2.5rem] border border-white/10 shadow-2xl">
              <p className="text-[10px] text-zinc-500 mb-6 uppercase tracking-widest font-black">Sponsored</p>
              <div className="w-full h-48 bg-zinc-800/50 rounded-2xl flex items-center justify-center border border-dashed border-zinc-700 italic text-zinc-600">
                광고 확인 후 이동이 완료됩니다
              </div>
            </div>
            
            <button 
                onClick={() => setShowInterstitial(false)}
                className="mt-10 text-zinc-600 text-sm font-bold hover:text-white transition-colors"
            >
                건너뛰기 (SKIP)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
