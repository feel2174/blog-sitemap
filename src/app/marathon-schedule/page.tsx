import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '2026 메이저 마라톤 일정 안내 (서울, 춘천, JTBC 마라톤)',
    description: '서울마라톤(동아), 춘천마라톤(조선), JTBC서울마라톤 등 국내 3대 메이저 마라톤 대회의 2026년 공식 일정과 신청 홈페이지를 확인하세요.',
};

export default function MarathonSchedulePage() {
    const marathons = [
        { 
            name: '서울마라톤 (동아마라톤)', 
            url: 'https://seoul-marathon.com/',
            description: '세계 7대 메이저 대회를 지향하는 국내 최고 권위의 대회',
            tag: 'AIMS 인증'
        },
        { 
            name: '춘천마라톤 (조선마라톤)', 
            url: 'https://www.chuncheonmarathon.com/',
            description: '가을의 전설, 의암호의 아름다운 풍경을 달리는 코스',
            tag: '가을의 전설'
        },
        { 
            name: 'JTBC서울마라톤 (중앙서울마라톤)', 
            url: 'https://marathon.jtbc.com/',
            description: '나를 위한 달리기, 서울 도심을 가로지르는 에너지',
            tag: '도심 질주'
        },
    ];

    return (
        <div
            className="min-h-screen bg-[#050505] text-white flex flex-col items-center py-16 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* dynamic aesthetics */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-red-500/10 z-0" />
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full" />
            
            <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
                {/* Header */}
                <header className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-xl">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        2026 Major Marathon
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">대한민국 3대 메이저</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-rose-500">마라톤 대회 일정</span>
                    </h1>

                    <div className="h-1 w-12 bg-orange-500 mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(249,115,22,0.6)]" />

                    <p className="text-neutral-400 text-sm md:text-base font-light tracking-tight leading-relaxed max-w-md mx-auto">
                        러너들의 꿈, <span className="text-neutral-200 font-semibold italic">Grand Slam</span>을 향한 여정.<br />
                        2026년 주요 마라톤 공식 홈페이지로 연결됩니다.
                    </p>
                </header>

                {/* Marathon List */}
                <div className="w-full flex flex-col gap-6 mb-16">
                    {marathons.map((run, index) => (
                        <Link
                            key={index}
                            href={run.url}
                            className="group relative flex flex-col bg-zinc-900/30 hover:bg-zinc-800/50 border border-white/[0.03] hover:border-orange-500/30 p-8 rounded-[2rem] transition-all duration-500 backdrop-blur-2xl overflow-hidden active:scale-[0.98]"
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />
                            
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-2 py-0.5 bg-orange-500/10 border border-orange-500/20 rounded text-[9px] font-bold text-orange-400 tracking-wider uppercase">
                                        {run.tag}
                                    </span>
                                    <div className="p-2 rounded-full border border-white/5 group-hover:border-orange-500/40 group-hover:bg-orange-500/10 transition-all duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500 group-hover:text-orange-400 transform group-hover:scale-110 transition-transform"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                                    </div>
                                </div>
                                
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-orange-200 transition-all">
                                    {run.name}
                                </h3>
                                <p className="text-neutral-500 text-sm md:text-base font-light group-hover:text-neutral-300 transition-colors">
                                    {run.description}
                                </p>
                            </div>
                            
                            {/* Decorative Run Icon Mask */}
                            <div className="absolute bottom-[-10px] right-[-10px] opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none">
                                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M13.49 5.42c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.07 22h2l1.64-5.11 3.29 3.11V22h2v-5.02L10.38 13.5l.59-3c1.61 2.22 3.86 3.5 6.53 3.5v-2c-2.07 0-3.8-1.07-4.88-2.79l-.95-1.54C11.3 7.11 10.59 6.7 9.81 6.7c-.3 0-.58.05-.85.14L3.84 8.78l1 1.95 2.16-.76L5.5 13l-1.43 2.57L5.07 22z"/></svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Additional Tip Box */}
                <div className="w-full bg-zinc-900/40 border border-white/5 p-6 md:p-8 rounded-3xl backdrop-blur-sm shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-orange-500 to-red-600" />
                    
                    <h2 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-xl">🏃‍♂️</span> 마라톤 준비 필수 팁
                    </h2>
                    
                    <ul className="space-y-3">
                        <li className="flex gap-3 text-sm text-neutral-400">
                            <span className="text-orange-500 shrink-0">•</span>
                            <span>대회 접수는 대개 전년도 말 혹은 수개월 전 <strong>선착순</strong>으로 마감되니 미리 알림을 설정하세요.</span>
                        </li>
                        <li className="flex gap-3 text-sm text-neutral-400">
                            <span className="text-orange-500 shrink-0">•</span>
                            <span>건강진단서(Medical Certificate) 제출이 의무인 경우가 많으므로 미리 준비하시는 것이 좋습니다.</span>
                        </li>
                    </ul>
                    
                    <div className="mt-8 flex justify-center">
                        <p className="text-[10px] text-neutral-600 font-medium tracking-widest uppercase text-center border-t border-white/5 pt-6 w-full">
                            Your journey begins with a single step
                        </p>
                    </div>
                </div>

                <CoupangAds 
                    keyword="러닝화" 
                    title="🏃 완주를 위한 완벽한 파트너"
                    hookText="기록 단축의 비밀은 발끝에서 시작됩니다! 마라톤 완주를 도와주는 초경량 카본 러닝화와 무릎 보호를 위한 스포츠 테이핑 특가 리스트."
                />

                <footer className="mt-20 text-center w-full">
                    <p className="text-neutral-700 text-[10px] font-medium tracking-[0.5em] uppercase">
                        2026 Marathon Schedule Portal
                    </p>
                </footer>
            </div>
        </div>
    );
}
