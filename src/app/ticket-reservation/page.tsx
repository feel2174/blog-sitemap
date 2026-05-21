import Link from 'next/link';
import React from 'react';
import { FaTicketAlt } from 'react-icons/fa';

export const metadata = {
    title: '티켓 예매 바로가기 (인터파크 / 예스24)',
    description: 'NOL인터파크 티켓 및 예스24 티켓 예매 사이트 바로가기',
};

export default function TicketReservationPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white px-4 sm:px-6" style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, sans-serif' }}>
            <div className="w-full max-w-[600px] flex flex-col items-center text-center py-20 relative z-10">
                
                {/* 헤더 섹션 */}
                <div className="mb-12">
                    <div className="w-20 h-20 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(236,72,153,0.4)] animate-pulse">
                        <FaTicketAlt className="text-4xl text-white drop-shadow-lg" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                        통합 티켓 예매처
                    </h1>
                    <p className="text-lg text-gray-300 font-medium break-keep">
                        원하시는 티켓 예매 사이트를 선택해주세요
                    </p>
                </div>

                {/* 버튼 섹션 */}
                <div className="flex flex-col gap-6 w-full px-4 sm:px-0">
                    <Link 
                        href="https://nol.interpark.com/ticket"
                        className="group relative flex items-center justify-between w-full py-5 px-6 sm:px-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md overflow-hidden hover:bg-white/20 hover:border-pink-500/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] hover:-translate-y-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                                <span className="font-black text-white text-xl tracking-tighter">NOL</span>
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-sm font-semibold text-pink-300 mb-1">인터파크</span>
                                <span className="text-lg sm:text-xl font-bold text-white tracking-wide">티켓 예매 바로가기</span>
                            </div>
                        </div>
                        <div className="relative z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-pink-500 transition-colors duration-300 shrink-0 ml-2">
                            <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>

                    <Link 
                        href="https://ticket.yes24.com/"
                        className="group relative flex items-center justify-between w-full py-5 px-6 sm:px-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md overflow-hidden hover:bg-white/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:-translate-y-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg">
                                <span className="font-black text-white text-[15px] tracking-tighter">YES</span>
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-sm font-semibold text-blue-300 mb-1">YES24</span>
                                <span className="text-lg sm:text-xl font-bold text-white tracking-wide">티켓 예매 바로가기</span>
                            </div>
                        </div>
                        <div className="relative z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300 shrink-0 ml-2">
                            <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
            
            {/* Background Effects */}
            <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-pink-600/20 blur-[120px] pointer-events-none"></div>
            <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none"></div>
        </div>
    );
}
