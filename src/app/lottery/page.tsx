import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '동행복권 바로가기 | 로또 6/45, 연금복권 720+, 스피또 당첨 확인',
    description: '동행복권 공식 홈페이지, 모바일 웹, 안드로이드 및 아이폰 앱 다운로드 바로가기. 로또 당첨번호 조회 및 온라인 구매 안내.',
};

export default function LotteryPage() {
    const apps = [
        { 
            name: '동행복권 안드로이드 전용 앱', 
            url: 'https://play.google.com/store/apps/details?id=com.dhlottery.dhapp&hl=ko', 
            platform: 'Android',
            icon: (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M17.523 15.3414c-.5511 0-.9981-.447-.9981-.9981s.447-.9981.9981-.9981.9981.447.9981.9981-.447.9981-.9981.9981m-11.046 0c-.5511 0-.9981-.447-.9981-.9981s.447-.9981.9981-.9981.9981.447.9981.9981-.447.9981-.9981.9981m11.4045-6.0247l1.9962-3.459c.0734-.1272.0294-.2889-.0978-.3623-.1272-.0734-.2889-.0294-.3623.0978l-2.0198 3.5002C14.1953 8.3562 13.1195 8.1171 12 8.1171s-2.1953.2391-3.4001.5763L6.5801 5.1931c-.0734-.1272-.2351-.1712-.3623-.0978-.1272.0734-.1712.2351-.0978.3623l1.9962 3.459C5.4191 10.2312 3.535 12.4439 3.535 15.0231h16.93c0-2.5792-1.8841-4.7919-4.5795-6.0881" />
                </svg>
            )
        },
        { 
            name: '동행복권 iOS 전용 앱 (복똑방)', 
            url: 'https://apps.apple.com/kr/app/%EB%B3%B5%EB%98%A5%EB%B0%A9-%EB%8F%99%ED%96%89%EB%B3%B5%EA%B6%8C-%EA%B3%B5%EC%8B%9D-%EC%95%B1/id1507746247', 
            platform: 'iOS (iPhone)',
            icon: (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05 1.72-3.19 2.31-1.14.58-2.31.87-3.5.87-1.19 0-2.37-.29-3.53-.87-1.16-.58-2.22-1.35-3.18-2.31-1.92-1.92-2.88-4.25-2.88-6.99 0-2.73.96-5.06 2.88-6.99.96-.96 2.02-1.73 3.18-2.31C5.99 3.41 7.17 3.12 8.36 3.12c1.19 0 2.35.29 3.49.88 1.14.59 2.22 1.36 3.19 2.31 1.93 1.93 2.89 4.26 2.89 6.99 0 2.74-.96 5.07-2.88 6.98zM12 1.39c0-.38.13-.71.39-.98.26-.27.59-.41.98-.41.39 0 .72.14.99.41s.4.6.4.98c0 .39-.13.72-.4.99s-.6.41-.99.41c-.39 0-.72-.14-.98-.41-.26-.27-.39-.6-.39-.99z" />
                </svg>
            )
        }
    ];

    return (
        <div 
            className="min-h-screen bg-[#f8f9ff] text-slate-800 py-16 px-4 sm:px-6 flex flex-col items-center selection:bg-purple-200"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            {/* Header Section */}
            <div className="w-full max-w-5xl text-center mb-14">
                <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-yellow-400 blur-2xl opacity-20 rounded-full"></div>
                    <div className="relative inline-flex items-center justify-center p-5 bg-white rounded-[2rem] shadow-sm border border-slate-100 drop-shadow-sm transform hover:rotate-12 transition-transform duration-500">
                        <span className="text-5xl">🎰</span>
                    </div>
                </div>
                <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
                    동행복권 <span className="text-purple-600">공식 바로가기</span>
                </h1>
                <p className="text-slate-500 font-semibold text-base sm:text-lg max-w-2xl mx-auto break-keep leading-relaxed italic">
                    &quot;꿈을 향한 설레임, 행복한 나눔의 시작&quot; <br className="hidden sm:block"/>
                    대한민국 유일 로또6/45, 연금복권720+ 발행처 동행복권 안내입니다.
                </p>
            </div>

            {/* Content Grids Container */}
            <div className="w-full max-w-5xl">
                {/* Main Links Section */}
                <div className="flex items-center gap-3 mb-8">
                    <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-lg">🌐</span>
                        공식 홈페이지 & 웹
                    </h2>
                    <div className="h-px bg-slate-200 flex-1 ml-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {/* PC Web */}
                    <Link
                        href="https://www.dhlottery.co.kr/"
                        className="group bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 text-white relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-4 backdrop-blur-md">Desktop Version</span>
                            <h3 className="text-3xl font-black mb-3">동행복권 PC 웹</h3>
                            <p className="text-purple-100 mb-8 font-medium leading-relaxed max-w-sm">
                                로또 온라인 예치금 구매, 연금복권 예약 구매 및 모든 당첨 결과 조회가 가능합니다.
                            </p>
                            <span className="inline-flex items-center font-bold text-white bg-white/10 px-6 py-3 rounded-2xl group-hover:bg-white group-hover:text-purple-700 transition-all duration-300">
                                공식 홈페이지 방문 
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </span>
                        </div>
                        <div className="absolute right-[-10%] bottom-[-15%] text-[180px] opacity-10 rotate-[-15deg] pointer-events-none transition-transform duration-700 group-hover:scale-125 group-hover:rotate-0">
                            💰
                        </div>
                    </Link>

                    {/* Mobile Web */}
                    <Link
                        href="https://m.dhlottery.co.kr/"
                        className="group bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-500 flex flex-col justify-between"
                    >
                        <div>
                            <span className="inline-block px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-bold mb-4">Mobile Web</span>
                            <h3 className="text-3xl font-black text-slate-900 mb-3 group-hover:text-purple-700 transition-colors">동행복권 모바일</h3>
                            <p className="text-slate-500 mb-8 font-medium leading-relaxed max-w-sm">
                                스마트폰에서 간편하게 당첨번호 확인과 판매점 위치 조회를 할 수 있습니다.
                            </p>
                            <span className="inline-flex items-center font-bold text-slate-700 group-hover:text-purple-600 transition-all duration-300">
                                모바일 사이트 이동 
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-2 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Mobile App Section */}
                <div className="flex items-center gap-3 mb-8">
                    <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <span className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 text-lg">📱</span>
                        공식 모바일 앱 다운로드
                    </h2>
                    <div className="h-px bg-slate-200 flex-1 ml-4" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                    {apps.map((app, index) => (
                        <Link 
                            key={index}
                            href={app.url}
                            className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:bg-slate-50 transition-all duration-300 flex items-center gap-6"
                        >
                            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                {app.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                                    {app.name}
                                </h3>
                                <p className="text-sm text-slate-400 font-medium">
                                    {app.platform} 전용
                                </p>
                            </div>
                            <div className="ml-auto w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Draw Info Table */}
                <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 border border-slate-100 shadow-sm mb-16">
                    <h3 className="text-2xl font-black text-slate-900 mb-8 text-center sm:text-left">🏁 복권별 추첨 시간 안내</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-purple-50/50 p-6 rounded-3xl border border-purple-100/50">
                            <span className="text-purple-600 font-bold mb-1 block">로또 6/45</span>
                            <div className="flex justify-between items-end">
                                <span className="text-2xl font-black text-slate-800">매주 토요일</span>
                                <span className="text-lg font-bold text-purple-700">오후 8:35분경</span>
                            </div>
                            <p className="mt-3 text-sm text-slate-500 font-medium">MBC 생방송 &apos;행복드림 로또 6/45&apos;</p>
                        </div>
                        <div className="bg-indigo-50/50 p-6 rounded-3xl border border-indigo-100/50">
                            <span className="text-indigo-600 font-bold mb-1 block">연금복권 720+</span>
                            <div className="flex justify-between items-end">
                                <span className="text-2xl font-black text-slate-800">매주 목요일</span>
                                <span className="text-lg font-bold text-indigo-700">오후 7:05분경</span>
                            </div>
                            <p className="mt-3 text-sm text-slate-500 font-medium">MBC &apos;생방송 연금복권 720+&apos;</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Information Notice */}
            <div className="w-full max-w-4xl bg-yellow-50/50 border border-yellow-200/60 rounded-[30px] p-8 sm:p-10 flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="text-4xl">💡</div>
                <div className="text-slate-700 text-sm sm:text-base leading-relaxed text-center md:text-left">
                    <strong className="text-slate-900 block mb-3 text-xl font-bold">건전한 복권 문화 캠페인</strong>
                    <ul className="space-y-2 text-slate-600 font-medium">
                        <li>• 복권은 소액으로 건전하게 즐기는 여가 문화입니다.</li>
                        <li>• <strong>만 19세 미만 청소년</strong>은 복권 구매 및 당첨금 수령이 법적으로 금지되어 있습니다.</li>
                        <li>• 복권 과몰입과 집착은 자신과 가족의 불행을 초래할 수 있습니다.</li>
                        <li>• 온라인 구매는 회차별 1인 5,000원으로 제한되며 지정된 결제 수단이 필요합니다.</li>
                    </ul>
                </div>
            </div>
            
            <footer className="mt-20 text-slate-400 text-sm font-medium">
                © 2026 Lotteries Information Hub. Since 2026.
            </footer>
        </div>
    );
}
