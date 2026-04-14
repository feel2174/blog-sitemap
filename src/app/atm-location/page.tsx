import Link from 'next/link';

export const metadata = {
    title: '내 주변 ATM 위치 검색 및 금융맵 앱 다운로드 안내',
    description: '가까운 ATM 기기를 실시간으로 검색하세요. 네이버 지도 ATM 위치 조회 및 금융권 통합 ATM 정보 앱인 금융맵(금융대동여지도) 다운로드 링크를 제공합니다.',
};

export default function AtmLocationPage() {
    const atmServices = [
        {
            title: '내 주변 ATM 실시간 위치 검색',
            desc: '네이버 지도로 가장 가까운 ATM 찾기',
            url: 'https://map.naver.com/p/search/ATM',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            ),
            color: 'from-green-500 to-emerald-600'
        },
        {
            title: '금융맵 (Android)',
            desc: '전국 금융권 통합 ATM 위치 조회 앱',
            url: 'https://play.google.com/store/apps/details?id=com.kftc.finmap.android&hl=ko',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            ),
            color: 'from-blue-600 to-indigo-700'
        },
        {
            title: '금융맵 (iOS)',
            desc: '전국 금융권 통합 ATM 위치 조회 앱',
            url: 'https://apps.apple.com/kr/app/%EA%B8%88%EC%9C%B5%EB%A7%B5-%EA%B8%88%EC%9C%B5%EB%8C%80%EB%8F%99%EC%97%AC%EC%A7%80%EB%8F%84/id1612747791',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"></path><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
            ),
            color: 'from-zinc-700 to-black'
        }
    ];

    return (
        <div 
            className="min-h-screen bg-[#050505] text-white flex flex-col items-center py-16 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Background Aesthetics */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(59,130,246,0.15)_0%,transparent_50%)] z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full z-0" />
            
            <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center">
                {/* Header */}
                <header className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        ATM Location Finder
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">현금이 급할 때</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600">내 주변 ATM 찾기</span>
                    </h1>

                    <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full mb-8" />

                    <p className="text-neutral-400 text-sm md:text-base font-light tracking-tight leading-relaxed">
                        가장 가까운 ATM 기기 위치가 궁금하신가요?<br />
                        <span className="text-neutral-200 font-medium">실시간 지도 검색과 금융 앱</span>으로 빠르게 확인하세요.
                    </p>
                </header>

                {/* Main Link Grid */}
                <div className="w-full space-y-4 mb-20">
                    {atmServices.map((service, index) => (
                        <Link 
                            key={index}
                            href={service.url}
                            className="group relative flex items-center p-6 bg-zinc-900/40 hover:bg-zinc-800/60 border border-white/5 hover:border-blue-500/30 rounded-[2rem] transition-all duration-500 backdrop-blur-2xl active:scale-[0.98] overflow-hidden"
                        >
                            {/* Card Accent */}
                            <div className={`absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b ${service.color} opacity-80 group-hover:w-2 transition-all duration-300`} />
                            
                            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                                {service.icon}
                            </div>

                            <div className="ml-5 flex-1 pr-6 overflow-hidden">
                                <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors truncate">
                                    {service.title}
                                </h3>
                                <p className="text-xs text-neutral-500 mt-1 font-medium group-hover:text-neutral-400 transition-colors">
                                    {service.desc}
                                </p>
                            </div>

                            <div className="h-9 w-9 flex items-center justify-center rounded-full border border-white/10 text-neutral-600 transition-all group-hover:border-blue-500/50 group-hover:text-blue-400 group-hover:bg-blue-500/10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Information Card */}
                <div className="w-full bg-zinc-900/30 border border-white/5 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                    </div>

                    <h2 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                        <span className="p-2 bg-blue-500/20 rounded-xl">ℹ️</span>
                        금융맵(금융대동여지도) 이란?
                    </h2>
                    
                    <div className="space-y-6">
                        <p className="text-sm text-neutral-400 leading-relaxed font-light">
                            금융위원회와 한국은행이 공동 추진한 <strong className="text-neutral-200">금융맵 서비스</strong>는 모든 금융권의 ATM과 지점 정보를 하나로 통합해 보여주는 서비스입니다.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex gap-2 text-xs text-neutral-500">
                                <span className="text-blue-500">•</span>
                                맵에서 바로 수수료 인하 ATM 및 장애인 전용 ATM 필터링 가능
                            </li>
                            <li className="flex gap-2 text-xs text-neutral-500">
                                <span className="text-blue-500">•</span>
                                운영 시간 및 위치 정보 실시간 업데이트
                            </li>
                        </ul>
                    </div>
                    
                    <div className="mt-10 pt-6 border-t border-white/5 flex justify-center">
                        <p className="text-[10px] text-neutral-700 font-bold uppercase tracking-[0.5em]">
                            Smart Finance Experience
                        </p>
                    </div>
                </div>

                <footer className="mt-20 text-center w-full">
                    <p className="text-neutral-800 text-[10px] font-medium tracking-[0.6em] uppercase">
                        Digital Banking Support Guide
                    </p>
                </footer>
            </div>
        </div>
    );
}
