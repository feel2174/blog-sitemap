import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '아웃백 스테이크하우스 할인 꿀팁 총정리 | 상품권, 할인카드, 제휴사 안내',
    description: '아웃백 스테이크하우스에서 똑똑하게 할인받는 방법! 저렴한 상품권 구매부터 카드사별 할인 혜택, 제휴 카드 목록까지 모든 정보를 한눈에 확인하세요.',
};

export default function OutbackDiscountPage() {
    return (
        <div 
            className="min-h-screen bg-[#1a0f0a] text-[#f4e4bc] flex flex-col items-center px-4 py-16 relative overflow-hidden font-sans"
            style={{ 
                fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                background: 'linear-gradient(135deg, #2d1606 0%, #1a0f0a 100%)'
            }}
        >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div 
                    className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#8b0000] blur-[150px]"
                />
                <div 
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#d4af37] blur-[150px]"
                />
                {/* Subtle Grill Pattern or Texture */}
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-2xl">
                
                {/* Header Section */}
                <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-1000">
                    <div className="inline-block px-4 py-1 rounded-full bg-[#d4af37]/20 backdrop-blur-md border border-[#d4af37]/30 text-[#d4af37] text-sm font-bold tracking-[0.2em] mb-6">
                        OUTBACK STEAKHOUSE GUIDE
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter leading-tight text-white drop-shadow-2xl">
                        똑똑한 <span className="text-[#a51c24]">아웃백</span> <br />
                        <span className="text-[#d4af37]">할인 꿀팁</span> 모음
                    </h1>
                    
                    <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-10 rounded-full"></div>
                    
                    <p className="text-[#f4e4bc]/80 text-lg md:text-xl font-medium max-w-lg mx-auto leading-relaxed">
                        특별한 날, 소중한 사람과 함께하는 아웃백! <br className="hidden md:block" />
                        최대 혜택으로 더 즐겁고 실속 있게 즐기세요.
                    </p>
                </div>

                {/* Main Action Section */}
                <div className="space-y-6">
                    
                    <h3 className="text-[#d4af37] text-xs font-black tracking-[0.3em] uppercase text-center mb-8">MAXIMIZE YOUR BENEFITS</h3>

                    {/* Link 1: 상품권 구매 */}
                    <div className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37] to-[#8b0000] rounded-[2rem] blur opacity-10 group-hover:opacity-40 transition duration-700"></div>
                        <Link 
                            href="https://search.shopping.naver.com/ns/search?query=%EC%95%84%EC%9B%83%EB%B0%B1%20%EC%83%81%ED%92%88%EA%B6%8C"
                            className="relative flex items-center justify-between px-8 py-8 rounded-[1.8rem] bg-[#2d1b11] border border-[#d4af37]/20 hover:border-[#d4af37]/50 shadow-2xl transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-2 opacity-5 scale-150 transform rotate-12">
                                🎫
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-[#d4af37] flex items-center justify-center text-[#1a0f0a] shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <p className="text-[#d4af37] text-xs font-bold mb-1 tracking-widest">SAVE UP TO 10%</p>
                                    <p className="text-white font-extrabold text-2xl md:text-3xl tracking-tight">아웃백 상품권 최저가 구매</p>
                                </div>
                            </div>
                            <div className="text-[#d4af37]/40 group-hover:text-[#d4af37] group-hover:translate-x-2 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </Link>
                    </div>

                    {/* Link 2: 할인카드 검색 */}
                    <div className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37] to-[#a51c24] rounded-[2rem] blur opacity-10 group-hover:opacity-40 transition duration-700"></div>
                        <Link 
                            href="https://card-search.naver.com/list?companyCode=&brandNames=&benefitCategoryIds=14&subBenefitCategoryIds=41&affiliateIds=587&sortMethod=ri&isRefetch=true&bizType=CPC"
                            className="relative flex items-center justify-between px-8 py-8 rounded-[1.8rem] bg-[#2d1b11] border border-[#d4af37]/20 hover:border-[#d4af37]/50 shadow-2xl transition-all duration-500"
                        >
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-[#a51c24] flex items-center justify-center text-white shadow-[0_0_20px_rgba(165,28,36,0.3)] group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <p className="text-[#a51c24] text-xs font-bold mb-1 tracking-widest">CARD BENEFITS</p>
                                    <p className="text-white font-extrabold text-2xl md:text-3xl tracking-tight">아웃백 인기 할인카드 TOP</p>
                                </div>
                            </div>
                            <div className="text-[#d4af37]/40 group-hover:text-[#d4af37] group-hover:translate-x-2 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </Link>
                    </div>

                    {/* Link 3: 공식 제휴카드사 */}
                    <div className="group relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37] to-[#1a0f0a] rounded-[2rem] blur opacity-5 group-hover:opacity-30 transition duration-700"></div>
                        <Link 
                            href="https://m.outback.co.kr/partner/card.do?menuIdx=118"
                            className="relative flex items-center justify-between px-8 py-8 rounded-[1.8rem] bg-[#21140e] border border-white/5 hover:border-[#d4af37]/30 shadow-2xl transition-all duration-500"
                        >
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#1a0f0a] transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <p className="text-white/40 text-xs font-bold mb-1 tracking-widest">OFFICIAL PARTNERS</p>
                                    <p className="text-white font-extrabold text-2xl md:text-3xl tracking-tight">공식 제휴카드사 전체보기</p>
                                </div>
                            </div>
                            <div className="text-[#d4af37]/20 group-hover:text-[#d4af37] group-hover:translate-x-2 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Tips Card */}
                <div className="mt-16 bg-[#2d1b11]/50 backdrop-blur-md rounded-[2.5rem] p-10 border border-[#d4af37]/10 shadow-inner">
                    <h4 className="text-[#d4af37] font-black text-xl mb-6 flex items-center gap-3 italic">
                        <span className="text-2xl">🔥</span> ADDITIONAL DISCOUNT TIPS
                    </h4>
                    <ul className="space-y-4 text-[#f4e4bc]/70 text-sm md:text-base leading-relaxed">
                        <li className="flex gap-3">
                            <span className="text-[#d4af37] font-bold">01.</span>
                            <span>통신사(SKT/KT) 멤버십 중복 혜택을 반드시 확인하세요 (최대 15% 할인).</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-[#d4af37] font-bold">02.</span>
                            <span>아웃백 부메랑 멤버십 가입 시 1만원 할인 쿠폰이 제공됩니다.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-[#d4af37] font-bold">03.</span>
                            <span>런칭 시간(오후 3시 전)에 방문하면 수프와 에이드가 포함된 런치 세트를 즐길 수 있습니다.</span>
                        </li>
                    </ul>
                </div>

                {/* Brand Experience Footer */}
                <div className="mt-20 text-center">
                    <p className="text-[#f4e4bc]/30 text-xs tracking-[0.3em] uppercase mb-10">Premium Dining Experience</p>
                    <div className="flex justify-center items-center gap-4 text-3xl opacity-20">
                        <span>🥩</span>
                        <div className="w-12 h-[1px] bg-[#d4af37]"></div>
                        <span>🍷</span>
                        <div className="w-12 h-[1px] bg-[#d4af37]"></div>
                        <span>🥗</span>
                    </div>
                </div>
            </div>

            {/* Custom Animations Stylings */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slide-in {
                    from { transform: translateY(30px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-in {
                    animation: fade-in 1s ease-out forwards;
                }
                .slide-in-from-top {
                    animation: slide-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}} />
        </div>
    );
}
