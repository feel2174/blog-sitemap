'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoupangAds from '@/components/CoupangAds';

export default function QuotePage() {
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
            link.download = downloadLink.split('/').pop() || '견적서';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            timer = setTimeout(() => setShowInterstitial(false), 1000);
        }
        return () => clearTimeout(timer);
    }, [showInterstitial, counter, downloadLink]);

    return (
        <div className="min-h-screen bg-gray-50 font-['Pretendard']">
            <Header />
            
            <main className="pb-20">
                {/* Hero Section */}
                <div className="relative bg-[#0F172A] pt-24 pb-48 px-4 overflow-hidden">
                    <div 
                        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center mix-blend-luminosity"
                        style={{ backgroundImage: 'url("/quote-bg.png")' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/50 z-[1]"></div>

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <span className="inline-block px-5 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-black mb-8 border border-emerald-500/20 backdrop-blur-md">
                            📊 비즈니스 표준 견적서 양식
                        </span>
                        <h1 className="text-4xl sm:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight break-keep">
                            깔끔한 <span className="text-emerald-400">견적서 양식</span><br />
                            무료 다운로드
                        </h1>
                        <p className="text-slate-400 font-bold text-lg sm:text-2xl max-w-2xl mx-auto break-keep leading-relaxed opacity-90">
                            엑셀, 한글, 워드, PDF 모든 포맷 지원!<br className="hidden sm:block" />
                            업종에 맞게 골라 쓰는 전문적인 견적서 서식입니다.
                        </p>
                    </div>
                </div>

                {/* Download Grid */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-24 relative z-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        
                        {/* Excel */}
                        <button
                            onClick={() => handleDownloadClick('/quote.xlsx')}
                            className="group bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">📗</div>
                            <h3 className="text-xl font-black text-slate-800 mb-2">Excel (엑셀)</h3>
                            <p className="text-slate-400 text-sm font-bold mb-6">자동 계산 기능 포함</p>
                            <span className="text-emerald-600 font-black text-sm group-hover:underline">다운로드 하기 →</span>
                        </button>

                        {/* HWP */}
                        <button
                            onClick={() => handleDownloadClick('/quote.hwp')}
                            className="group bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">📘</div>
                            <h3 className="text-xl font-black text-slate-800 mb-2">HWP (한글)</h3>
                            <p className="text-slate-400 text-sm font-bold mb-6">공공기관 제출 표준</p>
                            <span className="text-blue-600 font-black text-sm group-hover:underline">다운로드 하기 →</span>
                        </button>

                        {/* Word */}
                        <button
                            onClick={() => handleDownloadClick('/quote.docx')}
                            className="group bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">📂</div>
                            <h3 className="text-xl font-black text-slate-800 mb-2">Word (워드)</h3>
                            <p className="text-slate-400 text-sm font-bold mb-6">수정 및 편집 용이</p>
                            <span className="text-indigo-600 font-black text-sm group-hover:underline">다운로드 하기 →</span>
                        </button>

                        {/* PDF */}
                        <button
                            onClick={() => handleDownloadClick('/quote.pdf')}
                            className="group bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">📕</div>
                            <h3 className="text-xl font-black text-slate-800 mb-2">PDF (뷰어)</h3>
                            <p className="text-slate-400 text-sm font-bold mb-6">출력 및 즉시 확인</p>
                            <span className="text-red-600 font-black text-sm group-hover:underline">다운로드 하기 →</span>
                        </button>

                    </div>

                    {/* How to use */}
                    <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-2xl border border-slate-100 mb-20 relative overflow-hidden">
                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-50 rounded-full opacity-50"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-black text-slate-900 mb-12 flex items-center gap-4">
                                <span className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">💡</span>
                                견적서 작성 시 필수 항목
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                <div>
                                    <h4 className="text-xl font-black text-slate-800 mb-4 tracking-tight">01. 공급자 정보</h4>
                                    <p className="text-slate-500 font-medium leading-relaxed break-keep text-sm">
                                        상호명, 대표자 성함, 사업자번호, 연락처 및 주소를 정확하게 기재해야 신뢰도를 높일 수 있습니다.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-slate-800 mb-4 tracking-tight">02. 견적 상세 내역</h4>
                                    <p className="text-slate-500 font-medium leading-relaxed break-keep text-sm">
                                        품목, 규격, 수량, 단가, 공급가액 및 세액을 항목별로 상세히 구분하여 작성하세요.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-slate-800 mb-4 tracking-tight">03. 기타 조건</h4>
                                    <p className="text-slate-500 font-medium leading-relaxed break-keep text-sm">
                                        견적 유효기간, 납품 기한, 결제 방식 등을 명시하여 추후 발생할 수 있는 오해를 예방하세요.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coupang Ads Section */}
                    <CoupangAds 
                        keyword="무선 키보드 마우스 세트" 
                        title="💻 쾌적한 업무 환경을 위한 추천 장비"
                        hookText="더 빠른 문서 작성과 효율적인 업무 처리를 도와줄 베스트 셀링 사무용 기기를 만나보세요."
                    />

                </div>
            </main>

            <Footer />

            {/* Interstitial Ad Simulation */}
            {showInterstitial && (
                <div className="fixed inset-0 z-[100] bg-[#020617]/95 flex flex-col items-center justify-center p-8 backdrop-blur-sm">
                    <div className="max-w-md w-full text-white text-center">
                        <div className="relative mb-12">
                            <div className="w-24 h-24 border-b-4 border-emerald-400 rounded-full animate-spin mx-auto"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-emerald-400 font-black text-xl">
                                {counter}
                            </div>
                        </div>
                        <h2 className="text-3xl font-black mb-6">보안 다운로드 시작 중...</h2>
                        <p className="text-slate-400 font-bold mb-12 break-keep">
                            소중한 비즈니스 파트너를 위해 <br />
                            무료 양식을 준비했습니다.
                        </p>
                        <div className="p-8 bg-[#0F172A] rounded-[2.5rem] border border-slate-800 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/20"></div>
                            <p className="text-[10px] text-slate-500 mb-6 uppercase tracking-widest font-black">Advertisement</p>
                            <div className="w-full h-40 bg-slate-800/30 rounded-2xl flex items-center justify-center border border-slate-700/50 italic text-slate-600 font-bold">
                                Ads Section
                            </div>
                        </div>
                        
                        <button 
                            onClick={() => setShowInterstitial(false)}
                            className="mt-12 text-slate-500 font-bold hover:text-white transition-colors"
                        >
                            Skip to Download
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
