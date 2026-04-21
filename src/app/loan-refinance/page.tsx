import Link from 'next/link';
import React from 'react';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '네이버페이 대출 갈아타기 바로가기 (전월세, 신용, 주담대, 자동차)',
    description: '전세자금대출, 신용대출, 주택담보대출, 자동차대출까지 네이버페이 대출 갈아타기로 이자 부담을 확 줄여보세요.',
};

export default function LoanRefinancePage() {
    return (
        <div 
            className="min-h-screen bg-slate-100 font-['Pretendard'] text-slate-900 flex flex-col justify-center items-center py-20 px-4"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            {/* Background design elements */}
            <div className="absolute top-0 w-full max-w-4xl h-96 bg-[#03C75A]/10 blur-[120px] rounded-full pointer-events-none -z-0"></div>

            <div className="text-center mb-16 relative z-10 w-full max-w-2xl">
             
                <h1 className="text-5xl sm:text-7xl font-black mb-4 tracking-tight leading-tight text-slate-900">
                    대출 <span className="text-[#03C75A]">갈아타기</span>
                </h1>
            </div>

            {/* Buttons ONLY, minimal format as requested */}
            <div className="w-full max-w-xl space-y-4 sm:space-y-5 relative z-10">
                <Link 
                    href="https://loan.pay.naver.com/n/jeonse?from=search0001"
                    className="flex items-center justify-between w-full p-6 sm:p-8 bg-white border-2 border-transparent hover:border-[#03C75A] rounded-3xl shadow-[0_10px_30px_-15px_rgba(3,199,90,0.3)] hover:shadow-[0_20px_40px_-15px_rgba(3,199,90,0.4)] hover:-translate-y-1 transition-all group"
                >
                    <span className="text-2xl font-black text-slate-800 group-hover:text-[#03C75A] transition-colors">전세담보대출 갈아타기</span>
                    <div className="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-[#03C75A]/10 flex items-center justify-center transition-colors">
                        <svg className="w-6 h-6 text-slate-400 group-hover:text-[#03C75A] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                    </div>
                </Link>

                <Link 
                    href="https://loan.pay.naver.com/n/jeonse?from=search0001"
                    className="flex items-center justify-between w-full p-6 sm:p-8 bg-white border-2 border-transparent hover:border-[#03C75A] rounded-3xl shadow-[0_10px_30px_-15px_rgba(3,199,90,0.3)] hover:shadow-[0_20px_40px_-15px_rgba(3,199,90,0.4)] hover:-translate-y-1 transition-all group"
                >
                    <span className="text-2xl font-black text-slate-800 group-hover:text-[#03C75A] transition-colors">신용대출 갈아타기</span>
                    <div className="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-[#03C75A]/10 flex items-center justify-center transition-colors">
                        <svg className="w-6 h-6 text-slate-400 group-hover:text-[#03C75A] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                    </div>
                </Link>

                <Link 
                    href="https://loan.pay.naver.com/n/jeonse?from=search0001"
                    className="flex items-center justify-between w-full p-6 sm:p-8 bg-white border-2 border-transparent hover:border-[#03C75A] rounded-3xl shadow-[0_10px_30px_-15px_rgba(3,199,90,0.3)] hover:shadow-[0_20px_40px_-15px_rgba(3,199,90,0.4)] hover:-translate-y-1 transition-all group"
                >
                    <span className="text-2xl font-black text-slate-800 group-hover:text-[#03C75A] transition-colors">주택담보대출 갈아타기</span>
                    <div className="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-[#03C75A]/10 flex items-center justify-center transition-colors">
                        <svg className="w-6 h-6 text-slate-400 group-hover:text-[#03C75A] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                    </div>
                </Link>

                <Link 
                    href="https://loan.pay.naver.com/n/jeonse?from=search0001"
                    className="flex items-center justify-between w-full p-6 sm:p-8 bg-white border-2 border-transparent hover:border-[#03C75A] rounded-3xl shadow-[0_10px_30px_-15px_rgba(3,199,90,0.3)] hover:shadow-[0_20px_40px_-15px_rgba(3,199,90,0.4)] hover:-translate-y-1 transition-all group"
                >
                    <span className="text-2xl font-black text-slate-800 group-hover:text-[#03C75A] transition-colors">자동차대출 갈아타기</span>
                    <div className="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-[#03C75A]/10 flex items-center justify-center transition-colors">
                        <svg className="w-6 h-6 text-slate-400 group-hover:text-[#03C75A] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                    </div>
                </Link>
            </div>
            <CoupangAds 
                keyword="자산 관리 플래너" 
                title="📈 대출 다이어트의 시작"
                hookText="이자 아끼고 자산을 지키는 첫걸음! 효율적인 자산 관리를 도와주는 금융 플래너와 경제 입문서 베스트 리스트입니다."
            />
        </div>
    );
}
