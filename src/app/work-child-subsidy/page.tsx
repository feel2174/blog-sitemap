import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '근로장려금 및 자녀장려금 신청방법 및 자격 요건 안내 | 국세청 홈택스 바로가기',
  description: '2026년 근로장려금과 자녀장려금 신청 기간, 자격 요건, 지급 금액을 확인하세요. 국세청 홈택스 직접 신청 페이지 링크를 제공합니다.',
  keywords: ['근로장려금', '자녀장려금', '장려금신청', '국세청', '홈택스', '반기신청', '정기신청', '정부지원금'],
};

export default function SubsidyPage() {
  const subsidies = [
    {
      title: "근로장려금 (Working Income Tax Credit)",
      description: "일은 하지만 소득이 적어 생활이 어려운 근로자, 사업자 가구에 산정된 장려금을 지급하여 근로를 장려하고 실질소득을 지원하는 제도입니다.",
      url: "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2450&cntntsId=7781",
      icon: "💼",
      color: "from-blue-600 to-blue-700",
      stats: [
        { label: "단독 가구", value: "최대 165만원" },
        { label: "홑벌이 가구", value: "최대 285만원" },
        { label: "맞벌이 가구", value: "최대 330만원" }
      ]
    },
    {
      title: "자녀장려금 (Child Tax Credit)",
      description: "저소득 가구의 자녀양육을 지원하기 위해 총소득 7,000만원 미만(부부합산)이면서 부양자녀가 있는 경우에 지급하는 장려금입니다.",
      url: "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2451&cntntsId=7782",
      icon: "👩‍👧‍👦",
      color: "from-emerald-600 to-emerald-700",
      stats: [
        { label: "지급 대상", value: "부부합산 7천만원 미만" },
        { label: "지급 금액", value: "자녀 1명당 최대 100만원" },
        { label: "재산 요건", value: "가구원 합산 2.4억원 미만" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-['Pretendard']">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            국세청 홈택스 공식 안내 연동
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            2026 <span className="text-blue-600">근로·자녀장려금</span> <br className="hidden md:block" /> 신청 가이드
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            나의 소득과 재산 요건을 확인하고, 놓치기 쉬운 정부 지원금을 <br className="hidden md:block" />
            공식 홈페이지를 통해 안전하게 신청하세요.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {subsidies.map((item, idx) => (
          <div key={idx} className="group flex flex-col bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden transform hover:-translate-y-2 transition-all duration-500">
            <div className={`p-10 bg-gradient-to-br ${item.color} text-white relative`}>
              <div className="absolute top-0 right-0 p-8 opacity-20 text-8xl pointer-events-none group-hover:scale-110 transition-transform duration-700">
                {item.icon}
              </div>
              <div className="relative z-10">
                <span className="text-4xl mb-6 block">{item.icon}</span>
                <h2 className="text-3xl font-black mb-4 leading-tight">{item.title}</h2>
                <p className="text-white/80 font-medium leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>
            </div>
            
            <div className="p-10 flex-1 flex flex-col">
              <div className="grid grid-cols-1 gap-4 mb-10">
                {item.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-slate-500 font-bold">{stat.label}</span>
                    <span className="text-slate-900 font-black text-lg">{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Link 
                  href={item.url}
                  className="block w-full py-5 bg-slate-900 hover:bg-black text-white text-center rounded-2xl font-black text-lg shadow-xl shadow-slate-900/10 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  공식 신청 페이지 바로가기
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M5 12h14" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Notice Section */}
      <div className="max-w-5xl mx-auto px-4 pb-24 text-center">
        <div className="p-8 bg-slate-100 rounded-3xl border border-slate-200">
          <p className="text-slate-500 text-sm font-medium leading-relaxed">
            📢 <strong>주의사항:</strong> 장려금 신청은 반드시 국세청 홈택스 공식 홈페이지(hometax.go.kr) 또는 <br />
            정부 공식 앱인 &apos;손택스&apos;를 통해서만 진행하시기 바랍니다. 문자 메시지나 이메일로 오는 링크는 피싱 사기일 수 있으니 주의하세요.
          </p>
        </div>
      </div>
    </div>
  );
}
