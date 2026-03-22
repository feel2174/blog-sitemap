'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Platform {
    name: string;
    url: string;
    description: string;
    color: string;
    icon: string;
}

const platforms: Platform[] = [
    { name: '아이템매니아', url: 'https://www.itemmania.com/', description: '대한민국 No.1 게임아이템 거래플랫폼', color: 'from-orange-500 to-red-600', icon: '💎' },
    { name: '아이템베이', url: 'https://www.itembay.com/intro', description: '합법적이고 안전한 아이템 거래 서비스', color: 'from-blue-500 to-indigo-600', icon: '⚔️' },
    { name: '아이디팜', url: 'https://idfarm.co.kr/', description: '모바일 게임 계정 및 아이템 거래 전문', color: 'from-emerald-500 to-teal-600', icon: '🌱' },
    { name: '저팔계', url: 'https://www.jeo8gye.com/', description: '수수료 없는 정직한 게임아이템 거래', color: 'from-pink-500 to-rose-600', icon: '🐷' },
    { name: '로켓아이템땡스', url: 'https://www.itemthankyou.com/main/main.asp', description: '로켓처럼 빠른 거래 인계 서비스', color: 'from-yellow-400 to-amber-600', icon: '🚀' },
    { name: '바로템', url: 'https://www.barotem.com/', description: '모바일 게임 계정 거래의 표준', color: 'from-purple-500 to-violet-600', icon: '⚡' },
    { name: '게임마켓', url: 'https://www.gamemarket.kr/', description: '신뢰할 수 있는 게이머의 장터', color: 'from-cyan-500 to-blue-600', icon: '🎮' },
    { name: '싸템', url: 'https://trade.ssatem.com/', description: '안전하고 저렴한 아이템 거래 플랫폼', color: 'from-lime-500 to-green-600', icon: '🏷️' },
];

export default function GameItemClient() {
    const [shuffledPlatforms, setShuffledPlatforms] = useState<Platform[]>([]);
    const [mounted, setMounted] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const shuffle = (array: Platform[]) => {
            const newArr = [...array];
            for (let i = newArr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
            }
            return newArr;
        };
        setShuffledPlatforms(shuffle(platforms));
        setMounted(true);
        // Small delay to trigger animations after mount
        const timer = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(timer);
    }, []);

    if (!mounted) {
        return (
            <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center px-4 py-16 opacity-0" />
        );
    }

    return (
        <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center px-4 py-16 font-sans relative overflow-x-hidden md:py-24">
            {/* Ambient Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[130px] rounded-full animate-pulse" />
                <div 
                  className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[130px] rounded-full animate-pulse" 
                  style={{ animationDuration: '8s' }} 
                />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-overlay" />
            </div>

            <div className="relative z-10 w-full max-w-xl">
                {/* Header */}
                <header className={`text-center mb-16 transition-all duration-1000 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] text-blue-400 border border-blue-500/30 rounded-full bg-blue-500/10 uppercase shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Verified Marketplaces
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
                        게임 아이템<br/>거래 플랫폼 리스트
                    </h1>
                    <div className="h-1 w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-6" />
                    <p className="text-slate-400 text-sm md:text-base font-medium max-w-sm mx-auto leading-relaxed">
                        대한민국에서 이용 가능한 주요 게임 거래소입니다.<br/>
                      
                    </p>
                </header>

                {/* Grid */}
                <div className={`grid gap-4 w-full transition-all duration-1000 delay-300 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {shuffledPlatforms.map((platform) => (
                        <Link
                            key={platform.name}
                            href={platform.url}
                            className="group relative block transition-all duration-300 active:scale-[0.98]"
                        >
                            {/* Glow Effect */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${platform.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition duration-500`} />
                            
                            <div className="relative flex items-center gap-4 p-4 md:p-5 bg-[#0f172a]/80 backdrop-blur-xl border border-white/5 rounded-2xl hover:border-white/20 transition-all duration-300 shadow-2xl">
                                {/* Visual Badge */}
                                <div className={`flex items-center justify-center w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl bg-gradient-to-br ${platform.color} shadow-lg shadow-black/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                    <span className="text-2xl md:text-3xl filter drop-shadow-md">{platform.icon}</span>
                                </div>
                                
                                <div className="flex-1 overflow-hidden">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h2 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-300 transition-colors truncate">
                                            {platform.name}
                                        </h2>
                                        <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest hidden md:block text-nowrap">Visit Now</span>
                                    </div>
                                    <p className="text-slate-400 text-xs md:text-sm font-medium line-clamp-1 group-hover:text-slate-300 transition-colors">
                                        {platform.description}
                                    </p>
                                </div>

                                {/* Arrow Icon */}
                                <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-slate-500 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Footer */}
                <footer className={`mt-20 text-center transition-all duration-1000 delay-700 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="text-slate-600 text-[11px] mb-2 leading-relaxed">
                        본 플랫폼은 파트너십 또는 정보 제공 목적으로 링크를 제공하며,<br/>
                        모든 거래의 책임은 각 서비스 이용자에게 있습니다.
                    </p>
                    <div className="flex justify-center items-center gap-4 py-6">
                        <div className="h-px w-8 bg-slate-800" />
                        <span className="text-slate-700 text-[10px] font-bold uppercase tracking-[0.3em]">Game Assets Hub</span>
                        <div className="h-px w-8 bg-slate-800" />
                    </div>
                </footer >
            </div>
        </div>
    );
}
