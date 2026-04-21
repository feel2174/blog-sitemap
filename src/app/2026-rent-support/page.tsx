import Link from 'next/link';
import React from 'react';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '2026 청년월세지원 신청방법 및 지원조건 안내',
    description: '2026년 청년월세지원 사업의 신청 방법, 지원 조건, 중위소득 기준 등 핵심 정보를 확인하세요. 복지로 신청 서비스 및 중위소득 확인 도구를 제공합니다.',
};

export default function YouthRentSupportPage() {
    return (
        <div 
            className="min-h-screen bg-[#f8fafc] text-[#1e293b] flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden font-sans"
            style={{ 
                fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                background: 'radial-gradient(circle at top right, #e2e8f0, #f8fafc), radial-gradient(circle at bottom left, #dbeafe, #f8fafc)'
            }}
        >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <div 
                    className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100 blur-[120px]"
                />
                <div 
                    className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-50 blur-[120px]"
                />
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-2xl">
                
                {/* Header Section */}
                <div className="text-center mb-12 animate-in fade-in slide-in-from-top duration-1000">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 backdrop-blur-md border border-blue-200 text-blue-700 text-sm font-bold tracking-tight mb-6">
                        2026 HOUSE WITH YOUTH
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight text-slate-900">
                        2026 <span className="text-blue-600">청년월세지원</span> <br />
                        신청안내 서비스
                    </h1>
                    
                    <p className="text-slate-500 text-lg md:text-xl font-medium max-w-lg mx-auto">
                        경제적 어려움을 겪는 청년들의 주거비 부담 경감을 위해 <br className="hidden md:block" />
                        월 최대 20만원을 지원해 드립니다.
                    </p>
                </div>

                {/* Main Action Card */}
                <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50 space-y-8">
                    
                    <div className="space-y-4">
                        <h2 className="text-slate-400 text-xs font-black tracking-[0.2em] uppercase text-center mb-8">QUICK ACCESS</h2>
                        
                        {/* Button 1: 복지로 신청 */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                            <Link 
                                href="https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00004661"
                                className="relative flex items-center justify-between px-6 py-6 md:px-8 md:py-7 rounded-[1.5rem] bg-white border border-slate-100 shadow-sm group-hover:shadow-md group-hover:border-blue-200 transition-all duration-300"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-slate-400 text-xs font-bold mb-1">정부 지원 사업</p>
                                        <p className="text-slate-900 font-extrabold text-xl md:text-2xl tracking-tight">청년월세지원 신청페이지 바로가기</p>
                                    </div>
                                </div>
                                <div className="hidden md:block text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </Link>
                        </div>

                        {/* Button 2: 중위소득 확인 */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                            <Link 
                                href="https://zucca100.com/2026-reference-median-income-table-100-150-200/"
                                className="relative flex items-center justify-between px-6 py-6 md:px-8 md:py-7 rounded-[1.5rem] bg-slate-50/50 border border-slate-100 shadow-sm group-hover:shadow-md group-hover:border-emerald-200 transition-all duration-300"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-slate-400 text-xs font-bold mb-1">기준 중위소득 자격 확인</p>
                                        <p className="text-slate-900 font-extrabold text-xl md:text-2xl tracking-tight">2026 중위소득 확인페이지</p>
                                    </div>
                                </div>
                                <div className="hidden md:block text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Simple Info List */}
                    <div className="pt-8 border-t border-slate-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/50">
                                <div className="text-blue-500 mt-0.5">✨</div>
                                <div>
                                    <p className="text-sm font-bold text-slate-800">지원대상</p>
                                    <p className="text-xs text-slate-500">만 19세~34세 무주택 청년</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/50">
                                <div className="text-blue-500 mt-0.5">💰</div>
                                <div>
                                    <p className="text-sm font-bold text-slate-800">지원내용</p>
                                    <p className="text-xs text-slate-500">월 최대 20만원 (최장 12회)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Disclaimer */}
                <div className="mt-16 text-slate-400 text-sm font-medium z-10 bg-white/50 backdrop-blur-sm py-3 px-8 rounded-full border border-slate-200">
                    <span>⚡ 본 서비스는 서울주거포털 공식 정보로 연결됩니다.</span>
                </div>

                <CoupangAds 
                    keyword="수납 가구" 
                    title="🏠 새집 인테리어의 시작"
                    hookText="이사 예산 아꼈다면, 이제 공간을 예쁘게 채워볼 시간! 좁은 집도 넓게 쓰는 스마트한 수납 가구와 인테리어 소품 특가입니다."
                />

                <p className="mt-12 text-center text-slate-400 text-xs px-8 leading-relaxed">
                    본 정보는 관련 기관의 공고를 바탕으로 작성되었습니다. <br />
                    정확한 자격 조건 및 신청 방법은 반드시 공식 홈페이지(복지로) 공고문을 확인해 주시기 바랍니다.
                </p>

                {/* Decorative House Icon */}
                <div className="mt-12 flex justify-center opacity-20">
                    <div className="relative w-16 h-16 bg-slate-200/50 rounded-full flex items-center justify-center text-3xl">
                        🏠
                    </div>
                </div>
            </div>

            {/* Custom Animations Stylings */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slide-in {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-in {
                    animation: fade-in 0.8s ease-out forwards;
                }
                .slide-in-from-top {
                    animation: slide-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}} />
        </div>
    );
}
