import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '한게임 모바일 앱 다운로드 센터',
    description: '한게임 바둑, 포커, 신맞고, 섯다 앱 다운로드 및 바로가기 링크.',
};

export default function HangameLandingPage() {
    return (
        <div
            className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Cinematic Background Image (optional grayscale filter or solid background) */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-60 scale-105"
                style={{ backgroundImage: 'url("/netflix-bg.png")', filter: 'grayscale(50%)' }}
            />

            {/* Background Overlays and Gradients */}
            <div className="absolute inset-0 bg-black/60 z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-[2]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-[2]" />

            <div className="relative z-10 w-full max-w-md text-center">
                {/* CSS Animations provided by the user */}
                <style dangerouslySetInnerHTML={{__html: `
                    @keyframes pulse-nhis {
                        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 78, 162, 0.4); }
                        70% { transform: scale(1.02); box-shadow: 0 0 0 12px rgba(0, 78, 162, 0); }
                        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 78, 162, 0); }
                    }
                    @keyframes pulse-app {
                        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(15, 157, 88, 0.4); }
                        70% { transform: scale(1.02); box-shadow: 0 0 0 12px rgba(15, 157, 88, 0); }
                        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(15, 157, 88, 0); }
                    }
                    @keyframes pulse-gov {
                        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(51, 51, 51, 0.4); }
                        70% { transform: scale(1.02); box-shadow: 0 0 0 12px rgba(51, 51, 51, 0); }
                        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(51, 51, 51, 0); }
                    }
                    @keyframes pulse-poker {
                        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(229, 9, 20, 0.4); }
                        70% { transform: scale(1.02); box-shadow: 0 0 0 12px rgba(229, 9, 20, 0); }
                        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(229, 9, 20, 0); }
                    }
                `}} />

                {/* Hangame Title / Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-[#F97316] tracking-tighter mb-2 italic drop-shadow-lg">
                        HANGAME
                    </h1>
                    <p className="text-zinc-400 text-sm md:text-base font-medium">
                        한게임 모바일 앱 다운로드 센터
                    </p>
                </div>

                {/* Download links structured based on user request */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '30px 0' }}>
                    
                    {/* 한게임 바둑 바로가기 */}
                    <div style={{ backgroundColor: 'red', borderRadius: '12px', textAlign: 'center', animation: 'pulse-nhis 2s infinite', padding: '18px' }}>
                        <Link href="https://baduk.hangame.com/?utm_source=baduk&utm_medium=gamelist&utm_campaign=main" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            한게임 바둑 바로가기
                        </Link>
                    </div>

                    {/* 한게임 장기 바로가기 */}
                    <div style={{ backgroundColor: 'red', borderRadius: '12px', textAlign: 'center', animation: 'pulse-nhis 2s infinite', padding: '18px', animationDelay: '0.1s' }}>
                        <Link href="https://janggi.hangame.com/?utm_source=janggi&utm_medium=gamelist&utm_campaign=main" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            한게임 장기 바로가기
                        </Link>
                    </div>

                    {/* 한게임 바로가기 */}
                    <div style={{ backgroundColor: 'red', borderRadius: '12px', textAlign: 'center', animation: 'pulse-nhis 2s infinite', padding: '18px', animationDelay: '0.2s' }}>
                        <Link href="https://www.hangame.com/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            한게임 바로가기
                        </Link>
                    </div>

                    {/* 1. 한게임 바둑 안드로이드 앱 다운로드 */}
                    <div style={{ backgroundColor: 'red', borderRadius: '12px', textAlign: 'center', animation: 'pulse-nhis 2s infinite', padding: '18px', animationDelay: '0.3s' }}>
                        <Link href="https://play.google.com/store/apps/details?id=com.nhnent.HanBaduk&hl=ko" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            한게임 바둑 안드로이드 앱 다운로드
                        </Link>
                    </div>

                    {/* 2. 한게임 바둑 아이폰 앱 다운로드 */}
                    <div style={{ backgroundColor: 'red', borderRadius: '12px', textAlign: 'center', animation: 'pulse-nhis 2s infinite', padding: '18px', animationDelay: '0.2s' }}>
                        <Link href="https://apps.apple.com/kr/app/%ED%95%9C%EA%B2%8C%EC%9E%84-%EC%98%A4%EB%AA%A9-%EB%B0%94%EB%91%91/id1626424869" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            한게임 바둑 아이폰 앱 다운로드
                        </Link>
                    </div>

                    {/* 3. 한게임 포커 */}
                    <div style={{ backgroundColor: '#E50914', borderRadius: '12px', textAlign: 'center', animation: 'pulse-poker 2s infinite', padding: '18px', animationDelay: '0.4s' }}>
                        <Link href="https://play.google.com/store/apps/details?id=com.nhnent.Qpoker" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            한게임 포커 앱 다운로드
                        </Link>
                    </div>

                    {/* 4. 한게임 신맞고 */}
                    <div style={{ backgroundColor: '#0F9D58', borderRadius: '12px', textAlign: 'center', animation: 'pulse-app 2s infinite', padding: '18px', animationDelay: '0.6s' }}>
                        <Link href="https://play.google.com/store/apps/details?id=com.NHNEnt.NDuelgo&pcampaignid=web_share" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            한게임 신맞고 앱 다운로드
                        </Link>
                    </div>

                    {/* 5. 한게임 섯다 */}
                    <div style={{ backgroundColor: '#333333', borderRadius: '12px', textAlign: 'center', animation: 'pulse-gov 2s infinite', padding: '18px', animationDelay: '0.8s' }}>
                        <Link href="https://play.google.com/store/apps/details?id=com.NHNEnt.MSudda&pcampaignid=web_share" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            한게임 섯다 앱 다운로드
                        </Link>
                    </div>

                </div>

                {/* Footer Info */}
                <div className="mt-16 text-zinc-500 text-xs leading-relaxed">
                    <p className="mt-2 text-zinc-600">
                        앱 설치 및 원활한 이용을 위해 <br className="md:hidden" /> 안정적인 네트워크 환경을 권장합니다.
                    </p>
                </div>
            </div>
        </div>
    );
}
