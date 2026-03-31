import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '스토브리그 일본판 리메이크 | 티빙(TVING) 바로가기',
    description: 'SBS 인기 드라마 스토브리그의 일본 리메이크 버전! 티빙에서 지금 바로 시청하세요. 출연진, 줄거리 및 다시보기 안내.',
};

export default function StoveLeagueJapanPage() {
    return (
        <div 
            className="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden font-sans"
            style={{ 
                fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                backgroundImage: 'radial-gradient(circle at 0% 0%, rgba(255, 0, 85, 0.15) 0%, transparent 40%), radial-gradient(circle at 100% 100%, rgba(0, 120, 255, 0.1) 0%, transparent 40%)'
            }}
        >
            {/* Background Decorative Stitches (Baseball theme) */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" className="absolute top-0 left-0">
                    <pattern id="stitch" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M10 10 L30 30 M70 10 L90 30" stroke="#ff0055" strokeWidth="2" fill="none" opacity="0.5" />
                        <path d="M10 90 L30 70 M70 90 L90 70" stroke="#ff0055" strokeWidth="2" fill="none" opacity="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#stitch)" />
                </svg>
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#ff0055] rounded-full blur-[150px] opacity-[0.07] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[150px] opacity-[0.05] pointer-events-none" />

            <div className="relative z-10 w-full max-w-2xl">
                
                {/* Header Section */}
                <div className="text-center mb-14 animate-in fade-in slide-in-from-top duration-1000">
                    <span className="inline-block px-5 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[#ff0055] text-xs font-black tracking-widest mb-6 shadow-2xl uppercase">
                        New Remake Series
                    </span>
                    
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[0.9]">
                        <span className="block text-white opacity-80 text-2xl md:text-3xl mb-4 font-bold tracking-tight">STOVE LEAGUE</span>
                        스토브리그 <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0055] to-[#ff4d88]">일본판 리메이크</span>
                    </h1>
                    
                    <div className="w-16 h-1.5 bg-[#ff0055] mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(255,0,85,0.6)]" />
                    
                    <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed max-w-lg mx-auto">
                        한국 SBS 최고의 화제작 &apos;스토브리그&apos; <br className="hidden sm:block" />
                        이제 역동적인 일본 리메이크 버전으로 만나보세요.
                    </p>
                </div>

                {/* TVing Watch Card (Glassmorphism) */}
                <div className="group relative animate-in fade-in zoom-in duration-700 delay-300">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#ff0055] via-purple-600 to-blue-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                    
                    <Link 
                        href="https://www.tving.com/contents/P001784235" 
                        className="relative block w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-12 overflow-hidden transition-all duration-300 transform group-hover:-translate-y-1"
                    >
                        {/* Internal Light Effect */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                        
                        <div className="flex flex-col items-center text-center">
                            {/* TVING Logo Placeholder Style */}
                            <div className="mb-8 w-16 h-16 rounded-2xl bg-white flex items-center justify-center p-3 shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
                                <span className="text-[#ff0055] font-black text-xs leading-none text-center">TVING<br/>REMAKE</span>
                            </div>
                            
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                                스토브리그 일본판 <br className="sm:hidden" aria-hidden="true" />
                                <span className="text-[#ff0055]">티빙 바로가기</span>
                            </h2>
                            
                            <p className="text-zinc-500 text-sm md:text-base font-semibold mb-10 tracking-tight">
                                [TVING 독점] 고화질 다시보기 및 실시간 스트리밍
                            </p>
                            
                            <div className="w-full flex items-center justify-center gap-2 bg-[#ff0055] hover:bg-[#e6004c] text-white py-5 px-10 rounded-2xl font-black text-xl md:text-2xl transition-all duration-300 shadow-[0_20px_40px_rgba(255,0,85,0.3)] group-hover:shadow-[0_25px_50px_rgba(255,0,85,0.4)] transform group-hover:scale-[1.02]">
                                시정하러 가기
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor font-bold">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Description Text */}
                <div className="mt-16 text-center space-y-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
                    <p className="text-zinc-500 text-sm font-bold tracking-widest uppercase">SYNOPSIS & INFO</p>
                    <div className="max-w-md mx-auto space-y-4">
                        <p className="text-zinc-400 leading-relaxed text-base italic">
                            &quot;만년 꼴찌팀의 짜릿한 반전 드라마가 열도에서 다시 시작됩니다.&quot;
                        </p>
                        <ul className="text-zinc-100 text-sm font-medium flex flex-wrap justify-center gap-x-6 gap-y-3 opacity-60">
                            <li>#일본드라마</li>
                            <li>#스토브리그</li>
                            <li>#리메이크</li>
                            <li>#티빙독점</li>
                            <li>#박은빈 #남궁민</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Subtle Text */}
                <div className="mt-24 pt-8 border-t border-white/5 text-center">
                    <p className="text-zinc-700 text-xs font-bold tracking-tighter">
                        © 2026 TVING CONTENT GUIDE. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>

            {/* Custom Mouse Glow (CSS only approximation) */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(2deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                .float-animation {
                    animation: float 6s ease-in-out infinite;
                }
            `}} />
            
            {/* Ambient Bottom Light */}
            <div className="absolute bottom-0 left-0 right-0 h-[20vh] bg-gradient-to-t from-[#ff0055]/5 to-transparent pointer-events-none" />
        </div>
    );
}
