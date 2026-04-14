import Link from 'next/link';

export const metadata = {
    title: '전국 주요 홈쇼핑 TV 편성표 모음 (CJ, 롯데, 현대, GS, 홈앤쇼핑, NS)',
    description: '대한민국 주요 홈쇼핑 채널의 실시간 TV 편성표와 방송 정보를 한눈에 확인하세요. CJ온스타일, 롯데홈쇼핑, 현대홈쇼핑, GS샵 등 바로가기를 제공합니다.',
};

export default function HomeShoppingSchedulePage() {
    const schedules = [
        {
            name: 'CJ온스타일 (CJ홈쇼핑)',
            url: 'https://display.cjonstyle.com/p/tv/tvSchedule',
            color: 'from-orange-500 to-red-600',
            logo: 'CJ'
        },
        {
            name: '롯데홈쇼핑',
            url: 'https://www.lotteimall.com/main/viewMain.lotte#disp_no=5223317&isWebp=Y',
            color: 'from-red-600 to-rose-700',
            logo: 'Lotte'
        },
        {
            name: '현대홈쇼핑 (Hmall)',
            url: 'https://www.hmall.com/md/dpl/brodPordPbdv',
            color: 'from-green-600 to-teal-700',
            logo: 'Hyundai'
        },
        {
            name: 'GS샵 (GS홈쇼핑)',
            url: 'https://www.gsshop.com/shop/tv/tvScheduleMain.gs',
            color: 'from-cyan-500 to-blue-600',
            logo: 'GS'
        },
        {
            name: '홈앤쇼핑',
            url: 'https://www.hnsmall.com/display/tvschedule',
            color: 'from-red-500 to-orange-500',
            logo: 'H&S'
        },
        {
            name: 'NS홈쇼핑',
            url: 'https://m.nsmall.com/store/fixed/schedule',
            color: 'from-orange-600 to-amber-700',
            logo: 'NS'
        }
    ];

    return (
        <div 
            className="min-h-screen bg-[#050505] text-white flex flex-col items-center py-16 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Dynamic Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-indigo-600/10 blur-[120px] rounded-full z-0" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 blur-[100px] rounded-full z-0" />
            
            <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
                {/* Header */}
                <header className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-xl">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white/60"></span>
                        </span>
                        Live Shopping Guide
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">오늘의 득템을 위한</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">홈쇼핑 편성표 모음</span>
                    </h1>

                    <div className="h-1 w-12 bg-white/20 mx-auto rounded-full mb-8" />

                    <p className="text-neutral-400 text-sm md:text-base font-light tracking-tight leading-relaxed max-w-md mx-auto">
                        실시간 방송 정보부터 다음 방송 예약까지!<br />
                        <span className="text-neutral-200 font-medium">대한민국 주요 홈쇼핑사별 편성표</span>를 지금 바로 확인하십시오.
                    </p>
                </header>

                {/* Grid List */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
                    {schedules.map((shop, index) => (
                        <Link 
                            key={index}
                            href={shop.url}
                            className="group relative flex items-center p-6 bg-zinc-900/30 hover:bg-zinc-800/50 border border-white/5 hover:border-indigo-500/30 rounded-[2rem] transition-all duration-500 backdrop-blur-2xl active:scale-[0.98] overflow-hidden"
                        >
                            <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${shop.color} opacity-60 group-hover:w-2 transition-all duration-300`} />
                            
                            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${shop.color} text-white text-xs font-black shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                                {shop.logo}
                            </div>

                            <div className="ml-5 flex-1 pr-4 truncate">
                                <h3 className="text-base font-bold text-white group-hover:text-indigo-200 transition-colors truncate">
                                    {shop.name}
                                </h3>
                                <p className="text-[10px] text-neutral-500 mt-1 font-bold tracking-widest uppercase group-hover:text-neutral-400">
                                    Broadcast Schedule
                                </p>
                            </div>

                            <div className="h-8 w-8 flex items-center justify-center rounded-full bg-white/5 text-neutral-600 transition-all group-hover:bg-indigo-500 group-hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Info Card */}
                <div className="w-full bg-white/[0.02] border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden group hover:border-indigo-500/20 transition-all duration-700">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 12l-4-4h8l-4 4z"/></svg>
                    </div>

                    <h2 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                        <span className="p-2 bg-indigo-500/20 rounded-xl text-lg">💡</span>
                        스마트 쇼핑 팁
                    </h2>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2 shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.6)]" />
                            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed leading-relaxed font-light">
                                <strong className="text-neutral-200">생방송 알림 설정</strong>: 각 앱에서 원하는 상품의 방송 알림을 설정하면 시작 전 푸시 메시지를 받을 수 있습니다.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2 shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.6)]" />
                            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed leading-relaxed font-light">
                                <strong className="text-neutral-200">모바일 앱 혜택</strong>: PC보다 모바일 앱에서 결제 시 적립금이나 할인 쿠폰 혜택이 더 큰 경우가 많으니 꼭 확인하세요.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-10 pt-6 border-t border-white/5 flex justify-center">
                        <p className="text-[10px] text-neutral-700 font-bold uppercase tracking-[0.5em]">
                            Smart Shopping Experience
                        </p>
                    </div>
                </div>

                <footer className="mt-20 text-center w-full">
                    <p className="text-neutral-800 text-[10px] font-medium tracking-[0.6em] uppercase">
                        All-in-One Home Shopping Portal
                    </p>
                </footer>
            </div>
        </div>
    );
}
