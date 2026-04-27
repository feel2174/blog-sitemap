import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '연속혈당측정기(CGM) 추천 및 혈당 관리 가이드',
    description: '채혈 없이 스마트하게 혈당을 관리하세요! 당뇨 환자 및 다이어터를 위한 연속혈당측정기(CGM) 추천 및 구매 안내.',
};

export default function CgmMonitorPage() {
    return (
        <div
            className="min-h-screen bg-[#050505] text-white flex flex-col items-center py-16 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Premium Background with Gradient Overlay */}
            <div className="absolute inset-0 z-[1] pointer-events-none" style={{ backgroundImage: 'url(/cgm-monitor-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: '0.4' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/90 via-[#0a192f]/80 to-transparent z-[2] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent z-[3] pointer-events-none" />

            <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center mt-10">
                {/* Header Section */}
                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        Smart Health Care
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">아픔 없는 똑똑한 관리</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500">연속혈당측정기 (CGM)</span>
                    </h1>

                    <div className="h-1 w-12 bg-cyan-500 mx-auto rounded-full mb-6" />

                    <p className="text-neutral-400 text-sm md:text-base font-light tracking-tight leading-relaxed">
                        이제 매번 피 뽑지 마세요! 스마트폰으로 실시간 확인이 가능합니다.<br className="hidden md:block" />
                        <span className="text-neutral-200 font-medium">혈당 스파이크 예방 및 다이어트</span>를 위한 필수 아이템을 만나보세요.
                    </p>
                </div>

                {/* Primary Action Buttons */}
                <div className="w-full flex flex-col gap-4 mb-16">
                    
                    {/* CGM Product Link */}
                    <Link
                        href="https://link.coupang.com/a/ew7MD2"
                        className="group relative flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 -translate-x-full group-hover:animate-shimmer" />
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-cyan-400 text-xs font-semibold tracking-wider">SMART SENSOR</span>
                                <span className="text-white font-bold text-lg md:text-xl tracking-tight">연속혈당측정기 구매하기</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>

                </div>

                {/* Additional Notice Card */}
                <div className="w-full mt-2 bg-black/40 border border-neutral-800/80 p-5 md:p-6 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500/80" />
                    <h4 className="text-white text-sm md:text-base font-bold mb-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        왜 연속혈당측정기(CGM)인가요?
                    </h4>
                    <ul className="text-xs md:text-sm text-neutral-400 space-y-2 list-disc pl-5 leading-relaxed font-light">
                        <li><strong className="text-neutral-300">편리함:</strong> 잦은 채혈 없이 스마트폰 태그만으로 실시간 혈당 수치를 확인할 수 있습니다.</li>
                        <li><strong className="text-neutral-300">식습관 개선:</strong> 어떤 음식을 먹었을 때 혈당 스파이크가 일어나는지 눈으로 직접 확인하여 식습관 교정이 가능합니다.</li>
                        <li><strong className="text-neutral-300">다이어트:</strong> 최근 다이어터들 사이에서도 혈당 관리가 체중 감량의 핵심으로 떠오르며 필수품으로 자리 잡고 있습니다.</li>
                    </ul>
                </div>

                <footer className="mt-16 text-center w-full">
                    <div className="h-px w-full max-w-[200px] mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                    <p className="text-neutral-600 text-[10px] font-medium tracking-widest uppercase">
                        CONTINUOUS GLUCOSE MONITOR
                    </p>
                </footer>
            </div>

            {/* Support configuration for tailwind custom animation mapping */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 1.5s infinite;
                }
            `}} />
            
            {/* CoupangAds component inherits relative z-20 from its implementation */}
            <CoupangAds 
                keyword="당뇨 간식" 
                title="🥗 건강한 혈당 관리를 위한 식단"
                hookText="혈당 스파이크 걱정 없이 즐길 수 있는 맛있는 무가당 간식과 당뇨 식단을 확인해 보세요."
            />
        </div>
    );
}
