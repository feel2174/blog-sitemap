import Link from 'next/link';
import React from 'react';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: 'KBO 리그 생중계 시청 안내 | 2026 프로야구 무료 중계 바로가기',
    description: 'KBO 리그 대한민국 전 경기 생중계 채널 안내. MBC, SBS, KBS, tvN SPORTS, 티빙(TVING) 실시간 중계 링크 모음.',
};

export default function KboLandingPage() {
    return (
        <div 
            className="min-h-screen bg-[#0a0f1e] text-white flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Cinematic Background */}
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
                style={{ 
                    backgroundImage: 'linear-gradient(rgba(10, 15, 30, 0.9), rgba(10, 15, 30, 0.9)), url("https://images.unsplash.com/photo-1508344922997-5d7d3363d9ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")', // Baseball field theme
                    filter: 'grayscale(20%)'
                }}
            />

            {/* Dynamic Background Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-[#0a0f1e] z-[1]" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] z-[0] animate-pulse" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] z-[0] animate-pulse" style={{ animationDelay: '2s' }} />

            <div className="relative z-10 w-full max-w-lg text-center">
                {/* Custom CSS Animations */}
                <style dangerouslySetInnerHTML={{__html: `
                    @keyframes pulse-live-kbo {
                        0% { box-shadow: 0 0 0 0 rgba(255, 21, 60, 0.6); transform: scale(1); }
                        70% { box-shadow: 0 0 0 15px rgba(255, 21, 60, 0); transform: scale(1.02); }
                        100% { box-shadow: 0 0 0 0 rgba(255, 21, 60, 0); transform: scale(1); }
                    }
                    @keyframes slide-up {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-slide-up {
                        animation: slide-up 0.6s ease-out forwards;
                    }
                `}} />

                {/* Header Section */}
                <div className="mb-12 animate-slide-up">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#00a0e9] border border-[#00a0e9]/30 rounded-full bg-[#00a0e9]/10 uppercase">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                        </span>
                        Live Coverage 2026
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter drop-shadow-2xl mb-4 text-center">
                        <span className="text-white uppercase">KBO LEAGUE</span>
                    </h1>
                    <p className="text-zinc-300 text-base md:text-lg font-medium max-w-xs mx-auto">
                        전 경기 생중계 및 독점 하이라이트 안내
                    </p>
                </div>

                {/* Broadcaster Links Grid */}
                <div className="flex flex-col gap-4 px-2">
                    
                    {/* TVING - Highlighted for Mobile Live */}
                    <Link 
                        href="https://www.tving.com/onboarding" 
                        className="group relative flex items-center justify-between p-5 rounded-2xl bg-[#ff153c] text-white transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-[0_10px_30px_rgba(255,21,60,0.3)] border-2 border-white/20"
                        style={{ animation: 'pulse-live-kbo 2s infinite' }}
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl font-black text-xl">TV</div>
                            <div className="text-left">
                                <span className="block font-black text-xl leading-none mb-1 text-white">TVING(티빙)</span>
                                <span className="text-xs font-bold text-white/80 uppercase tracking-tighter">Mobile Live Streaming</span>
                            </div>
                        </div>
                        <svg className="w-6 h-6 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    </Link>

                    {/* SBS - Special DBC Page */}
                    <Link 
                        href="https://programs.sbs.co.kr/sports/main" 
                        className="group relative flex items-center gap-4 p-5 rounded-2xl bg-[#00a0e9] text-white font-bold text-lg transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="w-10 text-center text-2xl">📺</span>
                        <div className="text-left">
                            <span className="block text-xl">SBS 스포츠 생중계 안내</span>
                            <span className="text-[10px] text-white/70 font-bold uppercase tracking-[0.2em]">General Sports</span>
                        </div>
                    </Link>

                    {/* MBC Channels */}
                    <div className="grid grid-cols-1 gap-4">
                        <Link 
                            href="https://www.imbc.com/" 
                            className="group relative flex items-center gap-4 p-4 rounded-xl bg-[#004692] text-white font-bold text-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg"
                        >
                            <span className="text-xl">📺</span>
                            <span>MBC 공식 중계 바로가기</span>
                        </Link>
                        <Link 
                            href="https://www.mbcplus.com/web/index.do" 
                            className="group relative flex items-center gap-4 p-4 rounded-xl bg-[#004692]/80 text-white font-bold text-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg border border-white/10"
                        >
                            <span className="text-xl">⚾</span>
                            <span>MBC 스포츠 플러스 (해설)</span>
                        </Link>
                    </div>

                    {/* KBS Channels */}
                    <div className="grid grid-cols-1 gap-4">
                        <Link 
                            href="https://www.kbs.co.kr/" 
                            className="group relative flex items-center gap-4 p-4 rounded-xl bg-[#0058ab] text-white font-bold text-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg"
                        >
                            <span className="text-xl">📺</span>
                            <span>KBS 온에어 생중계 시청</span>
                        </Link>
                        <Link 
                            href="https://www.kbsn.co.kr/nsports/" 
                            className="group relative flex items-center gap-4 p-4 rounded-xl bg-[#0058ab]/80 text-white font-bold text-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg border border-white/10"
                        >
                            <span className="text-xl">⚾</span>
                            <span>KBS N SPORTS 중계 채널</span>
                        </Link>
                    </div>

                    {/* tvN SPORTS */}
                    <Link 
                        href="https://tvnsports.cjenm.com/ko/" 
                        className="group relative flex items-center gap-4 p-5 rounded-2xl bg-[#e5001a] text-white font-bold text-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="text-2xl">🏆</span>
                        <div className="text-left">
                            <span className="block">tvN SPORTS 독점 중계</span>
                            <span className="text-[10px] text-white/70 font-bold uppercase tracking-[0.2em]">Exclusive Coverage</span>
                        </div>
                    </Link>

                </div>

                {/* Footer Info */}
                <div className="mt-16 text-zinc-500 text-xs leading-relaxed px-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    <p className="text-zinc-400 font-bold mb-3 uppercase tracking-widest text-[10px]">Information</p>
                    <p className="mb-2">
                        각 중계 채널 사정에 따라 생중계 일정이 <br/> 변경될 수 있습니다. 
                    </p>
                    <div className="flex justify-center gap-4 mt-4">
                        <div className="h-[1px] w-8 bg-zinc-800 self-center" />
                        <span className="text-zinc-700 font-black italic">PRO BASEBALL 2026</span>
                        <div className="h-[1px] w-8 bg-zinc-800 self-center" />
                    </div>
                </div>

                <CoupangAds 
                    keyword="야구 글러브" 
                    title="⚾ 오늘은 우리 팀이 이긴다"
                    hookText="직관 준비 끝내셨나요? 응원 열기를 더해줄 유니폼과 글러브, 야구장 필수템 선글라스와 간식까지 특가 리스트를 확인하세요."
                />
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-[-10%] left-0 right-0 h-64 bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none" />
        </div>
    );
}
