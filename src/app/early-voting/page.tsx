import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '전국 지방선거 사전투표소 찾기',
    description: '중앙선거관리위원회 전국 지방선거 사전투표소 찾기 바로가기 안내입니다.',
};

export default function EarlyVotingPage() {
    return (
        <div 
            className="min-h-screen bg-[#020617] text-white flex flex-col relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}
        >
            {/* Design Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-600/20 blur-[150px] rounded-full animate-pulse pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center pt-20 px-6 pb-12">
                {/* Header */}
                <header className="text-center mb-16 animate-[fadeIn_0.8s_ease-out]">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-500/10 border border-rose-500/30 rounded-full text-rose-400 text-[11px] font-black tracking-[0.3em] uppercase mb-8 backdrop-blur-3xl shadow-[0_0_20px_rgba(244,63,94,0.2)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                        </span>
                        ELECTION
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-[1.2]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">내 소중한 한 표</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-400 to-rose-500 drop-shadow-[0_0_30px_rgba(244,63,94,0.3)]">사전투표소에서!</span>
                    </h1>

                    <div className="h-1.5 w-16 bg-gradient-to-r from-rose-600 to-red-600 mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(244,63,94,0.5)]" />

                    <p className="text-slate-400 text-sm md:text-lg font-light tracking-tight leading-relaxed max-w-sm mx-auto">
                        중앙선거관리위원회 홈페이지에서<br />
                        <strong className="text-slate-100 font-bold border-b border-rose-500/30">가까운 전국 사전투표소</strong>를 찾아보세요.
                    </p>
                </header>

                <div className="w-full flex flex-col gap-5 mb-20">
                    <Link 
                        href="https://www.nec.go.kr/site/lvt/main.do#"
                        className="group relative flex items-center p-7 bg-slate-900/60 hover:bg-slate-800/90 border border-white/10 hover:border-rose-500/50 rounded-[2.5rem] transition-all duration-500 backdrop-blur-3xl shadow-2xl hover:shadow-rose-900/20 hover:-translate-y-2 active:scale-95 overflow-hidden"
                    >
                        <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-rose-500 to-red-700 opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:w-3" />
                        
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-red-700 text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8l-4 4 4 4"></path><path d="M16 12H8"></path></svg>
                        </div>
                        
                        <div className="ml-6 flex-1 pr-6 overflow-hidden">
                            <h3 className="text-xl font-bold text-white group-hover:text-rose-200 transition-colors truncate">
                                전국 지방선거 사전투표소 찾기
                            </h3>
                            <p className="text-slate-400 text-sm mt-1.5 font-light group-hover:text-slate-300 transition-colors">
                                중앙선거관리위원회 접속
                            </p>
                        </div>
                        
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-rose-500/20 transition-colors shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-rose-400 group-hover:translate-x-1 transition-all"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                        </div>
                    </Link>
                </div>

                {/* Coupang Ad Section */}
                <div className="w-full mt-8">
                    <CoupangAds 
                        keyword="건강기능식품" 
                        title="🌟 건강한 내일을 위해!"
                        hookText="투표소 가기 전 활력 충전! 매일 챙겨먹는 건강기능식품 특가를 확인해보세요."
                    />
                </div>
            </div>
            
            <footer className="relative z-10 mt-auto border-t border-white/10 bg-slate-900/50 backdrop-blur-md text-slate-500 text-[10px] py-4 text-center">
                본 페이지는 정보 제공을 위해 작성되었으며, 중앙선거관리위원회 공식 앱/웹사이트와 연결됩니다.
            </footer>
        </div>
    );
}
