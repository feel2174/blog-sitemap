'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoupangAds from '@/components/CoupangAds';

export default function EarnedIncomeTaxCreditContent() {
  return (
    <div className="min-h-screen bg-slate-50 font-['Pretendard']">
      <Header />
      
      <main className="pb-20">
        <div className="max-w-[650px] mx-auto mt-10 px-4 text-slate-800 leading-relaxed">
          {/* Header Section */}
          <header className="text-center mb-8">
            <h1 className="text-[28px] sm:text-3xl font-black mb-3 tracking-tight">
              놓치면 후회! 정부가 주는 <span className="text-red-600">“숨은 돈”</span> 찾아가세요
            </h1>
            <p className="text-xl font-bold text-blue-600 mb-8">
              나라가 드리는 근로장려금, 지금 신청하세요!
            </p>
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-lg relative text-left hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full font-bold text-sm shadow-md whitespace-nowrap">
                1인 평균 최대 330만원
              </div>
              <p className="m-0 text-[17px] leading-relaxed break-keep">
                “근로·자녀장려금, 올해는 제도가 대폭 확대되어 <span className="bg-blue-100 font-bold px-1 rounded">역대급으로 많은 분들이 혜택</span>을 받으실 수 있습니다. 작년에 아쉽게 놓치셨더라도 괜찮아요! <span className="bg-blue-100 font-bold px-1 rounded">달라진 자격 조건부터 초간단 신청 방법</span>까지, 지금 바로 확인하고 소중한 지원금을 놓치지 마세요!”
              </p>
            </div>
          </header>

          {/* 근로장려금 신청 Section */}
          <div className="flex items-center text-center my-10 before:flex-1 before:border-b before:border-slate-200 after:flex-1 after:border-b after:border-slate-200">
            <span className="px-4 text-[19px] font-extrabold text-slate-800">
              근로장려금 신청
            </span>
          </div>
          
          <div className="flex flex-col gap-3">
            <a 
              href="https://hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index_pp.xml&menuCd=UTEWFZH0A001" 
              className="flex justify-between items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 rounded-xl text-[17px] font-bold transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <span><span className="text-amber-400 mr-1">단독가구</span> 165만원 지급</span>
              <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-sm">❯</span>
            </a>
            <a 
              href="https://hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index_pp.xml&menuCd=UTEWFZH0A001" 
              className="flex justify-between items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 rounded-xl text-[17px] font-bold transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <span><span className="text-amber-400 mr-1">홑벌이 가구</span> 285만원 지급</span>
              <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-sm">❯</span>
            </a>
            <a 
              href="https://hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index_pp.xml&menuCd=UTEWFZH0A001" 
              className="flex justify-between items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 rounded-xl text-[17px] font-bold transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <span><span className="text-amber-400 mr-1">맞벌이 가구</span> 330만원 지급</span>
              <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-sm">❯</span>
            </a>
          </div>

          {/* 자녀장려금 신청 Section */}
          <div className="flex items-center text-center my-10 before:flex-1 before:border-b before:border-slate-200 after:flex-1 after:border-b after:border-slate-200">
            <span className="px-4 text-[19px] font-extrabold text-slate-800">
              자녀장려금 신청
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <a 
              href="https://hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index_pp.xml&menuCd=UTEWFZH0A001" 
              className="flex justify-between items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 rounded-xl text-[17px] font-bold transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <span>단독가구 대상자</span>
              <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-sm">❯</span>
            </a>
            <a 
              href="https://hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index_pp.xml&menuCd=UTEWFZH0A001" 
              className="flex justify-between items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 rounded-xl text-[17px] font-bold transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <span>홑벌이 가구 부양자녀 대상자</span>
              <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-sm">❯</span>
            </a>
            <a 
              href="https://hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index_pp.xml&menuCd=UTEWFZH0A001" 
              className="flex justify-between items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 rounded-xl text-[17px] font-bold transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <span>맞벌이 가구 부양자녀 대상자</span>
              <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-sm">❯</span>
            </a>
          </div>

          {/* Info Sections */}
          <section className="mt-12 p-6 sm:p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 text-xl font-extrabold text-slate-800 mb-5">
              <span className="text-green-500 text-2xl">✅</span> 근로장려금, 왜 지급될까요?
            </div>
            <p className="text-base text-slate-600 leading-relaxed break-keep">
              근로장려금은 열심히 일은 하지만 소득이 적어 생활이 어려운 <strong className="text-slate-800">근로자, 사업자(전문직 제외), 종교인 가구</strong>를 위해 만들어진 제도입니다. 가구원 구성과 소득, 재산 요건에 따라 산정된 장려금을 지급하여 실질소득을 지원하고 근로를 장려하는 것을 목적으로 합니다.
            </p>
          </section>

          <section className="mt-8 p-6 sm:p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 text-xl font-extrabold text-slate-800 mb-5">
              <span className="text-green-500 text-2xl">✅</span> 나도 받을 수 있을까? (2026년 기준)
            </div>
            <p className="text-[15px] text-slate-500 mb-5 break-keep">
              근로장려금은 <strong className="text-slate-700">가구, 소득, 재산</strong> 세 가지 요건을 모두 충족해야 합니다.
            </p>
            
            <div className="overflow-hidden rounded-xl border border-slate-200 mb-6 shadow-sm">
              <table className="w-full text-center text-[15px]">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-4 font-bold border-r border-blue-500">가구 유형</th>
                    <th className="p-4 font-bold border-r border-blue-500">소득 요건<br/><span className="text-xs font-normal text-blue-200">(2025년 기준)</span></th>
                    <th className="p-4 font-bold">재산 요건</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-slate-700">
                  <tr className="border-b border-slate-200">
                    <td className="p-4 bg-slate-50 font-bold border-r border-slate-200">단독 가구</td>
                    <td className="p-4 border-r border-slate-200">2,200만원 미만</td>
                    <td rowSpan={3} className="p-4 font-bold align-middle">
                      가구원 전체 재산<br/>
                      <span className="text-blue-600">2억 4천만원 미만</span>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-4 bg-slate-50 font-bold border-r border-slate-200">홑벌이 가구</td>
                    <td className="p-4 border-r border-slate-200">3,200만원 미만</td>
                  </tr>
                  <tr>
                    <td className="p-4 bg-slate-50 font-bold border-r border-slate-200">맞벌이 가구</td>
                    <td className="p-4 border-r border-slate-200 font-bold text-blue-600">4,400만원 미만</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl text-sm text-slate-600 leading-relaxed border border-slate-100">
              <strong className="text-slate-800 text-base mb-2 block">💡 참고하세요!</strong>
              <ul className="space-y-2 break-keep">
                <li>* 2026년 신청부터 <strong className="text-slate-800">맞벌이 가구의 소득 상한액이 3,800만원에서 4,400만원으로 상향</strong>되어 대상자가 대폭 확대되었습니다.</li>
                <li>* 자녀장려금의 경우, 홑벌이 및 맞벌이 가구의 소득 요건이 <strong className="text-slate-800">7,000만원 미만</strong>으로 적용됩니다.</li>
                <li>* 재산 가액 산정 시 부채는 차감하지 않으며, 전문직 종사자는 신청에서 제외됩니다.</li>
              </ul>
            </div>
          </section>

          <p className="text-center mt-8 text-[13px] text-slate-400">
            출처: 국세청 홈택스 및 관계부처 보도자료 기준
          </p>

          <footer className="mt-10 p-5 bg-slate-50 rounded-xl text-sm text-slate-500 leading-relaxed border border-slate-100">
            <p>※ 2026년 근로장려금은 2025년 부부합산 소득 및 재산 요건(2.4억원 미만)을 기준으로 산정됩니다. 기한 후 신청 시 5% 감액되니 정기 신청 기간을 꼭 준수하세요.</p>
          </footer>
        </div>

        <div className="max-w-[650px] mx-auto px-4 mt-12">
          <CoupangAds 
              keyword="가계부" 
              title="📒 새는 돈 막는 똑똑한 가계부"
              hookText="근로장려금 받고, 가계부로 재정 관리까지 확실하게 시작해보세요!"
          />
        </div>
      </main>

      <Footer />

    </div>
  );
}
