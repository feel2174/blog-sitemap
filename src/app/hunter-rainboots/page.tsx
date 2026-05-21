import Link from 'next/link';
import React from 'react';
import { FaUmbrella, FaCloudRain, FaWater } from 'react-icons/fa';

export const metadata = {
    title: '장마철 필수템: 헌터 레인부츠 (숏/미들/롱 사이즈)',
    description: '장마철 완벽 대비! 헌터 레인부츠 숏, 미들, 롱 사이즈 구매처 바로가기 모음',
};

export default function HunterRainbootsPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-4 sm:px-6 relative overflow-hidden" style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, sans-serif' }}>
            
            {/* Background Rain / Water Effects */}
            <div className="fixed top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[100px] pointer-events-none"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-600/20 blur-[120px] pointer-events-none"></div>
            
            <div className="w-full max-w-[650px] flex flex-col items-center text-center py-20 relative z-10">
                
                {/* 헤더 섹션 */}
                <div className="mb-14">
                    <div className="w-24 h-24 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(6,182,212,0.4)] relative">
                        <div className="absolute inset-0 rounded-full border-2 border-cyan-300 animate-ping opacity-20"></div>
                        <FaUmbrella className="text-5xl text-white drop-shadow-md" />
                    </div>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-cyan-300 text-sm font-semibold tracking-widest backdrop-blur-sm mb-5">
                        2026 RAINY SEASON PREP
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-cyan-200 to-blue-200 break-keep">
                        장마철 완벽 대비<br/>
                        <span className="text-3xl sm:text-4xl text-cyan-400">헌터 레인부츠 모음</span>
                    </h1>
                    <p className="text-lg text-blue-200/80 font-medium break-keep">
                        비 오는 날에도 스타일리시하게! 원하시는 사이즈를 선택해 주세요.
                    </p>
                </div>

                {/* 버튼 섹션 */}
                <div className="flex flex-col gap-5 w-full px-2 sm:px-0">
                    
                    {/* Short Size */}
                    <Link 
                        href="https://link.coupang.com/a/dWIBVO18we"
                        className="group relative flex items-center justify-between w-full py-5 px-6 sm:px-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(6,182,212,0.2)] hover:-translate-y-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex items-center gap-5 relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-inner border border-slate-600/50 group-hover:border-cyan-400/50 transition-colors">
                                <FaWater className="text-cyan-400 text-2xl group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-sm font-semibold text-cyan-400/80 mb-1 tracking-wide">SHORT SIZE</span>
                                <span className="text-lg sm:text-xl font-bold text-white tracking-wide">헌터 레인부츠 숏사이즈 구매처 바로가기</span>
                            </div>
                        </div>
                        <div className="relative z-10 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-colors duration-300 shrink-0 ml-2">
                            <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>

                    {/* Mid Size */}
                    <Link 
                        href="https://link.coupang.com/a/dWIGRncK16"
                        className="group relative flex items-center justify-between w-full py-5 px-6 sm:px-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(59,130,246,0.2)] hover:-translate-y-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex items-center gap-5 relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-inner border border-slate-600/50 group-hover:border-blue-400/50 transition-colors">
                                <FaCloudRain className="text-blue-400 text-2xl group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-sm font-semibold text-blue-400/80 mb-1 tracking-wide">MID SIZE</span>
                                <span className="text-lg sm:text-xl font-bold text-white tracking-wide">헌터 레인부츠 미드사이즈 구매처 바로가기</span>
                            </div>
                        </div>
                        <div className="relative z-10 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-400 transition-colors duration-300 shrink-0 ml-2">
                            <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>

                    {/* Long Size */}
                    <Link 
                        href="https://link.coupang.com/a/dWIIy7U6Am"
                        className="group relative flex items-center justify-between w-full py-5 px-6 sm:px-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden hover:bg-white/10 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(99,102,241,0.2)] hover:-translate-y-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex items-center gap-5 relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-inner border border-slate-600/50 group-hover:border-indigo-400/50 transition-colors">
                                <FaUmbrella className="text-indigo-400 text-2xl group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-sm font-semibold text-indigo-400/80 mb-1 tracking-wide">LONG SIZE</span>
                                <span className="text-lg sm:text-xl font-bold text-white tracking-wide">헌터 레인부츠 롱사이즈 구매처 바로가기</span>
                            </div>
                        </div>
                        <div className="relative z-10 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500 group-hover:border-indigo-400 transition-colors duration-300 shrink-0 ml-2">
                            <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>
                </div>
                
                <p className="mt-12 text-xs text-slate-400/60 max-w-sm break-keep">
                    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
                </p>
            </div>
            
        </div>
    );
}
