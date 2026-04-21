import Link from 'next/link';
import React from 'react';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '서울시 손목닥터 9988 앱 다운로드 및 포인트 사용 안내',
    description: '서울시민의 건강 메이트, 손목닥터 9988 공식 앱 다운로드(안드로이드, iOS, 원스토어) 및 쌓여가는 포인트의 활용법을 종합적으로 안내합니다.',
};

export default function WristDoctorPage() {
    return (
        <div 
            className="min-h-screen bg-emerald-50/30 font-['Pretendard'] text-slate-800"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            <main className="pb-24">
                {/* Hero / Header Section */}
                <div className="bg-gradient-to-b from-emerald-600 to-teal-800 pb-20 pt-28 px-4 relative overflow-hidden flex flex-col items-center text-center">
                    <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-emerald-300/20 blur-[120px] rounded-full pointer-events-none -z-0"></div>
                    <div className="absolute -bottom-20 -left-10 w-[30rem] h-[30rem] bg-teal-400/20 blur-[100px] rounded-full pointer-events-none -z-0"></div>
                    
                    <div className="max-w-4xl w-full relative z-10 flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-black mb-8 shadow-sm tracking-wide">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse"></span>
                            서울시 공식 스마트 헬스케어
                        </div>
                        
                        <h1 className="text-5xl sm:text-7xl font-black mb-6 leading-tight tracking-tight text-white drop-shadow-md">
                            손목닥터 <span className="text-emerald-300">9988</span>
                        </h1>
                        
                        <p className="text-lg sm:text-xl text-emerald-50 font-medium max-w-2xl mx-auto break-keep leading-relaxed drop-shadow-sm">
                            매일 걷기만 해도 쌓이는 꿀 포인트 혜택! <br className="hidden sm:block" />
                            지금 바로 스마트폰에 앱을 설치하고 건강과 포인트를 모두 챙겨보세요.
                        </p>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10 -mt-12">
                    
                    {/* App Download Links */}
                    <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl border border-slate-100 mb-8 flex flex-col">
                        <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center justify-center gap-2">
                            <span className="text-3xl">📱</span> 내 스마트폰에 설치하기
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {/* Android Download */}
                            <Link 
                                href="https://play.google.com/store/apps/details?id=kr.go.seoul.healthcare&hl=ko"
                                className="flex flex-col items-center justify-center p-6 bg-slate-50 border-2 border-slate-100 rounded-2xl hover:border-emerald-500 hover:bg-emerald-50/50 hover:-translate-y-1 transition-all group shadow-sm hover:shadow-md"
                            >
                                <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
                                <span className="font-black text-slate-700 group-hover:text-emerald-600 text-lg">Google Play</span>
                                <span className="text-xs font-bold text-slate-400 mt-1">안드로이드 앱 설치</span>
                            </Link>

                            {/* iOS Download */}
                            <Link 
                                href="https://apps.apple.com/kr/app/%EC%86%90%EB%AA%A9%EB%8B%A5%ED%84%B09988/id6456750933"
                                className="flex flex-col items-center justify-center p-6 bg-slate-50 border-2 border-slate-100 rounded-2xl hover:border-slate-800 hover:bg-slate-100/50 hover:-translate-y-1 transition-all group shadow-sm hover:shadow-md"
                            >
                                <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">🍎</div>
                                <span className="font-black text-slate-700 group-hover:text-slate-900 text-lg">App Store</span>
                                <span className="text-xs font-bold text-slate-400 mt-1">아이폰 앱 설치</span>
                            </Link>

                            {/* OneStore Download */}
                            <Link 
                                href="https://m.onestore.co.kr/v2/ko-kr/app/0000772929"
                                className="flex flex-col items-center justify-center p-6 bg-slate-50 border-2 border-slate-100 rounded-2xl hover:border-red-500 hover:bg-red-50/50 hover:-translate-y-1 transition-all group shadow-sm hover:shadow-md"
                            >
                                <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">🎁</div>
                                <span className="font-black text-slate-700 group-hover:text-red-500 text-lg">ONE Store</span>
                                <span className="text-xs font-bold text-slate-400 mt-1">원스토어 전용</span>
                            </Link>
                        </div>
                    </div>

                    {/* Points Usage Guide Link */}
                    <Link 
                        href="https://onhealth.seoul.go.kr/plus/web/service/notice/notice_1741322247140"
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2.5rem] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between group overflow-hidden relative shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[30px] rounded-full pointer-events-none"></div>
                        
                        <div className="relative z-10 text-center sm:text-left mb-6 sm:mb-0">
                            <div className="inline-block px-3 py-1 bg-white/20 text-white rounded-lg text-xs font-bold mb-3 tracking-widest border border-white/30 backdrop-blur-sm">
                                궁금증 해결
                            </div>
                            <h3 className="text-white text-2xl sm:text-3xl font-black mb-2 leading-tight">
                                모은 포인트, <br className="sm:hidden" />
                                어디서 어떻게 쓰나요?
                            </h3>
                            <p className="text-emerald-50/90 text-sm sm:text-base font-medium break-keep">
                                손목닥터9988 전용 서울페이(+) 포인트 사용처 및 상세 이용 가이드
                            </p>
                        </div>

                        <div className="relative z-10 shrink-0">
                            <div className="w-16 h-16 bg-white text-teal-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                            </div>
                        </div>
                    </Link>

                    {/* Coupang Ads Section */}
                    <CoupangAds 
                        keyword="스마트워치 스트랩" 
                        title="9988 건강 메이트 필수 아이템"
                        hookText="서울시 손목닥터 9988과 함께 사용하면 좋은 가성비 스마트워치 & 인기 스트랩 리스트입니다."
                    />

                </div>
            </main>
            
            <footer className="text-center py-8 text-slate-400 font-bold uppercase tracking-widest text-sm w-full border-t border-slate-200 mt-10">
                © 2026 SEOUL HEALTH CARE INFO.
            </footer>
        </div>
    );
}
