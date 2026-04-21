import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import CoupangAds from '@/components/CoupangAds';

export const metadata: Metadata = {
    title: '스타벅스(Starbucks) 공식 앱 다운로드 및 카드 잔액조회 안내',
    description: '스타벅스 공식 앱(안드로이드, iOS) 다운로드와 홈페이지 바로가기를 통해 카드 충전, 잔액 조회, 사이렌 오더 서비스를 편리하게 이용하세요.',
    keywords: ['스타벅스', 'Starbucks', '스타벅스앱', '스타벅스다운로드', '스타벅스잔액조회', '사이렌오더', '스타벅스카드'],
};

export default function StarbucksLandingPage() {
    return (
        <div 
            className="min-h-screen bg-[#F4F1EA] text-[#1E1E1E] selection:bg-[#00704A]/20"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            <main className="pb-20">
                {/* Hero Section */}
                <div className="relative bg-[#00704A] pt-32 pb-40 px-4 overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#D4AD68] opacity-10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
                        <div className="mb-8 p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-bounce">
                            <span className="text-5xl">☕</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-sm">
                            STARBUCKS<br />
                            <span className="text-[#D4AD68]">COFFEEKOREA</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-emerald-50/80 font-medium max-w-2xl mx-auto break-keep leading-relaxed italic">
                            일상의 사소한 순간도 스타벅스와 함께라면 특별해집니다.<br />
                            사이렌 오더부터 리워드 혜택까지 앱으로 더 편리하게 즐겨보세요.
                        </p>
                    </div>
                </div>

                {/* Content Area */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-24 relative z-20">
                    
                    {/* Primary Actions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        
                        {/* Homepage / Balance Inquiry */}
                        <Link
                            href="https://www.starbucks.co.kr/index.do"
                            className="group bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-xl border border-neutral-100 hover:border-[#00704A] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-neutral-50 lg:opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-[#00704A] rounded-3xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg group-hover:rotate-6 transition-transform">
                                    💳
                                </div>
                                <h3 className="text-2xl font-black text-neutral-900 mb-2">잔액 조회 및 관리</h3>
                                <p className="text-neutral-500 font-medium mb-8 break-keep">
                                    홈페이지 바로가기를 통해 스타벅스 카드 잔액 확인 및 충전이 가능합니다.
                                </p>
                                <span className="inline-flex items-center gap-2 font-bold text-[#00704A] group-hover:underline">
                                    공식 홈페이지 방문
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                            </div>
                        </Link>

                        {/* Android Download */}
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.starbucks.co&hl=ko"
                            className="group bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-xl border border-neutral-100 hover:border-[#3DDC84] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-[#3DDC84] rounded-3xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                    🤖
                                </div>
                                <h3 className="text-2xl font-black text-neutral-900 mb-2">Android 앱 설치</h3>
                                <p className="text-neutral-500 font-medium mb-8 break-keep">
                                    안드로이드 기기 사용자를 위한<br />구글 플레이 스토어 다운로드
                                </p>
                                <span className="inline-flex items-center gap-2 font-bold text-[#3DDC84] group-hover:underline">
                                    Google Play 바로가기
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                            </div>
                        </Link>

                        {/* iOS Download */}
                        <Link
                            href="https://apps.apple.com/kr/app/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4/id466682252"
                            className="group bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-xl border border-neutral-100 hover:border-[#1E1E1E] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-[#1E1E1E] rounded-3xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                    🍎
                                </div>
                                <h3 className="text-2xl font-black text-neutral-900 mb-2">iOS 앱 설치</h3>
                                <p className="text-neutral-500 font-medium mb-8 break-keep">
                                    아이폰 사용자를 위한<br />애플 앱 스토어 다운로드
                                </p>
                                <span className="inline-flex items-center gap-2 font-bold text-neutral-800 group-hover:underline">
                                    App Store 바로가기
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Features Banner */}
                    <div className="bg-[#00704A] rounded-[3rem] p-8 md:p-16 text-white mb-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[60px] rounded-full"></div>
                        <div className="relative z-10 flex-1">
                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                                사이렌 오더로<br />기다림 없이 즐기세요
                            </h2>
                            <ul className="space-y-4 text-emerald-50/80 font-medium text-lg">
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 bg-[#D4AD68] rounded-full flex items-center justify-center text-xs text-[#00704A] font-bold">✓</span>
                                    나만의 고유한 커스텀 메뉴 구성
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 bg-[#D4AD68] rounded-full flex items-center justify-center text-xs text-[#00704A] font-bold">✓</span>
                                    매장 도착 전 미리 주문하고 픽업
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 bg-[#D4AD68] rounded-full flex items-center justify-center text-xs text-[#00704A] font-bold">✓</span>
                                    적립된 별로 무료 음료 쿠폰 획득
                                </li>
                            </ul>
                        </div>
                        <div className="relative z-10 shrink-0 transform hover:scale-105 transition-transform duration-500">
                            <div className="w-48 h-48 bg-white/10 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <span className="text-7xl">🥨</span>
                            </div>
                        </div>
                    </div>

                    {/* Coupang Ads Section */}
                    <CoupangAds 
                        keyword="스타벅스 텀블러" 
                        title="💚 집에서도 스타벅스 무드 그대로"
                        hookText="매니아들이 사랑하는 한정판 스타벅스 텀블러와 머그, 그리고 풍부한 향의 커피 캡슐 특가 리스트를 확인해 보세요."
                    />

                </div>
            </main>

            {/* Footer */}
            <footer className="py-12 border-t border-neutral-200 text-center">
                <p className="text-neutral-400 text-sm font-bold tracking-widest uppercase">
                    © 2026 STARBUCKS INFO HUB. ALL RIGHTS RESERVED.
                </p>
                <p className="text-neutral-300 text-xs mt-2 font-medium">
                    본 페이지는 편의를 돕기 위한 보조 안내 페이지이며, 모든 서비스는 공식 채널을 통해 이루어집니다.
                </p>
            </footer>
        </div>
    );
}
