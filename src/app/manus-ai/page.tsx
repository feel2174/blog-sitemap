import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '마누스 AI (Manus AI) 앱 다운로드 및 할인 정보 안내',
    description: '최고의 범용 AI 에이전트 마누스 AI(Manus AI) 앱 안드로이드/iOS 다운로드 바로가기 및 할인 정보를 확인하세요. 일상을 혁신하는 AI를 경험해보세요.',
};

export default function ManusAiPage() {
    const actions = [
        {
            title: '마누스 AI 앱 (Android)',
            desc: '구글 플레이 스토어 다운로드',
            url: 'https://play.google.com/store/apps/details?id=tech.butterfly.app&hl=ko',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"></path><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
            ),
            color: 'from-fuchsia-500 to-purple-600'
        },
        {
            title: '마누스 AI 앱 (iOS)',
            desc: '애플 앱스토어 다운로드',
            url: 'https://apps.apple.com/us/app/manus-ai-%EB%A7%88%EB%88%84%EC%8A%A4-%EB%B2%94%EC%9A%A9-ai-%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8/id6740909540?l=ko&platform=watch',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
            ),
            color: 'from-violet-600 to-indigo-800'
        }
    ];

    return (
        <div 
            className="min-h-screen bg-[#050505] text-white flex flex-col relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}
        >
            {/* Design Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[150px] rounded-full animate-pulse pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-600/10 blur-[130px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center pt-20 px-6 pb-12">
                {/* Header */}
                <header className="text-center mb-16 animate-[fadeIn_0.8s_ease-out]">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-[11px] font-black tracking-[0.3em] uppercase mb-8 backdrop-blur-3xl shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        Manus AI App
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 leading-[1.1]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">미래를 앞당기는</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-600 drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]">마누스 AI 에이전트</span>
                    </h1>

                    <div className="h-1.5 w-16 bg-gradient-to-r from-purple-600 to-fuchsia-600 mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(168,85,247,0.5)]" />

                    <p className="text-neutral-400 text-sm md:text-lg font-light tracking-tight leading-relaxed max-w-sm mx-auto">
                        당신의 일상을 혁신할 AI 비서!<br />
                        <span className="text-neutral-100 font-bold border-b border-purple-500/30">안드로이드와 아이폰</span>에서 지금 바로 경험하세요.
                    </p>
                </header>

                {/* Main Link Grid */}
                <div className="w-full flex flex-col gap-5 mb-20">
                    {actions.map((action, idx) => (
                        <Link 
                            key={idx}
                            href={action.url}
                            className="group relative flex items-center p-7 bg-zinc-900/60 hover:bg-zinc-800/90 border border-white/10 hover:border-purple-500/50 rounded-[2.5rem] transition-all duration-500 backdrop-blur-3xl shadow-2xl hover:shadow-purple-900/20 hover:-translate-y-2 active:scale-95 overflow-hidden"
                            style={{ animation: `fadeIn 0.6s ease-out backwards ${idx * 150}ms` }}
                        >
                            {/* Card Accent Glow */}
                            <div className={`absolute left-0 top-0 w-2 h-full bg-gradient-to-b ${action.color} opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:w-3`} />
                            
                            <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${action.color} text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                {action.icon}
                            </div>
                            
                            <div className="ml-6 flex-1 pr-6 overflow-hidden">
                                <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors truncate">
                                    {action.title}
                                </h3>
                                <p className="text-sm text-neutral-500 mt-1 font-medium group-hover:text-neutral-300 transition-colors">
                                    {action.desc}
                                </p>
                            </div>
                            
                            <div className="h-12 w-12 flex items-center justify-center rounded-full border border-white/10 text-neutral-600 transition-all duration-500 group-hover:border-purple-500/50 group-hover:text-purple-400 group-hover:bg-purple-500/10 group-hover:rotate-45">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Additional Info Section */}
                <div className="w-full bg-purple-950/20 border border-purple-500/10 p-10 md:p-14 rounded-[3.5rem] backdrop-blur-xl relative overflow-hidden group hover:border-purple-500/30 transition-all duration-700 shadow-3xl mb-12">
                    <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 group-hover:scale-125 group-hover:rotate-12">
                        <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"></path><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
                    </div>

                    <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-4 tracking-tighter">
                        <span className="p-3 bg-purple-500/20 rounded-2xl text-xl animate-bounce">🤖</span>
                        마누스 AI 할인 및 혜택
                    </h2>
                    
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex gap-5 p-6 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-all group-hover:translate-x-2">
                            <div className="h-2.5 w-2.5 rounded-full bg-fuchsia-500 mt-2 shrink-0 shadow-[0_0_12px_rgba(217,70,239,0.8)]" />
                            <p className="text-sm md:text-base leading-relaxed text-neutral-400">
                                <strong className="text-neutral-100 font-bold border-b border-fuchsia-500/20">신규 가입 특별 할인</strong>: 앱 다운로드 후 신규 가입 시 제공되는 프리미엄 기능 체험 혜택과 프로모션 할인을 놓치지 마세요.
                            </p>
                        </div>
                        <div className="flex gap-5 p-6 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-all group-hover:translate-x-2">
                            <div className="h-2.5 w-2.5 rounded-full bg-violet-500 mt-2 shrink-0 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
                            <p className="text-sm md:text-base leading-relaxed text-neutral-400">
                                <strong className="text-neutral-100 font-bold border-b border-violet-500/20">강력한 자동화</strong>: 복잡한 업무부터 일상적인 검색까지, 마누스 AI 에이전트가 알아서 처리해 드립니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 쇼핑 추천 섹션 (백그라운드 블렌딩을 위해 흰색 래퍼 제거 및 다크모드 적용) */}
            <div className="w-full bg-[#0a0a0a] py-12 border-t border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-zinc-900/50 rounded-[2.5rem] p-6 border border-white/10">
                        <CoupangAds 
                            keyword="최신 태블릿" 
                            title="🚀 AI를 더 완벽하게 즐기는 방법"
                            hookText="마누스 AI를 큰 화면에서 더욱 쾌적하게! 강력한 성능의 최신 태블릿 PC와 스마트 기기를 특가로 만나보세요."
                        />
                    </div>
                </div>
            </div>

            <footer className="py-12 text-center w-full bg-[#050505] relative z-10">
                <p className="text-neutral-800 text-[11px] font-bold tracking-[0.8em] uppercase opacity-40">
                    Manus AI Resources
                </p>
            </footer>
        </div>
    );
}
