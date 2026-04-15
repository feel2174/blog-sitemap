import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '카카오뱅크 마이너스통장대출 (KakaoBank) | 한도 및 금리, 신청방법 총정리',
  description: '카카오뱅크 마이너스 통장 대출의 최대한도, 최저금리, 자격 조건 및 신청 방법을 자세히 확인하세요. 필요할 때 꺼내 쓰고 사용한 만큼만 이자를 내는 합리적인 대출 서비스입니다.',
  keywords: ['카카오뱅크', '마이너스통장', '카카오뱅크대출', '신용대출', '직장인대출', '비상금대출', '대출금리', '대출한도'],
};

export default function KakaoBankCreditLinePage() {
  return (
    <div className="min-h-screen bg-white text-[#191919] font-['Pretendard'] py-16 px-4 sm:px-6 flex flex-col items-center">
      {/* Brand Header */}
      <div className="w-full max-w-4xl text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-64 h-64 bg-[#FEE500]/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
        <div className="inline-block mb-8">
            <div className="p-1 bg-[#191919] rounded-[2.5rem] shadow-2xl transform transition-transform hover:scale-105 duration-500">
                <div className="bg-[#FEE500] rounded-[2.2rem] p-6">
                    <span className="text-6xl font-black">B</span>
                </div>
            </div>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-8 leading-tight">
          카카오뱅크 <br />
          <span className="underline decoration-wavy decoration-[#FEE500] underline-offset-8">마이너스통장대출</span>
        </h1>
        <p className="text-[#3c3c3c] font-bold text-lg sm:text-xl max-w-2xl mx-auto break-keep leading-relaxed border-x-2 border-[#FEE500] px-6">
          필요할 때 언제든 꺼내 쓰고, <br className="hidden sm:block" />
          사용한 금액에 대해서만 이자를 내는 합리적인 선택. <br />
          번거로운 서류 제출 없이 모바일로 간편하게 신청하세요.
        </p>
      </div>

      {/* Main Feature Card */}
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-[3rem] p-10 sm:p-16 shadow-[0_20px_50px_rgba(254,229,0,0.15)] border border-[#FEE500]/20 mb-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FEE500]/10 rounded-bl-[5rem] group-hover:w-40 group-hover:h-40 transition-all duration-700"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-[#FEE500]/20 text-[#191919] px-4 py-2 rounded-full text-sm font-bold mb-8 uppercase tracking-widest">
              Smart Loan Service
            </div>

            <h3 className="text-2xl font-black mb-6 text-[#191919]">마이너스통장 대출 신청</h3>
            <p className="text-[#555] font-medium mb-12 leading-relaxed break-keep">
              복잡한 방문이나 서류 제출 절차 없이 <br />
              카카오뱅크 앱에서 한도 조회를 바로 시작할 수 있습니다.
            </p>

            <Link
              href="https://www.kakaobank.com/products/creditLine"
              className="inline-flex items-center justify-center w-full sm:w-auto px-12 py-6 bg-[#191919] hover:bg-[#333] text-white font-black text-xl rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300 group/btn"
            >
              신청 페이지 바로가기
              <svg className="ml-3 w-6 h-6 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M13 5l7 7-7 7M5 12h14" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Loan Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h4 className="text-xl font-black mb-6 flex items-center gap-3">
              <span className="text-2xl">👤</span> 신청 대상
            </h4>
            <p className="text-[#555] font-medium leading-relaxed break-keep">
              6개월 이상 재직 중인 직장인으로서 <br />
              일정 소득 기준을 충족하는 고객 (연 소득 3,500만원 이상 등 기준 적용)
            </p>
          </div>
          <div className="bg-[#191919] p-10 rounded-[2.5rem] text-white">
            <h4 className="text-xl font-black mb-6 flex items-center gap-3">
              <span className="text-2xl">💰</span> 대출 한도
            </h4>
            <p className="text-slate-300 font-medium leading-relaxed break-keep">
              최대한도 2억 4천만원 <br />
              (개인의 신용도 및 소득 수준에 따라 차등 적용)
            </p>
          </div>
        </div>

        {/* Major Features Section */}
        <div className="bg-white rounded-[3rem] p-10 sm:p-14 border border-slate-100 shadow-sm mb-20">
            <h4 className="text-2xl font-black mb-10 text-center">💡 마이너스통장의 주요 특징</h4>
            <div className="space-y-6">
                <div className="flex items-start gap-5 p-6 bg-slate-50 rounded-2xl">
                    <div className="w-12 h-12 bg-[#FEE500] rounded-xl flex items-center justify-center font-bold text-xl shrink-0">1</div>
                    <div>
                        <p className="font-black text-lg mb-1">쓴 만큼만 내는 이자</p>
                        <p className="text-[#555] text-sm">마이너스통장을 개설하더라도 실제 사용한 금액에 대해서만 이자가 계산됩니다.</p>
                    </div>
                </div>
                <div className="flex items-start gap-5 p-6 bg-slate-50 rounded-2xl">
                    <div className="w-12 h-12 bg-[#FEE500] rounded-xl flex items-center justify-center font-bold text-xl shrink-0">2</div>
                    <div>
                        <p className="font-black text-lg mb-1">자유로운 입출금</p>
                        <p className="text-[#555] text-sm">한도 범위 내에서 언제든 자유롭게 빌려 쓰고, 여유 자금이 생기면 즉시 갚을 수 있습니다.</p>
                    </div>
                </div>
                <div className="flex items-start gap-5 p-6 bg-slate-50 rounded-2xl">
                    <div className="w-12 h-12 bg-[#FEE500] rounded-xl flex items-center justify-center font-bold text-xl shrink-0">3</div>
                    <div>
                        <p className="font-black text-lg mb-1">모바일 간편 서류</p>
                        <p className="text-[#555] text-sm">공인인증서나 별도의 서류 제출 없이 스마트폰 인증만으로 심사가 진행됩니다.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Footer Info */}
      <footer className="mt-12 text-slate-400 text-sm font-semibold tracking-wider text-center max-w-2xl px-4">
        <p className="mb-4">※ 상기 내용은 카카오뱅크의 사정에 따라 변경될 수 있으므로, 반드시 공식 앱을 통해 최신 정보를 확인하시기 바랍니다.</p>
        © 2026 KAKAOBANK INFO HUB.
      </footer>
    </div>
  );
}
