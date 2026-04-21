import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import CoupangAds from '@/components/CoupangAds';

export const metadata: Metadata = {
    title: '국민비서 구삐(Guppi) 신청 및 공식 홈페이지 바로가기',
    description: '나에게 꼭 필요한 정부 혜택과 알림을 놓치지 마세요! 국민비서 구삐 홈페이지와 카카오톡 채널을 통해 맞춤형 행정 서비스를 이용하실 수 있습니다.',
    keywords: ['국민비서', '구삐', 'Guppi', '행정안전부', '정부알림', '생활정보알림', '전자고지'],
};

export default function KookminSecretaryPage() {
    const homeUrl = 'https://www.ips.go.kr/pot/forwardMain.do';
    const devUrl = 'https://pf.kakao.com/_SvZfK?ref=blog.secondbrush.co.kr';

    return (
        <div 
            className="min-h-screen bg-white text-[#1A1A1A] selection:bg-blue-100"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            <main className="pb-24">
                {/* Hero section with a clean, trustworthy blue vibe */}
                <div className="bg-gradient-to-b from-[#0052CC] to-[#003E99] pt-28 pb-40 px-4 relative overflow-hidden flex flex-col items-center text-center">
                    <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none"></div>
                    <div className="absolute -bottom-20 -left-10 w-[30rem] h-[30rem] bg-sky-300/20 blur-[100px] rounded-full pointer-events-none"></div>
                    
                    <div className="max-w-4xl w-full relative z-10 flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-black mb-8 shadow-sm">
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-300 animate-pulse"></span>
                            국가 행정 서비스 알리미
                        </div>
                        
                        <h1 className="text-5xl sm:text-7xl font-black mb-6 leading-tight tracking-tight text-white drop-shadow-md">
                            내 삶의 필수 비서<br />
                            <span className="text-sky-300">국민비서 구삐</span>
                        </h1>
                        
                        <p className="text-lg sm:text-2xl text-blue-50 font-medium max-w-2xl mx-auto break-keep leading-relaxed drop-shadow-sm px-4">
                            건강검진일, 운전면허 갱신, 세금 납부 고지까지! <br />
                            나에게 필요한 정보를 원하는 채널로 똑똑하게 알려드립니다.
                        </p>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-20 relative z-20">
                    
                    {/* Action Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        
                        {/* Official Website */}
                        <Link 
                            href={homeUrl}
                            className="group bg-white rounded-[2.5rem] p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,82,204,0.12)] hover:border-blue-200"
                        >
                            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 text-4xl mb-8 group-hover:scale-110 transition-transform">
                                🏠
                            </div>
                            <h2 className="text-3xl font-black text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                                공식 홈페이지
                            </h2>
                            <p className="text-slate-500 font-medium mb-10 break-keep text-lg">
                                서비스 신청 및 알림 채널 설정, <br className="hidden sm:block" />
                                고지 내역을 한눈에 관리하세요.
                            </p>
                            <div className="px-8 py-4 bg-slate-900 group-hover:bg-blue-600 text-white font-black rounded-2xl transition-all duration-300 flex items-center gap-2">
                                서비스 바로가기
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                        </Link>

                        {/* Kakao Talk Channel */}
                        <Link 
                            href={devUrl}
                            className="group bg-white rounded-[2.5rem] p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(250,225,0,0.2)] hover:border-yellow-300"
                        >
                            <div className="w-20 h-20 bg-[#FEE500] rounded-3xl flex items-center justify-center text-[#3C1E1E] text-4xl mb-8 group-hover:scale-110 transition-transform">
                                🗨️
                            </div>
                            <h2 className="text-3xl font-black text-slate-800 mb-4 group-hover:text-[#3C1E1E] transition-colors">
                                카카오 채널 (구삐)
                            </h2>
                            <p className="text-slate-500 font-medium mb-10 break-keep text-lg">
                                가장 친숙한 카카오톡으로 <br className="hidden sm:block" />
                                실시간 행정 알림을 받아보세요.
                            </p>
                            <div className="px-8 py-4 bg-[#FEE500] text-[#3C1E1E] font-black rounded-2xl transition-all duration-300 flex items-center gap-2 border border-yellow-400 group-hover:bg-yellow-400">
                                채널 추가하기
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                        </Link>
                    </div>

                    {/* Features Section */}
                    <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100 mb-20 overflow-hidden relative">
                        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                        
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">✓</span>
                                    국민비서가 알려드리는 정보
                                </h3>
                                <ul className="space-y-4 text-slate-600 font-bold text-lg">
                                    <li className="flex items-center gap-2">ㆍ개인별 건강검진일 및 결과</li>
                                    <li className="flex items-center gap-2">ㆍ운전면허 갱신 및 적성검사</li>
                                    <li className="flex items-center gap-2">ㆍ교통 범칙금 및 과태료</li>
                                    <li className="flex items-center gap-2">ㆍ국가장학금 신청 안내</li>
                                </ul>
                            </div>
                            <div className="flex flex-col justify-center bg-blue-600 text-white p-10 rounded-[2.5rem] shadow-xl">
                                <h4 className="text-xl font-black mb-4 flex items-center gap-2">
                                    🚀 지금 일상을 자동화 하세요
                                </h4>
                                <p className="text-blue-50 font-medium leading-relaxed break-keep">
                                    복잡한 신청 절차 없이 한 번의 채널 설정으로 60여 종 이상의 민원 정보를 내 폰으로 받아볼 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Coupang Ads Section */}
                    <CoupangAds 
                        keyword="스마트워치" 
                        title="📱 놓치면 안 될 알림을 손목에서"
                        hookText="국민비서 구삐의 중요한 행정 알림, 이제 스마트워치로 더 빠르게 확인하세요! 운동부터 일정 관리까지 책임질 스마트 라이프 필수템 리스트입니다."
                    />

                </div>
            </main>

            {/* Footer */}
            <footer className="py-20 border-t border-slate-100 text-center bg-slate-50/50">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-slate-400 text-sm font-bold tracking-widest uppercase mb-4">
                        © 2026 PUBLIC SECRETARY INFO HUB.
                    </p>
                    <p className="text-slate-300 text-xs font-semibold leading-relaxed break-keep">
                        본 페이지는 행정안전부 국민비서 서비스를 편리하게 안내하기 위해 제작되었으며, <br />
                        정확한 정보 확인과 전문적인 서비스는 공식 홈페이지를 이용해 주시기 바랍니다.
                    </p>
                </div>
            </footer>
        </div>
    );
}
