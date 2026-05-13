import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '사과게임 (과일박스) 싱글 및 멀티 플레이 (온라인 대전) 바로가기',
    description: '합이 10이 되도록 사과를 지우는 중독성 강한 두뇌 퍼즐! 사과게임(Fruit Box) 오리지널 싱글 플레이와 전 세계 유저들과 대결하는 실시간 멀티 플레이를 바로 즐겨보세요.',
};

export default function AppleGamePage() {
    const games = [
        {
            title: '사과게임 싱글 플레이',
            desc: '오리지널 감성 그대로 혼자서 최고 기록 도전',
            url: 'https://www.gamesaien.com/game/fruit_box_a/',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/>
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                    <path d="M12 2v2"/>
                </svg>
            ),
            color: 'from-red-600 to-red-800',
            badge: 'Original Classic'
        },
        {
            title: '사과게임 멀티 플레이',
            desc: '전 세계 유저들과 실시간으로 겨루는 온라인 대전',
            url: 'https://apple.oshizi.com/ko/',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            ),
            color: 'from-emerald-500 to-green-700',
            badge: 'Online PvP'
        }
    ];

    return (
        <div 
            className="min-h-screen bg-[#020617] text-white flex flex-col relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}
        >
            {/* Design Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-600/20 blur-[150px] rounded-full animate-pulse pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-green-600/10 blur-[130px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center pt-20 px-6 pb-12">
                {/* Header */}
                <header className="text-center mb-16 animate-[fadeIn_0.8s_ease-out]">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-[11px] font-black tracking-[0.3em] uppercase mb-8 backdrop-blur-3xl shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        Fruit Box Game
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-[1.2]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">합이 10이 되도록 지우는</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-400 to-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.3)]">중독성 사과게임!</span>
                    </h1>

                    <div className="h-1.5 w-16 bg-gradient-to-r from-red-600 to-green-600 mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(239,68,68,0.5)]" />

                    <p className="text-slate-400 text-sm md:text-lg font-light tracking-tight leading-relaxed max-w-sm mx-auto break-keep">
                        숫자 합이 10이 되도록 드래그하여 지우는 두뇌 퍼즐 게임!<br />
                        <strong className="text-slate-100 font-bold border-b border-red-500/30">싱글 모드</strong>와 <strong className="text-slate-100 font-bold border-b border-green-500/30">실시간 멀티 대전</strong>을 지금 바로 시작하세요.
                    </p>
                </header>

                {/* Main Link Grid */}
                <div className="w-full flex flex-col gap-5 mb-16">
                    {games.map((game, idx) => (
                        <Link 
                            key={idx}
                            href={game.url}
                            className="group relative flex flex-col sm:flex-row items-start sm:items-center p-7 bg-slate-900/60 hover:bg-slate-800/90 border border-white/10 hover:border-red-500/50 rounded-[2.5rem] transition-all duration-500 backdrop-blur-3xl shadow-2xl hover:shadow-red-900/20 hover:-translate-y-2 active:scale-95 overflow-hidden gap-4 sm:gap-0"
                            style={{ animation: `fadeIn 0.6s ease-out backwards ${idx * 150}ms` }}
                        >
                            {/* Card Accent Glow */}
                            <div className={`absolute left-0 top-0 w-2 h-full bg-gradient-to-b ${game.color} opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:w-3`} />
                            
                            <div className="flex items-center gap-5 w-full sm:w-auto">
                                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${game.color} text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                    {game.icon}
                                </div>
                                <div className="sm:hidden flex flex-col">
                                    <span className="text-[11px] font-bold text-red-400 tracking-wider uppercase mb-0.5">{game.badge}</span>
                                    <h3 className="text-lg font-bold text-white truncate">{game.title}</h3>
                                </div>
                            </div>
                            
                            <div className="sm:ml-6 flex-1 pr-2 sm:pr-6 overflow-hidden">
                                <div className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-red-300 text-[10px] font-bold mb-1.5 tracking-wider uppercase">
                                    {game.badge}
                                </div>
                                <h3 className="hidden sm:block text-xl font-bold text-white group-hover:text-red-200 transition-colors truncate">
                                    {game.title}
                                </h3>
                                <p className="text-sm text-slate-400 font-medium group-hover:text-slate-300 transition-colors break-keep leading-relaxed">
                                    {game.desc}
                                </p>
                            </div>
                            
                            <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-slate-500 transition-all duration-500 group-hover:border-red-500/50 group-hover:text-red-400 group-hover:bg-red-500/10 group-hover:rotate-45 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Additional Info Section */}
                <div className="w-full bg-red-950/20 border border-red-500/10 p-8 md:p-12 rounded-[3.5rem] backdrop-blur-xl relative overflow-hidden group hover:border-red-500/30 transition-all duration-700 shadow-3xl mb-12">
                    <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-1000 group-hover:scale-125 group-hover:rotate-12">
                        <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z"/></svg>
                    </div>

                    <h2 className="text-xl md:text-2xl font-black text-white mb-8 flex items-center gap-3 tracking-tighter">
                        <span className="p-2.5 bg-red-500/20 rounded-2xl text-lg animate-bounce">🍎</span>
                        사과게임(과일박스) 게임 팁
                    </h2>
                    
                    <div className="grid grid-cols-1 gap-5">
                        <div className="flex gap-4 p-5 rounded-[2rem] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-all group-hover:translate-x-2">
                            <div className="h-2 w-2 rounded-full bg-red-500 mt-2 shrink-0 shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
                            <p className="text-xs md:text-sm leading-relaxed text-slate-400 break-keep">
                                <strong className="text-slate-100 font-bold border-b border-red-500/20">기본 규칙</strong>: 판 위에 나열된 사과 속 숫자들을 직사각형으로 드래그하여, 선택된 사과들의 숫자를 합친 값이 <strong className="text-amber-400 font-bold">정확히 10</strong>이 되면 사과들이 사라지며 점수를 얻습니다.
                            </p>
                        </div>
                        <div className="flex gap-4 p-5 rounded-[2rem] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-all group-hover:translate-x-2">
                            <div className="h-2 w-2 rounded-full bg-amber-500 mt-2 shrink-0 shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
                            <p className="text-xs md:text-sm leading-relaxed text-slate-400 break-keep">
                                <strong className="text-slate-100 font-bold border-b border-amber-500/20">고득점 전략</strong>: 한 번의 드래그로 최대한 많은 수의 사과를 포함시켜 10을 만들면 훨씬 높은 추가 점수를 획득할 수 있습니다.
                            </p>
                        </div>
                        <div className="flex gap-4 p-5 rounded-[2rem] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-all group-hover:translate-x-2">
                            <div className="h-2 w-2 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
                            <p className="text-xs md:text-sm leading-relaxed text-slate-400 break-keep">
                                <strong className="text-slate-100 font-bold border-b border-green-500/20">모드 선택</strong>: 혼자서 차분하게 실력을 키우고 싶다면 <strong className="text-slate-200">싱글 플레이</strong>를, 빠르고 박진감 넘치는 실시간 경쟁을 원한다면 <strong className="text-slate-200">멀티 플레이</strong>를 선택하세요.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 쇼핑 추천 섹션 */}
            <div className="w-full bg-[#0a0a0a] py-12 border-t border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-slate-900/50 rounded-[2.5rem] p-6 border border-white/10">
                        <CoupangAds 
                            keyword="게이밍 마우스" 
                            title="🖱️ 사과게임을 더 빠르고 정교하게!"
                            hookText="정확하고 빠른 드래그 컨트롤이 핵심인 사과게임! 그립감이 뛰어나고 반응 속도가 완벽한 인기 게이밍 마우스를 특가로 만나보세요."
                        />
                    </div>
                </div>
            </div>

            <footer className="py-12 text-center w-full bg-[#020617] relative z-10">
                <p className="text-slate-700 text-[11px] font-bold tracking-[0.8em] uppercase opacity-60">
                    Fruit Box Game
                </p>
            </footer>
        </div>
    );
}
