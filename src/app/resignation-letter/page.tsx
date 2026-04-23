'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoupangAds from '@/components/CoupangAds';

export default function ResignationLetterPage() {
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
            link.download = downloadLink.split('/').pop() || '사직서';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            timer = setTimeout(() => setShowInterstitial(false), 1000);
        }
        return () => clearTimeout(timer);
    }, [showInterstitial, counter, downloadLink]);

    return (
        <div className="min-h-screen bg-[#FAFAF9] font-['Pretendard']">
            <Header />
            
            <main className="pb-20">
                {/* Hero Section */}
                <div className="relative bg-[#44403C] pt-24 pb-48 px-4 overflow-hidden">
                    <div 
                        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center mix-blend-overlay"
                        style={{ backgroundImage: 'url("/resignation-letter-bg.png")' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#44403C] via-transparent to-[#44403C]/30 z-[1]"></div>

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <span className="inline-block px-5 py-2 bg-stone-200/20 text-stone-200 rounded-full text-sm font-black mb-8 border border-stone-200/30 backdrop-blur-md">
                            ✉️ 새로운 시작을 위한 전문 사직서 양식
                        </span>
                        <h1 className="text-4xl sm:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight break-keep">
                            표준 <span className="text-stone-300">사직서 양식</span><br />
                            무료 다운로드
                        </h1>
                        <p className="text-stone-300 font-bold text-lg sm:text-2xl max-w-2xl mx-auto break-keep leading-relaxed opacity-90">
                            유종의 미를 거두기 위한 깔끔한 표준 서식입니다.<br className="hidden sm:block" />
                            HWP와 PDF 형식으로 제공되니 상황에 맞게 사용하세요.
                        </p>
                    </div>
                </div>

                {/* Download Grid */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-24 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        
                        {/* HWP Download */}
                        <div className="group bg-white rounded-[3rem] p-12 shadow-2xl hover:shadow-stone-200/50 transition-all duration-700 border border-stone-100 flex flex-col items-center text-center hover:-translate-y-3 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-stone-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full"></div>
                            <div className="w-24 h-24 bg-stone-50 text-stone-600 rounded-[2.5rem] flex items-center justify-center text-5xl mb-10 group-hover:rotate-6 transition-transform">📝</div>
                            <h3 className="text-3xl font-black text-stone-800 mb-4">HWP 한글 파일</h3>
                            <p className="text-stone-500 font-semibold mb-12 break-keep leading-relaxed">
                                인적 사항과 사직 사유를<br />자유롭게 수정 및 입력할 수 있습니다.
                            </p>
                            <button
                                onClick={() => handleDownloadClick('/resignation-letter.hwp')}
                                className="w-full py-6 bg-stone-800 text-white font-black text-xl rounded-2xl shadow-xl hover:bg-stone-900 transition-all flex items-center justify-center gap-3"
                            >
                                한글 양식 다운로드
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </button>
                        </div>

                        {/* PDF Download */}
                        <div className="group bg-white rounded-[3rem] p-12 shadow-2xl hover:shadow-stone-200/50 transition-all duration-700 border border-stone-100 flex flex-col items-center text-center hover:-translate-y-3 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-stone-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full"></div>
                            <div className="w-24 h-24 bg-stone-50 text-stone-600 rounded-[2.5rem] flex items-center justify-center text-5xl mb-10 group-hover:rotate-6 transition-transform">📋</div>
                            <h3 className="text-3xl font-black text-stone-800 mb-4">PDF 파일</h3>
                            <p className="text-stone-500 font-semibold mb-12 break-keep leading-relaxed">
                                즉시 출력하여 수기로 작성하거나<br />메일 첨부용으로 적합합니다.
                            </p>
                            <button
                                onClick={() => handleDownloadClick('/resignation-letter.pdf')}
                                className="w-full py-6 bg-stone-700 text-white font-black text-xl rounded-2xl shadow-xl hover:bg-stone-800 transition-all flex items-center justify-center gap-3"
                            >
                                PDF 양식 다운로드
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </button>
                        </div>

                    </div>

                    {/* How to write */}
                    <div className="bg-stone-800 rounded-[3.5rem] p-12 md:p-24 text-white shadow-3xl mb-20 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-stone-500 via-stone-300 to-stone-500"></div>
                        <h2 className="text-3xl md:text-4xl font-black mb-16 border-b border-stone-700 pb-10">
                            ✍️ 사직서 작성 시 유의사항
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-xl font-black text-stone-200 mb-4 tracking-tight">퇴사 희망일 명시</h4>
                                    <p className="text-stone-400 font-medium leading-relaxed break-keep">
                                        회사와의 협의를 통해 결정된 최종 근무일을 명확히 기재하세요. 통상적으로 퇴사 1개월 전에는 의사를 밝히는 것이 관례입니다.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-stone-200 mb-4 tracking-tight">사직 사유 작성</h4>
                                    <p className="text-stone-400 font-medium leading-relaxed break-keep">
                                        구체적인 불만보다는 &quot;개인 사정&quot;, &quot;일신상의 사유&quot;, &quot;이직&quot; 등 간결하고 정중한 표현을 사용하는 것이 좋습니다.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-xl font-black text-stone-200 mb-4 tracking-tight">업무 인수인계</h4>
                                    <p className="text-stone-400 font-medium leading-relaxed break-keep">
                                        사직서 제출과 함께 본인이 맡았던 업무의 인수인계 계획을 함께 전달하면 유종의 미를 거둘 수 있습니다.
                                    </p>
                                </div>
                                <div className="p-8 bg-stone-700/50 rounded-3xl border border-stone-600">
                                    <p className="text-stone-300 text-sm italic leading-relaxed break-keep">
                                        &quot;지금까지의 배려와 가르침에 감사드립니다. 귀사의 무궁한 발전을 기원합니다.&quot; 라는 문구를 덧붙여 보세요.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coupang Ads */}
                    <CoupangAds 
                        keyword="자기계발 도서" 
                        title="📚 더 나은 미래를 위한 준비"
                        hookText="새로운 시작을 앞둔 당신을 응원합니다! 이직 준비부터 자기계발까지, 다음 스텝을 도와줄 베스트 도서 리스트입니다."
                    />

                </div>
            </main>

            <Footer />

            {/* Interstitial Ad Simulation */}
            {showInterstitial && (
                <div className="fixed inset-0 z-[100] bg-stone-950/95 flex flex-col items-center justify-center p-8 backdrop-blur-md">
                    <div className="max-w-md w-full text-white text-center">
                        <div className="w-20 h-20 border-2 border-stone-500 border-t-white rounded-full animate-spin mx-auto mb-12"></div>
                        <h2 className="text-3xl font-black mb-6">문서를 불러오는 중입니다</h2>
                        <p className="text-stone-400 font-bold mb-12 break-keep">
                            당신의 새로운 도전을 응원합니다! <br />
                            잠시 후 다운로드가 시작됩니다. ({counter}초)
                        </p>
                        <div className="p-10 bg-stone-900 rounded-[3rem] border border-stone-800 shadow-2xl relative overflow-hidden">
                            <p className="text-[10px] text-stone-600 mb-6 uppercase tracking-[0.4em] font-black">Advertisement</p>
                            <div className="w-full h-40 bg-stone-800/40 rounded-3xl flex items-center justify-center border border-stone-700/50 italic text-stone-600 font-bold">
                                Ad Slot
                            </div>
                        </div>
                        
                        <button 
                            onClick={() => setShowInterstitial(false)}
                            className="mt-12 text-stone-600 font-bold hover:text-stone-400 transition-colors py-2 px-8 rounded-full border border-stone-800"
                        >
                            닫기 (Skip)
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
