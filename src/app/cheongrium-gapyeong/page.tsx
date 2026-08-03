import React from 'react';
import Link from 'next/link';
import { 
  FaTree, 
  FaChevronRight, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaLeaf, 
  FaStar, 
  FaInfoCircle, 
  FaExternalLinkAlt,
  FaCheckCircle,
  FaSpa
} from 'react-icons/fa';

export const metadata = {
  title: '가평 청리움 예약 바로가기 | 힐링 스테이, 요금, 예약 가이드',
  description: '청정 자연 속 휴식 공간 가평 청리움(Cheongrium) 공식 예약 링크트리 바로가기. 힐링스테이, 프로그램, 이용안내 및 실시간 예약 정보를 제공합니다.',
};

export default function CheongriumGapyeongPage() {
  return (
    <div className="min-h-screen bg-[#060907] text-zinc-100 selection:bg-emerald-500/30" style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}>
      
      {/* Forest Emerald Ambient Lights */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[75vw] h-[75vw] rounded-full bg-emerald-950/25 blur-[140px] mix-blend-screen"></div>
        <div className="absolute top-[35%] -right-[15%] w-[65vw] h-[65vw] rounded-full bg-teal-950/20 blur-[130px] mix-blend-screen"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-green-950/20 blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        
        {/* Hero Header */}
        <div className="text-center mb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-emerald-500/30 backdrop-blur-md text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-1">
            <FaLeaf className="animate-pulse text-emerald-400" />
            CHEONGRIUM HEALING STAY GAPYEONG
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            자연 속 완벽한 힐링 휴식<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-green-400">
              가평 청리움 예약 가이드
            </span>
          </h1>
          
          <p className="text-zinc-400 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed break-keep">
            맑은 공기와 숲이 어우러진 숲속 힐링 리조트 가평 청리움. 
            아래 공식 실시간 예약 링크트리를 통해 예약 및 이용 정보를 손쉽게 확인하세요.
          </p>
        </div>

        {/* ======================================================== */}
        {/* HIGH-CTR ACTION BUTTONS DIRECTLY BELOW INTRO             */}
        {/* ======================================================== */}
        <div className="space-y-6 mb-16 max-w-3xl mx-auto">
          
          {/* Main Reservation CTA - Pulsing Emerald Button */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-900/90 to-teal-950/30 border border-emerald-500/40 backdrop-blur-md text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none"></div>
            
            <p className="text-xs sm:text-sm text-emerald-300 mb-4 font-bold tracking-wide flex items-center justify-center gap-2">
              <FaStar className="text-emerald-400" />
              가평 청리움 공식 실시간 예약 및 채널
            </p>

            <Link 
              href="https://linktr.ee/cheongrium"
              className="relative inline-flex items-center justify-between gap-4 w-full px-6 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 text-zinc-950 font-black text-base sm:text-xl border border-emerald-300/60 shadow-[0_4px_25px_rgba(16,185,129,0.45)] hover:shadow-[0_6px_35px_rgba(16,185,129,0.65)] transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 rounded-2xl bg-emerald-400/30 animate-ping opacity-75 pointer-events-none"></span>
              <span className="relative z-10 flex items-center gap-3">
                <FaTree className="text-xl text-zinc-950" />
                가평 청리움 예약 공식 링크트리 바로가기
              </span>
              <FaChevronRight className="relative z-10 text-sm group-hover:translate-x-1 transition-transform text-zinc-950" />
            </Link>
          </div>

          {/* Related Travel & Stay Buttons */}
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-5 sm:p-6 backdrop-blur-md">
            <p className="text-xs text-zinc-400 font-semibold mb-3 tracking-wide">🌿 관련 숙박 & 여행 할인혜택 모음</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link 
                href="https://zucca100.com/2026-stay-festa"
                className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-900/80 hover:bg-emerald-600 text-zinc-100 hover:text-white font-bold text-xs sm:text-sm border border-white/10 hover:border-emerald-400 transition-all duration-300"
              >
                <span>대한민국 숙박 세일 페스타 할인쿠폰</span>
                <FaChevronRight className="text-[10px] group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link 
                href="https://zucca100.com/gyeongbokgung-night"
                className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-900/80 hover:bg-teal-600 text-zinc-100 hover:text-white font-bold text-xs sm:text-sm border border-white/10 hover:border-teal-400 transition-all duration-300"
              >
                <span>국내 문화재 & 수목원 투어 예약</span>
                <FaChevronRight className="text-[10px] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* Section 1: Features */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-black mb-8 flex items-center gap-3 text-white">
            <FaSpa className="text-emerald-400" />
            가평 청리움 주요 매력 & 특징
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-emerald-500/20 backdrop-blur-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                🌲
              </div>
              <h3 className="text-xl font-bold text-white">청정 숲속 힐링 스테이</h3>
              <p className="text-xs text-zinc-400 leading-relaxed break-keep">
                가평 설악의 맑은 공기와 빽빽한 숲길 속에서 일상의 스트레스를 해소할 수 있는 숲 리조트입니다.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.03] border border-emerald-500/20 backdrop-blur-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
                🏕️
              </div>
              <h3 className="text-xl font-bold text-white">다채로운 휴식 시설</h3>
              <p className="text-xs text-zinc-400 leading-relaxed break-keep">
                힐링 객실, 프리미엄 글램핑, 잔디 광장, 산책로 등 자연 친화적인 휴식 공간을 제공합니다.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.03] border border-emerald-500/20 backdrop-blur-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 font-bold">
                🧘‍♂️
              </div>
              <h3 className="text-xl font-bold text-white">웰니스 체험 프로그램</h3>
              <p className="text-xs text-zinc-400 leading-relaxed break-keep">
                명상, 숲 체험, 야외 힐링 프로그램 등 지친 몸과 마음을 채우는 맞춤형 프로그램을 운영합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Info & Location */}
        <div className="mb-16 bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black flex items-center gap-3 text-white">
            <FaMapMarkerAlt className="text-emerald-400" />
            이용 안내 및 위치 정보
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-300">
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-2">
              <span className="font-bold text-emerald-400">📍 위치</span>
              <p className="text-xs text-zinc-400">경기도 가평군 설악면 미사리로 267-124 (청리움)</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-2">
              <span className="font-bold text-emerald-400">🕒 예약 방식</span>
              <p className="text-xs text-zinc-400">공식 링크트리 채널을 통한 실시간 객실 및 프로그램 사전 예약</p>
            </div>
          </div>
        </div>

        {/* Section 3: Tips */}
        <div className="p-6 sm:p-8 rounded-3xl bg-emerald-950/15 border border-emerald-900/30 backdrop-blur-sm space-y-4">
          <div className="flex items-center gap-3 text-emerald-300 font-bold text-lg">
            <FaInfoCircle />
            <span>가평 청리움 예약 꿀팁</span>
          </div>
          <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 list-disc pl-5 leading-relaxed">
            <li>주말 및 성수기 시즌에는 조기 마감될 수 있으므로 방문 2~3주 전 미리 예약하는 것을 추천합니다.</li>
            <li>공식 링크트리(Linktree) 페이지를 방문하시면 객실 정보, 인스타그램 소식, 실시간 예약 안내를 한눈에 볼 수 있습니다.</li>
          </ul>
        </div>

        {/* Footer info */}
        <div className="mt-16 text-center text-xs text-zinc-600 leading-relaxed max-w-xl mx-auto break-keep">
          본 페이지는 가평 청리움 예약 안내를 위한 바로가기를 제공합니다. 실시간 예약 및 서비스 관련 문의는 청리움 공식 채널에서 확인하실 수 있습니다.
        </div>

      </div>
    </div>
  );
}
