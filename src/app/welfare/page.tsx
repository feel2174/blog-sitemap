import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '복지서비스 모의계산',
    description: '기초연금, 교육비, 국민기초생활보장 등 복지로 모의계산 바로가기',
};

export default function WelfareLandingPage() {
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
            <div className="absolute inset-0 bg-black/70 z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-[2]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-[2]" />

            <div className="relative z-10 w-full max-w-md text-center py-10">
                {/* CSS Animations */}
                <style dangerouslySetInnerHTML={{__html: `
                    @keyframes pulse-c1 { 0% { box-shadow: 0 0 0 0 rgba(33, 150, 243, 0.4); } 70% { box-shadow: 0 0 0 12px rgba(33, 150, 243, 0); } 100% { box-shadow: 0 0 0 0 rgba(33, 150, 243, 0); } }
                    @keyframes pulse-c2 { 0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4); } 70% { box-shadow: 0 0 0 12px rgba(76, 175, 80, 0); } 100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); } }
                    @keyframes pulse-c3 { 0% { box-shadow: 0 0 0 0 rgba(156, 39, 176, 0.4); } 70% { box-shadow: 0 0 0 12px rgba(156, 39, 176, 0); } 100% { box-shadow: 0 0 0 0 rgba(156, 39, 176, 0); } }
                    @keyframes pulse-c4 { 0% { box-shadow: 0 0 0 0 rgba(255, 152, 0, 0.4); } 70% { box-shadow: 0 0 0 12px rgba(255, 152, 0, 0); } 100% { box-shadow: 0 0 0 0 rgba(255, 152, 0, 0); } }
                    @keyframes pulse-c5 { 0% { box-shadow: 0 0 0 0 rgba(233, 30, 99, 0.4); } 70% { box-shadow: 0 0 0 12px rgba(233, 30, 99, 0); } 100% { box-shadow: 0 0 0 0 rgba(233, 30, 99, 0); } }
                    @keyframes pulse-top { 0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(33, 150, 243, 0.6); } 50% { transform: scale(1.03); box-shadow: 0 0 0 20px rgba(33, 150, 243, 0); } 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(33, 150, 243, 0); } }
                `}} />

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-black text-[#64B5F6] tracking-tighter mb-2 italic drop-shadow-lg">
                        복지서비스
                    </h1>
                    <p className="text-zinc-300 text-sm md:text-base font-medium">
                        맞춤형 복지서비스 모의계산
                    </p>
                </div>

                {/* Information Links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '20px 0' }}>
                    
                    {/* 최상단 강조 - 기초연금 */}
                    <div style={{ backgroundColor: '#1976D2', borderRadius: '12px', textAlign: 'center', animation: 'pulse-top 2s infinite', padding: '22px', border: '2px solid #64B5F6', marginBottom: '10px' }}>
                        <Link href="https://www.bokjiro.go.kr/ssis-tbu/twatbz/mkclAsis/mkclInsertBspnPage.do" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '900', fontSize: '20px', display: 'block' }}>
                            ⭐ 기초연금 모의계산 바로가기
                        </Link>
                    </div>

                    {/* 초중고 교육비지원 */}
                    <div style={{ backgroundColor: '#388E3C', borderRadius: '12px', textAlign: 'center', animation: 'pulse-c2 2.5s infinite', padding: '16px', animationDelay: '0.1s' }}>
                        <Link href="https://www.bokjiro.go.kr/ssis-tbu/twatbz/mkclAsis/mkclInsertEmhecsPage.do" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px', display: 'block' }}>
                            초중고 교육비지원 모의계산
                        </Link>
                    </div>

                    {/* 장애(아동)수당 */}
                    <div style={{ backgroundColor: '#7B1FA2', borderRadius: '12px', textAlign: 'center', animation: 'pulse-c3 2.5s infinite', padding: '16px', animationDelay: '0.2s' }}>
                        <Link href="https://www.bokjiro.go.kr/ssis-tbu/twatbz/mkclAsis/mkclInsertDscaPage.do" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px', display: 'block' }}>
                            장애(아동)수당 모의계산
                        </Link>
                    </div>

                    {/* 국민기초생활보장 */}
                    <div style={{ backgroundColor: '#F57C00', borderRadius: '12px', textAlign: 'center', animation: 'pulse-c4 2.5s infinite', padding: '16px', animationDelay: '0.3s' }}>
                        <Link href="https://www.bokjiro.go.kr/ssis-tbu/twatbz/mkclAsis/mkclInsertDscaPage.do" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px', display: 'block' }}>
                            국민기초생활보장 모의계산
                        </Link>
                    </div>

                    {/* 장애인연금 */}
                    <div style={{ backgroundColor: '#C2185B', borderRadius: '12px', textAlign: 'center', animation: 'pulse-c5 2.5s infinite', padding: '16px', animationDelay: '0.4s' }}>
                        <Link href="https://www.bokjiro.go.kr/ssis-tbu/twatbz/mkclAsis/mkclInsertDscaPage.do" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px', display: 'block' }}>
                            장애인연금 모의계산
                        </Link>
                    </div>

                    {/* 한부모 가족지원 */}
                    <div style={{ backgroundColor: '#1976D2', borderRadius: '12px', textAlign: 'center', animation: 'pulse-c1 2.5s infinite', padding: '16px', animationDelay: '0.5s' }}>
                        <Link href="https://www.bokjiro.go.kr/ssis-tbu/twatbz/mkclAsis/mkclInsertOprnPage.do" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px', display: 'block' }}>
                            한부모 가족지원 모의계산
                        </Link>
                    </div>

                    {/* 산모신생아 건강관리 */}
                    <div style={{ backgroundColor: '#388E3C', borderRadius: '12px', textAlign: 'center', animation: 'pulse-c2 2.5s infinite', padding: '16px', animationDelay: '0.6s' }}>
                        <Link href="https://www.bokjiro.go.kr/ssis-tbu/twatbz/mkclAsis/mkclInsertPwnbPage.do" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px', display: 'block' }}>
                            산모신생아 건강관리 모의계산
                        </Link>
                    </div>

                    {/* 아이돌봄 서비스 */}
                    <div style={{ backgroundColor: '#7B1FA2', borderRadius: '12px', textAlign: 'center', animation: 'pulse-c3 2.5s infinite', padding: '16px', animationDelay: '0.7s' }}>
                        <Link href="https://www.bokjiro.go.kr/ssis-tbu/twatbz/mkclAsis/mkclInsertCcsvPage.do" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px', display: 'block' }}>
                            아이돌봄 서비스 모의계산
                        </Link>
                    </div>

                    {/* 청년월세지원 */}
                    <div style={{ backgroundColor: '#F57C00', borderRadius: '12px', textAlign: 'center', animation: 'pulse-c4 2.5s infinite', padding: '16px', animationDelay: '0.8s' }}>
                        <Link href="https://www.bokjiro.go.kr/ssis-tbu/twatbz/mkclAsis/SelfDiagnosisYouthHousView.do" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px', display: 'block' }}>
                            청년월세지원 모의계산
                        </Link>
                    </div>

                    {/* 자산형성지원 */}
                    <div style={{ backgroundColor: '#C2185B', borderRadius: '12px', textAlign: 'center', animation: 'pulse-c5 2.5s infinite', padding: '16px', animationDelay: '0.9s' }}>
                        <Link href="https://www.bokjiro.go.kr/ssis-tbu/twatbz/mkclAsis/mkclAstfmSpbizPage.do" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '17px', display: 'block' }}>
                            자산형성지원 모의계산
                        </Link>
                    </div>

                </div>

                {/* Footer Info */}
                <div className="mt-12 text-zinc-500 text-xs leading-relaxed">
                    <p className="mt-2 text-zinc-600">
                        나와 가족을 위한 복지혜택 혜택 여부를 <br className="md:hidden" /> 미리 확인해 보세요.
                    </p>
                </div>
            </div>
        </div>
    );
}
