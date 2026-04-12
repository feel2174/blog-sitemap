import Link from 'next/link';

export const metadata = {
    title: '키즈노트(Kids Note) 앱 다운로드 및 가이드 안내',
    description: '어린이집, 유치원 필수 앱 키즈노트를 안드로이드, 아이폰에서 다운로드하고 스마트하게 이용해 보세요.',
};

export default function KidsNotePage() {
    return (
        <div
            className="min-h-screen bg-[#050505] text-white flex flex-col items-center py-16 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Premium Gradients & Overlays (Yellow/Orange Vibe for KidsNote) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-[1]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent z-[2]" />

            <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
                {/* Header Section */}
                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        Essential App for Parents
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">우리아이 스마트 알림장</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500">키즈노트 다운로드</span>
                    </h1>

                    <div className="h-1 w-12 bg-amber-500 mx-auto rounded-full mb-6" />

                    <p className="text-neutral-400 text-sm md:text-base font-light tracking-tight leading-relaxed">
                        전국 어린이집, 유치원의 필수 소통 앱!<br className="hidden md:block" />
                        스마트폰 종류에 맞게 <span className="text-neutral-200 font-medium">안전하고 빠르게 설치</span>하세요.
                    </p>
                </div>

                {/* Primary Action Buttons - NO target="_blank" */}
                <div className="w-full flex flex-col gap-4 mb-16">
                    
                    {/* Google Play (Android) */}
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.vaultmicro.kidsnote"
                        className="group relative flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-xl border border-white/5 hover:border-emerald-500/30 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 -translate-x-full group-hover:animate-shimmer" />
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 21l14-9L5 3z"></path></svg>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-emerald-400 text-xs font-semibold tracking-wider">ANDROID</span>
                                <span className="text-white font-bold text-lg md:text-xl tracking-tight">키즈노트 안드로이드 설치하기</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>

                    {/* App Store (iOS) */}
                    <Link
                        href="https://apps.apple.com/kr/app/%ED%82%A4%EC%A6%88%EB%85%B8%ED%8A%B8/id527574743"
                        className="group relative flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 -translate-x-full group-hover:animate-shimmer" />
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path><path d="M10 2c1 .5 2 2 2 5h-2c0-3-1-4-2-5Z"></path></svg>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-blue-400 text-xs font-semibold tracking-wider">Exclusively for iOS</span>
                                <span className="text-white font-bold text-lg md:text-xl tracking-tight">키즈노트 아이폰 앱스토어 이동</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>

                    {/* Official PC Guide */}
                    <Link
                        href="https://www.with-kidsnote.com/guide/knbbasic/app"
                        className="group relative flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-xl border border-white/5 hover:border-amber-500/30 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 -translate-x-full group-hover:animate-shimmer" />
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-amber-400 text-xs font-semibold tracking-wider">PHOTO SAVE</span>
                                <span className="text-white font-bold text-lg md:text-xl tracking-tight">알림장 사진 다운로드/저장</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>

                </div>

                {/* Additional Notice Card */}
                <div className="w-full mt-2 bg-black/40 border border-neutral-800/80 p-5 md:p-6 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/80" />
                    <h4 className="text-white text-sm md:text-base font-bold mb-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        사용 전 확인해 주세요
                    </h4>
                    <ul className="text-xs md:text-sm text-neutral-400 space-y-2 list-disc pl-5 leading-relaxed font-light">
                        <li>본인의 모바일 운영체제(안드로이드, iOS)에 맞는 스토어 링크를 선택하여 설치해야 정상적으로 구동됩니다.</li>
                        <li>어플 설치 및 가입 후, 소속된 어린이집이나 유치원의 초대 코드를 입력하셔야 자녀 정보와 알림장을 연동할 수 있습니다.</li>
                    </ul>
                </div>

                <footer className="mt-16 text-center w-full">
                    <div className="h-px w-full max-w-[200px] mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                    <p className="text-neutral-600 text-[10px] font-medium tracking-widest uppercase">
                        KIDS NOTE SMART SERVICE
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
            `}} />
        </div>
    );
}
