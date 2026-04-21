import React from 'react';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '안랩 V3 Lite & 무료백신 다운로드 | 공식 홈페이지 바로가기',
    description: '안랩(AhnLab)의 대표 백신 소프트웨어 V3 Lite와 V3 무료백신 제품의 공식 다운로드 링크를 제공합니다. 안전한 PC 환경을 위해 공식 홈페이지에서 최신 버전의 백신을 설치하세요.',
};

export default function V3Page() {
    const v3Products = [
        {
            name: 'V3 Lite (개인용 무료 백신)',
            desc: 'PC 보안의 표준, 가볍고 빠른 국민 백신. 랜섬웨어 차단부터 멀웨어 탐지까지 완벽하게 보호합니다.',
            icon: '🛡️',
            link: 'https://www.ahnlab.com/ko/product/v3-lite',
            features: ['랜섬웨어 정밀 검사', '클라우드 기반 탐지', 'PC 최적화 도구']
        },
        {
            name: '안랩 무료 다운로드 센터',
            desc: 'V3 제품군을 포함한 안랩의 다양한 무료 보안 툴을 한곳에서 쉽고 빠르게 내려받을 수 있습니다.',
            icon: '📥',
            link: 'https://www.ahnlab.com/ko/support/download/free',
            features: ['V3 Lite', 'V3 Mobile Plus', '전용 백신']
        }
    ];

    return (
        <div 
            className="min-h-screen bg-[#00479A]/5 text-[#1a1a1a] py-16 px-4 sm:px-6 flex flex-col items-center selection:bg-[#00479A] selection:text-white"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            {/* Header Section */}
            <div className="w-full max-w-5xl text-center mb-16">
                <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-[#00479A] blur-3xl opacity-20 rounded-full scale-110"></div>
                    <div className="relative inline-flex items-center justify-center p-6 bg-white rounded-[2rem] shadow-xl border border-blue-100 transform hover:-translate-y-2 transition-transform duration-500">
                        <span className="text-6xl">🛡️</span>
                    </div>
                </div>
                <h1 className="text-4xl sm:text-6xl font-black text-[#002B5C] tracking-tight mb-6 leading-tight">
                    대한민국 No.1 <br className="sm:hidden"/> <span className="text-[#00479A]">안랩 V3</span> 다운로드
                </h1>
                <p className="text-[#444] font-semibold text-lg sm:text-xl max-w-3xl mx-auto break-keep leading-relaxed opacity-90">
                    악성코드와 랜섬웨어로부터 내 PC를 안전하게 보호하세요. <br className="hidden sm:block"/>
                    안랩(AhnLab) 공식 홈페이지의 정식 다운로드 링크를 제공합니다.
                </p>
            </div>

            {/* Content Grids Container */}
            <div className="w-full max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {v3Products.map((product, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-[3rem] p-10 sm:p-12 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col justify-between group overflow-hidden relative"
                        >
                            {/* Decorative Background Element */}
                            <div className="absolute -right-10 -bottom-10 text-[200px] opacity-[0.03] select-none pointer-events-none group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 text-[#00479A]">
                                {product.icon}
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-20 h-20 bg-[#00479A] rounded-3xl flex items-center justify-center text-4xl shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-500">
                                        {product.icon}
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-black text-[#002B5C] leading-tight">
                                        {product.name}
                                    </h3>
                                </div>
                                <p className="text-[#555] mb-10 text-lg font-medium leading-relaxed max-w-md break-keep">
                                    {product.desc}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {product.features.map((feature, fIdx) => (
                                        <span key={fIdx} className="px-4 py-2 bg-blue-50 text-[#00479A] text-sm font-bold rounded-full border border-blue-100">
                                            #{feature}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10">
                                <a
                                    href={product.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center p-6 bg-[#00479A] hover:bg-[#002B5C] rounded-2xl text-white text-xl font-black transition-all duration-300 group/btn shadow-lg shadow-blue-900/10 active:scale-95"
                                >
                                    공식 다운로드 바로가기
                                    <svg className="ml-3 w-6 h-6 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M5 12h14m-7-7 7 7-7 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Important Tips Section */}
                <div className="bg-[#002B5C] rounded-[3.5rem] p-10 sm:p-16 text-white overflow-hidden relative shadow-2xl">
                    <div className="absolute right-[-5%] bottom-[-10%] opacity-10 rotate-12 scale-150 pointer-events-none select-none">
                        <span className="text-[250px]">🛡️</span>
                    </div>
                    
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                            <div>
                                <h3 className="text-3xl font-black mb-4 flex items-center gap-4">
                                    <span className="w-10 h-10 bg-white text-[#002B5C] rounded-xl flex items-center justify-center text-xl">✓</span>
                                    안전한 백신 이용 가이드
                                </h3>
                                <p className="text-blue-200 text-lg font-medium max-w-xl">
                                    보안의 첫걸음은 공식 소프트웨어를 사용하는 것입니다. <br className="hidden sm:block"/>
                                    아래 수칙을 준수하여 소중한 데이터를 보호하세요.
                                </p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
                            {[
                                {
                                    title: "공식 홈페이지 이용",
                                    desc: "반드시 안랩 공식 홈페이지를 통해 파일을 다운로드하세요. 블로그나 커뮤니티의 첨부파일은 위험할 수 있습니다."
                                },
                                {
                                    title: "정기적인 업데이트",
                                    desc: "변종 악성코드에 대응하기 위해 엔진 업데이트를 항상 최신 상태로 유지하고 자동 업데이트를 활성화하세요."
                                },
                                {
                                    title: "실시간 감시 활성화",
                                    desc: "파일을 열거나 인터넷 서핑 중 침투하는 위협을 즉시 차단하기 위해 실시간 감시 기능을 항상 켜두세요."
                                }
                            ].map((tip, idx) => (
                                <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                                        0{idx + 1}
                                    </div>
                                    <strong className="text-white block mb-4 text-xl font-bold">{tip.title}</strong>
                                    <p className="text-blue-100/70 font-medium leading-relaxed break-keep">
                                        {tip.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <CoupangAds 
                keyword="USB 메모리" 
                title="🔐 오프라인 보안의 완성"
                hookText="V3로 온라인 보안을 지켰다면, 오프라인 보안은 어떠신가요? 소중한 개인정보와 자료를 안전하게 암호화하여 보관할 수 있는 보안 USB와 외장하드 특가 리스트입니다."
            />

            {/* Footer */}
            <footer className="mt-24 pb-12 text-slate-400 text-sm font-medium flex flex-col items-center gap-4">
                <div className="w-12 h-1 bg-slate-200 rounded-full opacity-30"></div>
                <p>© 2026 V3 Download Information Center. All rights reserved.</p>
            </footer>
        </div>
    );
}
