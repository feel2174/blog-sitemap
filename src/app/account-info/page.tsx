import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '어카운트인포 (계좌정보통합관리) 웹 바로가기 및 앱 다운로드',
    description: '내 모든 계좌와 카드를 한눈에 관리하는 어카운트인포(계좌정보통합관리) 홈페이지 바로가기 및 안드로이드, iOS 앱 다운로드 안내입니다.',
};

export default function AccountInfoPage() {
    const actions = [
        {
            title: '어카운트인포 웹 바로가기',
            desc: 'PC/모바일 웹 홈페이지 접속',
            url: 'https://www.payinfo.or.kr/payinfo.html',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            ),
            color: 'from-blue-600 to-blue-800'
        },
        {
            title: '안드로이드 앱 (Android)',
            desc: '구글 플레이 스토어 다운로드',
            url: 'https://play.google.com/store/apps/details?id=com.kftc.payinfo.android&hl=ko',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"></path><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
            ),
            color: 'from-emerald-500 to-green-700'
        },
        {
            title: 'iOS 앱 (iPhone)',
            desc: '애플 앱스토어 다운로드',
            url: 'https://apps.apple.com/kr/app/%EC%96%B4%EC%B9%B4%EC%9A%B4%ED%8A%B8%EC%9D%B8%ED%8F%AC-%EA%B3%84%EC%A2%8C%EC%A0%95%EB%B3%B4%ED%86%B5%ED%95%A9%EA%B4%80%EB%A6%AC/id1225117985',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
            ),
            color: 'from-slate-600 to-slate-800'
        }
    ];

    return (
        <div 
            className="min-h-screen bg-[#020617] text-white flex flex-col relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}
        >
            {/* Design Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[150px] rounded-full animate-pulse pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center pt-20 px-6 pb-12">
                {/* Header */}
                <header className="text-center mb-16 animate-[fadeIn_0.8s_ease-out]">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-[11px] font-black tracking-[0.3em] uppercase mb-8 backdrop-blur-3xl shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Account Info
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-[1.2]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">내 모든 계좌 관리를</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">한곳에서 간편하게!</span>
                    </h1>

                    <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />

                    <p className="text-slate-400 text-sm md:text-lg font-light tracking-tight leading-relaxed max-w-sm mx-auto">
                        어카운트인포(계좌정보통합관리)를 통해<br />
                        <strong className="text-slate-100 font-bold border-b border-blue-500/30">은행 계좌, 카드, 대출 정보</strong>를 확인하세요.
                    </p>
                </header>

                {/* Main Link Grid */}
                <div className="w-full flex flex-col gap-5 mb-20">
                    {actions.map((action, idx) => (
                        <Link 
                            key={idx}
                            href={action.url}
                            className="group relative flex items-center p-7 bg-slate-900/60 hover:bg-slate-800/90 border border-white/10 hover:border-blue-500/50 rounded-[2.5rem] transition-all duration-500 backdrop-blur-3xl shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2 active:scale-95 overflow-hidden"
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
                                <p className="text-sm text-slate-400 mt-1 font-medium group-hover:text-slate-300 transition-colors">
                                    {action.desc}
                                </p>
                            </div>
                            
                            <div className="h-12 w-12 flex items-center justify-center rounded-full border border-white/10 text-slate-500 transition-all duration-500 group-hover:border-blue-500/50 group-hover:text-blue-400 group-hover:bg-blue-500/10 group-hover:rotate-45">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Additional Info Section */}
                <div className="w-full bg-blue-950/20 border border-blue-500/10 p-10 md:p-14 rounded-[3.5rem] backdrop-blur-xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-700 shadow-3xl mb-12">
                    <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 group-hover:scale-125 group-hover:rotate-12">
                        <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                    </div>

                    <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-4 tracking-tighter">
                        <span className="p-3 bg-blue-500/20 rounded-2xl text-xl animate-bounce">💡</span>
                        어카운트인포 주요 기능
                    </h2>
                    
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex gap-5 p-6 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-all group-hover:translate-x-2">
                            <div className="h-2.5 w-2.5 rounded-full bg-blue-500 mt-2 shrink-0 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                            <p className="text-sm md:text-base leading-relaxed text-slate-400">
                                <strong className="text-slate-100 font-bold border-b border-blue-500/20">숨은 돈 찾기</strong>: 잊고 있던 은행 및 제2금융권 휴면계좌의 잔고를 확인하고 즉시 이체할 수 있습니다.
                            </p>
                        </div>
                        <div className="flex gap-5 p-6 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-all group-hover:translate-x-2">
                            <div className="h-2.5 w-2.5 rounded-full bg-cyan-500 mt-2 shrink-0 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
                            <p className="text-sm md:text-base leading-relaxed text-slate-400">
                                <strong className="text-slate-100 font-bold border-b border-cyan-500/20">카드포인트 현금화</strong>: 흩어져 있는 카드 포인트를 모아 현금으로 한 번에 입금받으세요.
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
                            keyword="최신 스마트폰" 
                            title="📱 더 빠르고 안전한 모바일 금융"
                            hookText="어카운트인포와 각종 금융 앱을 버벅임 없이 쾌적하게! 생체인식으로 보안까지 완벽한 최신 스마트폰을 자급제 특가로 만나보세요."
                        />
                    </div>
                </div>
            </div>

            <footer className="py-12 text-center w-full bg-[#020617] relative z-10">
                <p className="text-slate-700 text-[11px] font-bold tracking-[0.8em] uppercase opacity-60">
                    Account Info KFTC
                </p>
            </footer>
        </div>
    );
}
