'use client';

import React, { useState, useEffect } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';


// Metadata cannot be in a client component, but Next.js allows it if we export it from a separate server-side file or layout.
// Since this is the main page file, I'll keep it as simple as possible.
// Wait, I can't export metadata from 'use client'. I should split it or just ignore it if I really need Client state.
// I'll make the main page a Server Component and have a Client Component for the buttons.

export default function RealEstateContractPage() {
  const [showInterstitial, setShowInterstitial] = useState(false);
  const [downloadLink, setDownloadLink] = useState('');
  const [counter, setCounter] = useState(3);

  const handleDownloadClick = (url: string) => {
    setDownloadLink(url);
    setShowInterstitial(true);
    setCounter(3);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showInterstitial && counter > 0) {
      timer = setTimeout(() => setCounter(counter - 1), 1000);
    } else if (showInterstitial && counter === 0) {
      // Start actual download
      const link = document.createElement('a');
      link.href = downloadLink;
      link.download = downloadLink.split('/').pop() || '계약서';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Keep it for a bit then hide
      timer = setTimeout(() => setShowInterstitial(false), 1000);
    }
    return () => clearTimeout(timer);
  }, [showInterstitial, counter, downloadLink]);

  return (
    <div className="min-h-screen bg-gray-50 font-['Pretendard']">
      <Header />
      
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-black mb-6">
              📄 표준 서식 제공
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-8 leading-tight text-slate-900 break-keep">
                부동산 매매계약서 <span className="text-blue-600">양식 무료 다운로드</span>
            </h1>
            <p className="text-slate-500 font-bold text-lg sm:text-xl max-w-2xl mx-auto break-keep leading-relaxed">
                법적 효력을 갖춘 표준 부동산 매매계약서 양식입니다.<br className="hidden sm:block" />
                HWP(한글) 및 PDF 파일로 제공되니 용도에 맞게 다운로드하세요.
            </p>
          </div>

          {/* Download Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* HWP Download */}
            <div className="group bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-[5rem]"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform">
                  📝
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-4">HWP 파일 (한글)</h3>
                <p className="text-slate-500 font-medium mb-10 break-keep">
                  내용 수정이 자유로운 한글 파일 형식입니다. <br/>
                  특약 사항 추가가 필요한 경우 권장합니다.
                </p>
                <button
                  onClick={() => handleDownloadClick('/contract/부동산_매매계약서_양식.hwp')}
                  className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                >
                  HWP 다운로드
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* PDF Download */}
            <div className="group bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-[5rem]"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform">
                  📋
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-4">PDF 파일</h3>
                <p className="text-slate-500 font-medium mb-10 break-keep">
                  모든 기기에서 동일하게 확인 가능하며 <br/>
                  출력 후 수기로 작성하실 때 편리합니다.
                </p>
                <button
                  onClick={() => handleDownloadClick('/contract/부동산_매매계약서_양식.pdf')}
                  className="w-full py-5 bg-red-600 text-white font-black rounded-2xl shadow-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2"
                >
                  PDF 다운로드
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Guide Section */}
          <div className="bg-slate-900 rounded-[3rem] p-10 sm:p-16 text-white relative overflow-hidden shadow-2xl">
            <h3 className="text-3xl font-black mb-10 border-b border-white/10 pb-6">
              ✍️ 작성 시 유의사항
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-400 font-medium leading-relaxed break-keep">
              <div>
                <strong className="text-white text-xl block mb-4">정확한 정보 기록</strong>
                등기부등본상의 주소와 실제 정보가 일치하는지 반드시 확인하고, 매도인과 매수인의 인적사항을 정확히 기재하세요.
              </div>
              <div>
                <strong className="text-white text-xl block mb-4">특약 사항의 중요성</strong>
                잔금 지급 기일, 담보책임 기간, 하수도 요금 승계 등 합의된 특약 사항을 최대한 구체적으로 명시하는 것이 좋습니다.
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Interstitial Ad Simulation Screen */}
      {showInterstitial && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4">
          <div className="max-w-md w-full text-white text-center">
            <div className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-10"></div>
            <h2 className="text-3xl font-black mb-6">잠시만 기다려주세요</h2>
            <p className="text-zinc-400 text-lg mb-10 break-keep">
                후원 광고 확인 후 <br className="hidden sm:block" />
                다운로드가 자동으로 시작됩니다. ({counter}초)
            </p>
            <div className="p-8 bg-zinc-800 rounded-3xl border border-zinc-700 shadow-2xl">
              <p className="text-xs text-zinc-500 mb-4 uppercase tracking-widest font-black">Advertisement</p>
              {/* This space is where the AdSense interstitial is expected to triggered or shown */}
              <div className="w-full h-48 bg-zinc-700/50 rounded-2xl flex items-center justify-center border-2 border-dashed border-zinc-600 italic text-zinc-500">
                Ads will be displayed here
              </div>
            </div>
            
            <button 
                onClick={() => setShowInterstitial(false)}
                className="mt-10 text-zinc-500 text-sm hover:text-white transition-colors"
            >
                닫기 (Skip)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
