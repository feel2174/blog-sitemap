import Link from 'next/link';
import React from 'react';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '틱톡 영상 다운로드 사이트 소개 (워터마크 없는 빠른 다운로더)',
    description: '워터마크 없이 깔끔하게 틱톡 영상과 음원을 저장할 수 있는 스냅틱(SnapTik) 다운로드 센터. PC와 모바일, 안드로이드 앱 및 아이폰 앱 설치 정보를 제공합니다.',
};

export default function TiktokDownloadPage() {
    return (
        <div 
            className="min-h-screen bg-[#0a0a0a] text-[#ffffff] py-16 px-4 sm:px-6 flex flex-col items-center overflow-x-hidden relative"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            {/* Global background glow effects */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#00f2fe]/10 blur-[150px] rounded-full -z-10 translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-[#fe0979]/10 blur-[150px] rounded-full -z-10 -translate-x-1/3 translate-y-1/3"></div>

            {/* Header section with TikTok cyber/neon feel */}
            <div className="w-full max-w-4xl text-center mb-16 relative">
                <div className="inline-block mb-8">
                    <div className="p-1 bg-gradient-to-r from-[#00f2fe] via-[#ffffff] to-[#fe0979] rounded-[2.2rem] shadow-[0_0_40px_rgba(254,9,121,0.3)] transform transition-transform duration-500 hover:scale-105">
                        <div className="bg-[#121212] rounded-[1.8rem] p-5">
                            <span className="text-6xl" suppressHydrationWarning>🎵</span>
                        </div>
                    </div>
                </div>
                
                <h1 className="text-4xl sm:text-6xl font-[900] tracking-tight mb-8 leading-[1.1] relative">
                    틱톡 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#4facfe]">워터마크 없이</span>
                    <br />
                    깔끔한 <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#fe0979] to-[#ff6a00]">무료 다운로더</span>
                </h1>
                
                <p className="text-zinc-400 font-bold text-lg sm:text-xl max-w-2xl mx-auto break-keep leading-relaxed border-l-4 border-[#00f2fe] pl-6 py-2 text-left sm:text-center sm:border-l-0 sm:pl-0">
                    SnapTik(스냅틱)을 이용하면 고화질의 틱톡 영상을 워터마크(로고) 없이 아주 쉽게 저장할 수 있습니다. <br className="hidden sm:block" />
                    PC 환경뿐만 아니라 모바일 전용 앱으로도 언제 어디서든 편하게 다운로드하세요!
                </p>
            </div>

            {/* Download Links Section */}
            <div className="w-full max-w-4xl space-y-6 mb-20 relative z-10">
                
                {/* Link 1: Web */}
                <div className="group bg-[#151515] rounded-[2rem] p-8 sm:p-10 border border-white/5 hover:border-[#00f2fe]/40 transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row items-center md:items-center gap-8 shadow-2xl">
                    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#00f2fe]/10 blur-[80px] rounded-full"></div>
                    <div className="flex-shrink-0 w-24 h-24 bg-[#202020] border border-[#00f2fe]/20 rounded-3xl flex items-center justify-center text-5xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-[0_0_20px_rgba(0,242,254,0.1)]">
                        🌐
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 bg-[#00f2fe]/10 text-[#00f2fe] px-3.5 py-1.5 rounded-full text-xs font-bold mb-3 border border-[#00f2fe]/20 uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-[#00f2fe] animate-pulse"></span> 웹사이트 바로가기
                        </div>
                        <h3 className="text-3xl font-black text-white mb-3">SnapTik 공식 웹사이트</h3>
                        <p className="text-zinc-400 font-medium mb-6 break-keep leading-relaxed text-sm lg:text-base">
                            별도의 앱 설치 없이 웹 브라우저에서 바로 동영상을 다운로드하고 싶다면 웹 버전을 이용하세요. 복사한 링크만 넣으면 끝입니다.
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <Link
                                href="https://snaptik.app/ko2"
                                className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-white hover:bg-gray-200 text-black font-[900] text-lg rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                웹사이트 접속하기
                                <svg className="ml-2 w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Apps Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
                    
                    {/* Link 2: Android */}
                    <div className="group bg-gradient-to-b from-[#1a1c23] to-[#121318] rounded-[2rem] p-8 border border-white/5 hover:border-[#00ff87]/30 transition-all duration-300 overflow-hidden relative">
                        <div className="flex flex-col h-full z-10 relative">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-[#2a2e39] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                                    🤖
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white">안드로이드 앱</h3>
                                    <p className="text-[#00ff87] font-semibold text-sm">Google Play 스토어</p>
                                </div>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                                갤럭시 등 안드로이드 모바일 사용자를 위한 전용 앱입니다. 빠르고 안정적인 다운로드 환경을 제공하며 클릭 몇 번으로 편하게 내 폰에 저장할 수 있습니다.
                            </p>
                            <Link
                                href="https://play.google.com/store/apps/details?id=com.snapd.video2026&referrer=web_organic"
                                className="flex items-center justify-center w-full px-6 py-4 bg-[#00ff87]/10 hover:bg-[#00ff87]/20 text-[#00ff87] border border-[#00ff87]/20 font-bold text-lg rounded-xl transition-all duration-300"
                            >
                                Play 스토어에서 다운로드
                            </Link>
                        </div>
                    </div>

                    {/* Link 3: iOS */}
                    <div className="group bg-gradient-to-b from-[#231a20] to-[#181215] rounded-[2rem] p-8 border border-white/5 hover:border-[#fe0979]/30 transition-all duration-300 overflow-hidden relative">
                        <div className="flex flex-col h-full z-10 relative">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-[#392a34] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                                    🍎
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white">아이폰 앱 (iOS)</h3>
                                    <p className="text-[#fe0979] font-semibold text-sm">Apple App Store</p>
                                </div>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                                아이폰 유저를 위해 완벽하게 최적화된 앱입니다. 워터마크 제거는 물론이고 깨끗한 음질의 오디오 저장, 최고 화질을 지원하는 강력한 필수 앱입니다.
                            </p>
                            <Link
                                href="https://apps.apple.com/app/svideo/id6461307222"
                                className="flex items-center justify-center w-full px-6 py-4 bg-[#fe0979]/10 hover:bg-[#fe0979]/20 text-[#fe0979] border border-[#fe0979]/20 font-bold text-lg rounded-xl transition-all duration-300"
                            >
                                앱스토어에서 다운로드
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* Guide Section in dark premium style */}
            <div className="w-full max-w-4xl bg-[#111111] rounded-[2.5rem] p-8 sm:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-b from-[#fe0979]/5 to-transparent rounded-bl-full pointer-events-none"></div>
                
                <h5 className="text-2xl font-black mb-8 text-white flex items-center gap-3">
                    <span className="text-[#00f2fe]">📌</span> 워터마크 없이 저장하는 방법
                </h5>
                
                <ul className="space-y-6 relative z-10">
                    <li className="flex items-start gap-5 bg-[#181818] p-5 rounded-2xl border border-white/5">
                        <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#222222] flex items-center justify-center font-black text-zinc-400">1</span>
                        <p className="text-zinc-300 font-medium pt-2 text-sm sm:text-base leading-relaxed break-keep">
                            스마트폰에서 틱톡(TikTok) 앱을 열고 다운받고 싶은 신나는 영상을 선택합니다.
                        </p>
                    </li>
                    <li className="flex items-start gap-5 bg-[#181818] p-5 rounded-2xl border border-white/5">
                        <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#222222] flex items-center justify-center font-black text-zinc-400">2</span>
                        <div className="pt-1.5">
                            <p className="text-zinc-300 font-medium text-sm sm:text-base leading-relaxed break-keep flex flex-wrap items-center gap-2">
                                영상 오른쪽 하단에 위치한 <strong className="text-white bg-zinc-800 px-2.5 py-1 rounded-md text-xs">공유(Share)</strong> 아이콘을 탭합니다.
                            </p>
                        </div>
                    </li>
                    <li className="flex items-start gap-5 bg-[#181818] p-5 rounded-2xl border border-white/5">
                        <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#222222] border border-[#00f2fe]/30 flex items-center justify-center font-black text-[#00f2fe] shadow-[0_0_15px_rgba(0,242,254,0.2)]">3</span>
                        <p className="text-zinc-300 font-medium pt-2 text-sm sm:text-base leading-relaxed break-keep">
                            공유 메뉴에서 <strong className="text-white">링크 복사 (Copy Link)</strong>를 눌러 주소를 복사합니다.
                        </p>
                    </li>
                    <li className="flex items-start gap-5 bg-gradient-to-r from-[#181818] to-[#1a1215] p-5 rounded-2xl border border-[#fe0979]/20">
                        <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#fe0979] to-[#ff6a00] flex items-center justify-center font-black text-white shadow-[0_0_15px_rgba(254,9,121,0.4)]">4</span>
                        <p className="text-zinc-300 font-medium pt-2 text-sm sm:text-base leading-relaxed break-keep">
                            스냅틱 웹이나 모바일 앱에 접속하여 복사한 링크를 입력란에 붙여넣고 <strong className="text-[#fe0979]">Download</strong> 버튼만 누르면 갤러리에 저장 완료!
                        </p>
                    </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-3">
                    <span className="text-yellow-500 mt-1">⚠️</span>
                    <p className="text-xs text-zinc-500 font-medium break-keep leading-relaxed flex-1">
                        저장한 영상은 창작자의 지식재산권을 존중하여야 합니다. 불법적인 재포스팅 및 상업적인 용도의 2차 가공은 저작권법에 의해 처벌받을 수 있으므로 반드시 개인 소장용으로만 이용 바랍니다.
                    </p>
                </div>
            </div>

            <CoupangAds 
                keyword="짐벌" 
                title="🤳 틱톡 감성, 흔들림 없이 저장"
                hookText="나도 틱톡커처럼 찍고 싶다면? 고화질 영상을 워터마크 없이 소장하는 것만큼 중요한 건 흔들림 없는 촬영! 인기 짐벌과 조명 특가 리스트입니다."
            />

            {/* Footer */}
            <footer className="mt-20 flex flex-col items-center">
                <div className="w-16 h-1 bg-gradient-to-r from-[#00f2fe] to-[#fe0979] rounded-full mb-6"></div>
                <p className="text-zinc-600 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                    © 2026 TIKTOK VIDEO DOWNLOADER INFOHUB.
                </p>
            </footer>
        </div>
    );
}
