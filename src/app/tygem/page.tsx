import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '타이젬 바둑 바로가기 및 모바일 앱 다운로드',
    description: '타이젬 바둑 바로가기 및 안드로이드, 아이폰 앱 다운로드 링크.',
};

export default function TygemLandingPage() {
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
                `}} />

                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-[#F97316] tracking-tighter mb-2 italic drop-shadow-lg">
                        TYGEM
                    </h1>
                    <p className="text-zinc-400 text-sm md:text-base font-medium">
                        타이젬 바둑 바로가기 및 앱 다운로드
                    </p>
                </div>

                {/* Download links structured based on user request */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '30px 0' }}>
                    
                    {/* 타이젬 바둑 바로가기 */}
                    <div style={{ backgroundColor: 'red', borderRadius: '12px', textAlign: 'center', animation: 'pulse-nhis 2s infinite', padding: '18px' }}>
                        <Link href="https://www.tygem.com/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            타이젬 바둑 바로가기
                        </Link>
                    </div>

                    {/* 타이젬바둑&오목 앱 다운로드 */}
                    <div style={{ backgroundColor: 'red', borderRadius: '12px', textAlign: 'center', animation: 'pulse-nhis 2s infinite', padding: '18px', animationDelay: '0.1s' }}>
                        <Link href="https://play.google.com/store/apps/details?id=com.tyo.lite.tygem&hl=ko" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            타이젬바둑&오목 앱 다운로드
                        </Link>
                    </div>

                    {/* 타이젬 바둑 앱 다운로드 */}
                    <div style={{ backgroundColor: 'red', borderRadius: '12px', textAlign: 'center', animation: 'pulse-nhis 2s infinite', padding: '18px', animationDelay: '0.2s' }}>
                        <Link href="https://play.google.com/store/apps/details?id=com.tyo.tygem&hl=ko" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            타이젬 바둑 앱 다운로드
                        </Link>
                    </div>

                    {/* 타이젬 바둑 아이폰 앱 다운로드 */}
                    <div style={{ backgroundColor: 'red', borderRadius: '12px', textAlign: 'center', animation: 'pulse-nhis 2s infinite', padding: '18px', animationDelay: '0.3s' }}>
                        <Link href="https://apps.apple.com/kr/app/%ED%83%80%EC%9D%B4%EC%A0%AC-%EB%B0%94%EB%91%91-%ED%94%84%EB%A1%9C-%EB%B2%A0%ED%8C%85-%EB%8C%80%EA%B5%AD-%EC%83%9D%EC%A4%91%EA%B3%84/id634756931" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            타이젬 바둑 아이폰 앱 다운로드
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
