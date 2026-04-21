import Link from 'next/link';
import React from 'react';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '주요 증권사 비대면 계좌개설 바로가기 모음 (키움, 삼성, 미래에셋 등)',
    description: '키움증권, 메리츠증권, 삼성증권, 미래에셋, 나무증권, 한국투자증권 등 국내 대표 증권사들의 모바일/온라인 비대면 계좌개설 전용 페이지로 빠르게 이동합니다.',
};

export default function StockAccountPage() {
    return (
        <div 
            className="min-h-screen bg-slate-50 font-['Pretendard'] text-slate-900"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            <main className="pb-24">
                {/* Hero / Header Section designed to maximize CTR directly under H1 */}
                <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white pt-20 pb-12 px-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-indigo-500/10 blur-[100px] rounded-full -z-0"></div>
                    <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] bg-blue-500/10 blur-[80px] rounded-full -z-0"></div>
                    
                    <div className="max-w-5xl mx-auto relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-blue-200 text-sm font-bold mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                            비대면 주식 계좌개설 총정리
                        </div>
                        
                        <h1 className="text-4xl sm:text-6xl font-[900] mb-12 flex flex-col gap-4">
                            <span>국내 대표 증권사</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-300">
                                3분 만에 계좌 만들기
                            </span>
                        </h1>
                        
                        {/* ======================================================== */}
                        {/* BUTTON LIST DIRECTLY UNDER H1 TO MAXIMIZE CLICKS         */}
                        {/* ======================================================== */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 sm:p-10 shadow-2xl mx-auto mb-8 max-w-4xl">
                            <div className="text-center mb-8 relative">
                                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg inline-block uppercase tracking-widest">
                                    가입을 원하는 증권사 선택
                                </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                <Link href="https://www3.kiwoom.com/m/newaccount/VNewAccountIntroView" className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#e4005c] to-[#c4004c] text-white rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_30px_-5px_rgba(228,0,92,0.4)] group">
                                    <span className="text-xl font-black mb-1">키움증권</span>
                                    <span className="text-xs text-white/80 font-bold tracking-wider flex items-center">
                                        바로 개설하기
                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                                    </span>
                                </Link>
                                
                                <Link href="https://meritzevent.com/super365/" className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#c90035] to-[#a00020] text-white rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_30px_-5px_rgba(201,0,53,0.4)] group">
                                    <span className="text-xl font-black mb-1">메리츠증권</span>
                                    <span className="text-xs text-white/80 font-bold tracking-wider flex items-center">
                                        슈퍼365 개설하기
                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                                    </span>
                                </Link>
                                
                                <Link href="https://www.onestopsamsungpop.co.kr/?skipSection=stock_main" className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0e44a4] to-[#0a2e73] text-white rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_30px_-5px_rgba(14,68,164,0.4)] group">
                                    <span className="text-xl font-black mb-1">삼성증권</span>
                                    <span className="text-xs text-white/80 font-bold tracking-wider flex items-center">
                                        바로 개설하기
                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                                    </span>
                                </Link>

                                <Link href="https://securities.miraeasset.com/mka/mka1001/n01.do" className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#f27421] to-[#d45c0f] text-white rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_30px_-5px_rgba(242,116,33,0.4)] group">
                                    <span className="text-xl font-black mb-1">미래에셋증권</span>
                                    <span className="text-xs text-white/80 font-bold tracking-wider flex items-center">
                                        바로 개설하기
                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                                    </span>
                                </Link>

                                <Link href="https://www.mynamuhbegin.com/" className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#00b05b] to-[#008f48] text-white rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_30px_-5px_rgba(0,176,91,0.4)] group">
                                    <span className="text-xl font-black mb-1">나무 (NH투자)</span>
                                    <span className="text-xs text-white/80 font-bold tracking-wider flex items-center">
                                        바로 개설하기
                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                                    </span>
                                </Link>

                                <Link href="https://securities.koreainvestment.com/main/A_CO_10004.jsp" className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#102444] to-[#081326] border border-[#00c8f5]/20 text-[#00c8f5] rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_30px_-5px_rgba(0,200,245,0.2)] group">
                                    <span className="text-xl font-black text-white mb-1">한국투자증권</span>
                                    <span className="text-xs text-[#00c8f5]/80 font-bold tracking-wider flex items-center">
                                        뱅키스 개설하기
                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Information Section Below buttons */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-12 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-10 shadow-xl border border-white flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                                📱
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-4">준비물 확인</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                비대면 계좌개설을 위해 <strong className="text-slate-800">신분증</strong>(주민등록증 또는 운전면허증)과 본인 확인을 위한 <strong className="text-slate-800">명확한 타행 계좌</strong>를 미리 준비해 주세요.
                            </p>
                        </div>
                        <div className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-10 shadow-xl border border-white flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                                🎁
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-4">신규 가입 혜택</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                각 증권사별로 첫 가입 시 <strong className="text-slate-800">수수료 우대</strong> 및 <strong className="text-slate-800">초기 투자 지원금</strong> 등 풍성한 웰컴 이벤트를 반드시 확인하고 챙기시길 바랍니다.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            
            <CoupangAds 
                keyword="주식 투자 도서" 
                title="📈 성공적인 투자의 시작"
                hookText="계좌 개설하고 이제 무엇을 사야 할지 고민되시나요? 기초부터 실전 매매 기법까지 담은 전문가들의 주식 투자 필독서 리스트입니다."
            />
            
            <footer className="text-center py-10 text-slate-400 font-bold border-t border-slate-200 uppercase tracking-widest text-sm bg-white">
                © 2026 FINANCE ACCOUNT OPENING HUB
            </footer>
        </div>
    );
}
