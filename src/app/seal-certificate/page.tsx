import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '인감증명서 온라인 발급 | 정부24 및 법인인감 발급 바로가기',
  description: '개인 인감증명서 온라인 발급 방법과 법인인감증명서 발급 안내입니다. 정부24 및 인터넷등기소 다이렉트 링크를 제공합니다.',
  keywords: ['인감증명서발급', '온라인인감증명', '법인인감증명서', '정부24인감', '인터넷등기소인감', '인감발급방법'],
};

export default function SealCertificatePage() {
  const links = [
    {
      id: 1,
      title: '개인 인감증명서 발급',
      desc: '정부24를 통한 온라인 발급 신청 및 처리 절차를 확인하실 수 있습니다.',
      url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000025',
      icon: '👤',
      label: '정부24 온라인 발급',
      color: 'from-blue-600 to-indigo-700',
    },
    {
      id: 2,
      title: '법인 인감증명서 발급',
      desc: '대한민국 법원 인터넷등기소를 통한 법인 인감증명서 발급 예약 및 이용 안내입니다.',
      url: 'https://www.iros.go.kr/pos1/jsp/help2/jsp/001002009002001.jsp',
      icon: '🏢',
      label: '인터넷등기소 바로가기',
      color: 'from-slate-700 to-slate-900',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 font-['Pretendard'] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-3xl shadow-lg border border-gray-100 mb-8 transform hover:scale-110 transition-transform">
            <span className="text-5xl">📄</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-8 leading-tight">
            인감증명서 <span className="text-blue-600">온라인 발급</span>
          </h1>
          <p className="text-slate-500 font-bold text-lg sm:text-xl break-keep leading-relaxed">
            중요 금융 거래나 계약에 필요한 인감증명서!<br className="hidden sm:block" />
            정부24(개인)와 인터넷등기소(법인)를 통해 간편하게 확인해보세요.
          </p>
        </header>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="group bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-[5rem] -z-0"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-6xl mb-8 group-hover:animate-bounce transition-all">
                  {link.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-blue-600">
                  {link.title}
                </h3>
                <p className="text-slate-500 font-medium mb-10 break-keep flex-grow">
                  {link.desc}
                </p>
                <div className={`w-full py-4 bg-gradient-to-r ${link.color} text-white text-center font-black rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform flex items-center justify-center gap-2`}>
                  {link.label}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 5l7 7-7 7M5 12h14" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Guide Box */}
        <div className="bg-slate-900 rounded-[3rem] p-10 sm:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <h3 className="text-3xl font-black mb-10 border-b border-white/10 pb-6 flex items-center gap-4">
            <span className="text-blue-400">💡</span> 발급 시 유의사항
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-400 font-medium leading-relaxed break-keep">
            <div className="space-y-4 text-lg">
              <strong className="text-white text-xl block mb-2 underline decoration-blue-500/30 underline-offset-4">사전 등록 필수</strong>
              개인 인감증명서는 온라인 신청 전, 반드시 본인의 주소지 관할 읍·면·동 주민센터에 인감이 등록되어 있어야 합니다.
            </div>
            <div className="space-y-4 text-lg">
              <strong className="text-white text-xl block mb-2 underline decoration-blue-500/30 underline-offset-4">법인인감 매체 지참</strong>
              법인 인감증명서 발급 시에는 RF인감카드, 마그네틱 인감카드 또는 USB 인감매체 중 하나를 소지해야 합니다.
            </div>
          </div>

          <div className="mt-12 p-8 bg-white/5 rounded-3xl border border-white/10 text-sm text-slate-400">
            <p className="font-bold text-white mb-2">📢 참고사항</p>
            <ul>
              <li>• 발급 수수료는 서비스 종류에 따라 상이할 수 있습니다.</li>
              <li>• 보안 프로그램을 설치해야 원활한 서비스 이용이 가능합니다.</li>
              <li>• 공인인증서(공동인증서, 금융인증서 등)가 필요할 수 있습니다.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-slate-400 text-sm font-semibold tracking-wider">
          © 2026 E-GOV CERTIFICATE HUB.
        </footer>
      </div>
    </div>
  );
}
