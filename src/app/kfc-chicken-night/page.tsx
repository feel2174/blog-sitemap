import Link from 'next/link';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoupangAds from '@/components/CoupangAds';

export default function KFCChickenNightPage() {
    return (
        <div className="min-h-screen bg-[#FDFDFD] font-['Pretendard']">
            <Header />
            
            <main className="pb-20">
                {/* Hero Section */}
                <div className="relative bg-[#E4002B] pt-24 pb-48 px-4 overflow-hidden">
                    <div 
                        className="absolute inset-0 z-0 opacity-30 bg-cover bg-center"
                        style={{ backgroundImage: 'url("/kfc-chicken-night-bg.png")' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#E4002B]/80 via-[#E4002B]/50 to-[#E4002B] z-[1]"></div>

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <span className="inline-block px-5 py-2 bg-white text-[#E4002B] rounded-full text-sm font-black mb-8 shadow-xl">
                            🍗 NIGHT CHICKEN PARTY
                        </span>
                        <h1 className="text-4xl sm:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight break-keep">
                            매일 밤 9시~10시<br />
                            <span className="text-yellow-400">치킨 1+1 (치킨나이트)</span>
                        </h1>
                        <p className="text-white font-bold text-lg sm:text-2xl max-w-2xl mx-auto break-keep leading-relaxed opacity-90">
                            야식의 끝판왕! KFC 치킨나이트 혜택을 놓치지 마세요.<br className="hidden sm:block" />
                            단 1시간, 1조각 구매 시 1조각 더!
                        </p>
                    </div>
                </div>

                {/* Info Cards Grid */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-24 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        
                        {/* Time Card */}
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-slate-100 flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-red-50 text-[#E4002B] rounded-3xl flex items-center justify-center text-4xl mb-8">⏰</div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">행사 시간</h3>
                            <p className="text-slate-500 font-bold leading-relaxed break-keep">
                                매일 밤 <span className="text-[#E4002B]">21:00 ~ 22:00</span> (1시간)<br />
                                일부 매장은 제외될 수 있습니다.
                            </p>
                        </div>

                        {/* Benefit Card */}
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-slate-100 flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-yellow-50 text-yellow-600 rounded-3xl flex items-center justify-center text-4xl mb-8">✨</div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">혜택 내용</h3>
                            <p className="text-slate-500 font-bold leading-relaxed break-keep">
                                치킨 단품 1조각 구매 시<br />
                                <span className="text-red-600">동일한 치킨 1조각 더 증정!</span>
                            </p>
                        </div>

                        {/* Order Card */}
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-slate-100 flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center text-4xl mb-8">📱</div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">주문 방법</h3>
                            <p className="text-slate-500 font-bold leading-relaxed break-keep">
                                매장 방문, 징거벨 오더,<br />
                                <span className="text-blue-600">KFC 공식 앱 배달</span> 주문 시 가능
                            </p>
                        </div>

                    </div>

                    {/* App Promotion Section */}
                    <div className="bg-slate-900 rounded-[3.5rem] p-10 md:p-20 text-white shadow-3xl mb-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[#E4002B] rounded-full opacity-20 translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
                        
                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                            <div className="flex-1 text-center lg:text-left">
                                <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                                    KFC 앱에서<br />
                                    <span className="text-[#E4002B]">할인 쿠폰</span>을 확인하세요!
                                </h2>
                                <p className="text-slate-400 text-lg mb-12 font-bold break-keep">
                                    KFC 앱을 이용하면 치킨나이트뿐만 아니라 다양한 멤버십 쿠폰과 이벤트 혜택을 가장 먼저 받아보실 수 있습니다.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link 
                                        href="https://play.google.com/store/apps/details?id=kfc_ko.kore.kg.kfc_korea&hl=ko"
                                        target="_blank"
                                        className="bg-white text-slate-900 px-8 py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-slate-100 transition-all shadow-xl"
                                    >
                                        <span className="text-2xl">🤖</span> 안드로이드 다운로드
                                    </Link>
                                    <Link 
                                        href="https://apps.apple.com/kr/app/kfc-korea/id1255799839"
                                        target="_blank"
                                        className="bg-slate-800 text-white px-8 py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-slate-700 transition-all border border-slate-700 shadow-xl"
                                    >
                                        <span className="text-2xl">🍎</span> IOS 앱스토어 다운로드
                                    </Link>
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="w-64 h-64 bg-gradient-to-br from-[#E4002B] to-red-600 rounded-[3rem] p-8 shadow-2xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <span className="text-9xl">🍗</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Official Link & Notice */}
                    <div className="text-center mb-20">
                        <Link 
                            href="https://www.kfckorea.com/promotion/promotionList/detail/949"
                            target="_blank"
                            className="inline-flex items-center gap-2 text-slate-500 font-bold hover:text-[#E4002B] transition-colors mb-8 group"
                        >
                            KFC 공식 프로모션 상세 보기
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                        <div className="max-w-3xl mx-auto p-8 bg-slate-50 rounded-3xl border border-slate-100 text-sm text-slate-400 font-medium leading-relaxed break-keep">
                            * 치킨나이트 행사는 치킨 단품(1조각) 구매 시에만 적용되며, 버켓이나 세트 메뉴는 제외됩니다. <br />
                            * 주문량이 많은 시간대에는 대기 시간이 발생할 수 있으니 KFC 앱의 &apos;징거벨 오더&apos;를 활용해 미리 주문하시는 것을 추천드립니다.
                        </div>
                    </div>

                    {/* Coupang Ads */}
                    <CoupangAds 
                        keyword="치킨 소스" 
                        title="🔥 KFC 치킨을 더 맛있게 즐기는 법"
                        hookText="홈메이드 치킨 소스부터 함께 곁들이기 좋은 시원한 제로 음료까지, 치킨 파티를 완성해줄 추천 상품들입니다."
                    />

                </div>
            </main>

            <Footer />
        </div>
    );
}
