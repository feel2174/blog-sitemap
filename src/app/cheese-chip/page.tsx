import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '촉촉한 황치즈칩 파는곳 & 실시간 재고 확인 (메가마트, 올리브영, 컬리 등)',
    description: '전국 품귀 현상의 주인공 "촉촉한 황치즈칩" 판매처 총정리! 메가마트, 올리브영, 컬리, 쿠팡, 이마트 에브리데이 직링크와 트위터 실시간 재고 정보를 바로 확인하세요.',
    keywords: ['촉촉한 황치즈칩', '황치즈칩 파는곳', '황치즈칩 재고', '황치즈칩 구매', '메가마트 황치즈칩', '올리브영 황치즈칩', '컬리 황치즈칩', '이마트 에브리데이 황치즈칩'],
};

export default function HwangCheeseChipPage() {
    const shoppingSites = [
        { 
            name: '메가마트 (Mega Mart)', 
            url: 'https://www.megamart.com/product/14221408', 
            desc: '현재 가장 확실한 온라인 구매처 중 하나',
            color: 'bg-[#005596]', // MegaMart Blue
            icon: '🛒'
        },
        { 
            name: '마켓컬리 (Kurly)', 
            url: 'https://www.kurly.com/goods/1002010928', 
            desc: '입고 시 가장 빠르게 품절되는 샛별배송',
            color: 'bg-[#5f0080]', // Kurly Purple
            icon: '💜'
        },
        { 
            name: '올리브영 (Olive Young)', 
            url: 'https://m.oliveyoung.co.kr/m/common/snsBridge.do?sndType=goods&sndVal=A000000250724', 
            desc: '오프라인 매장 재고와 연동되는 온라인몰',
            color: 'bg-[#9fcd3b]', // Olive Young Green
            icon: '🔋'
        },
        { 
            name: '이마트 에브리데이 (e-mile)', 
            url: 'https://emile.emarteveryday.co.kr/product/ProductView?strCode=4006&skuCode=8801117382308', 
            desc: '집 근처 에브리데이 매장 픽업/배달 확인',
            color: 'bg-[#ffcc00]', // Emart Yellow
            textColor: 'text-slate-900',
            icon: '🏬'
        },
        { 
            name: '쿠팡 (Coupang)', 
            url: 'https://www.coupang.com/np/search?component=&q=%EC%B4%89%EC%B4%89%ED%95%9C+%ED%99%A9%EC%B9%98%EC%A6%88%EC%B9%A9&traceId=mn7am18q&channel=user', 
            desc: '로켓배송 재고 수시 확인 필수',
            color: 'bg-[#ea1d2c]', // Coupang Red
            icon: '🚀'
        },
        { 
            name: '네이버 쇼핑 (Naver Shopping)', 
            url: 'https://search.shopping.naver.com/search/all?query=%EC%B4%89%EC%B4%89%ED%95%9C%ED%99%A9%EC%B9%98%EC%A6%88%EC%B9%A9&frm=NVSCPRO&nl-ts-pid=jNRtdlqps2yMtMWAag0-328179', 
            desc: '최저가 및 각종 오픈마켓 재고 통합 검색',
            color: 'bg-[#03c75a]', // Naver Green
            icon: '🛍️'
        },
        { 
            name: 'X (Twitter) 실시간 제보', 
            url: 'https://x.com/search?q=%EC%B4%89%EC%B4%89%ED%95%9C%20%ED%99%A9%EC%B9%98%EC%A6%88%EC%B9%A9&src=typed_query', 
            desc: '편의점/마트 오프라인 재고 목격담 실시간 확인',
            color: 'bg-black', // X Black
            icon: '🐦'
        }
    ];

    return (
        <div 
            className="min-h-screen bg-[#FFFBEB] text-slate-800 py-12 px-4 sm:px-6 flex flex-col items-center selection:bg-amber-200"
            style={{ 
                fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f59e0b\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
            }}
        >
            {/* Header Section */}
            <div className="w-full max-w-4xl text-center mb-16 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 animate-bounce opacity-20 text-[100px] pointer-events-none">
                    🧀
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-bold mb-6 border border-amber-200 shadow-sm animate-pulse">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    실시간 품귀 대란 상품
                </div>

                <h1 className="text-4xl sm:text-6xl font-black text-amber-900 tracking-tight mb-6 leading-tight drop-shadow-sm">
                    촉촉한 <span className="text-amber-500 underline decoration-amber-300 underline-offset-8">황치즈칩</span> 파는곳
                </h1>
                
                <p className="text-amber-800/80 font-semibold text-lg sm:text-xl max-w-2xl mx-auto break-keep leading-relaxed mb-8">
                    지금 가장 핫한 "촉촉한 황치즈칩", <br className="hidden sm:block"/>
                    찾아 헤매지 말고 아래 온라인 판매처들을 바로 확인하세요!
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                    <span className="px-4 py-2 bg-white rounded-2xl shadow-sm border border-amber-100 text-amber-900 font-bold text-sm">#품귀현상</span>
                    <span className="px-4 py-2 bg-white rounded-2xl shadow-sm border border-amber-100 text-amber-900 font-bold text-sm">#황치즈과자</span>
                    <span className="px-4 py-2 bg-white rounded-2xl shadow-sm border border-amber-100 text-amber-900 font-bold text-sm">#재고확인</span>
                </div>
            </div>

            {/* Link Buttons Grid */}
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-16">
                {shoppingSites.map((site, index) => (
                    <Link 
                        key={index}
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative overflow-hidden rounded-[2rem] p-6 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border-2 border-transparent hover:border-amber-400 bg-white`}
                    >
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`w-14 h-14 ${site.color} rounded-2xl flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                                    {site.icon}
                                </div>
                                <div className="p-2 rounded-full bg-amber-50 group-hover:bg-amber-100 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                </div>
                            </div>
                            
                            <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                                {site.name}
                            </h3>
                            <p className="text-slate-500 font-medium text-sm leading-snug">
                                {site.desc}
                            </p>
                            
                            <div className="mt-6 flex items-center text-amber-500 font-bold text-sm">
                                <span>재고 확인하기</span>
                                <div className="ml-2 w-0 group-hover:w-6 h-0.5 bg-amber-500 transition-all duration-300"></div>
                            </div>
                        </div>

                        {/* Background Decorative Element */}
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-amber-50 rounded-full opacity-20 transition-transform duration-500 group-hover:scale-150"></div>
                    </Link>
                ))}
            </div>

            {/* Tip Section */}
            <div className="w-full max-w-4xl bg-white/80 backdrop-blur-md border-2 border-amber-200 rounded-[2.5rem] p-8 sm:p-10 shadow-xl relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 text-[120px] opacity-10 pointer-events-none -rotate-12 translate-x-4 translate-y-4">
                    🧀
                </div>
                
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-amber-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-amber-900">구매 성공 확률 높이는 꿀팁</h2>
                    </div>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 font-medium">
                        <li className="flex items-start gap-3 bg-amber-50/50 p-4 rounded-2xl border border-amber-100/50">
                            <span className="text-amber-500 mt-1">✓</span>
                            <span><strong>올리브영</strong> 어플에서 \'오늘드림\' 재고를 수시로 확인하세요.</span>
                        </li>
                        <li className="flex items-start gap-3 bg-amber-50/50 p-4 rounded-2xl border border-amber-100/50">
                            <span className="text-amber-500 mt-1">✓</span>
                            <span><strong>마켓컬리</strong>는 자정 혹은 새벽 7시 전후로 재고가 업데이트 됩니다.</span>
                        </li>
                        <li className="flex items-start gap-3 bg-amber-50/50 p-4 rounded-2xl border border-amber-100/50">
                            <span className="text-amber-500 mt-1">✓</span>
                            <span><strong>트위터(X)</strong> 검색 창에서 \'촉촉한 황치즈칩\'을 최신순으로 정렬하여 실시간 제보를 확인하세요.</span>
                        </li>
                        <li className="flex items-start gap-3 bg-amber-50/50 p-4 rounded-2xl border border-amber-100/50">
                            <span className="text-amber-500 mt-1">✓</span>
                            <span><strong>메가마트</strong> 사이트는 비교적 재고가 오래 남아있는 경우가 많으니 우선 체크!</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Text */}
            <p className="mt-12 text-amber-900/40 text-sm font-medium">
                © 2026 Chokchok Hwang Cheese Chip Finder. All rights reserved.
            </p>
        </div>
    );
}
