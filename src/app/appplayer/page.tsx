import Link from 'next/link';
import React from 'react';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: 'PC 모바일 게임 앱플레이어 통합 다운로드 라운지',
    description: 'LD플레이어, 녹스, 블루스택 등 PC에서 모바일 게임을 즐길 수 있는 최고의 앱플레이어들을 한곳에서 다운로드하세요.',
};

export default function AppPlayerPage() {
    const appPlayers = [
        {
            name: 'LD플레이어',
            url: 'https://kr.ldplayer.net/',
            icon: '🚀',
            tag: '가벼운 구동',
            gradient: 'from-amber-400 to-orange-500',
            glow: 'group-hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] border-amber-500/30'
        },
        {
            name: '녹스 앱플레이어',
            url: 'https://kr.bignox.com/',
            icon: '💻',
            tag: '안정성 최적화',
            gradient: 'from-blue-400 to-indigo-500',
            glow: 'group-hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] border-indigo-500/30'
        },
        {
            name: '블루스택',
            url: 'https://www.bluestacks.com/ko/index.html',
            icon: '⚡',
            tag: '압도적 성능',
            gradient: 'from-blue-500 to-cyan-400',
            glow: 'group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] border-blue-500/30'
        },
        {
            name: '미뮤 (MEmu)',
            url: 'https://kr.memuplay.com/',
            icon: '🕹️',
            tag: '뛰어난 호환성',
            gradient: 'from-emerald-400 to-green-500',
            glow: 'group-hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] border-emerald-500/30'
        },
        {
            name: '뮤뮤 (MuMu)',
            url: 'https://www.mumuplayer.com/kr/',
            icon: '🎯',
            tag: '고해상도 엔진',
            gradient: 'from-pink-500 to-rose-500',
            glow: 'group-hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] border-pink-500/30'
        },
        {
            name: '원게임루프',
            url: 'https://m.onestore.co.kr/ko-kr/gameloop/onegameloop.omp',
            icon: '🎮',
            tag: '원스토어 전용 PC',
            gradient: 'from-red-500 to-orange-500',
            glow: 'group-hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] border-red-500/30'
        },
        {
            name: '구글 플레이 게임즈',
            url: 'https://play.google.com/googleplaygames',
            icon: '▶️',
            tag: '구글 공식 지원',
            gradient: 'from-green-400 to-blue-500',
            glow: 'group-hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] border-sky-500/30'
        }
    ];

    return (
        <div
            className="min-h-screen bg-[#09090b] text-white py-14 px-4 sm:px-6 flex flex-col items-center selection:bg-amber-500/30"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
            `}} />

            {/* 상단 헤더 섹션 (게이머 감성의 네온 디자인) */}
            <div className="w-full max-w-5xl text-center mt-4 mb-14 relative z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/20 blur-[100px] z-[-1] rounded-full point-events-none"></div>
                
                <div className="inline-flex items-center justify-center p-4 bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-zinc-800 mb-6 drop-shadow-xl animate-float">
                    <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">👾</span>
                </div>
                <h1 className="text-[36px] sm:text-[48px] font-black text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-500 tracking-tight mb-4 leading-tight">
                    PC 앱플레이어 라운지
                </h1>
                <p className="text-zinc-400 font-medium text-[15px] sm:text-[17px] break-keep max-w-2xl mx-auto">
                    모바일 게임의 한계를 넘어서다. 당신의 PC에 가장 최적화된 앱플레이어를 선택하고 지금 바로 강력한 성능을 경험해 보세요.
                </p>
            </div>

            {/* 앱플레이어 그리드 */}
            <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 relative z-10">
                {appPlayers.map((app, idx) => (
                    <Link
                        href={app.url}
                        key={idx}
                        className={`group relative overflow-hidden bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 flex flex-col transition-all duration-300 transform hover:-translate-y-1 hover:bg-zinc-800/90 border border-zinc-800 ${app.glow}`}
                    >
                        {/* 네온 백그라운드 효과 (호버 시만 나타남) */}
                        <div className={`absolute -inset-1 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r ${app.gradient} blur-xl rounded-2xl`}></div>
                        
                        <div className="flex justify-between items-start mb-6">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl shadow-lg relative`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-20 group-hover:opacity-100 rounded-xl transition-opacity duration-300`}></div>
                                <span className="relative z-10">{app.icon}</span>
                            </div>
                            
                            {/* 태그 (장점) */}
                            <span className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-full text-[11px] font-bold text-zinc-300">
                                {app.tag}
                            </span>
                        </div>
                        
                        <div className="relative z-10 w-full mt-auto">
                            <h2 className="text-[20px] font-bold text-zinc-100 mb-2 tracking-tight group-hover:text-white transition-colors">
                                {app.name}
                            </h2>
                            <div className="flex items-center gap-2 text-[13px] text-zinc-400 font-medium group-hover:text-zinc-300 transition-colors">
                                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${app.gradient}`}></span>
                                공식 다운로드 바로가기
                            </div>
                        </div>

                        {/* 화살표 아이콘 */}
                        <div className="absolute bottom-6 right-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </div>
                    </Link>
                ))}
            </div>

            {/* 정보 안내 박스 */}
            <div className="w-full max-w-4xl mt-16 bg-zinc-900/60 p-6 sm:p-8 rounded-2xl border border-zinc-800 text-zinc-400 text-sm sm:text-base leading-relaxed flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left relative z-10">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                </div>
                <div className="pt-0.5">
                    <strong className="text-zinc-200 text-lg block mb-1">앱플레이어 선택 가이드</strong>
                    각 앱플레이어는 호환되는 게임과 요구 사양이 조금씩 다릅니다. <br className="hidden sm:block" />
                    본인의 PC 사양(VT 활성화 필수)과 플레이하려는 게임에 가장 잘 맞는 버전을 공식 홈페이지에서 안전하게 다운로드하세요.
                </div>
            </div>

            <CoupangAds 
                keyword="게이밍 마우스" 
                title="🎮 승률을 높이는 장비빨"
                hookText="앱플레이어로 즐기는 모바일 게임, 더 정교하게 컨트롤하고 싶다면? 무한 연타에도 끄떡없는 고감도 게이밍 마우스와 기계식 키보드 특가 리스트입니다."
            />

            {/* 푸터 */}
            <div className="mt-20 text-zinc-600 text-[13px] font-medium text-center pb-8 border-t border-zinc-900 w-full max-w-5xl pt-8 relative z-10">
                <p>Copyright © Android App Player Lounge. All rights reserved.</p>
            </div>
            
        </div>
    );
}
