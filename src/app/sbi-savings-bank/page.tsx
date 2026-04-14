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
            className="min-h-screen bg-[#05070a] text-white flex flex-col items-center py-16 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Design Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 z-0" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 z-0" />
            
            <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center">
                {/* Header */}
                <header className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        SBI Savings Bank
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">금융의 한계를 넘어</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">사이다뱅크 앱 안내</span>
                    </h1>

                    <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full mb-8" />

                    <p className="text-neutral-400 text-sm md:text-base font-light tracking-tight leading-relaxed">
                        복잡한 금융을 시원하게!<br />
                        <span className="text-neutral-200 font-medium">SBI저축은행 사이다뱅크</span>의 스마트함을 경험하세요.
                    </p>
                </header>

                {/* List Sections */}
                <div className="w-full flex flex-col gap-4 mb-20">
                    {actions.map((action, index) => (
                        <Link 
                            key={index}
                            href={action.url}
                            className="group relative flex items-center p-6 bg-zinc-900/40 hover:bg-zinc-800/60 border border-white/5 hover:border-blue-500/30 rounded-[2rem] transition-all duration-500 backdrop-blur-2xl active:scale-[0.98] overflow-hidden"
                        >
                            {/* Card Accent */}
                            <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${action.color} opacity-80 group-hover:w-2 transition-all duration-300`} />
                            
                            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${action.color} text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                                {action.icon}
                            </div>

                            <div className="ml-5 flex-1 pr-6 overflow-hidden">
                                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors truncate">
                                    {action.title}
                                </h3>
                                <p className="text-xs text-neutral-500 mt-1 font-medium group-hover:text-neutral-400 transition-colors">
                                    {action.desc}
                                </p>
                            </div>

                            <div className="h-9 w-9 flex items-center justify-center rounded-full border border-white/10 text-neutral-600 transition-all group-hover:border-blue-500/50 group-hover:text-blue-400 group-hover:bg-blue-500/10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* FAQ/Info Card */}
                <div className="w-full bg-zinc-900/30 border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden group hover:border-blue-500/20 transition-colors duration-500 shadow-2xl">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                    </div>

                    <h2 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                        </div>
                        사이다뱅크 이용 안내
                    </h2>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="space-y-2">
                            <h4 className="text-blue-400 font-bold text-sm">실습 기반의 스마트한 뱅킹</h4>
                            <p className="text-neutral-400 text-xs leading-relaxed font-light">
                                사이다뱅크는 SBI저축은행의 <span className="text-neutral-200">모바일 전용 뱅킹 브랜드</span>로, 24시간 365일 지점 방문 없이 예적금 및 대출 서비스를 이용할 수 있습니다.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-blue-400 font-bold text-sm">강력한 보안 시스템</h4>
                            <p className="text-neutral-400 text-xs leading-relaxed font-light">
                                생체 인증 및 최신 보안 가이드라인을 준수하여 고객님의 소중한 자산을 안전하게 보호합니다.
                            </p>
                        </div>
                    </div>
                </div>

                <footer className="mt-20 text-center w-full">
                    <p className="text-neutral-800 text-[10px] font-medium tracking-[0.6em] uppercase">
                        SBI Savings Bank Service Info
                    </p>
                </footer>
            </div>
        </div>
    );
}
