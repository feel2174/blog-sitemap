import Link from 'next/link';
import React from 'react';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '무료스포츠중계 킹콩티비 - 실시간 고화질 스포츠 중계',
    description: 'PC와 모바일에서 실시간으로 끊김 없이 고화질로 즐기는 무료스포츠중계 킹콩티비. 해외축구, MLB, NBA 등 전 세계 모든 스포츠 중계.',
};

export default function KingKongTVPage() {
    return (
        <div
            className="flex flex-col justify-center items-center min-h-screen bg-[#07070a] overflow-y-auto overflow-x-hidden py-6"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "sans-serif"' }}
        >
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes pulse-neon {
                    0% { transform: scale(0.98); box-shadow: 0 0 0 0 rgba(255, 85, 0, 0.7); }
                    50% { transform: scale(1.02); box-shadow: 0 0 25px 15px rgba(255, 85, 0, 0); }
                    100% { transform: scale(0.98); box-shadow: 0 0 0 0 rgba(255, 85, 0, 0); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes glow-text {
                    0%, 100% { text-shadow: 0 0 10px rgba(255, 204, 0, 0.5), 0 0 20px rgba(255, 204, 0, 0.3); }
                    50% { text-shadow: 0 0 20px rgba(255, 204, 0, 0.8), 0 0 30px rgba(255, 204, 0, 0.6), 0 0 40px rgba(255, 204, 0, 0.4); }
                }
                .glass-panel {
                    background: rgba(30, 30, 40, 0.6);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
                }
            `}} />

            <div className="w-full max-w-[500px] p-5 box-border flex flex-col gap-6">
                
                {/* 헤더 섹션 */}
                <div className="text-center mt-4 mb-4" style={{ animation: 'float 4s ease-in-out infinite' }}>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#1a1a24] border border-[#333344] mb-4">
                        <span className="text-[#ffcc00] text-[13px] font-[800] tracking-wide">LIVE SPORTS STREAMING</span>
                    </div>
                    <h1 
                        className="text-[36px] sm:text-[42px] font-[900] m-0 mb-3 tracking-[-2px] text-white leading-[1.1]"
                    >
                        무료스포츠중계<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] to-[#ffcc00]" style={{ animation: 'glow-text 2s infinite' }}>킹콩티비</span> 라운지
                    </h1>
                    <p className="text-[15px] sm:text-[16px] text-[#aaaaaa] m-0 break-keep font-[500] px-4 leading-[1.5]">
                        해외축구, 야구, 농구 등 전 세계 모든 스포츠 중계를 PC와 모바일에서 끊김 없이 즐겨보세요!
                    </p>
                </div>

                {/* 메인 라우팅 섹션 */}
                <div className="flex flex-col gap-4 glass-panel p-6 rounded-[24px] relative overflow-hidden">
                    {/* 장식용 그라데이션 */}
                    <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(255,85,0,0.15)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>

                    <div className="flex items-center gap-2 mb-2 relative z-10">
                        <span className="flex h-3 w-3 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5500] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff5500]"></span>
                        </span>
                        <h2 className="text-white text-[20px] font-bold tracking-tight">실시간 방송 시청하기</h2>
                    </div>
                    
                    {/* 메인 버튼 (target="_blank" 없음) */}
                    <Link 
                        href="https://kingkongtv.org/"
                        className="flex flex-col justify-center items-center w-full py-[24px] px-[15px] no-underline rounded-[18px] relative z-10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                        style={{ background: 'linear-gradient(135deg, #ff5500, #cc3300)', border: '2px solid #ff7733', animation: 'pulse-neon 1.8s infinite' }}
                    >
                        <span className="text-white text-[24px] font-[900] mb-2 tracking-[-1px] flex items-center gap-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                            킹콩티비 공식 홈페이지
                        </span>
                        <span className="text-[rgba(255,255,255,0.95)] text-[15px] font-[600] bg-[rgba(0,0,0,0.2)] px-4 py-1.5 rounded-full">
                            최신 우회 주소 바로가기
                        </span>
                    </Link>

                    {/* 리그 바로가기 */}
                    <div className="grid grid-cols-2 gap-3 w-full mt-2 relative z-10">
                        <Link 
                            href="https://kingkongtv.org/"
                            className="flex flex-col justify-center items-center w-full py-[16px] px-[5px] no-underline rounded-[14px] bg-[#1a1a24] hover:bg-[#252535] border border-[#333344] transition-colors duration-200"
                        >
                            <span className="text-[20px] mb-1">⚽</span>
                            <span className="text-white text-[15px] font-[800]">해외축구</span>
                            <span className="text-[#888899] text-[12px] font-[500]">EPL, 라리가</span>
                        </Link>
                        <Link 
                            href="https://kingkongtv.org/"
                            className="flex flex-col justify-center items-center w-full py-[16px] px-[5px] no-underline rounded-[14px] bg-[#1a1a24] hover:bg-[#252535] border border-[#333344] transition-colors duration-200"
                        >
                            <span className="text-[20px] mb-1">⚾</span>
                            <span className="text-white text-[15px] font-[800]">메이저리그</span>
                            <span className="text-[#888899] text-[12px] font-[500]">MLB, KBO</span>
                        </Link>
                        <Link 
                            href="https://kingkongtv.org/"
                            className="flex flex-col justify-center items-center w-full py-[16px] px-[5px] no-underline rounded-[14px] bg-[#1a1a24] hover:bg-[#252535] border border-[#333344] transition-colors duration-200"
                        >
                            <span className="text-[20px] mb-1">🏀</span>
                            <span className="text-white text-[15px] font-[800]">해외농구</span>
                            <span className="text-[#888899] text-[12px] font-[500]">NBA, KBL</span>
                        </Link>
                        <Link 
                            href="https://kingkongtv.org/"
                            className="flex flex-col justify-center items-center w-full py-[16px] px-[5px] no-underline rounded-[14px] bg-[#1a1a24] hover:bg-[#252535] border border-[#333344] transition-colors duration-200"
                        >
                            <span className="text-[20px] mb-1">🥊</span>
                            <span className="text-white text-[15px] font-[800]">격투기</span>
                            <span className="text-[#888899] text-[12px] font-[500]">UFC, 로드FC</span>
                        </Link>
                    </div>
                </div>

                {/* 안내/경고 텍스트 */}
                <div 
                    className="flex items-start gap-3 text-left text-[#cccccc] text-[14px] font-[500] mt-2 glass-panel py-4 px-5 rounded-[16px] border border-[#333333]"
                >
                    <span className="text-[18px]">💡</span>
                    <p className="m-0 leading-relaxed break-keep">
                        통신사 차단으로 인해 접속이 원활하지 않을 수 있습니다. 주소가 변경 될 경우 <strong>최신 우회 주소 바로가기</strong>를 통해 접속해주시기 바랍니다.
                    </p>
                </div>
                
            </div>

            <CoupangAds 
                keyword="스포츠 의류" 
                title="🏆 승리를 부르는 퍼포먼스"
                hookText="킹콩티비로 스포츠 중계 보면서 운동 욕구 뿜뿜! 격렬한 움직임도 편안하게 지원하는 최신 스포츠 웨어와 홈트레이닝 장비 리스트입니다."
            />
            
        </div>
    );
}
