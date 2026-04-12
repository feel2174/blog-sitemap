import Link from 'next/link';

export const metadata = {
    title: '중고나라 홈페이지 및 앱 다운로드 (안드로이드/아이폰)',
    description: '안심되는 중고거래, 중고나라 홈페이지 바로가기 및 스마트폰(안드로이드, 아이폰) 앱 다운로드 안내입니다.',
};

export default function JoonggonaraPage() {
    return (
        <div
            className="min-h-screen bg-[#050505] text-white flex flex-col items-center py-16 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Premium Gradients & Overlays (Blue/Cyan Vibe for Trust/Market) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-[1]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent z-[2]" />

            <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
                {/* Header Section */}
                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Second-hand Market
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">안심되는 중고거래</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500">중고나라 바로가기</span>
                    </h1>

                    <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full mb-6" />

                    <p className="text-neutral-400 text-sm md:text-base font-light tracking-tight leading-relaxed">
                        대한민국 대표 중고거래 플랫폼!<br className="hidden md:block" />
                        홈페이지 접속 및 운영체제에 맞는 <span className="text-neutral-200 font-medium">안전한 앱 설치</span>를 진행하세요.
                    </p>
                </div>

                {/* Primary Action Buttons - NO target="_blank" */}
                <div className="w-full flex flex-col gap-4 mb-16">
                    
                    {/* Official Website */}
                    <Link
                        href="https://web.joongna.com/"
                        className="group relative flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98] animate-custom-pulse"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 -translate-x-full group-hover:animate-shimmer" />
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-cyan-400 text-xs font-semibold tracking-wider">OFFICIAL WEBSITE</span>
                                <span className="text-white font-bold text-lg md:text-xl tracking-tight">중고나라 홈페이지 바로가기</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>

                    {/* Naver Cafe */}
                    <Link
                        href="https://cafe.naver.com/joonggonara"
                        className="group relative flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-xl border border-white/5 hover:border-emerald-500/30 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98] animate-custom-pulse"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 -translate-x-full group-hover:animate-shimmer" />
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3.5Z"></path></svg>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-emerald-400 text-xs font-semibold tracking-wider">NAVER CAFE</span>
                                <span className="text-white font-bold text-lg md:text-xl tracking-tight">중고나라 네이버 카페</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>

                    {/* Google Play (Android) */}
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.elz.secondhandstore&hl=ko"
                        className="group relative flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-xl border border-white/5 hover:border-emerald-500/30 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98] animate-custom-pulse"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 -translate-x-full group-hover:animate-shimmer" />
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 21l14-9L5 3z"></path></svg>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-emerald-400 text-xs font-semibold tracking-wider">ANDROID</span>
                                <span className="text-white font-bold text-lg md:text-xl tracking-tight">안드로이드 앱 다운로드</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>

                    {/* App Store (iOS) */}
                    <Link
                        href="https://apps.apple.com/kr/app/%EC%A4%91%EA%B3%A0%EB%82%98%EB%9D%BC-%EC%95%88%EC%8B%AC%EB%90%98%EB%8A%94-%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98/id896515652"
                        className="group relative flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98] animate-custom-pulse"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 -translate-x-full group-hover:animate-shimmer" />
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path><path d="M10 2c1 .5 2 2 2 5h-2c0-3-1-4-2-5Z"></path></svg>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-blue-400 text-xs font-semibold tracking-wider">Exclusively for iOS</span>
                                <span className="text-white font-bold text-lg md:text-xl tracking-tight">아이폰 앱 다운로드</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>

                </div>

                {/* Additional Notice Card */}
                <div className="w-full mt-2 bg-black/40 border border-neutral-800/80 p-5 md:p-6 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/80" />
                    <h4 className="text-white text-sm md:text-base font-bold mb-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        이용 안내
                    </h4>
                    <ul className="text-xs md:text-sm text-neutral-400 space-y-2 list-disc pl-5 leading-relaxed font-light">
                        <li>모바일 환경에서는 본인의 운영체제(안드로이드/iOS)에 맞는 앱을 다운로드하여 이용하시는 것이 가장 편리합니다.</li>
                        <li>PC 환경에서는 홈페이지 바로가기를 통해 중고나라 서비스를 이용하실 수 있습니다.</li>
                    </ul>
                </div>

                <footer className="mt-16 text-center w-full">
                    <div className="h-px w-full max-w-[200px] mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                    <p className="text-neutral-600 text-[10px] font-medium tracking-widest uppercase">
                        JOONGGONARA OFFICIAL LINKS
                    </p>
                </footer>
            </div>

            {/* Support configuration for tailwind custom animation mapping */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 1.5s infinite;
                }
                @keyframes custom-pulse {
                    0%, 100% { transform: scale(0.95); }
                    50% { transform: scale(1.05); }
                }
                .animate-custom-pulse {
                    animation: custom-pulse 2s infinite ease-in-out;
                }
            `}} />
        </div>
    );
}
