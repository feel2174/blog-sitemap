import Link from 'next/link';
import GovSearchClient from './GovSearchClient';
import SupportTable from './SupportTable';

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
            </div>
        </div>
    );
}
