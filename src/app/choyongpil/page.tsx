import Link from 'next/link';

export const metadata = {
    title: '가왕(歌王) 조용필 노래모음 무료 재생 | 히트곡 대표곡 연속 듣기',
    description: '가왕 조용필의 명곡들을 무료로 감상하세요. 전설적인 히트곡부터 신곡까지, 끊김 없는 유튜브 노래 모음 링크를 제공합니다.',
};

export default function ChoYongPilLandingPage() {
    return (
        <div
            className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Legend Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-50 scale-105"
                style={{ backgroundImage: 'url("/choyongpil-bg.png")' }}
            />

            {/* Background Overlays */}
            <div className="absolute inset-0 bg-black/60 z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] z-[2]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent z-[2]" />

            <div className="relative z-10 w-full max-w-md text-center">
                {/* Cho Yong-Pil Header */}
                <div className="mb-14">
                    <div className="inline-block px-5 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8">
                        <span className="text-amber-500 text-xs font-black tracking-[0.3em] uppercase">The Legend of K-Pop</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
                        가왕 <span className="text-amber-500">조용필</span>
                    </h1>
                    <p className="text-zinc-400 text-base md:text-xl font-medium tracking-tight">
                        세대를 아우르는 명품 목소리, 그 감동 그대로
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-5">
                    {/* Link 1: Legend YouTube Playlist */}
                    <Link
                        href="https://www.youtube.com/@LegendKpop/search?query=%EC%A1%B0%EC%9A%A9%ED%95%84"
                        className="group relative flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 text-white p-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-white/10 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:-translate-y-1 active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-amber-500 p-3 rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                            </div>
                            <span className="tracking-tight">조용필 레전드 전체듣기</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>

                    {/* Link 2: Specific Hit Songs Continuous Listening */}
                    <Link
                        href="https://youtu.be/baaM_G9co9I?si=zPLwhnaibS0uTfKX"
                        className="group relative flex items-center justify-between bg-white text-black p-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-amber-500 hover:shadow-[0_10px_40px_rgba(245,158,11,0.3)] hover:-translate-y-1 active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-black/10 p-3 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                            </div>
                            <span className="tracking-tight">조용필 히트곡 명곡 모음</span>
                        </div>
                        <div className="bg-black/5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest group-hover:bg-black/20 transition-colors">
                            Continuous
                        </div>
                    </Link>

                    {/* Link 3: Representative Songs Mix Radio */}
                    <Link
                        href="https://www.youtube.com/watch?v=iuDDKeuTeCw&list=RDiuDDKeuTeCw&start_radio=1&pp=ygUQ7KGw7Jqp7ZWEIOuFuOuemKAHAdIHCQnTCgGHKiGM7w%3D%3D"
                        className="group relative flex items-center justify-between bg-zinc-900 border border-zinc-800 text-white p-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:border-amber-500/50 hover:bg-zinc-800 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-white/5 p-3 rounded-xl border border-white/10 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1"/></svg>
                            </div>
                            <span className="tracking-tight">조용필 실시간 노래 믹스</span>
                        </div>
                        <div className="bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full text-[10px] font-black group-hover:bg-amber-500 group-hover:text-black transition-all">
                            RADIO MIX
                        </div>
                    </Link>
                </div>

                {/* Info Text */}
                <div className="mt-16 p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl text-zinc-400 text-sm leading-relaxed">
                    <div className="flex justify-center gap-6 mb-6">
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-amber-500 font-black text-lg">20+</span>
                            <span className="text-[10px] uppercase tracking-widest">Albums</span>
                        </div>
                        <div className="w-[1px] h-8 bg-white/10 my-auto" />
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-amber-500 font-black text-lg">50+</span>
                            <span className="text-[10px] uppercase tracking-widest">Years</span>
                        </div>
                        <div className="w-[1px] h-8 bg-white/10 my-auto" />
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-amber-500 font-black text-lg">♾️</span>
                            <span className="text-[10px] uppercase tracking-widest">Emotion</span>
                        </div>
                    </div>
                    <p className="italic">
                        &quot;기다려주신 팬 여러분께 보답하는 마음으로 노래하겠습니다.&quot;
                    </p>
                    <p className="mt-4 text-xs text-zinc-600">
                        유튜브 정책에 따라 영상 재생 중 광고가 포함될 수 있습니다.
                    </p>
                </div>

                <div className="mt-12 text-zinc-600 text-[10px] tracking-[0.4em] uppercase font-bold">
                    K-Pop Legend Cho Yong Pil
                </div>
            </div>
        </div>
    );
}
