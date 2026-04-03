import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '온누리상품권 사용처 조회 및 디지털 앱 다운로드 (Android/iOS)',
    description: '10% 할인 혜택! 우리 동네 온누리상품권 가맹점과 사용처를 쉽게 찾아보고, 결제가 편리한 디지털 온누리상품권(충전식 카드형/모바일) 공식 앱을 스마트폰에 바로 설치해보세요.',
    keywords: ['온누리상품권', '온누리상품권 사용처', '모바일 온누리상품권', '디지털 온누리상품권', '온누리상품권 가맹점', '온누리상품권 앱'],
};

export default function OnnuriGiftPage() {
    const onnuriLinks = [
        { 
            name: '가맹점 및 사용처 찾기', 
            url: 'https://www.onnuri.gift/place', 
            desc: '내 주변 온누리상품권 사용 가능 매장 실시간 조회',
            tag: '공식 가이드',
            color: 'bg-gradient-to-br from-[#FF8C00] to-[#E65100]',
            hoverBorder: 'hover:border-[#FF8C00]',
            icon: '🏪'
        },
        { 
            name: 'Android 앱 다운로드', 
            url: 'https://play.google.com/store/apps/details?id=com.komsco.kpay&hl=ko', 
            desc: '갤럭시 스마트폰용 디지털 온누리 앱 설치 (Google Play)',
            tag: '갤럭시 유저',
            color: 'bg-gradient-to-br from-[#3DDC84] to-[#25A75C]',
            hoverBorder: 'hover:border-[#3DDC84]',
            icon: '📱'
        },
        { 
            name: 'iOS 앱 다운로드', 
            url: 'https://apps.apple.com/kr/app/%EB%94%94%EC%A7%80%ED%84%B8%EC%98%A8%EB%88%84%EB%A6%AC/id6738372450', 
            desc: '아이폰용 디지털 온누리 공식 앱 설치 (App Store)',
            tag: '아이폰 유저',
            color: 'bg-gradient-to-br from-[#5AC8FA] to-[#007AFF]',
            hoverBorder: 'hover:border-[#007AFF]',
            icon: '🍏'
        }
    ];

    return (
        <div 
            className="min-h-screen bg-orange-50/30 text-slate-800 py-12 px-4 sm:px-6 flex flex-col items-center selection:bg-orange-200 font-sans relative overflow-hidden"
            style={{ 
                fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
            }}
        >
            {/* Background Decorations */}
            <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-orange-200/40 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-[-150px] left-[-100px] w-[500px] h-[500px] bg-yellow-200/40 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Header Section */}
            <div className="w-full max-w-4xl text-center mb-16 relative z-10 pt-8 sm:pt-12">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-bold mb-6 shadow-sm border border-orange-200">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                    </span>
                    10% 할인, 알뜰 소비의 시작!
                </div>

                <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                        온누리상품권
                    </span> <br className="hidden sm:block"/>
                    사용처 및 공식 앱 다운로드
                </h1>
                
                <p className="text-slate-600 font-medium text-lg sm:text-lg max-w-2xl mx-auto break-keep leading-relaxed mb-8">
                    전통시장, 상점가, 각종 골목상권에서 현금처럼! <br className="hidden sm:block"/>
                    어디서 쓸 수 있는지 확인하고, 더 편리해진 디지털 온누리 앱을 설치하세요.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                    <span className="px-4 py-2 bg-white rounded-2xl border border-slate-200 text-slate-600 font-semibold text-sm shadow-[0_2px_10px_rgba(0,0,0,0.03)]">#전통시장혜택</span>
                    <span className="px-4 py-2 bg-white rounded-2xl border border-slate-200 text-slate-600 font-semibold text-sm shadow-[0_2px_10px_rgba(0,0,0,0.03)]">#충전식카드형</span>
                    <span className="px-4 py-2 bg-white rounded-2xl border border-slate-200 text-slate-600 font-semibold text-sm shadow-[0_2px_10px_rgba(0,0,0,0.03)]">#가맹점조회</span>
                </div>
            </div>

            {/* Links Grid */}
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-20 z-10 relative">
                {onnuriLinks.map((link, index) => (
                    <Link 
                        key={index}
                        href={link.url}
                        className={`group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent ${link.hoverBorder} flex flex-col justify-between items-center text-center h-full cursor-pointer`}
                    >
                        {/* Top Indicator */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-orange-300 transition-colors"></div>

                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-slate-100">
                                {link.icon}
                            </div>
                            
                            <h3 className="text-xl font-black text-slate-800 mb-3 group-hover:text-orange-600 transition-colors break-keep">
                                {link.name}
                            </h3>
                            <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8 break-keep">
                                {link.desc}
                            </p>
                        </div>
                        
                        <div className={`mt-auto w-full flex items-center justify-center text-white rounded-2xl py-3.5 px-6 font-bold text-[15px] ${link.color} shadow-lg shadow-black/5 group-hover:shadow-black/20 transition-all duration-300`}>
                            {link.tag === '공식 가이드' ? '사용처 확인하기' : '앱 설치하기'}
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Smart Tip Section */}
            <div className="w-full max-w-4xl bg-gradient-to-br from-orange-500 to-red-500 border-0 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl relative overflow-hidden z-10 text-white flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Deco Elements */}
                <div className="absolute -right-8 -bottom-8 text-[150px] opacity-[0.08] pointer-events-none rotate-12">
                    🛍️
                </div>
                
                <div className="w-16 h-16 shrink-0 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-white/30 hidden md:flex">
                    💡
                </div>

                <div className="relative z-10 w-full">
                    <div className="flex items-center gap-3 mb-4 md:hidden justify-center">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-2xl">💡</div>
                        <h2 className="text-2xl font-black">이것도 알고 계셨나요?</h2>
                    </div>
                    
                    <h2 className="text-2xl font-black mb-4 hidden md:block">이것도 알고 계셨나요?</h2>
                    <p className="text-orange-50/90 mb-6 font-medium text-[15px] leading-relaxed break-keep md:text-left text-center">
                        지류(종이) 상품권보다 디지털(모바일/충전식 카드형) 상품권 혜택이 좋습니다.
                        전용 앱을 다운받고 본인의 소비 패턴에 맞게 편리하게 활용해보세요!
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                            <h3 className="font-bold text-lg mb-2 text-yellow-200">10% 즉시 할인 혜택</h3>
                            <p className="text-sm font-medium text-white/80">매월 일정 금액까지 충전 시 10%의 할인이 기본으로 적용됩니다. (예: 10만원 충전시 9만원 결제)</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                            <h3 className="font-bold text-lg mb-2 text-yellow-200">신용/체크카드 등록 가능</h3>
                            <p className="text-sm font-medium text-white/80">앱에 평소 쓰는 카드를 등록해두면 별도 앱 실행 없이 카드로 긁어도 자동 결제/할인됩니다.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
