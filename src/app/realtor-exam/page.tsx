import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '공인중개사 기출문제 및 정답해설 다운로드',
    description: '공인중개사 시험 대비 필수 자료! 기출문제와 정답해설을 바로 다운로드하여 합격의 꿈을 이루세요.',
};

const examMaterials = [
    {
        name: "공인중개사 기출문제",
        url: "https://drive.google.com/file/d/1UAQZAxn3Huaya0aSRRYrnT7TFsmjEjal/view",
        icon: "📄"
    },
    {
        name: "공인중개사 정답해설",
        url: "https://drive.google.com/file/d/1kYlTAeNYK8f8oxIgq9ehrkhniJVl9uwR/view",
        icon: "✅"
    }
];

export default function RealtorExamPage() {
    return (
        <div
            className="flex flex-col items-center min-h-screen bg-[#f8fafc] overflow-y-auto overflow-x-hidden pt-16 pb-20 px-4 sm:px-6 md:px-8"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
        >
            <div className="w-full max-w-[1000px] flex flex-col gap-16">
                
                {/* 헤더 섹션 */}
                <div className="w-full max-w-[700px] mx-auto bg-white p-8 sm:p-12 rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-[#f1f5f9] relative overflow-hidden text-center">
                    <div className="absolute top-0 left-0 w-full h-[6px] bg-[#2563eb]"></div>
                    <span className="inline-block bg-[#eff6ff] text-[#2563eb] px-4 py-1.5 rounded-full text-sm font-bold mb-4 tracking-tight">
                        합격을 위한 필수 자료
                    </span>
                    <h1 className="text-[28px] sm:text-[36px] font-[800] m-0 mb-4 text-[#0f172a] tracking-tight leading-tight break-keep">
                        공인중개사 기출문제 <br className="hidden sm:block" /> 및 정답해설
                    </h1>
                    <p className="text-[16px] sm:text-[18px] text-[#64748b] m-0 font-[400] tracking-tight break-keep">
                        최신 출제 경향을 파악하고 실전 감각을 키워보세요.
                    </p>
                </div>

                {/* 다운로드 2열 그리드 */}
                <div className="w-full max-w-[800px] mx-auto">
                    <h2 className="text-[22px] font-[800] text-[#0f172a] mb-6 pb-4 border-b border-[#e2e8f0] flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        자료 다운로드 바로가기
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                        {examMaterials.map((item, index) => (
                            <Link 
                                key={index}
                                href={item.url}
                                className="group flex flex-col items-center justify-center p-6 sm:p-8 bg-white border-2 border-[#e2e8f0] rounded-[20px] hover:border-[#2563eb] hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)] transition-all duration-300 text-center"
                            >
                                <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </span>
                                <span className="text-[15px] sm:text-[20px] font-[800] text-[#1e293b] group-hover:text-[#2563eb] transition-colors break-keep">
                                    {item.name} <br className="sm:hidden" /> 다운로드
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
            
        </div>
    );
}
