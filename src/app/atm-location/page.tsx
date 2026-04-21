import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

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
            className="min-h-screen bg-[#030303] text-white flex flex-col items-center py-20 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}
        >
            {/* Ambient Background Lights */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[150px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[130px] rounded-full" />
            
            <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center">
                {/* Header */}
                <header className="text-center mb-20 animate-[fadeIn_0.8s_ease-out]">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-[11px] font-bold tracking-[0.25em] uppercase mb-8 backdrop-blur-3xl shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        ATM Location Finder
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 leading-[1.1]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">현금이 필요할 때</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">내 주변 ATM 찾기</span>
                    </h1>

                    <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-10 shadow-[0_0_20px_rgba(59,130,246,0.6)]" />

                    <p className="text-neutral-400 text-sm md:text-lg font-light tracking-tight leading-relaxed max-sm:max-w-xs mx-auto">
                        가까운 현금 인출기 위치가 궁금하신가요?<br />
                        <span className="text-neutral-100 font-semibold underline decoration-blue-500/50 underline-offset-4">통합 금융맵과 실시간 지도</span>로 해결하세요.
                    </p>
                </header>

                {/* List Sections with improved contrast and animations */}
                <div className="w-full flex flex-col gap-5 mb-24">
                    {atmServices.map((service, index) => (
                        <Link 
                            key={index}
                            href={service.url}
                            className="group relative flex items-center p-7 bg-zinc-900/60 hover:bg-zinc-800/90 border border-white/10 hover:border-blue-500/50 rounded-[2.5rem] transition-all duration-500 backdrop-blur-2xl shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2 active:scale-95 overflow-hidden"
                            style={{ animation: `fadeIn 0.6s ease-out backwards ${index * 150}ms` }}
                        >
                            {/* Card Accent Glow */}
                            <div className={`absolute left-0 top-0 w-2 h-full bg-gradient-to-b ${service.color} opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:w-3`} />
                            
                            <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                {service.icon}
                            </div>

                            <div className="ml-6 flex-1 pr-6 overflow-hidden">
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors truncate">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-neutral-500 mt-1 font-medium group-hover:text-neutral-300 transition-colors">
                                    {service.desc}
                                </p>
                            </div>

                            <div className="h-12 w-12 flex items-center justify-center rounded-full border border-white/10 text-neutral-600 transition-all duration-500 group-hover:border-blue-500/50 group-hover:text-blue-400 group-hover:bg-blue-500/10 group-hover:rotate-45">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Information Card */}
                <div className="w-full bg-blue-950/20 border border-blue-500/10 p-10 md:p-12 rounded-[3.5rem] backdrop-blur-xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-700 shadow-3xl">
                    <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 group-hover:scale-125 group-hover:rotate-12">
                        <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                    </div>

                    <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-4 tracking-tighter">
                        <span className="p-3 bg-blue-500/20 rounded-2xl text-xl animate-bounce">ℹ️</span>
                        금융맵(금융대동여지도)
                    </h2>
                    
                    <div className="space-y-8">
                        <p className="text-base text-neutral-400 leading-relaxed font-light">
                            금융위원회와 한국은행이 공동 추진한 <strong className="text-neutral-200 font-bold border-b border-blue-500/30">금융맵 서비스</strong>는 모든 금융권의 ATM 정보를 하나로 통합한 서비스입니다.
                        </p>
                        <ul className="space-y-5">
                            <li className="flex gap-4 items-start text-sm text-neutral-400 group/item">
                                <div className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] shrink-0 transition-transform group-hover/item:scale-150" />
                                <span>수수료 없는 ATM 및 장애인 전용 기기 <strong className="text-blue-400">간편 필터링</strong></span>
                            </li>
                            <li className="flex gap-4 items-start text-sm text-neutral-400 group/item">
                                <div className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] shrink-0 transition-transform group-hover/item:scale-150" />
                                <span>전국 1만여 개 이상의 ATM <strong className="text-blue-400">실시간 위치</strong> 확인 가능</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="mt-14 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
                        <p className="text-[10px] text-neutral-600 font-black uppercase tracking-[0.6em]">
                            Smart Finance Experience
                        </p>
                    </div>
                </div>

                <CoupangAds 
                    keyword="가죽 지갑" 
                    title="💳 현금도 카드도 스타일있게"
                    hookText="ATM 위치 확인하셨나요? 현금 보관도 넉넉하고 정산도 간편한 명품 가죽 지갑과 슬림 카드 지갑 특가 리스트입니다."
                />

                <footer className="mt-28 text-center w-full">
                    <p className="text-neutral-800 text-[11px] font-bold tracking-[0.8em] uppercase opacity-50">
                        Digital Banking Support Guide
                    </p>
                </footer>
            </div>
        </div>
    );
}
