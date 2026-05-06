import Link from 'next/link';
import React from 'react';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '2026 찰리푸스(Charlie Puth) 내한공연 티켓 예매 일정 및 정보',
    description: '세계적인 팝스타 찰리푸스(Charlie Puth)의 2026년 내한공연! 티켓 예매 일정, 좌석 배치도, 라이브네이션 선예매 정보를 지금 바로 확인하세요.',
};

export default function CharliePuthPage() {
    return (
        <div 
            className="min-h-screen bg-[#0A0A0A] text-[#F3F4F6] py-16 px-4 sm:px-6 flex flex-col items-center relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            {/* Ambient Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-24 w-96 h-96 bg-fuchsia-600/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>

            {/* Header Section */}
            <div className="relative z-10 w-full max-w-4xl text-center mb-16 mt-8">
                <div className="inline-flex items-center gap-2 bg-white/10 text-fuchsia-400 px-4 py-2 rounded-full text-xs font-black mb-6 tracking-widest uppercase border border-white/5 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
                    </span>
                    Live Nation Korea Presents
                </div>
                
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-6 leading-tight text-white drop-shadow-2xl">
                    CHARLIE PUTH <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">
                        LIVE IN SEOUL
                    </span>
                </h1>
                
                <p className="text-zinc-400 font-medium text-base sm:text-lg max-w-2xl mx-auto break-keep leading-relaxed">
                    천재적인 음악성과 완벽한 라이브! 글로벌 팝 아이콘 찰리 푸스가 다시 한국을 찾습니다. <br className="hidden sm:block" />
                    모두가 기다려온 환상적인 떼창의 현장을 절대 놓치지 마세요.
                </p>
            </div>

            {/* Call to Action Card */}
            <div className="relative z-10 w-full max-w-3xl">
                <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-12 border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)] mb-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-blue-500/5"></div>
                    
                    <div className="relative text-center">
                        <h3 className="text-2xl sm:text-3xl font-black mb-8 text-white tracking-tight">
                            공식 티켓 예매 바로가기
                        </h3>
                        <p className="text-zinc-400 font-medium mb-10 leading-relaxed break-keep max-w-xl mx-auto text-sm sm:text-base">
                            라이브네이션 코리아(Live Nation Korea) 홈페이지에서 선예매 및 일반 예매를 진행할 수 있습니다. 피켓팅이 예상되니 미리 준비하세요!
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="https://www.livenation.kr/"
                                className="flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-white text-black font-[900] text-lg rounded-2xl hover:scale-105 transition-transform duration-300 group"
                            >
                                라이브네이션 예매처 이동
                                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Concert Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 relative z-10">
                    <div className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800 hover:border-zinc-700 transition-colors">
                        <div className="w-12 h-12 bg-fuchsia-500/20 text-fuchsia-400 rounded-2xl flex items-center justify-center text-2xl mb-6">🗓️</div>
                        <h4 className="text-lg font-bold text-white mb-2">공연 일정</h4>
                        <p className="text-zinc-400 text-sm font-medium leading-relaxed">
                            자세한 공연 일정과 장소는 라이브네이션 홈페이지의 공식 공지사항을 통해 가장 먼저 확인하실 수 있습니다.
                        </p>
                    </div>
                    
                    <div className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800 hover:border-zinc-700 transition-colors">
                        <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center text-2xl mb-6">🎟️</div>
                        <h4 className="text-lg font-bold text-white mb-2">선예매 혜택</h4>
                        <p className="text-zinc-400 text-sm font-medium leading-relaxed">
                            라이브네이션 코리아 뉴스레터 구독자에게는 일반 예매 전, 하루 먼저 예매할 수 있는 선예매(Pre-sale) 혜택이 주어집니다.
                        </p>
                    </div>
                </div>
                
                <div className="relative z-10">
                    <CoupangAds 
                        keyword="쌍안경" 
                        title="🔭 내 가수를 더 가까이에서!"
                        hookText="콘서트 필수템 쌍안경! 오페라 글라스부터 고배율 망원경까지, 뒷자리에서도 찰리푸스의 표정을 생생하게 감상하세요."
                    />
                </div>
            </div>

            {/* Footer */}
            <footer className="relative z-10 mt-16 text-zinc-600 text-xs font-bold tracking-widest text-center uppercase">
                © 2026 CHARLIE PUTH LIVE IN SEOUL INFO.
            </footer>
        </div>
    );
}
