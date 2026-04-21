import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import CoupangAds from '@/components/CoupangAds';

export const metadata: Metadata = {
  title: '서울재즈페스티벌 2026 예매 및 공식 정보 안내',
  description: '서울재즈페스티벌 2026(SJF)의 티켓 예매 링크, 공식 인스타그램, 공식 홈페이지 등 필수 정보를 한곳에 모았습니다. 편리하게 예매하고 축제를 즐기세요.',
  keywords: ['서울재즈페스티벌', '서재페', 'SJF', '서울재즈페스티벌예매', '멜론티켓', '서울재즈페스티벌2026'],
};

export default function SeoulJazzFestivalPage() {
  const links = [
    {
      id: 1,
      name: '서울재즈페스티벌 예매',
      title: '멜론티켓 예매 바로가기',
      desc: '공식 예매처인 멜론티켓에서 티켓을 골라보세요.',
      url: 'https://ticket.melon.com/search/index.htm?q=%EC%84%9C%EC%9A%B8%EC%9E%AC%EC%A6%88%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C',
      icon: '🎫',
      theme: 'bg-emerald-500',
    },
    {
      id: 2,
      name: '공식 인스타그램',
      title: 'SJF 공식 인스타그램',
      desc: '가장 빠른 라인업 공지 및 현장 소식을 확인하세요.',
      url: 'https://www.instagram.com/seouljazzfestival/',
      icon: '📸',
      theme: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500',
    },
    {
      id: 3,
      name: '공식 홈페이지',
      title: '2026 공식 홈페이지',
      desc: '페스티벌 상세 정보 및 관람 안내를 확인하실 수 있습니다.',
      url: 'https://www.seouljazz.co.kr/',
      icon: '🌐',
      theme: 'bg-slate-800',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-['Pretendard'] overflow-hidden">
      {/* Background with Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-900/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 sm:py-24">
        {/* Banner Section */}
        <div className="relative w-full h-64 sm:h-96 rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl border border-white/10 group">
          <Image
            src="/seoul-jazz-festival-bg.png"
            alt="Seoul Jazz Festival Banner"
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-widest uppercase mb-3 border border-white/20">
              Seoul Jazz Festival 2026
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              SEOUL JAZZ <span className="text-amber-400">FESTIVAL</span>
            </h1>
          </div>
        </div>

        {/* Header Description */}
        <div className="text-center mb-16">
          <p className="text-slate-400 font-medium text-lg sm:text-xl break-keep">
            아름다운 선율과 낭만이 가득한 시간,<br />
            서울재즈페스티벌의 모든 정보를 확인하세요.
          </p>
        </div>

        {/* Link Grid */}
        <div className="grid gap-6 mb-20">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="group relative flex flex-col sm:flex-row items-center gap-6 bg-white/[0.03] backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-500 shadow-xl"
            >
              <div className={`w-20 min-w-[5rem] h-20 ${link.theme} rounded-2xl flex items-center justify-center text-4xl shadow-inner transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                {link.icon}
              </div>
              <div className="flex-grow text-center sm:text-left">
                <span className="text-amber-400/80 text-xs font-bold uppercase tracking-widest mb-1 block">
                  {link.name}
                </span>
                <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-amber-400 transition-colors">
                  {link.title}
                </h3>
                <p className="text-slate-400 font-medium break-keep">
                  {link.desc}
                </p>
              </div>
              <div className="flex-shrink-0 group-hover:translate-x-2 transition-transform duration-500">
                <svg className="w-8 h-8 text-white/20 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7-7 7M5 12h14" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Card */}
        <div className="bg-gradient-to-br from-amber-500/10 to-purple-600/10 rounded-[3rem] p-10 sm:p-16 border border-white/5 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px]"></div>
          
          <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
            <span className="text-amber-400">✨</span> Festival Tip
          </h3>
          
          <div className="space-y-6 text-slate-300 font-medium">
            <p className="flex items-start gap-4">
              <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs text-amber-400 border border-white/10 flex-shrink-0 mt-1">1</span>
              인기 아티스트의 공연은 티켓이 빠르게 매진될 수 있으니 예매 오픈 시간을 미리 확인하세요.
            </p>
            <p className="flex items-start gap-4">
              <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs text-amber-400 border border-white/10 flex-shrink-0 mt-1">2</span>
              공식 인스타그램을 팔로우하면 라인업과 타임테이블 정보를 가장 먼저 받아보실 수 있습니다.
            </p>
            <p className="flex items-start gap-4">
              <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs text-amber-400 border border-white/10 flex-shrink-0 mt-1">3</span>
              날씨에 따른 관람 안내와 소지품 규정은 공식 홈페이지의 FAQ를 참고해주세요.
            </p>
          </div>
        </div>

        <CoupangAds 
            keyword="돗자리" 
            title="🎷 페스티벌의 낭만을 더해줄 필수템"
            hookText="서재페 가서 인생 사진 건지고 싶다면? 감성 가득한 방수 피크닉 매트와 장시간 신선함을 유지해줄 보냉백, 휴대용 선풍기 특가 리스트입니다."
        />

        {/* Footer */}
        <footer className="mt-24 text-center">
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-8"></div>
          <p className="text-white/30 text-xs font-bold tracking-[0.3em] uppercase">
            © 2026 SEOUL JAZZ FESTIVAL GUIDE
          </p>
        </footer>
      </div>
    </div>
  );
}
