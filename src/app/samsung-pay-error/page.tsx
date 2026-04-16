import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '삼성페이 오류 해결 방법 | 카드 재등록, 고객센터, 공식 홈페이지 안내',
  description: '삼성페이 결제 오류, 카드 인식 불가 등 문제 발생 시 해결 방법을 정리했습니다. 삼성페이 공식 홈페이지, 카드 재등록 방법, 고객센터 연결 링크를 확인하세요.',
  keywords: ['삼성페이오류', '삼성페이결제오류', '삼성페이카드재등록', '삼성페이고객센터', '삼성페이해결방법', 'SamsungPay'],
};

export default function SamsungPayErrorPage() {
  const links = [
    {
      id: 1,
      title: '삼성페이 공식 홈페이지',
      desc: '삼성카드 및 삼성페이의 공식 서비스 안내와 결제 혜택 정보를 확인하실 수 있습니다.',
      url: 'https://www.samsungcard.com/personal/card/pay/UHPPCC0390M0.jsp',
      icon: '🌐',
      label: '공식 홈페이지 바로가기',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      id: 2,
      title: '삼성페이 카드 재등록',
      desc: '카드 인식 오류나 삭제 후 재등록이 필요한 경우, 공식 서비스 센터의 안내에 따라 조치할 수 있습니다.',
      url: 'https://www.samsungsvc.co.kr/solution/37517',
      icon: '💳',
      label: '카드 재등록 방법 보기',
      color: 'from-indigo-600 to-purple-600',
    },
    {
      id: 3,
      title: '삼성페이 고객센터',
      desc: '전화 상담이나 온라인 문의가 필요할 때 삼성 공식 서포트 페이지에서 도움을 받으실 수 있습니다.',
      url: 'https://www.samsung.com/sec/support/your-service/ansTmr/',
      icon: '📞',
      label: '고객센터 바로가기',
      color: 'from-purple-600 to-pink-600',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-['Pretendard'] py-16 px-4 sm:px-6 flex flex-col items-center">
      {/* Wave Background Decorative */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50 to-transparent -z-10"></div>

      {/* Header Section */}
      <div className="w-full max-w-4xl text-center mb-16">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-xl border border-blue-50 mb-8 transform hover:rotate-6 transition-transform">
          <span className="text-4xl text-blue-600">📱</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-8 leading-tight text-slate-900 break-keep">
          삼성페이 <span className="text-blue-600">오류 해결</span> 가이드
        </h1>
        <p className="text-slate-500 font-bold text-lg sm:text-2xl max-w-3xl mx-auto break-keep leading-relaxed">
          결제 오류나 카드 등록 문제가 발생했나요?<br className="hidden sm:block" />
          가장 빠르고 정확한 공식 해결 방법을 통해 문제를 해결해 보세요.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {links.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            className="group bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col h-full"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 rounded-bl-[5rem] group-hover:opacity-10 transition-opacity duration-700`}></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-500 font-medium leading-relaxed mb-10 break-keep flex-grow">
                {item.desc}
              </p>
              
              <div className={`inline-flex items-center justify-center w-full py-4 px-6 bg-gradient-to-r ${item.color} text-white font-black rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-[1.02] transition-all`}>
                {item.label}
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M3 12h18" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Guide Section */}
      <div className="w-full max-w-4xl">
        <div className="bg-slate-900 rounded-[3rem] p-10 sm:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-10 border-b border-white/10 pb-6 flex items-center gap-4">
              <span className="text-blue-400">💡</span> 자주 발생하는 문제 유형
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-400 font-medium leading-relaxed break-keep">
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                <strong className="text-white text-xl block mb-3">결제 시 인식 불가</strong>
                지문 인식이 되었으나 단말기에 대어도 응답이 없는 경우, NFC 설정 확인 또는 카드 재등록이 권장됩니다.
              </div>
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                <strong className="text-white text-xl block mb-3">네트워크 연결 오류</strong>
                데이터 연결 상태가 원활하지 않으면 인증 과정에서 오류가 발생할 수 있으니 Wi-Fi보다 모바일 데이터를 권장합니다.
              </div>
            </div>

            <div className="mt-12 p-8 bg-blue-600/10 rounded-3xl border border-blue-500/20">
                <p className="text-blue-400 font-black mb-4">📢 조치 전 확인사항</p>
                <ul className="text-sm space-y-3 text-slate-300">
                    <li>• 삼성 계정에 정상적으로 로그인되어 있는지 확인해 주세요.</li>
                    <li>• 스마트폰의 소프트웨어가 최신 버전인지 확인해 주세요.</li>
                    <li>• 카드사의 서버 점검 시간일 경우 결제가 지연될 수 있습니다.</li>
                </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-slate-400 text-sm font-semibold tracking-wider">
        © 2026 SAMSUNG PAY SUPPORT HUB. NOT AFFILIATED WITH SAMSUNG.
      </footer>
    </div>
  );
}
