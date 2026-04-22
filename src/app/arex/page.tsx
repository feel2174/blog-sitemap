import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import CoupangAds from '@/components/CoupangAds';

export const metadata: Metadata = {
    title: 'AREX 공항철도 직통열차 예매 및 시간표 안내 | 서울역-인천공항 43분',
    description: '서울역에서 인천공항까지 가장 빠르게 이동하는 AREX 공항철도 직통열차 온라인 예매와 시간표, 이용 요금 안내입니다. 쉽고 빠른 예매로 여행의 시작을 편안하게 준비하세요.',
    keywords: ['공항철도', 'AREX', '공항철도예매', '서울역인천공항', '직통열차시간표', '인천공항철도', '공항철도요금', '해외여행준비'],
};

export default function ArexLandingPage() {
    return (
        <div 
            className="min-h-screen bg-[#FDFDFD] text-[#2D3436] selection:bg-orange-100"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            <main className="pb-20">
                {/* Hero Section */}
                <div className="relative bg-[#E67E22] pt-32 pb-40 px-4 overflow-hidden">
                    {/* Decorative Elements - Abstract Train Lines */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-10">
                        <div className="absolute top-1/4 left-0 w-full h-1 bg-white rotate-[-5deg]"></div>
                        <div className="absolute top-2/4 left-0 w-full h-1 bg-white rotate-[-5deg]"></div>
                        <div className="absolute top-3/4 left-0 w-full h-1 bg-white rotate-[-5deg]"></div>
                    </div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
                        <div className="mb-8 p-4 bg-white/20 backdrop-blur-lg rounded-[2rem] border border-white/30 shadow-2xl animate-pulse">
                            <span className="text-5xl">🚆</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter drop-shadow-md">
                            AREX<br />
                            <span className="text-orange-100 italic">AIRPORT RAILROAD</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-orange-50 font-medium max-w-2xl mx-auto break-keep leading-relaxed opacity-90">
                            서울역에서 인천공항까지 단 43분.<br />
                            복잡한 도심을 벗어나 가장 빠르고 쾌적하게 이동하세요.
                        </p>
                    </div>
                </div>

                {/* Content Area */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-24 relative z-20">
                    
                    {/* Primary Actions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        
                        {/* Reservation Link */}
                        <Link
                            href="https://www.airportrailroad.com/rt/tktBstk.do"
                            className="group bg-white rounded-[3rem] p-12 flex flex-col items-center text-center shadow-[0_25px_60px_-15px_rgba(230,126,34,0.15)] border border-orange-50 hover:border-orange-500 transition-all duration-700 hover:-translate-y-3 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-24 h-24 bg-[#E67E22] rounded-[2rem] flex items-center justify-center text-white text-4xl mb-8 shadow-2xl group-hover:rotate-[360deg] transition-transform duration-1000">
                                    🎟️
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">직통열차 온라인 예매</h3>
                                <p className="text-slate-500 font-semibold mb-10 break-keep text-lg leading-relaxed">
                                    기다림 없이 스마트하게!<br />원하는 좌석을 미리 선택하고 결제하세요.
                                </p>
                                <span className="inline-flex items-center gap-3 font-black text-[#E67E22] group-hover:underline text-xl">
                                    지금 바로 예매하기
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                            </div>
                        </Link>

                        {/* Schedule Info */}
                        <Link
                            href="https://www.airportrailroad.com/ti/main.do"
                            className="group bg-white rounded-[3rem] p-12 flex flex-col items-center text-center shadow-[0_25px_60px_-15px_rgba(45,52,54,0.1)] border border-slate-50 hover:border-slate-400 transition-all duration-700 hover:-translate-y-3 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-24 h-24 bg-slate-800 rounded-[2rem] flex items-center justify-center text-white text-4xl mb-8 shadow-2xl group-hover:scale-110 transition-transform">
                                    ⏰
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">열차 시간표 확인</h3>
                                <p className="text-slate-500 font-semibold mb-10 break-keep text-lg leading-relaxed">
                                    비행기 시간에 맞춰<br />가장 가까운 열차 시간을 확인해보세요.
                                </p>
                                <span className="inline-flex items-center gap-3 font-black text-slate-800 group-hover:underline text-xl">
                                    시간표 전체보기
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Quick Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-50">
                            <div className="text-orange-500 text-3xl mb-4">⏱️</div>
                            <h4 className="font-bold text-xl mb-2 text-slate-900">소요 시간</h4>
                            <p className="text-slate-500 font-medium leading-relaxed">
                                서울역 ↔ 인천공항 1터미널: 43분<br />
                                서울역 ↔ 인천공항 2터미널: 51분
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-50">
                            <div className="text-orange-500 text-3xl mb-4">💰</div>
                            <h4 className="font-bold text-xl mb-2 text-slate-900">이용 요금</h4>
                            <p className="text-slate-500 font-medium leading-relaxed">
                                성인: 11,000원<br />
                                어린이: 8,000원<br />
                                (온라인 예약 시 할인 혜택 제공)
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-50">
                            <div className="text-orange-500 text-3xl mb-4">🧳</div>
                            <h4 className="font-bold text-xl mb-2 text-slate-900">특화 서비스</h4>
                            <p className="text-slate-500 font-medium leading-relaxed">
                                서울역 도심공항터미널 이용 가능<br />
                                (탑승수속 및 수하물 위탁)
                            </p>
                        </div>
                    </div>

                    {/* Coupang Ads Section */}
                    <CoupangAds 
                        keyword="여행용 캐리어" 
                        title="✈️ 완벽한 여행을 위한 준비물"
                        hookText="공항 가는 길, 더 가볍고 튼튼한 캐리어와 센스 있는 여행 소품들을 최저가로 준비해 보세요."
                    />

                </div>
            </main>

            {/* Footer */}
            <footer className="py-20 bg-slate-900 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="mb-8 flex justify-center gap-6 text-white/20 text-4xl">
                        <span>✈️</span><span>🚆</span><span>🌍</span>
                    </div>
                    <p className="text-white/40 text-sm font-black tracking-widest uppercase mb-4">
                        © 2026 AREX TRAVEL HUB. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-white/20 text-xs leading-relaxed max-w-2xl mx-auto font-medium">
                        본 페이지는 이용자들의 편의를 위해 공항철도 정보를 정리하여 제공하는 보조 안내 페이지입니다.<br />
                        모든 예약 및 서비스 책임은 공식 운영사인 공항철도(주)에 있습니다.
                    </p>
                </div>
            </footer>
        </div>
    );
}
