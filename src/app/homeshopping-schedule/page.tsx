import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

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
            className="min-h-screen bg-[#020202] text-white flex flex-col items-center py-20 px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}
        >
            {/* Dynamic Background Effects */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-indigo-600/20 blur-[160px] rounded-full z-0 animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[130px] rounded-full z-0" />
            
            <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
                {/* Header */}
                <header className="text-center mb-20 animate-[fadeIn_1s_ease-out]">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/50 text-[10px] font-black tracking-[0.3em] uppercase mb-8 backdrop-blur-3xl shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white/60"></span>
                        </span>
                        Live Shopping Guide
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 leading-[1.1]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">쇼핑의 타이밍</span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">홈쇼핑 편성표 안내</span>
                    </h1>

                    <div className="h-1.5 w-16 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-10 shadow-[0_0_20px_rgba(99,102,241,0.5)]" />

                    <p className="text-neutral-400 text-sm md:text-lg font-light tracking-tight leading-relaxed max-w-md mx-auto">
                        보고 싶은 상품이 언제 방송될까요?<br />
                        <span className="text-neutral-100 font-semibold border-b border-white/20 pb-0.5">전국 6대 홈쇼핑사 편성표</span>를 지금 바로 최신 정보로 확인하세요.
                    </p>
                </header>

                {/* Grid List with improved interactivity */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mb-24">
                    {schedules.map((shop, index) => (
                        <Link 
                            key={index}
                            href={shop.url}
                            className="group relative flex items-center p-7 bg-zinc-900/60 hover:bg-zinc-800/90 border border-white/10 hover:border-indigo-500/50 rounded-[2.5rem] transition-all duration-500 backdrop-blur-3xl shadow-2xl hover:shadow-indigo-900/20 hover:-translate-y-2 active:scale-95 overflow-hidden"
                            style={{ animation: `fadeIn 0.6s ease-out backwards ${index * 100}ms` }}
                        >
                            {/* Card Accent */}
                            <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${shop.color} opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:w-3`} />
                            
                            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${shop.color} text-white text-sm font-black shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                {shop.logo}
                            </div>

                            <div className="ml-6 flex-1 pr-4">
                                <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors truncate">
                                    {shop.name}
                                </h3>
                                <p className="text-[10px] text-neutral-500 mt-1 font-black tracking-widest uppercase opacity-70">
                                    Broadcast List
                                </p>
                            </div>

                            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5 text-neutral-600 transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-45">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Info Card with better presentation */}
                <div className="w-full bg-indigo-950/20 border border-indigo-500/10 p-10 md:p-14 rounded-[3.5rem] backdrop-blur-xl relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-700 shadow-3xl">
                    <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 group-hover:scale-125 group-hover:-rotate-12">
                        <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 12l-4-4h8l-4 4z"/></svg>
                    </div>

                    <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-4 tracking-tighter">
                        <span className="p-3 bg-indigo-500/20 rounded-2xl text-xl animate-pulse">💡</span>
                        스마트 쇼핑 가이드
                    </h2>
                    
                    <div className="space-y-8">
                        <div className="flex gap-5 items-start">
                            <div className="h-2 w-2 rounded-full bg-indigo-500 mt-2 shrink-0 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
                            <p className="text-sm md:text-base text-neutral-400 leading-relaxed font-light">
                                <strong className="text-neutral-100 font-bold">방송 알림 설정</strong>: 앱 내 &apos;알림&apos;기능으로 놓치기 쉬운 한정 수량 방송을 미리 예약하세요.
                            </p>
                        </div>
                        <div className="flex gap-5 items-start">
                            <div className="h-2 w-2 rounded-full bg-indigo-500 mt-2 shrink-0 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
                            <p className="text-sm md:text-base text-neutral-400 leading-relaxed font-light">
                                <strong className="text-neutral-100 font-bold">모바일 단독 혜택</strong>: 모바일 결제 시 추가 적립이나 앱 전용 쿠폰으로 <span className="text-indigo-400">최대 할인</span>을 확인하세요.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-14 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
                        <p className="text-[11px] text-neutral-700 font-black uppercase tracking-[0.6em]">
                            Smart Shopping Experience
                        </p>
                    </div>
                </div>

                <CoupangAds 
                    keyword="에어프라이어" 
                    title="🛒 방송에서 본 그 상품, 여기 다 있네!"
                    hookText="홈쇼핑 매진 임박 방송 놓치셨나요? 베스트셀러 가전부터 주방 필수템까지 지금 바로 특가로 만나보세요."
                />

                <footer className="mt-28 text-center w-full">
                    <p className="text-neutral-800 text-[11px] font-bold tracking-[0.8em] uppercase opacity-40">
                        All-in-One Home Shopping Portal
                    </p>
                </footer>
            </div>
        </div>
    );
}
