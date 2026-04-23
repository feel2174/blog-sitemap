import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import CoupangAds from '@/components/CoupangAds';

export const metadata: Metadata = {
    title: '여론조사 전화 차단 방법 완벽 가이드 | SKT, KT, U+ 통신사별 수신거부',
    description: '선거철마다 걸려오는 귀찮은 여론조사 전화, 이제 그만! SKT, KT, LG U+ 통신사별 가상번호 제공 거부 및 전화 차단 방법을 쉽고 빠르게 안내해 드립니다.',
    keywords: ['여론조사전화차단', '여론조사차단', '선거전화차단', 'SKT여론조사차단', 'KT여론조사차단', 'LG여론조사차단', '가상번호거부', '080차단', '1547차단', '수신거부'],
};

export default function ElectionSurveyBlockPage() {
    return (
        <div
            className="min-h-screen bg-[#FDFDFD] text-[#1F2937] selection:bg-red-100"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            <main className="pb-10">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-br from-[#1E3A8A] via-[#3B82F6] to-[#EF4444] pt-16 pb-52 px-4 overflow-hidden">
                    {/* Background Image Overlay */}
                    <div 
                        className="absolute inset-0 z-0 opacity-15 bg-cover bg-center mix-blend-overlay"
                        style={{ backgroundImage: 'url("/election-block-bg.png")' }}
                    ></div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-500 opacity-20 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>

                    <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-bold mb-8 border border-white/30">
                            🚫 스트레스 제로! 여론조사 차단 가이드
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                            지긋지긋한 여론조사 전화,<br />
                            <span className="text-red-100">10초 만에 완벽 차단</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-50 font-medium max-w-2xl mx-auto break-keep leading-relaxed opacity-95">
                            내 번호를 어떻게 알았을까? 궁금하셨죠?<br />
                            통신사별 수신거부 번호로 간편하게 해결하세요.
                        </p>
                    </div>
                </div>

                {/* Content Area */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-32 relative z-20">
                    
                    {/* Carrier Blocking Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        
                        {/* SKT */}
                        <div className="group bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_-12px_rgba(30,58,138,0.15)] border border-slate-100 transition-all duration-500 hover:-translate-y-2">
                            <div className="w-20 h-20 bg-red-600 rounded-3xl flex items-center justify-center text-white text-3xl font-black mb-8 shadow-lg">SKT</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">SK텔레콤 / 알뜰폰</h3>
                            <ul className="space-y-4 text-slate-600 font-medium">
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs flex-shrink-0 mt-1">1</span>
                                    <span><strong>1547</strong>로 전화 걸기</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs flex-shrink-0 mt-1">2</span>
                                    <span>안내 후 <strong>1번</strong> 선택</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs flex-shrink-0 mt-1">3</span>
                                    <span><strong>생년월일 6자리</strong> 입력</span>
                                </li>
                            </ul>
                            <div className="mt-8 pt-6 border-t border-slate-50 text-xs text-slate-400">
                                * 평일 09:00~18:00 권장
                            </div>
                        </div>

                        {/* KT */}
                        <div className="group bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_-12px_rgba(30,58,138,0.15)] border border-slate-100 transition-all duration-500 hover:-translate-y-2">
                            <div className="w-20 h-20 bg-cyan-600 rounded-3xl flex items-center justify-center text-white text-3xl font-black mb-8 shadow-lg">KT</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">KT / 알뜰폰</h3>
                            <ul className="space-y-4 text-slate-600 font-medium">
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center text-xs flex-shrink-0 mt-1">1</span>
                                    <span className="text-lg"><strong>080-999-1390</strong></span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center text-xs flex-shrink-0 mt-1">2</span>
                                    <span><strong>전화만 걸면</strong> 즉시 차단</span>
                                </li>
                            </ul>
                            <div className="mt-8 pt-6 border-t border-slate-50 text-xs text-slate-400">
                                * 별도 인증 없이 자동 처리
                            </div>
                        </div>

                        {/* LG U+ */}
                        <div className="group bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_-12px_rgba(30,58,138,0.15)] border border-slate-100 transition-all duration-500 hover:-translate-y-2">
                            <div className="w-20 h-20 bg-pink-600 rounded-3xl flex items-center justify-center text-white text-3xl font-black mb-8 shadow-lg">U+</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">LG U+ / 알뜰폰</h3>
                            <ul className="space-y-4 text-slate-600 font-medium">
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-xs flex-shrink-0 mt-1">1</span>
                                    <span className="text-lg"><strong>080-855-0016</strong></span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-xs flex-shrink-0 mt-1">2</span>
                                    <span>안내 후 <strong>1번</strong> 선택</span>
                                </li>
                            </ul>
                            <div className="mt-8 pt-6 border-t border-slate-50 text-xs text-slate-400">
                                * 본인 휴대폰으로 직접 전화 필수
                            </div>
                        </div>
                    </div>

                    {/* Detailed Info Section */}
                    <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-slate-100 mb-16 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 opacity-50 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        
                        <div className="relative z-10">
                            <h2 className="text-3xl font-black text-slate-900 mb-10">왜 여론조사 전화가 올까요?</h2>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-600">
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">법적 근거 (공직선거법 제108조의2)</h4>
                                        <p className="text-slate-600 leading-relaxed text-sm break-keep">
                                            여론조사기관은 선거 관련 조사를 위해 통신사에 '가상번호' 제공을 요청할 수 있으며, 이는 합법적인 절차입니다. 통신사는 실제 번호가 아닌 임시 가상번호를 제공합니다.
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-red-600">
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">차단 후에도 전화가 온다면?</h4>
                                        <p className="text-slate-600 leading-relaxed text-sm break-keep">
                                            수신거부 신청 전에 이미 기관에 번호가 제공된 경우 1~2일 정도 더 전화가 올 수 있습니다. 조금만 기다려 주시면 완벽히 차단됩니다.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="bg-blue-600 rounded-3xl p-8 text-white">
                                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        🚨 불법 여론조사 신고하기
                                    </h4>
                                    <p className="mb-6 opacity-90 text-sm leading-relaxed break-keep">
                                        밤 10시 이후에 걸려오는 여론조사 전화는 법 위반 소지가 있습니다. 증거(시간, 번호 스크린샷)를 확보하여 중앙선거관리위원회에 신고하세요.
                                    </p>
                                    <Link 
                                        href="https://www.nec.go.kr/site/nec/main.do" 
                                        className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors"
                                    >
                                        선관위 홈페이지 바로가기
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coupang Ads Section */}
                    <CoupangAds
                        keyword="스팸차단 전화기"
                        title="📞 조용한 일상을 위한 스마트 추천템"
                        hookText="광고와 스팸 전화로부터 해방! 최신 스팸 차단 기능을 갖춘 무선 전화기와 스마트폰 보안 액세서리를 확인해보세요."
                    />

                </div>
            </main>

            {/* Footer */}
            <footer className="py-20 bg-slate-100 border-t border-slate-200 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-slate-400 text-sm font-black tracking-widest uppercase mb-4">
                        © 2026 ELECTION SURVEY BLOCK GUIDE. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-slate-400 text-xs leading-relaxed max-w-2xl mx-auto font-medium">
                        본 페이지는 여론조사 전화 차단 방법을 시민들에게 알기 쉽게 안내하기 위한 정보성 페이지입니다.<br />
                        정확한 법적 해석 및 추가 문의는 중앙선거관리위원회 또는 해당 통신사 고객센터를 이용하시기 바랍니다.
                    </p>
                </div>
            </footer>
        </div>
    );
}
