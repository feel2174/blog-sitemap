import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import CoupangAds from '@/components/CoupangAds';

export const metadata: Metadata = {
  title: '안전신문고 사이트 및 앱 다운로드 | 생활 속 위험 신고하기',
  description: '안전신문고 홈페이지 바로가기와 안드로이드, iOS 앱 다운로드 링크를 제공합니다. 내 주변의 위험 요소를 간편하게 신고하고 안전한 사회를 만들어보세요.',
  keywords: ['안전신문고', '안전신문고앱', '생활불편신고', '위험신고', '안전신문고다운로드', '정부서비스'],
};

export default function SafetyReportPage() {
  const links = [
    {
      id: 1,
      title: '안전신문고 공식 사이트',
      desc: '웹 브라우저에서 바로 위험 요소를 신고하거나 처리 결과를 확인할 수 있습니다.',
      url: 'https://www.safetyreport.go.kr/',
      icon: '🏛️',
      label: '공식 사이트 바로가기',
      color: 'from-orange-500 to-red-600',
    },
    {
      id: 2,
      title: '구글 플레이스토어',
      desc: '안드로이드 스마트폰 사용자를 위한 안전신문고 전용 앱 다운로드입니다.',
      url: 'https://play.google.com/store/apps/details?id=kr.go.safepeople&hl=ko',
      icon: '🤖',
      label: 'Android 앱 설치',
      color: 'from-green-600 to-emerald-700',
    },
    {
      id: 3,
      title: '애플 앱스토어',
      desc: '아이폰(iOS) 사용자를 위한 안전신문고 공식 앱 설치 페이지입니다.',
      url: 'https://apps.apple.com/kr/app/%EC%95%88%EC%A0%84%EC%8B%A0%EB%AC%B8%EA%B3%A0-%EA%B5%AC-%EC%8A%A4%EB%A7%88%ED%8A%B8%EA%B5%AD%EB%AF%BC%EC%A0%9C%EB%B3%B4-%EC%83%9D%ED%99%9C%EB%B6%88%ED%8E%B8%EC%8B%A0%EA%B3%A0/id963555704',
      icon: '🍎',
      label: 'iOS 앱 설치',
      color: 'from-slate-700 to-slate-900',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fffcf5] text-slate-900 font-['Pretendard'] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-48 h-48 bg-orange-100/50 blur-3xl rounded-full -z-10"></div>
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-[2.5rem] shadow-2xl border border-orange-50 mb-8 transform hover:scale-110 transition-transform duration-500">
            <span className="text-5xl">🚨</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-8 leading-tight">
            안전신문고 <span className="text-orange-600">서비스 안내</span>
          </h1>
          <p className="text-slate-500 font-bold text-lg sm:text-xl break-keep leading-relaxed max-w-2xl mx-auto">
            내 주변의 위험 요소를 발견하셨나요? <br className="hidden sm:block" />
            안전신문고를 통해 신속하게 신고하고 <br className="hidden sm:block" />
            우리 모두의 안전을 지켜주세요.
          </p>
        </header>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="group bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-[5rem]"></div>
              
              <div className="relative z-10 flex flex-col h-full items-center">
                <div className="text-6xl mb-10 group-hover:scale-125 transition-transform duration-500">
                  {link.icon}
                </div>
                
                <h3 className="text-xl font-black text-slate-800 mb-4 group-hover:text-orange-600 transition-colors">
                  {link.title}
                </h3>
                
                <p className="text-slate-500 font-medium leading-relaxed mb-10 break-keep text-sm flex-grow">
                  {link.desc}
                </p>
                
                <div className={`mt-auto inline-flex items-center justify-center w-full py-4 px-6 bg-gradient-to-r ${link.color} text-white font-black rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-[1.03] transition-all`}>
                  {link.label}
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M3 12h18" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-slate-900 rounded-[3rem] p-10 sm:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-10 border-b border-white/10 pb-6 flex items-center gap-4">
              <span className="text-orange-400">💡</span> 신고 가능 항목
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-400 font-medium leading-relaxed break-keep text-lg">
              <div className="space-y-4">
                <strong className="text-white text-xl block mb-2 underline decoration-orange-500/30 underline-offset-8">안전 신고</strong>
                도로 파손, 낙석, 시설물 파손 등 생활 속의 모든 안전 위험 요소를 신고할 수 있습니다.
              </div>
              <div className="space-y-4">
                <strong className="text-white text-xl block mb-2 underline decoration-orange-500/30 underline-offset-8">생활불편 신고</strong>
                불법 주정차, 쓰레기 무단 투기 등 도로교통 및 생활 속 불편 사항을 신고합니다.
              </div>
            </div>

            <div className="mt-16 p-8 bg-white/5 rounded-3xl border border-white/10">
                 <p className="text-orange-400 font-black mb-4 flex items-center gap-2 uppercase tracking-wider">
                   📢 신고 시 팁
                 </p>
                 <ul className="text-sm space-y-3 text-slate-400 font-semibold">
                   <li>• 현장 사진이나 동영상을 첨부하면 더 신속하게 처리됩니다.</li>
                   <li>• 신고 위치를 정확하게 지정해 주세요 (GPS 연동 권장).</li>
                   <li>• 처리 결과는 앱 내 알림이나 문자로 실시간 안내받을 수 있습니다.</li>
                 </ul>
            </div>
          </div>
        </div>

        <CoupangAds 
            keyword="소화기" 
            title="🚒 안전은 미리 준비하는 것"
            hookText="신고만큼 중요한 것은 초기 대응! 우리 집과 차량의 안전을 지켜줄 휴대용 소화기와 투척용 소화기, 재난 대비 안전 키트 필수 리스트입니다."
        />

        {/* Footer */}
        <footer className="mt-24 text-center text-slate-400 text-sm font-bold tracking-[0.2em] uppercase">
          © 2026 SAFETY REPORT SUPPORT HUB.
        </footer>
      </div>
    </div>
  );
}
