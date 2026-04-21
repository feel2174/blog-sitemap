import React from 'react';
import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '부동산 공시가격 조회 - 공동주택, 개별주택, 토지 공시지가 열람',
    description: '대한민국 주택 및 토지 공시지가를 안전하고 빠르게 조회할 수 있는 공식 안내 페이지입니다.',
};

export default function RealtyPricePage() {
    return (
        <div
            className="min-h-screen bg-[#F4F7FA] text-slate-800 flex flex-col items-center py-12 px-4 relative"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Header Section */}
            <div className="w-full max-w-2xl text-center mb-10 mt-4">
                <div className="flex justify-center mb-5">
                    <div className="w-16 h-16 bg-[#004EA2] rounded-full flex items-center justify-center shadow-md border-4 border-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 21h18"></path><path d="M9 8h1"></path><path d="M9 12h1"></path><path d="M9 16h1"></path><path d="M14 8h1"></path><path d="M14 12h1"></path><path d="M14 16h1"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path>
                        </svg>
                    </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#112A46] tracking-tight mb-3">
                    부동산 공시가격 알리미
                </h1>
                <p className="text-slate-600 font-medium text-sm md:text-base">
                    안전하고 신뢰할 수 있는 주택 및 토지 공시지가 공식 안내
                </p>
            </div>

            {/* Content Container */}
            <div className="w-full max-w-2xl flex flex-col gap-6">
                
                {/* 1. 주택 공시가격 Section */}
                <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="bg-[#004EA2] px-6 py-4 flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        <h2 className="text-xl font-bold text-white tracking-wide">주택 공시가격 열람</h2>
                    </div>
                    <div className="p-6 flex flex-col gap-3">
                        <Link href="https://www.realtyprice.kr/notice/town/nfSiteLink.htm" className="group relative flex items-center justify-between bg-slate-50 border border-slate-200 text-slate-700 p-4 rounded-xl transition-all duration-300 hover:bg-[#F2F7FC] hover:border-[#004EA2] hover:text-[#004EA2] hover:shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#004EA2]"></div>
                                <span className="font-bold text-[17px]">공동주택 공시가격 열람하기</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-200 group-hover:border-[#004EA2] group-hover:bg-[#004EA2] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-white transition-colors"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                        
                        <Link href="https://www.realtyprice.kr/notice/hpstandard/search.htm" className="group relative flex items-center justify-between bg-slate-50 border border-slate-200 text-slate-700 p-4 rounded-xl transition-all duration-300 hover:bg-[#F2F7FC] hover:border-[#004EA2] hover:text-[#004EA2] hover:shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#004EA2]"></div>
                                <span className="font-bold text-[17px]">표준주택 공시가격 열람하기</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-200 group-hover:border-[#004EA2] group-hover:bg-[#004EA2] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-white transition-colors"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                        
                        <Link href="https://www.realtyprice.kr/notice/hpindividual/search.htm" className="group relative flex items-center justify-between bg-slate-50 border border-slate-200 text-slate-700 p-4 rounded-xl transition-all duration-300 hover:bg-[#F2F7FC] hover:border-[#004EA2] hover:text-[#004EA2] hover:shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#004EA2]"></div>
                                <span className="font-bold text-[17px]">개별주택 공시가격 열람하기</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-200 group-hover:border-[#004EA2] group-hover:bg-[#004EA2] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-white transition-colors"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* 2. 토지 공시지가 Section */}
                <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-2">
                    <div className="bg-[#1C5B42] px-6 py-4 flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"></path><path d="M10.8 4.2a2.9 2.9 0 0 1 2.4 0l6.7 3.3a2 2 0 0 1 .9 2.1l-1.5 6A2 2 0 0 1 17.4 17H6.6a2 2 0 0 1-1.9-1.4l-1.5-6a2 2 0 0 1 .9-2.1l6.7-3.3Z"></path></svg>
                        <h2 className="text-xl font-bold text-white tracking-wide">토지 공시지가 열람</h2>
                    </div>
                    <div className="p-6 flex flex-col gap-3">
                        <Link href="https://www.realtyprice.kr/notice/gsstandard/search.htm" className="group relative flex items-center justify-between bg-slate-50 border border-slate-200 text-slate-700 p-4 rounded-xl transition-all duration-300 hover:bg-[#EEF6F2] hover:border-[#1C5B42] hover:text-[#1C5B42] hover:shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#1C5B42]"></div>
                                <span className="font-bold text-[17px]">표준지 공시지가 열람하기</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-200 group-hover:border-[#1C5B42] group-hover:bg-[#1C5B42] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-white transition-colors"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                        
                        <Link href="https://www.realtyprice.kr/notice/gsindividual/search.htm" className="group relative flex items-center justify-between bg-slate-50 border border-slate-200 text-slate-700 p-4 rounded-xl transition-all duration-300 hover:bg-[#EEF6F2] hover:border-[#1C5B42] hover:text-[#1C5B42] hover:shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#1C5B42]"></div>
                                <span className="font-bold text-[17px]">개별지 공시지가 열람하기</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-200 group-hover:border-[#1C5B42] group-hover:bg-[#1C5B42] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-white transition-colors"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                    </div>
                </section>
                
                {/* Information Box */}
                <div className="bg-[#EBF1F8] border-l-4 border-[#004EA2] p-5 rounded-r-xl text-slate-600 text-sm leading-relaxed">
                    <p className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-[#004EA2]"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        <span className="font-medium">
                            본 페이지는 국토교통부 부동산 공시가격 알리미 서비스로 바로 이동하실 수 있도록 안내하는 공식 접속 페이지입니다. 정확한 공시가격 확인을 위해 해당 서비스로 이동하여 열람하시기 바랍니다.
                        </span>
                    </p>
                </div>
                
            </div>
            
            {/* Footer */}
            <CoupangAds 
                keyword="부동산 인테리어 도서" 
                title="🏡 내 집 마련의 꿈을 현실로"
                hookText="부동산 투자 전략부터 인테리어 꿀팁까지! 전문가들이 엄선한 부동산 성공 노하우가 담긴 베스트 도서 리스트입니다."
            />

            <div className="mt-16 text-slate-400 text-[10px] sm:text-xs font-semibold tracking-wider uppercase bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full border border-slate-100">
                © 2026 REAL ESTATE PRICE INFO HUB.
            </div>
        </div>
    );
}
