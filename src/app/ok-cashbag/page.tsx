import Link from 'next/link';

export const metadata = {
    title: 'OK캐시백(OK Cashbag) 포인트 조회 및 앱 다운로드 안내',
    description: '대한민국 대표 포인트 서비스 OK캐시백 홈페이지 바로가기 및 안드로이드/iOS 앱 다운로드 링크를 확인하세요. 매일 쌓이는 포인트 혜택을 놓치지 마세요.',
};

export default function OkCashbagPage() {
    const actions = [
        {
            title: 'OK캐시백 홈페이지 바로가기',
            desc: '포인트 조회 및 혜택 한눈에 보기',
            url: 'https://www.okcashbag.com/',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            ),
            color: 'from-red-600 to-red-800'
        },
        {
            title: 'OK캐시백 앱 (Android)',
            desc: '구글 플레이 스토어 다운로드',
            url: 'https://play.google.com/store/apps/details?id=com.skmc.okcashbag.home_google&hl=ko',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            ),
            color: 'from-green-600 to-emerald-700'
        },
        {
            title: 'OK캐시백 앱 (iOS)',
            desc: '애플 앱스토어 다운로드',
            url: 'https://apps.apple.com/kr/app/ok-cashbag/id358731598',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"></path><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
            ),
            color: 'from-zinc-700 to-black'
        }
    ];

    return (
        <div 
            className="min-h-screen bg-[#020202] text-white flex flex-col items-center py-20 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}
        >
            {/* Design Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,_rgba(239,68,68,0.15)_0%,transparent_70%)] z-0 animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 blur-[140px] rounded-full z-0" />
            
            <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center">
                {/* Header */}
                <header className="text-center mb-20 animate-[fadeIn_0.8s_ease-out]">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-red-500 text-[11px] font-black tracking-[0.3em] uppercase mb-8 backdrop-blur-3xl shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                        </span>
                        OK Cashbag Official
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 leading-[1.1]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">포인트의 가치</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-600 drop-shadow-[0_0_30px_rgba(239,68,68,0.4)]">OK캐시백 안내</span>
                    </h1>

                    <div className="h-1.5 w-16 bg-gradient-to-r from-red-500 to-rose-600 mx-auto rounded-full mb-10 shadow-[0_0_25px_rgba(239,68,68,0.6)]" />

                    <p className="text-neutral-400 text-sm md:text-lg font-light tracking-tight leading-relaxed max-w-sm mx-auto">
                        전 국민의 포인트 혜택!<br />
                        <span className="text-neutral-200 font-bold border-b border-red-500/30">공식 홈페이지와 앱</span>으로 스마트한 포인트 생활을 즐겨보세요.
                    </p>
                </header>

                {/* Main Link Grid */}
                <div className="w-full flex flex-col gap-5 mb-24 px-2">
                    {actions.map((action, idx) => (
                        <Link 
                            key={idx}
                            href={action.url}
                            className="group relative flex items-center p-7 bg-zinc-900/60 hover:bg-zinc-800/90 border border-white/10 hover:border-red-500/50 rounded-[2.5rem] transition-all duration-500 backdrop-blur-3xl shadow-2xl hover:shadow-red-900/20 hover:-translate-y-2 active:scale-95 overflow-hidden"
                            style={{ animation: `fadeIn 0.6s ease-out backwards ${idx * 150}ms` }}
                        >
                            {/* Card Accent Glow */}
                            <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-red-500 to-rose-600 opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:w-3" />
                            
                            <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${action.color} text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                {action.icon}
                            </div>
                            
                            <div className="ml-6 flex-1 pr-6 overflow-hidden">
                                <h3 className="text-xl font-bold text-white group-hover:text-red-100 transition-colors truncate">
                                    {action.title}
                                </h3>
                                <p className="text-sm text-neutral-500 mt-1 font-semibold group-hover:text-neutral-300 transition-colors">
                                    {action.desc}
                                </p>
                            </div>
                            
                            <div className="h-12 w-12 flex items-center justify-center rounded-full border border-white/10 text-neutral-600 transition-all duration-500 group-hover:border-red-500/50 group-hover:text-red-500 group-hover:bg-red-500/10 group-hover:rotate-45">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 group-hover:text-red-500 transform group-hover:translate-x-0.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Additional Info Section */}
                <div className="w-full bg-red-950/20 border border-red-500/10 p-10 md:p-14 rounded-[3.5rem] backdrop-blur-xl relative overflow-hidden group hover:border-red-500/30 transition-all duration-700 shadow-3xl">
                    <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 group-hover:scale-125 group-hover:-rotate-12">
                        <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"></path><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                    </div>
                    
                    <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-4 tracking-tighter">
                        <span className="p-3 bg-red-500/20 rounded-2xl text-xl animate-bounce">✨</span>
                        포인트 적립 꿀팁
                    </h2>
                    
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex gap-5 p-6 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-all group-hover:translate-x-2">
                            <div className="h-2.5 w-2.5 rounded-full bg-red-600 mt-2 shrink-0 shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
                            <p className="text-sm md:text-base leading-relaxed text-neutral-400">
                                <strong className="text-neutral-100 font-bold border-b border-red-500/20">영수증 바코드 스캔</strong>: 오프라인 영수증을 즉시 스캔하여 잠자는 포인트를 깨우세요.
                            </p>
                        </div>
                        <div className="flex gap-5 p-6 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-all group-hover:translate-x-2">
                            <div className="h-2.5 w-2.5 rounded-full bg-red-600 mt-2 shrink-0 shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
                            <p className="text-sm md:text-base leading-relaxed text-neutral-400">
                                <strong className="text-neutral-100 font-bold border-b border-red-500/20">출석체크/룰렛</strong>: 매일 가볍게 참여하고 기분 좋은 포인트를 적립하세요.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-14 flex flex-col items-center gap-4 pt-8 border-t border-white/5">
                        <p className="text-[11px] text-neutral-700 font-black uppercase tracking-[0.6em]">
                            More Points, More Life
                        </p>
                    </div>
                </div>

                <footer className="mt-28 text-center w-full">
                    <p className="text-neutral-800 text-[11px] font-bold tracking-[0.8em] uppercase opacity-40">
                        OK Cashbag Official Resource
                    </p>
                </footer>
            </div>
        </div>
    );
}
