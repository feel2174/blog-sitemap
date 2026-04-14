import Link from 'next/link';

export const metadata = {
    title: 'SBI저축은행 사이다뱅크 고객센터 및 앱 다운로드 안내',
    description: 'SBI저축은행(사이다뱅크) 고객센터 안내 및 안드로이드/iOS 앱 다운로드 바로가기. 파킹통장, 복리적금 등 모바일 뱅킹을 편리하게 이용하세요.',
};

export default function SbiSavingsBankPage() {
    const actions = [
        {
            title: 'SBI저축은행 고객센터',
            desc: '고객지원 및 이용 안내 바로가기',
            url: 'https://www.sbisb.co.kr/cus0010100.act',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            ),
            color: 'from-blue-700 to-blue-900'
        },
        {
            title: '사이다뱅크 앱 (Android)',
            desc: '구글 플레이 스토어 다운로드',
            url: 'https://play.google.com/store/apps/details?id=com.sbi.saidabank&hl=ko',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"></path><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
            ),
            color: 'from-cyan-500 to-blue-600'
        },
        {
            title: '사이다뱅크 앱 (iOS)',
            desc: '애플 앱스토어 다운로드',
            url: 'https://apps.apple.com/kr/app/%EC%82%AC%EC%9D%B4%EB%8B%A4%EB%B1%85%ED%81%AC-sbi%EC%A0%80%EC%B6%95%EC%9D%80%ED%96%89/id1460544457',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
            ),
            color: 'from-indigo-600 to-blue-800'
        }
    ];

    return (
        <div 
            className="min-h-screen bg-[#010101] text-white flex flex-col items-center py-20 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}
        >
            {/* Design Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[150px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[130px] rounded-full" />
            
            <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center">
                {/* Header */}
                <header className="text-center mb-20 animate-[fadeIn_0.8s_ease-out]">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-[11px] font-black tracking-[0.3em] uppercase mb-8 backdrop-blur-3xl shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        SBI Savings Bank
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 leading-[1.1]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">금융의 새로운 기준</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">사이다뱅크 안내</span>
                    </h1>

                    <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />

                    <p className="text-neutral-400 text-sm md:text-lg font-light tracking-tight leading-relaxed max-w-sm mx-auto">
                        시원하게 터지는 금융 혜택!<br />
                        <span className="text-neutral-100 font-bold border-b border-blue-500/30">사이다뱅크 고객센터와 앱</span>으로 간편하게 시작하세요.
                    </p>
                </header>

                {/* Main Link Grid */}
                <div className="w-full flex flex-col gap-5 mb-24">
                    {actions.map((action, idx) => (
                        <Link 
                            key={idx}
                            href={action.url}
                            className="group relative flex items-center p-7 bg-zinc-900/60 hover:bg-zinc-800/90 border border-white/10 hover:border-blue-500/50 rounded-[2.5rem] transition-all duration-500 backdrop-blur-3xl shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2 active:scale-95 overflow-hidden"
                            style={{ animation: `fadeIn 0.6s ease-out backwards ${idx * 150}ms` }}
                        >
                            {/* Card Accent Glow */}
                            <div className={`absolute left-0 top-0 w-2 h-full bg-gradient-to-b ${action.color} opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:w-3`} />
                            
                            <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${action.color} text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                {action.icon}
                            </div>
                            
                            <div className="ml-6 flex-1 pr-6 overflow-hidden">
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors truncate">
                                    {action.title}
                                </h3>
                                <p className="text-sm text-neutral-500 mt-1 font-medium group-hover:text-neutral-300 transition-colors">
                                    {action.desc}
                                </p>
                            </div>
                            
                            <div className="h-12 w-12 flex items-center justify-center rounded-full border border-white/10 text-neutral-600 transition-all duration-500 group-hover:border-blue-500/50 group-hover:text-blue-400 group-hover:bg-blue-500/10 group-hover:rotate-45">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Additional Info Section */}
                <div className="w-full bg-blue-950/20 border border-blue-500/10 p-10 md:p-14 rounded-[3.5rem] backdrop-blur-xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-700 shadow-3xl">
                    <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 group-hover:scale-125 group-hover:rotate-12">
                        <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                    </div>

                    <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-4 tracking-tighter">
                        <span className="p-3 bg-blue-500/20 rounded-2xl text-xl animate-bounce">📱</span>
                        사이다뱅크 핵심 혜택
                    </h2>
                    
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex gap-5 p-6 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-all group-hover:translate-x-2">
                            <div className="h-2.5 w-2.5 rounded-full bg-blue-600 mt-2 shrink-0 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                            <p className="text-sm md:text-base leading-relaxed text-neutral-400">
                                <strong className="text-neutral-100 font-bold border-b border-blue-500/20">이체/출금 수수료 0원</strong>: 전국 모든 은행 및 편의점 ATM 수수료가 무제한 면제됩니다.
                            </p>
                        </div>
                        <div className="flex gap-5 p-6 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-all group-hover:translate-x-2">
                            <div className="h-2.5 w-2.5 rounded-full bg-blue-600 mt-2 shrink-0 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                            <p className="text-sm md:text-base leading-relaxed text-neutral-400">
                                <strong className="text-neutral-100 font-bold border-b border-blue-500/20">높은 예금 금리</strong>: 하루만 맡겨도 이자가 쌓이는 파킹통장 등 최상의 금리 혜택을 제공합니다.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-14 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
                        <p className="text-[11px] text-neutral-700 font-black uppercase tracking-[0.6em]">
                            Cool & Fresh Banking
                        </p>
                    </div>
                </div>

                <footer className="mt-28 text-center w-full">
                    <p className="text-neutral-800 text-[11px] font-bold tracking-[0.8em] uppercase opacity-40">
                        SBI Savings Bank Resource
                    </p>
                </footer>
            </div>
        </div>
    );
}
