import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

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
            title: '코버스(Kobus) 홈페이지',
            desc: '전국 고속버스 운송조합 통합 예매',
            url: 'https://www.kobus.co.kr/main.do',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
            ),
            color: 'from-amber-500 to-orange-600'
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
            className="min-h-screen bg-[#010101] text-white flex flex-col items-center py-20 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}
        >
            {/* Design Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[150px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[130px] rounded-full" />
            
            <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center">
                {/* Header */}
                <header className="text-center mb-20 animate-[fadeIn_0.8s_ease-out]">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-[11px] font-black tracking-[0.3em] uppercase mb-8 backdrop-blur-3xl shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        T-money GO Info
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 leading-[1.1]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">가장 스마트한 이동</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">티머니GO 안내</span>
                    </h1>

                    <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />

                    <p className="text-neutral-400 text-sm md:text-lg font-light tracking-tight leading-relaxed max-w-md mx-auto">
                        고속/시외버스부터 따릉이, 택시까지!<br />
                        <span className="text-neutral-100 font-bold border-b border-blue-500/30">티머니GO 하나로 모든 이동을 통합</span>하고 마일리지 혜택을 누리세요.
                    </p>
                </header>

                {/* Main Action List */}
                <nav className="w-full flex flex-col gap-5 mb-24">
                    {actions.map((item, index) => (
                        <Link 
                            key={index}
                            href={item.url}
                            className="group relative flex items-center p-7 bg-zinc-900/60 hover:bg-zinc-800/90 border border-white/10 hover:border-blue-500/50 rounded-[2.5rem] transition-all duration-500 backdrop-blur-3xl shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2 active:scale-95 overflow-hidden"
                            style={{ animation: `fadeIn 0.6s ease-out backwards ${index * 150}ms` }}
                        >
                            {/* Card Accent Glow */}
                            <div className={`absolute left-0 top-0 w-2 h-full bg-gradient-to-b ${item.color} opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:w-3`} />
                            
                            <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                {item.icon}
                            </div>

                            <div className="ml-6 flex-1 pr-6 overflow-hidden">
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors truncate">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-neutral-500 mt-1 font-medium group-hover:text-neutral-300 transition-colors">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="h-12 w-12 flex items-center justify-center rounded-full border border-white/10 text-neutral-600 transition-all duration-500 group-hover:border-blue-500/50 group-hover:text-blue-400 group-hover:bg-blue-500/10 group-hover:rotate-45">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                    ))}
                </nav>

                {/* Feature Description Card */}
                <div className="w-full bg-blue-950/20 border border-blue-500/10 p-10 md:p-14 rounded-[3.5rem] backdrop-blur-xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-700 shadow-3xl">
                    <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 group-hover:scale-125 group-hover:rotate-12">
                        <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13H5v-2h14v2z"/></svg>
                    </div>

                    <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-4 tracking-tighter">
                        <span className="p-3 bg-blue-500/20 rounded-2xl text-xl animate-bounce">🚀</span>
                        티머니GO 주요 기능
                    </h2>

                    <div className="grid grid-cols-1 gap-8">
                        <div className="flex gap-5 p-6 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-all group-hover:translate-x-2">
                            <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                            <div>
                                <h4 className="text-base font-bold text-neutral-200 mb-1">통합 경로 탐색</h4>
                                <p className="text-sm text-neutral-500 leading-relaxed font-light">고속/시외버스와 따릉이, 킥보드를 연계한 최적 경로 안내</p>
                            </div>
                        </div>
                        <div className="flex gap-5 p-6 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-all group-hover:translate-x-2">
                            <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
                            <div>
                                <h4 className="text-base font-bold text-neutral-200 mb-1">GO마일리지 혜택</h4>
                                <p className="text-sm text-neutral-500 leading-relaxed font-light">대중교통 환승 및 서비스 이용 시 쌓이는 강력한 마일리지 적립</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-14 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
                        <p className="text-[11px] text-neutral-700 font-black uppercase tracking-[0.6em]">
                            Your All-in-One Mobility Partner
                        </p>
                    </div>
                </div>

                <CoupangAds 
                    keyword="보조배터리" 
                    title="🔋 이동 중 배터리 걱정 끝!"
                    hookText="티머니GO로 고속버스 여행 가시나요? 긴 이동 시간 동안 스마트폰을 든든하게 지켜줄 고속 충전 보조배터리와 편안한 목베개 특가 리스트입니다."
                />

                <footer className="mt-28 text-center w-full">
                    <p className="text-neutral-800 text-[11px] font-bold tracking-[0.8em] uppercase opacity-40">
                        T-money GO Support Portal
                    </p>
                </footer>
            </div>
        </div>
    );
}
