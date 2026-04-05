import Link from 'next/link';

export const metadata = {
    title: '넷플릭스 (Netflix) 바로가기 및 앱 다운로드',
    description: '넷플릭스 영화, TV 프로그램을 시청하세요. 넷플릭스 바로가기 및 스마트폰, 태블릿, 스마트 TV 앱 다운로드 링크를 제공합니다.',
};

export default function NetflixLandingPage() {
    return (
        <div
            className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Cinematic Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-40 scale-105"
                style={{ backgroundImage: 'url("/netflix-bg.png")' }}
            />

            {/* Background Overlays and Gradients */}
            <div className="absolute inset-0 bg-black/60 z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-[2]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-[2]" />

            <div className="relative z-10 w-full max-w-md text-center">
                {/* Netflix Logo / Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-[#E50914] tracking-tighter mb-2 uppercase">
                        Netflix
                    </h1>
                    <p className="text-zinc-300 text-sm md:text-base font-medium">
                        영화, 시리즈 등을 무제한으로
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-5">
                    {/* Official Website Shortcut */}
                    <Link
                        href="https://www.netflix.com/kr/"
                        className="group relative flex items-center justify-between bg-[#E50914] text-white p-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(229,9,20,0.4)] active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                            <span>넷플릭스 바로가기</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>

                    {/* Android Download */}
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.netflix.mediaclient&hl=ko"
                        className="group relative flex items-center justify-between bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 text-white p-5 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-zinc-700 hover:border-zinc-500 active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5"></path><path d="M5 12l7 7 7-7"></path></svg>
                            <span>안드로이드 앱 다운로드</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center opacity-60">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        </div>
                    </Link>

                    {/* iOS Download */}
                    <Link
                        href="https://apps.apple.com/kr/app/netflix/id363590051"
                        className="group relative flex items-center justify-between bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 text-white p-5 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-zinc-700 hover:border-zinc-500 active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5"></path><path d="M5 12l7 7 7-7"></path></svg>
                            <span>iOS 앱 다운로드</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center opacity-60">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        </div>
                    </Link>
                </div>

                {/* Footer Info */}
                <div className="mt-16 text-zinc-500 text-xs leading-relaxed">
                    <p className="mt-2 text-zinc-600">
                        앱 설치 및 원활한 이용을 위해 <br className="md:hidden" /> 안정적인 네트워크 환경을 권장합니다.
                    </p>
                </div>
            </div>
        </div>
    );
}
