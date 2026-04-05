import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '유튜브 리밴스드(YouTube ReVanced) 설치 가이드 - 최신 완벽 정리',
    description: '광고 없는 유튜브 시청! Obtainium과 microG를 활용한 유튜브 리밴스드 최신 설치 방법을 단계별로 상세히 안내해 드립니다.',
};

export default function RevancedGuidePage() {
    return (
        <div
            className="flex flex-col items-center min-h-screen bg-[#0f1115] overflow-y-auto overflow-x-hidden py-10 px-4 sm:px-6"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "sans-serif"' }}
        >
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes pulse-red {
                    0% { transform: scale(0.98); box-shadow: 0 0 0 0 rgba(255, 0, 50, 0.7); }
                    50% { transform: scale(1.01); box-shadow: 0 0 20px 10px rgba(255, 0, 50, 0); }
                    100% { transform: scale(0.98); box-shadow: 0 0 0 0 rgba(255, 0, 50, 0); }
                }
                .glass-card {
                    background: rgba(26, 28, 35, 0.7);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
                }
                .step-number {
                    background: linear-gradient(135deg, #ff0033, #ff5577);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}} />

            <div className="w-full max-w-[600px] flex flex-col gap-8">
                
                {/* 헤더 타이틀 */}
                <header className="text-center mb-4 mt-6">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#1e2028] border border-[#2d303b] mb-4">
                        <span className="text-[#ff3355] text-[13px] font-[800] tracking-wider">TUTORIAL GUIDE</span>
                    </div>
                    <h1 className="text-[32px] sm:text-[40px] font-[900] m-0 mb-4 tracking-[-1.5px] text-white leading-[1.2]">
                        유튜브 리밴스드<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0033] to-[#ff5577]">초간단 설치 가이드</span>
                    </h1>
                    <p className="text-[16px] text-[#aaaaaa] m-0 break-keep font-[500] leading-[1.6]">
                        광고 없는 쾌적한 유튜브 환경을 위해,<br className="hidden sm:block"/>
                        차근차근 순서대로 따라오시면 누구나 쉽게 설치할 수 있습니다.
                    </p>
                </header>

                {/* 스텝 컨테이너 */}
                <div className="flex flex-col gap-6">

                    {/* Step 1 */}
                    <section className="glass-card rounded-[24px] p-6 sm:p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10 text-[80px] font-black italic leading-none pointer-events-none">01</div>
                        <h2 className="text-[22px] font-bold text-white mb-3 flex items-center gap-2 relative z-10">
                            <span className="step-number">1.</span> Obtainium 설치
                        </h2>
                        <p className="text-[#cccccc] text-[15px] mb-5 leading-relaxed font-[500] relative z-10">
                            먼저 앱 관리를 도와줄 Obtainium 앱을 다운로드해야 합니다. 
                            아래 버튼을 눌러 GitHub 페이지로 이동하신 뒤, <strong>Assets</strong> 항목에서 <strong>app-arm64-v8a-release.apk</strong> 파일을 찾아 설치해 주세요.
                        </p>
                        <Link 
                            href="https://github.com/ImranR98/Obtainium/releases"
                            className="flex items-center justify-center w-full py-4 px-4 bg-[#232630] hover:bg-[#2c2f3b] border border-[#363a47] rounded-[16px] transition-colors duration-200 no-underline relative z-10"
                        >
                            <span className="text-white text-[16px] font-[700] flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                Obtainium 깃허브 최신버전 다운로드
                            </span>
                        </Link>
                    </section>

                    {/* Step 2 */}
                    <section className="glass-card rounded-[24px] p-6 sm:p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10 text-[80px] font-black italic leading-none pointer-events-none">02</div>
                        <h2 className="text-[22px] font-bold text-white mb-3 flex items-center gap-2 relative z-10">
                            <span className="step-number">2.</span> 설정 파일 다운 및 적용
                        </h2>
                        <p className="text-[#cccccc] text-[15px] mb-5 leading-relaxed font-[500] relative z-10 block">
                            리밴스드 설치를 위한 자동화 설정 파일을 다운로드합니다. 이 파일을 통해 앱 설정을 간편하게 할 수 있습니다.
                        </p>
                        
                        <Link 
                            href="https://drive.google.com/file/d/12CHgqSGLB9KBXPlJMcldJSQd_M81Q1EJ/view?usp=sharing"
                            className="flex items-center justify-center w-full py-4 px-4 bg-[#1f5ee6] hover:bg-[#2b6bec] rounded-[16px] transition-colors duration-200 no-underline relative z-10 mb-5"
                        >
                            <span className="text-white text-[16px] font-[700] flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M19.136 12.062l-6.845 11.938h-4.887l6.839-11.938h4.893zm-5.045 1.09h-9.256l-3.417 5.922 4.606 8.016h9.25q2.41 0 3.996-1.309 1.587-1.309 2.222-3.327l.182-.806q.192-.861.161-1.745-.03-1.045-.589-1.956-.558-.911-1.579-1.545-1.021-.634-2.193-.974t-2.12-.346l-1.263.07zm-7.666-2.152h-4.881l6.845-11.938h4.886l-6.85 11.938z"/></svg>
                                구글 드라이브 설정 파일 다운로드
                            </span>
                        </Link>
                        
                        <div className="bg-[#1e2028] border border-[#2d303b] rounded-[16px] p-5 relative z-10">
                            <h3 className="text-[#ffffff] text-[15px] font-[700] mb-3">적용 방법</h3>
                            <ol className="text-[#aaaaaa] text-[14px] m-0 pl-5 flex flex-col gap-2 font-[500] list-decimal">
                                <li><strong>Obtainium 앱</strong>을 실행합니다.</li>
                                <li>하단 메뉴에서 <strong>가져오기/내보내기</strong>를 누릅니다.</li>
                                <li><strong>Obtainium 가져오기</strong> 버튼을 누릅니다.</li>
                                <li>방금 전 구글 드라이브에서 다운로드한 설정 파일을 선택해 적용합니다.</li>
                            </ol>
                        </div>
                    </section>

                    {/* Step 3 */}
                    <section className="glass-card rounded-[24px] p-6 sm:p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10 text-[80px] font-black italic leading-none pointer-events-none">03</div>
                        <h2 className="text-[22px] font-bold text-white mb-3 flex items-center gap-2 relative z-10">
                            <span className="step-number">3.</span> microG 설치
                        </h2>
                        <p className="text-[#cccccc] text-[15px] mb-0 leading-relaxed font-[500] relative z-10">
                            설정 파일이 적용된 Obtainium 앱 화면에서 <strong>microG</strong> 항목을 찾아 설치해 주세요.<br/><br/>
                            <span className="text-[#ffcc00] flex items-start gap-2">
                                <span>⚠️</span>
                                <span>설치 중 <strong>출처를 알 수 없는 앱 설치 허용</strong> 알림이 뜰 경우, 권한을 허용해주셔야 정상적으로 설치됩니다.</span>
                            </span>
                        </p>
                    </section>

                    {/* Step 4 */}
                    <section className="glass-card rounded-[24px] p-6 sm:p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10 text-[80px] font-black italic leading-none pointer-events-none">04</div>
                        <h2 className="text-[22px] font-bold text-white mb-3 flex items-center gap-2 relative z-10">
                            <span className="step-number">4.</span> microG 로그인 및 배터리 설정
                        </h2>
                        
                        <div className="flex flex-col gap-5 relative z-10">
                            <div className="bg-[#1e2028] border-l-4 border-[#ff3355] rounded-r-[12px] p-4">
                                <h3 className="text-white text-[16px] font-[700] mb-2">구글 계정 로그인</h3>
                                <p className="text-[#aaaaaa] text-[14px] m-0 font-[500] leading-relaxed">
                                    설치된 <strong>microG 앱</strong>을 열고 <strong>Google Accounts</strong>에 들어갑니다.<br/>
                                    <strong>+ Add Google Accounts</strong>를 누르고 사용하실 구글 계정으로 로그인해 주세요.
                                </p>
                            </div>

                            <div className="bg-[#1e2028] border-l-4 border-[#33aaff] rounded-r-[12px] p-4">
                                <h3 className="text-white text-[16px] font-[700] mb-2">배터리 제한 해제</h3>
                                <p className="text-[#aaaaaa] text-[14px] m-0 font-[500] leading-relaxed">
                                    <strong>Obtainium 앱</strong>으로 다시 돌아가 <strong>microG</strong>를 누르고, <strong>톱니바퀴 아이콘(설정)</strong>을 누릅니다.<br/>
                                    <strong>배터리 항목</strong>에 들어가서 <strong>제한 없음</strong>으로 설정을 변경해 줍니다. 
                                    <span className="block mt-1 text-[#888888] text-[13px]">(이 작업을 해야 백그라운드에서도 원활하게 작동합니다.)</span>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Step 5 */}
                    <section className="glass-card rounded-[24px] p-6 sm:p-8 relative overflow-hidden shadow-[0_0_30px_rgba(255,0,50,0.15)] border-[#ff3355] border-opacity-30">
                        <div className="absolute top-0 right-0 p-6 opacity-10 text-[80px] font-black italic leading-none pointer-events-none text-[#ff3355]">05</div>
                        <h2 className="text-[24px] font-bold text-white mb-3 flex items-center gap-2 relative z-10 text-[#ff3355]">
                            <span className="step-number">5.</span> YouTube 설치 (마무리)
                        </h2>
                        <p className="text-[#cccccc] text-[15px] mb-4 leading-relaxed font-[500] relative z-10">
                            다시 Obtainium 앱으로 돌아가서 목록에 있는 <strong>YouTube</strong> 앱을 설치해 주세요. 마찬가지로 출처를 알 수 없는 앱 설치를 허용해주셔야 합니다.
                        </p>
                        
                        <div className="bg-[#2a1118] border border-[#55222c] rounded-[16px] p-4 mb-4 relative z-10">
                            <p className="text-[#ff8899] text-[14px] m-0 font-[500] leading-relaxed flex items-start gap-2">
                                <span>🚨</span>
                                <span>
                                    <strong>설치 오류 주의:</strong><br/>
                                    만약 악성앱으로 감지되어 설치가 진행되지 않는다면, Play 스토어의 Play 프로텍트 설정 등 구글 공식 정책(8번 등)을 참고하시어 임시 허용 후 진행해주시기 바랍니다.
                                </span>
                            </p>
                        </div>

                        <div className="w-full py-4 text-center bg-[rgba(0,0,0,0.3)] rounded-[16px] mt-2 relative z-10">
                            <p className="text-white text-[16px] font-[700] m-0">
                                🎉 여기까지 문제가 없으셨다면 성공적으로 설치된 것입니다!
                            </p>
                        </div>
                    </section>

                    {/* 추가 안내 옵션 */}
                    <Link 
                        href="https://gall.dcinside.com/mgallery/board/view/?id=vanced&no=10274&exception_mode=recommend&page=1"
                        className="glass-card rounded-[24px] p-6 sm:p-7 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300 hover:scale-[1.02] no-underline group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(255,255,255,0.02)] to-transparent pointer-events-none"></div>
                        <div className="flex flex-col gap-1.5 text-center sm:text-left relative z-10">
                            <span className="text-[#cccccc] text-[13px] sm:text-[14px] font-[600] tracking-wide">유튜브 뮤직 사용법이 궁금하다면?</span>
                            <span className="text-white text-[18px] sm:text-[20px] font-[800] group-hover:text-[#ff5577] transition-colors duration-200">
                                🎵 리밴스드 뮤직 설치법 보러가기
                            </span>
                        </div>
                        <div className="flex items-center justify-center min-w-[44px] h-[44px] rounded-full bg-[#1e2028] group-hover:bg-[#ff3355] transition-colors duration-300 border border-[#2d303b] group-hover:border-transparent relative z-10 mt-2 sm:mt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </div>
                    </Link>

                </div>

                {/* Footer Padding */}
                <div className="h-10"></div>
            </div>
            
        </div>
    );
}
