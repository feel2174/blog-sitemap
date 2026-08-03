import React from 'react';
import Link from 'next/link';
import { 
  FaCar, 
  FaChevronRight, 
  FaSearch, 
  FaCreditCard, 
  FaExclamationTriangle, 
  FaCheckCircle,
  FaQuestionCircle,
  FaShieldAlt,
  FaArrowRight
} from 'react-icons/fa';

export const metadata = {
  title: '한국도로공사 미납 통행료 조회 바로가기 | 고속도로 하이패스 미납 조회 및 납부 방법',
  description: '생각보다 1분이면 확인되는 한국도로공사 미납 통행료 및 고속도로 하이패스 미납 조회 서비스. 민자고속도로 통합 조회, 부가통행료 예방 및 즉시 납부 가이드를 제공합니다.',
};

export default function UnpaidTollFeePage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 selection:bg-blue-500/30" style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}>
      
      {/* Expressway Blue Ambient Lights */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[75vw] h-[75vw] rounded-full bg-blue-950/30 blur-[140px] mix-blend-screen"></div>
        <div className="absolute top-[35%] -right-[15%] w-[65vw] h-[65vw] rounded-full bg-indigo-950/20 blur-[130px] mix-blend-screen"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-cyan-950/20 blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        
        {/* Hero Header */}
        <div className="text-center mb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-blue-500/30 backdrop-blur-md text-blue-400 text-sm font-semibold tracking-wider uppercase mb-1">
            <FaCar className="animate-pulse text-blue-400" />
            KOREA EXPRESSWAY TOLL FEE DIRECTORY
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            미납 통행료, 생각보다<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              1분이면 확인됩니다
            </span>
          </h1>
          
          <p className="text-zinc-400 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed break-keep">
            한국도로공사 및 전국 23개 민자고속도로 하이패스 미납 통행료 통합 조회 서비스. 
            차량번호 입력 후 실시간으로 미납 내역을 확인하고 즉시 납부하세요.
          </p>
        </div>

        {/* ======================================================== */}
        {/* HIGH-CTR ACTION BUTTONS DIRECTLY BELOW INTRO             */}
        {/* ======================================================== */}
        <div className="space-y-6 mb-16 max-w-3xl mx-auto">
          
          {/* Main Highway Unpaid Toll Fee Reservation CTAs */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-950/50 via-zinc-900/90 to-indigo-950/40 border border-blue-500/40 backdrop-blur-md text-center shadow-2xl relative overflow-hidden space-y-4">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full pointer-events-none"></div>
            
            <p className="text-xs sm:text-sm text-blue-300 font-bold tracking-wide flex items-center justify-center gap-2">
              <FaSearch className="text-blue-400" />
              한국도로공사 공식 미납 통행료 조회 및 납부 시스템
            </p>

            <div className="grid grid-cols-1 gap-3.5">
              {/* Primary CTA 1 */}
              <Link 
                href="https://www.ex.co.kr/site/com/pageProcess.do;jsessionid=2WRnIPSXzsSEJO7JQyufqDuH1YD4iBsvqi9Wy56T7qf0gMVVTL3BulZr2SY6M1rv.aexhomewas1_servlet_exhome"
                className="relative inline-flex items-center justify-between gap-4 w-full px-6 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-[#1a4f8c] via-blue-600 to-indigo-600 text-white font-extrabold text-base sm:text-lg border border-blue-400/40 shadow-[0_4px_25px_rgba(26,79,140,0.55)] hover:shadow-[0_6px_35px_rgba(26,79,140,0.75)] transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="absolute inset-0 rounded-2xl bg-blue-500/20 animate-ping opacity-75 pointer-events-none"></span>
                <span className="relative z-10 flex items-center gap-3">
                  <FaCreditCard className="text-xl text-blue-200" />
                  한국도로공사 미납 통행료 조회 바로가기
                </span>
                <FaChevronRight className="relative z-10 text-sm group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Primary CTA 2 */}
              <Link 
                href="https://www.ex.co.kr/site/com/pageProcess.do;jsessionid=2WRnIPSXzsSEJO7JQyufqDuH1YD4iBsvqi9Wy56T7qf0gMVVTL3BulZr2SY6M1rv.aexhomewas1_servlet_exhome"
                className="relative inline-flex items-center justify-between gap-4 w-full px-6 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 text-white font-extrabold text-base sm:text-lg border border-cyan-400/40 shadow-[0_4px_25px_rgba(30,58,138,0.55)] hover:shadow-[0_6px_35px_rgba(30,58,138,0.75)] transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <FaCar className="text-xl text-cyan-200" />
                  고속도로/하이패스 미납 통행료 조회 바로가기
                </span>
                <FaChevronRight className="relative z-10 text-sm group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Related Transport & Vehicle Services */}
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-5 sm:p-6 backdrop-blur-md">
            <p className="text-xs text-zinc-400 font-semibold mb-3 tracking-wide">🚘 관련 자동차 & 교통 서비스 바로가기</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link 
                href="https://plus.zucca100.com/car-tax-calculator"
                className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-900/80 hover:bg-blue-600 text-zinc-100 hover:text-white font-bold text-xs sm:text-sm border border-white/10 hover:border-blue-400 transition-all duration-300"
              >
                <span>자동차세 계산기 & 연납 할인</span>
                <FaChevronRight className="text-[10px] group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link 
                href="https://plus.zucca100.com/car-rotation"
                className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-900/80 hover:bg-indigo-600 text-zinc-100 hover:text-white font-bold text-xs sm:text-sm border border-white/10 hover:border-indigo-400 transition-all duration-300"
              >
                <span>승용차 요일제 감면 안내</span>
                <FaChevronRight className="text-[10px] group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link 
                href="https://plus.zucca100.com/tmoney-go"
                className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-900/80 hover:bg-cyan-600 text-zinc-100 hover:text-white font-bold text-xs sm:text-sm border border-white/10 hover:border-cyan-400 transition-all duration-300"
              >
                <span>티머니GO 교통카드 등록</span>
                <FaChevronRight className="text-[10px] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* Section 1: Why Checking First Matters */}
        <div className="mb-16 bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
            <FaCheckCircle className="text-blue-400" />
            한국도로공사 미납 고속도로통행료미납 확인이 먼저 필요한 이유
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed break-keep">
            고속도로를 이용하다 보면 하이패스 단말기 오류, 카드 잔액 부족, 통신 장애, 차량번호 인식 실패 등 예상하지 못한 이유로 통행료가 미납되는 경우가 있습니다. 대부분은 당장 알아차리지 못하기 때문에 뒤늦게 문자나 우편을 받고 확인하는 경우도 적지 않습니다.
          </p>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed break-keep">
            예전에는 민자고속도로와 한국도로공사 구간을 각각 따로 확인해야 하는 번거로움이 있었지만, 현재는 조회 시스템이 크게 개선되어 한 곳에서 미납 내역을 확인하고 납부할 수 있는 환경이 마련되었습니다. 따라서 운전을 자주 하는 분이라면 정기적으로 미납 여부를 확인하는 습관이 도움이 됩니다.
          </p>
        </div>

        {/* Section 2: How to Check Steps */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-black mb-8 flex items-center gap-3 text-white">
            <FaSearch className="text-indigo-400" />
            한국도로공사 하이패스 미납 조회 방법
          </h2>
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-blue-500/20 backdrop-blur-sm space-y-4">
            <p className="text-sm text-zinc-300 font-semibold mb-2">미납 통행료 조회 절차는 1분이면 간단하게 완료됩니다.</p>
            <ol className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              <li className="p-4 rounded-2xl bg-zinc-900/80 border border-white/5 flex flex-col items-center text-center">
                <span className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs flex items-center justify-center mb-2">1</span>
                <span className="text-xs font-bold text-white">홈페이지 접속</span>
              </li>
              <li className="p-4 rounded-2xl bg-zinc-900/80 border border-white/5 flex flex-col items-center text-center">
                <span className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs flex items-center justify-center mb-2">2</span>
                <span className="text-xs font-bold text-white">미납 통행료 메뉴</span>
              </li>
              <li className="p-4 rounded-2xl bg-zinc-900/80 border border-white/5 flex flex-col items-center text-center">
                <span className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs flex items-center justify-center mb-2">3</span>
                <span className="text-xs font-bold text-white">차량번호 입력</span>
              </li>
              <li className="p-4 rounded-2xl bg-zinc-900/80 border border-white/5 flex flex-col items-center text-center">
                <span className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs flex items-center justify-center mb-2">4</span>
                <span className="text-xs font-bold text-white">본인인증 진행</span>
              </li>
              <li className="p-4 rounded-2xl bg-zinc-900/80 border border-white/5 flex flex-col items-center text-center">
                <span className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs flex items-center justify-center mb-2">5</span>
                <span className="text-xs font-bold text-white">미납 확인 및 납부</span>
              </li>
            </ol>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pt-2 break-keep">
              모바일에서도 동일하게 조회할 수 있어 외출 중에도 간편하게 확인이 가능합니다. 특히 차량번호만으로 조회가 가능하기 때문에 몇 분이면 확인이 끝나는 경우가 대부분입니다.
            </p>
          </div>
        </div>

        {/* Section 3: Why Pay Immediately */}
        <div className="mb-16 bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
            <FaExclamationTriangle className="text-amber-400" />
            통행료미납조회 후 바로 납부해야 하는 이유
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed break-keep">
            미납 통행료를 오래 방치하는 것은 추천하지 않습니다. 단순히 금액이 적다고 미루는 경우도 있지만, 일정 요건에 해당하면 <strong>부가통행료(10배)</strong>가 부과될 수 있으며 반복적인 미납은 불이익으로 이어질 가능성도 있습니다.
          </p>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed break-keep">
            실제로 하이패스 이용 중 가장 많이 발생하는 사례는 카드 사용 정지, 후불카드 한도 초과, 단말기 연결 불량입니다. 운전자는 정상적으로 통과했다고 생각하지만 시스템에서는 미납으로 기록되는 경우도 있기 때문에 주기적인 확인이 가장 안전한 방법입니다.
          </p>
        </div>

        {/* Section 4: Latest Services */}
        <div className="mb-16 bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
            <FaShieldAlt className="text-cyan-400" />
            한국도로공사 미납 통행료 조회 시 달라진 최신 서비스
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed break-keep">
            최근에는 서비스가 개선되면서 <strong>전국 23개 민자고속도로의 미납 통행료</strong>도 한국도로공사 통합 시스템을 통해 조회하고 납부할 수 있게 되었습니다. 과거처럼 운영사별 홈페이지를 각각 방문할 필요가 줄어들어 이용 편의성이 크게 향상되었습니다.
          </p>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed break-keep">
            이러한 통합 서비스는 운전자 입장에서 가장 체감되는 변화 중 하나입니다. 여러 사이트를 찾아다니던 번거로운 과정이 사라졌고, 모바일에서도 손쉽게 확인과 결제가 가능해졌습니다.
          </p>
        </div>

        {/* Section 5: Prevention Tips */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-black mb-6 flex items-center gap-3 text-white">
            <FaCheckCircle className="text-emerald-400" />
            하이패스 미납 통행료를 예방하는 5가지 방법
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-white/5 text-sm text-zinc-300 space-y-1">
              <span className="font-bold text-emerald-400">1. 후불 카드 확인</span>
              <p className="text-xs text-zinc-400">후불 하이패스 카드 정상 등록 및 한도 상태 점검</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-white/5 text-sm text-zinc-300 space-y-1">
              <span className="font-bold text-emerald-400">2. 선불 카드 수시 확인</span>
              <p className="text-xs text-zinc-400">선불 하이패스 카드 잔액 사전 충전 확인</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-white/5 text-sm text-zinc-300 space-y-1">
              <span className="font-bold text-emerald-400">3. 단말기 전원 장착 점검</span>
              <p className="text-xs text-zinc-400">단말기 전원 케이블 및 장착 위치 밀착 여부 점검</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-white/5 text-sm text-zinc-300 space-y-1">
              <span className="font-bold text-emerald-400">4. 차량 정보 변경 수정</span>
              <p className="text-xs text-zinc-400">차량 변경/명의 이전 시 하이패스 단말기 정보 수정</p>
            </div>
          </div>
          <div className="mt-4 p-4 rounded-2xl bg-zinc-900/60 border border-white/5 text-xs text-zinc-400 leading-relaxed">
            💡 <strong>장거리 운행 후 미납 여부 확인:</strong> 법인 차량이나 여러 사람이 함께 운행하는 경우 미납 사실을 모르고 지나는 경우가 빈번합니다. 장거리 운행 후에는 실시간 조회로 불필요한 가산금 부과를 예방하세요.
          </div>
        </div>

        {/* Mid-Page Action Buttons Repeat */}
        <div className="mb-16 text-center space-y-3 max-w-2xl mx-auto">
          <Link 
            href="https://www.ex.co.kr/site/com/pageProcess.do;jsessionid=2WRnIPSXzsSEJO7JQyufqDuH1YD4iBsvqi9Wy56T7qf0gMVVTL3BulZr2SY6M1rv.aexhomewas1_servlet_exhome"
            className="flex items-center justify-between px-6 py-4 rounded-2xl bg-[#1a4f8c] hover:bg-blue-600 text-white font-extrabold text-sm sm:text-base border border-blue-400/30 transition-all duration-300 group"
          >
            <span>한국도로공사 미납 통행료 조회 바로가기</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="https://www.ex.co.kr/site/com/pageProcess.do;jsessionid=2WRnIPSXzsSEJO7JQyufqDuH1YD4iBsvqi9Wy56T7qf0gMVVTL3BulZr2SY6M1rv.aexhomewas1_servlet_exhome"
            className="flex items-center justify-between px-6 py-4 rounded-2xl bg-indigo-900 hover:bg-indigo-700 text-white font-extrabold text-sm sm:text-base border border-indigo-400/30 transition-all duration-300 group"
          >
            <span>고속도로/하이패스 미납 통행료 조회 바로가기</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Section 6: FAQ */}
        <div className="mb-16 bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black flex items-center gap-3 text-white">
            <FaQuestionCircle className="text-blue-400" />
            한국도로공사 미납 고속도로통행료미납 자주 묻는 질문 (Q&A)
          </h2>

          <div className="space-y-4 text-sm text-zinc-300">
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-2">
              <strong className="text-blue-300 font-bold block text-base">Q. 하이패스 단말기가 정상인데도 미납이 발생할 수 있나요?</strong>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                네. 카드 오류, 통신 장애, 차량번호 인식 문제 등으로 정상 통과처럼 보여도 미납 처리되는 사례가 발생할 수 있습니다.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-2">
              <strong className="text-blue-300 font-bold block text-base">Q. 민자고속도로도 함께 조회되나요?</strong>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                현재는 통합 조회 서비스가 제공되어 다수의 민자고속도로 미납 통행료도 함께 조회 및 납부할 수 있습니다.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-2">
              <strong className="text-blue-300 font-bold block text-base">Q. 조회는 무료인가요?</strong>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                네. 차량번호 조회와 본인인증을 통해 미납 여부를 무료로 확인할 수 있으며, 미납 내역이 있는 경우에만 납부를 진행하면 됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Notice */}
        <div className="mt-16 text-center text-xs text-zinc-600 leading-relaxed max-w-xl mx-auto break-keep">
          본 가이드는 정보 제공 목적으로 작성되었으며, 미납 통행료 조회 및 납부 관련 서비스는 한국도로공사 공식 통합 웹사이트에서 진행됩니다.
        </div>

      </div>
    </div>
  );
}
