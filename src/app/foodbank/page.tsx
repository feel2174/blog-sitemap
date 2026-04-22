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
            <main className="pb-20">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-600 pt-32 pb-44 px-4 overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-200 opacity-20 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
                        <div className="mb-8 p-5 bg-white/20 backdrop-blur-xl rounded-[2.5rem] border border-white/30 shadow-2xl">
                            <span className="text-5xl">🧡</span>
                        </div>
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
                            className="group bg-white rounded-[3rem] p-10 flex flex-col items-center text-center shadow-[0_30px_70px_-15px_rgba(245,158,11,0.1)] border border-amber-50 hover:border-amber-400 transition-all duration-700 hover:-translate-y-3 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-24 h-24 bg-amber-500 rounded-[2rem] flex items-center justify-center text-white text-4xl mb-8 shadow-2xl group-hover:rotate-12 transition-transform">
                                    🏛️
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">전국푸드뱅크 홈페이지</h3>
                                <p className="text-slate-500 font-semibold mb-10 break-keep text-lg leading-relaxed">
                                    식품 및 생활용품 기부 안내,<br />전국 지점 위치 및 이용 신청 안내
                                </p>
                                <span className="inline-flex items-center gap-3 font-black text-amber-600 group-hover:underline text-xl">
                                    공식 홈페이지 방문하기
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                            </div>
                        </Link>

                        {/* Gyeonggi Just Give */}
                        <div
                            className="group bg-white rounded-[3rem] p-10 flex flex-col items-center text-center shadow-[0_30px_70px_-15px_rgba(245,158,11,0.08)] border border-amber-50 relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="w-24 h-24 bg-amber-100 rounded-[2rem] flex items-center justify-center text-amber-600 text-4xl mb-8 shadow-inner">
                                    📦
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">경기 그냥드림 코너</h3>
                                <p className="text-slate-500 font-semibold mb-10 break-keep text-lg leading-relaxed">
                                    생활이 어려운 도민이라면<br />누구나 식품과 생필품을 지원받을 수 있는<br />긴급 나눔 공간입니다.
                                </p>
                                <div className="text-amber-500 font-bold text-sm bg-amber-50 px-6 py-2 rounded-full">
                                    대표번호: 1377 (전국 동일)
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Information Section */}
                    <div className="bg-white rounded-[3.5rem] p-10 md:p-16 shadow-2xl border border-amber-50 mb-16 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-amber-400"></div>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 tracking-tight">서비스 이용 및 기부 안내</h2>
                        
                        <div className="space-y-12">
                            <section>
                                <h4 className="flex items-center gap-3 text-xl font-black text-amber-600 mb-4">
                                    <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-sm">1</span>
                                    푸드뱅크란?
                                </h4>
                                <p className="text-slate-600 font-medium text-lg ml-11 leading-relaxed break-keep">
                                    기업이나 개인으로부터 식품 및 생활용품을 기부받아 결식 아동, 독거 노인, 장애인 등 우리 사회의 소외계층에게 무상으로 전달하는 <strong>'식품 나눔 네트워크'</strong>입니다.
                                </p>
                            </section>

                            <section>
                                <h4 className="flex items-center gap-3 text-xl font-black text-amber-600 mb-4">
                                    <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-sm">2</span>
                                    이용 대상 및 방법
                                </h4>
                                <div className="bg-amber-50/50 p-8 rounded-[2rem] text-slate-600 font-medium text-lg ml-11 leading-relaxed">
                                    <ul className="space-y-2">
                                        <li><strong>• 개인:</strong> 긴급 지원이 필요한 차상위계층, 기초생활수급자 등 (거주지 인근 푸드뱅크 방문 상담 필요)</li>
                                        <li><strong>• 시설:</strong> 사회복지시설, 아동복지시설 등 나눔이 필요한 복지 단체</li>
                                        <li><strong>• 신청:</strong> 전국 어디서나 ☎ 1377로 전화하면 인근 푸드뱅크로 연결됩니다.</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h4 className="flex items-center gap-3 text-xl font-black text-amber-600 mb-4">
                                    <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-sm">3</span>
                                    기부 참여 안내
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-11">
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="font-bold text-slate-900 mb-2">🍞 기부 가능 품목</div>
                                        <p className="text-slate-500 text-sm">가공식품, 신선식품, 식재료, 생활용품 등 (유통기한 확인 필수)</p>
                                    </div>
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="font-bold text-slate-900 mb-2">💎 기부 혜택</div>
                                        <p className="text-slate-500 text-sm">기부하신 물품에 대해 법정기부금 영수증 발행 및 세제 혜택 제공</p>
                                    </div>
                                </div>
                            </section>
                        </div>
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
