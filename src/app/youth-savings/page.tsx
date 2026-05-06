import Link from 'next/link';
import React from 'react';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '2026 청년내일저축계좌 신청 및 모의계산 완벽 가이드',
    description: '청년들의 자산 형성을 돕는 청년내일저축계좌! 2026년 신청 방법, 자격 조건, 그리고 모의계산을 통해 내가 받을 수 있는 혜택을 지금 바로 확인해 보세요.',
};

export default function YouthSavingsPage() {
    return (
        <div 
            className="min-h-screen bg-[#F0FDF4] text-[#166534] pt-6 pb-16 px-4 sm:px-6 flex flex-col items-center"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            {/* Header section optimized for mobile visibility */}
            <div className="w-full max-w-4xl text-center mb-6 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-64 h-64 bg-[#22C55E]/10 blur-[80px] rounded-full -z-10"></div>
                <div className="inline-flex items-center gap-2 bg-[#22C55E]/15 text-[#166534] px-4 py-2 rounded-full text-xs font-black mb-4">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
                    </span>
                    2026년 신청 접수 안내
                </div>
                <h1 className="text-3xl sm:text-5xl font-[900] tracking-tight mb-4 leading-tight text-[#15803D]">
                    청년내일저축계좌 <br className="sm:hidden" />
                    <span className="text-zinc-800">신청 & 모의계산</span>
                </h1>
                <p className="text-slate-600 font-bold text-sm sm:text-lg max-w-2xl mx-auto break-keep leading-relaxed hidden sm:block">
                    본인 저축액에 정부 지원금을 더해 목돈 마련의 꿈을 이루세요.
                </p>
            </div>

            {/* Call to Action Buttons - Immediately visible on mobile */}
            <div className="w-full max-w-md flex flex-col gap-3 mb-10">
                <Link
                    href="https://www.bokjiro.go.kr/ssis-tbu/ssis-tem/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00000060"
                    className="flex items-center justify-center w-full px-6 py-4 bg-[#22C55E] hover:bg-[#16A34A] text-white font-[900] text-lg rounded-2xl shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                    청년내일저축계좌 신청하기
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/>
                    </svg>
                </Link>
                <Link
                    href="https://www.bokjiro.go.kr/ssis-tbu/twatbz/mkclAsis/mkclAstfmSpbizPage.do"
                    className="flex items-center justify-center w-full px-6 py-4 bg-white border-2 border-[#22C55E] text-[#15803D] font-[900] text-lg rounded-2xl shadow-sm hover:bg-[#F0FDF4] transition-all duration-300"
                >
                    지원금 모의계산하기
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                </Link>
            </div>

            {/* Info Section */}
            <div className="w-full max-w-3xl">
                <div className="bg-white rounded-[2rem] p-6 sm:p-10 border border-emerald-100 shadow-sm mb-10">
                    <h5 className="text-xl font-black mb-6 text-zinc-800 border-b-2 border-emerald-100 pb-4 flex items-center gap-2">
                        <span className="text-2xl">💡</span> 청년내일저축계좌 혜택
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mt-6">
                        <div>
                            <p className="font-black text-[#15803D] mb-1">정부 지원금 1:1 매칭</p>
                            <p className="text-slate-500 text-sm font-medium">본인 저축액 월 10만원당 10만원(차상위계층은 최대 30만원)의 장려금을 지원합니다.</p>
                        </div>
                        <div>
                            <p className="font-black text-[#15803D] mb-1">만기 시 전액 지급</p>
                            <p className="text-slate-500 text-sm font-medium">3년간 근로 활동을 지속하며 필수 교육을 이수하면 만기 시 목돈으로 지급받습니다.</p>
                        </div>
                        <div>
                            <p className="font-black text-[#15803D] mb-1">복지 멤버십 추가 혜택</p>
                            <p className="text-slate-500 text-sm font-medium">맞춤형 복지 서비스를 안내받고, 생활 안정에 필요한 다양한 지원을 받을 수 있습니다.</p>
                        </div>
                        <div>
                            <p className="font-black text-[#15803D] mb-1">간편한 모의계산</p>
                            <p className="text-slate-500 text-sm font-medium">복지로 모의계산을 통해 나의 예상 지원금과 신청 가능 여부를 미리 확인할 수 있습니다.</p>
                        </div>
                    </div>
                </div>
                
                <CoupangAds 
                    keyword="재테크 책" 
                    title="📚 똑똑한 자산 관리의 시작"
                    hookText="저축과 함께 투자 마인드도 쑥쑥! 청년 재테크 필수 도서와 경제 베스트셀러를 확인해보세요."
                />
            </div>

            {/* Footer */}
            <footer className="mt-12 text-slate-400 text-sm font-semibold tracking-wider text-center">
                © 2026 YOUTH TOMORROW SAVINGS GUIDE.
            </footer>
        </div>
    );
}
