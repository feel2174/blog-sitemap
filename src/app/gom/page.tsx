import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '곰시리즈 & 스타코덱 다운로드 - 필수 PC 유틸리티',
    description: '곰플레이어, 곰오디오, 곰믹스 등 국민 필수 멀티미디어 프로그램 곰시리즈와 스타코덱 다운로드 링크를 한곳에서 확인하세요.',
};

const softwareList = [
    { 
        name: '곰플레이어', 
        url: 'https://www.softpick.co.kr/software/gomplayer', 
        icon: '🎬', 
        desc: '다양한 포맷을 지원하는 국민 동영상 플레이어' 
    },
    { 
        name: '곰오디오', 
        url: 'https://www.softpick.co.kr/software/gomaudio', 
        icon: '🎧', 
        desc: '라디오 청취가 가능한 고음질 음악 플레이어' 
    },
    { 
        name: '곰믹스', 
        url: 'https://www.softpick.co.kr/software/gommix', 
        icon: '🎞️', 
        desc: '초보자도 쉽고 빠르게 할 수 있는 영상 편집' 
    },
    { 
        name: '곰녹음기', 
        url: 'https://www.softpick.co.kr/software/gomrecorder', 
        icon: '🎙️', 
        desc: 'PC에서 나는 모든 소리를 고음질로 간편 녹음' 
    },
    { 
        name: '곰스튜디오', 
        url: 'https://www.softpick.co.kr/software/gomstudio', 
        icon: '🎥', 
        desc: '인터넷 방송 및 PC 화면 고화질 캡쳐·녹화' 
    },
    { 
        name: '스타코덱', 
        url: 'https://www.softpick.co.kr/software/starcodec', 
        icon: '🧩', 
        desc: '동영상 및 오디오 재생을 위한 필수 통합 코덱팩' 
    },
];

export default function GomSeriesPage() {
    return (
        <div
            className="flex flex-col items-center min-h-screen bg-[#111215] overflow-y-auto overflow-x-hidden py-12 px-4 sm:px-6"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
        >
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                .glass-card {
                    background: rgba(30, 32, 40, 0.6);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 140, 0, 0.15);
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
                }
                .text-gradient {
                    background: linear-gradient(135deg, #ff8c00, #ffb347);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .hover-glow:hover {
                    box-shadow: 0 0 25px rgba(255, 140, 0, 0.3);
                    border-color: rgba(255, 140, 0, 0.5);
                }
            `}} />

            <div className="w-full max-w-[700px] flex flex-col gap-10">
                
                {/* 헤더 섹션 */}
                <header className="text-center relative z-10" style={{ animation: 'float 4s ease-in-out infinite' }}>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#1e1510] border border-[#3d2610] mb-5">
                        <span className="text-[#ff8c00] text-[13px] font-[800] tracking-wider">ESSENTIAL SOFTWARE</span>
                    </div>
                    <h1 className="text-[34px] sm:text-[44px] font-[900] m-0 mb-4 tracking-tight text-white leading-[1.2]">
                        국민 멀티미디어 유틸리티<br/>
                        <span className="text-gradient">곰시리즈 소프트웨어</span>
                    </h1>
                    <p className="text-[16px] text-[#aaaaaa] m-0 break-keep font-[500] leading-[1.6]">
                        PC 환경을 완벽하게 세팅할 수 있는 곰시리즈와 코덱을<br className="hidden sm:block"/>
                        한 곳에서 안전하고 빠르게 다운로드하세요.
                    </p>
                </header>

                {/* 리스트 섹션 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 relative z-10">
                    {softwareList.map((item, index) => (
                        <Link 
                            key={index}
                            href={item.url}
                            className="glass-card hover-glow rounded-[20px] p-6 flex flex-col items-start gap-3 transition-all duration-300 hover:-translate-y-1 group no-underline relative overflow-hidden"
                        >
                            {/* 배경 데코레이션 효과 */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,rgba(255,140,0,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            {/* 아이콘 컨테이너 */}
                            <div className="flex items-center justify-center w-12 h-12 rounded-[14px] bg-[#1a1410] border border-[#3d2610] group-hover:bg-[#ff8c00] transition-colors duration-300">
                                <span className="text-[24px] group-hover:scale-110 transition-transform duration-300" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>
                                    {item.icon}
                                </span>
                            </div>

                            {/* 텍스트 내용 */}
                            <div className="flex flex-col mt-2">
                                <h2 className="text-white text-[20px] font-[800] m-0 mb-1.5 flex items-center gap-2 group-hover:text-[#ffb347] transition-colors">
                                    {item.name}
                                </h2>
                                <p className="text-[#888899] text-[14px] font-[500] m-0 leading-[1.5] break-keep group-hover:text-[#bbbbcc] transition-colors">
                                    {item.desc}
                                </p>
                            </div>

                            {/* 우측 하단 화살표 */}
                            <div className="absolute bottom-6 right-6 text-[#444455] group-hover:text-[#ff8c00] transition-colors duration-300 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* 하단 안내 배너 */}
              
            </div>
            
        </div>
    );
}
