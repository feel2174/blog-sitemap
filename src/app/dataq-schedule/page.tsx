import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '2026 데이터자격시험 일정 안내 (SQLD, ADsP, ADP, 빅분기 등)',
    description: '빅데이터 분석기사, SQLD, ADsP, ADP 등 국가공인 데이터 자격시험의 2026년 전체 일정을 확인하세요. 공식 접수 페이지로 바로 연결됩니다.',
};

export default function DataQSchedulePage() {
    const exams = [
        { name: '빅데이터 분석기사', slug: 'bigdata' },
        { name: '데이터분석 전문가(ADP)', slug: 'adp' },
        { name: '데이터분석 준전문가(ADsP)', slug: 'adsp' },
        { name: 'SQL 전문가 (SQLP)', slug: 'sqlp' },
        { name: 'SQL 개발자 (SQLD)', slug: 'sqld' },
        { name: '데이터아키텍처 전문가 (DAP)', slug: 'dap' },
        { name: '데이터아키텍처 준전문가 (DAsP)', slug: 'dasp' },
    ];

    const targetUrl = 'https://www.dataq.or.kr/www/accept/schedule.do';

    return (
        <div
            className="min-h-screen bg-[#08090a] text-white flex flex-col items-center py-16 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Background Aesthetics */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent z-0" />
            
            <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
                {/* Header */}
                <header className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        2026 Data Qualification
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">데이터자격검정</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-400 to-indigo-500">시험일정 총정리</span>
                    </h1>

                    <div className="h-1.5 w-16 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(79,70,229,0.5)]" />

                    <p className="text-neutral-400 text-sm md:text-base font-light tracking-tight leading-relaxed max-w-lg mx-auto">
                        한국데이터산업진흥원에서 주관하는 <span className="text-neutral-200 font-medium whitespace-nowrap">국가공인 자격시험 일정</span>입니다.<br className="hidden md:block" />
                        아래 버튼을 클릭하여 상세 일정을 확인하고 접수하세요.
                    </p>
                </header>

                {/* Exam List Grid */}
                <nav className="w-full flex flex-col gap-4 mb-16">
                    {exams.map((exam, index) => (
                        <Link
                            key={index}
                            href={targetUrl}
                            className="group relative flex items-center justify-between bg-zinc-900/40 hover:bg-zinc-800/60 border border-white/5 hover:border-indigo-500/30 p-5 md:p-6 rounded-2xl transition-all duration-400 backdrop-blur-xl active:scale-[0.99]"
                        >
                            <div className="flex items-center gap-4">
                                <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14.5 2 14.5 7.5 20 7.5"></polyline></svg>
                                </div>
                                <span className="text-lg md:text-xl font-bold text-white/90 group-hover:text-white transition-colors">
                                    {exam.name}
                                </span>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <span className="hidden md:block text-xs font-semibold text-neutral-500 group-hover:text-indigo-400 uppercase tracking-widest transition-colors">
                                    View Schedule
                                </span>
                                <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all duration-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-400 group-hover:rotate-[-45deg] group-hover:translate-x-0.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                </div>
                            </div>

                            {/* Decorative Edge Glow */}
                            <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-indigo-500 rounded-r-full scale-y-0 group-hover:scale-y-100 transition-transform duration-400" />
                        </Link>
                    ))}
                </nav>

                {/* Additional Info / Notice Section */}
                <div className="w-full bg-zinc-900/20 border border-white/5 p-6 md:p-8 rounded-3xl backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <div className="p-2 bg-indigo-500/20 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        </div>
                        시험 접수 전 유의사항
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <h3 className="text-indigo-400 font-bold text-sm">접수 시간 준수</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                모든 시험의 원서 접수는 <span className="text-neutral-200">접수 시작일 10:00부터 마감일 18:00까지</span> 가능합니다. 마감 직전에는 접속자가 몰릴 수 있으니 유의하세요.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-indigo-400 font-bold text-sm">응시 자격 확인</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                ADP, DAP와 같은 전문가 자격증은 별도의 <span className="text-neutral-200">학력이나 경력 등 응시 자격</span>이 필요합니다. 접수 전 본인의 자격 여부를 반드시 확인하시기 바랍니다.
                            </p>
                        </div>
                    </div>
                    
                    <div className="h-px w-full bg-white/5 my-6" />
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link 
                            href={targetUrl}
                            className="w-full sm:w-auto px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors text-center text-sm active:scale-95"
                        >
                            공식 일정 확인하기
                        </Link>
                        <p className="text-[11px] text-neutral-500 font-medium tracking-tight">
                            자료 출처: 한국데이터산업진흥원 (dataq.or.kr)
                        </p>
                    </div>
                </div>

                <CoupangAds 
                    keyword="자격증 플래너" 
                    title="✍️ 올해는 반드시 합격!"
                    hookText="데이터 자격증 시험 공부, 장비가 반입니다! 집중력을 높여주는 스터디 플래너와 문구용품 확인해 보세요."
                />

                <footer className="mt-20 text-center w-full">
                    <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-neutral-800 to-transparent mb-6" />
                    <p className="text-neutral-600 text-[10px] font-medium tracking-[0.3em] uppercase">
                        Data Qualification Schedule Info
                    </p>
                </footer>
            </div>
            
            {/* Smooth Animation Styles */}
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
