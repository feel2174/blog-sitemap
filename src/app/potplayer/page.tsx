import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '다음 팟플레이어 최신버전 및 구버전 다운로드 - 공식 및 광고없는 버전',
    description: '가볍고 강력한 국민 동영상 재생기, 다음 팟플레이어(PotPlayer) 최신버전과 가볍고 광고가 없었던 구버전(1.7.18958) 설치 파일을 제공합니다.',
};

export default function PotPlayerPage() {
    return (
        <div
            className="flex flex-col items-center min-h-screen bg-[#14151a] overflow-y-auto overflow-x-hidden py-12 px-4 sm:px-6"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
        >
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }
                .glass-card {
                    background: rgba(32, 34, 45, 0.4);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                }
                .accent-text {
                    background: linear-gradient(135deg, #fceb42, #ffcc00);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}} />

            <div className="w-full max-w-[750px] flex flex-col gap-8">
                
                {/* 헤더 섹션 */}
                <header className="text-center relative z-10" style={{ animation: 'float 3s ease-in-out infinite' }}>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#1f2025] border border-[#2d2f38] mb-4">
                        <span className="text-[#fceb42] text-[13px] font-[800] tracking-wider">MEDIA PLAYER</span>
                    </div>
                    <h1 className="text-[34px] sm:text-[42px] font-[900] m-0 mb-4 tracking-tight text-white leading-[1.2]">
                        가장 강력한 동영상 재생기<br/>
                        <span className="accent-text">팟플레이어(PotPlayer) 다운로드</span>
                    </h1>
                    <p className="text-[16px] text-[#aaaaaa] m-0 break-keep font-[500] leading-[1.6]">
                        최신 코덱 지원과 가벼운 성능으로 국민 프로그램으로 자리 잡은 팟플레이어!<br className="hidden sm:block"/>
                        최신 공식 버전과, 광고 없이 깔끔했던 필수 구버전을 선택하여 다운로드하세요.
                    </p>
                </header>

                {/* 콘텐츠/설명 섹션 (애드센스를 위한 충분한 텍스트 반영) */}
                <section className="glass-card rounded-[24px] p-6 sm:p-8 border-l-4 border-l-[#fceb42]">
                    <h2 className="text-[20px] font-bold text-white mb-3">📌 팟플레이어는 어떤 프로그램인가요?</h2>
                    <p className="text-[#cccccc] text-[15px] leading-relaxed font-[400] mb-4 break-keep">
                        카카오(구 다음)에서 제공하는 팟플레이어는 <strong>저사양 PC에서도 가벼운 리소스로 4K, 8K, 60FPS 등의 초고화질 영상을 끊김 없이 재생</strong>할 수 있도록 최적화된 동영상 플레이어입니다. 
                        수많은 내장 코덱을 자체적으로 지원하여 별도의 복잡한 코덱 설치 없이도 대부분의 미디어 포맷(MP4, MKV, AVI, FLV 등)을 완벽하게 재생해줍니다. 
                        또한 다양한 자막 파일 지원과 화면 캡쳐, 구간 반복, 영상 비율 조정과 같은 세밀한 커스터마이징 기능으로 많은 사용자들의 필수 프로그램으로 자리매김하였습니다.
                    </p>
                    
                    <h3 className="text-[17px] font-bold text-white mt-6 mb-2">💡 어떤 버전을 다운로드해야 할까요?</h3>
                    <ul className="list-disc pl-5 text-[#bbbbcc] text-[14px] leading-relaxed flex flex-col gap-1.5">
                        <li>
                            <strong className="text-white">최신버전:</strong> 카카오TV의 최신 라이브 스트리밍 기능과 보안 패치, 최신 코덱 엔진을 경험하고 싶으신 분들에게 권장합니다.
                        </li>
                        <li>
                            <strong className="text-white">구버전 (1.7.18958):</strong> 플레이어 내 광고가 추가되기 전의 마지막 버전으로, 순수하게 <strong>&quot;동영상 재생기&quot;</strong> 본연의 목적만 가볍게 사용하시고 싶은 유저분들이 주로 많이 찾는 명작 버전입니다.
                        </li>
                    </ul>
                </section>

                {/* 다운로드 버튼 섹션 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    
                    {/* 최신 버전 다운로드 */}
                    <Link 
                        href="https://tv.kakao.com/guide/potplayer"
                        className="glass-card overflow-hidden rounded-[20px] p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(252,235,66,0.15)] hover:border-[#fceb42] group no-underline relative"
                    >
                        <div className="w-16 h-16 rounded-full bg-[#181a20] flex items-center justify-center mb-4 border border-[#2d2f38] group-hover:scale-110 transition-transform duration-300">
                            <span className="text-[28px]">🆕</span>
                        </div>
                        <h3 className="text-white text-[20px] font-[800] m-0 mb-2">카카오 팟플레이어 최신버전</h3>
                        <p className="text-[#888899] text-[14px] font-[500] m-0 mb-6 flex-1">
                            공식 홈페이지에서 제공하는<br/>가장 최신의 안전한 버전을 설치하세요.
                        </p>
                        <div className="w-full py-3.5 bg-[#fceb42] text-black text-[16px] font-[700] rounded-[12px] shadow-[0_4px_10px_rgba(252,235,66,0.3)] group-hover:bg-[#ffda00] transition-colors flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                            공식 다운로드 바로가기
                        </div>
                    </Link>

                    {/* 구버전 다운로드 */}
                    <a 
                        href="/PotPlayerSetup64_1.7.18958.exe" 
                        download
                        className="glass-card overflow-hidden rounded-[20px] p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(46,85,209,0.2)] hover:border-[#2e55d1] group no-underline relative"
                    >
                        <div className="absolute top-0 left-0 w-full p-2 bg-[#2e55d1] text-white text-[11px] font-bold tracking-wider">
                            BEST CHOICE FOR AD-FREE
                        </div>
                        <div className="w-16 h-16 rounded-full bg-[#181a20] flex items-center justify-center mb-4 mt-3 border border-[#2d2f38] group-hover:scale-110 transition-transform duration-300">
                            <span className="text-[28px]">📦</span>
                        </div>
                        <h3 className="text-white text-[20px] font-[800] m-0 mb-2">다음팟플레이어 구버전</h3>
                        <p className="text-[#888899] text-[14px] font-[500] m-0 mb-6 flex-1">
                            버전 1.7.18958 (64비트)<br/>광고 없고 가벼운 순정 플레이어
                        </p>
                        <div className="w-full py-3.5 bg-[#2e55d1] text-white text-[16px] font-[700] rounded-[12px] shadow-[0_4px_10px_rgba(46,85,209,0.3)] group-hover:bg-[#1a40ba] transition-colors flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                            구버전 설치 파일 받기
                        </div>
                    </a>

                </div>

                {/* 팁 안내 */}
                <div className="mt-4 bg-[rgba(0,0,0,0.2)] rounded-[16px] p-5 border border-[#2d2f38] text-center">
                    <p className="text-[#9999aa] text-[14px] m-0 font-[500]">
                        <span className="text-[#fceb42] font-bold">구버전 설치 팁:</span> 구버전을 설치하신 후, 프로그램 실행 시 나타나는 <strong>&quot;자동 업데이트 알림&quot;을 반드시 취소(또는 설정에서 끄기)</strong> 하셔야 계속 광고 없는 구버전으로 유지하며 사용하실 수 있습니다.
                    </p>
                </div>

                {/* 곰플레이어 안내 코너 */}
                <Link 
                    href="https://zucca100.com/gom"
                    className="glass-card rounded-[24px] p-6 sm:p-7 mt-2 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300 hover:scale-[1.02] no-underline group border border-[#2d303b]"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(255,140,0,0.05)] to-transparent pointer-events-none"></div>
                    <div className="flex flex-col gap-1.5 text-center sm:text-left relative z-10">
                        <span className="text-[#cccccc] text-[13px] sm:text-[14px] font-[600] tracking-wide inline-flex items-center justify-center sm:justify-start gap-1">
                            <span className="text-[#ff8c00]">💡</span> 또 다른 국민 동영상 플레이어가 필요하다면?
                        </span>
                        <span className="text-white text-[18px] sm:text-[20px] font-[800] group-hover:text-[#ffb347] transition-colors duration-200">
                            🐻 곰시리즈 (곰플레이어 등) 무료 다운로드하기
                        </span>
                    </div>
                    <div className="flex items-center justify-center min-w-[44px] h-[44px] rounded-full bg-[#1e2028] group-hover:bg-[#ff8c00] transition-colors duration-300 border border-[#2d303b] group-hover:border-transparent relative z-10 mt-2 sm:mt-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </div>
                </Link>

                <div className="h-10"></div>
            </div>
            
        </div>
    );
}
