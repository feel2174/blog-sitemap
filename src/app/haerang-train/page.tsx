import React from 'react';
import Link from 'next/link';
import { 
  FaTrain, 
  FaChevronRight, 
  FaCalendarAlt, 
  FaBed, 
  FaCompass, 
  FaStar, 
  FaInfoCircle, 
  FaTicketAlt,
  FaCheckCircle
} from 'react-icons/fa';

export const metadata = {
  title: '레일크루즈 해랑열차 예약 바로가기 | 가격, 코스, 객실 요금 완벽 가이드',
  description: '대한민국 최고급 호텔식 관광열차 레일크루즈 해랑 공식 홈페이지 예약 바로가기. 전국일주, 동부권, 서부권 코스 안내 및 요금, 객실 정보 안내.',
};

export default function HaerangTrainPage() {
  return (
    <div className="min-h-screen bg-[#07060c] text-zinc-100 selection:bg-amber-500/30" style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}>
      
      {/* Luxury Gold Ambient Background Lights */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[75vw] h-[75vw] rounded-full bg-amber-950/20 blur-[140px] mix-blend-screen"></div>
        <div className="absolute top-[35%] -right-[15%] w-[65vw] h-[65vw] rounded-full bg-yellow-950/15 blur-[130px] mix-blend-screen"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-purple-950/15 blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        
        {/* Hero Header */}
        <div className="text-center mb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-amber-500/30 backdrop-blur-md text-amber-400 text-sm font-semibold tracking-wider uppercase mb-1">
            <FaTrain className="animate-pulse text-amber-400" />
            RAIL CRUISE HAERANG RESERVATION
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            대한민국 최상위 호텔식 관광열차<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
              레일크루즈 해랑 예약 가이드
            </span>
          </h1>
          
          <p className="text-zinc-400 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed break-keep">
            달리는 호텔 레일크루즈 해랑에서 즐기는 특별한 휴식. 
            아래 공식 예매처 버튼을 통해 실시간 잔여 객실 확인 및 예약을 손쉽게 진행하세요.
          </p>
        </div>

        {/* ======================================================== */}
        {/* HIGH-CTR ACTION BUTTONS DIRECTLY BELOW INTRO             */}
        {/* ======================================================== */}
        <div className="space-y-6 mb-16 max-w-3xl mx-auto">
          
          {/* Main Haerang Reservation CTA - Pulsing Luxury Gold Button */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-950/40 via-zinc-900/90 to-yellow-950/30 border border-amber-500/40 backdrop-blur-md text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full pointer-events-none"></div>
            
            <p className="text-xs sm:text-sm text-amber-300 mb-4 font-bold tracking-wide flex items-center justify-center gap-2">
              <FaStar className="text-amber-400" />
              공식 실시간 객실 예매 및 잔석 조회
            </p>

            <Link 
              href="https://www.railcruise.co.kr/website/infault.asp"
              className="relative inline-flex items-center justify-between gap-4 w-full px-6 py-5 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-zinc-950 font-black text-base sm:text-xl border border-yellow-300/60 shadow-[0_4px_25px_rgba(245,158,11,0.45)] hover:shadow-[0_6px_35px_rgba(245,158,11,0.65)] transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 rounded-2xl bg-yellow-400/30 animate-ping opacity-75 pointer-events-none"></span>
              <span className="relative z-10 flex items-center gap-3">
                <FaTicketAlt className="text-xl text-zinc-950" />
                레일크루즈 해랑 공식 예매처 바로가기
              </span>
              <FaChevronRight className="relative z-10 text-sm group-hover:translate-x-1 transition-transform text-zinc-950" />
            </Link>
          </div>

          {/* Related Transport Reservation Buttons */}
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-5 sm:p-6 backdrop-blur-md">
            <p className="text-xs text-zinc-400 font-semibold mb-3 tracking-wide">🚆 관련 열차 & 교통편 예매 사이트 모음</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link 
                href="https://www.letskorail.com"
                className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-900/80 hover:bg-blue-600 text-zinc-100 hover:text-white font-bold text-xs sm:text-sm border border-white/10 hover:border-blue-400 transition-all duration-300"
              >
                <span>코레일(LetsKorail) 예매</span>
                <FaChevronRight className="text-[10px] group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link 
                href="https://www.etk.srail.kr"
                className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-900/80 hover:bg-purple-600 text-zinc-100 hover:text-white font-bold text-xs sm:text-sm border border-white/10 hover:border-purple-400 transition-all duration-300"
              >
                <span>SRT 고속열차 예매</span>
                <FaChevronRight className="text-[10px] group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link 
                href="https://zucca100.com/tmoney-go"
                className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-900/80 hover:bg-emerald-600 text-zinc-100 hover:text-white font-bold text-xs sm:text-sm border border-white/10 hover:border-emerald-400 transition-all duration-300"
              >
                <span>고속/시외버스 (티머니GO)</span>
                <FaChevronRight className="text-[10px] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* Section 1: Haerang Course Info */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-black mb-8 flex items-center gap-3 text-white">
            <FaCompass className="text-amber-400" />
            해랑열차 대표 여행 코스 안내
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Course 1 */}
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-amber-500/20 backdrop-blur-sm space-y-3">
              <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
                2박 3일 일정
              </div>
              <h3 className="text-xl font-bold text-white">전국일주 코스 (아우르)</h3>
              <p className="text-xs text-zinc-400 leading-relaxed break-keep">
                서울 - 순천 - 부산 - 경주 - 정동진 - 태백 - 서울을 순회하는 해랑의 시그니처 전국 관광 코스입니다.
              </p>
            </div>

            {/* Course 2 */}
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-amber-500/20 backdrop-blur-sm space-y-3">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold">
                1박 2일 일정
              </div>
              <h3 className="text-xl font-bold text-white">동부권 코스 (해오름)</h3>
              <p className="text-xs text-zinc-400 leading-relaxed break-keep">
                서울 - 단양 - 영월 - 경주 - 정동진 - 서울을 둘러보는 동해 및 신라 문화재 탐방 코스입니다.
              </p>
            </div>

            {/* Course 3 */}
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-amber-500/20 backdrop-blur-sm space-y-3">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                1박 2일 일정
              </div>
              <h3 className="text-xl font-bold text-white">서부권 코스 (씨밀레)</h3>
              <p className="text-xs text-zinc-400 leading-relaxed break-keep">
                서울 - 전주 - 순천 - 보성 - 광주 - 서울을 돌아보는 호남 맛기행 및 미식 문화 여행 코스입니다.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Room Suites */}
        <div className="mb-16 bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
          <h2 className="text-2xl sm:text-3xl font-black mb-6 flex items-center gap-3 text-white">
            <FaBed className="text-amber-400" />
            호텔식 최고급 객실 구성
          </h2>

          <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <div>
                <strong className="text-amber-300 font-bold text-base">스위트룸 (Suite Room)</strong>
                <p className="text-xs text-zinc-400 mt-1">킹사이즈 침대, DVD 플레이어, 샤워부스, 세면대, 응접용 소파 완비 (2인 기준)</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <div>
                <strong className="text-amber-300 font-bold text-base">디럭스룸 (Deluxe Room)</strong>
                <p className="text-xs text-zinc-400 mt-1">더블 침대, 모니터, 샤워부스, 화장실을 갖춘 실속형 품격 객실 (2인 기준)</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <div>
                <strong className="text-amber-300 font-bold text-base">패밀리룸 (Family Room)</strong>
                <p className="text-xs text-zinc-400 mt-1">2층 벙커 침대 구조, 샤워부스 및 수납공간을 갖춘 가족 전용 객실 (3~4인 기준)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Reservation Tips */}
        <div className="p-6 sm:p-8 rounded-3xl bg-amber-950/15 border border-amber-900/30 backdrop-blur-sm space-y-4">
          <div className="flex items-center gap-3 text-amber-300 font-bold text-lg">
            <FaInfoCircle />
            <span>해랑열차 예약 시 꿀팁 & 주의사항</span>
          </div>
          <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 list-disc pl-5 leading-relaxed">
            <li>해랑열차는 인기 여행 상품으로 매월 예약 오픈 일정(통상 출발 2~3개월 전)에 맞춰 조기 마감될 수 있습니다.</li>
            <li>모든 여행 요금에는 열차 숙박비, 관광지 입장료, 전문 가이드비, 고급 식사 및 라운지 음료 서비스가 포함되어 있습니다.</li>
            <li>공식 홈페이지에서 잔여 객실 수량을 실시간 확인 후 예약을 진행하세요.</li>
          </ul>
        </div>

        {/* Footer info */}
        <div className="mt-16 text-center text-xs text-zinc-600 leading-relaxed max-w-xl mx-auto break-keep">
          본 페이지는 해랑열차 예약 공식 안내 사이트로의 바로가기를 제공합니다. 모든 예약 및 결제 서비스는 한국철도공사(KORAIL) 레일크루즈 해랑 공식 웹사이트에서 진행됩니다.
        </div>

      </div>
    </div>
  );
}
