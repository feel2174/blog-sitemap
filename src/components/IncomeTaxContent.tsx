'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoupangAds from '@/components/CoupangAds';
import Image from 'next/image';

export default function IncomeTaxContent() {
  const HOMETAX_URL = "https://hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index_pp.xml&menuCd=index3";

  return (
    <div className="min-h-screen bg-slate-50 font-['Pretendard']">
      <Header />
      
      <main className="pb-20">
        {/* Hero Section */}
        <div className="relative h-[450px] sm:h-[550px] overflow-hidden">
          <Image 
            src="/income-tax-banner.png"
            alt="종합소득세 신고 안내 배너"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-12 lg:px-24 max-w-6xl mx-auto">
            <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-bold mb-6">
              2026 종합소득세 신고 가이드 📅
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              종합소득세 환급금 조회 <br />
              <span className="text-blue-600">및 신청 방법 총정리</span>
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl font-medium max-w-2xl break-keep mb-10 leading-relaxed">
              5월 종합소득세 신고 기간을 맞아 환급금 조회부터 금융소득 종합과세 대상자 확인까지, 
              복잡한 세금 신고를 한눈에 이해하기 쉽게 안내해 드립니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={HOMETAX_URL}
                className="px-8 py-4 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all flex items-center gap-2"
              >
                종합소득세 신고 바로가기 (홈택스)
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <button 
                onClick={() => document.getElementById('refund-check')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-slate-900 font-black rounded-2xl shadow-lg border border-slate-200 hover:bg-slate-50 transition-all"
              >
                환급금 조회 방법 보기
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-10">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/60 border border-white hover:border-blue-100 transition-colors">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6">💰</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">환급금 조회 및 신청</h3>
              <p className="text-slate-500 leading-relaxed break-keep">
                홈택스 &apos;모두채움&apos; 서비스를 통해 간편하게 환급금을 조회하고 클릭 몇 번으로 신청을 완료할 수 있습니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/60 border border-white hover:border-blue-100 transition-colors">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl mb-6">📈</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">금융소득 종합과세</h3>
              <p className="text-slate-500 leading-relaxed break-keep">
                연간 금융소득이 2,000만원을 초과하는 경우 대상자에 해당하며, 정확한 세율 기준과 계산기를 통해 세액을 확인하세요.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/60 border border-white hover:border-blue-100 transition-colors">
              <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center text-2xl mb-6">⏰</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">신고 기간 및 비용</h3>
              <p className="text-slate-500 leading-relaxed break-keep">
                매년 5월 1일부터 31일까지 신고해야 하며, 기한 내 신고하지 않을 경우 가산세 등 불이익이 발생할 수 있습니다.
              </p>
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-16">
            {/* Section 1 */}
            <section id="refund-check" className="bg-white rounded-[3rem] p-8 sm:p-16 shadow-2xl shadow-slate-200/40 border border-slate-100">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4">
                  <span className="w-1 bg-blue-600 h-8 rounded-full"></span>
                  종합소득세 환급 조회 및 신청 방법
                </h2>
                <div className="space-y-8 text-slate-600 text-lg leading-relaxed break-keep">
                  <p>
                    많은 분들이 궁금해하시는 <strong>종합소득세 환급금 조회</strong>는 국세청 홈택스(Hometax) 또는 손택스(모바일 앱)에서 간편하게 확인하실 수 있습니다. 특히 국세청에서 미리 계산해주는 <strong>&apos;모두채움&apos;</strong> 대상자라면 더욱 빠르게 신청이 가능합니다.
                  </p>
                  <div className="bg-slate-50 rounded-3xl p-8 space-y-4">
                    <h4 className="text-slate-900 font-bold text-xl">환급금 신청 프로세스</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold">01.</span>
                        <span>홈택스 접속 후 공동인증서 또는 간편인증 로그인</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold">02.</span>
                        <span>[세금신고] → [종합소득세 신고] → [모두채움 신고] 선택</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold">03.</span>
                        <span>조회된 환급 예상 금액 확인 및 계좌번호 입력</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold">04.</span>
                        <span>신고서 제출하기 버튼 클릭으로 완료</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-blue-600 rounded-[3rem] p-8 sm:p-16 text-white shadow-2xl shadow-blue-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full"></div>
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl font-black mb-8 flex items-center gap-4">
                  금융소득 종합과세 계산기 및 대상자 조회
                </h2>
                <div className="space-y-8 text-blue-50 text-lg leading-relaxed break-keep">
                  <p>
                    <strong>금융소득 종합과세</strong>란 이자소득과 배당소득을 합산한 금액이 <strong>연간 2,000만원</strong>을 초과할 경우, 다른 소득(근로, 사업 등)과 합산하여 누진세율을 적용하는 제도입니다.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                      <h4 className="font-bold mb-2">계산 기준 및 세율</h4>
                      <p className="text-sm opacity-90">2,000만원 이하는 14% 원천징수로 종료, 초과분은 기본세율(6%~45%) 적용</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                      <h4 className="font-bold mb-2">신고 안하면?</h4>
                      <p className="text-sm opacity-90">무신고 가산세(20%) 및 납부지연 가산세가 부과될 수 있으니 주의하세요.</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <a 
                      href={HOMETAX_URL}
                      className="inline-flex px-8 py-4 bg-white text-blue-600 font-black rounded-2xl hover:bg-blue-50 transition-all"
                    >
                      홈페이지에서 계산기 조회하기
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Keyword-rich Content Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">5월 종합소득세 신고 방법 기간</h3>
                <p className="text-slate-500 leading-relaxed break-keep">
                  정기 신고 기간은 5월 1일부터 31일까지입니다. 성실신고확인대상자는 6월 30일까지 연장됩니다. 신고 방법은 홈택스 홈페이지 바로가기를 통해 온라인으로 간편하게 진행할 수 있으며, 비용 부담 없이 직접 신고가 가능합니다.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">환급 신청하기 조회 언제?</h3>
                <p className="text-slate-500 leading-relaxed break-keep">
                  5월에 신고한 종합소득세 환급금은 통상적으로 6월 말에서 7월 초 사이에 지급됩니다. 정확한 지급일은 관할 세무서에 따라 다를 수 있으나, 홈택스 &apos;환급금 상세조회&apos; 메뉴에서 실시간 진행 상황을 확인할 수 있습니다.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <CoupangAds 
        keyword="절세 가이드" 
        title="📑 똑똑한 세금 관리를 위한 추천 도서"
        hookText="절세는 아는 만큼 보입니다. 2026년 최신 세법이 반영된 절세 가이드북과 재테크 도서들을 만나보세요."
      />

      <Footer />
    </div>
  );
}
