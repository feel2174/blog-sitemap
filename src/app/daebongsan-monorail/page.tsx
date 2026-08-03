import React from 'react';
import Link from 'next/link';
import { 
  FaMountain, 
  FaChevronRight, 
  FaCalendarAlt, 
  FaTicketAlt, 
  FaMapMarkerAlt, 
  FaStar, 
  FaInfoCircle, 
  FaClock,
  FaCheckCircle,
  FaSubway
} from 'react-icons/fa';

export const metadata = {
  title: '함양 대봉산 모노레일 예약 방법 바로가기 | 요금, 코스, 짚라인 가이드',
  description: '함양 대봉산휴양밸리 모노레일 공식 예매처 바로가기. 모노레일 요금, 운영 시간, 코스 소요시간, 짚라인 이용안내 및 현장/인터넷 예약 꿀팁을 제공합니다.',
};

export default function DaebongsanMonorailPage() {
  return (
    <div className="min-h-screen bg-[#070908] text-zinc-100 selection:bg-emerald-500/30" style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}>
      
      {/* Mountain Emerald Ambient Lights */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[75vw] h-[75vw] rounded-full bg-emerald-950/25 blur-[140px] mix-blend-screen"></div>
        <div className="absolute top-[35%] -right-[15%] w-[65vw] h-[65vw] rounded-full bg-teal-950/20 blur-[130px] mix-blend-screen"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-lime-950/20 blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        
        {/* Hero Header */}
        <div className="text-center mb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-emerald-500/30 backdrop-blur-md text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-1">
            <FaMountain className="animate-pulse text-emerald-400" />
            HAMYANG DAEBONGSAN MONORAIL
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            지리산 영봉을 잇는 최장 모노레일<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-lime-400">
              함양 대봉산 모노레일 예약 가이드
            </span>
          </h1>
          
          <p className="text-zinc-400 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed break-keep">
            국내 최장 3.93km 탑승 코스! 대봉산 천왕봉의 웅장한 비경과 백두대간 산줄기를 감상할 수 있는 대봉산 모노레일.
            아래 공식 예매처 버튼을 통해 예매 및 실시간 잔여 수량을 빠르게 확인하세요.
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
              대봉산휴양밸리 공식 인터넷 실시간 예매처
            </p>

            <Link 
              href="https://www.hygn.go.kr/daebongvally.web"
              className="relative inline-flex items-center justify-between gap-4 w-full px-6 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-500 text-zinc-950 font-black text-base sm:text-xl border border-emerald-300/60 shadow-[0_4px_25px_rgba(16,185,129,0.45)] hover:shadow-[0_6px_35px_rgba(16,185,129,0.65)] transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 rounded-2xl bg-emerald-400/30 animate-ping opacity-75 pointer-events-none"></span>
              <span className="relative z-10 flex items-center gap-3">
                <FaTicketAlt className="text-xl text-zinc-950" />
                함양 대봉산 모노레일 공식 예매처 바로가기
              </span>
              <FaChevronRight className="relative z-10 text-sm group-hover:translate-x-1 transition-transform text-zinc-950" />
            </Link>
          </div>

          {/* Related Travel & Transport Buttons */}
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-5 sm:p-6 backdrop-blur-md">
            <p className="text-xs text-zinc-400 font-semibold mb-3 tracking-wide">⛰️ 관련 관광/교통편 예매 사이트 모음</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link 
                href="https://plus.zucca100.com/sorak-cable-car"
                className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-900/80 hover:bg-emerald-600 text-zinc-100 hover:text-white font-bold text-xs sm:text-sm border border-white/10 hover:border-emerald-400 transition-all duration-300"
              >
                <span>설악/지리산 케이블카 예매</span>
                <FaChevronRight className="text-[10px] group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link 
                href="https://plus.zucca100.com/ktx-timetable"
                className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-900/80 hover:bg-teal-600 text-zinc-100 hover:text-white font-bold text-xs sm:text-sm border border-white/10 hover:border-teal-400 transition-all duration-300"
              >
                <span>KTX 기차표 예매 시간표</span>
                <FaChevronRight className="text-[10px] group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link 
                href="https://plus.zucca100.com/2026-stay-festa"
                className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-900/80 hover:bg-lime-600 text-zinc-100 hover:text-white font-bold text-xs sm:text-sm border border-white/10 hover:border-lime-400 transition-all duration-300"
              >
                <span>숙박 세일 페스타 할인쿠폰</span>
                <FaChevronRight className="text-[10px] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* Section 1: Pricing Table */}
        <div className="mb-16 bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
          <h2 className="text-2xl sm:text-3xl font-black mb-6 flex items-center gap-3 text-white">
            <FaTicketAlt className="text-emerald-400" />
            모노레일 & 짚라인 이용 요금
          </h2>

          <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <div>
                <strong className="text-emerald-300 font-bold text-base">모노레일 (왕복 / 대인 기준)</strong>
                <p className="text-xs text-zinc-400 mt-1">성인 15,000원 / 청소년 12,000원 / 어린이 10,000원 (함양군민 할인 가능)</p>
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 self-start sm:self-center">
                왕복 65분 소요
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <div>
                <strong className="text-emerald-300 font-bold text-base">모노레일 (편도 기준)</strong>
                <p className="text-xs text-zinc-400 mt-1">성인 10,000원 (상행 탑승 후 짚라인 이용객 등 선택)</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <div>
                <strong className="text-emerald-300 font-bold text-base">대봉 짚라인 (5개 코스)</strong>
                <p className="text-xs text-zinc-400 mt-1">1인 55,000원 (모노레일 상행 탑승권 포함 패키지 적용)</p>
              </div>
              <span className="text-xs font-bold text-lime-400 bg-lime-500/10 px-3 py-1 rounded-full border border-lime-500/20 self-start sm:self-center">
                최장 짚라인 코스
              </span>
            </div>
          </div>
        </div>

        {/* Section 2: Course Info */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-black mb-8 flex items-center gap-3 text-white">
            <FaClock className="text-emerald-400" />
            모노레일 탑승 코스 & 운행 정보
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-emerald-500/20 backdrop-blur-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-white">상행 코스 (약 32분)</h3>
              <p className="text-xs text-zinc-400 leading-relaxed break-keep">
                대봉스카이랜드 하부승강장에서 대봉산 정상(천왕봉 1,228m) 상부승강장까지 올라가는 구간입니다.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.03] border border-emerald-500/20 backdrop-blur-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-white">정상 관람 (약 20~30분)</h3>
              <p className="text-xs text-zinc-400 leading-relaxed break-keep">
                대봉산 천왕봉 정상 전망대에서 소원바위, 산신령 소원탑 및 백두대간 탁 트인 조망을 관람합니다.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.03] border border-emerald-500/20 backdrop-blur-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center text-lime-400 font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-white">하행 코스 (약 33분)</h3>
              <p className="text-xs text-zinc-400 leading-relaxed break-keep">
                상부승강장에서 하부승강장으로 편안하게 하산하거나, 짚라인을 이용해 스릴있게 하강합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Location & Tips */}
        <div className="mb-16 bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black flex items-center gap-3 text-white">
            <FaMapMarkerAlt className="text-emerald-400" />
            위치 및 예약 팁
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-300">
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-2">
              <span className="font-bold text-emerald-400">📍 내비게이션 주소</span>
              <p className="text-xs text-zinc-400">경상남도 함양군 병곡면 덕평리 산19-2 (대봉스카이랜드 하부승강장)</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-2">
              <span className="font-bold text-emerald-400">💡 인터넷 사전 예매 팁</span>
              <p className="text-xs text-zinc-400">주말/공휴일은 티켓이 조기 매진되므로 인터넷 사전예약(정원의 70%)을 권장합니다.</p>
            </div>
          </div>
        </div>

        {/* Section 4: Notice */}
        <div className="p-6 sm:p-8 rounded-3xl bg-emerald-950/15 border border-emerald-900/30 backdrop-blur-sm space-y-4">
          <div className="flex items-center gap-3 text-emerald-300 font-bold text-lg">
            <FaInfoCircle />
            <span>대봉산 모노레일 이용 시 필수 확인사항</span>
          </div>
          <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 list-disc pl-5 leading-relaxed">
            <li>기상 악화(강풍, 뇌우, 신선한 폭우 등) 시 안전을 위해 모노레일 및 짚라인 운행이 일시 중단될 수 있습니다.</li>
            <li>매주 화요일은 안전점검의 날로 정기 휴장합니다. (단, 화요일이 공휴일인 경우 수요일 휴장)</li>
            <li>인터넷 예매 후 발권 창구에서 예약자 확인 및 승차권 발급을 받아 탑승하세요.</li>
          </ul>
        </div>

        {/* Footer info */}
        <div className="mt-16 text-center text-xs text-zinc-600 leading-relaxed max-w-xl mx-auto break-keep">
          본 페이지는 함양 대봉산휴양밸리 모노레일 공식 예매처로의 바로가기를 제공합니다. 실시간 예매 및 운영 일정은 함양군 공식 웹사이트에서 제공됩니다.
        </div>

      </div>
    </div>
  );
}
