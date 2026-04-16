import Link from 'next/link';

export const metadata = {
    title: '다올디지털뱅크 Fi(파이) 앱 설치 및 고객센터 바로가기',
    description: '다올저축은행의 새로운 이름, 다올디지털뱅크 Fi(파이) 앱을 설치하고 편리한 금융 서비스를 이용하세요. 안드로이드, iOS 다운로드 및 고객센터 링크를 제공합니다.',
};

export default function DaolAppLandingPage() {
    return (
        <div
            className="min-h-screen bg-[#0A0E14] text-white flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Premium Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-40 scale-105"
                style={{ backgroundImage: 'url("/daol-bg.png")' }}
            />

            {/* Background Overlays */}
            <div className="absolute inset-0 bg-black/60 z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14] via-transparent to-[#0A0E14] z-[2]" />

            <div className="relative z-10 w-full max-w-md text-center">
                {/* Daol Logo / Header */}
                <div className="mb-12">
                    <div className="inline-block px-4 py-1.5 bg-[#C6FF00]/10 border border-[#C6FF00]/20 rounded-full mb-6">
                        <span className="text-[#C6FF00] text-xs font-bold tracking-widest uppercase">Digital Savings Bank</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
                        <span className="text-white">다올디지털뱅크</span> <span className="text-[#C6FF00]">Fi</span>
                    </h1>
                    <p className="text-zinc-400 text-sm md:text-lg font-medium">
                        금융을 더 쉽게, 생활을 더 즐겁게
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4">
                    {/* Customer Center Shortcut */}
                    <Link
                        href="https://www.daolsb.com/cstmrSupport/useGdcc/arsGdcc.do"
                        className="group relative flex items-center justify-between bg-[#C6FF00] text-black p-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(198,255,0,0.3)] active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-black/10 p-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            </div>
                            <span>고객센터 바로가기</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>

                    {/* Android Download */}
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.eugene.eugenebank&hl=ko"
                        className="group relative flex items-center justify-between bg-zinc-900 border border-zinc-800 text-white p-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-700 active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-zinc-800 p-2 rounded-lg border border-zinc-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M12 19V5"></path><path d="M5 12l7 7 7-7"></path></svg>
                            </div>
                            <span>안드로이드 앱 설치</span>
                        </div>
                        <div className="text-[10px] bg-zinc-950 px-2 py-1 rounded-md text-zinc-500 group-hover:text-white transition-colors">
                            GOOGLE PLAY
                        </div>
                    </Link>

                    {/* iOS Download */}
                    <Link
                        href="https://apps.apple.com/kr/app/%EB%8B%A4%EC%98%AC%EB%94%94%EC%A7%80%ED%84%B8%EB%B1%85%ED%81%AC-fi-%ED%8C%8C%EC%9D%B4/id1440474118"
                        className="group relative flex items-center justify-between bg-zinc-900 border border-zinc-800 text-white p-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-700 active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-zinc-800 p-2 rounded-lg border border-zinc-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5"></path><path d="M5 12l7 7 7-7"></path></svg>
                            </div>
                            <span>iOS 앱 설치</span>
                        </div>
                        <div className="text-[10px] bg-zinc-950 px-2 py-1 rounded-md text-zinc-500 group-hover:text-white transition-colors">
                            APP STORE
                        </div>
                    </Link>
                </div>

                {/* Info Text */}
                <div className="mt-12 p-6 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50 text-zinc-500 text-sm leading-relaxed text-left">
                    <p className="font-semibold text-zinc-300 mb-2">📢 꼭 확인하세요!</p>
                    <p>
                        다올디지털뱅크 Fi는 더욱 간편하고 안전한 <br />
                        금융 거래를 위해 다양한 보안 서비스를 <br />
                        제공하고 있습니다.
                    </p>
                    <p className="mt-4 text-xs text-zinc-600 italic">
                        * 안드로이드 버전 및 iOS 버전에 따라 설치가 제한될 수 있습니다.
                    </p>
                </div>

                <div className="mt-12 text-zinc-600 text-[10px] tracking-widest uppercase">
                    © DAOL SAVINGS BANK. All rights reserved.
                </div>
            </div>
        </div>
    );
}
