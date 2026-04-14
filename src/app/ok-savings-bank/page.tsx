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
            className="min-h-screen bg-[#080808] text-white flex flex-col items-center py-16 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Premium Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-red-600/10 via-transparent to-transparent z-0" />
            
            <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center">
                {/* Header Section */}
                <header className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-full text-orange-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-xl">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        OK Savings Bank
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-[1.1]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">더 나은 금융 서비스</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-600">OK저축은행 안내</span>
                    </h1>

                    <div className="h-1.5 w-12 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(249,115,22,0.4)]" />

                    <p className="text-neutral-400 text-sm md:text-base font-light tracking-tight leading-relaxed max-w-sm mx-auto">
                        모바일로 더 빠르고 편리하게!<br />
                        <span className="text-neutral-200 font-medium whitespace-nowrap">OK저축은행 고객센터와 앱 다운로드</span>를 만나보세요.
                    </p>
                </header>

                {/* Main Link Grid */}
                <div className="w-full space-y-4 mb-16">
                    {actions.map((action, idx) => (
                        <Link 
                            key={idx}
                            href={action.url}
                            className="group relative flex items-center p-6 bg-zinc-900/40 hover:bg-zinc-900/80 border border-white/[0.03] hover:border-orange-500/30 rounded-3xl transition-all duration-500 backdrop-blur-3xl active:scale-[0.98] overflow-hidden"
                        >
                            {/* Card Glow */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${action.color} text-white shadow-lg shadow-black/40 group-hover:scale-110 transition-transform duration-500`}>
                                {action.icon}
                            </div>
                            
                            <div className="ml-5 flex-1 overflow-hidden">
                                <h3 className="text-lg font-bold text-white group-hover:text-orange-200 transition-colors truncate">
                                    {action.title}
                                </h3>
                                <p className="text-xs text-neutral-500 mt-0.5 font-medium group-hover:text-neutral-400 transition-colors">
                                    {action.desc}
                                </p>
                            </div>
                            
                            <div className="h-10 w-10 flex items-center justify-center rounded-full border border-white/5 opacity-40 group-hover:opacity-100 group-hover:border-orange-500/40 group-hover:bg-orange-500/10 transition-all duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 group-hover:text-orange-400 transform group-hover:translate-x-0.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Additional Info / Trust Banner */}
                <div className="w-full bg-zinc-900/20 border border-white/5 p-8 rounded-[2rem] backdrop-blur-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
                    
                    <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        안전한 금융 이용 안내
                    </h2>
                    
                    <ul className="space-y-4">
                        <li className="flex gap-3 text-xs leading-relaxed text-neutral-400">
                            <span className="text-orange-500/60 font-black mt-0.5">•</span>
                            <span>보이스피싱 예방을 위해 <strong className="text-neutral-200">출처가 불분명한 앱 설치 유도</strong>에 주의하시기 바랍니다. 반드시 공식 스토어를 통해 다운로드하세요.</span>
                        </li>
                        <li className="flex gap-3 text-xs leading-relaxed text-neutral-400">
                            <span className="text-orange-500/60 font-black mt-0.5">•</span>
                            <span>OK저축은행 고객센터 연결 시 상담원 연결이 지연될 경우 <strong className="text-neutral-200">카카오톡 챗봇 상담</strong>을 이용하시면 편리합니다.</span>
                        </li>
                    </ul>
                    
                    <div className="mt-8 pt-6 border-t border-white/5 flex flex-col items-center gap-2">
                        <p className="text-[10px] text-neutral-600 font-bold tracking-[0.4em] uppercase">
                            Secure Financial Experience
                        </p>
                    </div>
                </div>

                <footer className="mt-20 text-center w-full">
                    <p className="text-neutral-800 text-[10px] font-medium tracking-[0.5em] uppercase">
                        OK Savings Bank Official Support
                    </p>
                </footer>
            </div>
        </div>
    );
}
