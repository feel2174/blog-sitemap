import Link from 'next/link';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoupangAds from '@/components/CoupangAds';

export default function BurgerKingPage() {
    return (
        <div className="min-h-screen bg-[#FDFDFD] font-['Pretendard']">
            <Header />
            
            <main className="pb-20">
                {/* Hero Section */}
                <div className="relative bg-[#512314] pt-24 pb-48 px-4 overflow-hidden">
                    <div 
                        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
                        style={{ backgroundImage: 'url("/burgerking-bg.png")' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#512314]/80 via-[#512314]/50 to-[#512314] z-[1]"></div>

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <span className="inline-block px-5 py-2 bg-[#F2A900] text-[#512314] rounded-full text-sm font-black mb-8 shadow-xl">
                            🔥 FLAME GRILLED SINCE 1954
                        </span>
                        <h1 className="text-4xl sm:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight break-keep">
                            버거킹 <span className="text-[#F2A900]">멤버십 & 쿠폰</span><br />
                            한눈에 확인하기
                        </h1>
                        <p className="text-white font-bold text-lg sm:text-2xl max-w-2xl mx-auto break-keep leading-relaxed opacity-90">
                            직화로 구운 리얼 와퍼의 맛! 버거킹 앱 전용 쿠폰으로<br className="hidden sm:block" />
                            가장 똑똑하고 맛있게 즐기는 방법을 안내해 드립니다.
                        </p>
                    </div>
                </div>

                {/* App Promotion Section (CTA at the top) */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-32 relative z-20 mb-16">
                    <div className="bg-[#ED7824] rounded-[3.5rem] p-10 md:p-20 text-white shadow-3xl relative overflow-hidden border-4 border-[#F2A900]">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full opacity-10 translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
                        
                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                            <div className="flex-1 text-center lg:text-left">
                                <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                                    지금 바로 앱 다운로드하고<br />
                                    <span className="text-[#512314]">무료/할인 쿠폰</span> 받으세요!
                                </h2>
                                <p className="text-white text-lg mb-12 font-bold break-keep opacity-90">
                                    버거킹 공식 앱을 설치하시면 매주 업데이트되는 다양한 할인 쿠폰과 멤버십 등급별 특별한 혜택을 즉시 누리실 수 있습니다.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link 
                                        href="https://play.google.com/store/apps/details?id=com.obms.burgerking"
                                        target="_blank"
                                        className="bg-[#512314] text-white px-8 py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-[#3d1a0f] transition-all shadow-xl"
                                    >
                                        <span className="text-2xl">🤖</span> 구글 플레이스토어
                                    </Link>
                                    <Link 
                                        href="https://apps.apple.com/kr/app/%EB%B2%A4%EA%B1%B0%ED%82%B9/id1112450370"
                                        target="_blank"
                                        className="bg-white text-[#ED7824] px-8 py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-slate-50 transition-all shadow-xl border-2 border-[#ED7824]"
                                    >
                                        <span className="text-2xl">🍎</span> 애플 앱스토어
                                    </Link>
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="w-64 h-64 bg-[#F2A900] rounded-[3rem] p-8 shadow-2xl flex items-center justify-center -rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <span className="text-9xl">🍔</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Wrapper */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-20">
                    
                    {/* Membership Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        <div className="bg-white rounded-[2.5rem] p-12 shadow-2xl border border-slate-100">
                            <h3 className="text-3xl font-black text-[#512314] mb-8 flex items-center gap-3">
                                👑 버거킹 멤버십 등급
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-6 p-4 rounded-2xl bg-slate-50">
                                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-black">1</div>
                                    <div>
                                        <h4 className="font-black text-slate-800">커먼 (Welcome)</h4>
                                        <p className="text-sm text-slate-500 font-medium">가입 즉시 부여, 주니어 와퍼 할인 쿠폰 등</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 p-4 rounded-2xl bg-slate-50">
                                    <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center font-black">2</div>
                                    <div>
                                        <h4 className="font-black text-slate-800">주니어 (Junior)</h4>
                                        <p className="text-sm text-slate-500 font-medium">와퍼 주니어 무료 쿠폰, 승급 축하 쿠폰</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 p-4 rounded-2xl bg-orange-50 border border-orange-100">
                                    <div className="w-12 h-12 bg-[#ED7824] text-white rounded-full flex items-center justify-center font-black">3</div>
                                    <div>
                                        <h4 className="font-black text-slate-900">킹 (King)</h4>
                                        <p className="text-sm text-slate-600 font-bold">와퍼 단품 무료 쿠폰, 아메리카노 무료 쿠폰 등 최상위 혜택</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-[2.5rem] p-12 shadow-2xl border border-slate-100">
                            <h3 className="text-3xl font-black text-[#512314] mb-8 flex items-center gap-3">
                                ⚡ 스마트한 주문 방법
                            </h3>
                            <div className="space-y-10">
                                <div>
                                    <h4 className="text-xl font-black text-slate-800 mb-2">킹오더 (King Order)</h4>
                                    <p className="text-slate-500 font-bold leading-relaxed break-keep">
                                        기다림 없이 앱으로 미리 주문하고 매장에서 바로 픽업하세요. 줄 설 필요 없는 가장 빠른 방법입니다.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-slate-800 mb-2">딜리버리 (Delivery)</h4>
                                    <p className="text-slate-500 font-bold leading-relaxed break-keep">
                                        집에서도 편안하게 버거킹을 즐기세요. 앱 전용 딜리버리 쿠폰으로 배달비 절약까지 가능합니다.
                                    </p>
                                </div>
                                <Link 
                                    href="https://www.burgerking.co.kr/home"
                                    target="_blank"
                                    className="block w-full py-5 bg-slate-100 text-slate-600 font-black rounded-2xl text-center hover:bg-slate-200 transition-all"
                                >
                                    공식 홈페이지 바로가기
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Coupang Ads */}
                    <CoupangAds 
                        keyword="콜라 제로" 
                        title="🥤 버거와 찰떡궁합! 가성비 음료 추천"
                        hookText="매장에서 먹는 그 맛 그대로! 집에서도 햄버거와 즐기기 좋은 시원한 캔음료와 간식들입니다."
                    />

                </div>
            </main>

            <Footer />
        </div>
    );
}
