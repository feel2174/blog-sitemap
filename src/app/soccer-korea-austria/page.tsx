import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '대한민국 vs 오스트리아 평가전 실시간 중계 안내',
    description: '대한민국 축구 국가대표팀 vs 오스트리아 평가전 생중계 및 하이라이트 시청 안내. 티빙, 쿠팡플레이, TV조선 실시간 중계 바로가기.',
};

export default function SoccerKoreaAustriaPage() {
    return (
        <div 
            className="min-h-screen bg-[#060b18] text-white flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden font-sans"
            style={{ 
                fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                background: 'radial-gradient(circle at top right, #1e3a8a, #060b18), radial-gradient(circle at bottom left, #7f1d1d, #060b18)'
            }}
        >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div 
                    className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600 blur-[120px]"
                />
                <div 
                    className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-red-600 blur-[120px]"
                />
                {/* Soccer Pitch Grid (Subtle) */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-10" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-xl text-center">
                
                {/* Match Info Header */}
                <div className="mb-12 animate-in fade-in slide-in-from-top duration-1000">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 text-sm font-bold tracking-widest mb-6">
                        FRIENDLY MATCH 2026
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
                        <span className="text-white">대한민국 </span>
                        <span className="text-blue-500 font-black">vs</span>
                        <span className="text-white"> 오스트리아</span>
                    </h1>
                    
                    <p className="text-zinc-400 text-lg md:text-xl font-medium">
                        축구 국가대표팀 평가전 실시간 중계
                    </p>
                    
                    <div className="flex items-center justify-center gap-6 mt-10">
                        {/* Korea Team Logo Placeholder (Aesthetic) */}
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-red-600/30 border border-red-500/50 flex items-center justify-center p-4 backdrop-blur-sm shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                            <span className="text-4xl md:text-5xl">🇰🇷</span>
                        </div>
                        <div className="text-3xl font-black text-zinc-600 italic">VS</div>
                        {/* Austria Team Logo Placeholder (Aesthetic) */}
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-red-700/30 border border-white/30 flex items-center justify-center p-4 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                            <span className="text-4xl md:text-5xl">🇦🇹</span>
                        </div>
                    </div>
                </div>

                {/* Broadcast Links */}
                <div className="mt-8 space-y-5 px-2">
                    <h2 className="text-zinc-500 text-sm font-bold tracking-widest uppercase mb-6">LIVE CHANNELS</h2>
                    
                    {/* Link 1 */}
                    <div className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <Link 
                            href="https://www.tving.com/" 
                            className="relative flex items-center justify-between px-8 py-7 rounded-2xl bg-[#111827] border border-white/10 hover:border-white/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center shadow-lg shadow-red-900/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <p className="text-white font-black text-2xl tracking-tight italic">실시간 중계 바로가기 1</p>
                                </div>
                            </div>
                            <div className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    </div>

                    {/* Link 2 */}
                    <div className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <Link 
                            href="https://www.coupangplay.com/" 
                            className="relative flex items-center justify-between px-8 py-7 rounded-2xl bg-[#111827] border border-white/10 hover:border-white/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center shadow-lg shadow-blue-900/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <p className="text-white font-black text-2xl tracking-tight italic">실시간 중계 바로가기 2</p>
                                </div>
                            </div>
                            <div className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    </div>

                    {/* Link 3 */}
                    <div className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-500 to-zinc-200 rounded-2xl blur opacity-10 group-hover:opacity-80 transition duration-1000 group-hover:duration-200"></div>
                        <Link 
                            href="https://broadcast.tvchosun.com/onair/on.cstv" 
                            className="relative flex items-center justify-between px-8 py-7 rounded-2xl bg-[#111827] border border-white/10 hover:border-white/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-900 flex items-center justify-center shadow-lg shadow-zinc-900/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <p className="text-white font-black text-2xl tracking-tight italic">실시간 중계 바로가기 3</p>
                                </div>
                            </div>
                            <div className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Info Text */}
                <div className="mt-16 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-zinc-400 text-sm leading-relaxed">
                    <p className="mb-4 font-bold text-zinc-200 italic">READY FOR NORTH & CENTRAL AMERICA WORLD CUP</p>
                    <p>
                        이번 평가는 2026 북중미 월드컵을 대비한 중요한 일전입니다.<br />
                        대한민국 축구 대표팀의 승리를 위해 많은 응원 부탁드립니다.
                    </p>
                </div>

                {/* Decorative Soccer Ball (Glassmorphism) */}
                <div className="mt-12 flex justify-center opacity-30">
                    <div className="relative w-20 h-20">
                        <div className="absolute inset-0 rounded-full border-2 border-white/20 border-dashed animate-spin-slow"></div>
                        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center text-4xl">
                            ⚽
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{__html: `
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 10s linear infinite;
                }
            `}} />
            
            {/* Ambient Bottom Light */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-red-900/20 to-transparent pointer-events-none" />
        </div>
    );
}
