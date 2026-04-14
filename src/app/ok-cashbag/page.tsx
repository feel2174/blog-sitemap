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
            className="min-h-screen bg-[#080808] text-white flex flex-col items-center py-16 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
        >
            {/* Design Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(239,68,68,0.08)_0%,transparent_50%)] z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 blur-[120px] rounded-full z-0" />
            
            <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center">
                {/* Header */}
                <header className="text-center mb-16 px-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-xl">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                        </span>
                        OK Cashbag Official
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">포인트가 쌓이는 즐거움</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-600">OK캐시백 안내</span>
                    </h1>

                    <div className="h-1.5 w-12 bg-gradient-to-r from-red-500 to-rose-600 mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(239,68,68,0.3)]" />

                    <p className="text-neutral-400 text-sm md:text-base font-light tracking-tight leading-relaxed max-w-sm mx-auto">
                        전 국민이 사랑하는 포인트 혜택!<br />
                        <span className="text-neutral-200 font-medium">홈페이지와 앱</span>으로 실속 있는 포인트 생활을 시작하세요.
                    </p>
                </header>

                {/* Main Link Grid */}
                <div className="w-full space-y-4 mb-16 px-2">
                    {actions.map((action, idx) => (
                        <Link 
                            key={idx}
                            href={action.url}
                            className="group relative flex items-center p-6 bg-zinc-900/50 hover:bg-zinc-900/80 border border-white/[0.05] hover:border-red-500/30 rounded-[2.5rem] transition-all duration-500 backdrop-blur-3xl active:scale-[0.98] overflow-hidden"
                        >
                            {/* Card Accent Glow */}
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${action.color} text-white shadow-xl shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
                                {action.icon}
                            </div>
                            
                            <div className="ml-5 flex-1 overflow-hidden">
                                <h3 className="text-lg font-bold text-white group-hover:text-red-100 transition-colors truncate">
                                    {action.title}
                                </h3>
                                <p className="text-xs text-neutral-500 mt-0.5 font-semibold group-hover:text-neutral-400 transition-colors">
                                    {action.desc}
                                </p>
                            </div>
                            
                            <div className="h-10 w-10 flex items-center justify-center rounded-full border border-white/5 opacity-40 group-hover:opacity-100 group-hover:border-red-500/40 group-hover:bg-red-500/10 transition-all duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 group-hover:text-red-500 transform group-hover:translate-x-0.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Additional Info Section */}
                <div className="w-full bg-zinc-900/30 border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
                    
                    <h2 className="text-xl font-black text-white mb-6 flex items-center gap-3 tracking-tighter">
                        <span className="p-2 bg-red-500/20 rounded-lg">✨</span>
                        포인트 적립 꿀팁
                    </h2>
                    
                    <ul className="space-y-4">
                        <li className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-colors">
                            <div className="h-2 w-2 rounded-full bg-red-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                            <p className="text-xs leading-relaxed text-neutral-400">
                                <strong className="text-neutral-200">영수증 바코드 스캔</strong>: 마트나 편의점에서 구매한 영수증을 앱으로 스캔하여 포인트를 즉시 적립하세요.
                            </p>
                        </li>
                        <li className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-colors">
                            <div className="h-2 w-2 rounded-full bg-red-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                            <p className="text-xs leading-relaxed text-neutral-400">
                                <strong className="text-neutral-200">출석체크 이벤트</strong>: 매일 앱 실행 시 제공되는 출석 포인트와 룰렛 이벤트에 참여하세요.
                            </p>
                        </li>
                    </ul>
                    
                    <div className="mt-8 flex justify-center pt-6 border-t border-white/5">
                        <p className="text-[10px] text-neutral-700 font-bold uppercase tracking-[0.4em]">
                            More Points, More Life
                        </p>
                    </div>
                </div>

                <footer className="mt-20 text-center w-full">
                    <p className="text-neutral-800 text-[10px] font-medium tracking-[0.6em] uppercase">
                        OK Cashbag Official Resource
                    </p>
                </footer>
            </div>
        </div>
    );
}
