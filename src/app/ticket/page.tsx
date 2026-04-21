import Link from 'next/link';
import React from 'react';
import CoupangAds from '@/components/CoupangAds';
import CountdownTimer from '@/components/CountdownTimer';

export const metadata = {
    title: '통합 티켓 예매 참전 라운지 - 인터파크 & YES24',
    description: '1초의 망설임도 허용되지 않는 지금, 인터파크 티켓과 예스24 티켓 예매 대기열 참전 라운지.',
};

export default function TicketLoungePage() {
    return (
        <div
            className="flex flex-col justify-center items-center min-h-screen bg-[#050505] overflow-y-auto overflow-x-hidden py-6"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* 전용 애니메이션 스타일 정의 */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes pulse-main {
                    0% { transform: scale(0.98); box-shadow: 0 0 0 0 rgba(230, 0, 76, 0.7); }
                    50% { transform: scale(1.02); box-shadow: 0 0 25px 15px rgba(230, 0, 76, 0); }
                    100% { transform: scale(0.98); box-shadow: 0 0 0 0 rgba(230, 0, 76, 0); }
                }
                @keyframes pulse-yes24 {
                    0% { transform: scale(0.98); box-shadow: 0 0 0 0 rgba(0, 102, 255, 0.7); }
                    50% { transform: scale(1.02); box-shadow: 0 0 25px 15px rgba(0, 102, 255, 0); }
                    100% { transform: scale(0.98); box-shadow: 0 0 0 0 rgba(0, 102, 255, 0); }
                }
                @keyframes pulse-aos {
                    0% { transform: scale(0.98); box-shadow: 0 0 0 0 rgba(0, 200, 0, 0.5); }
                    50% { transform: scale(1.02); box-shadow: 0 0 20px 10px rgba(0, 200, 0, 0); }
                    100% { transform: scale(0.98); box-shadow: 0 0 0 0 rgba(0, 200, 0, 0); }
                }
                @keyframes pulse-ios {
                    0% { transform: scale(0.98); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.3); }
                    50% { transform: scale(1.02); box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0); }
                    100% { transform: scale(0.98); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.4; }
                }
            `}} />

            <div className="w-full max-w-[500px] p-5 box-border flex flex-col gap-6">
                
                {/* 헤더 섹션 */}
                <div className="text-center text-white mb-2">
                    <h1 
                        className="text-[32px] sm:text-[28px] font-[900] m-0 mb-2 uppercase tracking-[-2px] text-[#ffffff]"
                        style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.4)' }}
                    >
                        티켓팅 참전 라운지
                    </h1>
                    <p className="text-[15px] sm:text-[14px] text-[#aaaaaa] m-0 break-keep font-[500]">
                        1초의 망설임도 허용되지 않는 지금, 예매처로 바로 이동하세요.
                    </p>
                </div>

                {/* 인터파크 섹션 */}
                <div className="flex flex-col gap-4 bg-[#111111] p-5 rounded-2xl border border-[#333333] shadow-[0_0_15px_rgba(230,0,76,0.1)]">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-[#ff0055] text-2xl font-black italic tracking-tighter">NOL</span>
                        <h2 className="text-white text-xl font-bold">인터파크 티켓</h2>
                    </div>
                    
                    <Link 
                        href="https://tickets.interpark.com/goods/26002761"
                        className="flex flex-col justify-center items-center w-full py-[22px] px-[10px] no-underline rounded-[16px] relative z-10 transition-transform duration-100 ease-in active:scale-95"
                        style={{ background: 'linear-gradient(135deg, #e6004c, #990033)', border: '2px solid #ff3377', animation: 'pulse-main 1.5s infinite' }}
                    >
                        <span className="text-white text-[22px] font-[900] mb-1 tracking-[-1px]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
                            🔥 인터파크 예매 바로가기
                        </span>
                        <span className="text-[rgba(255,255,255,0.9)] text-[14px] font-[600]">단독 예매 페이지 바로 연결</span>
                    </Link>

                    <div className="flex gap-3 w-full">
                        <Link 
                            href="https://play.google.com/store/apps/details?id=com.interpark.app.ticket"
                            className="flex flex-col justify-center items-center w-full py-[16px] px-[5px] no-underline rounded-[12px] relative z-10 transition-transform duration-100 ease-in active:scale-95"
                            style={{ background: 'linear-gradient(135deg, #009900, #004d00)', border: '1px solid #00ff00', animation: 'pulse-aos 1.8s infinite' }}
                        >
                            <span className="text-white text-[16px] font-[900] mb-1">🤖 갤럭시(AOS)</span>
                            <span className="text-[rgba(255,255,255,0.8)] text-[12px] font-[600]">앱 다운로드</span>
                        </Link>
                        <Link 
                            href="https://apps.apple.com/kr/app/nol-%ED%8B%B0%EC%BC%93/id440487844"
                            className="flex flex-col justify-center items-center w-full py-[16px] px-[5px] no-underline rounded-[12px] relative z-10 transition-transform duration-100 ease-in active:scale-95"
                            style={{ background: 'linear-gradient(135deg, #444444, #111111)', border: '1px solid #888888', animation: 'pulse-ios 2.2s infinite' }}
                        >
                            <span className="text-white text-[16px] font-[900] mb-1">🍎 아이폰(iOS)</span>
                            <span className="text-[rgba(255,255,255,0.8)] text-[12px] font-[600]">앱 다운로드</span>
                        </Link>
                    </div>
                </div>

                {/* YES24 섹션 */}
                <div className="flex flex-col gap-4 bg-[#111111] p-5 rounded-2xl border border-[#333333] shadow-[0_0_15px_rgba(0,102,255,0.1)] mt-2">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-[#0055ff] text-2xl font-black italic tracking-tighter">YES24</span>
                        <h2 className="text-white text-xl font-bold">예스24 티켓</h2>
                    </div>

                    <Link 
                        href="https://ticket.yes24.com/"
                        className="flex flex-col justify-center items-center w-full py-[22px] px-[10px] no-underline rounded-[16px] relative z-10 transition-transform duration-100 ease-in active:scale-95"
                        style={{ background: 'linear-gradient(135deg, #0050A4, #002266)', border: '2px solid #3388ff', animation: 'pulse-yes24 1.6s infinite' }}
                    >
                        <span className="text-white text-[22px] font-[900] mb-1 tracking-[-1px]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
                            ⚡ 예스24 예매 바로가기
                        </span>
                        <span className="text-[rgba(255,255,255,0.9)] text-[14px] font-[600]">공식 웹페이지 바로 연결</span>
                    </Link>

                    <div className="flex gap-3 w-full">
                        <Link 
                            href="https://play.google.com/store/apps/details?id=com.yes24.ticket&hl=ko"
                            className="flex flex-col justify-center items-center w-full py-[16px] px-[5px] no-underline rounded-[12px] relative z-10 transition-transform duration-100 ease-in active:scale-95"
                            style={{ background: 'linear-gradient(135deg, #009900, #004d00)', border: '1px solid #00ff00', animation: 'pulse-aos 1.9s infinite' }}
                        >
                            <span className="text-white text-[16px] font-[900] mb-1">🤖 갤럭시(AOS)</span>
                            <span className="text-[rgba(255,255,255,0.8)] text-[12px] font-[600]">앱 다운로드</span>
                        </Link>
                        <Link 
                            href="https://apps.apple.com/kr/app/%EC%98%88%EC%8A%A424-%ED%8B%B0%EC%BC%93/id937042887"
                            className="flex flex-col justify-center items-center w-full py-[16px] px-[5px] no-underline rounded-[12px] relative z-10 transition-transform duration-100 ease-in active:scale-95"
                            style={{ background: 'linear-gradient(135deg, #444444, #111111)', border: '1px solid #888888', animation: 'pulse-ios 2.3s infinite' }}
                        >
                            <span className="text-white text-[16px] font-[900] mb-1">🍎 아이폰(iOS)</span>
                            <span className="text-[rgba(255,255,255,0.8)] text-[12px] font-[600]">앱 다운로드</span>
                        </Link>
                    </div>
                </div>

                {/* 경고 텍스트 */}
                <div 
                    className="text-center text-[#ffcc00] text-[15px] font-[800] mt-1 mb-8 bg-[#221100] py-3 px-4 rounded-xl border border-[#aa5500]"
                    style={{ animation: 'blink 1.5s infinite', wordBreak: 'keep-all' }}
                >
                    ⚠️ 서버 접속 오류 방지를 위해, 미리 사용할 앱을 설치하고 반드시 로그인까지 완료해 두세요!
                </div>
                
                <CoupangAds 
                    keyword="망원경" 
                    title="📸 티켓팅 성공 후 필수품"
                    hookText="힘들게 구한 티켓, 내 가수를 더 가까이서 보고 싶다면? 고선명 망원경과 장시간 대기를 위한 고성능 보조배터리 특가 리스트입니다."
                />
            </div>
            
            <CountdownTimer />
        </div>
    );
}
