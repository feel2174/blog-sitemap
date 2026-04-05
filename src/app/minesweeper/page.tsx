import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '추억의 윈도우 지뢰찾기 다운로드 (구버전 & 신버전)',
    description: '윈도우 XP 시절 감성의 지뢰찾기(Minesweeper) 구버전과 깔끔한 신버전, 그리고 모바일 앱까지 한 곳에서 바로 다운로드 하실 수 있습니다.',
};

export default function MinesweeperPage() {
    return (
        <div
            className="flex flex-col items-center min-h-screen bg-[#1c1e26] overflow-y-auto overflow-x-hidden py-12 px-4 sm:px-6"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
        >
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-4px); }
                }
                .glass-card {
                    background: rgba(36, 40, 52, 0.5);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                }
                .minesweeper-text {
                    background: linear-gradient(135deg, #ff4c4c, #ffcc00);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}} />

            <div className="w-full max-w-[800px] flex flex-col gap-10">
                
                {/* 헤더 섹션 */}
                <header className="text-center relative z-10 mt-4" style={{ animation: 'float 3s ease-in-out infinite' }}>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#2a2d3b] border border-[#3b3f52] mb-4">
                        <span className="text-[#ff4c4c] text-[13px] font-[800] tracking-wider">CLASSIC GAME</span>
                    </div>
                    <h1 className="text-[36px] sm:text-[46px] font-[900] m-0 mb-4 tracking-tight text-white leading-[1.2]">
                        추억의 윈도우 게임<br/>
                        <span className="minesweeper-text">지뢰찾기 다운로드</span>
                    </h1>
                    <p className="text-[16px] text-[#aaaaaa] m-0 break-keep font-[500] leading-[1.6]">
                        시간 가는 줄 모르고 즐겼던 전설의 두뇌 게임!<br className="hidden sm:block"/>
                        클래식한 감성의 구버전부터 세련된 신버전, 모바일 앱까지 모두 준비했습니다.
                    </p>
                </header>

                {/* 게임 소개 섹션 (SEO 향상) */}
                <section className="glass-card rounded-[24px] p-6 sm:p-8 border-t-4 border-t-[#ff4c4c] mt-2">
                    <h2 className="text-[22px] font-bold text-white mb-3 flex items-center gap-2">
                        <span>💣</span> 지뢰찾기(Minesweeper)란?
                    </h2>
                    <p className="text-[#cccccc] text-[15px] leading-relaxed font-[400] mb-4 break-keep">
                        지뢰찾기는 과거 윈도우(Windows) 운영체제에 기본으로 탑재되어 전 세계 수많은 사용자들에게 사랑받은 대표적인 논리 퍼즐 게임입니다. 
                        격자판의 칸을 열었을 때 나타나는 <strong>숫자(주변 8칸에 숨겨진 지뢰의 개수)</strong>를 단서로 삼아, 지뢰가 있는 위치를 피하고 모든 안전한 칸을 열면 승리하는 간단하면서도 중독성 있는 규칙을 가지고 있습니다.
                        우클릭으로 지뢰를 식별할 수 있는 깃발을 꽂는 손맛과, 클릭 한 번에 터져버리는 아슬아슬한 긴장감이 특징입니다.
                    </p>
                    <p className="text-[#cccccc] text-[15px] leading-relaxed font-[400] m-0 break-keep">
                        현재는 윈도우 기본 게임에서 제외되어 많은 분들이 아쉬워하고 있습니다. 그래서 예전의 <strong>클래식한 향수</strong>를 그대로 느낄 수 있는 구버전과, 최신 환경에 맞게 <strong>리뉴얼된 디자인</strong>의 신버전 설치 파일을 모두 제공해 드립니다.
                    </p>
                </section>

                {/* 구버전 & 신버전 다운로드 (이미지 포함 2열 구성) */}
                <div className="flex flex-col gap-8">
                    
                    {/* 1. 구버전 */}
                    <div className="glass-card overflow-hidden rounded-[24px] flex flex-col md:flex-row group transition-all duration-300 hover:shadow-[0_15px_40px_rgba(255,76,76,0.15)] hover:border-[#ff4c4c]">
                        {/* 이미지 영역 */}
                        <div className="w-full md:w-[45%] bg-[#121318] p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#2d3142]">
                            <img 
                                src="/old.png" 
                                alt="지뢰찾기 구버전 화면" 
                                className="w-full max-w-[280px] object-contain rounded-[8px] shadow-[0_8px_20px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                        {/* 텍스트 및 버튼 영역 */}
                        <div className="w-full md:w-[55%] p-6 sm:p-8 flex flex-col justify-center">
                            <div className="inline-block px-3 py-1 rounded-[6px] bg-[rgba(255,255,255,0.1)] text-[#bbbbcc] text-[12px] font-bold mb-3 self-start">Windows Classic</div>
                            <h3 className="text-white text-[24px] font-[800] m-0 mb-2">지뢰찾기 구버전</h3>
                            <p className="text-[#888899] text-[15px] font-[500] m-0 mb-6 leading-relaxed break-keep">
                                윈도우 XP 시절 우리가 알던 바로 그 회색 톤의 아날로그 감성! 오리지널 게임의 타격감과 스마일 버튼을 그대로 즐겨보세요.
                            </p>
                            <a 
                                href="/Minesweeper (구버전).rar" 
                                download
                                className="w-full py-3.5 bg-[#4a5568] hover:bg-[#2d3748] text-white text-[16px] font-[700] rounded-[12px] transition-colors flex items-center justify-center gap-2 no-underline"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                구버전 파일 (.rar) 다운로드
                            </a>
                        </div>
                    </div>

                    {/* 2. 신버전 */}
                    <div className="glass-card overflow-hidden rounded-[24px] flex flex-col md:flex-row-reverse group transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,204,153,0.15)] hover:border-[#00cc99]">
                        {/* 이미지 영역 */}
                        <div className="w-full md:w-[45%] bg-[#121318] p-6 flex items-center justify-center border-b md:border-b-0 md:border-l border-[#2d3142]">
                            <img 
                                src="/new.png" 
                                alt="지뢰찾기 신버전 화면" 
                                className="w-full max-w-[280px] object-contain rounded-[12px] shadow-[0_8px_20px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                        {/* 텍스트 및 버튼 영역 */}
                        <div className="w-full md:w-[55%] p-6 sm:p-8 flex flex-col justify-center">
                            <div className="inline-block px-3 py-1 rounded-[6px] bg-[rgba(0,204,153,0.15)] text-[#00cc99] text-[12px] font-bold mb-3 self-start">New Modern UI</div>
                            <h3 className="text-white text-[24px] font-[800] m-0 mb-2">지뢰찾기 신버전</h3>
                            <p className="text-[#888899] text-[15px] font-[500] m-0 mb-6 leading-relaxed break-keep">
                                눈이 편안한 깔끔한 그래픽과 부드러운 애니메이션 효과가 적용된 리뉴얼 버전입니다. 현대적인 디자인으로 플레이하고 싶을 때 추천합니다.
                            </p>
                            <a 
                                href="/Minesweeper (신버전).zip" 
                                download
                                className="w-full py-3.5 bg-[#00cc99] hover:bg-[#00a37a] text-white text-[16px] font-[700] rounded-[12px] transition-colors flex items-center justify-center gap-2 no-underline shadow-[0_4px_15px_rgba(0,204,153,0.3)]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                신버전 파일 (.zip) 다운로드
                            </a>
                        </div>
                    </div>

                </div>

                {/* 모바일 버전 안내 섹션 */}
                <div className="mt-4 border border-[#303446] bg-[rgba(0,0,0,0.3)] rounded-[20px] p-8 flex flex-col items-center text-center">
                    <span className="text-[40px] mb-3">📱</span>
                    <h3 className="text-white text-[22px] font-[800] m-0 mb-3">스마트폰에서도 지뢰찾기를 즐겨보세요</h3>
                    <p className="text-[#9999aa] text-[15px] font-[500] m-0 mb-6 break-keep max-w-[500px] leading-relaxed">
                        출퇴근길이나 쉬는 시간, 모바일에서도 가볍게 플레이할 수 있는 지뢰찾기 앱입니다. 아래 버튼을 눌러 구글 플레이스토어로 바로 이동하세요.
                    </p>
                    <Link 
                        href="https://play.google.com/store/apps/details?id=Draziw.Button.Mines&hl=ko"
                        className="py-3 px-8 bg-transparent border-2 border-[#aaaaaa] hover:border-white hover:text-white hover:bg-[rgba(255,255,255,0.1)] text-[#cccccc] text-[16px] font-[700] rounded-full transition-all duration-300 no-underline flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.86,2.15L13.62,12L3.86,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
                        Google Play 모바일 앱 설치
                    </Link>
                </div>

                <div className="h-10"></div>
            </div>
            
        </div>
    );
}
