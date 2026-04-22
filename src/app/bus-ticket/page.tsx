import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import CoupangAds from '@/components/CoupangAds';

export const metadata: Metadata = {
    title: '전국 고속버스 및 시외버스 통합 예매 안내 | 동서울터미널, 코버스, 티머니',
    description: '전국 고속버스 및 시외버스 온라인 예매를 위한 통합 안내 페이지입니다. 동서울터미널, 코버스(Kobus), 티머니 시외버스 예매 바로가기와 이용 방법을 편리하게 확인하세요.',
    keywords: ['버스예매', '고속버스예매', '시외버스예매', '동서울터미널예매', '코버스', 'Kobus', '티머니버스예매', '전국버스시간표', '버스티켓'],
};

export default function BusTicketLandingPage() {
    return (
        <div 
            className="min-h-screen bg-[#F0F4F8] text-[#334E68] selection:bg-blue-200"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            <main className="pb-20">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 pt-32 pb-44 px-4 overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400 opacity-10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
                        <div className="mb-8 p-4 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl">
                            <span className="text-5xl">🚌</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                            전국 버스 통합 예매<br />
                            <span className="text-blue-200 font-extrabold tracking-tighter">QUICK & EASY</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 font-medium max-w-2xl mx-auto break-keep leading-relaxed">
                            어디로 떠나시나요? 고속버스부터 시외버스까지,<br />
                            원하는 터미널과 시간을 선택해 지금 바로 예매하세요.
                        </p>
                    </div>
                </div>

                {/* Content Area */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-24 relative z-20">
                    
                    {/* Primary Actions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        
                        {/* Kobus */}
                        <Link
                            href="https://www.kobus.co.kr/main.do"
                            className="group bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-2xl border border-blue-50 hover:border-blue-600 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white text-3xl mb-6 shadow-xl group-hover:rotate-6 transition-transform">
                                    🛣️
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-3">고속버스 예매</h3>
                                <p className="text-slate-500 font-medium mb-8 break-keep">
                                    코버스(Kobus) 공식 홈페이지<br />전국 고속버스 통합 예매
                                </p>
                                <span className="inline-flex items-center gap-2 font-bold text-blue-600 group-hover:underline">
                                    Kobus 바로가기
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                            </div>
                        </Link>

                        {/* T-money */}
                        <Link
                            href="https://txbus.t-money.co.kr/main.do"
                            className="group bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-2xl border border-blue-50 hover:border-indigo-600 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center text-white text-3xl mb-6 shadow-xl group-hover:scale-110 transition-transform">
                                    💳
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-3">시외버스 예매</h3>
                                <p className="text-slate-500 font-medium mb-8 break-keep">
                                    티머니(T-money) 공식 홈페이지<br />전국 시외버스 통합 예매
                                </p>
                                <span className="inline-flex items-center gap-2 font-bold text-indigo-600 group-hover:underline">
                                    티머니 예매 바로가기
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                            </div>
                        </Link>

                        {/* Dongseoul */}
                        <Link
                            href="https://www.ti21.co.kr/"
                            className="group bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-2xl border border-blue-50 hover:border-emerald-500 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-emerald-600 rounded-3xl flex items-center justify-center text-white text-3xl mb-6 shadow-xl group-hover:-rotate-6 transition-transform">
                                    🏙️
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-3">동서울터미널</h3>
                                <p className="text-slate-500 font-medium mb-8 break-keep">
                                    동서울터미널 공식 홈페이지<br />직통 예매 및 운행 정보 확인
                                </p>
                                <span className="inline-flex items-center gap-2 font-bold text-emerald-600 group-hover:underline">
                                    Ti21 바로가기
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Tip Section */}
                    <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 mb-16 flex flex-col md:flex-row items-center gap-8">
                        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                            <span className="text-4xl">💡</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-black text-slate-900 mb-2">스마트한 버스 여행 팁</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-slate-600 font-medium">
                                <li className="flex items-center gap-2"><span className="text-blue-500">●</span> 주말이나 명절에는 최소 일주일 전 예매 권장</li>
                                <li className="flex items-center gap-2"><span className="text-blue-500">●</span> 모바일 앱(티머니GO) 이용 시 더 편리한 검표</li>
                                <li className="flex items-center gap-2"><span className="text-blue-500">●</span> 버스 등급(우등, 프리미엄)에 따른 요금 차이 확인</li>
                                <li className="flex items-center gap-2"><span className="text-blue-500">●</span> 승차권 취소 시 수수료 발생 규정 사전 숙지</li>
                            </ul>
                        </div>
                    </div>

                    {/* Coupang Ads Section */}
                    <CoupangAds 
                        keyword="무선 이어폰" 
                        title="🎧 이동 시간도 지루할 틈 없게"
                        hookText="장거리 버스 여행의 필수 아이템! 소음을 차단해주는 노이즈 캔슬링 이어폰과 넉넉한 보조배터리 특가 상품을 확인해보세요."
                    />

                </div>
            </main>

            {/* Footer */}
            <footer className="py-16 bg-slate-800 text-center text-white">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-white/40 text-sm font-bold tracking-widest uppercase mb-4">
                        © 2026 BUS TRAVEL HUB. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-white/20 text-xs leading-relaxed font-medium">
                        본 페이지는 전국의 버스 이용객들을 위해 예매 사이트 정보를 정리한 안내 페이지입니다.<br />
                        예매, 취소, 환불 등 모든 서비스 관련 책임은 각 공식 운영사에 있습니다.
                    </p>
                </div>
            </footer>
        </div>
    );
}
