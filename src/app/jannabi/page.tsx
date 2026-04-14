import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '잔나비 EBS 스페이스 공감 무료콘서트 관람신청 안내',
    description: '그룹 잔나비의 EBS 스페이스 공감 무료 공연 관람신청 방법과 일정을 확인하세요. 지금 바로 신청하고 현장의 감동을 함께하세요.',
};

export default function JannabiPage() {
    return (
        <div 
            className="min-h-screen bg-[#fafaf9] text-[#1c1917] py-16 px-4 sm:px-6 flex flex-col items-center"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            {/* Artistic Header */}
            <div className="w-full max-w-4xl text-center mb-16 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-64 h-64 bg-amber-200/30 blur-3xl rounded-full -z-10 animate-pulse"></div>
                <div className="inline-block mb-10">
                    <div className="p-1 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-[2.5rem] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                        <div className="bg-white rounded-[2.2rem] p-6">
                            <span className="text-7xl">🎸</span>
                        </div>
                    </div>
                </div>
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-8 leading-tight">
                    잔나비 <span className="text-orange-600 underline decoration-wavy decoration-amber-300 underline-offset-8">무료콘서트</span> <br />
                    관람신청 안내
                </h1>
                <p className="text-stone-600 font-bold text-lg sm:text-xl max-w-2xl mx-auto break-keep leading-relaxed italic border-x-2 border-stone-200 px-6">
                    &quot;꿈과 환상의 나라로 초대합니다&quot; <br />
                    EBS 스페이스 공감에서 펼쳐지는 잔나비의 특별한 무대, <br className="hidden sm:block" />
                    그 현장의 주인공이 되어보세요.
                </p>
            </div>

            {/* Application Card */}
            <div className="w-full max-w-3xl">
                <div className="bg-white rounded-[3rem] p-10 sm:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-stone-100 mb-20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[5rem] group-hover:w-40 group-hover:h-40 transition-all duration-700"></div>
                    
                    <div className="relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                            </span>
                            실시간 관람신청 중
                        </div>

                        <h3 className="text-2xl font-black mb-6 text-stone-800">EBS 스페이스 공감 관람신청</h3>
                        <p className="text-stone-500 font-medium mb-12 leading-relaxed break-keep">
                            스페이스 공감 홈페이지를 통해 신청하실 수 있습니다. <br />
                            추첨을 통해 당첨된 분들께 관람 기회가 제공됩니다.
                        </p>

                        <Link
                            href="https://www.ebs.co.kr/space/program/29030"
                            className="inline-flex items-center justify-center w-full sm:w-auto px-12 py-6 bg-stone-900 hover:bg-orange-600 text-white font-black text-xl rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300 group/btn"
                        >
                            신청 페이지 바로가기
                            <svg className="ml-3 w-6 h-6 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M13 5l7 7-7 7M5 12h14" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Guide Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="bg-stone-100 p-10 rounded-[2.5rem] border border-stone-200/50">
                        <h4 className="text-xl font-black mb-6 flex items-center gap-3">
                            <span className="text-2xl text-orange-500">📍</span> 장소 안내
                        </h4>
                        <p className="text-stone-600 font-medium leading-relaxed">
                            EBS 통합사옥 (경기도 고양시 일산동구 한류월드로 281) <br />
                            EBS 스페이스 홀
                        </p>
                    </div>
                    <div className="bg-stone-900 p-10 rounded-[2.5rem] text-white">
                        <h4 className="text-xl font-black mb-6 flex items-center gap-3">
                            <span className="text-2xl">🎫</span> 티켓 안내
                        </h4>
                        <p className="text-stone-400 font-medium leading-relaxed">
                            본 공연은 전좌석 무료로 진행되며, 당첨자 1인당 2매의 티켓이 제공됩니다.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-12 text-stone-400 text-sm font-semibold tracking-wider">
                © 2026 JANNABI CONCERT INFO HUB.
            </footer>
        </div>
    );
}
