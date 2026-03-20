import Link from 'next/link';

export const metadata = {
    title: '2025 장병내일준비적금 은행별 바로가기 - KB, 하나, IBK, 신한은행',
    description: '군 장병을 위한 고금리 적금, 장병내일준비적금 신청 가이드. 국민은행, 하나은행, 기업은행, 신한은행 공식 홈페이지 바로가기와 최신 금리 및 실질 혜택 정보를 확인하세요.',
};

export default function MilitarySavingsPage() {
    const bankLinks = [
        {
            name: 'KB 국민은행',
            url: 'https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&isNew=N&prcode=DP01000939#loading',
            desc: '든든한 군생활의 시작, KB 장병내일준비적금',
            logo: 'https://img.etoday.co.kr/static/news/2021/04/20210430155208_1615636_600_400.jpg', // Placeholder for actual icon/color
            color: 'from-amber-400 to-amber-600'
        },
        {
            name: '하나은행',
            url: 'https://www.kebhana.com/cont/mall/mall08/mall0801/mall080102/1456099_115157.jsp',
            desc: '미래를 향한 저축 파트너, 하나 장병내일준비적금',
            color: 'from-emerald-500 to-emerald-700'
        },
        {
            name: 'IBK 기업은행',
            url: 'https://mybank.ibk.co.kr/uib/jsp/index.jsp',
            desc: '중소기업 핵심인력까지 생각하는 IBK 장병적금',
            color: 'from-blue-600 to-blue-800'
        },
        {
            name: '신한은행',
            url: 'https://bank.shinhan.com/index.jsp#020102010110',
            desc: '편리한 뱅킹의 가치, 신한 장병내일준비적금',
            color: 'from-blue-500 to-indigo-700'
        }
    ];

    return (
        <div
            className="min-h-screen bg-[#0a0f0a] text-white flex flex-col items-center px-6 py-20 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Immersive Background */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-30 scale-105 pointer-events-none"
                style={{ backgroundImage: 'url("/military-savings-bg.png")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-[1]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)] z-[1]" />

            <div className="relative z-10 w-full max-w-xl text-center">
                
                {/* Header Section */}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-zinc-300 text-[10px] font-black tracking-[0.3em] uppercase mb-8 backdrop-blur-xl">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                        </span>
                        Elite Military Savings
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 leading-none">
                        <span className="text-white block">장병내일준비적금</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200 block mt-2">은행별 바로가기</span>
                    </h1>

                    <div className="h-1.5 w-16 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-10" />

                    <p className="text-zinc-400 text-sm md:text-lg font-medium tracking-tight leading-loose max-w-lg mx-auto">
                        전역 후 목돈 마련을 위한 <br />
                        <span className="text-white font-black text-xl md:text-2xl underline decoration-orange-500 underline-offset-8">최고 금리 적금 상품</span>을 바로 확인하세요.
                    </p>
                </div>

                {/* Bank Option List */}
                <div className="space-y-4">
                    {bankLinks.map((bank, index) => (
                        <Link
                            key={index}
                            href={bank.url}
                            className="group relative flex items-center justify-between bg-zinc-900/60 backdrop-blur-3xl border border-white/5 p-8 rounded-3xl transition-all duration-500 hover:scale-[1.03] hover:bg-zinc-800/80 hover:border-orange-500/30 active:scale-[0.98] overflow-hidden shadow-2xl"
                        >
                            <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${bank.color} opacity-80 group-hover:w-3 transition-all duration-300`} />
                            
                            <div className="flex flex-col items-start relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
                                <span className="text-2xl md:text-3xl font-black tracking-tighter text-white mb-2">
                                    {bank.name}
                                </span>
                                <p className="text-zinc-500 text-sm font-medium group-hover:text-zinc-300 transition-colors">
                                    {bank.desc}
                                </p>
                            </div>

                            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Educational Info Section */}
                <div className="mt-16 p-8 bg-zinc-900/40 border border-white/5 rounded-3xl backdrop-blur-sm text-left relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-3xl rounded-full" />
                     <h3 className="text-orange-400 font-black text-lg mb-4 flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-orange-500" />
                         놓치지 말아야 할 혜택
                     </h3>
                     <ul className="space-y-3 text-zinc-400 text-sm font-medium">
                         <li className="flex gap-2">
                             <span className="text-orange-500">▶</span>
                             국가 지원 1% 이자지원금 추가 지급 (최고 연 6% 수준)
                         </li>
                         <li className="flex gap-2">
                             <span className="text-orange-500">▶</span>
                             매칭지원금 지급 (원금 및 이자의 100% 추가 적립)
                         </li>
                         <li className="flex gap-2">
                             <span className="text-orange-500">▶</span>
                             비과세 혜택 (이자소득에 대한 세금 면제)
                         </li>
                     </ul>
                </div>

                {/* Footer Section */}
                <footer className="mt-20">
                    <div className="flex flex-col items-center gap-8">
                        <div className="flex items-center gap-4 text-zinc-700">
                            <div className="h-px w-10 bg-zinc-800" />
                            <span className="text-[11px] font-black tracking-[0.4em] uppercase">Official Military Finance Guide</span>
                            <div className="h-px w-10 bg-zinc-800" />
                        </div>

                        <p className="text-zinc-600 text-[10px] leading-relaxed max-w-sm font-medium opacity-50 uppercase tracking-tighter">
                            본 사이트는 상기 금융기관들과 이해관계가 없으며, <br />
                            신속한 사이트 이동을 돕기 위해 공식 링크만을 제공합니다.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
