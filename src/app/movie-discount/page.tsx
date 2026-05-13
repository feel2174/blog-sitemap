import Link from 'next/link';
import React from 'react';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: 'CGV, 롯데시네마, 메가박스 영화 6천원 할인쿠폰 받기 (선착순)',
    description: '전국 주요 영화관(CGV, 롯데시네마, 메가박스) 6,000원 할인 쿠폰을 지금 바로 다운로드하세요. 조기 소진될 수 있으니 서두르세요!',
};

export default function MovieDiscountPage() {
    return (
        <div 
            className="min-h-screen bg-slate-50 font-['Pretendard'] text-slate-900"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            <main className="pb-24">
                {/* Hero / Header Section designed to maximize CTR directly under H1 */}
                <div className="bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950 text-white pt-16 pb-10 px-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-indigo-500/10 blur-[100px] rounded-full -z-0"></div>
                    <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] bg-purple-500/10 blur-[80px] rounded-full -z-0"></div>
                    
                    <div className="max-w-5xl mx-auto relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-purple-200 text-sm font-bold mb-4">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            선착순 마감 임박
                        </div>
                        
                        <h1 className="text-3xl sm:text-5xl font-[900] mb-8 flex flex-col gap-3">
                            <span>전국 주요 영화관</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                                6,000원 할인쿠폰 받기
                            </span>
                        </h1>
                        
                        {/* ======================================================== */}
                        {/* BUTTON LIST DIRECTLY UNDER H1 TO MAXIMIZE CLICKS         */}
                        {/* ======================================================== */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-5 sm:p-8 shadow-2xl mx-auto mb-6 max-w-4xl">
                            <div className="text-center mb-6 relative">
                                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg inline-block uppercase tracking-widest">
                                    원하는 영화관 선택
                                </span>
                            </div>
                            <div className="flex flex-col gap-4">
                                <Link href="https://www.megabox.co.kr/event/detail?eventNo=20515" className="flex items-center justify-between p-5 sm:p-6 bg-gradient-to-r from-[#4A3C8B] to-[#362675] text-white rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_30px_-5px_rgba(74,60,139,0.4)] group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-[#4A3C8B] text-lg">M</div>
                                        <div className="flex flex-col text-left">
                                            <span className="text-xl sm:text-2xl font-black">메가박스</span>
                                            <span className="text-sm text-white/80 font-medium">6천원 할인쿠폰 받기</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/20 p-3 rounded-2xl group-hover:bg-white group-hover:text-[#4A3C8B] transition-colors">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                                    </div>
                                </Link>

                                <Link href="https://www.lottecinema.co.kr/NLCHS/Event/EventTemplateInfo?eventId=101010014726016" className="flex items-center justify-between p-5 sm:p-6 bg-gradient-to-r from-[#ED1C24] to-[#C0151C] text-white rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_30px_-5px_rgba(237,28,36,0.4)] group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-[#ED1C24] text-lg">L</div>
                                        <div className="flex flex-col text-left">
                                            <span className="text-xl sm:text-2xl font-black">롯데시네마</span>
                                            <span className="text-sm text-white/80 font-medium">6천원 할인쿠폰 받기</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/20 p-3 rounded-2xl group-hover:bg-white group-hover:text-[#ED1C24] transition-colors">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                                    </div>
                                </Link>
                                
                                <Link href="http://m.cgv.co.kr/WebApp/EventNotiV4/EventList.aspx" className="flex items-center justify-between p-5 sm:p-6 bg-gradient-to-r from-[#E71A0F] to-[#B5120A] text-white rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_30px_-5px_rgba(231,26,15,0.4)] group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-[#E71A0F] text-lg">C</div>
                                        <div className="flex flex-col text-left">
                                            <span className="text-xl sm:text-2xl font-black">CGV</span>
                                            <span className="text-sm text-white/80 font-medium">6천원 할인쿠폰 받기</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/20 p-3 rounded-2xl group-hover:bg-white group-hover:text-[#E71A0F] transition-colors">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                                    </div>
                                </Link>
                            </div>
                            <p className="text-center text-white/60 text-xs mt-6">
                                * CGV는 로그인 후 쿠폰함에서 자동 지급 여부를 확인하시거나 이벤트 페이지를 참조하세요.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Additional Information Section Below buttons */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-8 shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                                🍿
                            </div>
                            <h3 className="text-lg font-black text-slate-900 mb-3">사용 방법</h3>
                            <p className="text-slate-600 text-sm font-medium leading-relaxed">
                                원하는 영화관을 선택하여 로그인 후 이벤트 페이지에서 쿠폰을 다운로드 하세요. 예매 시 결제 단계에서 적용 가능합니다.
                            </p>
                        </div>
                        <div className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-8 shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                            <div className="w-14 h-14 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                                ⏳
                            </div>
                            <h3 className="text-lg font-black text-slate-900 mb-3">유의사항</h3>
                            <p className="text-slate-600 text-sm font-medium leading-relaxed">
                                예산 소진 시 선착순으로 조기 마감될 수 있습니다. 일부 특별관 및 통신사 중복 할인은 제외될 수 있으니 상세 요강을 확인해 주세요.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            
            <CoupangAds 
                keyword="팝콘" 
                title="🍿 집에서 즐기는 영화관 팝콘"
                hookText="영화 볼 때 빠질 수 없는 간식! 집에서도 영화관 느낌 그대로 즐길 수 있는 인기 팝콘을 만나보세요."
            />
            
            <footer className="text-center py-10 text-slate-400 font-bold border-t border-slate-200 uppercase tracking-widest text-sm bg-white">
                © 2026 MOVIE TICKET DISCOUNT
            </footer>
        </div>
    );
}
