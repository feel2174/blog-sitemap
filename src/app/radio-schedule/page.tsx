import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '라디오 편성표 안내',
    description: '오늘의 라디오 방송 시간을 바로 확인해보세요. KBS, MBC, SBS 라디오 편성 정보.',
};

const RadioCard = ({ href, title, sub1, sub2, brandColor, brandBg, textColor }: { href: string; title: string; sub1: string; sub2: string; brandColor: string; brandBg: string; textColor: string }) => (
    <Link href={href} className="group block no-underline transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl active:translate-y-0">
        <div className={`relative overflow-hidden ${brandBg} border border-zinc-800/50 hover:border-zinc-500/30 p-5 rounded-2xl transition-colors duration-300`}>
            {/* Hover Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${textColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            
            <div className="flex justify-between items-center relative z-10 w-full">
                <div className="w-[85%]">
                    <div className="flex items-center gap-2.5 mb-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${brandColor} shadow-[0_0_8px_rgba(0,0,0,0.5)]`}></span>
                        <span className="font-bold text-zinc-100 text-xl tracking-tight leading-none">{title}</span>
                    </div>
                    <p className="text-sm md:text-sm text-zinc-400 font-medium leading-relaxed m-0 break-keep">
                        {sub1}<br />{sub2}
                    </p>
                </div>
                
                <div className="bg-zinc-800/80 group-hover:bg-zinc-700 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-colors border border-zinc-700/50">
                    <span className="text-zinc-300 group-hover:text-white font-bold text-lg transition-colors">→</span>
                </div>
            </div>
        </div>
    </Link>
);

export default function RadioSchedulePage() {
    return (
        <div
            className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-start px-4 py-16 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Cinematic Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-30 scale-105 fixed pointer-events-none"
                style={{ backgroundImage: 'url("/netflix-bg.png")', filter: 'grayscale(70%) blur(4px)' }}
            />

            {/* Background Overlays */}
            <div className="absolute inset-0 bg-zinc-950/70 z-[1] fixed pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/80 z-[2] fixed pointer-events-none" />

            <div className="relative z-10 w-full max-w-2xl bg-zinc-900/40 border border-zinc-800/50 p-6 md:p-10 rounded-3xl backdrop-blur-md shadow-2xl mt-4 md:mt-10">
                {/* Header */}
                <div className="mb-8 md:mb-10 pl-2">
                    <span className="inline-block bg-zinc-800 text-zinc-300 text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm mb-4 border border-zinc-700/50">
                        Live Schedule
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2 drop-shadow-md">
                        라디오 편성표 안내
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-base font-medium">
                        오늘의 방송 시간을 바로 확인해보세요.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <RadioCard 
                        href="https://zucca100.com/tv-schedule"
                        title="KBS Radio"
                        sub1="쿨FM · 해피FM · 클래식FM"
                        sub2="제1·2·3라디오 편성 정보"
                        brandColor="bg-blue-500"
                        brandBg="bg-blue-900/10"
                        textColor="from-blue-500 to-transparent"
                    />
                    
                    <RadioCard 
                        href="https://zucca100.com/tv-schedule"
                        title="MBC Radio"
                        sub1="MBC 표준FM · FM4U"
                        sub2="전국 라디오 방송 시간표"
                        brandColor="bg-orange-500"
                        brandBg="bg-orange-900/10"
                        textColor="from-orange-500 to-transparent"
                    />
                    
                    <RadioCard 
                        href="https://zucca100.com/tv-schedule"
                        title="SBS Radio"
                        sub1="파워FM · 러브FM"
                        sub2="고릴라 실시간 편성 정보"
                        brandColor="bg-sky-500"
                        brandBg="bg-sky-900/10"
                        textColor="from-sky-500 to-transparent"
                    />
                </div>

                <div className="mt-8 pt-8 border-t border-zinc-800/60 text-center">
                    <Link href="https://zucca100.com/tv-schedule" className="inline-block px-6 py-3.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-xl text-sm font-semibold transition-colors duration-200 border border-zinc-700/50 shadow-md">
                        📺 TV/종편 전체 편성표 보러가기
                    </Link>
                </div>
            </div>
        </div>
    );
}
