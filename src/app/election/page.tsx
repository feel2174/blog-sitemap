import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '2026 지방선거 단기 꿀알바 채용공고 모음',
    description: '개표사무원, 선거운동원, 여론조사 요원 등 지방선거철 한정 단기 알바 채용 정보 바로가기',
};

export default function ElectionJobLandingPage() {
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
                    @keyframes pulse-election { 
                        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.6); } 
                        50% { transform: scale(1.03); box-shadow: 0 0 0 20px rgba(79, 70, 229, 0); } 
                        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); } 
                    }
                `}} />

                {/* Header */}
                <div className="mb-12">
                    <span style={{ display: 'inline-block', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#fff', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.2)' }}>
                        #단기알바 #투잡 #선거시즌
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-[#818CF8] tracking-tighter mb-4 italic drop-shadow-lg leading-tight">
                        2026 지방선거<br />단기 꿀알바 채용관
                    </h1>
                    <p className="text-zinc-300 text-sm md:text-base font-medium leading-relaxed">
                        선거철에만 바짝 일하고 고수익 벌어가세요!<br />
                        개표사무원, 안내요원, 선거운동원 공고 모음
                    </p>
                </div>

                {/* Information Links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '30px 0' }}>
                    
                    {/* 알바 사이트 1 (알바몬 연동) */}
                    <div style={{ backgroundColor: '#2563EB', borderRadius: '16px', textAlign: 'center', animation: 'pulse-election 2.5s infinite', padding: '20px', border: '1px solid #3B82F6', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)', pointerEvents: 'none' }}></div>
                        <Link href="https://www.albamon.com/total-search?keyword=%EC%84%A0%EA%B1%B0" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '900', fontSize: '18px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
                            <span style={{ fontSize: '1.2rem' }}>✅ 선거운동원 / 유세차량 공고 보기</span>
                            <span style={{ fontSize: '0.8rem', fontWeight: 'normal', color: '#BFDBFE' }}>가장 많은 단기 알바 리스트 확인하기</span>
                        </Link>
                    </div>

                    {/* 알바 사이트 2 (알바천국 연동) */}
                    <div style={{ backgroundColor: '#059669', borderRadius: '16px', textAlign: 'center', padding: '20px', border: '1px solid #10B981', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)', pointerEvents: 'none' }}></div>
                        <Link href="https://www.alba.co.kr/search/Search?section=ALL&srchType=ALL&clsType=search&EasySearch=mainSearch&wsSrchWord=%EC%84%A0%EA%B1%B0" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '900', fontSize: '18px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
                            <span style={{ fontSize: '1.2rem' }}>✅ 개표사무원 / 여론조사 요원 보기</span>
                            <span style={{ fontSize: '0.8rem', fontWeight: 'normal', color: '#A7F3D0' }}>최신 등록된 꿀알바 공고 바로가기</span>
                        </Link>
                    </div>

                    {/* 공식 선관위 연동 */}
                    <div style={{ backgroundColor: '#4B5563', borderRadius: '16px', textAlign: 'center', padding: '20px', border: '1px solid #6B7280', marginTop: '10px' }}>
                        <Link href="https://www.nec.go.kr/site/nec/main.do" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '800', fontSize: '17px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            <span>🏛️ 중앙선거관리위원회 공식 채용공고</span>
                        </Link>
                    </div>

                </div>

                {/* Footer Info */}
                <div className="mt-16 border-t border-zinc-800 pt-8 text-zinc-500 text-xs leading-relaxed">
                    <p className="text-zinc-400 font-bold mb-2">💡 어떤 일을 하나요?</p>
                    <ul style={{ listStyle: 'none', margin: 0, textAlign: 'left', display: 'inline-block', backgroundColor: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                        <li style={{ marginBottom: '0.5rem' }}>✔️ <strong>투·개표 사무원:</strong> 투표소 안내 및 개표 보조 (수당 지급)</li>
                        <li style={{ marginBottom: '0.5rem' }}>✔️ <strong>선거운동원:</strong> 유세차량 탑승 및 지정 장소 선거운동</li>
                        <li>✔️ <strong>여론조사 요원:</strong> 리서치 기관 단기 콜센터 업무</li>
                    </ul>
                    <p className="mt-6 text-zinc-600">
                        공고가 빠르게 마감되니 미리 확인하고 지원하세요.
                    </p>
                </div>
            </div>
        </div>
    );
}
