import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '설악산 케이블카 예약 및 요금 안내',
    description: '설악산 케이블카 예약 및 요금 정보 공식 홈페이지 바로가기 안내입니다.',
};

export default function SorakCableCarPage() {
    return (
        <div 
            className="min-h-screen bg-[#022c22] text-white flex flex-col relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}
        >
            {/* Design Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-600/20 blur-[150px] rounded-full animate-pulse pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-teal-600/10 blur-[130px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center pt-20 px-6 pb-12">
                {/* Header */}
                <header className="text-center mb-16 animate-[fadeIn_0.8s_ease-out]">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-[11px] font-black tracking-[0.3em] uppercase mb-8 backdrop-blur-3xl shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        SEORAKSAN
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-[1.2]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">아름다운 설악산</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">케이블카로 편안하게!</span>
                    </h1>

                    <div className="h-1.5 w-16 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(16,185,129,0.5)]" />

                    <p className="text-emerald-100/70 text-sm md:text-lg font-light tracking-tight leading-relaxed max-w-sm mx-auto">
                        설악산 케이블카 공식 홈페이지에서<br />
                        <strong className="text-white font-bold border-b border-emerald-500/30">예약 및 요금 정보</strong>를 확인해보세요.
                    </p>
                </header>

                <div className="w-full flex flex-col gap-5 mb-20">
                    <Link 
                        href="https://www.sorakcablecar.co.kr/"
                        className="group relative flex items-center p-7 bg-emerald-950/60 hover:bg-emerald-900/90 border border-white/10 hover:border-emerald-500/50 rounded-[2.5rem] transition-all duration-500 backdrop-blur-3xl shadow-2xl hover:shadow-emerald-900/20 hover:-translate-y-2 active:scale-95 overflow-hidden"
                    >
                        <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-emerald-500 to-teal-700 opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:w-3" />
                        
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="M8 17l4 4 4-4"></path></svg>
                        </div>
                        
                        <div className="ml-6 flex-1 pr-6 overflow-hidden">
                            <h3 className="text-xl font-bold text-white group-hover:text-emerald-200 transition-colors truncate">
                                설악산 케이블카 예약
                            </h3>
                            <p className="text-emerald-200/60 text-sm mt-1.5 font-light group-hover:text-emerald-200/80 transition-colors">
                                공식 홈페이지 바로가기
                            </p>
                        </div>
                        
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500/50 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                        </div>
                    </Link>

                    <Link 
                        href="https://www.sorakcablecar.co.kr/about/price"
                        className="group relative flex items-center p-7 bg-emerald-950/60 hover:bg-emerald-900/90 border border-white/10 hover:border-emerald-500/50 rounded-[2.5rem] transition-all duration-500 backdrop-blur-3xl shadow-2xl hover:shadow-emerald-900/20 hover:-translate-y-2 active:scale-95 overflow-hidden"
                    >
                        <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-teal-500 to-cyan-700 opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:w-3" />
                        
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-700 text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        </div>
                        
                        <div className="ml-6 flex-1 pr-6 overflow-hidden">
                            <h3 className="text-xl font-bold text-white group-hover:text-teal-200 transition-colors truncate">
                                설악산 케이블카 요금
                            </h3>
                            <p className="text-teal-200/60 text-sm mt-1.5 font-light group-hover:text-teal-200/80 transition-colors">
                                이용 요금 및 할인 안내
                            </p>
                        </div>
                        
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500/50 group-hover:text-teal-400 group-hover:translate-x-1 transition-all"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                        </div>
                    </Link>
                </div>

                {/* Coupang Ad Section */}
                <div className="w-full mt-8">
                    <CoupangAds 
                        keyword="등산용품" 
                        title="⛰️ 안전하고 즐거운 산행!"
                        hookText="설악산 가기 전 필수템! 인기 등산용품 특가를 확인해보세요."
                    />
                </div>
            </div>
            
            <footer className="relative z-10 mt-auto border-t border-white/10 bg-emerald-950/50 backdrop-blur-md text-emerald-500/50 text-[10px] py-4 text-center">
                본 페이지는 정보 제공을 위해 작성되었으며, 설악산 케이블카 공식 홈페이지와 연결됩니다.
            </footer>
        </div>
    );
}
