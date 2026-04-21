import Link from 'next/link';
import React from 'react';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '반디집(Bandizip) 및 반디소프트 필수 프로그램 다운로드',
    description: '가장 빠르고 가벼운 국민 압축 프로그램 반디집(Windows/Mac)과 꿀캠, 꿀뷰, 반디뷰 등 반디소프트(Bandisoft)의 모든 필수 유틸리티를 다운로드하세요.',
};

const softwareList = [
    {
        name: '반디집 (Windows)',
        url: 'https://kr.bandisoft.com/bandizip/',
        icon: '🗂️',
        label: '압축 프로그램 (PC)',
        desc: '멀티코어를 활용하여 압축 속도가 최대 6배 빠른 윈도우용 필수 안심 압축 프로그램입니다.',
        color: '#2b88ff'
    },
    {
        name: '반디집 (Mac)',
        url: 'https://kr.bandisoft.com/bandizip.mac/',
        icon: '🍏',
        label: '압축 프로그램 (Mac)',
        desc: '복잡한 맥(Mac) 환경에서도 파일명 깨짐 없이 완벽하게 압축을 해제하는 맥용 반디집입니다.',
        color: '#aaaaaa'
    },
    {
        name: '반디뷰 (BandiView)',
        url: 'https://kr.bandisoft.com/bandiview/',
        icon: '🖼️',
        label: '전문 이미지 뷰어',
        desc: 'HDR, webp 지원 및 초고속 이미지 렌더링 엔진을 탑재한 차세대 고성능 이미지 뷰어입니다.',
        color: '#33cc99'
    },
    {
        name: '꿀캠 (HoneyCam)',
        url: 'https://kr.bandisoft.com/honeycam/',
        icon: '📽️',
        label: '움짤(GIF) 제작',
        desc: '웹페이지, 유튜브, PC 화면 등을 쉽게 녹화하고 고화질 움짤(GIF)로 만들어주는 꿀캠입니다.',
        color: '#ffa600'
    },
    {
        name: '꿀뷰 (HoneyView)',
        url: 'https://kr.bandisoft.com/honeyview/',
        icon: '🍯',
        label: '가벼운 이미지 뷰어',
        desc: '수많은 사람들이 극찬한, 극도의 가벼움과 압축 파일 내 이미지 바로보기를 지원하는 뷰어입니다.',
        color: '#ffcc00'
    },
    {
        name: '반디카메라',
        url: 'https://kr.bandisoft.com/bandicamera/', 
        icon: '📷',
        label: 'PC 화면 캡처',
        desc: 'PC 화면의 특정 영역을 아주 쉽고 간편하게 캡처하거나 연속 저장할 수 있는 프로그램입니다.',
        color: '#ff5577'
    }
];

