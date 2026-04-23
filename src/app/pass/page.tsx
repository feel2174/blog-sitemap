import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import CoupangAds from '@/components/CoupangAds';

export const metadata: Metadata = {
    title: 'PASS 본인인증 앱 다운로드 및 안내 | SKT, KT, U+ 통신사별 바로가기',
    description: 'PASS 앱을 통해 간편하고 안전하게 본인인증을 진행하세요. SKT, KT, LG U+ 각 통신사별 PASS 앱 다운로드 링크와 주요 기능(모바일 신분증, 인증서) 이용 방법을 안내해 드립니다.',
    keywords: ['PASS', 'PASS앱', 'PASS본인인증', 'SKTPASS', 'KTPASS', 'U+PASS', '간편인증', '모바일신분증', 'PASS인증서', '본인확인'],
};

export default function PassLandingPage() {
    return (
        <div
            className="min-h-screen bg-[#F8FAFC] text-[#1E293B] selection:bg-blue-100"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            <main className="pb-10">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-br from-[#0064FF] via-[#00A3FF] to-[#00D1FF] pt-12 pb-48 px-4 overflow-hidden">
                    {/* Background Image */}
                    <div 
                        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center mix-blend-overlay"
                        style={{ backgroundImage: 'url("/pass-bg.png")' }}
                    ></div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-200 opacity-20 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>

                    <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-bold mb-8 border border-white/30">
                            <span className="animate-ping w-2 h-2 rounded-full bg-white"></span>
                            국민 인증 앱 PASS 통합 안내
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                            더 빠르고 안전하게,<br />
                            <span className="text-blue-50">PASS 본인인증</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-50 font-medium max-w-2xl mx-auto break-keep leading-relaxed opacity-95">
                            복잡한 인증 절차 없이 지문이나 비밀번호로 간편하게.<br />
                            모바일 신분증부터 인증서까지 PASS 하나로 해결하세요.
                        </p>
                    </div>
                </div>

                {/* Content Area */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-28 relative z-20">
                    
                    {/* Carrier Selection Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        
                        {/* SKT PASS */}
                        <Link
                            href="https://www.sktpass.com/"
                            className="group bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-[0_20px_50px_-12px_rgba(0,100,255,0.15)] border border-slate-100 hover:border-red-400 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-red-500 rounded-3xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                    SKT
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">SKT PASS</h3>
                                <p className="text-slate-500 font-medium mb-8 break-keep text-sm">
                                    SK텔레콤 사용자 전용<br />간편인증 및 금융 서비스
                                </p>
                                <span className="inline-flex items-center gap-2 font-bold text-red-600 group-hover:underline">
                                    다운로드 바로가기
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </span>
                            </div>
                        </Link>

                        {/* KT PASS */}
                        <Link
                            href="https://fido.kt.com/ktauthIntro"
                            className="group bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-[0_20px_50px_-12px_rgba(0,100,255,0.15)] border border-slate-100 hover:border-cyan-500 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-cyan-500 rounded-3xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                    KT
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">KT PASS</h3>
                                <p className="text-slate-500 font-medium mb-8 break-keep text-sm">
                                    KT 및 알뜰폰(KT망) 사용자용<br />간편인증 및 신분증 기능
                                </p>
                                <span className="inline-flex items-center gap-2 font-bold text-cyan-600 group-hover:underline">
                                    다운로드 바로가기
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </span>
                            </div>
                        </Link>

                        {/* U+ PASS */}
                        <Link
                            href="https://passvas.uplus.co.kr/"
                            className="group bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-[0_20px_50px_-12px_rgba(0,100,255,0.15)] border border-slate-100 hover:border-pink-500 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-pink-500 rounded-3xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                    U+
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">LG U+ PASS</h3>
                                <p className="text-slate-500 font-medium mb-8 break-keep text-sm">
                                    LG U+ 및 알뜰폰 사용자용<br />통합 본인인증 서비스
                                </p>
                                <span className="inline-flex items-center gap-2 font-bold text-pink-600 group-hover:underline">
                                    다운로드 바로가기
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Features Info Section */}
                    <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-slate-100 mb-16">
                        <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">PASS 앱의 주요 기능</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl">🆔</div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">모바일 신분증</h4>
                                    <p className="text-slate-600 leading-relaxed break-keep">
                                        운전면허증, 주민등록증을 PASS 앱에 등록하여 실물 없이도 간편하게 본인 확인이 가능합니다.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl">📜</div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">PASS 인증서</h4>
                                    <p className="text-slate-600 leading-relaxed break-keep">
                                        국세청 홈택스, 정부24 등 공공기관 로그인 시 공인인증서 대신 안전하게 사용할 수 있습니다.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl">💳</div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">PASS 머니 & 금융</h4>
                                    <p className="text-slate-600 leading-relaxed break-keep">
                                        신용 점수 관리, 금융 자산 통합 조회, PASS 머니 적립 등 다양한 스마트 금융 혜택을 제공합니다.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl">🛡️</div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">보안 및 안심 서비스</h4>
                                    <p className="text-slate-600 leading-relaxed break-keep">
                                        명의도용 방지, 스팸 차단 등 강력한 보안 기능으로 사용자의 소중한 개인정보를 보호합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coupang Ads Section */}
                    <CoupangAds
                        keyword="스마트폰 거치대"
                        title="📱 모바일 생활을 더 편하게 해줄 추천 아이템"
                        hookText="PASS 앱을 더 스마트하게 사용할 수 있는 최신 스마트폰 액세서리와 고속 충전기 리스트를 지금 확인해보세요."
                    />

                </div>
            </main>

            {/* Footer */}
            <footer className="py-20 bg-slate-100 border-t border-slate-200 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-slate-400 text-sm font-black tracking-widest uppercase mb-4">
                        © 2026 PASS INFO HUB. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-slate-400 text-xs leading-relaxed max-w-2xl mx-auto font-medium">
                        본 페이지는 PASS 앱 이용 정보를 알기 쉽게 정리하여 제공하는 독립 가이드 페이지입니다.<br />
                        앱 설치 및 구체적인 이용 문의는 가입하신 통신사(SKT, KT, LG U+) 고객센터를 통해 확인하시기 바랍니다.
                    </p>
                </div>
            </footer>
        </div>
    );
}
