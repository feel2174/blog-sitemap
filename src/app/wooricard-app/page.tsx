import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '우리카드 우리WON카드 앱 설치 및 다운로드 바로가기',
    description: '우리카드 우리WON카드 앱을 설치하고 편리하게 카드 서비스를 이용하세요. 안드로이드 구글 플레이스토어 및 iOS 앱스토어 다운로드 링크를 제공합니다.',
};

export default function WooriCardAppLandingPage() {
    return (
        <div
            className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Premium Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-70 scale-105"
                style={{ backgroundImage: 'url("/wooricard-bg.png")' }}
            />

            {/* Background Overlays for readability */}
            <div className="absolute inset-0 bg-white/40 z-[1] backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60 z-[2]" />

            <div className="relative z-10 w-full max-w-md text-center">
                {/* Woori Card Logo / Header */}
                <div className="mb-12">
                    <div className="inline-block px-4 py-1.5 bg-blue-600/10 border border-blue-600/20 rounded-full mb-6">
                        <span className="text-blue-700 text-xs font-bold tracking-widest uppercase">Official App Download</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-[#0067AC] tracking-tight mb-3">
                        우리카드 <span className="text-slate-800">WON</span>
                    </h1>
                    <p className="text-slate-600 text-sm md:text-lg font-medium">
                        더 스마트한 카드 생활의 시작
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4">
                    {/* Official Website Shortcut */}
                    <Link
                        href="https://www.wooricard.com/"
                        className="group relative flex items-center justify-between bg-[#0067AC] text-white p-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-[#005a96] hover:shadow-[0_10px_30px_rgba(0,103,172,0.3)] hover:-translate-y-1 active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-white/20 p-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                            </div>
                            <span>우리카드 바로가기</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>

                    {/* Android Download */}
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.wooricard.smartapp&hl=ko"
                        className="group relative flex items-center justify-between bg-white border-2 border-slate-100 text-slate-800 p-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:border-[#0067AC] hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-slate-50 p-2 rounded-lg group-hover:bg-blue-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M12 19V5"></path><path d="M5 12l7 7 7-7"></path></svg>
                            </div>
                            <span>안드로이드 앱 설치</span>
                        </div>
                        <div className="bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-400 group-hover:bg-[#0067AC] group-hover:text-white transition-colors">
                            Google Play
                        </div>
                    </Link>

                    {/* iOS Download */}
                    <Link
                        href="https://apps.apple.com/kr/app/%EC%9A%B0%EB%A6%AC%EC%B9%B4%EB%93%9C-%EC%9A%B0%EB%A6%ACwon%EC%B9%B4%EB%93%9C/id1499598869"
                        className="group relative flex items-center justify-between bg-white border-2 border-slate-100 text-slate-800 p-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:border-[#0067AC] hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-slate-50 p-2 rounded-lg group-hover:bg-blue-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5"></path><path d="M5 12l7 7 7-7"></path></svg>
                            </div>
                            <span>iOS 앱 설치</span>
                        </div>
                        <div className="bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-400 group-hover:bg-[#0067AC] group-hover:text-white transition-colors">
                            App Store
                        </div>
                    </Link>
                </div>

                {/* Info Text */}
                <div className="mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/80 shadow-sm text-slate-500 text-sm leading-relaxed">
                    <p className="font-semibold text-slate-700 mb-2">꼭 확인하세요!</p>
                    <p>
                        우리카드 WON 앱을 통해 카드발급, <br />
                        금융서비스, 혜택 안내 등 모든 서비스를 <br />
                        편리하게 이용하실 수 있습니다.
                    </p>
                    <p className="mt-4 text-xs text-slate-400">
                        * 네트워크 환경에 따라 데이터 요금이 발생할 수 있습니다.
                    </p>
                </div>

                <div className="mt-12 text-slate-400 text-xs text-center w-full">
                    © WOORI CARD. All rights reserved.
                </div>

                <CoupangAds 
                    keyword="카드지갑" 
                    title="💳 카드 생활의 품격"
                    hookText="우리카드 WON 앱으로 스마트하게 관리하고, 세련된 지갑으로 스타일까지 완성하세요. 슬림한 카드 홀더부터 명품 지갑까지 큐레이션했습니다."
                />
            </div>
        </div>
    );
}
