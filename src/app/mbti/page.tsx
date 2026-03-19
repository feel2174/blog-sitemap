import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'MBTI 및 각종 심리 테스트 모음',
    description: 'MBTI 무료 성격 테스트, 연애성향 테스트, 공무원 직렬 테스트, 번아웃 테스트 바로가기 모음',
};

export default function MBTILandingPage() {
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
                    @keyframes pulse-mbti {
                        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(138, 43, 226, 0.4); }
                        70% { transform: scale(1.02); box-shadow: 0 0 0 12px rgba(138, 43, 226, 0); }
                        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(138, 43, 226, 0); }
                    }
                    @keyframes pulse-dating {
                        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 105, 180, 0.4); }
                        70% { transform: scale(1.02); box-shadow: 0 0 0 12px rgba(255, 105, 180, 0); }
                        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 105, 180, 0); }
                    }
                    @keyframes pulse-gong {
                        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(30, 144, 255, 0.4); }
                        70% { transform: scale(1.02); box-shadow: 0 0 0 12px rgba(30, 144, 255, 0); }
                        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(30, 144, 255, 0); }
                    }
                    @keyframes pulse-burnout {
                        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 69, 0, 0.4); }
                        70% { transform: scale(1.02); box-shadow: 0 0 0 12px rgba(255, 69, 0, 0); }
                        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 69, 0, 0); }
                    }
                `}} />

                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-purple-400 tracking-tighter mb-2 italic drop-shadow-lg">
                        PERSONALITY
                    </h1>
                    <p className="text-zinc-300 text-sm md:text-base font-medium">
                        나를 알아보는 다양한 심리 테스트
                    </p>
                </div>

                {/* Information Links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '30px 0' }}>
                    
                    {/* MBTI 무료 성격 테스트 */}
                    <div style={{ backgroundColor: '#8A2BE2', borderRadius: '12px', textAlign: 'center', animation: 'pulse-mbti 2s infinite', padding: '18px' }}>
                        <Link href="https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            MBTI 무료 성격 테스트
                        </Link>
                    </div>

                    {/* 연애성향 MBTI 테스트 */}
                    <div style={{ backgroundColor: '#FF69B4', borderRadius: '12px', textAlign: 'center', animation: 'pulse-dating 2s infinite', padding: '18px', animationDelay: '0.2s' }}>
                        <Link href="https://mind.zucca100.com/dating" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            연애성향 MBTI 테스트
                        </Link>
                    </div>

                    {/* 공무원 직렬 테스트 */}
                    <div style={{ backgroundColor: '#1E90FF', borderRadius: '12px', textAlign: 'center', animation: 'pulse-gong 2s infinite', padding: '18px', animationDelay: '0.4s' }}>
                        <Link href="https://mind.zucca100.com/gongmuwon" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            공무원 직렬 테스트
                        </Link>
                    </div>

                    {/* 번아웃 테스트 */}
                    <div style={{ backgroundColor: '#FF4500', borderRadius: '12px', textAlign: 'center', animation: 'pulse-burnout 2s infinite', padding: '18px', animationDelay: '0.6s' }}>
                        <Link href="https://mind.zucca100.com/burnout" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            나의 번아웃 테스트
                        </Link>
                    </div>
                </div>

                {/* Footer Info */}
                <div className="mt-16 text-zinc-500 text-xs leading-relaxed">
                    <p className="mt-2 text-zinc-600">
                        간단한 검사로 나의 진짜 성향을 <br className="md:hidden" /> 찾아보세요.
                    </p>
                </div>
            </div>
        </div>
    );
}
