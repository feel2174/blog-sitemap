import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '히든싱어8 다시보기 & 실시간 라이브 시청 링크 (디즈니플러스, 네이버TV, 티빙)',
    description: 'JTBC 예능 히든싱어8 다시보기 및 실시간 라이브 시청이 가능한 OTT 서비스 링크 총정리! 디즈니플러스 본편 다시보기, 네이버TV 하이라이트 영상, 티빙 실시간 방송까지 한 곳에서 바로가기로 연결해드립니다.',
    keywords: ['히든싱어8', '히든싱어8 다시보기', '히든싱어8 실시간', '히든싱어 OTT', '디즈니플러스 히든싱어', '티빙 히든싱어', 'JTBC 히든싱어8'],
};

export default function HiddenSingerPage() {
    const ottServices = [
        { 
            name: '디즈니플러스 (Disney+)', 
            url: 'https://www.disneyplus.com/ko-kr/browse/entity-d950dce6-ee01-4af8-8662-30c54a3ace44', 
            desc: '풀버전 본편 고화질 다시보기 제공',
            color: 'bg-gradient-to-br from-[#060814] to-[#1a1d29]',
            hoverColor: 'hover:border-[#0072D2]',
            icon: '💙'
        },
        { 
            name: '티빙 (TVING)', 
            url: 'https://www.tving.com/onboarding', 
            desc: '히든싱어8 본방송 실시간 라이브 시청',
            color: 'bg-gradient-to-br from-[#FF153C] to-[#C90022]',
            hoverColor: 'hover:border-[#FF153C]',
            icon: '🔥'
        },
        { 
            name: '네이버TV (Naver TV)', 
            url: 'https://tv.naver.com/jtbc.hiddensinger8', 
            desc: '방송 핵심 명장면 & 무료 하이라이트 감상',
            color: 'bg-gradient-to-br from-[#03C75A] to-[#029a46]',
            hoverColor: 'hover:border-[#03c75a]',
            icon: '📺'
        }
    ];

    return (
        <div 
            className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 flex flex-col items-center selection:bg-purple-500/30 font-sans relative overflow-hidden"
            style={{ 
                fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
            }}
        >
            {/* Background Effects */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>

            {/* Header Section */}
            <div className="w-full max-w-4xl text-center mb-16 relative z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 animate-pulse opacity-20 text-[100px] pointer-events-none">
                    🎤
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900 border border-purple-500/30 text-purple-300 rounded-full text-sm font-bold mb-6 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                    </span>
                    JTBC 인기 음악 예능
                </div>

                <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                        히든싱어8
                    </span> 바로보기 링크
                </h1>
                
                <p className="text-slate-300 font-medium text-lg sm:text-xl max-w-2xl mx-auto break-keep leading-relaxed mb-8">
                    진짜 가수를 찾아라! 감동과 전율의 무대 <br className="hidden sm:block"/>
                    본방송부터 본편 다시보기까지 공식 OTT를 통해 확인하세요.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                    <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 text-slate-300 font-semibold text-sm">#히든싱어8_다시보기</span>
                    <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 text-slate-300 font-semibold text-sm">#디즈니플러스</span>
                    <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 text-slate-300 font-semibold text-sm">#티빙</span>
                </div>
            </div>

            {/* Link Buttons Grid */}
            <div className="w-full max-w-4xl flex flex-col md:flex-row gap-4 sm:gap-6 mb-16 z-10 z-[11] relative">
                {ottServices.map((service, index) => (
                    <Link 
                        key={index}
                        href={service.url}
                        className={`group relative overflow-hidden rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.5)] md:flex-1 hover:-translate-y-2 transition-all duration-300 border border-slate-800 ${service.hoverColor} ${service.color} cursor-pointer`}
                    >
                        <div className="relative z-10 flex flex-col h-full items-center text-center">
                            <div className={`w-20 h-20 mb-6 bg-white/10 rounded-full flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 backdrop-blur-sm border border-white/5`}>
                                {service.icon}
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-3">
                                {service.name}
                            </h3>
                            <p className="text-slate-200/80 font-medium text-sm leading-relaxed mb-6 flex-grow">
                                {service.desc}
                            </p>
                            
                            <div className="inline-flex items-center justify-center bg-white text-slate-900 rounded-full py-3 px-6 font-bold text-sm w-full group-hover:bg-slate-100 transition-colors">
                                시청하러 가기
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </div>
                        
                        {/* Shimmer Effect */}
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:animate-shimmer" />
                    </Link>
                ))}
            </div>

            {/* Additional Info Section */}
            <div className="w-full max-w-4xl bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl relative overflow-hidden z-10">
                <div className="absolute -right-8 -bottom-8 text-[120px] opacity-5 pointer-events-none -rotate-12 translate-x-4 translate-y-4">
                    🎤
                </div>
                
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-white">시청 전 참고사항</h2>
                    </div>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300 font-medium">
                        <li className="flex items-start gap-3 bg-slate-800/40 p-5 rounded-2xl border border-slate-800/80">
                            <span className="text-purple-400 mt-0.5">✓</span>
                            <span><strong>본방송 실시간</strong> 시청은 티빙(TVING)에서 시청이 가능합니다. (스트리밍 요금제 이용 시 시청 가능)</span>
                        </li>
                        <li className="flex items-start gap-3 bg-slate-800/40 p-5 rounded-2xl border border-slate-800/80">
                            <span className="text-purple-400 mt-0.5">✓</span>
                            <span><strong>VOD 다시보기</strong>는 디즈니플러스(Disney+)를 통해 본방송 종료 후 제공됩니다.</span>
                        </li>
                        <li className="flex items-start gap-3 bg-slate-800/40 p-5 rounded-2xl border border-slate-800/80">
                            <span className="text-purple-400 mt-0.5">✓</span>
                            <span><strong>모창능력자 하이라이트</strong> 무대나 미방분 영상은 네이버TV 구독 채널에서 무료로 감상할 수 있습니다.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Namuwiki Link Section */}
            <div className="w-full max-w-4xl mt-8 z-10 relative">
                <Link 
                    href="https://namu.wiki/w/%ED%9E%88%EB%93%A0%EC%8B%B1%EC%96%B48"
                    className="group flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#00A495]/10 hover:bg-[#00A495]/20 border border-[#00A495]/30 rounded-[2rem] p-6 sm:px-8 transition-all duration-300 shadow-lg backdrop-blur-sm"
                >
                    <div className="flex items-center gap-4 mb-4 sm:mb-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#00A495] to-[#008276] rounded-2xl flex items-center justify-center text-white text-2xl shadow-md group-hover:scale-110 transition-transform">
                            🌳
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-1">나무위키에서 더 자세한 정보 보기</h3>
                            <p className="text-slate-300 text-sm">출연진, 회차별 정보, 비하인드 스토리 등</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-auto inline-flex items-center justify-center bg-[#00A495] text-white rounded-full py-2.5 px-6 font-bold text-sm group-hover:bg-[#008276] transition-colors">
                        문서 보러가기
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </div>
                </Link>
            </div>

            {/* Custom CSS for Shimmer Animation */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes shimmer {
                    100% {
                        transform: translateX(200%) skewX(-12deg);
                    }
                }
                .animate-shimmer {
                    animation: shimmer 1.5s infinite;
                }
            `}} />

        </div>
    );
}
