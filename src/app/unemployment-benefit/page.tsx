import React from 'react';
import Link from 'next/link';
import { 
  FaBriefcase, 
  FaChevronRight, 
  FaCalculator, 
  FaFileContract, 
  FaUserCheck, 
  FaHandHoldingUsd,
  FaQuestionCircle,
  FaShieldAlt,
  FaExternalLinkAlt,
  FaCheckCircle
} from 'react-icons/fa';

export const metadata = {
  title: '2026 실업급여(구직급여) 신청 조건 금액 바로가기 | 고용24 수급자격 가이드',
  description: '2026년 실업급여(구직급여) 신청 조건, 지급 금액, 상한액/하한액, 소정급여일수 표 및 고용24 공식 신청 사이트 바로가기 안내.',
};

export default function UnemploymentBenefitPage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 selection:bg-blue-500/30" style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}>
      
      {/* Deep Navy/Emerald Ambient Lights */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[75vw] h-[75vw] rounded-full bg-blue-950/30 blur-[140px] mix-blend-screen"></div>
        <div className="absolute top-[35%] -right-[15%] w-[65vw] h-[65vw] rounded-full bg-indigo-950/20 blur-[130px] mix-blend-screen"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-emerald-950/20 blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        
        {/* Hero Header */}
        <div className="text-center mb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-blue-500/30 backdrop-blur-md text-blue-400 text-sm font-semibold tracking-wider uppercase mb-1">
            <FaBriefcase className="animate-pulse text-blue-400" />
            WORK24 UNEMPLOYMENT BENEFIT DIRECTORY
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            2026 실업급여(구직급여)<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
              신청 조건 & 금액 완벽 가이드
            </span>
          </h1>
          
          <p className="text-zinc-400 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed break-keep">
            고용24(Work24) 공식 수급자격 신청 시스템 바로가기. 
            피보험 단위기간 180일 조건, 2026년 1일 구직급여 상한액·하한액 및 모의계산 방법을 확인하세요.
          </p>
        </div>

        {/* ======================================================== */}
        {/* HIGH-CTR ACTION BUTTONS DIRECTLY BELOW INTRO             */}
        {/* ======================================================== */}
        <div className="space-y-6 mb-16 max-w-3xl mx-auto">
          
          {/* Main Official Work24 Unemployment Benefit CTA */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-950/50 via-zinc-900/90 to-emerald-950/40 border border-blue-500/40 backdrop-blur-md text-center shadow-2xl relative overflow-hidden space-y-4">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full pointer-events-none"></div>
            
            <p className="text-xs sm:text-sm text-blue-300 font-bold tracking-wide flex items-center justify-center gap-2">
              <FaHandHoldingUsd className="text-emerald-400 text-base" />
              고용노동부 고용24(Work24) 공식 수급자격 신청 시스템
            </p>

            <Link 
              href="https://m.work24.go.kr/cm/c/f/1100/selecSystInfo.do"
              className="relative inline-flex items-center justify-between gap-4 w-full px-6 py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 text-white font-extrabold text-base sm:text-xl border border-emerald-300/50 shadow-[0_4px_25px_rgba(37,99,235,0.45)] hover:shadow-[0_6px_35px_rgba(37,99,235,0.65)] transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 rounded-2xl bg-emerald-400/20 animate-ping opacity-75 pointer-events-none"></span>
              <span className="relative z-10 flex items-center gap-3">
                <FaBriefcase className="text-xl text-emerald-200" />
                고용24 실업급여(구직급여) 공식 신청 바로가기
              </span>
              <FaChevronRight className="relative z-10 text-sm group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Related Welfare & Resignation Services */}
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-5 sm:p-6 backdrop-blur-md">
            <p className="text-xs text-zinc-400 font-semibold mb-3 tracking-wide">💼 관련 서식 & 정부지원금 안내 바로가기</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link 
                href="https://plus.zucca100.com/resignation-letter"
                className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-900/80 hover:bg-blue-600 text-zinc-100 hover:text-white font-bold text-xs sm:text-sm border border-white/10 hover:border-blue-400 transition-all duration-300"
              >
                <span>사직서 양식 & 권고사직 안내</span>
                <FaChevronRight className="text-[10px] group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link 
                href="https://plus.zucca100.com/earned-income-tax-credit-2026-guide"
                className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-900/80 hover:bg-indigo-600 text-zinc-100 hover:text-white font-bold text-xs sm:text-sm border border-white/10 hover:border-indigo-400 transition-all duration-300"
              >
                <span>2026 근로장려금 신청 조건</span>
                <FaChevronRight className="text-[10px] group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link 
                href="https://plus.zucca100.com/welfare"
                className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-900/80 hover:bg-emerald-600 text-zinc-100 hover:text-white font-bold text-xs sm:text-sm border border-white/10 hover:border-emerald-400 transition-all duration-300"
              >
                <span>정부 복지 혜택 통합 조회</span>
                <FaChevronRight className="text-[10px] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* Section 1: Overview */}
        <div className="mb-16 bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
            <FaBriefcase className="text-blue-400" />
            실업급여(구직급여)란 무엇인가요?
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed break-keep">
            실업급여는 고용보험 가입 근로자가 실직하여 재취업 활동을 하는 기간 동안 소정의 급여를 지급함으로써 실직으로 인한 생활 불안을 극복하고 제2의 경제적 자립을 지원하는 정부 제도입니다.
          </p>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed break-keep">
            실업급여 중 가장 대표적인 항목이 <strong>구직급여</strong>이며, 위로금이나 퇴직금 성격이 아닌 <strong>‘적극적인 재취업 노력’</strong>을 전제로 지급되는 구직 활동 지원금입니다.
          </p>
        </div>

        {/* Section 2: Application Conditions */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-black mb-8 flex items-center gap-3 text-white">
            <FaUserCheck className="text-emerald-400" />
            실업급여(구직급여) 핵심 신청 조건 4가지
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-blue-500/20 backdrop-blur-sm space-y-2">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold">조건 1</span>
              <h3 className="text-lg font-bold text-white">피보험 단위기간 180일 이상</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                이직(퇴사) 전 18개월 동안 고용보험 피보험 단위기간이 통산하여 180일 이상이어야 합니다. (유급휴일 포함)
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.03] border border-emerald-500/20 backdrop-blur-sm space-y-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">조건 2</span>
              <h3 className="text-lg font-bold text-white">비자발적 퇴사 사유</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                경영상 해고, 권고사직, 계약기간 만료, 폐업 등 본인의 중대한 과실 없는 비자발적 이직이어야 합니다.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.03] border border-indigo-500/20 backdrop-blur-sm space-y-2">
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold">조건 3</span>
              <h3 className="text-lg font-bold text-white">근로 의사와 능력 보유</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                일할 수 있는 능력과 의사가 있음에도 불구하고 취업하지 못한 상태여야 합니다.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.03] border border-cyan-500/20 backdrop-blur-sm space-y-2">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold">조건 4</span>
              <h3 className="text-lg font-bold text-white">적극적인 재취업 노력</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                구직 활동, 직업훈련 참여 등 실업인정 기간 동안 적극적인 재취업 노력을 증명해야 합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Amount Calculation */}
        <div className="mb-16 bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
            <FaCalculator className="text-indigo-400" />
            2026년 실업급여 지급 금액 산정 및 상한액·하한액
          </h2>

          <div className="p-5 rounded-2xl bg-zinc-900/80 border border-white/5 space-y-3">
            <div className="text-sm font-bold text-blue-300">💡 1일 구직급여일액 계산 공식</div>
            <p className="text-xs sm:text-sm text-zinc-200 font-mono bg-black/40 p-3 rounded-xl border border-white/10">
              1일 구직급여일액 = 이직 전 3개월간 평균임금의 60%
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-2">
              <span className="font-bold text-emerald-400 text-base">🔺 1일 상한액</span>
              <p className="text-xl font-black text-white">66,000 원</p>
              <p className="text-xs text-zinc-400">월 최대 약 198만원 (30일 기준)</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-2">
              <span className="font-bold text-blue-400 text-base">🔻 1일 하한액</span>
              <p className="text-xl font-black text-white">63,104 원</p>
              <p className="text-xs text-zinc-400">퇴직 시 최저임금 80% (1일 8시간 근무 기준)</p>
            </div>
          </div>
        </div>

        {/* Section 4: Benefit Days Table */}
        <div className="mb-16 bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
            <FaFileContract className="text-emerald-400" />
            연령 및 가입기간별 소정급여일수 (지급기간)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left text-zinc-300 border-collapse">
              <thead className="bg-zinc-900 text-zinc-100 font-bold border-b border-white/10">
                <tr>
                  <th className="p-3 sm:p-4">연령 및 구분</th>
                  <th className="p-3 sm:p-4">1년 미만</th>
                  <th className="p-3 sm:p-4">1년~3년</th>
                  <th className="p-3 sm:p-4">3년~5년</th>
                  <th className="p-3 sm:p-4">5년~10년</th>
                  <th className="p-3 sm:p-4">10년 이상</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3 sm:p-4 font-bold text-blue-300">50세 미만</td>
                  <td className="p-3 sm:p-4">120일</td>
                  <td className="p-3 sm:p-4">150일</td>
                  <td className="p-3 sm:p-4">180일</td>
                  <td className="p-3 sm:p-4">210일</td>
                  <td className="p-3 sm:p-4 font-bold text-emerald-400">240일</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-3 sm:p-4 font-bold text-indigo-300">50세 이상 및 장애인</td>
                  <td className="p-3 sm:p-4">120일</td>
                  <td className="p-3 sm:p-4">180일</td>
                  <td className="p-3 sm:p-4">210일</td>
                  <td className="p-3 sm:p-4">240일</td>
                  <td className="p-3 sm:p-4 font-bold text-emerald-400">270일</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 5: Step by Step Application */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-black mb-8 flex items-center gap-3 text-white">
            <FaCheckCircle className="text-blue-400" />
            고용24 온라인 실업급여 신청 절차
          </h2>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 flex gap-4 items-start">
              <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">1</span>
              <div>
                <strong className="text-white text-base">피보험자격 이직확인서 & 사업주 상실신고 확인</strong>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">퇴사 후 전 직장에서 고용센터로 이직확인서와 고용보험 상실신고서를 처리했는지 고용24에서 조회합니다.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 flex gap-4 items-start">
              <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">2</span>
              <div>
                <strong className="text-white text-base">워크넷(Worknet) 구직등록</strong>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">고용24 웹사이트 또는 모바일 앱을 통해 워크넷 구직신청을 완료합니다.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 flex gap-4 items-start">
              <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">3</span>
              <div>
                <strong className="text-white text-base">수급자격 신청자 온라인 사전교육 이수</strong>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">고용24에서 제공하는 1시간 분량의 수급자격 교육 동영상을 시청합니다.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 flex gap-4 items-start">
              <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">4</span>
              <div>
                <strong className="text-white text-base">관할 고용센터 방문 및 수급자격 신청</strong>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">교육 이수 후 14일 이내 관할 고용센터를 방문하여 수급자격 인정 신청서를 제출합니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: FAQ */}
        <div className="mb-16 bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black flex items-center gap-3 text-white">
            <FaQuestionCircle className="text-blue-400" />
            실업급여(구직급여) 자주 묻는 질문 (Q&A)
          </h2>

          <div className="space-y-4 text-sm text-zinc-300">
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-2">
              <strong className="text-blue-300 font-bold block text-base">Q. 자발적 퇴사 시에도 실업급여를 받을 수 있는 경우가 있나요?</strong>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                네. 사업장 이전으로 통근 시간이 왕복 3시간 이상 소요되거나, 임금체불, 최저임금 미달, 성희롱·괴롭힘 피해, 부모·친족의 부양을 위한 퇴사 등 불피치한 사유가 인정되면 수급이 가능합니다.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-2">
              <strong className="text-blue-300 font-bold block text-base">Q. 퇴사 후 언제까지 신청해야 하나요?</strong>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                퇴직한 다음 날부터 12개월(1년) 이내에 신청해야 합니다. 1년이 지나면 남아있는 소정급여일수가 있더라도 급여를 받을 수 없으므로 퇴사 즉시 신청하는 것을 권장합니다.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-2">
              <strong className="text-blue-300 font-bold block text-base">Q. 실업급여 수급 중 아르바이트나 수입이 생기면 어떻게 되나요?</strong>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                실업급여 수급 기간 동안 소득(일용직, 프리랜서, 사업소득 등)이 발생하면 실업인정일에 반드시 신고해야 합니다. 신고하지 않을 경우 부정수급으로 처리되어 급여 환수 및 추가 징수가 부과될 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/60 via-zinc-900/90 to-emerald-950/60 border border-blue-500/30 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white">고용24에서 실업급여 신청 자격을 확인하세요</h3>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto">
            공식 고용24 시스템을 통해 실시간 자격 조회 및 인터넷 사전 신청을 손쉽게 진행할 수 있습니다.
          </p>
          <div className="pt-2">
            <Link 
              href="https://m.work24.go.kr/cm/c/f/1100/selecSystInfo.do"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 text-white font-black text-base hover:scale-105 transition-transform border border-white/20 shadow-lg"
            >
              <span>고용24 실업급여 공식 신청 바로가기</span>
              <FaChevronRight className="text-xs" />
            </Link>
          </div>
        </div>

        {/* Footer Notice */}
        <div className="mt-16 text-center text-xs text-zinc-600 leading-relaxed max-w-xl mx-auto break-keep">
          본 안내 페이지는 국민 맞춤형 복지 정보 제공을 목적으로 작성되었습니다. 정확한 수급자격 판정 및 심사는 고용노동부 관할 고용센터 및 고용24 공식 웹사이트를 참조하시기 바랍니다.
        </div>

      </div>
    </div>
  );
}
