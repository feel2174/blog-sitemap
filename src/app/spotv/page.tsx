import Link from 'next/link';
import React from 'react';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: 'SPOTV 바로가기 및 편성표 안내',
    description: 'SPOTV, SPOTV Prime, SPOTV NOW Golf, SPOTV NOW, SPOTV Plus 바로가기 링크 및 채널 안내.',
};

export default function SpotvLandingPage() {
    return (
        <div 
            className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Background Image / Gradient */}
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
                style={{ 
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")', // Sports stadium theme
                    filter: 'grayscale(30%)'
                }}
            />

            {/* Background Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#001d4a]/40 via-transparent to-black/80 z-[2]" />

            <div className="relative z-10 w-full max-w-lg text-center">
                {/* CSS Animations */}
                <style dangerouslySetInnerHTML={{__html: `
                    @keyframes pulse-spotv {
                        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(74, 144, 226, 0.4); }
                        70% { transform: scale(1.03); box-shadow: 0 0 0 15px rgba(74, 144, 226, 0); }
                        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(74, 144, 226, 0); }
                    }
                    @keyframes pulse-gold {
                        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.4); }
                        70% { transform: scale(1.03); box-shadow: 0 0 0 15px rgba(255, 215, 0, 0); }
                        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 215, 0, 0); }
                    }
                    @keyframes pulse-prime {
                        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(192, 192, 192, 0.4); }
                        70% { transform: scale(1.03); box-shadow: 0 0 0 15px rgba(192, 192, 192, 0); }
                        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(192, 192, 192, 0); }
                    }
                `}} />

                {/* SPOTV Title Section */}
                <div className="mb-14">
                    <h1 className="text-6xl md:text-7xl font-black text-white italic tracking-tighter drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                        <span className="text-white">SPO</span><span className="text-[#f9c218]">TV</span>
                    </h1>
                    <p className="mt-4 text-zinc-300 text-base md:text-lg font-medium tracking-tight">
                        스포츠의 모든 것, SPOTV 채널 안내
                    </p>
                    <div className="h-1 w-20 bg-[#f9c218] mx-auto mt-4 rounded-full" />
                </div>

                {/* Links Container */}
                <div className="flex flex-col gap-5 px-2">
                    
                    {/* SPOTV NOW */}
                    <Link 
                        href="https://www.spotvnow.co.kr/" 
                        className="group relative flex items-center justify-center py-5 rounded-2xl bg-gradient-to-r from-[#003d80] to-[#005bb7] text-white font-bold text-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-2xl overflow-hidden"
                        style={{ animation: 'pulse-spotv 3s infinite' }}
                    >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative">SPOTV NOW 바로가기</span>
                    </Link>

                    {/* SPOTV Prime */}
                    <Link 
                        href="https://www.spotvon.co.kr/" 
                        className="group relative flex items-center justify-center py-5 rounded-2xl bg-[#1a1a1a] border border-[#f9c218]/30 text-[#f9c218] font-bold text-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-2xl overflow-hidden"
                        style={{ animation: 'pulse-prime 3s infinite', animationDelay: '0.2s' }}
                    >
                        <div className="absolute inset-0 bg-[#f9c218]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative font-black">SPOTV Prime 바로가기</span>
                    </Link>

                    {/* SPOTV NOW Golf */}
                    <Link 
                        href="https://www.spotvnowgolf.co.kr/" 
                        className="group relative flex items-center justify-center py-5 rounded-2xl bg-gradient-to-r from-[#0a4d1a] to-[#157a2b] text-white font-bold text-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-2xl overflow-hidden"
                        style={{ animationDelay: '0.4s' }}
                    >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative">SPOTV NOW Golf 골프 바로가기</span>
                    </Link>

                    {/* SPOTV Plus */}
                    <Link 
                        href="https://www.spotvplus.com/" 
                        className="group relative flex items-center justify-center py-5 rounded-2xl bg-zinc-800 text-white font-bold text-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-xl"
                        style={{ animationDelay: '0.6s' }}
                    >
                        <span className="relative">SPOTV Plus 바로가기</span>
                    </Link>

                    {/* SPOTV Main (Official Website) */}
                    <Link 
                        href="https://www.spotv.net/main.asp" 
                        className="group relative flex items-center justify-center py-4 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-400 font-medium text-lg transition-all duration-300 hover:text-white"
                    >
                        <span className="relative">SPOTV 공식 홈페이지</span>
                    </Link>

                </div>

                {/* Footer and Additional Info */}
                <div className="mt-16 text-zinc-400 text-sm leading-relaxed px-6">
                    <p className="font-semibold text-zinc-300 mb-2 underline decoration-[#f9c218] decoration-2 underline-offset-4">
                        최고의 스포츠 중계를 지금 만나보세요
                    </p>
                    <p className="text-zinc-500">
                        SPOTV NOW / SPOTV Prime / SPOTV Plus <br />
                        축구(PL, 세리에A, UCL), 야구(MLB), 농구(NBA) 전 경기 생중계
                    </p>
                </div>
                
                <CoupangAds 
                    keyword="치킨 기프티콘" 
                    title="🍗 스포츠엔 역시 치맥"
                    hookText="스포티비 중계 보면서 먹는 치킨이 제일 맛있죠? 오늘 빅매치 시청을 더 즐겁게 해줄 인기 브랜드 치킨 & 맥주 안주 특가 리스트입니다."
                />
            </div>
            
            {/* Dark Gradient Overlay for Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>
    );
}
