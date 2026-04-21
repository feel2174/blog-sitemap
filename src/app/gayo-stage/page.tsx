import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import CoupangAds from '@/components/CoupangAds';

export const metadata: Metadata = {
    title: '가요무대 출연진 및 방청 신청 안내 | KBS 1TV 공식 홈페이지 바로가기',
    description: '전 국민의 사랑을 받는 KBS 1TV 가요무대의 이번 주 출연진 정보와 방청 신청 방법을 확인하세요. 추억의 명곡과 함께하는 감동의 무대로 안내합니다.',
    keywords: ['가요무대', '가요무대출연진', '가요무대방청신청', '트로트', 'KBS가요무대', '전통가요', '추억의노래'],
};

export default function GayoStagePage() {
    const kbsUrl = 'https://program.kbs.co.kr/1tv/enter/gayo/pc/board.html?smenu=9725de&bbs_loc=T2000-0113-04-175186,read,,344,1417591';

    return (
        <div 
            className="min-h-screen bg-[#FDFBF7] text-[#2C2C2C] selection:bg-[#B8860B]/20"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            <main className="pb-20">
                {/* Hero / Header Section */}
                <div className="relative bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] pt-32 pb-48 px-4 overflow-hidden border-b-4 border-[#B8860B]">
                    {/* Golden Decorative Elements */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(184,134,11,0.15)_0%,transparent_70%)] pointer-events-none"></div>
                    <div className="absolute top-10 right-10 w-64 h-64 bg-[#B8860B] opacity-10 rounded-full blur-[100px]"></div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
                        <div className="mb-10 p-5 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-[0_0_50px_rgba(184,134,11,0.3)] animate-pulse">
                            <span className="text-6xl">🎙️</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight drop-shadow-lg">
                            가요무대 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F9E29C] to-[#D4AF37]">출연진 및 방청안내</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-stone-300 font-medium max-w-2xl mx-auto break-keep leading-relaxed border-t border-b border-white/10 py-6">
                            부모님의 추억과 감동이 머무르는 곳, <br className="hidden sm:block" />
                            KBS 1TV 가요무대의 공식 정보를 확인해 보세요.
                        </p>
                    </div>
                </div>

                {/* Main Action Section */}
                <div className="max-w-4xl mx-auto px-4 -mt-24 relative z-20">
                    
                    {/* Primary Link Card */}
                    <Link
                        href={kbsUrl}
                        className="group block relative bg-white rounded-[3rem] p-10 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.1)] border border-stone-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_45px_120px_rgba(184,134,11,0.15)] active:scale-[0.98]"
                    >
                        {/* Elegant Pattern Background */}
                        <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#D4AF37] via-[#F9E29C] to-[#D4AF37] rounded-b-[3rem]"></div>
                        
                        <div className="flex flex-col items-center text-center">
                            <div className="flex items-center gap-2 px-4 py-2 bg-stone-100 rounded-full text-stone-500 text-xs font-bold tracking-[0.2em] mb-8 uppercase">
                                <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                                Official KBS 1TV
                            </div>
                            
                            <h2 className="text-3xl md:text-4xl font-black text-stone-800 mb-6 group-hover:text-[#B8860B] transition-colors">
                                이번 주 가요무대 <br className="sm:hidden" /> 출연진 보러가기
                            </h2>
                            
                            <p className="text-stone-500 text-lg font-medium mb-10 max-w-md break-keep">
                                KBS 공식 홈페이지 시청자 게시판으로 이동하여 <br className="hidden sm:block" />
                                최신 회차의 출연 가수를 확인하실 수 있습니다.
                            </p>
                            
                            <div className="w-full sm:w-auto px-12 py-6 bg-stone-900 group-hover:bg-[#B8860B] text-white text-xl font-black rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-center gap-3">
                                공식 홈페이지 이동
                                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                        </div>
                    </Link>

                    {/* Secondary Info / Tips */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-20">
                        <div className="bg-[#FAF7F2] p-8 rounded-[2.5rem] border border-stone-200/50 flex flex-col gap-3">
                            <h3 className="text-xl font-bold text-stone-800 flex items-center gap-2">
                                <span className="text-2xl">🎟️</span> 방청 신청 가이드
                            </h3>
                            <p className="text-stone-600 text-sm leading-relaxed break-keep font-medium">
                                KBS 홈페이지 로그인이 필요하며, 추첨을 통해 당첨자가 선정됩니다. 부모님을 위한 효도 선물로 인기가 매우 높으니 미리 일정을 체크해 보세요.
                            </p>
                        </div>
                        <div className="bg-[#FAF7F2] p-8 rounded-[2.5rem] border border-stone-200/50 flex flex-col gap-3">
                            <h3 className="text-xl font-bold text-stone-800 flex items-center gap-2">
                                <span className="text-2xl">📺</span> 방송 시간 안내
                            </h3>
                            <p className="text-stone-600 text-sm leading-relaxed break-keep font-medium">
                                매주 월요일 밤 10시, KBS 1TV에서 방송됩니다. 실시간 방송은 KBS On (구 my K) 앱을 통해서도 PC/모바일 시청이 가능합니다.
                            </p>
                        </div>
                    </div>

                    {/* Coupang Ads Section */}
                    <CoupangAds 
                        keyword="부모님 선물" 
                        title="🎁 부모님을 위한 따뜻한 선물"
                        hookText="가요무대를 즐겨보시는 부모님께 마음을 전해보세요! 건강 관리를 위한 영양제부터 트로트 효도 라디오까지, 정성이 담긴 추천 리스트를 확인해 보세요."
                    />

                </div>
            </main>

            {/* Premium Footer */}
            <footer className="py-16 border-t border-stone-200 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="text-stone-400 text-sm font-bold tracking-widest uppercase mb-4">
                        © 2026 GAYO STAGE INFO HUB.
                    </p>
                    <p className="text-stone-300 text-xs font-medium leading-relaxed max-w-lg mx-auto break-keep">
                        본 서비스는 KBS 가요무대 공식 홈페이지의 정보를 편리하게 연결해 드리는 가이드 페이지입니다. <br />
                        정확한 출연진과 방청 정보는 반드시 KBS 공식 채널을 통해 확인해 주시기 바랍니다.
                    </p>
                    <div className="mt-8 flex justify-center gap-6 opacity-30 group">
                        <span className="w-10 h-1 bg-stone-300 rounded-full group-hover:bg-[#B8860B] transition-colors"></span>
                        <span className="w-10 h-1 bg-stone-300 rounded-full group-hover:bg-[#B8860B] transition-colors"></span>
                        <span className="w-10 h-1 bg-stone-300 rounded-full group-hover:bg-[#B8860B] transition-colors"></span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
