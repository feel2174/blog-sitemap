import Link from 'next/link';

export const metadata = {
    title: '서울시50플러스 자치구별 센터 홈페이지 바로가기 안내',
    description: '서울시 장년층을 위한 50플러스센터 자치구별 홈페이지를 한눈에 확인하세요. 동작, 영등포, 노원, 서대문 등 지역별 센터 바로가기를 제공합니다.',
};

export default function Seoul50PlusCenterPage() {
    const centers = [
        { name: '동작센터', region: '동작', url: 'https://50plus.or.kr/djc/index.do', color: 'from-blue-500 to-cyan-500' },
        { name: '영등포센터', region: '영등포', url: 'https://50plus.or.kr/ydp/index.do', color: 'from-emerald-500 to-teal-500' },
        { name: '노원센터', region: '노원', url: 'https://50plus.or.kr/nwc/index.do', color: 'from-orange-500 to-amber-500' },
        { name: '서대문센터', region: '서대문', url: 'https://50plus.or.kr/sdm/index.do', color: 'from-purple-500 to-indigo-500' },
        { name: '성북센터', region: '성북', url: 'https://50plus.or.kr/sbc/index.do', color: 'from-rose-500 to-pink-500' },
        { name: '금천센터', region: '금천', url: 'https://50plus.or.kr/gch/index.do', color: 'from-sky-500 to-blue-500' },
        { name: '강서센터', region: '강서', url: 'https://50plus.or.kr/gsc/index.do', color: 'from-green-500 to-emerald-500' },
        { name: '서초센터', region: '서초', url: 'https://50plus.or.kr/sch/index.do', color: 'from-indigo-500 to-violet-500' },
        { name: '강동센터', region: '강동', url: 'https://50plus.or.kr/gdc/index.do', color: 'from-amber-500 to-yellow-600' },
        { name: '양천센터', region: '양천', url: 'https://50plus.or.kr/ycp/index.do', color: 'from-teal-500 to-cyan-600' },
        { name: '성동센터', region: '성동', url: 'https://50plus.or.kr/sdc/index.do', color: 'from-blue-600 to-indigo-600' },
        { name: '강북센터', region: '강북', url: 'https://50plus.or.kr/gbc/index.do', color: 'from-red-500 to-rose-600' },
        { name: '관악센터', region: '관악', url: 'https://50plus.or.kr/gnc/index.do', color: 'from-lime-500 to-green-600' },
        { name: '동대문센터', region: '동대문', url: 'https://50plus.or.kr/ddc/index.do', color: 'from-cyan-500 to-blue-500' },
        { name: '용산센터', region: '용산', url: 'https://50plus.or.kr/ysc/index.do', color: 'from-violet-500 to-purple-600' }
    ];

    return (
        <div 
            className="min-h-screen bg-[#fafafa] text-zinc-900 flex flex-col items-center py-20 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}
        >
            {/* Soft Background Accents */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100 blur-[120px] rounded-full opacity-60" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-50 blur-[100px] rounded-full opacity-60" />
            
            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
                {/* Header */}
                <header className="text-center mb-20 animate-[fadeIn_0.8s_ease-out]">
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-zinc-200 rounded-full text-zinc-500 text-sm font-bold tracking-tight mb-8 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                        </span>
                        서울시50플러스 정보 포털
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-[1.2] text-zinc-900">
                        인생 2막의 시작,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">자치구별 센터 안내</span>
                    </h1>

                    <div className="h-1.5 w-20 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded-full mb-10" />

                    <p className="text-zinc-500 text-xl md:text-2xl font-medium tracking-tight leading-relaxed max-w-2xl mx-auto">
                        가까운 지역의 50플러스센터를 방문하여<br />
                        <span className="text-zinc-900 font-extrabold underline decoration-teal-500/30 underline-offset-8">배움, 일자리, 문화 혜택</span>을 누려보세요.
                    </p>
                </header>

                {/* Main Content: Center Grid */}
                <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {centers.map((center, index) => (
                        <Link 
                            key={index}
                            href={center.url}
                            className="group relative flex flex-col items-center justify-center p-10 bg-white border border-zinc-100 hover:border-teal-500/40 rounded-[2.5rem] transition-all duration-500 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(13,148,136,0.15)] hover:-translate-y-2 active:scale-95 text-center"
                            style={{ animation: `fadeIn 0.6s ease-out backwards ${index * 50}ms` }}
                        >
                            {/* Decorative Badge */}
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${center.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                <span className="text-xl font-bold">{center.region[0]}</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-black text-zinc-800 mb-2 group-hover:text-teal-600 transition-colors">
                                {center.name}
                            </h3>
                            <p className="text-lg text-zinc-400 font-medium group-hover:text-zinc-600 transition-colors">
                                {center.region} 지역 맞춤 지원
                            </p>

                            {/* Hover Arrow */}
                            <div className="mt-8 flex items-center justify-center gap-2 text-teal-600 font-bold text-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                홈페이지 방문하기
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                    ))}
                </section>

                {/* Help Card */}
                <div className="w-full bg-zinc-900 p-12 md:p-16 rounded-[4rem] text-white relative overflow-hidden group shadow-2xl">
                    <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[120%] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-md text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                                서울시50플러스재단<br />
                                <span className="text-teal-400">대표 포털 바로가기</span>
                            </h2>
                            <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed mb-10">
                                모든 자치구의 정보를 통합 검색하고 싶으시다면 대표 포털 사이트를 확인해 보세요.
                            </p>
                            <Link 
                                href="https://50plus.or.kr/"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-teal-500 hover:bg-teal-400 text-zinc-900 font-black text-xl rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-teal-500/20"
                            >
                                대표 홈페이지
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </Link>
                        </div>

                        <div className="flex-shrink-0 grid grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-20 h-20 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                            ))}
                        </div>
                    </div>
                </div>

                <footer className="mt-32 pb-20 text-center w-full">
                    <p className="text-zinc-400 text-lg font-bold tracking-[0.2em] uppercase">
                        Seoul 50 Plus Support Center
                    </p>
                    <p className="text-zinc-300 text-sm mt-4">© 2026 Public Service Information Portal</p>
                </footer>
            </div>
        </div>
    );
}
