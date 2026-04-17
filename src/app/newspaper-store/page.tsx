import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '신문가게 v5 모바일 웹 및 앱 다운로드 | 언제 어디서나 신문 보기',
  description: '신문가게 v5 모바일 웹 바로가기와 안드로이드 앱 다운로드 링크를 제공합니다. 종이 신문의 감성 그대로 모바일에서 편리하게 감상하세요.',
  keywords: ['신문가게', '신문가게v5', '신문가게모바일', '신문가게앱다운로드', '모바일신문', '전자신문보기'],
};

export default function NewspaperStorePage() {
  const links = [
    {
      id: 1,
      title: '신문가게 v5 모바일 웹',
      desc: '별도의 설치 없이 브라우저에서 바로 신문을 확인하실 수 있습니다.',
      url: 'https://www.newspaper.kr/mobile/',
      icon: '📰',
      label: '모바일 웹 바로가기',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      id: 2,
      title: '신문가게 앱 다운로드',
      desc: '안드로이드 전용 앱(원스토어)을 설치하여 더 쾌적하게 이용해 보세요.',
      url: 'https://m.onestore.co.kr/v2/ko-kr/app/0000695878',
      icon: '📱',
      label: '안드로이드 앱 설치하기',
      color: 'from-blue-600 to-indigo-700',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-['Pretendard'] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-[2rem] shadow-2xl border border-slate-100 mb-8 transform hover:scale-110 hover:rotate-3 transition-all duration-500">
            <span className="text-5xl">🗞️</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-8 leading-tight">
            신문가게 <span className="text-emerald-600 underline decoration-wavy decoration-emerald-100 underline-offset-8">공식 바로가기</span>
          </h1>
          <p className="text-slate-500 font-bold text-lg sm:text-xl break-keep leading-relaxed max-w-2xl mx-auto">
            종이 신문의 가독성을 모바일 그대로!<br className="hidden sm:block" />
            신문가게 v5 모바일 웹과 전용 앱으로 <br className="hidden sm:block" />
            최신 뉴스를 가장 편리하게 만나보세요.
          </p>
        </header>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="group bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-[5rem]"></div>
              
              <div className="relative z-10 flex flex-col h-full items-center">
                <div className="text-7xl mb-10 group-hover:scale-125 transition-transform duration-500">
                  {link.icon}
                </div>
                
                <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors">
                  {link.title}
                </h3>
                
                <p className="text-slate-500 font-medium leading-relaxed mb-12 break-keep">
                  {link.desc}
                </p>
                
                <div className={`mt-auto inline-flex items-center justify-center w-full py-5 px-8 bg-gradient-to-r ${link.color} text-white font-black text-lg rounded-2xl shadow-xl group-hover:shadow-[0_15px_30px_rgba(16,185,129,0.3)] group-hover:scale-[1.03] transition-all`}>
                  {link.label}
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M3 12h18" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-slate-900 rounded-[3rem] p-10 sm:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent)] pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black mb-10 pb-6 border-b border-white/10 flex items-center gap-4">
              <span className="text-emerald-400">✨</span> 신문가게 v5의 특징
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-400 font-medium leading-relaxed break-keep">
              <div className="space-y-4">
                <strong className="text-white text-xl block mb-2 underline decoration-emerald-500/50 underline-offset-8 uppercase tracking-wider text-sm">Real View</strong>
                실제 종이 신문의 레이아웃을 디지털 기기 환경에 맞춰 완벽하게 재구성하여 가독성이 뛰어납니다.
              </div>
              <div className="space-y-4">
                <strong className="text-white text-xl block mb-2 underline decoration-emerald-500/50 underline-offset-8 uppercase tracking-wider text-sm">Accessibility</strong>
                모바일 웹과 전용 앱 모두를 지원하여 장소와 시간에 구애받지 않고 언제든 신문을 읽을 수 있습니다.
              </div>
            </div>

            <div className="mt-16 p-8 bg-white/5 rounded-3xl border border-white/10">
                 <p className="text-emerald-400 font-black mb-4 flex items-center gap-2 uppercase tracking-tighter">
                   💡 사용 팁
                 </p>
                 <ul className="text-sm space-y-3 text-slate-400 font-semibold italic">
                   <li>• 자주 방문하신다면 브라우저의 &apos;홈 화면에 추가&apos; 기능을 이용해 보세요.</li>
                   <li>• 안드로이드 사용자는 원스토어 앱을 통해 업데이트 알림을 받을 수 있습니다.</li>
                   <li>• 가로 모드를 지원하는 기기에서는 더 넓은 화면으로 감상 가능합니다.</li>
                 </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 text-center text-slate-400 text-sm font-bold tracking-[0.2em] uppercase">
          © 2026 NEWS STAND SUPPORT HUB.
        </footer>
      </div>
    </div>
  );
}
