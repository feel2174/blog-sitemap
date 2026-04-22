import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import CoupangAds from '@/components/CoupangAds';

export const metadata: Metadata = {
    title: '전국푸드뱅크 및 경기 그냥드림 코너 안내 | 나눔 신청 및 기부 방법',
    description: '결식 아동, 독거 노인 등 취약계층을 위한 전국푸드뱅크와 경기 그냥드림 코너 이용 방법 및 식품 기부 안내입니다. 소중한 나눔이 실현되는 푸드뱅크의 신청 절차를 확인하세요.',
    keywords: ['푸드뱅크', '전국푸드뱅크', '그냥드림', '그냥드림코너', '식품나눔', '기부신청', '복지지원', '결식예방', '사회복지협의회'],
};

export default function FoodbankLandingPage() {
    return (
        <div
            className="min-h-screen bg-[#FFFBEB] text-[#422006] selection:bg-orange-200"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            <main className="pb-10">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-600 pt-8 pb-44 px-4 overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-200 opacity-20 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>

                    <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">

                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-md">
                            전국푸드뱅크 &<br />
                            <span className="text-amber-100">그냥드림 지원사업</span>
                        </h1>
                        <p className="text-lg md:text-xl text-amber-50 font-medium max-w-2xl mx-auto break-keep leading-relaxed opacity-95">
                            남는 식품은 나누고, 부족한 이웃은 채우는 행복한 나눔.<br />
                            모두가 함께하는 따뜻한 세상을 위해 푸드뱅크가 함께합니다.
                        </p>
                    </div>
                </div>

                {/* Content Area */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-24 relative z-20">

                    {/* Primary Actions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

                        {/* Foodbank Official */}
                        <Link
                            href="https://www.foodbank1377.org/"
                            className="group bg-white rounded-[3rem] p-12 flex flex-col items-center text-center shadow-[0_30px_70px_-15px_rgba(245,158,11,0.1)] border border-amber-50 hover:border-amber-400 transition-all duration-700 hover:-translate-y-3 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-24 h-24 bg-amber-500 rounded-[2.5rem] flex items-center justify-center text-white text-4xl mb-8 shadow-2xl group-hover:rotate-12 transition-transform">
                                    🏛️
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">전국푸드뱅크 홈페이지</h3>
                                <p className="text-slate-500 font-semibold mb-10 break-keep text-lg leading-relaxed">
                                    식품 및 생활용품 기부 안내,<br />이용 신청 방법 확인
                                </p>
                                <span className="inline-flex items-center gap-3 font-black text-amber-600 group-hover:underline text-xl">
                                    공식 홈페이지 방문
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </span>
                            </div>
                        </Link>

                        {/* Foodbank Map */}
                        <Link
                            href="https://www.foodbank1377.org/introduce/foodbankMap.do?gngvType=Y"
                            className="group bg-white rounded-[3rem] p-12 flex flex-col items-center text-center shadow-[0_30px_70px_-15px_rgba(245,158,11,0.12)] border border-amber-50 hover:border-orange-500 transition-all duration-700 hover:-translate-y-3 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-24 h-24 bg-orange-500 rounded-[2.5rem] flex items-center justify-center text-white text-4xl mb-8 shadow-2xl group-hover:scale-110 transition-transform">
                                    📍
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">내 주변 푸드뱅크 찾기</h3>
                                <p className="text-slate-500 font-semibold mb-10 break-keep text-lg leading-relaxed">
                                    전국 지점의 상세 위치와<br />연락처를 지도로 확인하세요.
                                </p>
                                <span className="inline-flex items-center gap-3 font-black text-orange-600 group-hover:underline text-xl">
                                    푸드뱅크 지도 보기
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </span>
                            </div>
                        </Link>
                    </div>


                    {/* Coupang Ads Section */}
                    <CoupangAds
                        keyword="간편식 세트"
                        title="🍚 든든한 한 끼를 위한 영양 가득 추천 상품"
                        hookText="간편하게 챙겨 먹을 수 있는 고퀄리티 밀키트와 상온 보관이 가능한 든든한 즉석 국/탕 세트 리스트를 확인해보세요."
                    />

                </div>
            </main>

            {/* Footer */}
            <footer className="py-20 bg-amber-50/50 border-t border-amber-100 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-amber-300 text-sm font-black tracking-widest uppercase mb-4">
                        © 2026 FOODBANK & GIVING INFO HUB. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-amber-300 text-xs leading-relaxed max-w-2xl mx-auto font-medium">
                        본 페이지는 전국푸드뱅크 및 그냥드림사업 정보를 알기 쉽게 정리하여 제공하는 독립 가이드 페이지입니다.<br />
                        정확한 이용 자격 및 기부 절차는 반드시 전국푸드뱅크 공식 홈페이지(foodbank1377.org)를 통해 확인하시기 바랍니다.
                    </p>
                </div>
            </footer>
        </div>
    );
}
