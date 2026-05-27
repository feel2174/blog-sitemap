import React from 'react';
import Link from 'next/link';
import { 
  FaChartLine, 
  FaChevronRight, 
  FaGraduationCap, 
  FaWallet, 
  FaBookOpen, 
  FaExclamationTriangle, 
  FaInfoCircle, 
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';

export const metadata = {
  title: '삼성전자 · SK하이닉스 단일종목 레버리지 ETF 출시 안내 및 투자 방법',
  description: '국내 증시에 상장된 삼성전자와 SK하이닉스 단일종목 레버리지 ETF 상품 정보, 필수 레버리지 교육 이수 및 비대면 증권 계좌개설 신청 방법을 자세히 안내합니다.',
};

export default function LeverageEtfPage() {
  return (
    <div className="min-h-screen bg-[#07080d] text-zinc-100 selection:bg-blue-500/30" style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}>
      
      {/* Brand Glowing Accent Circles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[25%] -left-[15%] w-[80vw] h-[80vw] rounded-full bg-blue-900/10 blur-[130px] mix-blend-screen"></div>
        <div className="absolute -top-[10%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-orange-950/15 blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-zinc-900/10 blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        
        {/* Hero Header */}
        <div className="text-center mb-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2">
            <FaChartLine className="animate-pulse text-blue-500" />
            NEW SINGLE STOCK LEVERAGE ETF
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            삼성전자 · SK하이닉스<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-orange-400">
              단일종목 레버리지 ETF 가이드
            </span>
          </h1>
          
          <p className="text-zinc-400 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed break-keep">
            대한민국 반도체 양대 산맥인 삼성전자와 SK하이닉스 주가를 추종하는 단일종목 2배 레버리지 ETF가 국내 증시에 출시되었습니다.
            아래 필수 단계를 통해 빠르게 거래를 준비해 보세요.
          </p>
        </div>

        {/* Quick Actions Buttons Section (Directly below intro for maximum mobile CTR) */}
        <div className="max-w-2xl mx-auto mb-16 p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md text-center">
          <p className="text-xs sm:text-sm text-zinc-400 mb-4 font-semibold tracking-wide">⚡ 거래 시작을 위한 필수 링크 바로가기</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* CTA Button 1 - Pulse Animation */}
            <Link 
              href="https://zucca100.com/stock-account/"
              className="relative flex items-center justify-between gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-sm sm:text-base border border-blue-400/30 shadow-[0_4px_20px_rgba(37,99,235,0.35)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.55)] transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 rounded-2xl bg-blue-500/20 animate-ping opacity-75 pointer-events-none"></span>
              <span className="relative z-10">비대면 계좌개설 바로가기</span>
              <FaChevronRight className="relative z-10 text-xs group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* CTA Button 2 - Pulse Animation */}
            <Link 
              href="https://www.kifin.or.kr/common/edu/1/detail.do"
              className="relative flex items-center justify-between gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-extrabold text-sm sm:text-base border border-orange-400/30 shadow-[0_4px_20px_rgba(249,115,22,0.35)] hover:shadow-[0_4px_25px_rgba(249,115,22,0.55)] transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 rounded-2xl bg-orange-500/20 animate-ping opacity-75 pointer-events-none"></span>
              <span className="relative z-10 flex items-center gap-2">
                <FaGraduationCap className="text-white text-lg" />
                레버리지 교육 바로가기
              </span>
              <FaChevronRight className="relative z-10 text-xs group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>
        </div>

        {/* Section 1: Product Grid Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Samsung Card */}
          <div className="relative overflow-hidden bg-gradient-to-b from-blue-950/20 to-zinc-900/50 border border-blue-900/30 p-8 rounded-3xl backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:bg-blue-500/10 transition-colors"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                <span className="text-blue-400 font-bold">삼성</span>
              </div>
              <h3 className="text-2xl font-bold text-white">삼성전자 레버리지 ETF</h3>
            </div>
            <p className="text-zinc-400 mb-6 leading-relaxed break-keep">
              국내 증시 시가총액 1위인 삼성전자의 일간 수익률을 2배 추종하는 고위험·고수익 파생형 ETF 상품입니다. 반도체 업황 개선 및 AI 모멘텀이 시작되는 구간에서 수익 극대화를 노리기에 적합합니다.
            </p>
            <div className="space-y-3 border-t border-white/5 pt-4 text-sm text-zinc-400">
              <div className="flex justify-between"><span className="text-zinc-500">배수 구조</span><span className="font-semibold text-blue-400">일간 수익률의 +2.0배 추종</span></div>
              <div className="flex justify-between"><span className="text-zinc-500">추천 타겟</span><span className="font-semibold">단기 주가 반등 구간 트레이더</span></div>
              <div className="flex justify-between"><span className="text-zinc-500">운용 수수료</span><span className="font-semibold">각 운용사 상품별 고시 총보수 참고</span></div>
            </div>
          </div>

          {/* SK Hynix Card */}
          <div className="relative overflow-hidden bg-gradient-to-b from-orange-950/10 to-zinc-900/50 border border-orange-900/20 p-8 rounded-3xl backdrop-blur-sm hover:border-orange-500/40 transition-all duration-500 group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-bl-full pointer-events-none group-hover:bg-orange-500/10 transition-colors"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                <span className="text-orange-400 font-bold">SK</span>
              </div>
              <h3 className="text-2xl font-bold text-white">SK하이닉스 레버리지 ETF</h3>
            </div>
            <p className="text-zinc-400 mb-6 leading-relaxed break-keep">
              HBM(고대역폭메모리) 글로벌 선두 주자인 SK하이닉스의 주가를 2배 추종합니다. 상대적으로 변동성이 더 크고 주가 움직임이 탄력적이기 때문에 고수익을 추구하는 액티브한 투자자에게 적합한 레버리지 상품입니다.
            </p>
            <div className="space-y-3 border-t border-white/5 pt-4 text-sm text-zinc-400">
              <div className="flex justify-between"><span className="text-zinc-500">배수 구조</span><span className="font-semibold text-orange-400">일간 수익률의 +2.0배 추종</span></div>
              <div className="flex justify-between"><span className="text-zinc-500">추천 타겟</span><span className="font-semibold">고변동성 및 AI 수혜 집중 투자자</span></div>
              <div className="flex justify-between"><span className="text-zinc-500">운용 수수료</span><span className="font-semibold">각 운용사 상품별 고시 총보수 참고</span></div>
            </div>
          </div>
        </div>

        {/* Section 2: Step-by-Step Investor Checklist */}
        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 sm:p-10 mb-16 backdrop-blur-md">
          <h2 className="text-2xl sm:text-3xl font-black mb-10 text-center flex items-center justify-center gap-3">
            <FaBookOpen className="text-blue-500" />
            단일종목 레버리지 ETF 투자 절차
          </h2>

          <div className="relative border-l-2 border-zinc-800 ml-4 sm:ml-8 space-y-12 pb-4">
            
            {/* Step 1 */}
            <div className="relative pl-8 sm:pl-10">
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#07080d] border-2 border-blue-500 flex items-center justify-center text-sm font-bold text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                1
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    비대면 증권 계좌 개설
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-semibold">필수 준비</span>
                  </h3>
                  <p className="text-zinc-400 mt-2 text-sm sm:text-base leading-relaxed break-keep">
                    레버리지 ETF를 매매하기 위해서는 국내 주식 및 ETF 거래가 가능한 증권 계좌가 필요합니다. 
                    신규 개설 시 수수료 우대 혜택 및 각종 개설 리워드를 주는 증권사 목록을 확인하고 비대면으로 간편하게 계좌를 개설해 보세요.
                  </p>
                </div>
                
                <div className="pt-1">
                  <Link 
                    href="https://zucca100.com/stock-account/"
                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-bold transition-colors group"
                  >
                    <span>증권 계좌개설 방법 & 개설처 바로가기</span>
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative pl-8 sm:pl-10">
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#07080d] border-2 border-orange-500 flex items-center justify-center text-sm font-bold text-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.3)]">
                2
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    금융투자교육원 레버리지 사전 교육 이수
                    <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-semibold">의무 요건</span>
                  </h3>
                  <p className="text-zinc-400 mt-2 text-sm sm:text-base leading-relaxed break-keep">
                    금융감독원 규정에 따라 레버리지 ETF/ETN 상품을 첫 거래하시는 모든 개인 투자자는 금융투자교육원에서 제공하는 **사전 교육(1시간)**을 의무적으로 이수해야 합니다. 
                    교육 이수 후 발급받은 이수 번호를 거래할 증권사 앱(HTS/MTS)에 등록해야 매매가 정상적으로 가능합니다.
                  </p>
                  <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-zinc-500 list-disc list-inside pl-1">
                    <li>교육 과정명: <span className="text-zinc-300">한눈에 알아보는 레버리지 ETF/ETN 가이드</span></li>
                    <li>교육 시간: <span className="text-zinc-300">약 1시간 (수강료 3,000원)</span></li>
                    <li>이수 후 절차: <span className="text-zinc-300">이수증 번호 복사 후 증권사 앱에서 &apos;레버리지 교육등록&apos; 검색 후 입력</span></li>
                  </ul>
                </div>

                <div className="pt-1">
                  <Link 
                    href="https://www.kifin.or.kr/common/edu/1/detail.do"
                    className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 font-bold transition-colors group"
                  >
                    <span>금융투자교육원 교육 수강 바로가기</span>
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative pl-8 sm:pl-10">
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#07080d] border-2 border-emerald-500 flex items-center justify-center text-sm font-bold text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                3
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  기본 예탁금 조건 충족
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">거래 신청</span>
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed break-keep">
                  개인 투자자의 무분별한 투자를 방지하기 위해 첫 거래 시 **기본 예탁금 1,000만 원 이상**을 계좌에 보유하고 있어야 거래가 승인됩니다.
                </p>
                <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-900/30 mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed break-keep">
                  <span className="font-bold text-emerald-400">💡 예탁금 적용 기준 요약:</span>
                  <ul className="mt-1 space-y-1 pl-4 list-disc">
                    <li><strong className="text-zinc-200">일반 개인투자자 (신규):</strong> 기본 예탁금 1,000만 원 이상</li>
                    <li><strong className="text-zinc-200">조건부 면제/감면:</strong> 기존 거래 실적이나 증권사 등급 기준에 따라 500만 원으로 완화되거나 면제될 수 있으므로, 계좌 개설 후 증권사 고객센터나 MTS를 통해 확인이 필요합니다.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section 3: Risk and Strategy Warning */}
        <div className="relative overflow-hidden bg-red-950/10 border border-red-900/30 rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full pointer-events-none"></div>
          
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 mt-1">
              <FaExclamationTriangle className="text-xl sm:text-2xl" />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-red-200">레버리지 ETF 투자 시 반드시 확인해야 할 유의사항</h3>
              
              <div className="space-y-3.5 text-zinc-400 text-sm sm:text-base leading-relaxed break-keep">
                <div>
                  <h4 className="font-bold text-zinc-200 flex items-center gap-1.5">
                    <FaCheckCircle className="text-red-400/80 text-xs" />
                    변동성 및 음의 복리 효과 (Volatility Drag)
                  </h4>
                  <p className="mt-1 text-zinc-400 text-sm">
                    레버리지 ETF는 일간 수익률의 2배를 매일 추종합니다. 주가가 일직선으로 오르지 않고 등락을 반복하며 횡보할 경우, 시간이 지남에 따라 원금이 깎여 나가는 &apos;음의 복리 효과&apos;가 발생하여 장기 보유 시 손실이 커집니다.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-zinc-200 flex items-center gap-1.5">
                    <FaCheckCircle className="text-red-400/80 text-xs" />
                    단기 대응 및 헤지 수단 권장
                  </h4>
                  <p className="mt-1 text-zinc-400 text-sm">
                    전문가들은 본 상품을 수개월 또는 수개년 동안 모아가는 장기 투자처가 아닌, 뚜렷한 시장 방향성(호재 뉴스로 인한 급등, 반도체 실적 발표 등)이 나타나는 구간에서 수일~수주일 수준의 짧은 단기 모멘텀 플레이용으로 활용할 것을 권장합니다.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-zinc-200 flex items-center gap-1.5">
                    <FaCheckCircle className="text-red-400/80 text-xs" />
                    개별 기업 특화 리스크 노출
                  </h4>
                  <p className="mt-1 text-zinc-400 text-sm">
                    코스피 200 등 시장 지수를 추종하는 레버리지 ETF와 달리, 삼성전자나 SK하이닉스 단일 기업의 실적, 공장 화재, 파업, 미·중 반도체 분쟁 등 개별 회사 악재가 발생했을 때 손실이 그대로 2배 증폭되므로 더욱 기민한 리스크 관리가 필요합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informational Footer */}
        <div className="mt-16 text-center text-xs text-zinc-600 leading-relaxed max-w-2xl mx-auto break-keep">
          본 가이드는 교육 목적 및 정보 제공을 위해 작성되었으며, 특정 금융상품에 대한 매수 권유가 아닙니다. 레버리지 ETF는 고위험 파생 상품으로 투자 원금의 상당 부분 또는 전액 손실이 발생할 수 있으며, 모든 투자의 책임과 결과는 투자자 본인에게 귀속됩니다.
        </div>

      </div>
    </div>
  );
}
