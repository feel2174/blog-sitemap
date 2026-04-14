import Link from 'next/link';

export const metadata = {
    title: 'OK저축은행 고객센터 및 앱 다운로드 안내 (모바일 뱅킹 바로가기)',
    description: 'OK저축은행 고객센터 전화번호, 공지사항 및 안드로이드/iOS 모바일 앱 다운로드 링크를 확인하세요. 간편하게 예적금 및 대출 서비스를 이용할 수 있습니다.',
};

export default function OkSavingsBankPage() {
    const actions = [
        {
            title: 'OK저축은행 고객센터',
            desc: '공지사항 및 고객 지원센터 바로가기',
            url: 'https://www.oksavingsbank.com/#/custNwsList?menuCd=00176',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            ),
            color: 'from-orange-500 to-red-600'
        },
        {
            title: 'Android 앱 다운로드',
            desc: '구글 플레이 스토어 (OK저축은행)',
            url: 'https://play.google.com/store/apps/details?id=com.cabsoft.oksavingbank&hl=ko',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            ),
            color: 'from-green-500 to-emerald-700'
        },
        {
            title: 'iOS 앱 다운로드',
            desc: '애플 앱스토어 (OK저축은행)',
            url: 'https://apps.apple.com/kr/app/ok-%EC%A0%80%EC%B6%95%EC%9D%80%ED%96%89/id973344869',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19c-2.3 0-6.4-.8-8.1-3.2-.7-1-1.1-2.4-1.1-3.8 0-2.4 1-4.3 2.4-5.5C4.5 5.3 5.9 4.8 7.3 4.8c1.5 0 2.8.5 3.9 1 .7.3 1.4.7 1.9.7.5 0 1.2-.4 1.9-.7 1.1-.5 2.4-1 3.9-1 1.4 0 2.8.5 4.1 1.7 1.4 1.2 2.4 3.1 2.4 5.5 0 1.4-.4 2.8-1.1 3.8-1.7 2.4-5.8 3.2-8.1 3.2z"></path><path d="M12 4.8c.1-1.1.6-2.2 1.4-3"></path></svg>
            ),
            color: 'from-zinc-600 to-zinc-900'
        }
    ];

    return (
        <div 
            className="min-h-screen bg-[#010101] text-white flex flex-col items-center py-20 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}
        >
            {/* Design Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-600/20 blur-[150px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-600/10 blur-[130px] rounded-full" />
            
            <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center">
                {/* Header */}
                <header className="text-center mb-20 animate-[fadeIn_0.8s_ease-out]">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-500 text-[11px] font-black tracking-[0.3em] uppercase mb-8 backdrop-blur-3xl shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        OK Savings Bank
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 leading-[1.1]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">더 나은 금융 서비스</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-600 drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]">OK저축은행 안내</span>
                    </h1>

                    <div className="h-1.5 w-16 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full mb-10 shadow-[0_0_20px_rgba(249,115,22,0.5)]" />

                    <p className="text-neutral-400 text-sm md:text-lg font-light tracking-tight leading-relaxed max-w-sm mx-auto">
                        모바일로 더 빠르고 편리하게!<br />
                        <span className="text-neutral-100 font-bold border-b border-orange-500/30">OK저축은행 고객센터와 앱</span>으로 금융 업무를 시작하세요.
                    </p>
                </header>

                {/* Main Link Grid */}
                <div className="w-full flex flex-col gap-5 mb-24">
                    {actions.map((action, idx) => (
                        <Link 
                            key={idx}
                            href={action.url}
                            className="group relative flex items-center p-7 bg-zinc-900/60 hover:bg-zinc-800/90 border border-white/10 hover:border-orange-500/50 rounded-[2.5rem] transition-all duration-500 backdrop-blur-3xl shadow-2xl hover:shadow-orange-900/20 hover:-translate-y-2 active:scale-95 overflow-hidden"
                            style={{ animation: `fadeIn 0.6s ease-out backwards ${idx * 150}ms` }}
                        >
                            {/* Card Accent Glow */}
                            <div className={`absolute left-0 top-0 w-2 h-full bg-gradient-to-b ${action.color} opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:w-3`} />
                            
                            <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${action.color} text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                {action.icon}
                            </div>
                            
                            <div className="ml-6 flex-1 pr-6 overflow-hidden">
                                <h3 className="text-xl font-bold text-white group-hover:text-orange-200 transition-colors truncate">
                                    {action.title}
                                </h3>
                                <p className="text-sm text-neutral-500 mt-1 font-medium group-hover:text-neutral-300 transition-colors">
                                    {action.desc}
                                </p>
                            </div>
                            
                            <div className="h-12 w-12 flex items-center justify-center rounded-full border border-white/10 text-neutral-600 transition-all duration-500 group-hover:border-orange-500/50 group-hover:text-orange-400 group-hover:bg-orange-500/10 group-hover:rotate-45">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Additional Info Section */}
                <div className="w-full bg-orange-950/20 border border-orange-500/10 p-10 md:p-14 rounded-[3.5rem] backdrop-blur-xl relative overflow-hidden group hover:border-orange-500/30 transition-all duration-700 shadow-3xl">
                    <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 group-hover:scale-125 group-hover:rotate-12">
                        <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </div>

                    <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-4 tracking-tighter">
                        <span className="p-3 bg-orange-500/20 rounded-2xl text-xl animate-bounce">🛡️</span>
                        안전한 금융 가이드
                    </h2>
                    
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex gap-5 p-6 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-all group-hover:translate-x-2">
                            <div className="h-2.5 w-2.5 rounded-full bg-orange-600 mt-2 shrink-0 shadow-[0_0_12px_rgba(249,115,22,0.8)]" />
                            <p className="text-sm md:text-base leading-relaxed text-neutral-400">
                                <strong className="text-neutral-100 font-bold border-b border-orange-500/20">공식 스토어 권장</strong>: 보안을 위해 반드시 구글 플레이나 앱스토어에서만 공식 앱을 설치하세요.
                            </p>
                        </div>
                        <div className="flex gap-5 p-6 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-all group-hover:translate-x-2">
                            <div className="h-2.5 w-2.5 rounded-full bg-orange-600 mt-2 shrink-0 shadow-[0_0_12px_rgba(249,115,22,0.8)]" />
                            <p className="text-sm md:text-base leading-relaxed text-neutral-400">
                                <strong className="text-neutral-100 font-bold border-b border-orange-500/20">챗봇 서비스</strong>: 전화 대기가 길어질 때 카카오톡 챗봇을 이용하면 <span className="text-orange-400">빠른 답변</span>을 얻을 수 있습니다.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-14 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
                        <p className="text-[11px] text-neutral-700 font-black uppercase tracking-[0.6em]">
                            Secure Banking Experience
                        </p>
                    </div>
                </div>

                <footer className="mt-28 text-center w-full">
                    <p className="text-neutral-800 text-[11px] font-bold tracking-[0.8em] uppercase opacity-40">
                        OK Savings Bank Official Support
                    </p>
                </footer>
            </div>
        </div>
    );
}
