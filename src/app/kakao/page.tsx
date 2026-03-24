import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '카카오톡 및 카카오 공식 앱 다운로드 | 안드로이드 & 아이폰 바로가기',
    description: '카카오톡, 카카오뱅크, 카카오페이, 카카오스토리 등 카카오 공식 애플리케이션의 안드로이드 및 아이폰 앱 스토어 다운로드 바로가기 링크를 제공합니다.',
};

export default function KakaoPage() {
    const kakaoApps = [
        {
            name: '카카오톡 (KakaoTalk)',
            desc: '언제 어디서나 간편하게 무료로 즐기는 커뮤니케이션 서비스',
            icon: '💬',
            links: {
                android: 'https://play.google.com/store/apps/details?id=com.kakao.talk&hl=ko',
                ios: 'https://apps.apple.com/kr/app/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1-kakaotalk/id362057947'
            }
        },
        {
            name: '카카오뱅크 (KakaoBank)',
            desc: '일상에서 더 쉽고 더 자주 이용하는 나만의 은행',
            icon: '🏦',
            links: {
                android: 'https://play.google.com/store/apps/details?id=com.kakaobank.channel&hl=ko',
                ios: 'https://apps.apple.com/kr/app/%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%B1%85%ED%81%AC/id1258016944'
            }
        },
        {
            name: '카카오페이 (KakaoPay)',
            desc: '지갑 없는 일상을 완성하는 마음 편한 금융 플랫폼',
            icon: '💳',
            links: {
                android: 'https://play.google.com/store/apps/details?id=com.kakaopay.app&hl=ko',
                ios: 'https://apps.apple.com/kr/app/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%8E%98%EC%9D%B4/id1464496236'
            }
        },
        {
            name: '카카오스토리 (KakaoStory)',
            desc: '가장 소중한 소식을 나누는 우리들만의 스토리 서비스',
            icon: '📖',
            links: {
                android: 'https://play.google.com/store/apps/details?id=com.kakao.story&hl=ko',
                ios: 'https://apps.apple.com/kr/app/%EC%B9%B4%EC%B9%B4%EC%98%A4%EC%8A%A4%ED%86%A0%EB%A6%AC/id486244601'
            }
        }
    ];

    return (
        <div 
            className="min-h-screen bg-[#FEE500]/5 text-[#191919] py-16 px-4 sm:px-6 flex flex-col items-center selection:bg-[#FEE500]"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            {/* Header Section */}
            <div className="w-full max-w-5xl text-center mb-14">
                <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-[#FEE500] blur-2xl opacity-40 rounded-full scale-110"></div>
                    <div className="relative inline-flex items-center justify-center p-5 bg-[#FEE500] rounded-3xl shadow-sm border border-[#FEE500]/30 drop-shadow-sm transform hover:rotate-3 transition-transform duration-500">
                        <span className="text-5xl">💬</span>
                    </div>
                </div>
                <h1 className="text-4xl sm:text-5xl font-black text-[#191919] tracking-tight mb-5 leading-tight">
                    카카오 <span className="underline decoration-wavy decoration-[#FEE500] underline-offset-8">공식 앱</span> 다운로드
                </h1>
                <p className="text-[#3c3c3c] font-semibold text-base sm:text-lg max-w-2xl mx-auto break-keep leading-relaxed">
                    대한민국 1등 메신저 카카오톡부터 은행, 결제, SNS까지 <br className="hidden sm:block"/>
                    카카오의 모든 공식 애플리케이션을 한곳에서 쉽고 빠르게 내려받으세요.
                </p>
            </div>

            {/* Content Grids Container */}
            <div className="w-full max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
                    {kakaoApps.map((app, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-[2.5rem] p-8 sm:p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group overflow-hidden relative"
                        >
                            {/* App Icon (Background decorative) */}
                            <div className="absolute -right-6 -top-6 text-[120px] opacity-[0.03] select-none pointer-events-none group-hover:scale-125 transition-transform duration-700">
                                {app.icon}
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-[#FEE500] rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        {app.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-[#191919] group-hover:text-amber-800 transition-colors">
                                        {app.name}
                                    </h3>
                                </div>
                                <p className="text-[#555] mb-8 font-medium leading-relaxed max-w-md break-keep">
                                    {app.desc}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                                {/* Android Button */}
                                <Link
                                    href={app.links.android}
                                    className="flex-1 inline-flex items-center justify-center p-5 bg-[#3c3c3c] hover:bg-[#191919] rounded-2xl text-white font-bold transition-all duration-300 group/btn"
                                >
                                    <svg className="w-6 h-6 mr-3 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.523 15.3414c-.5511 0-.9981-.447-.9981-.9981s.447-.9981.9981-.9981.9981.447.9981.9981-.447.9981-.9981.9981m-11.046 0c-.5511 0-.9981-.447-.9981-.9981s.447-.9981.9981-.9981.9981.447.9981.9981-.447.9981-.9981.9981m11.4045-6.0247l1.9962-3.459c.0734-.1272.0294-.2889-.0978-.3623-.1272-.0734-.2889-.0294-.3623.0978l-2.0198 3.5002C14.1953 8.3562 13.1195 8.1171 12 8.1171s-2.1953.2391-3.4001.5763L6.5801 5.1931c-.0734-.1272-.2351-.1712-.3623-.0978-.1272.0734-.1712.2351-.0978.3623l1.9962 3.459C5.4191 10.2312 3.535 12.4439 3.535 15.0231h16.93c0-2.5792-1.8841-4.7919-4.5795-6.0881" />
                                    </svg>
                                    Android 전용
                                    <svg className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14m-7-7 7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </Link>
                                
                                {/* iOS Button */}
                                <Link
                                    href={app.links.ios}
                                    className="flex-1 inline-flex items-center justify-center p-5 bg-white border-2 border-[#eee] hover:border-[#FEE500] hover:bg-[#FEE500]/10 rounded-2xl text-[#191919] font-bold transition-all duration-300 group/btn"
                                >
                                    <svg className="w-6 h-6 mr-3 text-[#191919]" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.05 20.28c-.98.95-2.05 1.72-3.19 2.31-1.14.58-2.31.87-3.5.87-1.19 0-2.37-.29-3.53-.87-1.16-.58-2.22-1.35-3.18-2.31-1.92-1.92-2.88-4.25-2.88-6.99 0-2.73.96-5.06 2.88-6.99.96-.96 2.02-1.73 3.18-2.31C5.99 3.41 7.17 3.12 8.36 3.12c1.19 0 2.35.29 3.49.88 1.14.59 2.22 1.36 3.19 2.31 1.93 1.93 2.89 4.26 2.89 6.99 0 2.74-.96 5.07-2.88 6.98zM12 1.39c0-.38.13-.71.39-.98.26-.27.59-.41.98-.41.39 0 .72.14.99.41s.4.6.4.98c0 .39-.13.72-.4.99s-.6.41-.99.41c-.39 0-.72-.14-.98-.41-.26-.27-.39-.6-.39-.99z" />
                                    </svg>
                                    iOS(아이폰) 전용
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Information Section */}
                <div className="bg-[#191919] rounded-[2.5rem] p-8 sm:p-12 text-white overflow-hidden relative">
                    <div className="absolute right-[-5%] bottom-[-10%] opacity-10 rotate-12 scale-150 pointer-events-none select-none">
                        <span className="text-[200px]">💬</span>
                    </div>
                    
                    <div className="relative z-10">
                        <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 bg-[#FEE500] text-[#191919] rounded-lg flex items-center justify-center text-lg">!</span>
                            이용안내 및 주의사항
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <strong className="text-[#FEE500] block mb-3 text-lg">보안 주의</strong>
                                상기 링크는 구글 플레이스토어 및 애플 앱스토어의 공식 경로입니다. 출처가 불분명한 APK 파일 등을 통한 설치는 보안에 위험할 수 있습니다.
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <strong className="text-[#FEE500] block mb-3 text-lg">최신버전 유지</strong>
                                안정적인 서비스 이용과 보안을 위해 주기적으로 앱을 최신 버전으로 업데이트하는 것을 권장합니다.
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <strong className="text-[#FEE500] block mb-3 text-lg">계정 보호</strong>
                                카카오 계정은 본인 외에 타인과 공유하지 마시고, 2단계 인증을 설정하여 개인정보를 안전하게 보호하세요.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-20 text-slate-400 text-sm font-medium">
                © 2026 Kakao Apps Download Hub.
            </footer>
        </div>
    );
}
