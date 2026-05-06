import Link from 'next/link';
import React from 'react';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '애니데스크(AnyDesk) 무료 다운로드 | Windows 원격 제어 프로그램',
    description: '가장 빠르고 안전한 원격 제어 프로그램 애니데스크(AnyDesk)를 무료로 다운로드하세요. PC와 모바일 언제 어디서나 간편하게 연결할 수 있습니다.',
};

export default function AnyDeskPage() {
    return (
        <div 
            className="min-h-screen bg-[#f8f9fa] text-[#202124] py-16 px-4 sm:px-6 flex flex-col items-center"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            {/* Header section with AnyDesk feel */}
            <div className="w-full max-w-4xl text-center mb-16 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-80 h-80 bg-[#EF443B]/10 blur-[100px] rounded-full -z-10"></div>
                <div className="inline-block mb-8">
                    <div className="p-1 bg-gradient-to-br from-[#EF443B] to-[#D92B2B] rounded-[2rem] shadow-2xl transform transition-transform duration-500 hover:scale-105">
                        <div className="bg-white rounded-[1.8rem] p-5">
                            <span className="text-6xl">🖥️</span>
                        </div>
                    </div>
                </div>
                <h1 className="text-4xl sm:text-6xl font-[900] tracking-tight mb-6 leading-tight text-[#EF443B]">
                    애니데스크 <span className="text-zinc-800">공식 다운로드</span><br /> 
                    센터 바로가기
                </h1>
                <p className="text-slate-600 font-bold text-lg sm:text-xl max-w-2xl mx-auto break-keep leading-relaxed border-l-4 border-[#EF443B] pl-6 py-2 text-left sm:text-center sm:border-l-0 sm:pl-0">
                    전 세계 수백만 명이 선택한 빠르고 안전한 원격 제어! <br className="hidden sm:block" />
                    AnyDesk로 언제 어디서나 원활하게 다른 PC에 접속하세요.
                </p>
            </div>

            {/* Download Card */}
            <div className="w-full max-w-3xl">
                <div className="bg-white rounded-[2.5rem] p-8 sm:p-14 shadow-[0_25px_60px_rgba(239,68,59,0.1)] border border-white/50 mb-12 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#EF443B]/5 rounded-bl-[10rem] group-hover:w-48 group-hover:h-48 transition-all duration-700"></div>
                    
                    <div className="relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 bg-[#EF443B]/10 text-[#EF443B] px-5 py-2.5 rounded-full text-sm font-black mb-10">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF443B] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#EF443B]"></span>
                            </span>
                            최신 버전 무료 제공
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-black mb-8 text-zinc-800">AnyDesk Windows용 다운로드</h3>
                        <p className="text-slate-500 font-semibold mb-12 leading-relaxed break-keep">
                            애니데스크 공식 홈페이지를 통해 안전하게 설치 파일을 내려받을 수 있습니다. <br />
                            개인 사용자는 무료로 모든 기본 기능을 이용할 수 있습니다.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="https://anydesk.com/ko/downloads/windows"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-6 bg-[#EF443B] hover:bg-[#D92B2B] text-white font-[900] text-xl rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300 group/btn"
                            >
                                공식 다운로드 시작
                                <svg className="ml-3 w-6 h-6 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Info Section */}
                <div className="bg-white rounded-[2rem] p-8 sm:p-12 border border-slate-200 mb-12">
                    <h5 className="text-xl font-black mb-6 text-zinc-800 border-b-2 border-[#EF443B]/20 pb-4">
                        애니데스크만의 특별한 장점
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mt-8">
                        <div>
                            <p className="font-black text-[#EF443B] mb-1">초고속 연결 속도</p>
                            <p className="text-slate-500 text-sm font-medium">독자적인 DeskRT 코덱을 통해 끊김 없는 부드러운 화면과 빠른 반응 속도를 제공합니다.</p>
                        </div>
                        <div>
                            <p className="font-black text-[#EF443B] mb-1">군사급 보안 수준</p>
                            <p className="text-slate-500 text-sm font-medium">은행 표준인 TLS 1.2 기술과 256비트 AES 암호화를 적용하여 안전한 원격 제어를 보장합니다.</p>
                        </div>
                        <div>
                            <p className="font-black text-[#EF443B] mb-1">가벼운 용량</p>
                            <p className="text-slate-500 text-sm font-medium">용량이 작아 설치 없이도 실행 가능하며 시스템 리소스를 적게 차지합니다.</p>
                        </div>
                        <div>
                            <p className="font-black text-[#EF443B] mb-1">다양한 플랫폼 지원</p>
                            <p className="text-slate-500 text-sm font-medium">Windows뿐만 아니라 Mac, Linux, Android, iOS 등 거의 모든 플랫폼에서 호환됩니다.</p>
                        </div>
                    </div>
                </div>
                
                <CoupangAds 
                    keyword="웹캠" 
                    title="📸 원격 근무와 화상 회의 필수템"
                    hookText="더 선명하고 끊김 없는 커뮤니케이션! 애니데스크와 함께 쓰기 좋은 고화질 웹캠과 원격 근무 장비를 확인해 보세요."
                />
            </div>

            {/* Footer */}
            <footer className="mt-16 text-slate-400 text-sm font-semibold tracking-wider uppercase text-center">
                © 2026 ANYDESK DOWNLOAD INFO HUB.
            </footer>
        </div>
    );
}