export default function BandisoftPage() {
    return (
        <div
            className="flex flex-col items-center min-h-screen bg-[#0d121f] overflow-y-auto overflow-x-hidden pt-14 pb-20 px-4 sm:px-6"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
        >
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes float-subtle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }
                .glass-card {
                    background: rgba(22, 28, 45, 0.6);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
                }
                .bandi-gradient {
                    background: linear-gradient(135deg, #1aa3ff, #005ce6);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}} />

            <div className="w-full max-w-[900px] flex flex-col gap-10">
                
                {/* 헤더 섹션 */}
                <header className="text-center relative z-10" style={{ animation: 'float-subtle 4s ease-in-out infinite' }}>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#162340] border border-[#23355e] mb-4">
                        <span className="text-[#3399ff] text-[13px] font-[800] tracking-wider">BANDISOFT UTILITIES</span>
                    </div>
                    <h1 className="text-[34px] sm:text-[46px] font-[900] m-0 mb-4 tracking-tight text-white leading-[1.2]">
                        압축 프로그램의 압도적 표준<br/>
                        <span className="bandi-gradient">반디집 및 반디소프트 다운로드</span>
                    </h1>
                    <p className="text-[16px] text-[#aaaaaa] m-0 break-keep font-[500] leading-[1.6]">
                        빠르고 가벼운 성능으로 많은 사랑을 받는 국민 소프트웨어를 한 곳에 모았습니다.<br className="hidden sm:block"/>
                        오피스 작업과 멀티미디어 환경을 완벽하게 지원하는 필수 프로그램들을 다운로드하세요.
                    </p>
                </header>

                {/* 기술 소개 섹션 (SEO 텍스트 강화) */}
                <section className="glass-card rounded-[24px] p-6 sm:p-8 border-l-4 border-[#1aa3ff] relative overflow-hidden">
                    <div className="absolute top-[-50%] right-[-10%] w-[50%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(26,163,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>
                    <h2 className="text-[20px] font-[800] text-white mb-3 relative z-10">
                        ⚡ 반디소프트(Bandisoft) 프로그램의 장점
                    </h2>
                    <p className="text-[#cccccc] text-[15px] leading-relaxed font-[400] mb-0 break-keep relative z-10">
                        반디소프트에서 개발하는 <strong>반디집(Bandizip)</strong>을 비롯한 여러 유틸리티는 윈도우 환경에서 가장 최적화된 성능을 보여줍니다. 
                        멀티코어를 완벽하게 활용하여 기가바이트(GB) 단위의 대용량 파일도 순식간에 압축하고 해제할 수 있으며, 악성코드나 불필요한 광고(Adware)가 없어 관공서와 기업에서도 안심하고 사용하는 <strong>착한 소프트웨어</strong>입니다.
                        또한, 압축된 이미지 파일을 풀지 않고도 부드럽게 감상할 수 있는 <strong>꿀뷰(HoneyView)</strong>와 고품질 GIF 생성기 <strong>꿀캠(HoneyCam)</strong> 등 사용자의 편의성을 극대화한 독보적인 에코시스템을 제공합니다.
                    </p>
                </section>

                {/* 다운로드 그리드 섹션 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {softwareList.map((sw, index) => (
                        <Link 
                            key={index}
                            href={sw.url}
                            className="glass-card rounded-[20px] p-6 flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(26,163,255,0.15)] group no-underline relative border border-[rgba(255,255,255,0.05)] hover:border-[#1aa3ff]"
                        >
                            <div className="flex items-center gap-3 mb-4 w-full">
                                <div 
                                    className="w-12 h-12 rounded-[14px] flex items-center justify-center text-[24px] bg-[#0c121e] border border-[#23293a] group-hover:scale-110 transition-transform duration-300 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 opacity-10" style={{ backgroundColor: sw.color }}></div>
                                    {sw.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[12px] font-[700]" style={{ color: sw.color }}>{sw.label}</span>
                                    <h3 className="text-white text-[18px] font-[800] m-0">{sw.name}</h3>
                                </div>
                            </div>
                            
                            <p className="text-[#888899] text-[14px] font-[500] m-0 flex-1 leading-[1.5] break-keep group-hover:text-[#aaaaaa] transition-colors">
                                {sw.desc}
                            </p>

                            <div 
                                className="w-full mt-5 py-3 rounded-[10px] flex items-center justify-center gap-2 text-[14px] font-[700] transition-colors duration-300 text-white bg-[#1a2336] group-hover:bg-[#25324d]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                다운로드 링크
                            </div>
                        </Link>
                    ))}
                </div>

                <CoupangAds 
                    keyword="외장 SSD" 
                    title="💾 소중한 파일, 더 안전하게 보관하세요"
                    hookText="반디집으로 압축한 백업 파일, 어디에 보관하시나요? 대용량 파일도 눈 깜짝할 새 옮겨주는 초고속 외장 SSD와 안전한 USB 메모리 특가 리스트입니다."
                />

            </div>
            
        </div>
    );
}
