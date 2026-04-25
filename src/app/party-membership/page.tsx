import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '정당 온라인 입당 및 탈당 신청 안내 (더불어민주당, 국민의힘 바로가기)',
    description: '대한민국 주요 정당의 온라인 입당 및 탈당 신청 방법을 안내해드립니다. 더불어민주당과 국민의힘 공식 홈페이지를 통해 간편하게 신청하세요.',
};

export default function PartyMembershipPage() {
    return (
        <div
            className="min-h-screen bg-[#050505] text-white flex flex-col items-center py-16 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Premium Gradients & Overlays (Neutral Purple/Indigo Vibe) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-[1]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent z-[2]" />

            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
                        Political Participation Service
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">더 나은 대한민국을 위한</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-red-400 font-black">정당 입당/탈당 통합 안내</span>
                    </h1>

                    <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 via-white to-red-500 mx-auto rounded-full mb-8" />

                    <p className="text-neutral-400 text-base md:text-xl font-light tracking-tight leading-relaxed max-w-2xl">
                        당신의 소중한 참여가 새로운 정치를 만듭니다.<br className="hidden md:block" />
                        주요 정당의 <span className="text-white font-medium">공식 온라인 서비스</span>로 바로 연결해드립니다.
                    </p>
                </div>

                {/* Two Main Action Cards */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    
                    {/* Democratic Party Card */}
                    <Link
                        href="https://membership.theminjoo.kr/"
                        className="group relative flex flex-col bg-zinc-900/40 hover:bg-blue-900/20 backdrop-blur-xl border border-white/5 hover:border-blue-500/40 p-8 rounded-[32px] transition-all duration-500 overflow-hidden shadow-2xl active:scale-[0.98]"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        
                        <div className="flex flex-col h-full relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
                            </div>
                            
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">더불어민주당</h2>
                            <p className="text-blue-400/80 text-sm font-semibold mb-4 tracking-wider uppercase">Democratic Party of Korea</p>
                            
                            <p className="text-neutral-400 text-sm md:text-base font-light mb-8 leading-relaxed">
                                함께 만드는 미래, 더불어민주당의 당원이 되어 정치를 바꿔주세요. 온라인으로 간편하게 신청 가능합니다.
                            </p>
                            
                            <div className="mt-auto flex items-center justify-between">
                                <span className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-sm group-hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20">
                                    온라인 입당/탈당 신청
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </div>
                        
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 -translate-x-full group-hover:animate-shimmer" />
                    </Link>

                    {/* People Power Party Card */}
                    <Link
                        href="https://ondang.peoplepowerparty.kr/"
                        className="group relative flex flex-col bg-zinc-900/40 hover:bg-red-900/20 backdrop-blur-xl border border-white/5 hover:border-red-500/40 p-8 rounded-[32px] transition-all duration-500 overflow-hidden shadow-2xl active:scale-[0.98]"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>

                        <div className="flex flex-col h-full relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">국민의힘</h2>
                            <p className="text-red-400/80 text-sm font-semibold mb-4 tracking-wider uppercase">People Power Party</p>

                            <p className="text-neutral-400 text-sm md:text-base font-light mb-8 leading-relaxed">
                                내일이 기대되는 나라, 국민의힘과 함께 대한민국을 다시 도약시켜주세요. 모바일로도 즉시 참여 가능합니다.
                            </p>

                            <div className="mt-auto flex items-center justify-between">
                                <span className="bg-red-600 text-white px-6 py-3 rounded-full font-bold text-sm group-hover:bg-red-500 transition-colors shadow-lg shadow-red-900/20">
                                    온라인 입당/탈당 신청
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </div>

                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 -translate-x-full group-hover:animate-shimmer" />
                    </Link>

                </div>

                {/* Additional Notice Card */}
                <div className="w-full bg-black/40 border border-neutral-800/80 p-6 md:p-8 rounded-[24px] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-white to-red-500 opacity-50" />
                    <h4 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        가입 전 유의사항 안내
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-neutral-400 leading-relaxed font-light">
                        <ul className="space-y-2 list-disc pl-5">
                            <li><span className="text-neutral-200 font-medium">자격 요건</span>: 만 16세 이상의 대한민국 국민이라면 누구나 가입 가능합니다.</li>
                            <li><span className="text-neutral-200 font-medium">가입 금지</span>: 공무원, 교원 등 법령에 의해 정당 가입이 제한된 분은 신청할 수 없습니다.</li>
                        </ul>
                        <ul className="space-y-2 list-disc pl-5">
                            <li><span className="text-neutral-200 font-medium">탈당 처리</span>: 각 정당의 온라인 시스템에서 본인 인증 후 즉시 처리가 가능합니다.</li>
                            <li><span className="text-neutral-200 font-medium">이중 당적 금지</span>: 대한민국 법령에 따라 두 개 이상의 정당에 동시에 가입할 수 없습니다.</li>
                        </ul>
                    </div>
                </div>

                <footer className="mt-20 text-center w-full">
                    <div className="h-px w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
                    <p className="text-neutral-600 text-xs font-medium tracking-[0.3em] uppercase">
                        Unified Party Membership Guide
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
                keyword="한국 정치" 
                title="📖 대한민국 정치를 읽다"
                hookText="더 나은 내일을 위해 오늘을 읽습니다. 한국 정치와 사회를 깊이 있게 조명하는 필독 도서들을 확인해보세요."
            />
        </div>
    );
}
