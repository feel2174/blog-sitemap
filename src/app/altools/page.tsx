import Link from 'next/link';
import React from 'react';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '알툴즈 (ALTools) 공식 다운로드 센터 - 알집, 알키퍼, 알PDF 등',
    description: '대한민국 대표 국민 유틸리티 알툴즈(ALTools) 제품군의 공식 다운로드 안내 페이지입니다.',
};

export default function AltoolsPage() {
    const products = [
        { name: '알집 (ALZip)', icon: '📦', url: 'https://altools.co.kr/product/ALZIP', desc: '국민 압축 프로그램' },
        { name: '알캡처 (ALCapture)', icon: '📸', url: 'https://altools.co.kr/product/ALCAPTURE', desc: '쉽고 빠른 화면 캡처' },
        { name: '알드라이브 (ALDrive)', icon: '☁️', url: 'https://altools.co.kr/product/ALDRIVE', desc: '편리한 파일 전송 (FTP)' },
        { name: '알PDF (ALPDF)', icon: '📄', url: 'https://altools.co.kr/product/ALPDF', desc: '통합 PDF 뷰어 및 편집' },
        { name: '알씨 (ALSee)', icon: '🖼️', url: 'https://altools.co.kr/product/ALSEE', desc: '국민 이미지 뷰어' },
        { name: '알송 (ALSong)', icon: '🎵', url: 'https://altools.co.kr/product/ALSONG', desc: '가사가 보이는 음악 플레이어' },
        { name: '알약 (ALYac)', icon: '💊', url: 'https://altools.co.kr/product/ALYAC', desc: '강력한 PC/모바일 백신' },
        { name: '피크닉 (Picnic)', icon: '🪄', url: 'https://altools.co.kr/product/PICNIC', desc: '흐린날도 맑게, 사진 편집' },
        { name: '알탭 (ALTab)', icon: '📑', url: 'https://altools.co.kr/product/ALTAB', desc: '편리한 탭 브라우징' },
        { name: '알펜 (ALPen)', icon: '🖊️', url: 'https://altools.co.kr/product/ALPEN', desc: '자유로운 화면 필기' },
        { name: '알클립 (ALClip)', icon: '📋', url: 'https://altools.co.kr/product/ALCLIP', desc: '스마트한 클립보드 관리' },
    ];

    return (
        <div
            className="min-h-screen bg-[#F8F9FA] text-slate-800 py-12 px-4 flex flex-col items-center"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            {/* Header */}
            <div className="w-full max-w-4xl text-center mb-12 mt-4">
                <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-white rounded-[24px] flex items-center justify-center shadow-sm border border-slate-200">
                        {/* 이스트소프트/알툴즈 상징 느낌의 푸른 계열 아이콘 */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                        </svg>
                    </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#1E293B] tracking-tight mb-3">
                    ALTools 다운로드 센터
                </h1>
                <p className="text-slate-500 font-medium text-sm md:text-base break-keep">
                    PC 환경을 더 빠르고 편리하게! 대한민국 대표 유틸리티를 지금 만나보세요.
                </p>
            </div>

            {/* Grid Container */}
            <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {products.map((product, idx) => (
                    <Link 
                        href={product.url} 
                        key={idx}
                        className="group bg-white p-5 rounded-3xl shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-md hover:border-blue-400 hover:-translate-y-1 flex flex-col items-center text-center gap-3 relative overflow-hidden"
                    >
                        {/* Hover Gradient Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/0 to-blue-50/80 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        <div className="text-4xl md:text-5xl mb-1 relative z-10 group-hover:scale-110 transition-transform duration-300">
                            {product.icon}
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-[17px] font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                                {product.name}
                            </h2>
                            <p className="text-[12px] text-slate-500 font-medium break-keep">
                                {product.desc}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Information Banner */}
            <div className="w-full max-w-4xl mt-12 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-slate-600 text-sm leading-relaxed flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                <p>
                    <strong className="text-slate-800">공식 안심 다운로드</strong><br />
                    본 안내 페이지의 모든 링크는 (주)이스트소프트 알툴즈 공식 웹사이트 상품 페이지로 바로 연결됩니다. 
                    각종 애드웨어나 변조된 악성 프로그램 걱정 없이 공식 홈페이지에서 최신 버전의 소프트웨어를 
                    안전하게 바로 다운로드하여 사용하실 수 있습니다.
                </p>
            </div>

            <CoupangAds 
                keyword="PC 부품" 
                title="⚙️ PC 속도를 더 빠르게!"
                hookText="소프트웨어 관리만큼 하드웨어 업그레이드도 중요합니다. 내 컴퓨터 성능을 한 단계 높여줄 가성비 SSD, RAM부터 먼지 제거 스프레이까지 지금 확인하세요."
            />

            {/* Footer */}
            <div className="mt-16 text-slate-400 text-xs text-center pb-8">
                <p>Copyright © ALTools Download Center. All rights reserved.</p>
            </div>
            
        </div>
    );
}
