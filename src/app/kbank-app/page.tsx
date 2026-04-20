import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '케이뱅크 앱 설치 및 고객센터 바로가기 (K Bank)',
    description: '대한민국 제1호 인터넷전문은행, 케이뱅크(K Bank) 공식 앱 설치(안드로이드/iOS), 공식 웹사이트 접속, 24시간 고객센터 바로가기를 지원합니다.',
};

export default function KBankAppPage() {
    return (
        <div 
            className="min-h-screen bg-slate-50 font-['Pretendard'] text-slate-800 flex flex-col items-center"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            <main className="w-full pb-20 flex-grow">
                {/* Hero Header matching K Bank's identity (Navy Blue / Crisp White) */}
                <div className="bg-[#001f5c] text-white pt-24 pb-16 px-4 relative overflow-hidden flex flex-col items-center">
                    <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-0"></div>
                    <div className="absolute -bottom-20 -left-10 w-[30rem] h-[30rem] bg-blue-300/10 blur-[100px] rounded-full pointer-events-none -z-0"></div>
                    
                    <div className="max-w-4xl w-full relative z-10 text-center flex flex-col items-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            <span className="text-3xl font-black text-[#001f5c] tracking-tighter italic mr-1">K</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-6xl font-black mb-6 leading-tight tracking-tight">
                            make money <br className="sm:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white ml-0 sm:ml-4">K뱅크</span>
                        </h1>
                        
                        <p className="text-lg sm:text-xl text-blue-100/90 font-medium max-w-xl mx-auto break-keep leading-relaxed mb-6">
                            대한민국 제1호 인터넷전문은행 케이뱅크. <br className="hidden sm:block" />
                            지금 바로 앱을 설치하고 편리한 금융 라이프를 경험하세요!
                        </p>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10 -mt-8">
                    
                    {/* App Download Links */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* Android Download */}
                        <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-20 h-20 bg-slate-50 text-emerald-500 rounded-3xl flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:scale-110 transition-transform">
                                🤖
                            </div>
                            <h3 className="text-2xl font-black text-slate-800 mb-2">안드로이드 앱</h3>
                            <p className="text-slate-500 font-medium mb-8 break-keep text-sm sm:text-base">
                                갤럭시 등 안드로이드 스마트폰 전용 <br className="hidden sm:block" />안전한 공식 K뱅크 앱스토어 링크입니다.
                            </p>
                            <Link 
                                href="https://play.google.com/store/apps/details?id=com.kbankwith.smartbank&hl=ko"
                                className="w-full py-4 bg-emerald-50/50 hover:bg-emerald-500 text-emerald-600 hover:text-white font-black rounded-xl transition-colors mt-auto border border-emerald-100 hover:border-emerald-500 text-lg"
                            >
                                Play 스토어에서 다운로드
                            </Link>
                        </div>

                        {/* iOS Download */}
                        <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-20 h-20 bg-slate-50 text-slate-700 rounded-3xl flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:scale-110 transition-transform">
                                🍎
                            </div>
                            <h3 className="text-2xl font-black text-slate-800 mb-2">아이폰 앱 (iOS)</h3>
                            <p className="text-slate-500 font-medium mb-8 break-keep text-sm sm:text-base">
                                아이폰, 아이패드 사용자를 위한 <br className="hidden sm:block" />안전한 애플 공식 앱스토어 링크입니다.
                            </p>
                            <Link 
                                href="https://apps.apple.com/kr/app/%EC%BC%80%EC%9D%B4%EB%B1%85%ED%81%AC/id1178872627"
                                className="w-full py-4 bg-slate-100 hover:bg-slate-800 text-slate-700 hover:text-white font-black rounded-xl transition-colors mt-auto border border-slate-200 hover:border-slate-800 text-lg"
                            >
                                App Store에서 다운로드
                            </Link>
                        </div>
                    </div>

                    {/* Official Site & CS Links */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* K-Bank Web */}
                        <Link 
                            href="https://www.kbanknow.com/ib20/mnu/PBKMAN000000"
                            className="bg-[#001f5c] rounded-3xl p-8 flex items-center justify-between group overflow-hidden relative shadow-lg hover:shadow-2xl transition-all"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[20px] rounded-full"></div>
                            <div className="relative z-10">
                                <h3 className="text-white text-xl font-black mb-1">공식 웹사이트</h3>
                                <p className="text-blue-100/70 text-sm font-medium delay-100">PC에서도 간편하게 접속하세요</p>
                            </div>
                            <div className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center shrink-0 border border-white/20 group-hover:scale-110 group-hover:bg-white group-hover:text-[#001f5c] transition-all">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                            </div>
                        </Link>

                        {/* K-Bank CS Center */}
                        <Link 
                            href="https://www.kbanknow.com/ib20/mnu/CBRCSC060200"
                            className="bg-white rounded-3xl p-8 flex items-center justify-between group border-2 border-slate-200 hover:border-[#001f5c] shadow-md hover:shadow-xl transition-all"
                        >
                            <div>
                                <h3 className="text-[#001f5c] text-xl font-black mb-1">고객센터 문의</h3>
                                <p className="text-slate-500 text-sm font-medium">자주 묻는 질문 및 빠른 상담</p>
                            </div>
                            <div className="w-12 h-12 bg-slate-100 text-[#001f5c] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#001f5c] group-hover:text-white transition-all">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                            </div>
                        </Link>
                    </div>

                </div>
            </main>
            
            <footer className="text-center py-8 text-slate-400 font-bold uppercase tracking-widest text-sm w-full bg-slate-100 border-t border-slate-200">
                © 2026 K BANK INFO HUB.
            </footer>
        </div>
    );
}
