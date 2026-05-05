'use client';

import React from 'react';
import Image from 'next/image';

export default function GyeongbokgungContent() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#cda661] selection:text-black font-sans pb-20">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src="/gyeongbokgung-bg.png"
          alt="경복궁 야간개장 배경"
          className="object-cover w-full h-full opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]"></div>
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-20 sm:pt-32">
        {/* Header Section */}
        <header className="text-center mb-16 space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#cda661]/40 bg-[#cda661]/10 text-[#cda661] text-sm font-medium tracking-widest backdrop-blur-sm">
            2026 GYEONGBOKGUNG NIGHT VIEWING
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ffeaa7] via-[#cda661] to-[#d6a262] tracking-tight drop-shadow-[0_0_15px_rgba(205,166,97,0.3)] break-keep">
            경복궁 야간개장 예매
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 font-medium tracking-wide break-keep">
            달빛 아래 거니는 조선의 궁궐, 잊지 못할 밤의 정취를 예약하세요.
          </p>
        </header>

        {/* Buttons Section */}
        <div className="flex flex-col gap-5 max-w-md mx-auto mb-20">
          <a
            href="https://tickets.interpark.com/goods/26006477"
            className="group relative flex items-center justify-center w-full py-5 rounded-2xl bg-gradient-to-r from-[#cda661] to-[#b38640] overflow-hidden shadow-[0_0_30px_rgba(205,166,97,0.3)] hover:shadow-[0_0_50px_rgba(205,166,97,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <span className="relative text-xl sm:text-2xl font-black text-[#1a1205] tracking-tight drop-shadow-sm">
              인터파크 티켓 예매하기
            </span>
          </a>

          <a
            href="https://royal.khs.go.kr/ROYAL/contents/R601000000.do"
            className="group relative flex items-center justify-center w-full py-4 rounded-2xl bg-[#111111] border border-[#cda661]/50 overflow-hidden hover:bg-[#1a1a1a] transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative text-lg font-bold text-[#cda661]">
              국가유산청 공식 안내 바로가기
            </span>
          </a>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#111111]/80 backdrop-blur-md rounded-3xl p-8 border border-[#333333] hover:border-[#cda661]/50 transition-colors duration-300">
            <div className="w-12 h-12 bg-[#cda661]/10 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🌙</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">관람 시간</h3>
            <p className="text-gray-400 leading-relaxed">
              19:00 ~ 21:30 (입장 마감 20:30)<br/>
              * 매주 월요일, 화요일은 휴궁일입니다.
            </p>
          </div>

          <div className="bg-[#111111]/80 backdrop-blur-md rounded-3xl p-8 border border-[#333333] hover:border-[#cda661]/50 transition-colors duration-300">
            <div className="w-12 h-12 bg-[#cda661]/10 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🎟️</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">관람 요금</h3>
            <p className="text-gray-400 leading-relaxed">
              일반 예매 3,000원<br/>
              * 한복 착용자, 만 65세 이상, 국가유공자 등 무료 (현장발권 가능)
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
