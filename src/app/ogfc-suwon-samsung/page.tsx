import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'OG FC vs 수원삼성 블루윙즈 중계 안내',
  description: '흥미진진한 K리그2 맞대결! OG FC(오리지널 FC)와 수원삼성의 경기 중계 정보와 실시간 유튜브 링크를 확인하세요.',
  keywords: ['OGFC', 'OG FC 중계', '수원삼성', '수원삼성중계', 'K리그2중계', '오리지널FC'],
};

export default function SoccerMatchPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-['Pretendard'] overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-orange-600/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 sm:py-24">
        {/* Match Card Section */}
        <div className="relative w-full aspect-video sm:aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl border border-white/5 group">
          <Image
            src="/ogfc-suwon-bg.png"
            alt="OGFC vs Suwon Samsung Match Banner"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
          
          {/* Match Status Badge */}
          <div className="absolute top-8 left-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-red-600 rounded-full animate-pulse shadow-lg shadow-red-600/20">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="text-xs font-black tracking-widest uppercase">Live Match Today</span>
            </div>
          </div>

          {/* Match Title */}
          <div className="absolute bottom-8 left-8 right-8">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tighter mb-2 leading-tight">
              OG FC <span className="text-slate-400 font-light mx-2">VS</span> 수원삼성
            </h1>
            <p className="text-slate-300 font-bold tracking-widest text-sm sm:text-base">
              K LEAGUE 2 2026 SEASON MATCHUP
            </p>
          </div>
        </div>

        {/* Action Button Section */}
        <div className="flex flex-col gap-8 mb-20">
          <Link
            href="https://www.youtube.com/watch?v=GqOWmmwBmIA"
            className="group relative block w-full bg-gradient-to-r from-blue-700 to-blue-500 p-1 rounded-[2.5rem] shadow-2xl transition-all duration-300 hover:shadow-blue-500/30 hover:-translate-y-1"
          >
            <div className="bg-[#050505] rounded-[2.4rem] p-8 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative">
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-300"></div>
              
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center text-5xl shadow-lg transform group-hover:rotate-6 transition-transform">
                  🎬
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-black text-white mb-1 group-hover:text-blue-400 transition-colors">실시간 중계 시청하기</h3>
           
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-3 px-8 py-3 bg-blue-600 rounded-full font-black text-lg group-hover:bg-blue-500 transition-colors">
                WATCH NOW
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M5 12h14" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Info Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 font-medium">
          <div className="p-10 bg-white/[0.03] backdrop-blur-xl rounded-[3rem] border border-white/5">
            <h4 className="text-blue-400 font-black text-xl mb-6 flex items-center gap-3">
              📍 경기 안내
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-3">
                <span className="text-blue-500">✔</span> OG FC (Original Football Club) 홈 경기
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">✔</span> K리그2 정규 라운드 맞대결
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">✔</span> 실시간 스코어 및 중계 제공
              </li>
            </ul>
          </div>
          <div className="p-10 bg-white/[0.03] backdrop-blur-xl rounded-[3rem] border border-white/5">
            <h4 className="text-orange-400 font-black text-xl mb-6 flex items-center gap-3">
              ⚡ 관람 꿀팁
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-3">
                <span className="text-orange-500">✔</span> 유튜브 채널 알림 설정 필수
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange-500">✔</span> 고화질 시청을 위해 Wi-Fi 권장
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange-500">✔</span> 댓글창으로 실시간 응원 참여
              </li>
            </ul>
          </div>
        </div>

        {/* Footer info */}
        <footer className="text-center text-slate-500 font-black text-xs tracking-[0.4em] uppercase">
          © 2026 K LEAGUE FANS HUB. ALL RIGHTS RESERVED.
        </footer>
      </div>
    </div>
  );
}
