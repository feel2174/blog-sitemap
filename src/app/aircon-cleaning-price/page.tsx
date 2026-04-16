import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '에어컨 청소 가격 비교 | 숨고, 미소, 업체별 비용 총정리',
  description: '여름이 오기 전 필수! 에어컨 청소 가격을 한눈에 비교해보세요. 숨고, 미소 등 인기 플랫폼과 브랜드별 청소 비용 정보를 제공합니다.',
  keywords: ['에어컨청소가격', '에어컨청소비용', '숨고에어컨청소', '미소에어컨청소', '벽걸이에어컨청소', '스탠드에어컨청소'],
};

export default function AirconCleaningPricePage() {
  const comparisonLinks = [
    {
      id: 1,
      name: '숨고 (Soomgo)',
      title: '내 주변 고수에게 받는 맞춤 견적',
      desc: '간단한 요청서 작성으로 여러 고수의 견적을 받아 가격을 비교해보세요.',
      url: 'https://soomgo.com/hire/%EC%97%90%EC%96%B4%EC%BB%A8-%EC%B2%AD%EC%86%8C?from=%EC%9D%BC%EB%B0%98%20%EC%9A%94%EC%B2%AD%EC%84%9C',
      icon: '🏠',
      theme: 'bg-[#00c7ae]',
    },
    {
      id: 2,
      name: '알지 (AJ)',
      title: '브랜드 및 업체별 비용 완전 분석',
      desc: '삼성, LG, 캐리어 등 브랜드별 및 사설 업체별 상세 비용 비교 가이드입니다.',
      url: 'https://www.ajd.co.kr/contents/basic-tip/detail/%EC%84%9C%EC%9A%B8_%EC%97%90%EC%96%B4%EC%BB%A8_%EC%B2%AD%EC%86%8C_%EB%B9%84%EC%9A%A9_%EC%97%85%EC%B2%B4_%EA%B3%B0%ED%8C%A1%EC%9D%B4_%EC%A0%9C%EA%B1%B0_%EB%B0%A9%EB%B2%95_%EC%82%BC%EC%84%B1_LG_%EC%BA%90%EB%A6%AC%EC%96%B4_%EC%9C%84%EB%8B%88%EC%95%84_%EB%8C%80%EC%9A%B0_%ED%8C%8C%EC%84%B8%EC%BD%94-69555',
      icon: '📊',
      theme: 'bg-emerald-600',
    },
    {
      id: 3,
      name: '미소 (Miso)',
      title: '간편 예약 및 정찰제 요금 확인',
      desc: '복잡한 절차 없이 간편하게 예약하고 표준화된 요금을 확인하실 수 있습니다.',
      url: 'https://miso.kr/appclean',
      icon: '✨',
      theme: 'bg-blue-600',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-['Pretendard'] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-black mb-6">
            ❄️ 쾌적한 여름 준비 프로젝트
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-8 leading-tight">
            에어컨 <span className="text-blue-600">청소 가격</span> 비교
          </h1>
          <p className="text-slate-500 font-bold text-lg sm:text-xl break-keep">
            업체마다 천차만별인 에어컨 청소 비용!<br className="hidden sm:block" />
            검증된 플랫폼에서 실제 견적을 비교하고 현명하게 선택하세요.
          </p>
        </header>

        {/* Link Grid */}
        <div className="space-y-6 mb-20">
          {comparisonLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="group flex flex-col sm:flex-row items-center gap-6 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className={`w-20 h-20 ${link.theme} rounded-2xl flex items-center justify-center text-4xl shadow-lg transform group-hover:rotate-6 transition-transform`}>
                {link.icon}
              </div>
              <div className="flex-grow text-center sm:text-left">
                
                <h3 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {link.title}
                </h3>
                <p className="text-slate-500 font-medium break-keep">
                  {link.desc}
                </p>
              </div>
              <div className="flex-shrink-0 group-hover:translate-x-2 transition-transform">
                <svg className="w-10 h-10 text-slate-200 group-hover:text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 5l7 7-7 7M5 12h14" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Pricing Info Section */}
        <div className="bg-slate-900 rounded-[3rem] p-10 sm:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h3 className="text-3xl font-black mb-10 border-b border-white/10 pb-6">
            💰 평균 청소 비용(참고)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <strong className="text-blue-400 text-xl block mb-4">벽걸이 에어컨</strong>
              <p className="text-3xl font-black mb-2">64,000원 ~</p>
              <p className="text-slate-400 text-sm">기본 분해 청소 기준</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <strong className="text-emerald-400 text-xl block mb-4">스탠드 에어컨</strong>
              <p className="text-3xl font-black mb-2">128,000원 ~</p>
              <p className="text-slate-400 text-sm">가정용 일반 기준</p>
            </div>
          </div>

          <div className="space-y-4 text-slate-400 font-medium border-t border-white/10 pt-10">
            <p className="flex items-start gap-3">
              <span className="text-blue-500">✔</span>
              비용은 오염 정도, 에어컨 종류(멀티형 등), 작업 난이도에 따라 달라질 수 있습니다.
            </p>
            <p className="flex items-start gap-3">
              <span className="text-blue-500">✔</span>
              여러 업체에서 견적을 받아본 후 후기와 별점을 꼼꼼히 체크하세요.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-slate-400 text-sm font-semibold tracking-wider">
          © 2026 HOME CLEANING GUIDE. ALL RIGHTS RESERVED.
        </footer>
      </div>
    </div>
  );
}
