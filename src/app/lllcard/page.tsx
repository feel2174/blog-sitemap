import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import CoupangAds from '@/components/CoupangAds';

export const metadata: Metadata = {
    title: '평생교육이용권 누리집 바로가기 및 신청 안내 | 연 35만원 지원',
    description: '평생교육이용권 공식 홈페이지(lllcard.kr) 바로가기와 바우처 신청 방법, 사용처 확인 안내입니다. 연간 35만원의 교육비 지원으로 배움의 기회를 넓히세요.',
    keywords: ['평생교육이용권', 'lllcard', '평생교육바우처', '평생교육이용권신청', '바우처사용처', '교육비지원', '자기계발'],
};

export default function LLLCardLandingPage() {
    return (
        <div 
            className="min-h-screen bg-[#F8FAFC] text-[#1E293B] selection:bg-blue-100"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            <main className="pb-20">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 pt-32 pb-40 px-4 overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400 opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-400 opacity-10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
                        <div className="mb-8 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl animate-bounce">
                            <span className="text-5xl">🎓</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                            평생교육이용권<br />
                            <span className="text-blue-300">누리집 바로가기</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100/90 font-medium max-w-2xl mx-auto break-keep leading-relaxed">
                            연간 35만원의 바우처로 배우고 싶었던 모든 것을 시작하세요.<br />
                            자격증부터 취미까지, 평생교육이 당신의 꿈을 지원합니다.
                        </p>
                    </div>
                </div>

                {/* Content Area */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-24 relative z-20">
                    
                    {/* Primary Actions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        
                        {/* Official Website */}
                        <Link
                            href="https://www.lllcard.kr/main/main/mainView.do"
                            className="group bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-2xl border border-blue-50 hover:border-blue-500 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center text-white text-4xl mb-6 shadow-xl group-hover:rotate-6 transition-transform">
                                    🏛️
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-3">누리집(홈페이지)</h3>
                                <p className="text-slate-500 font-medium mb-8 break-keep">
                                    평생교육이용권 공식 홈페이지로 이동하여<br />공지사항 확인 및 신청을 진행하세요.
                                </p>
                                <span className="inline-flex items-center gap-2 font-bold text-blue-600 group-hover:underline text-lg">
                                    lllcard.kr 바로가기
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                            </div>
                        </Link>

                        {/* Search Usage */}
                        <Link
                            href="https://www.lllcard.kr/voucher/useInstSearch.do"
                            className="group bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-2xl border border-blue-50 hover:border-indigo-500 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-24 h-24 bg-indigo-600 rounded-3xl flex items-center justify-center text-white text-4xl mb-6 shadow-xl group-hover:scale-110 transition-transform">
                                    🔍
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-3">사용처(기관) 찾기</h3>
                                <p className="text-slate-500 font-medium mb-8 break-keep">
                                    내 주변 또는 온라인에서 바우처를<br />사용할 수 있는 교육기관을 검색해보세요.
                                </p>
                                <span className="inline-flex items-center gap-2 font-bold text-indigo-600 group-hover:underline text-lg">
                                    사용처 검색하기
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Info Card */}
                    <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-blue-50 mb-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 flex items-center gap-4">
                                <span className="text-blue-600">💡</span> 평생교육이용권 핵심 요약
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-blue-600 text-lg mb-2">지원 대상</h4>
                                        <p className="text-slate-600 font-medium leading-relaxed">
                                            만 19세 이상 성인 중 기초생활수급자, 차상위계층, 기준 중위소득 65% 이하인 가구의 구성원
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-blue-600 text-lg mb-2">지원 내용</h4>
                                        <p className="text-slate-600 font-medium leading-relaxed">
                                            1인당 연간 35만원의 평생교육 바우처 지급 (우수 이용자의 경우 재충전 지원)
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-blue-600 text-lg mb-2">사용 범위</h4>
                                        <p className="text-slate-600 font-medium leading-relaxed">
                                            평생교육바우처 사용기관으로 등록된 기관의 수강료 및 해당 강좌의 교재비
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-blue-600 text-lg mb-2">신청 기간</h4>
                                        <p className="text-slate-600 font-medium leading-relaxed">
                                            매년 초 별도 공고 (공식 홈페이지의 공지사항을 반드시 확인하세요)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coupang Ads Section */}
                    <CoupangAds 
                        keyword="태블릿 PC" 
                        title="💻 효율적인 학습을 위한 자기계발 필수템"
                        hookText="강의 시청부터 필기까지, 평생교육이용권과 함께 사용하면 좋은 가성비 태블릿과 교재들을 만나보세요."
                    />

                </div>
            </main>

            {/* Footer */}
            <footer className="py-16 bg-slate-50 border-t border-slate-200 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-slate-400 text-sm font-bold tracking-widest uppercase mb-4">
                        © 2026 EDUCATION INFO CENTER. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-slate-400 text-xs leading-relaxed max-w-2xl mx-auto font-medium">
                        본 서비스는 사용자들의 편의를 위해 평생교육이용권 정보를 정리하여 제공하는 독립적인 안내 페이지입니다. <br className="hidden md:block" />
                        정확한 신청 및 문의는 반드시 평생교육이용권 상담센터(1600-3005) 또는 공식 홈페이지를 이용해 주시기 바랍니다.
                    </p>
                </div>
            </footer>
        </div>
    );
}
