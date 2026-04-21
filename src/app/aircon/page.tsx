import Link from 'next/link';
import React from 'react';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '에어컨 사전점검 및 고객센터 안내',
    description: '삼성에어컨, LG에어컨, 케리어에어컨 사전점검 신청 및 고객센터 안내.',
};

export default function AirconLandingPage() {
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
                    @keyframes pulse-samsung {
                        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(20, 40, 160, 0.4); }
                        70% { transform: scale(1.02); box-shadow: 0 0 0 12px rgba(20, 40, 160, 0); }
                        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(20, 40, 160, 0); }
                    }
                    @keyframes pulse-lg {
                        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(165, 0, 52, 0.4); }
                        70% { transform: scale(1.02); box-shadow: 0 0 0 12px rgba(165, 0, 52, 0); }
                        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(165, 0, 52, 0); }
                    }
                    @keyframes pulse-carrier {
                        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 85, 150, 0.4); }
                        70% { transform: scale(1.02); box-shadow: 0 0 0 12px rgba(0, 85, 150, 0); }
                        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 85, 150, 0); }
                    }
                `}} />

                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-cyan-400 tracking-tighter mb-2 italic drop-shadow-lg">
                        여름대비 에어컨
                    </h1>
                    <p className="text-zinc-300 text-sm md:text-base font-medium">
                        브랜드별 에어컨 안내 서비스
                    </p>
                </div>

                {/* Information Links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '30px 0' }}>
                    
                    {/* 삼성 에어컨 사전점검 */}
                    <div style={{ backgroundColor: '#1428A0', borderRadius: '12px', textAlign: 'center', animation: 'pulse-samsung 2s infinite', padding: '18px' }}>
                        <Link href="https://www.samsungsvc.co.kr/solution/2002378" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            삼성에어컨 사전점검 신청
                        </Link>
                    </div>

                    {/* LG 에어컨 사전점검 */}
                    <div style={{ backgroundColor: '#A50034', borderRadius: '12px', textAlign: 'center', animation: 'pulse-lg 2s infinite', padding: '18px', animationDelay: '0.2s' }}>
                        <Link href="https://www.lge.co.kr/support/service-engineer-reservation" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            LG에어컨 사전점검 신청
                        </Link>
                    </div>

                    {/* 케리어 에어컨 사전점검 */}
                    <div style={{ backgroundColor: '#005596', borderRadius: '12px', textAlign: 'center', animation: 'pulse-carrier 2s infinite', padding: '18px', animationDelay: '0.4s' }}>
                        <Link href="https://www.carrier.co.kr/support/as/call.asp" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                            케리어에어컨 사전점검 신청
                        </Link>
                    </div>

                    <div className="mt-8 border-t border-zinc-700 pt-8" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <h2 className="text-xl font-bold text-white mb-2">고객센터 페이지</h2>
                        
                        <div style={{ backgroundColor: '#1428A0', borderRadius: '12px', textAlign: 'center', animation: 'pulse-samsung 2s infinite', padding: '18px', opacity: 0.9 }}>
                            <Link href="https://www.samsungsvc.co.kr/solution/2002378" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                                삼성에어컨 고객센터 가기
                            </Link>
                        </div>
                        
                        <div style={{ backgroundColor: '#A50034', borderRadius: '12px', textAlign: 'center', animation: 'pulse-lg 2s infinite', padding: '18px', opacity: 0.9, animationDelay: '0.2s' }}>
                            <Link href="https://www.lge.co.kr/support/service-engineer-reservation" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                                LG에어컨 고객센터 가기
                            </Link>
                        </div>

                        <div style={{ backgroundColor: '#005596', borderRadius: '12px', textAlign: 'center', animation: 'pulse-carrier 2s infinite', padding: '18px', opacity: 0.9, animationDelay: '0.4s' }}>
                            <Link href="https://www.carrier.co.kr/support/as/call.asp" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}>
                                케리어에어컨 고객센터 가기
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Footer Info */}
                <div className="mt-16 text-zinc-500 text-xs leading-relaxed">
                    <p className="mt-2 text-zinc-600">
                        에어컨 사전점검으로 다가오는 여름을 <br className="md:hidden" /> 시원하게 준비하세요.
                    </p>
                </div>
                
                <CoupangAds 
                    keyword="에어컨 세정제" 
                    title="🌬️ 상쾌한 여름을 위한 에어컨 케어"
                    hookText="에어컨 켜기 전 필수 체크! 퀘퀘한 냄새 잡는 전용 세정제와 자가 교체용 항균 필터, 실외기 커버 특가 리스트입니다."
                />
            </div>
        </div>
    );
}
