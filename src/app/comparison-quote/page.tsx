'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoupangAds from '@/components/CoupangAds';

export default function ComparisonQuotePage() {
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
            const link = document.createElement('a');
            link.href = downloadLink;
            link.download = downloadLink.split('/').pop() || '비교견적서';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            timer = setTimeout(() => setShowInterstitial(false), 1000);
        }
        return () => clearTimeout(timer);
    }, [showInterstitial, counter, downloadLink]);

    return (
        <div className="min-h-screen bg-white font-['Pretendard']">
            <Header />
            
            <main className="pb-20">
                {/* Hero / Header Section */}
                <div className="relative bg-slate-900 pt-24 pb-44 px-4 overflow-hidden">
                    {/* Background Image */}
                    <div 
                        className="absolute inset-0 z-0 opacity-30 bg-cover bg-center"
                        style={{ backgroundImage: 'url("/comparison-quote-bg.png")' }}
                    ></div>
                    
                    {/* Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900 z-[1]"></div>

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-black mb-8 border border-blue-500/30 backdrop-blur-sm">
                            📄 공식 비교견적서 표준 서식
                        </span>
                        <h1 className="text-4xl sm:text-6xl font-black text-white mb-8 leading-tight tracking-tight break-keep">
                            비교견적서 양식<br />
                            <span className="text-blue-500 text-3xl sm:text-5xl">무료 다운로드 (HWP, PDF)</span>
                        </h1>
                        <p className="text-slate-400 font-bold text-lg sm:text-xl max-w-2xl mx-auto break-keep leading-relaxed opacity-90">
                            공공기관 및 기업 제출용으로 적합한 표준 비교견적서 서식입니다.<br className="hidden sm:block" />
                            내용 수정이 쉬운 한글 파일과 출력에 최적화된 PDF를 제공합니다.
                        </p>
                    </div>
                </div>

                {/* Content Area */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-24 relative z-20">
                    
                    {/* Download Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        {/* HWP Download */}
                        <div className="group bg-white rounded-[3rem] p-12 border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] hover:shadow-2xl hover:-translate-y-3 transition-all duration-700 overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-[6rem]"></div>
                            
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-24 h-24 bg-blue-50 rounded-[2rem] flex items-center justify-center text-5xl mb-10 group-hover:rotate-6 transition-transform">
                                    📝
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 mb-4">HWP 한글 파일</h3>
                                <p className="text-slate-500 font-semibold mb-12 break-keep leading-relaxed">
                                    업체 정보 및 견적 내역을<br />자유롭게 수정하고 편집할 수 있습니다.
                                </p>
                                <button
                                    onClick={() => handleDownloadClick('/comparison-quote.hwp')}
                                    className="w-full py-6 bg-blue-600 text-white font-black text-xl rounded-2xl shadow-[0_15px_30px_-10px_rgba(37,99,235,0.4)] hover:bg-blue-700 transition-all flex items-center justify-center gap-3"
                                >
                                    한글 양식 다운로드
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* PDF Download */}
                        <div className="group bg-white rounded-[3rem] p-12 border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] hover:shadow-2xl hover:-translate-y-3 transition-all duration-700 overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-[6rem]"></div>
                            
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-24 h-24 bg-red-50 rounded-[2rem] flex items-center justify-center text-5xl mb-10 group-hover:rotate-6 transition-transform">
                                    📋
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 mb-4">PDF 파일</h3>
                                <p className="text-slate-500 font-semibold mb-12 break-keep leading-relaxed">
                                    어느 기기에서나 깨짐 없이 확인 가능하며<br />즉시 출력하여 사용하기에 용이합니다.
                                </p>
                                <button
                                    onClick={() => handleDownloadClick('/comparison-quote.pdf')}
                                    className="w-full py-6 bg-red-600 text-white font-black text-xl rounded-2xl shadow-[0_15px_30px_-10px_rgba(220,38,38,0.4)] hover:bg-red-700 transition-all flex items-center justify-center gap-3"
                                >
                                    PDF 양식 다운로드
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Guide Info Section */}
                    <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 mb-20">
                        <div className="flex flex-col md:flex-row gap-16">
                            <div className="flex-1">
                                <h3 className="text-2xl font-black text-slate-900 mb-8 border-l-4 border-blue-600 pl-6">
                                    비교견적서 작성 팁
                                </h3>
                                <ul className="space-y-6 text-slate-600 font-bold">
                                    <li className="flex gap-4">
                                        <span className="text-blue-600">01</span>
                                        <p className="break-keep leading-relaxed">최소 2개 이상의 업체로부터 받은 견적 내용을 객관적으로 비교할 수 있도록 항목별로 정리하세요.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-blue-600">02</span>
                                        <p className="break-keep leading-relaxed">단가, 수량, 규격, 납품 기한 등 세부 조건을 정확히 명시하여 사후 분쟁을 예방하세요.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-blue-600">03</span>
                                        <p className="break-keep leading-relaxed">부가가치세(VAT) 포함 여부를 반드시 확인하고 총계 금액이 일치하는지 재검토하십시오.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-black text-slate-900 mb-8 border-l-4 border-red-600 pl-6">
                                    제출 시 주의사항
                                </h3>
                                <ul className="space-y-6 text-slate-600 font-bold">
                                    <li className="flex gap-4">
                                        <span className="text-red-600">!</span>
                                        <p className="break-keep leading-relaxed">공공기관 제출용인 경우, 각 업체의 사업자등록증 사본과 통장 사본이 동봉되어야 할 수 있습니다.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-red-600">!</span>
                                        <p className="break-keep leading-relaxed">견적서 유효기간을 확인하여 제출 시점에 견적 효력이 상실되지 않았는지 점검하세요.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Coupang Ads Section */}
                    <CoupangAds 
                        keyword="복사용지" 
                        title="🖨️ 사무실 필수 소모품 추천"
                        hookText="완벽한 서류 작성을 위한 고품질 복사용지와 사무용품을 특가로 만나보세요."
                    />

                </div>
            </main>

            <Footer />

            {/* Interstitial Ad Simulation */}
            {showInterstitial && (
                <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center p-6 backdrop-blur-xl">
                    <div className="max-w-md w-full text-white text-center">
                        <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-12 shadow-[0_0_50px_rgba(59,130,246,0.3)]"></div>
                        <h2 className="text-4xl font-black mb-8 tracking-tight">문서 준비 중...</h2>
                        <p className="text-slate-400 text-xl mb-12 break-keep font-medium leading-relaxed">
                            광고 확인 후 <br className="hidden sm:block" />
                            다운로드가 자동으로 시작됩니다. <br />
                            <span className="text-blue-500 font-black mt-2 inline-block">({counter}초 남음)</span>
                        </p>
                        <div className="p-10 bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-2xl">
                            <p className="text-[10px] text-slate-500 mb-6 uppercase tracking-[0.3em] font-black opacity-50">Sponsor Advertisement</p>
                            <div className="w-full h-44 bg-slate-800/50 rounded-3xl flex items-center justify-center border-2 border-dashed border-slate-700 italic text-slate-500 font-medium">
                                Ads will be displayed here
                            </div>
                        </div>
                        
                        <button 
                            onClick={() => setShowInterstitial(false)}
                            className="mt-12 text-slate-600 font-bold hover:text-slate-400 transition-colors py-2 px-6 rounded-full border border-slate-800/50"
                        >
                            Skip Advertisement
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
