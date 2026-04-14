import Link from 'next/link';

export const metadata = {
    title: '티머니GO 고객센터 및 앱 다운로드 안내 (고속/시외버스 연동)',
    description: '티머니고(T-money GO) 고객센터 전화번호와 앱 다운로드(안드로이드/iOS) 링크를 확인하세요. 고속버스, 시외버스, 택시, 따릉이 통합 결제가 가능합니다.',
};

export default function TmoneyGoPage() {
    const actions = [
        {
            title: '티머니 고객센터 바로가기',
            desc: '고속/시외버스 결제 및 이용 문의',
            url: 'https://www.t-money.co.kr/ncs/pct/cuscent/ReadCusCentInf.dev',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.82 12.82 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"></path></svg>
            ),
            color: 'from-blue-500 to-indigo-600'
        },
        {
            title: '티머니GO 앱 다운로드 (Android)',
            desc: '구글 플레이 스토어 바로가기',
            url: 'https://play.google.com/store/apps/details?id=kr.co.tmoney.tia&hl=ko',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"></path><path d="M7 11h10"></path><path d="M12 7v8"></path></svg>
            ),
            color: 'from-green-500 to-emerald-600'
        },
        {
            title: '티머니GO 앱 다운로드 (iOS)',
            desc: '애플 앱스토어 바로가기',
            url: 'https://apps.apple.com/kr/app/%ED%8B%B0%EB%A8%B8%EB%8B%88go-%ED%83%9D%EC%8B%9C-%EA%B3%A0%EC%86%8D%EC%8B%9C%EC%99%B8-%EB%94%B0%EB%A6%89%EC%9D%B4-%ED%82%A5%EB%B3%B4%EB%93%9C/id1483433931',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
            ),
            color: 'from-gray-600 to-slate-800'
        }
    ];

    return (
        <div 
            className="min-h-screen bg-[#0a0a0c] text-white flex flex-col items-center py-16 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Design Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-600/10 blur-[120px] rounded-full z-0" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[80px] rounded-full z-0" />
            
            <div className="relative z-10 w-full max-w-xl mx-auto">
                {/* Header */}
                <header className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        T-money GO Info
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">가장 스마트한 이동</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-400 to-blue-500 text-shadow-glow">티머니GO 안내</span>
                    </h1>

                    <div className="h-1.5 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

                    <p className="text-neutral-400 text-sm md:text-base font-light tracking-tight leading-relaxed">
                        고속버스, 시외버스 터미널 예매부터 따릉이, 택시까지!<br className="hidden sm:block" />
                        <span className="text-neutral-200 font-medium">티머니GO 하나로 모든 이동을 통합</span>하세요.
                    </p>
                </header>

                {/* Main Action List */}
                <nav className="flex flex-col gap-5 mb-16">
                    {actions.map((item, index) => (
                        <Link 
                            key={index}
                            href={item.url}
                            className="group relative flex items-center p-6 bg-zinc-900/40 hover:bg-zinc-800/60 border border-white/5 hover:border-blue-500/30 rounded-[2rem] transition-all duration-400 backdrop-blur-2xl overflow-hidden active:scale-[0.98]"
                        >
                            {/* Inner Glow */}
                            <div className={`absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b ${item.color} opacity-80 group-hover:w-2 transition-all duration-300`} />
                            
                            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-400`}>
                                {item.icon}
                            </div>

                            <div className="ml-5 flex-1 pr-6">
                                <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-neutral-500 mt-1 font-medium tracking-tight group-hover:text-neutral-400 transition-colors">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-neutral-600 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                    ))}
                </nav>

                {/* Feature Description Card */}
                <div className="glass-card bg-zinc-900/20 border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-[0.03] rotate-12 pointer-events-none">
                        <svg width="140" height="140" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13H5v-2h14v2z"/></svg>
                    </div>

                    <h2 className="text-xl font-black text-white mb-6 flex items-center gap-3 tracking-tighter">
                        <span className="p-2 bg-blue-500/20 rounded-lg">🚀</span>
                        티머니GO 주요 기능
                    </h2>

                    <div className="flex flex-col gap-6">
                        <div className="flex gap-4">
                            <div className="mt-1 h-5 w-5 shrink-0 rounded-full border-2 border-blue-500/30 flex items-center justify-center">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-neutral-200 mb-1">통합 경로 탐색</h4>
                                <p className="text-xs text-neutral-500 leading-relaxed font-light">고속/시외버스와 따릉이, 킥보드를 연계한 최적 경로 안내</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1 h-5 w-5 shrink-0 rounded-full border-2 border-indigo-500/30 flex items-center justify-center">
                                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-neutral-200 mb-1">GO마일리지 혜택</h4>
                                <p className="text-xs text-neutral-500 leading-relaxed font-light">대중교통 환승 및 서비스 이용 시 쌓이는 강력한 마일리지 적립</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="h-px w-full bg-white/5 my-8" />
                    
                    <p className="text-[10px] text-center text-neutral-600 font-bold uppercase tracking-[0.3em]">
                        Your All-in-One Mobility Partner
                    </p>
                </div>

                <footer className="mt-20 text-center w-full">
                    <p className="text-neutral-800 text-[10px] font-medium tracking-[0.5em] uppercase">
                        T-money GO Support Portal
                    </p>
                </footer>
            </div>
            
            <style dangerouslySetInnerHTML={{__html: `
                .text-shadow-glow {
                    text-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
                }
            `}} />
        </div>
    );
}
