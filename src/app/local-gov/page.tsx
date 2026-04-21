import Link from 'next/link';
import GovSearchClient from './GovSearchClient';
import SupportTable from './SupportTable';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '전국 주요 시/도청 민생지원금 바로가기 가이드',
    description: '전국 주요 시/도청 홈페이지로 바로 연결되는 간편 가이드. 서울시청, 경기도청 등 각 시도 관청에서 민생지원금 정보를 확인하세요.',
};

export default function LocalGovLandingPage() {
    return (
        <div
            className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col items-center px-6 py-8 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Soft Background Layer */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-10 pointer-events-none grayscale"
                style={{ backgroundImage: 'url("/local-gov-bg.png")' }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-[#f8fafc] z-[1]" />

            <div className="relative z-10 w-full max-w-2xl text-center">

                {/* Header Section */}
                <div className="mb-8">

                  

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
                        <span className="text-slate-900">2026 고유가피해지원금</span><br />
                        <span className="text-blue-600">지역별 안내 바로가기</span>
                    </h1>

                    <style>{`
                        @keyframes scalePulse {
                            0%, 100% { transform: scale(0.95); }
                            50% { transform: scale(1.05); }
                        }
                        .animate-scale-pulse {
                            animation: scalePulse 1.2s infinite ease-in-out;
                            will-change: transform;
                        }
                        .animate-scale-pulse:hover {
                            animation: none;
                            transform: scale(1.05);
                        }
                    `}</style>
                    <Link href="https://www.ips.go.kr/pot/forwardMain.do" className="inline-flex flex-row items-center justify-center w-full p-4 mb-8 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-200/50 transition-all active:scale-95 ring-4 ring-white/50 group animate-scale-pulse">
                        <span className="text-xl mr-2 flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                            </span>
                            지원금 놓치지 않게 알림 신청하기
                        </span>
                        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>  

                </div>

                <SupportTable />

                <GovSearchClient />



                {/* Footer Section */}
                <footer className="mt-20">
                    <div className="flex flex-col items-center gap-6">
                        <p className="text-slate-400 text-[10px] leading-relaxed max-w-[280px] mx-auto font-bold uppercase tracking-[0.2em] opacity-60 text-center">
                            Official Administration Portal
                        </p>

                        <div className="flex gap-2 flex-wrap justify-center opacity-30 pointer-events-none">
                            {/* Symbolish icons Placeholder or Text */}
                            <span className="text-[10px] font-mono">GOV.KR | LOCAL.GOV</span>
                        </div>
                    </div>
                </footer>

                <CoupangAds 
                    keyword="사무용품" 
                    title="📎 완벽한 업무 효율을 위해"
                    hookText="민생 지원 정보 꼼꼼히 챙기고, 일상의 효율도 높여보세요! 책상 위를 깔끔하게 정리해줄 데스크테리어 아이템과 필수 사무용품 추천 리스트입니다."
                />
            </div>
        </div>
    );
}
