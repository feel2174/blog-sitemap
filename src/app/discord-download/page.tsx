import Link from 'next/link';
import React from 'react';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '디스코드 공식 다운로드 안내 | Windows, Mac, 모바일 앱 설치',
    description: '최신 버전의 디스코드(Discord)를 무료로 다운로드하세요. 윈도우, 맥, 모바일 모든 플랫폼을 지원하며 빠르고 간편한 설치 방법을 안내해 드립니다.',
};

export default function DiscordDownloadPage() {
    return (
        <div 
            className="min-h-screen bg-[#f1f3f9] text-[#2e3338] py-16 px-4 sm:px-6 flex flex-col items-center"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            {/* Header section with Discord feel */}
            <div className="w-full max-w-4xl text-center mb-16 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-80 h-80 bg-[#5865F2]/10 blur-[100px] rounded-full -z-10"></div>
                <div className="inline-block mb-8">
                    <div className="p-1 bg-gradient-to-br from-[#5865F2] to-[#404EED] rounded-[2rem] shadow-2xl transform transition-transform duration-500 hover:scale-105">
                        <div className="bg-white rounded-[1.8rem] p-5">
                            <span className="text-6xl">🎮</span>
                        </div>
                    </div>
                </div>
                <h1 className="text-4xl sm:text-6xl font-[900] tracking-tight mb-6 leading-tight text-[#5865F2]">
                    디스코드 <span className="text-zinc-800">공식 다운로드</span><br /> 
                    센터 바로가기
                </h1>
                <p className="text-slate-600 font-bold text-lg sm:text-xl max-w-2xl mx-auto break-keep leading-relaxed border-l-4 border-[#5865F2] pl-6 py-2 text-left sm:text-center sm:border-l-0 sm:pl-0">
                    게이머와 커뮤니티를 위한 최고의 메신저, 디스코드! <br className="hidden sm:block" />
                    PC와 모바일에서 실시간 음성, 화상, 텍스트 채팅을 즐겨보세요.
                </p>
            </div>

            {/* Download Card */}
            <div className="w-full max-w-3xl">
                <div className="bg-white rounded-[2.5rem] p-8 sm:p-14 shadow-[0_25px_60px_rgba(88,101,242,0.1)] border border-white/50 mb-12 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#5865F2]/5 rounded-bl-[10rem] group-hover:w-48 group-hover:h-48 transition-all duration-700"></div>
                    
                    <div className="relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 bg-[#5865F2]/10 text-[#5865F2] px-5 py-2.5 rounded-full text-sm font-black mb-10">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5865F2] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#5865F2]"></span>
                            </span>
                            최신 버전 업데이트 완료
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-black mb-8 text-zinc-800">디스코드 다운로드</h3>
                        <p className="text-slate-500 font-semibold mb-12 leading-relaxed break-keep">
                            디스코드 홈페이지를 통해 직접 설치 파일을 내려받을 수 있습니다. <br />
                            윈도우뿐만 아니라 Mac, Linux 버전도 함께 제공됩니다.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="https://discord.com/download"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-6 bg-[#5865F2] hover:bg-[#404EED] text-white font-[900] text-xl rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300 group/btn"
                            >
                                공식 다운로드 시작
                                <svg className="ml-3 w-6 h-6 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                            <Link
                                href="https://support.discord.com/hc/ko"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-6 bg-white border-2 border-[#5865F2] text-[#5865F2] font-[900] text-xl rounded-2xl hover:bg-[#5865F2]/5 transition-all duration-300 group/support"
                            >
                                고객센터 바로가기
                                <svg className="ml-3 w-6 h-6 group-hover/support:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Platforms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    <div className="bg-[#5865F2]/5 p-8 rounded-[2rem] border border-[#5865F2]/10 hover:bg-[#5865F2]/10 transition-colors">
                        <h4 className="text-xl font-black mb-4 flex items-center gap-3 text-[#5865F2]">
                            <span className="text-2xl">💻</span> PC 버전 지원
                        </h4>
                        <ul className="text-slate-600 font-medium space-y-2">
                            <li>• Windows 7 이상 (64비트 권장)</li>
                            <li>• macOS 10.13(High Sierra) 이상</li>
                            <li>• Linux (deb, tar.gz 지원)</li>
                        </ul>
                    </div>
                    <div className="bg-zinc-800 p-8 rounded-[2rem] text-white hover:bg-zinc-900 transition-colors shadow-xl">
                        <h4 className="text-xl font-black mb-4 flex items-center gap-3">
                            <span className="text-2xl">📱</span> 모바일 앱 지원
                        </h4>
                        <ul className="text-zinc-400 font-medium space-y-2">
                            <li>• Google Play 스토어 (안드로이드)</li>
                            <li>• Apple App Store (iOS)</li>
                            <li>• 태블릿 및 아이패드 완벽 지원</li>
                        </ul>
                    </div>
                </div>

                {/* Info Section */}
                <div className="bg-white rounded-[2rem] p-8 sm:p-12 border border-slate-200">
                    <h5 className="text-xl font-black mb-6 text-zinc-800 border-b-2 border-[#5865F2]/20 pb-4">
                        디스코드의 주요 기능
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mt-8">
                        <div>
                            <p className="font-black text-[#5865F2] mb-1">초저지연 음성 채팅</p>
                            <p className="text-slate-500 text-sm font-medium">게임 중 끊김 없는 음성 대화와 실시간 팀워크 최적화</p>
                        </div>
                        <div>
                            <p className="font-black text-[#5865F2] mb-1">화면 공유 및 라이브</p>
                            <p className="text-slate-500 text-sm font-medium">자신의 게임 화면을 친구들에게 생동감 있게 공유</p>
                        </div>
                        <div>
                            <p className="font-black text-[#5865F2] mb-1">고퀄리티 커뮤니티</p>
                            <p className="text-slate-500 text-sm font-medium">역할 설정, 봇 활용 등으로 나만의 서버 구축</p>
                        </div>
                        <div>
                            <p className="font-black text-[#5865F2] mb-1">크로스 플랫폼</p>
                            <p className="text-slate-500 text-sm font-medium">PC에서 시작한 대화를 모바일에서 끊김 없이 연결</p>
                        </div>
                    </div>
                </div>
            </div>
                <CoupangAds 
                    keyword="게이밍 헤드셋" 
                    title="🎧 디스코드 필수 게이밍 기어"
                    hookText="명확한 오더와 선명한 보이스! 팀 승리를 이끄는 가성비 게이밍 헤드셋과 마이크 추천 리스트입니다."
                />

                {/* Footer */}
            <footer className="mt-16 text-slate-400 text-sm font-semibold tracking-wider uppercase">
                © 2026 DISCORD DOWNLOAD INFO HUB.
            </footer>
        </div>
    );
}
