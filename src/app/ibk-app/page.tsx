import Link from 'next/link';

export const metadata = {
    title: 'IBK기업은행 i-ONE Bank 앱 설치 및 다운로드 바로가기',
    description: 'IBK기업은행의 스마트뱅킹 i-ONE Bank 앱을 설치하고 편리한 금융 서비스를 이용하세요. 안드로이드 및 iOS 앱스토어 다운로드 링크를 제공합니다.',
};

export default function IBKAppLandingPage() {
    return (
        <div
            className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Premium Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-70 scale-105"
                style={{ backgroundImage: 'url("/ibk-bg.png")' }}
            />

            {/* Background Overlays */}
            <div className="absolute inset-0 bg-white/40 z-[1] backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60 z-[2]" />

            <div className="relative z-10 w-full max-w-md text-center">
                {/* IBK Logo / Header */}
                <div className="mb-12">
                    <div className="inline-block px-4 py-1.5 bg-sky-600/10 border border-sky-600/20 rounded-full mb-6">
                        <span className="text-sky-700 text-xs font-bold tracking-widest uppercase">IBK Smart Banking</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-[#004b90] tracking-tight mb-3">
                        i-ONE <span className="text-slate-800">Bank</span>
                    </h1>
                    <p className="text-slate-600 text-sm md:text-lg font-medium">
                        세상의 모든 뱅킹을 하나로
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4">
                    {/* Official Website Shortcut */}
                    <Link
                        href="https://www.ibk.co.kr/"
                        className="group relative flex items-center justify-between bg-[#004b90] text-white p-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-[#003a70] hover:shadow-[0_10px_30px_rgba(0,75,144,0.3)] hover:-translate-y-1 active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-white/20 p-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                            </div>
                            <span>기업은행 바로가기</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>

                    {/* Android Download */}
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.ibk.android.ionebank&hl=ko"
                        className="group relative flex items-center justify-between bg-white border-2 border-slate-100 text-slate-800 p-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:border-[#004b90] hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-slate-50 p-2 rounded-lg group-hover:bg-sky-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M12 19V5"></path><path d="M5 12l7 7 7-7"></path></svg>
                            </div>
                            <span>안드로이드 앱 설치</span>
                        </div>
                        <div className="bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-400 group-hover:bg-[#004b90] group-hover:text-white transition-colors">
                            Google Play
                        </div>
                    </Link>

                    {/* iOS Download */}
                    <Link
                        href="https://apps.apple.com/kr/app/i-one-bank-%EA%B0%9C%EC%9D%B8%EA%B3%A0%EA%B0%9D%EC%9A%A9/id1460543865"
                        className="group relative flex items-center justify-between bg-white border-2 border-slate-100 text-slate-800 p-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:border-[#004b90] hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-slate-50 p-2 rounded-lg group-hover:bg-sky-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5"></path><path d="M5 12l7 7 7-7"></path></svg>
                            </div>
                            <span>iOS 앱 설치</span>
                        </div>
                        <div className="bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-400 group-hover:bg-[#004b90] group-hover:text-white transition-colors">
                            App Store
                        </div>
                    </Link>
                </div>

                {/* Info Text */}
                <div className="mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/80 shadow-sm text-slate-500 text-sm leading-relaxed">
                    <p className="font-semibold text-slate-700 mb-2">꼭 확인하세요!</p>
                    <p>
                        i-ONE Bank를 통해 계좌조회, 이체, <br />
                        상품가입 등 IBK기업은행의 모든 서비스를 <br />
                        모바일에서 안전하게 이용하실 수 있습니다.
                    </p>
                    <p className="mt-4 text-xs text-slate-400">
                        * 보이스피싱 예방을 위해 공식 스토어에서만 설치하시기 바랍니다.
                    </p>
                </div>

                <div className="mt-12 text-slate-400 text-xs">
                    © Industrial Bank of Korea. All rights reserved.
                </div>
            </div>
        </div>
    );
}
