import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '국민성장펀드 자세히보기 및 가이드북 다운로드',
    description: '정부의 핵심 정책 중 하나인 국민성장펀드! 정책브리핑 소식과 산업은행 가이드북을 통해 상세 정보를 확인하세요.',
};

const links = [
    {
        name: "정책브리핑 소식",
        description: "국민성장펀드 관련 정부 공식 브리핑",
        url: "https://www.korea.kr/news/policyNewsView.do?newsId=148963908",
        icon: "🏛️"
    },
    {
        name: "국민성장펀드 가이드북",
        description: "산업은행에서 제공하는 상세 안내",
        url: "https://ngf.kdb.co.kr/index.jsp",
        icon: "📘"
    }
];

export default function NationalGrowthFundPage() {
    return (
        <div
            className="flex flex-col items-center min-h-screen bg-[#f8fafc] overflow-y-auto overflow-x-hidden pt-16 pb-20 px-4 sm:px-6 md:px-8"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
        >
            <div className="w-full max-w-[1000px] flex flex-col gap-16">
                
                {/* 헤더 섹션 */}
                <div className="w-full max-w-[700px] mx-auto bg-white p-8 sm:p-12 rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-[#f1f5f9] relative overflow-hidden text-center">
                    <div className="absolute top-0 left-0 w-full h-[6px] bg-[#0284c7]"></div>
                    <span className="inline-block bg-[#e0f2fe] text-[#0284c7] px-4 py-1.5 rounded-full text-sm font-bold mb-4 tracking-tight">
                        혁신 벤처·스타트업 지원
                    </span>
                    <h1 className="text-[28px] sm:text-[36px] font-[800] m-0 mb-4 text-[#0f172a] tracking-tight leading-tight break-keep">
                        혁신성장펀드 (국민성장펀드) <br className="hidden sm:block" /> 자세히보기
                    </h1>
                    <p className="text-[16px] sm:text-[18px] text-[#64748b] m-0 font-[400] tracking-tight break-keep">
                        대한민국 미래 성장의 동력이 될 국민성장펀드에 대한 상세 정보와 가이드북을 확인하세요.
                    </p>
                </div>

                {/* 바로가기 2열 그리드 */}
                <div className="w-full max-w-[800px] mx-auto">
                    <h2 className="text-[22px] font-[800] text-[#0f172a] mb-6 pb-4 border-b border-[#e2e8f0] flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        공식 정보 확인하기
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {links.map((item, index) => (
                            <Link 
                                key={index}
                                href={item.url}
                                className="group flex flex-col items-center justify-center p-6 sm:p-8 bg-white border-2 border-[#e2e8f0] rounded-[20px] hover:border-[#0284c7] hover:shadow-[0_10px_30px_rgba(2,132,199,0.1)] transition-all duration-300 text-center"
                            >
                                <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </span>
                                <span className="text-[18px] sm:text-[22px] font-[800] text-[#1e293b] group-hover:text-[#0284c7] transition-colors break-keep mb-2">
                                    {item.name}
                                </span>
                                <span className="text-[14px] text-[#64748b]">
                                    {item.description}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
            
        </div>
    );
}
