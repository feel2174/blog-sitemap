import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '피망 게임 바로가기',
    description: '피망 뉴맞고, 맞고, 고스톱, 바둑, 섯다 바로가기 링크',
};

export default function PmangLandingPage() {
    return (
        <div
            className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Cinematic Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-60 scale-105"
                style={{ backgroundImage: 'url("/netflix-bg.png")', filter: 'grayscale(50%)' }}
            />

            {/* Background Overlays and Gradients */}
            <div className="absolute inset-0 bg-black/60 z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-[2]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-[2]" />

            <div className="relative z-10 w-full max-w-md text-center">
                {/* CSS Animations */}
                <style dangerouslySetInnerHTML={{__html: `
                    @keyframes pulse-nhis {
                        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 78, 162, 0.4); }
                        70% { transform: scale(1.02); box-shadow: 0 0 0 12px rgba(0, 78, 162, 0); }
                        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 78, 162, 0); }
                    }
                `}} />

                {/* Pmang Title / Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-[#E50914] tracking-tighter mb-2 italic drop-shadow-lg">
                        PMANG
                    </h1>
                    <p className="text-zinc-400 text-sm md:text-base font-medium">
                        피망 모바일 & PC 바로가기
                    </p>
                </div>

                {/* Download links structured based on user request */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '30px 0' }}>
                    
                    <div style={{ backgroundColor: 'red', borderRadius: '12px', textAlign: 'center', animation: 'pulse-nhis 2s infinite', padding: '18px' }}>
                        <Link href="https://gostop.pmang.com/newmatgo" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            피망뉴맞고 바로가기
                        </Link>
                    </div>

                    <div style={{ backgroundColor: 'red', borderRadius: '12px', textAlign: 'center', animation: 'pulse-nhis 2s infinite', padding: '18px', animationDelay: '0.1s' }}>
                        <Link href="https://gostop.pmang.com/matgo" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            피망 맞고 바로가기
                        </Link>
                    </div>

                    <div style={{ backgroundColor: 'red', borderRadius: '12px', textAlign: 'center', animation: 'pulse-nhis 2s infinite', padding: '18px', animationDelay: '0.2s' }}>
                        <Link href="https://gostop.pmang.com/gostop" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            피망 고스톱 바로가기
                        </Link>
                    </div>

                    <div style={{ backgroundColor: 'red', borderRadius: '12px', textAlign: 'center', animation: 'pulse-nhis 2s infinite', padding: '18px', animationDelay: '0.3s' }}>
                        <Link href="https://board.pmang.com/baduk_top.nwz" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            피망 바둑 바로가기
                        </Link>
                    </div>

                    <div style={{ backgroundColor: 'red', borderRadius: '12px', textAlign: 'center', animation: 'pulse-nhis 2s infinite', padding: '18px', animationDelay: '0.4s' }}>
                        <Link href="https://sudda.pmang.com/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            피망 섯다 바로가기
                        </Link>
                    </div>

                </div>

                {/* Footer Info */}
                <div className="mt-16 text-zinc-500 text-xs leading-relaxed">
                    <p className="mt-2 text-zinc-600">
                        바로가기 링크를 선택하시면 <br className="md:hidden" /> 해당 서비스로 이동합니다.
                    </p>
                </div>
            </div>
        </div>
    );
}
