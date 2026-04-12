import Link from 'next/link';

export const metadata = {
    title: '2026년 전기차 구매보조금 지원 안내',
    description: '2026년 변경된 전기차 구매보조금 신규 지침 및 개편 내용 안내. 통합누리집에서 보조금 지원을 신청하세요.',
};

export default function EVSubsidyPage() {
    return (
        <div
            className="min-h-screen bg-[#050505] text-white flex flex-col items-center py-16 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Premium Gradients & Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-[1]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent z-[2]" />

            <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
                {/* Header Section */}
                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        2026 EV Subsidy
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">2026년 기준 전기차</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-400 to-blue-500">구매보조금 지원 안내</span>
                    </h1>

                    <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full mb-6" />

                    <p className="text-neutral-400 text-sm md:text-base font-light tracking-tight leading-relaxed">
                        올해부터 새롭게 개편된 전기차 지원 정책을 확인하고,<br className="hidden md:block" />
                        <span className="text-neutral-200 font-medium">통합누리집에서 보조금을 직접 신청</span>하세요.
                    </p>
                </div>

                {/* Primary Action Button - NO target="_blank" */}
                <div className="w-full max-w-md mb-16">
                    <Link
                        href="https://www.ev.or.kr/nportal/buySupprt/initBuySubsidySupprtAction.do"
                        className="group relative flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white p-5 rounded-2xl font-bold text-lg md:text-xl transition-all duration-300 overflow-hidden shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] active:scale-[0.98]"
                    >
                        {/* Hover Animation Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-cyan-400/0 -translate-x-full group-hover:animate-shimmer" />
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                        
                        <span className="relative z-10 flex items-center gap-2 tracking-tight">
                            2026 구매보조금 지원받기
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </span>
                    </Link>
                </div>

                {/* Info Cards / Details Section */}
                <div className="w-full flex flex-col gap-5 md:gap-6">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4 ml-1 md:ml-2 flex items-center gap-2">
                        <div className="h-5 w-1.5 bg-blue-500 rounded-full" />
                        전기차 보조금 핵심 개편사항
                    </h2>

                    {/* Info Card 1 */}
                    <div className="group bg-zinc-900/40 hover:bg-zinc-900/80 backdrop-blur-xl border border-white/5 hover:border-blue-500/20 p-6 md:p-8 rounded-3xl w-full transition-all duration-500">
                        <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            </div>
                            1. 산업 기여도 중심의 평가 기준
                        </h3>
                        <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light sm:pl-11">
                            기존의 단순 차량 성능 중심 평가에서 제조 및 수입사의 <strong>국내 산업 기여도</strong>를 종합적으로 평가하는 방식으로 전환되었습니다. R&D 투자, 국내 부품사 협업, AS 센터 인프라 확충, 안전 관리 등 7개 분야를 평가해 보조금 대상을 보다 엄격하게 선정합니다.
                        </p>
                    </div>

                    {/* Info Card 2 */}
                    <div className="group bg-zinc-900/40 hover:bg-zinc-900/80 backdrop-blur-xl border border-white/5 hover:border-cyan-500/20 p-6 md:p-8 rounded-3xl w-full transition-all duration-500">
                        <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                            <div className="p-2 bg-cyan-500/10 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                            </div>
                            2. 배터리 탑재 기준 및 효율 차등화
                        </h3>
                        <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light sm:pl-11">
                            동일한 브랜드의 차량이라 하더라도 장착된 배터리의 원산지, 에너지 밀도, 재활용 가치 등에 따라 보조금 산정 금액에서 차등이 크게 발생할 수 있습니다. 국내 공급망 보호 및 기술 고도화를 유도하기 위한 조치입니다.
                        </p>
                    </div>

                    {/* Sub Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 w-full mt-2">
                        <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-6 rounded-3xl border-l-4 border-l-emerald-500/50">
                            <h3 className="text-md font-semibold text-emerald-400 mb-2 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                내연기관 전환지원금
                            </h3>
                            <p className="text-neutral-400 text-sm leading-relaxed font-light mt-2">
                                노후 내연기관 차량을 폐차하거나 판매하고 전기차를 구매할 시, 친환경 전환 촉진을 위한 추가적인 <span className="text-neutral-200">전환 보조금</span>이 정부 차원에서 지급됩니다.
                            </p>
                        </div>
                        <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-6 rounded-3xl border-l-4 border-l-purple-500/50">
                            <h3 className="text-md font-semibold text-purple-400 mb-2 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>
                                보조금 공백 최소화
                            </h3>
                            <p className="text-neutral-400 text-sm leading-relaxed font-light mt-2">
                                특정 지자체의 인기도로 인해 예산이 조기 소진되는 상황을 막기 위해 국비를 우선 지원하여 보조금 흐름이 끊기지 않는 안정적 지원책을 구축했습니다.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Additional Notice Card */}
                <div className="w-full mt-10 bg-black/40 border border-neutral-800/80 p-5 md:p-6 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500/80" />
                    <h4 className="text-white text-sm md:text-base font-bold mb-3">💡 구매 전 확인사항</h4>
                    <ul className="text-xs md:text-sm text-neutral-400 space-y-2 list-disc pl-4 leading-relaxed">
                        <li>정확한 보조금 지원 규모는 <span className="font-semibold text-neutral-300">차종별, 배터리별, 제조사별로 상이</span>하므로 무공해차 통합누리집 내 조회를 통한 개별 확인이 필수입니다.</li>
                        <li>거주 중인 각 지자체의 예산 편성 및 규정에 따라 지방비 지원금 한도는 다를 수 있으니 유의하시기 바랍니다.</li>
                    </ul>
                </div>

                <footer className="mt-16 text-center w-full">
                    <div className="h-px w-full max-w-[200px] mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                    <p className="text-neutral-600 text-[10px] font-medium tracking-widest uppercase">
                        EV SUBSIDY INFORMATION
                    </p>
                </footer>
            </div>

            {/* Support configuration for tailwind custom animation mapping */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
            `}} />
        </div>
    );
}
