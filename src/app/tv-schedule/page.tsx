import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '주요 방송사 편성표 및 라디오 일정',
    description: '주요 지상파, 종편, 케이블 TV 편성표 및 라디오 채널별 스케줄을 확인하세요.',
};

// 재사용 가능한 스케줄 버튼/카드 컴포넌트
const ScheduleCard = ({ href, title, sub, colorClass }: { href: string; title: string; sub: string; colorClass: string }) => (
    <Link 
        href={href} 
        className={`flex items-center justify-between p-5 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:brightness-110 ${colorClass} group text-white no-underline relative overflow-hidden`}
    >
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="flex flex-col relative z-10 w-[85%]">
            <span className="font-bold text-lg md:text-xl leading-tight mb-1 tracking-tight break-keep">{title}</span>
            <span className="text-xs md:text-sm text-white/80 font-medium break-keep">{sub}</span>
        </div>
        <span className="text-xl md:text-2xl font-light opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all relative z-10">↗</span>
    </Link>
);

export default function TvSchedulePage() {
    return (
        <div
            className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-start px-4 py-16 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Cinematic Background Image (optional grayscale filter or solid background) */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-30 scale-105 fixed"
                style={{ backgroundImage: 'url("/netflix-bg.png")', filter: 'grayscale(70%) blur(4px)' }}
            />

            {/* Background Overlays and Gradients */}
            <div className="absolute inset-0 bg-zinc-950/70 z-[1] fixed pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/80 z-[2] fixed pointer-events-none" />

            <div className="relative z-10 w-full max-w-3xl">
                {/* Header */}
                <div className="mb-14 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 tracking-tighter mb-4 drop-shadow-lg uppercase">
                        TV Schedule
                    </h1>
                    <p className="text-zinc-400 text-sm md:text-base font-medium">
                        주요 방송사 및 라디오 편성표 안내
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Section 1: 주요 방송사 편성표 */}
                    <section className="bg-zinc-900/40 p-6 md:p-8 rounded-2xl border border-zinc-800/50 backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-2xl font-bold text-zinc-100">주요 방송사 편성표</h2>
                            <span className="text-[10px] md:text-xs font-bold px-2.5 py-1 bg-indigo-500/20 text-indigo-300 rounded-full tracking-wider uppercase">TV Channels</span>
                        </div>
                        <p className="text-sm text-zinc-400 mb-6">주요 지상파 및 케이블 방송사의 공식 편성표입니다.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <ScheduleCard 
                                href="https://schedule.kbs.co.kr/" 
                                title="KBS 편성표" 
                                sub="KBS1 · KBS2 TV 채널" 
                                colorClass="bg-gradient-to-br from-[#1E40AF] to-[#1D4ED8]" 
                            />
                            <ScheduleCard 
                                href="https://schedule.imbc.com/" 
                                title="MBC 편성표" 
                                sub="MBC 본사 채널" 
                                colorClass="bg-gradient-to-br from-[#EA580C] to-[#C2410C]" 
                            />
                            <ScheduleCard 
                                href="https://www.sbs.co.kr/schedule" 
                                title="SBS 편성표" 
                                sub="SBS TV 채널" 
                                colorClass="bg-gradient-to-br from-[#0284C7] to-[#0369A1]" 
                            />
                            <ScheduleCard 
                                href="https://jtbc.co.kr/schedule" 
                                title="JTBC 편성표" 
                                sub="JTBC 종편 채널" 
                                colorClass="bg-gradient-to-br from-[#7C3AED] to-[#6D28D9]" 
                            />
                            <ScheduleCard 
                                href="http://211.43.210.44/tvguide/index.php?main=organization&c=569" 
                                title="티비조선 편성표" 
                                sub="티비조선 종편 채널" 
                                colorClass="bg-gradient-to-br from-[#E11D48] to-[#BE123C]" 
                            />
                            <ScheduleCard 
                                href="https://www.kbsn.co.kr/schedule" 
                                title="KBS N 편성표" 
                                sub="DRAMA · JOY · SPORTS 등" 
                                colorClass="bg-gradient-to-br from-[#059669] to-[#047857]" 
                            />
                            <ScheduleCard 
                                href="https://www.mbcplus.com/web/schedule/list.do" 
                                title="MBC Plus 편성표" 
                                sub="every1 · SPORTS+ · 드라마넷" 
                                colorClass="bg-gradient-to-br from-[#DC2626] to-[#B91C1C]" 
                            />
                        </div>
                    </section>

                    {/* Section 2: 라디오 채널별 편성표 */}
                    <section className="bg-zinc-900/40 p-6 md:p-8 rounded-2xl border border-zinc-800/50 backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-2xl font-bold text-zinc-100">라디오 채널별 편성표</h2>
                            <span className="text-[10px] md:text-xs font-bold px-2.5 py-1 bg-emerald-500/20 text-emerald-300 rounded-full tracking-wider uppercase">Radio Schedules</span>
                        </div>
                        <p className="text-sm text-zinc-400 mb-6">지상파 라디오 채널별 상세 편성 정보입니다.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <ScheduleCard 
                                href="http://211.43.210.44/tvguide/index.php?main=radio&c=825" 
                                title="KBS 라디오 편성표" 
                                sub="KBS 제1라디오 · 제2라디오 등" 
                                colorClass="bg-gradient-to-br from-[#1E3A8A] to-[#172554] border border-[#1E40AF]/50" 
                            />
                            <ScheduleCard 
                                href="http://211.43.210.44/tvguide/index.php?main=radio&c=831" 
                                title="MBC 라디오 편성표" 
                                sub="MBC 표준FM · FM4U" 
                                colorClass="bg-gradient-to-br from-[#78350F] to-[#451A03] border border-[#9A3412]/50" 
                            />
                            <ScheduleCard 
                                href="http://211.43.210.44/tvguide/index.php?main=radio&c=835" 
                                title="SBS 라디오 편성표" 
                                sub="SBS 러브FM · 파워FM" 
                                colorClass="bg-gradient-to-br from-[#0C4A6E] to-[#082F49] border border-[#0284C7]/50" 
                            />
                        </div>
                    </section>

                    {/* Section 3: 분류별 전체 편성표 */}
                    <section className="bg-zinc-900/40 p-6 md:p-8 rounded-2xl border border-zinc-800/50 backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-2xl font-bold text-zinc-100">분류별 전체 편성표</h2>
                            <span className="text-[10px] md:text-xs font-bold px-2.5 py-1 bg-pink-500/20 text-pink-300 rounded-full tracking-wider uppercase">All Categories</span>
                        </div>
                        <p className="text-sm text-zinc-400 mb-6">전체 채널을 카테고리별로 모아봤습니다.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <ScheduleCard 
                                href="http://211.43.210.44/tvguide/index.php?main=public" 
                                title="지상파 채널 전체 편성표" 
                                sub="KBS · MBC · SBS 전체보기" 
                                colorClass="bg-zinc-800/80 border border-zinc-700/50 hover:border-blue-500/50 hover:bg-zinc-800" 
                            />
                            <ScheduleCard 
                                href="http://211.43.210.44/tvguide/index.php?main=organization" 
                                title="종합편성채널 전체보기" 
                                sub="JTBC 등 종편 전체" 
                                colorClass="bg-zinc-800/80 border border-zinc-700/50 hover:border-purple-500/50 hover:bg-zinc-800" 
                            />
                            <ScheduleCard 
                                href="http://211.43.210.44/tvguide/index.php?main=cable&sub=cable0" 
                                title="케이블 채널 전체 편성표" 
                                sub="케이블 주요 채널 모음" 
                                colorClass="bg-zinc-800/80 border border-zinc-700/50 hover:border-green-500/50 hover:bg-zinc-800" 
                            />
                            <ScheduleCard 
                                href="http://211.43.210.44/tvguide/index.php?main=abroad" 
                                title="해외위성채널 전체보기" 
                                sub="해외 · 국제 방송" 
                                colorClass="bg-zinc-800/80 border border-zinc-700/50 hover:border-indigo-500/50 hover:bg-zinc-800" 
                            />
                            <ScheduleCard 
                                href="http://211.43.210.44/tvguide/index.php?main=radio" 
                                title="라디오 전체보기" 
                                sub="국내 라디오 전체 채널" 
                                colorClass="bg-zinc-800/80 border border-zinc-700/50 hover:border-pink-500/50 hover:bg-zinc-800" 
                            />
                        </div>
                    </section>
                </div>

                {/* Footer Info */}
                <div className="mt-12 text-center text-zinc-500 text-xs md:text-sm leading-relaxed pb-8">
                    <p>편성 정보는 각 방송사 상황에 따라 변경될 수 있습니다.</p>
                </div>
            </div>
        </div>
    );
}
