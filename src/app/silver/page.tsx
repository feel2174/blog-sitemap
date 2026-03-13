import Link from 'next/link';

export const metadata = {
    title: '실시간 은시세 조회 - 한국금거래소, 인베스팅, 네이버증권, KB국민은행',
    description: '한국금거래소, 인베스팅, 네이버증권 등 주요 거래소의 실시간 은시세를 한눈에 확인하세요. 실버바 가격 및 실시간 선물 시세 정보 제공.',
};

export default function SilverLandingPage() {
    const silverLinks = [
        {
            name: '한국금거래소',
            url: 'https://koreagoldx.co.kr/',
            desc: '대한민국 대표 거래소 실시간 은시세',
            color: 'from-slate-200 via-zinc-400 to-slate-500'
        },
        {
            name: '인베스팅 시세',
            url: 'https://kr.investing.com/commodities/silver',
            desc: '글로벌 실시간 은 선물 시세 및 뉴스',
            color: 'from-blue-100 via-indigo-400 to-blue-600'
        },
        {
            name: '네이버 증권',
            url: 'https://m.stock.naver.com/marketindex/metals/SIcv1',
            desc: '네이버 모바일 증권 공식 은 시세 정보',
            color: 'from-emerald-200 via-teal-400 to-emerald-600'
        },
        {
            name: 'KB국민은행',
            url: 'https://obank.kbstar.com/quics?page=C039201',
            desc: 'KB국민은행 실리콘/실버바 가격 조회',
            color: 'from-amber-200 via-yellow-400 to-amber-600'
        }
    ];

    return (
        <div
            className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Cinematic Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-40 scale-110 pointer-events-none"
                style={{ backgroundImage: 'url("/silver-bg.png")' }}
            />

            {/* Premium Gradients & Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-[1]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-500/10 via-transparent to-transparent z-[2]" />

            <div className="relative z-10 w-full max-w-md text-center">
                {/* Header Section */}
                <div className="mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-500/5 border border-slate-500/20 rounded-full text-slate-300 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-300"></span>
                        </span>
                        Live Silver Status
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 italic leading-none">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 block">SILVER</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-zinc-400 to-slate-500 block mt-1 uppercase">Price</span>
                    </h1>

                    <div className="h-1 w-12 bg-slate-400 mx-auto rounded-full mb-6" />

                    <p className="text-neutral-400 text-sm md:text-base font-light tracking-tight leading-relaxed">
                        주요 거래소의 실시간 은시세를 <br />
                        <span className="text-neutral-200 font-medium text-lg">원클릭</span>으로 간편하게 확인하세요.
                    </p>
                </div>

                {/* Navigation Links - Interactive Buttons */}
                <div className="flex flex-col gap-4">
                    {silverLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            className="group relative flex flex-col items-start justify-center bg-zinc-900/40 backdrop-blur-2xl border border-white/5 p-6 rounded-3xl transition-all duration-500 hover:scale-[1.03] hover:bg-zinc-800/60 hover:border-slate-400/30 active:scale-[0.98] overflow-hidden shadow-2xl"
                        >
                            {/* Hover Highlight Overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-400/10 via-transparent to-transparent" />

                            <div className="flex w-full items-center justify-between relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5">
                                <span className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${link.color} tracking-tight`}>
                                    {link.name}
                                </span>
                                <div className="p-2.5 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-slate-200 group-hover:text-black transition-all duration-500 group-hover:rotate-45">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
                                </div>
                            </div>

                            <p className="text-neutral-500 text-xs font-light text-left mt-1.5 transition-colors group-hover:text-neutral-400 relative z-10">
                                {link.desc}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Footer Section */}
                <footer className="mt-20">
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-4 text-neutral-600">
                            <div className="h-px w-8 bg-neutral-800" />
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Premium Silver Info</span>
                            <div className="h-px w-8 bg-neutral-800" />
                        </div>

                        <p className="text-neutral-500 text-[10px] leading-relaxed max-w-[280px] mx-auto font-medium opacity-60 text-center">
                            본 사이트는 정보 제공만을 목적으로 하며 시세 정보는 제공처의 정책에 따라 달라질 수 있습니다.
                        </p>

                        <div className="text-[9px] text-neutral-700 font-mono tracking-widest mt-4">
                            KOREAGOLDX | INVESTING | NAVER | KBSTAR
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
