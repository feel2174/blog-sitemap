
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '상가임대차계약서 양식 무료 다운로드 (HWP, PDF)',
    description: '법무부 표준 상가임대차계약서 양식을 무료로 다운로드하세요. HWP, PDF 파일 형식 제공 및 작성 가이드 안내.',
};

export default function CommercialLeaseContractPage() {
    return (
        <div
            className="min-h-screen bg-[#050505] text-white flex flex-col items-center py-16 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Premium Gradients & Overlays (Blue/Gray Vibe for Business/Legal) */}
            <div className="absolute inset-0 z-[1] pointer-events-none" style={{ backgroundImage: 'url(/commercial-lease-contract-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: '0.3' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/90 via-[#0a0f1a]/80 to-transparent z-[2] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent z-[3] pointer-events-none" />

            <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center mt-10">
                {/* Header Section */}
                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Legal Document Template
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">법무부 표준 양식</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-400 to-cyan-500">상가임대차계약서 다운로드</span>
                    </h1>

                    <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full mb-6" />

                    <p className="text-neutral-400 text-sm md:text-base font-light tracking-tight leading-relaxed">
                        안전한 상가 임대차 계약을 위한 필수 서식!<br className="hidden md:block" />
                        법무부에서 배포하는 <span className="text-neutral-200 font-medium">표준 상가임대차계약서 양식</span>을 무료로 다운로드하세요.
                    </p>
                </div>

                {/* Primary Action Buttons - Download Links */}
                <div className="w-full flex flex-col gap-4 mb-16">
                    
                    {/* HWP Download */}
                    <a
                        href="/상가임대차계약서.hwp"
                        download
                        className="group relative flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 -translate-x-full group-hover:animate-shimmer" />
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-blue-400 text-xs font-semibold tracking-wider">HWP FILE</span>
                                <span className="text-white font-bold text-lg md:text-xl tracking-tight">상가임대차계약서 다운로드 (한글)</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </a>

                    {/* PDF Download */}
                    <a
                        href="https://www.moj.go.kr/sites/moj/download/316_01.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-xl border border-white/5 hover:border-red-500/30 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 -translate-x-full group-hover:animate-shimmer" />
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-red-400 text-xs font-semibold tracking-wider">PDF FILE</span>
                                <span className="text-white font-bold text-lg md:text-xl tracking-tight">상가임대차계약서 다운로드 (PDF)</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-400 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </a>

                </div>

                {/* Additional Notice Card */}
                <div className="w-full mt-2 bg-black/40 border border-neutral-800/80 p-5 md:p-6 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/80" />
                    <h4 className="text-white text-sm md:text-base font-bold mb-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        작성 전 주의사항
                    </h4>
                    <ul className="text-xs md:text-sm text-neutral-400 space-y-2 list-disc pl-5 leading-relaxed font-light">
                        <li>계약 체결 전 임대인의 신분증, 등기부등본(건물, 토지), 건축물대장을 확인하여 진정한 소유자인지 확인하세요.</li>
                        <li>보증금 보호를 위해 계약 체결 후 즉시 관할 세무서에서 확정일자를 받으시길 권장합니다.</li>
                        <li>특약사항은 양 당사자의 합의하에 구체적이고 명확하게 기재해야 분쟁을 예방할 수 있습니다.</li>
                    </ul>
                </div>

                <footer className="mt-16 text-center w-full">
                    <div className="h-px w-full max-w-[200px] mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                    <p className="text-neutral-600 text-[10px] font-medium tracking-widest uppercase">
                        COMMERCIAL LEASE AGREEMENT
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
            <CoupangAds 
                keyword="도장" 
                title="🖋️ 계약의 완성, 고급 도장"
                hookText="중요한 계약서에는 품격 있는 도장이 필요합니다. 나만의 개성을 살리면서도 신뢰감을 주는 다양한 도장과 인감용품을 확인해보세요."
            />
        </div>
    );
}
