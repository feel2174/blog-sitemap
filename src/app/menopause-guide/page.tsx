import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '갱년기 증상 완화 및 영양제 추천 가이드 (여성/남성)',
    description: '여성 및 남성 갱년기 증상을 확인하고, 증상 완화에 도움이 되는 추천 영양제 정보를 확인하세요. 건강한 중년 생활을 위한 필수 가이드.',
};

export default function MenopauseGuidePage() {
    return (
        <div
            className="min-h-screen bg-[#050505] text-white flex flex-col items-center py-16 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Premium Background with Gradient Overlay */}
            <div className="absolute inset-0 z-[1] pointer-events-none" style={{ backgroundImage: 'url(/menopause-guide-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: '0.4' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-[2]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-500/10 via-transparent to-transparent z-[3]" />

            <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
                {/* Header Section */}
                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                        </span>
                        Health & Wellness Guide
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">제2의 인생을 위한</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-orange-400 to-amber-500">갱년기 완벽 가이드</span>
                    </h1>

                    <div className="h-1 w-12 bg-rose-500 mx-auto rounded-full mb-6" />

                    <p className="text-neutral-400 text-sm md:text-base font-light tracking-tight leading-relaxed">
                        갑작스러운 신체 변화에 당황하지 마세요.<br className="hidden md:block" />
                        <span className="text-neutral-200 font-medium">여성 및 남성 갱년기</span>를 건강하게 극복하는 방법을 제안해 드립니다.
                    </p>
                </div>

                {/* Primary Action Buttons */}
                <div className="w-full flex flex-col gap-4 mb-16">
                    
                    {/* Female Supplement Link */}
                    <Link
                        href="https://link.coupang.com/a/ew7wo3"
                        className="group relative flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-xl border border-white/5 hover:border-rose-500/30 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/0 via-rose-500/10 to-rose-500/0 -translate-x-full group-hover:animate-shimmer" />
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"></path><path d="M12 11V7"></path><path d="M12 17v-2"></path><path d="M8 11h8"></path></svg>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-rose-400 text-xs font-semibold tracking-wider">FOR WOMEN</span>
                                <span className="text-white font-bold text-lg md:text-xl tracking-tight">여성 갱년기 영양제 추천</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-rose-400 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>

                    {/* Male Supplement Link */}
                    <Link
                        href="https://link.coupang.com/a/ew7xOK"
                        className="group relative flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 -translate-x-full group-hover:animate-shimmer" />
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5"></path><path d="M14.2 8.8 21 2"></path><path d="M8 14c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6c0-.6-.1-1.2-.3-1.8"></path></svg>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-blue-400 text-xs font-semibold tracking-wider">FOR MEN</span>
                                <span className="text-white font-bold text-lg md:text-xl tracking-tight">남성 갱년기 영양제 추천</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>

                    {/* Detailed Info Link */}
                    <Link
                        href="https://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=31937"
                        className="group relative flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-xl border border-white/5 hover:border-emerald-500/30 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 -translate-x-full group-hover:animate-shimmer" />
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-emerald-400 text-xs font-semibold tracking-wider">EXPERT ADVICE</span>
                                <span className="text-white font-bold text-lg md:text-xl tracking-tight">여성 갱년기 증상 상세정보 확인</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>

                </div>

                {/* Additional Content / Tips */}
                <div className="w-full mt-2 bg-black/40 border border-neutral-800/80 p-5 md:p-6 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-rose-500/80" />
                    <h4 className="text-white text-sm md:text-base font-bold mb-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-rose-400"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        갱년기 건강 관리 팁
                    </h4>
                    <ul className="text-xs md:text-sm text-neutral-400 space-y-2 list-disc pl-5 leading-relaxed font-light">
                        <li>규칙적인 유산소 운동과 근력 운동은 뼈 건강과 기분 전환에 큰 도움이 됩니다.</li>
                        <li>충분한 칼슘과 비타민 D 섭취로 골다공증 예방에 힘쓰세요.</li>
                        <li>명상이나 요가 등 스트레스 관리 기술을 익혀 정서적 안정을 찾으세요.</li>
                        <li>카페인과 알코올 섭취를 줄이면 안면 홍조와 수면 장애 개선에 도움이 됩니다.</li>
                    </ul>
                </div>

                <footer className="mt-16 text-center w-full">
                    <div className="h-px w-full max-w-[200px] mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                    <p className="text-neutral-600 text-[10px] font-medium tracking-widest uppercase">
                        MENOPAUSE HEALTH CARE GUIDE
                    </p>
                </footer>
            </div>

            {/* Shimmer Effect Style */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 1.5s infinite;
                }
            `}} />
            <CoupangAds 
                keyword="갱년기 영양제" 
                title="✨ 활기찬 내일을 위한 선택"
                hookText="증상 완화뿐만 아니라 전반적인 건강 증진을 돕는 다양한 프리미엄 영양제를 지금 바로 확인해 보세요."
            />
        </div>
    );
}
