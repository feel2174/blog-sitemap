import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '드라마 21세기 대군부인 OTT 다시보기 | 웨이브, 디즈니플러스 바로가기',
  description: '최신 화제 드라마 21세기 대군부인! 웨이브(Wavve)와 디즈니플러스(Disney+)에서 지금 바로 감상하세요. OTT 스트리밍 및 다시보기 정보.',
  keywords: ['21세기대군부인', '드라마추천', '웨이브드라마', '디즈니플러스드라마', 'OTT다시보기', '21세기대군부인스트리밍'],
};

export default function Princess21stCenturyPage() {
  const dramaLinks = [
    {
      id: 1,
      name: '웨이브 (Wavve)',
      title: '21세기 대군부인 웨이브 바로가기',
      desc: '본방 사수 놓쳤다면? 웨이브에서 고화질 VOD로 시청하세요.',
      url: 'https://www.wavve.com/player/vod?programid=M_T60518G',
      color: 'bg-[#153494]', // Wavve Blue
      icon: '🌊',
    },
    {
      id: 2,
      name: '디즈니+ (Disney+)',
      title: '21세기 대군부인 디즈니+ 바로가기',
      desc: '글로벌 화제작! 디즈니 플러스에서 언제 어디서나 스트리밍하세요.',
      url: 'https://www.disneyplus.com/ko-kr/browse/entity-5002284c-af1f-4b2e-a954-fe217793e79a',
      color: 'bg-[#001e51]', // Disney+ Dark Blue
      icon: '🏰',
    },
    {
      id: 3,
      name: '편성표 & 재방송',
      title: '21세기 대군부인 실시간 편성표',
      desc: '놓칠 수 없는 실시간 방송 시간 및 채널별 재방송 일정을 확인하세요.',
      url: 'https://zucca100.com/mbc-live/',
      color: 'bg-red-700', // MBC/Broadcast Red
      icon: '📺',
    },
  ];

  return (
    <div className="min-h-screen bg-[#060b13] text-white py-20 px-4 relative overflow-hidden font-['Pretendard']">
      {/* Background Cinematic Effects */}
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-blue-900/20 to-transparent -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <header className="text-center mb-16 animate-in fade-in slide-in-from-top duration-1000">
          <div className="inline-block px-5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-black tracking-widest mb-8 uppercase">
            Must-Watch K-Drama
          </div>
          <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tighter leading-tight italic">
            21세기 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">대군부인</span>
          </h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-10 shadow-lg shadow-blue-500/50"></div>
          <p className="text-slate-400 text-lg sm:text-2xl font-medium leading-relaxed max-w-2xl mx-auto break-keep italic">
            &quot;현대판 왕실 로맨틱 코미디의 정점!&quot; <br />
            지금 원하시는 플랫폼에서 다시보기와 편성표를 확인해보세요.
          </p>
        </header>

        {/* Drama Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {dramaLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="group relative block p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent hover:from-blue-500/50 hover:to-purple-500/50 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="bg-[#0b121e] rounded-[2.4rem] p-10 h-full flex flex-col items-center text-center relative overflow-hidden border border-white/5">
                {/* Logo Area */}
                <div className={`w-20 h-20 ${link.color} rounded-[2rem] flex items-center justify-center text-4xl mb-8 shadow-2xl group-hover:scale-110 transition-transform`}>
                  {link.icon}
                </div>
                
                <span className="text-blue-400 text-xs font-black tracking-widest mb-3 uppercase opacity-60">
                  Information
                </span>
                <h3 className="text-2xl sm:text-3xl font-black mb-4 group-hover:text-blue-200 transition-colors">
                  {link.name}
                </h3>
                <p className="text-slate-500 font-medium text-sm sm:text-base mb-10 leading-relaxed flex-grow break-keep">
                  {link.desc}
                </p>
                
                <div className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl font-black group-hover:bg-white group-hover:text-black transition-all flex items-center justify-center gap-2">
                  확인하러 가기
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 5l7 7-7 7M5 12h14" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-[#111827] border border-white/5 rounded-[3rem] p-10 sm:p-16 text-center shadow-2xl animate-in fade-in slide-in-from-bottom duration-1000">
           <p className="text-slate-500 text-sm font-black tracking-[0.2em] mb-8 uppercase">Drama Information</p>
           <h4 className="text-xl sm:text-2xl font-bold mb-6 text-slate-200">
              방송 채널 및 스트리밍 플랫폼 안내
           </h4>
           <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400 font-bold">
              <span className="px-5 py-2 bg-white/5 rounded-full">#21세기대군부인</span>
              <span className="px-5 py-2 bg-white/5 rounded-full">#K드라마</span>
              <span className="px-5 py-2 bg-white/5 rounded-full">#웨이브독점</span>
              <span className="px-5 py-2 bg-white/5 rounded-full">#디즈니플러스</span>
              <span className="px-5 py-2 bg-white/5 rounded-full">#정주행추천</span>
           </div>
           
           <div className="mt-12 text-slate-500 text-sm leading-relaxed max-w-sm mx-auto opacity-50">
              해당 링크는 공식 OTT 서비스로 연결됩니다. <br />
              이용권 등에 따라 유료 결제가 필요할 수 있습니다.
           </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <p className="text-slate-600 text-xs font-bold tracking-tighter">
            © 2026 K-DRAMA HUB. ALL RIGHTS RESERVED.
          </p>
        </footer>
      </div>
    </div>
  );
}
