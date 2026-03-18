import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '인터파크 NOL 티켓 예매 라운지',
    description: '1초의 망설임도 허용되지 않는 지금, 티켓 예매 대기열 참전 라운지.',
};

export default function InterparkTicketPage() {
    return (
        <div
            className="flex flex-col justify-center items-center min-h-screen bg-[#050505] overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* 전용 애니메이션 스타일 정의 */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes pulse-main {
                    0% { transform: scale(0.97); box-shadow: 0 0 0 0 rgba(230, 0, 76, 0.8); }
                    50% { transform: scale(1.03); box-shadow: 0 0 40px 20px rgba(230, 0, 76, 0); }
                    100% { transform: scale(0.97); box-shadow: 0 0 0 0 rgba(230, 0, 76, 0); }
                }
                @keyframes pulse-aos {
                    0% { transform: scale(0.98); box-shadow: 0 0 0 0 rgba(0, 200, 0, 0.6); }
                    50% { transform: scale(1.02); box-shadow: 0 0 30px 15px rgba(0, 200, 0, 0); }
                    100% { transform: scale(0.98); box-shadow: 0 0 0 0 rgba(0, 200, 0, 0); }
                }
                @keyframes pulse-ios {
                    0% { transform: scale(0.98); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
                    50% { transform: scale(1.02); box-shadow: 0 0 25px 10px rgba(255, 255, 255, 0); }
                    100% { transform: scale(0.98); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.3; }
                }
            `}} />

            <div className="w-full max-w-[500px] p-5 box-border flex flex-col gap-[25px]">
                {/* 헤더 섹션 */}
                <div className="text-center text-white mb-2">
                    <h1 
                        className="text-[34px] sm:text-[28px] font-[900] m-0 mb-2 uppercase tracking-[-2px] text-[#ff0055]"
                        style={{ textShadow: '0 0 20px rgba(255, 0, 85, 0.6)' }}
                    >
                        티켓팅 참전 라운지
                    </h1>
                    <p className="text-[16px] text-[#aaaaaa] m-0 break-keep font-[500]">
                        1초의 망설임도 허용되지 않는 지금, 바로 이동하세요.
                    </p>
                </div>

                {/* 메인 예매 버튼 */}
                <Link 
                    href="https://tickets.interpark.com/goods/26002761"
                    className="flex flex-col justify-center items-center w-full py-[30px] px-[10px] sm:py-[25px] no-underline rounded-[20px] box-border relative z-10 transition-transform duration-100 ease-in active:scale-95"
                    style={{ 
                        background: 'linear-gradient(135deg, #e6004c, #990033)',
                        border: '2px solid #ff3377',
                        animation: 'pulse-main 1.4s infinite'
                    }}
                >
                    <span 
                        className="text-white text-[26px] sm:text-[22px] font-[900] mb-2 tracking-[-1px]"
                        style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.7)' }}
                    >
                        🔥 인터파크 예매 바로가기
                    </span>
                    <span className="text-[rgba(255,255,255,0.9)] text-[15px] font-[600]">
                        단독 예매 페이지 즉시 연결
                    </span>
                </Link>

                {/* 안드로이드 다운로드 버튼 */}
                <Link 
                    href="https://play.google.com/store/apps/details?id=com.interpark.app.ticket"
                    className="flex flex-col justify-center items-center w-full py-[30px] px-[10px] sm:py-[25px] no-underline rounded-[20px] box-border relative z-10 transition-transform duration-100 ease-in active:scale-95"
                    style={{ 
                        background: 'linear-gradient(135deg, #009900, #004d00)',
                        border: '2px solid #00ff00',
                        animation: 'pulse-aos 1.8s infinite'
                    }}
                >
                    <span 
                        className="text-white text-[26px] sm:text-[22px] font-[900] mb-2 tracking-[-1px]"
                        style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.7)' }}
                    >
                        🤖 갤럭시 (AOS) 전용 앱 다운로드
                    </span>
                    <span className="text-[rgba(255,255,255,0.9)] text-[15px] font-[600]">
                        모바일 전용 앱으로 더 빠른 예매하기
                    </span>
                </Link>

                {/* 아이폰 다운로드 버튼 */}
                <Link 
                    href="https://apps.apple.com/kr/app/nol-%ED%8B%B0%EC%BC%93/id440487844"
                    className="flex flex-col justify-center items-center w-full py-[30px] px-[10px] sm:py-[25px] no-underline rounded-[20px] box-border relative z-10 transition-transform duration-100 ease-in active:scale-95"
                    style={{ 
                        background: 'linear-gradient(135deg, #444444, #111111)',
                        border: '2px solid #888888',
                        animation: 'pulse-ios 2.2s infinite'
                    }}
                >
                    <span 
                        className="text-white text-[26px] sm:text-[22px] font-[900] mb-2 tracking-[-1px]"
                        style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.7)' }}
                    >
                        🍎 아이폰 (iOS) 전용 앱 다운로드
                    </span>
                    <span className="text-[rgba(255,255,255,0.9)] text-[15px] font-[600]">
                        App Store에서 즉시 설치하기
                    </span>
                </Link>
                
                {/* 경고 텍스트 */}
                <div 
                    className="text-center text-[#ffcc00] text-[15px] font-[800] mt-[15px]"
                    style={{ animation: 'blink 1s infinite' }}
                >
                    ⚠️ 튕김 방지를 위해 미리 앱을 설치하고 로그인해 두세요!
                </div>
            </div>
        </div>
    );
}
