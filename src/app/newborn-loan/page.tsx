import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '신생아 특례대출 1%대 금리 신청 및 조건 비교',
    description: '연봉 1.3억, 무주택 요건, 최저 1%대 금리로 내 집 마련! 신생아 특례대출 조건 확인부터 기금e든든 신청, 신혼부부 디딤돌 대출과의 비교 분석까지 한 곳에서 확인하세요.',
};

export default function NewbornLoanPage() {
    return (
        <div 
            className="min-h-screen bg-[#fafaf9] font-['Pretendard'] text-slate-800"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            <main className="pb-24">
                {/* Hero / Header Section */}
                <div className="bg-gradient-to-b from-[#e0f2fe] to-[#fafaf9] pt-20 pb-16 px-4 relative overflow-hidden">
                    <div className="absolute top-10 right-0 w-[40rem] h-[40rem] bg-amber-200/30 blur-[120px] rounded-full -z-0"></div>
                    <div className="absolute top-10 left-0 w-[40rem] h-[40rem] bg-blue-300/20 blur-[120px] rounded-full -z-0"></div>
                    
                    <div className="max-w-4xl mx-auto relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/60 backdrop-blur-md border border-blue-200 rounded-full text-blue-700 text-sm font-black mb-8 shadow-sm">
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
                            정부지원 최저 금리 주택담보대출
                        </div>
                        
                        <h1 className="text-4xl sm:text-6xl font-black mb-8 leading-[1.2] text-slate-900 tracking-tight">
                            내 집 마련의 혁명, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                신생아 특례대출
                            </span>
                        </h1>
                        
                        <p className="text-lg sm:text-xl text-slate-600 font-bold max-w-2xl mx-auto leading-relaxed break-keep mb-12">
                            연봉 1.3억 부부도 최저 1.x%대 파격적인 금리로 대출을 받을 수 있는 절호의 기회! 무주택 출산 가구라면 지금 바로 혜택을 확인하시고 대출을 신청하세요.
                        </p>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-8 mt-4">
                    
                    {/* Action Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Link 2: Comparison Post */}
                        <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner group-hover:scale-110 transition-transform">
                                ⚖️
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-3">신생아 특례 vs 신혼 디딤돌</h3>
                            <p className="text-slate-500 font-medium leading-relaxed mb-8 break-keep flex-grow">
                                &quot;우리 가족은 어떤 대출이 더 유리할까?&quot; 연봉, 자산 기준, 금리, 대출 한도를 아주 알기 쉽게 비교 분석해 드립니다. <br/><span className="text-amber-600 font-bold">(연봉 1.3억, 1%대 금리 받는 꿀팁 포함!)</span>
                            </p>
                            <Link 
                                href="https://zucca100.com/newborn-special-loan-vs-didimdol-comparison-2026/"
                                className="flex items-center justify-center w-full py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors shadow-md text-lg"
                            >
                                완벽 비교 분석글 보기
                            </Link>
                        </div>

                        {/* Link 1: Official Applicaion (기금e든든) */}
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] p-8 shadow-[0_15px_40px_-10px_rgba(37,99,235,0.4)] flex flex-col group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[30px] rounded-bl-full pointer-events-none"></div>
                            <div className="w-16 h-16 bg-white/20 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform border border-white/30">
                                📝
                            </div>
                            <h3 className="text-2xl font-black text-white mb-3">신생아 특례대출 신청</h3>
                            <p className="text-blue-100 font-medium leading-relaxed mb-8 break-keep flex-grow">
                                주택도시기금(기금e든든) 공식 홈페이지를 통해 간편하게 대출 심사를 신청할 수 있습니다. 자격 심사와 보증 심사 결과를 빠르게 확인해보세요.
                            </p>
                            <Link 
                                href="https://enhuf.molit.go.kr/index.jsp"
                                className="flex items-center justify-center w-full py-4 bg-white/10 hover:bg-white text-white hover:text-blue-700 backdrop-blur-md border border-white/40 font-black rounded-xl transition-all shadow-lg text-lg"
                            >
                                기금e든든 바로가기
                            </Link>
                        </div>

                    </div>

                    {/* Summary Info Section */}
                    <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-md border border-slate-200 mt-12 flex flex-col relative overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-slate-50 rounded-tl-full -z-10"></div>
                        <h4 className="text-xl font-black mb-6 text-slate-800 flex items-center gap-2">
                            <span className="text-blue-500">📌</span> 핵심 조건 한눈에 보기
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm">
                                <span className="text-xs font-bold text-slate-400 block mb-1">대상 가구</span>
                                <strong className="text-slate-800 text-lg block">2년 내 출산(입양)</strong>
                                <span className="text-xs text-slate-500 mt-1 block">23년 1월 1일 이후</span>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm">
                                <span className="text-xs font-bold text-slate-400 block mb-1">소득 기준</span>
                                <strong className="text-slate-800 text-lg block">부부합산 1.3억↓</strong>
                                <span className="text-xs text-slate-500 mt-1 block">순자산 4.69억 이하</span>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm">
                                <span className="text-xs font-bold text-slate-400 block mb-1">대출 한도</span>
                                <strong className="text-blue-600 text-lg block font-black">최대 5억원</strong>
                                <span className="text-xs text-slate-500 mt-1 block">주택가액 9억원 이하</span>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm border-b-4 border-b-indigo-500">
                                <span className="text-xs font-bold text-slate-400 block mb-1">적용 금리</span>
                                <strong className="text-indigo-600 text-lg block font-black">연 1.6% ~ 3.3%</strong>
                                <span className="text-xs text-slate-500 mt-1 block">5년 간 특례 금리</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
            <footer className="text-center py-8 text-slate-400 font-bold border-t border-slate-200 uppercase tracking-widest text-sm relative z-10 w-full bg-[#fafaf9]">
                © 2026 GOVERNMENT HOUSING LOAN GUIDE
            </footer>
        </div>
    );
}
