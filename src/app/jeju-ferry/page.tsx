import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '제주도 배편 예약하기',
    description: '가장 빠르고 편안한 제주도 여행! 제주도 배편 예약 공식 사이트 바로가기입니다.',
};

export default function JejuFerryPage() {
    return (
        <div 
            className="min-h-screen bg-[#020617] text-white flex flex-col relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}
        >
            {/* Design Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[150px] rounded-full animate-pulse pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center pt-20 px-6 pb-12">
                {/* Header */}
                <header className="text-center mb-16 animate-[fadeIn_0.8s_ease-out]">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-cyan-400 text-[11px] font-black tracking-[0.3em] uppercase mb-8 backdrop-blur-3xl shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        JEJU FERRY TICKET
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-[1.2]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">가장 낭만적인</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">제주도 여행의 시작</span>
                    </h1>

                    <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(6,182,212,0.5)]" />

                    <p className="text-slate-400 text-sm md:text-lg font-light tracking-tight leading-relaxed max-w-sm mx-auto">
                        자차를 싣고 떠나는 특별한 여행<br />
                        <strong className="text-slate-100 font-bold border-b border-cyan-500/30">안전하고 편안한 배편 예약</strong>을 바로 진행하세요.
                    </p>
                </header>

                <div className="w-full flex flex-col gap-5 mb-20">
                    <Link 
                        href="https://www.jejube.com/"
                        className="group relative flex items-center p-7 bg-slate-900/60 hover:bg-slate-800/90 border border-white/10 hover:border-cyan-500/50 rounded-[2.5rem] transition-all duration-500 backdrop-blur-3xl shadow-2xl hover:shadow-cyan-900/20 hover:-translate-y-2 active:scale-95 overflow-hidden"
                    >
                        <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-blue-500 to-cyan-400 opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:w-3" />
                        
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01"></path><path d="M7 20h.01"></path><path d="M12 20h.01"></path><path d="M17 20h.01"></path><path d="M22 20h.01"></path><path d="M19 15.68V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10.68"></path><path d="M22 17l-10-5-10 5v1a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"></path></svg>
                        </div>
                        
                        <div className="ml-6 flex-1 pr-6 overflow-hidden">
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors truncate">
                                제주도 배편 예약하기
                            </h3>
                            <p className="text-slate-400 text-sm mt-1.5 font-light group-hover:text-slate-300 transition-colors">
                                제주비(JejuBe) 공식 사이트
                            </p>
                        </div>
                        
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                        </div>
                    </Link>

                    <Link 
                        href="https://www.icpa.or.kr/icferry/mobile/index.do"
                        className="group relative flex items-center p-7 bg-slate-900/60 hover:bg-slate-800/90 border border-white/10 hover:border-teal-500/50 rounded-[2.5rem] transition-all duration-500 backdrop-blur-3xl shadow-2xl hover:shadow-teal-900/20 hover:-translate-y-2 active:scale-95 overflow-hidden"
                        style={{ animation: 'fadeIn 0.6s ease-out backwards 150ms' }}
                    >
                        <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-teal-500 to-emerald-600 opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:w-3" />
                        
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
                        </div>
                        
                        <div className="ml-6 flex-1 pr-6 overflow-hidden">
                            <h3 className="text-xl font-bold text-white group-hover:text-teal-200 transition-colors truncate">
                                인천 제주도 배편 예약
                            </h3>
                            <p className="text-slate-400 text-sm mt-1.5 font-light group-hover:text-slate-300 transition-colors">
                                인천항만공사 공식 사이트
                            </p>
                        </div>
                        
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-teal-300 group-hover:translate-x-1 transition-all"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                        </div>
                    </Link>
                </div>

                {/* Coupang Ad Section */}
                <div className="w-full mt-8">
                    <CoupangAds 
                        keyword="멀미약" 
                        title="🌊 배 멀미 없이 쾌적하게!"
                        hookText="즐거운 제주도 여행, 멀미 때문에 망칠 순 없죠! 탑승 전 준비해야 할 멀미약과 여행 필수품들을 미리 챙겨보세요."
                    />
                </div>
            </div>
            
            <footer className="relative z-10 mt-auto border-t border-white/10 bg-slate-900/50 backdrop-blur-md text-slate-500 text-[10px] py-4 text-center">
                본 페이지는 정보 제공을 위해 작성되었으며, 제주비 공식 웹사이트와 연결됩니다.
            </footer>
        </div>
    );
}
