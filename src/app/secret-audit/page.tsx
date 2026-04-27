import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: 'tvN 드라마 은밀한 감사 다시보기 및 정보 안내 | 신혜선, 공명 주연',
    description: 'tvN의 화제작, 신혜선, 공명 주연의 오피스 수사극 "은밀한 감사"! 티빙(TVING), 웨이브(Wavve) 다시보기 링크부터 재방송 편성표, 나무위키 상세 정보까지 한 번에 확인하세요.',
};

export default function SecretAuditPage() {
    return (
        <div
            className="min-h-screen bg-[#050505] text-white flex flex-col items-center py-16 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Cinematic Background with Gradient Overlay */}
            <div className="absolute inset-0 z-[1] pointer-events-none" style={{ backgroundImage: 'url(/secret-audit-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: '0.4' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent z-[2] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent z-[3] pointer-events-none" />

            <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center mt-10">
                {/* Header Section */}
                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        tvN ORIGINAL DRAMA
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">오피스 활극의 진수</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-orange-400">은밀한 감사</span>
                    </h1>

                    <div className="h-1 w-12 bg-red-500 mx-auto rounded-full mb-6" />

                    <p className="text-neutral-400 text-sm md:text-base font-light tracking-tight leading-relaxed">
                        신혜선, 공명 주연! 횡령과 비리를 파헤치는 통쾌한 오피스 수사극.<br className="hidden md:block" />
                        <span className="text-neutral-200 font-medium">지금 바로 원하시는 플랫폼에서 다시보기를 즐겨보세요.</span>
                    </p>
                </div>

                {/* Primary Action Buttons */}
                <div className="w-full flex flex-col gap-4 mb-16">
                    
                    {/* TVING Link */}
                    <Link
                        href="https://www.tving.com/contents/P001784608"
                        className="group relative flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-xl border border-white/5 hover:border-red-500/50 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 -translate-x-full group-hover:animate-shimmer" />
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-red-500 text-xs font-semibold tracking-wider">TVING STREAMING</span>
                                <span className="text-white font-bold text-lg md:text-xl tracking-tight">티빙(TVING)에서 다시보기</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>

                    {/* Wavve Link */}
                    <Link
                        href="https://www.wavve.com/player/vod?programid=C3519_C35000000082"
                        className="group relative flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-xl border border-white/5 hover:border-blue-500/50 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 -translate-x-full group-hover:animate-shimmer" />
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-blue-500 text-xs font-semibold tracking-wider">WAVVE STREAMING</span>
                                <span className="text-white font-bold text-lg md:text-xl tracking-tight">웨이브(Wavve)에서 다시보기</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>

                    {/* tvN Schedule Link */}
                    <Link
                        href="https://m.site.naver.com/23a4Z"
                        className="group relative flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-xl border border-white/5 hover:border-emerald-500/30 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 -translate-x-full group-hover:animate-shimmer" />
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-emerald-400 text-xs font-semibold tracking-wider">BROADCAST SCHEDULE</span>
                                <span className="text-white font-bold text-lg md:text-xl tracking-tight">tvN 재방송 편성표 바로가기</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>

                    {/* Namuwiki Link */}
                    <Link
                        href="https://namu.wiki/w/%EC%9D%80%EB%B0%80%ED%95%9C%20%EA%B0%90%EC%82%AC"
                        className="group relative flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-xl border border-white/5 hover:border-green-500/30 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 -translate-x-full group-hover:animate-shimmer" />
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-green-400 text-xs font-semibold tracking-wider">DRAMA INFO</span>
                                <span className="text-white font-bold text-lg md:text-xl tracking-tight">은밀한 감사 나무위키 상세정보</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-400 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>

                </div>

                {/* Additional Notice Card */}
                <div className="w-full mt-2 bg-black/40 border border-neutral-800/80 p-5 md:p-6 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-red-500/80" />
                    <h4 className="text-white text-sm md:text-base font-bold mb-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        드라마 관전 포인트
                    </h4>
                    <ul className="text-xs md:text-sm text-neutral-400 space-y-2 list-disc pl-5 leading-relaxed font-light">
                        <li><strong className="text-neutral-300">명품 연기력:</strong> 독보적인 매력의 신혜선과 안정적인 연기력의 공명이 선보이는 티키타카!</li>
                        <li><strong className="text-neutral-300">사이다 전개:</strong> 횡령과 사내 비리를 거침없이 파헤치는 속 시원한 오피스 활극.</li>
                        <li><strong className="text-neutral-300">긴장감 넘치는 연출:</strong> 매회 반전을 거듭하는 스토리와 쫄깃한 긴장감을 놓치지 마세요.</li>
                    </ul>
                </div>

                <footer className="mt-16 text-center w-full">
                    <div className="h-px w-full max-w-[200px] mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                    <p className="text-neutral-600 text-[10px] font-medium tracking-widest uppercase">
                        TVN ORIGINAL DRAMA GUIDE
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
            
            <CoupangAds 
                keyword="스마트TV" 
                title="📺 더 큰 화면으로 즐기는 감동"
                hookText="몰입감 넘치는 드라마 시청을 위한 최신 스마트TV와 홈시어터 스피커를 추천해 드립니다."
            />
        </div>
    );
}
