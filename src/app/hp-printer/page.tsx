import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'HP 프린터 고객지원 - 드라이버 다운로드',
    description: 'HP 프린터(OfficeJet, DeskJet, LaserJet 등)의 일련번호 및 제품명을 검색하고 최신 드라이버를 안전하게 다운로드하세요.',
};

const printers = [
    "HP OfficeJet Pro 8210 프린터 시리즈",
    "HP DeskJet 2130 올인원 프린터 시리즈",
    "HP OfficeJet Pro 8710 All-in-One 프린터 시리즈",
    "HP OfficeJet Pro 9010 복합기 시리즈",
    "HP Officejet Pro 8610 e-올인원 프린터 시리즈",
    "HP Deskjet Ink Advantage 복합기 프린터 시리즈 - K209",
    "HP 데스크젯 잉크 어드밴티지 3540 e-복합기 프린터 시리즈",
    "HP OfficeJet Pro 7740 Wide Format 올인원 프린터 시리즈",
    
    "HP OfficeJet 9010 복합기 시리즈",
    "HP Officejet Pro 8100 ePrinter 시리즈 - N811",
    "HP OfficeJet Pro 8020 복합기 시리즈",
    "HP OfficeJet Pro 8720 All-in-One 프린터 시리즈",
    "HP OfficeJet Pro 9010e 올인원 프린터 시리즈",
    "HP OfficeJet 7610 와이드 포맷 e-올인원 시리즈",
    "HP Officejet Pro 8600 e-복합기 프린터 시리즈 - N911",
    "HP OfficeJet Pro 7720 Wide Format 올인원 프린터 시리즈",
    
    "HP LaserJet Pro P1102 프린터 시리즈",
    "HP LaserJet Pro M14-M17 프린터 시리즈",
    "HP OfficeJet 8020 복합기 시리즈",
    "HP 레이저젯 프로 MFP M28-M31 프린터 시리즈",
    "HP Officejet Pro 8630 e-올인원 프린터 시리즈",
    "HP Color LaserJet Pro M255-M256 프린터 시리즈",
    "HP 컬러 LaserJet Pro M282-M285 복합기 시리즈",
    "HP Officejet Pro 8600 플러스 e-복합기 프린터 시리즈 - N911"
];

export default function HpPrinterPage() {
    return (
        <div
            className="flex flex-col items-center min-h-screen bg-[#f7f9fa] overflow-y-auto overflow-x-hidden pt-16 pb-20 px-4 sm:px-6 md:px-8"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
        >
            <div className="w-full max-w-[1100px] flex flex-col gap-16">
                
                {/* 헤더 및 검색창 섹션 */}
                <div className="w-full max-w-[700px] bg-white p-8 sm:p-12 rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-[#eaeded] relative overflow-hidden">
                    {/* 상단 장식 바 */}
                    <div className="absolute top-0 left-0 w-full h-[6px] bg-[#007dba]"></div>

                    <h1 className="text-[28px] sm:text-[34px] font-[800] m-0 mb-3 text-[#222222] tracking-tight">
                        프린터를 확인합니다
                    </h1>
                    <p className="text-[16px] sm:text-[18px] text-[#555555] m-0 mb-8 font-[400] tracking-tight break-keep">
                        일련번호, 제품번호 혹은 제품명을 입력하세요
                    </p>

                    <form action="https://support.hp.com/kr-ko/drivers/printers" method="GET" className="relative group">
                        <input 
                            type="text" 
                            placeholder="예: HP OfficeJet 4630" 
                            className="w-full h-[60px] pl-6 pr-[60px] text-[16px] rounded-[30px] border-2 border-[#cccccc] outline-none transition-all duration-300 focus:border-[#007dba] focus:shadow-[0_0_0_4px_rgba(0,125,186,0.1)] bg-white text-[#333]"
                        />
                        <button 
                            type="submit" 
                            className="absolute right-[5px] top-[5px] w-[50px] h-[50px] flex items-center justify-center rounded-full text-[#007dba] hover:bg-[#f0f4f8] transition-colors duration-200"
                            aria-label="검색"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </button>
                    </form>
                </div>

                {/* 인기 프린터 시리즈 리스트 */}
                <div className="w-full bg-white p-8 sm:p-12 rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-[#eaeded]">
                    <h2 className="text-[22px] font-[800] text-[#222222] mb-8 pb-4 border-b border-[#eeeeee] flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007dba" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                        인기 프린터 모델 바로가기
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
                        {printers.map((printer, index) => (
                            <Link 
                                key={index}
                                href="https://support.hp.com/kr-ko/drivers/printers"
                                className="block text-[#007dba] text-[15px] font-[500] leading-[1.4] hover:text-[#005a8c] hover:underline decoration-1 underline-offset-4 transition-all duration-200 break-keep"
                            >
                                {printer}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* 하단 여백 및 정보 */}
                <div className="text-center text-[#888888] text-[14px]">
                    <p>위의 모델 외에도 모든 HP 프린터의 드라이버를 검색하여 지원받으실 수 있습니다.</p>
                </div>

            </div>
            
        </div>
    );
}
