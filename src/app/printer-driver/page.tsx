import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '프린터 드라이버 다운로드 센터',
    description: '캐논, 엡손, 브라더, 신도리코, 삼성 등 주요 제조사의 프린터 드라이버를 쉽게 다운로드하세요.',
};

const drivers = [
    {
        name: "엡손 프린터 드라이버",
        url: "https://www.epson.co.kr/%EA%B3%A0%EA%B0%9D%EC%A7%80%EC%9B%90/%ED%94%84%EB%A6%B0%ED%84%B0/sh/s01",
        color: "#003399"
    },
    {
        name: "브라더 프린터 드라이버",
        url: "https://www.brother-korea.com/ko-kr/support",
        color: "#000000"
    },
    {
        name: "신도리코 프린터 드라이버",
        url: "https://support.sindoh.com/%ED%94%84%EB%A6%B0%ED%84%B0-%EB%93%9C%EB%9D%BC%EC%9D%B4%EB%B2%84lan-%EB%B9%A0%EB%A5%B8%EC%84%A4%EC%B9%98-",
        color: "#E31837"
    },
    {
        name: "삼성프린터 드라이버",
        url: "https://www.samsungsvc.co.kr/download",
        color: "#1428A0"
    },
    {
        name: "캐논 프린터 드라이버",
        url: "https://svc.kr.canon/solution/solutionList",
        color: "#FF0000"
    }
];

export default function PrinterDriverPage() {
    return (
        <div
            className="flex flex-col items-center min-h-screen bg-[#f7f9fa] overflow-y-auto overflow-x-hidden pt-16 pb-20 px-4 sm:px-6 md:px-8"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
        >
            <div className="w-full max-w-[1100px] flex flex-col gap-16">
                
                {/* 헤더 섹션 */}
                <div className="w-full max-w-[700px] mx-auto bg-white p-8 sm:p-12 rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-[#eaeded] relative overflow-hidden text-center">
                    <h1 className="text-[28px] sm:text-[34px] font-[800] m-0 mb-3 text-[#222222] tracking-tight">
                        프린터 드라이버 다운로드
                    </h1>
                    <p className="text-[16px] sm:text-[18px] text-[#555555] m-0 font-[400] tracking-tight break-keep">
                        제조사를 선택하고 최신 드라이버를 다운로드 하세요.
                    </p>
                </div>

                {/* 제조사 2열 그리드 리스트 */}
                <div className="w-full max-w-[800px] mx-auto bg-white p-8 sm:p-12 rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-[#eaeded]">
                    <h2 className="text-[22px] font-[800] text-[#222222] mb-8 pb-4 border-b border-[#eeeeee] flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                        제조사 바로가기
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                        {drivers.map((driver, index) => (
                            <Link 
                                key={index}
                                href={driver.url}
                                className="group flex flex-col items-center justify-center p-4 sm:p-6 bg-white border-2 border-[#eaeaea] rounded-[16px] hover:border-[#222] hover:shadow-lg transition-all duration-300 text-center"
                            >
                                <span className="text-[15px] sm:text-[18px] font-[700] text-[#333] group-hover:text-[#000] transition-colors break-keep">
                                    {driver.name}<br className="sm:hidden" /> 다운로드
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
            
        </div>
    );
}
