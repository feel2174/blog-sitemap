import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import CoupangAds from '@/components/CoupangAds';

export const metadata: Metadata = {
    title: '공공생리대 및 생리용품 그냥드림 지원사업 안내 | 신청 방법 및 지원 대상',
    description: '여성 청소년 및 취약계층을 위한 공공생리대 지원사업과 생리용품 바우처(그냥드림) 신청 방법, 지원 대상, 사용처 안내입니다. 건강한 삶을 위한 소중한 혜택을 지금 확인하세요.',
    keywords: ['공공생리대', '생리용품지원', '그냥드림', '생리용품바우처', '보건복지부바우처', '여성청소년지원', '생리대지원신청', '복지혜택'],
};

export default function SanitaryPadsLandingPage() {
    return (
        <div 
            className="min-h-screen bg-[#FFF9FB] text-[#4A4A4A] selection:bg-rose-100"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            <main className="pb-20">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-br from-rose-400 via-rose-500 to-pink-600 pt-32 pb-40 px-4 overflow-hidden">
                    {/* Decorative Elements - Soft Petals/Circles */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-rose-200 opacity-20 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
                        <div className="mb-8 p-5 bg-white/20 backdrop-blur-xl rounded-[2.5rem] border border-white/30 shadow-2xl">
                            <span className="text-5xl">🌸</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-md">
                            공공생리대 & 생리용품<br />
                            <span className="text-rose-100">그냥드림 지원사업</span>
                        </h1>
                        <p className="text-lg md:text-xl text-rose-50 font-medium max-w-2xl mx-auto break-keep leading-relaxed opacity-95">
                            여성의 건강한 삶과 기본권을 보장하기 위해 지원합니다.<br />
                            복지 바우처부터 긴급 지원까지, 필요한 혜택을 확인해보세요.
                        </p>
                    </div>
                </div>

                {/* Content Area */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-24 relative z-20">
                    
                    {/* Primary Actions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        
                        {/* Official Support Page */}
                        <Link
                            href="http://www.voucher.go.kr/voucher/grlPadse.do"
                            className="group bg-white rounded-[3rem] p-10 flex flex-col items-center text-center shadow-[0_30px_70px_-15px_rgba(244,63,94,0.1)] border border-rose-50 hover:border-rose-400 transition-all duration-700 hover:-translate-y-3 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="w-24 h-24 bg-rose-500 rounded-[2rem] flex items-center justify-center text-white text-4xl mb-8 shadow-2xl group-hover:rotate-12 transition-transform">
                                    📋
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">지원사업 상세 안내</h3>
                                <p className="text-slate-500 font-semibold mb-10 break-keep text-lg leading-relaxed">
                                    지원 대상 확인 및 바우처 신청 절차 등<br />공식 홈페이지의 정보를 확인하세요.
                                </p>
                                <span className="inline-flex items-center gap-3 font-black text-rose-600 group-hover:underline text-xl">
                                    공식 홈페이지 바로가기
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                            </div>
                        </Link>

                        {/* Search Location (Mock/Info) */}
                        <div
                            className="group bg-white rounded-[3rem] p-10 flex flex-col items-center text-center shadow-[0_30px_70px_-15px_rgba(244,63,94,0.08)] border border-rose-50 relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="w-24 h-24 bg-rose-100 rounded-[2rem] flex items-center justify-center text-rose-600 text-4xl mb-8 shadow-inner">
                                    📍
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">공공생리대 비치함 찾기</h3>
                                <p className="text-slate-500 font-semibold mb-10 break-keep text-lg leading-relaxed">
                                    각 지자체 및 공공기관 건물 내에 설치된<br />비상용 공공생리대 비치함을 이용할 수 있습니다.
                                </p>
                                <div className="text-rose-400 font-bold text-sm bg-rose-50 px-6 py-2 rounded-full">
                                    * 지자체별 운영 현황이 다를 수 있습니다
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Information Section */}
                    <div className="bg-white rounded-[3.5rem] p-10 md:p-16 shadow-2xl border border-rose-50 mb-16 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-rose-400"></div>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 tracking-tight">지원사업 핵심 내용</h2>
                        
                        <div className="space-y-12">
                            <section>
                                <h4 className="flex items-center gap-3 text-xl font-black text-rose-600 mb-4">
                                    <span className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-sm">1</span>
                                    지원 대상
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600 font-medium text-lg ml-11">
                                    <li className="flex items-start gap-2">
                                        <span className="text-rose-400 mt-1">•</span>
                                        만 9세 ~ 24세 여성 청소년
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-rose-400 mt-1">•</span>
                                        기초생활수급자 및 차상위계층 가구
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-rose-400 mt-1">•</span>
                                        한부모가족지원법에 따른 지원 대상자
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-rose-400 mt-1">•</span>
                                        일부 지자체별 별도 선별 지원 대상
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h4 className="flex items-center gap-3 text-xl font-black text-rose-600 mb-4">
                                    <span className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-sm">2</span>
                                    지원 방식 (바우처)
                                </h4>
                                <div className="bg-rose-50/50 p-8 rounded-[2rem] text-slate-600 font-medium text-lg ml-11 leading-relaxed">
                                    지원 금액은 <strong>월 13,000원(연 최대 156,000원)</strong> 수준으로 국민행복카드를 통해 포인트 형태로 지급됩니다. 구매 가능한 가맹점에서 원하는 생리용품을 직접 선택하여 구매하실 수 있습니다.
                                </div>
                            </section>

                            <section>
                                <h4 className="flex items-center gap-3 text-xl font-black text-rose-600 mb-4">
                                    <span className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-sm">3</span>
                                    신청 방법
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-11">
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="font-bold text-slate-900 mb-2">💻 온라인 신청</div>
                                        <p className="text-slate-500 text-sm">복지로(bokjiro.go.kr) 또는 정부24 홈페이지를 통해 본인 또는 보호자가 신청</p>
                                    </div>
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="font-bold text-slate-900 mb-2">🏢 오프라인 신청</div>
                                        <p className="text-slate-500 text-sm">주소지 읍·면·동 행정복지센터 방문 신청 (신분증 지참)</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Coupang Ads Section */}
                    <CoupangAds 
                        keyword="유기농 생리대" 
                        title="🌿 소중한 나를 위한 건강한 선택"
                        hookText="피부에 닿는 제품이니까 더 꼼꼼하게. 많은 사용자들이 추천하는 유기농 순면 생리대와 여성 건강 용품들을 만나보세요."
                    />

                </div>
            </main>

            {/* Footer */}
            <footer className="py-20 bg-rose-50/50 border-t border-rose-100 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-rose-300 text-sm font-black tracking-widest uppercase mb-4">
                        © 2026 WOMEN HEALTH INFO CARE. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-rose-300 text-xs leading-relaxed max-w-2xl mx-auto font-medium">
                        본 서비스는 공공생리대 지원사업에 대한 정보를 알기 쉽게 정리하여 제공하는 독립적인 가이드 페이지입니다.<br />
                        정확한 자격 요건 및 최신 공지사항은 반드시 보건복지부 또는 거주지 지자체 공식 채널을 통해 확인하시기 바랍니다.
                    </p>
                </div>
            </footer>
        </div>
    );
}
