import Link from 'next/link';
import React from 'react';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '2026 무한도전 런(무도런) 마라톤 신청 및 쿠팡플레이 예매 안내',
    description: '돌아온 레전드 예능 무한도전의 감동을 다시 한번! 2026 무도런 마라톤 티켓팅 및 쿠팡플레이 독점 시청 일정을 지금 확인하세요.',
};

export default function MudoRunPage() {
    return (
        <div 
            className="min-h-screen bg-black text-[#F3F4F6] py-16 px-4 sm:px-6 flex flex-col items-center relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            {/* Ambient Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-24 w-96 h-96 bg-[#00A0E9]/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>

            {/* Header Section */}
            <div className="relative z-10 w-full max-w-4xl text-center mb-16 mt-8">
                <div className="inline-flex items-center gap-2 bg-[#00A0E9]/10 text-[#00A0E9] px-4 py-2 rounded-full text-xs font-black mb-6 tracking-widest uppercase border border-[#00A0E9]/30 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A0E9] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A0E9]"></span>
                    </span>
                    Coupang Play Exclusive
                </div>
                
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-6 leading-tight text-white drop-shadow-2xl">
                    무한도전 런 <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A0E9] to-blue-400">
                        2026 MUDO RUN
                    </span>
                </h1>
                
                <p className="text-zinc-400 font-medium text-base sm:text-lg max-w-2xl mx-auto break-keep leading-relaxed">
                    10년 전 그 감동 그대로! 무한도전 멤버들과 함께 뛰는 런페스타. <br className="hidden sm:block" />
                    쿠팡플레이에서 진행되는 독점 예매와 라이브 중계를 놓치지 마세요.
                </p>
            </div>

            {/* Call to Action Card */}
            <div className="relative z-10 w-full max-w-3xl">
                <div className="bg-zinc-900/50 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-12 border border-zinc-800 shadow-2xl mb-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00A0E9]/5 to-transparent"></div>
                    
                    <div className="relative text-center">
                        <h3 className="text-2xl sm:text-3xl font-black mb-8 text-white tracking-tight">
                            쿠팡플레이 공식 예매 / 시청
                        </h3>
                        <p className="text-zinc-400 font-medium mb-10 leading-relaxed break-keep max-w-xl mx-auto text-sm sm:text-base">
                            본 행사의 티켓팅 및 라이브 중계는 오직 쿠팡플레이에서만 진행됩니다. 와우 회원이시라면 무료로 시청 가능합니다.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="https://www.coupangplay.com/content/1d5c45f2-0c03-424f-b755-b0dcb4f6f84b"
                                className="flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-[#00A0E9] hover:bg-[#0089C7] text-white font-[900] text-lg rounded-2xl hover:scale-105 transition-transform duration-300 group shadow-[0_0_20px_rgba(0,160,233,0.3)]"
                            >
                                무도런 예매처 바로가기
                                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Event Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 relative z-10">
                    <div className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800 hover:border-zinc-700 transition-colors">
                        <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center text-2xl mb-6">🏃‍♂️</div>
                        <h4 className="text-lg font-bold text-white mb-2">오프라인 참가 안내</h4>
                        <p className="text-zinc-400 text-sm font-medium leading-relaxed">
                            참가 패키지(티셔츠, 배번호 등)가 집으로 배송되며, 정해진 날짜에 오프라인 코스에서 실제 레이스를 진행합니다.
                        </p>
                    </div>
                    
                    <div className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800 hover:border-zinc-700 transition-colors">
                        <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center text-2xl mb-6">📱</div>
                        <h4 className="text-lg font-bold text-white mb-2">쿠팡플레이 생중계</h4>
                        <p className="text-zinc-400 text-sm font-medium leading-relaxed">
                            오프라인 행사에 참여하지 못하시더라도 쿠팡플레이 앱을 통해 멤버들의 달리기와 이벤트를 실시간으로 즐기실 수 있습니다.
                        </p>
                    </div>
                </div>
                
                <div className="relative z-10">
                    <CoupangAds 
                        keyword="런닝화" 
                        title="👟 완벽한 레이스를 위한 준비!"
                        hookText="무도런 참가를 위한 필수 아이템! 가볍고 편안한 인기 브랜드 런닝화를 미리 준비하세요."
                    />
                </div>
            </div>

            {/* Footer */}
            <footer className="relative z-10 mt-16 text-zinc-600 text-xs font-bold tracking-widest text-center uppercase">
                © 2026 MUDO RUN x COUPANG PLAY.
            </footer>
        </div>
    );
}
