import Link from 'next/link';

export const metadata = {
    title: '전국 주요 도청 바로가기 서비스 - 경기도, 강원도, 충청도, 전라도, 경상도, 제주도',
    description: '전국 주요 도청 홈페이지로 바로 연결되는 간편 가이드. 경기도청, 강원도청, 충북도청, 전북도청, 제주도청, 충남도청, 경북도청, 경남도청, 전남도청 공식 사이트 바로가기.',
};

export default function LocalGovLandingPage() {
    const govLinks = [
        {
            name: '경기도청',
            url: 'https://www.gg.go.kr/',
            desc: '변화의 중심, 기회의 경기',
            color: 'from-blue-600 via-blue-500 to-indigo-600'
        },
        {
            name: '강원특별자치도청',
            url: 'https://state.gwd.go.kr/',
            desc: '새로운 강원, 특별자치시대',
            color: 'from-emerald-600 via-teal-500 to-green-600'
        },
        {
            name: '충북도청',
            url: 'https://www.chungbuk.go.kr/',
            desc: '중심에 서다, 충청북도',
            color: 'from-amber-600 via-yellow-500 to-orange-600'
        },
        {
            name: '전북특별자치도청',
            url: 'https://www.jeonbuk.go.kr/',
            desc: '글로벌 생명경제 도시, 전북',
            color: 'from-rose-600 via-pink-500 to-red-600'
        },
        {
            name: '제주특별자치도청',
            url: 'https://www.jeju.go.kr/',
            desc: '빛나는 제주, 다함께 미래로',
            color: 'from-cyan-600 via-sky-500 to-blue-600'
        },
        {
            name: '충남도청',
            url: 'https://www.chungnam.go.kr',
            desc: '힘쎈충남, 대한민국의 힘',
            color: 'from-indigo-600 via-purple-500 to-violet-600'
        },
        {
            name: '경북도청',
            url: 'https://www.gb.go.kr/',
            desc: '경북의 힘으로, 새로운 대한민국',
            color: 'from-sky-600 via-blue-500 to-indigo-600'
        },
        {
            name: '경남도청',
            url: 'https://gyeongnam.go.kr/',
            desc: '활기찬 경남, 행복한 도민',
            color: 'from-teal-600 via-emerald-500 to-green-600'
        },
        {
            name: '전남도청',
            url: 'https://www.jeonnam.go.kr/',
            desc: '세계로 웅비하는 대도약 전남',
            color: 'from-blue-700 via-indigo-600 to-slate-700'
        }
    ];

    return (
        <div
            className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col items-center px-6 py-16 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Soft Background Layer */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-10 pointer-events-none grayscale"
                style={{ backgroundImage: 'url("/local-gov-bg.png")' }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-[#f8fafc] z-[1]" />

            <div className="relative z-10 w-full max-w-2xl text-center">
                
                {/* Header Section */}
                <div className="mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600/5 border border-blue-600/10 rounded-full text-blue-700 text-[10px] font-black tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                        </span>
                        Official Government Shortcuts
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
                        <span className="text-slate-900">지역 도청 사이트</span><br />
                        <span className="text-blue-600">바로가기 가이드</span>
                    </h1>

                    <div className="h-1.5 w-12 bg-blue-600 mx-auto rounded-full mb-8" />

                    <p className="text-slate-500 text-sm md:text-base font-medium tracking-tight leading-relaxed max-w-sm mx-auto">
                        각 지역별 공식 도청 홈페이지로 <br />
                        <span className="text-slate-800 font-bold underline decoration-blue-500 underline-offset-4">한 번의 클릭</span>으로 편리하게 이동하세요.
                    </p>
                </div>

                {/* Grid Layout for Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {govLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            className="group relative flex items-center bg-white border border-slate-200 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50 active:scale-[0.98] overflow-hidden"
                        >
                            <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${link.color} group-hover:w-2 transition-all duration-300`} />
                            
                            <div className="flex w-full items-center justify-between ml-2">
                                <div className="text-left">
                                    <span className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {link.name}
                                    </span>
                                    <p className="text-slate-400 text-[11px] font-medium mt-0.5 group-hover:text-slate-600 transition-colors">
                                        {link.desc}
                                    </p>
                                </div>
                                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Footer Section */}
                <footer className="mt-20">
                    <div className="flex flex-col items-center gap-6">
                        <p className="text-slate-400 text-[10px] leading-relaxed max-w-[280px] mx-auto font-bold uppercase tracking-[0.2em] opacity-60 text-center">
                            Official Administration Portal
                        </p>

                        <div className="flex gap-2 flex-wrap justify-center opacity-30 invert pointer-events-none">
                             {/* Symbolish icons Placeholder or Text */}
                             <span className="text-[10px] font-mono">GOV.KR | LOCAL.GOV</span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
