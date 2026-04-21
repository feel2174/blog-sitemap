import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: 'SC제일은행 모바일뱅킹 앱 설치 및 고객센터 바로가기',
    description: 'SC제일은행의 편리한 모바일뱅킹 앱을 설치하고 맞춤 금융 서비스를 이용하세요. 안드로이드, iOS 다운로드 및 고객센터 링크를 제공합니다.',
};

export default function SCBankAppLandingPage() {
    return (
        <div
            className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Premium Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-70 scale-105"
                style={{ backgroundImage: 'url("/scbank-bg.png")' }}
            />

            {/* Background Overlays */}
            <div className="absolute inset-0 bg-white/40 z-[1] backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60 z-[2]" />

            <div className="relative z-10 w-full max-w-md text-center">
                {/* SC Bank Logo / Header */}
                <div className="mb-12">
                    <div className="inline-block px-4 py-1.5 bg-blue-600/10 border border-blue-600/20 rounded-full mb-6">
                        <span className="text-blue-700 text-xs font-bold tracking-widest uppercase">Global Banking Partner</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-[#003B98] tracking-tight mb-3">
                        SC<span className="text-[#00a651]">제일은행</span>
                    </h1>
                    <p className="text-slate-600 text-sm md:text-lg font-medium">
                        함께하는 오늘, 더 나은 내일
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4">
                    {/* Customer Center Shortcut */}
                    <Link
                        href="https://www.standardchartered.co.kr/np/kr/cm/cc/ContactCenterInfo.jsp"
                        className="group relative flex items-center justify-between bg-[#003B98] text-white p-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-[#002b70] hover:shadow-[0_10px_30px_rgba(0,59,152,0.3)] hover:-translate-y-1 active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-white/20 p-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            </div>
                            <span>고객센터 바로가기</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>

                    {/* Android Download */}
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.scbank.ma30&hl=ko"
                        className="group relative flex items-center justify-between bg-white border-2 border-slate-100 text-slate-800 p-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:border-[#00a651] hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-slate-50 p-2 rounded-lg group-hover:bg-green-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M12 19V5"></path><path d="M5 12l7 7 7-7"></path></svg>
                            </div>
                            <span>안드로이드 앱 설치</span>
                        </div>
                        <div className="bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-400 group-hover:bg-[#00a651] group-hover:text-white transition-colors">
                            Google Play
                        </div>
                    </Link>

                    {/* iOS Download */}
                    <Link
                        href="https://apps.apple.com/kr/app/sc%EC%A0%9C%EC%9D%BC%EC%9D%80%ED%96%89-%EB%AA%A8%EB%B0%94%EC%9D%BC%EB%B1%85%ED%82%B9/id1457418899"
                        className="group relative flex items-center justify-between bg-white border-2 border-slate-100 text-slate-800 p-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:border-[#00a651] hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-slate-50 p-2 rounded-lg group-hover:bg-green-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5"></path><path d="M5 12l7 7 7-7"></path></svg>
                            </div>
                            <span>iOS 앱 설치</span>
                        </div>
                        <div className="bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-400 group-hover:bg-[#00a651] group-hover:text-white transition-colors">
                            App Store
                        </div>
                    </Link>
                </div>

                {/* Info Text */}
                <div className="mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/80 shadow-sm text-slate-500 text-sm leading-relaxed text-left">
                    <p className="font-semibold text-slate-700 mb-2">💡 서비스 안내</p>
                    <ul className="space-y-1 text-xs md:text-sm">
                        <li>• 쉽고 빠른 간편 로그인 (지문, 패턴, 간편비밀번호)</li>
                        <li>• 한눈에 확인하는 맞춤 메인화면</li>
                        <li>• 수수료 부담 없는 빠른 이체 서비스</li>
                        <li>• 비대면 상품 가입 및 자산 관리 서비스</li>
                    </ul>
                    <p className="mt-4 text-[10px] text-slate-400">
                        * 네트워크 속도에 따라 다운로드 시간이 소요될 수 있습니다.
                    </p>
                </div>

                <div className="mt-12 text-slate-400 text-xs text-center w-full">
                    © Standard Chartered Bank Korea Limited. All rights reserved.
                </div>

                <CoupangAds 
                    keyword="가죽 지갑" 
                    title="💼 비즈니스의 품격"
                    hookText="글로벌 뱅킹 서비스와 어울리는 세련된 카드 지갑으로 비즈니스의 품격을 높여보세요. 선물용으로도 좋은 프리미엄 가죽 제품 리스트입니다."
                />
            </div>
        </div>
    );
}
