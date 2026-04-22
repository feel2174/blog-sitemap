import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import CoupangAds from '@/components/CoupangAds';

export const metadata: Metadata = {
    title: '일본 여행 필수 네비게이션 앱 추천 | 구글맵 & 야후네비 이용 가이드',
    description: '일본 여행에서 길을 잃지 않는 법! 실시간 길찾기에 최적화된 구글맵과 일본 현지인들이 애용하는 야후네비(Yahoo Navi) 다운로드 및 이용 팁을 확인하세요.',
    keywords: ['일본여행', '일본네비게이션', '일본길찾기', '구글맵일본', '야후네비', '일본렌터카네비', '일본여행앱추천', '도쿄길찾기', '오사카길찾기'],
};

export default function JapanNavigationPage() {
    return (
        <div 
            className="min-h-screen bg-[#F9FAFB] text-[#111827] selection:bg-red-100"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            <main className="pb-20">
                {/* Hero Section */}
                <div className="relative bg-white pt-24 pb-32 px-4 overflow-hidden border-b border-gray-100">
                    {/* Minimalist Japanese Flag Inspired Element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-50 opacity-40 rounded-full blur-3xl"></div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-bold mb-8">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                            JAPAN TRAVEL ESSENTIAL
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                            일본 여행의 나침반<br />
                            <span className="text-red-600">스마트 네비게이션</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto break-keep leading-relaxed">
                            복잡한 도심부터 한적한 시골길까지,<br />
                            가장 정확한 경로를 안내하는 두 가지 필수 앱을 소개합니다.
                        </p>
                    </div>
                </div>

                {/* Content Area */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-12 relative z-20">
                    
                    {/* Primary Actions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        
                        {/* Google Maps */}
                        <Link
                            href="https://www.google.co.kr/maps/?entry=ttu"
                            className="group bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-xl border border-gray-100 hover:border-blue-500 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform border border-gray-50">
                                    <span className="text-4xl">🗺️</span>
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-3">구글맵 (Google Maps)</h3>
                                <p className="text-gray-500 font-medium mb-8 break-keep">
                                    전 세계 공통 필수 앱!<br />대중교통, 도보 길찾기에 최적화
                                </p>
                                <span className="inline-flex items-center gap-2 font-bold text-blue-600 group-hover:underline">
                                    실시간 길찾기 시작
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                            </div>
                        </Link>

                        {/* Yahoo Navi */}
                        <Link
                            href="https://play.google.com/store/apps/details?id=jp.co.yahoo.android.apps.navi&hl=ko"
                            className="group bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-xl border border-gray-100 hover:border-red-500 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform border border-gray-50">
                                    <span className="text-4xl">🚗</span>
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-3">야후네비 (Yahoo! Navi)</h3>
                                <p className="text-gray-500 font-medium mb-8 break-keep">
                                    일본 현지인 선호도 1위!<br />차량 운전 및 렌터카 이용 시 강력 추천
                                </p>
                                <span className="inline-flex items-center gap-2 font-bold text-red-600 group-hover:underline">
                                    Android 앱 설치하기
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Pro Tips */}
                    <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 text-white mb-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 blur-[80px] rounded-full"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-black mb-8">💡 일본 여행 길찾기 꿀팁</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="text-red-400 font-bold text-lg">구글맵 활용법</h4>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        일본 지하철은 노선이 매우 복잡합니다. 구글맵의 &apos;출입구 번호&apos; 안내와 &apos;빠른 환승 칸&apos; 정보를 활용하면 시간을 획기적으로 단축할 수 있습니다.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-red-400 font-bold text-lg">야후네비 장점</h4>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        렌터카 여행 시 구글맵보다 도로 상황(정체, 사고) 반영이 빠르고, 주차장 빈자리 정보까지 제공하여 현지인들이 더 선호하는 앱입니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coupang Ads Section */}
                    <CoupangAds 
                        keyword="일본 유심" 
                        title="📶 끊김 없는 여행을 위한 데이터 준비"
                        hookText="지도를 보려면 빵빵한 데이터는 필수! 일본 전역에서 잘 터지는 1위 유심과 포켓 와이파이, 그리고 필수 보조배터리 리스트를 확인하세요."
                    />

                </div>
            </main>

            {/* Footer */}
            <footer className="py-12 bg-white border-t border-gray-100 text-center">
                <p className="text-gray-400 text-sm font-bold tracking-widest uppercase">
                    © 2026 JAPAN NAVI GUIDE. ALL RIGHTS RESERVED.
                </p>
                <p className="text-gray-300 text-xs mt-2 font-medium">
                    본 페이지는 여행자들의 편의를 위해 정보를 정리한 안내 페이지입니다.
                </p>
            </footer>
        </div>
    );
}
