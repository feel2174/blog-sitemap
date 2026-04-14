import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '네이트온(NateOn) 공식 다운로드 | PC, Mac, 모바일 앱 바로가기',
    description: '네이트온 PC 버전(Windows, Mac)부터 모바일(Android, iOS)까지 모든 공식 다운로드 링크를 제공합니다. 가장 빠르고 간편한 업무용 메신저 네이트온을 만나보세요.',
};

export default function NateOnPage() {
    const downloadLinks = [
        {
            name: 'Windows 버전',
            platform: 'Windows PC',
            icon: '💻',
            url: 'https://nateonweb.nate.com/',
            color: 'bg-blue-600',
            desc: '가장 널리 쓰이는 표준 PC 메신저'
        },
        {
            name: 'Mac OS 버전',
            platform: 'Apple Mac',
            icon: '🖥️',
            url: 'https://nateonweb.nate.com/',
            color: 'bg-slate-700',
            desc: '맥 환경을 위한 최적화된 메신저'
        },
        {
            name: 'Android App',
            platform: 'Google Play',
            icon: '📱',
            url: 'https://nateonweb.nate.com/',
            color: 'bg-green-600',
            desc: '언제 어디서나 자유로운 소통'
        },
        {
            name: 'iOS App',
            platform: 'App Store',
            icon: '🍎',
            url: 'https://nateonweb.nate.com/',
            color: 'bg-zinc-800',
            desc: '아이폰 및 아이패드 전용 앱'
        }
    ];

    return (
        <div 
            className="min-h-screen bg-gradient-to-br from-[#e0f2fe] via-white to-[#f0f9ff] text-[#334155] py-16 px-4 sm:px-6 flex flex-col items-center"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            {/* Header Section */}
            <div className="w-full max-w-4xl text-center mb-16">
                <div className="relative inline-block mb-8">
                    <div className="absolute inset-0 bg-sky-400 blur-3xl opacity-20 rounded-full scale-150"></div>
                    <div className="relative inline-flex items-center justify-center p-6 bg-white rounded-3xl shadow-xl border border-sky-100 transform -rotate-2 hover:rotate-0 transition-all duration-500">
                        <span className="text-6xl">🔔</span>
                    </div>
                </div>
                <h1 className="text-4xl sm:text-6xl font-black text-[#0f172a] tracking-tight mb-6 leading-tight">
                    네이트온 <span className="text-sky-600">공식 다운로드</span>
                </h1>
                <p className="text-slate-600 font-medium text-lg sm:text-xl max-w-2xl mx-auto break-keep leading-relaxed italic">
                    &quot;업무와 일상을 연결하는 가장 빠른 방법&quot; <br />
                    모든 기기에서 끊김 없는 소통을 시작하세요.
                </p>
            </div>

            {/* Download Cards Section */}
            <div className="w-full max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {downloadLinks.map((item, index) => (
                        <div 
                            key={index}
                            className="group bg-white/70 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/50 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden relative"
                        >
                            <div className="absolute -right-8 -top-8 text-9xl opacity-[0.05] select-none pointer-events-none group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-700">
                                {item.icon}
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-5 mb-6">
                                    <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg ring-4 ring-white`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <span className="text-sm font-bold text-sky-600 tracking-wider uppercase">{item.platform}</span>
                                        <h3 className="text-2xl font-black text-[#1e293b]">
                                            {item.name}
                                        </h3>
                                    </div>
                                </div>
                                
                                <p className="text-slate-500 mb-8 font-medium leading-relaxed break-keep">
                                    {item.desc}
                                </p>

                                <div className="mt-auto">
                                    <Link
                                        href={item.url}
                                        className={`w-full inline-flex items-center justify-center p-5 ${item.color} hover:brightness-110 active:scale-[0.98] rounded-2xl text-white font-bold text-lg shadow-lg transition-all duration-300 group/btn`}
                                    >
                                        지금 다운로드
                                        <svg className="ml-3 w-6 h-6 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Guide */}
                <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] p-10 sm:p-14 shadow-sm relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                            <div className="bg-sky-600 text-white w-16 h-16 rounded-3xl flex items-center justify-center text-3xl animate-bounce shadow-xl">
                                💡
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-3xl font-black text-[#1e293b] mb-2">설치가 어려우신가요?</h3>
                                <p className="text-slate-500 font-semibold italic">안전하고 신속하게 설치를 도와드립니다.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {[
                                { title: '파일 확인', text: '다운로드 폴더에서 설치 파일을 실행해 주세요.' },
                                { title: '자동 업데이트', text: '프로그램 실행 시 최신 버전이 자동으로 확인됩니다.' },
                                { title: '고객 지원', text: '문제 발생 시 공식 홈페이지 고객센터를 이용하세요.' }
                            ].map((guide, i) => (
                                <div key={i} className="relative pl-8 border-l-4 border-sky-200">
                                    <h4 className="text-xl font-black text-[#334155] mb-3">{guide.title}</h4>
                                    <p className="text-slate-500 font-medium leading-relaxed break-keep">{guide.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-24 text-slate-400 text-sm font-semibold tracking-widest uppercase">
                © 2026 NATEON DOWNLOAD SERVICE HUB.
            </footer>
        </div>
    );
}
