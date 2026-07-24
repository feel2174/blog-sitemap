import React from 'react';
import Link from 'next/link';
import { 
  FaUniversity, 
  FaBuilding, 
  FaExchangeAlt, 
  FaPiggyBank, 
  FaChevronRight, 
  FaShieldAlt, 
  FaMobileAlt,
  FaSearchDollar
} from 'react-icons/fa';

export const metadata = {
  title: '대한민국 모든 은행 & 금융기관 공식 홈페이지 통합 바로가기 모음',
  description: 'KB국민, 신한, 하나, 우리, NH농협, 카카오뱅크, 토스뱅크부터 지방은행, 저축은행, 주요 증권사까지 우리나라 모든 은행 및 금융기관의 공식 사이트 바로가기 버튼 모음입니다.',
};

// 1. 5대 시중은행 & 인터넷전문은행
const majorBanks = [
  { name: 'KB국민은행', desc: '국민의 든든한 금융 파트너', url: 'https://www.kbstar.com', color: 'from-amber-500/20 to-yellow-600/20 border-amber-500/30 text-amber-400' },
  { name: '신한은행', desc: '더 나은 내일을 위한 금융', url: 'https://www.shinhan.com', color: 'from-blue-500/20 to-indigo-600/20 border-blue-500/30 text-blue-400' },
  { name: '하나은행', desc: '손님의 기쁨, 그 하나를 위해', url: 'https://www.kebhana.com', color: 'from-emerald-500/20 to-teal-600/20 border-emerald-500/30 text-emerald-400' },
  { name: '우리은행', desc: '우리 마음속 첫번째 은행', url: 'https://www.wooribank.com', color: 'from-sky-500/20 to-blue-600/20 border-sky-500/30 text-sky-400' },
  { name: 'NH농협은행', desc: '농업인과 함께하는 행복은행', url: 'https://banking.nonghyup.com', color: 'from-green-500/20 to-lime-600/20 border-green-500/30 text-green-400' },
  { name: '카카오뱅크', desc: '일상에서 더 쉽게 모바일 뱅킹', url: 'https://www.kakaobank.com', color: 'from-yellow-400/20 to-amber-500/20 border-yellow-400/30 text-yellow-300' },
  { name: '토스뱅크', desc: '금융을 쉬운 언어로', url: 'https://www.tossbank.com', color: 'from-blue-600/20 to-indigo-700/20 border-blue-500/30 text-blue-400' },
  { name: '케이뱅크', desc: '대한민국 1호 인터넷전문은행', url: 'https://www.kbanknow.com', color: 'from-purple-500/20 to-indigo-600/20 border-purple-500/30 text-purple-300' },
];

// 2. 국책 & 특수 & 외국계 은행
const specialBanks = [
  { name: 'IBK기업은행', desc: '중소기업의 든든한 동반자', url: 'https://www.ibk.co.kr' },
  { name: 'KDB산업은행', desc: '대한민국 경제 성장의 동력', url: 'https://www.kdb.co.kr' },
  { name: 'SC제일은행', desc: '글로벌 금융 노하우', url: 'https://www.standardchartered.co.kr' },
  { name: '한국씨티은행', desc: '글로벌 네트워크 뱅킹', url: 'https://www.citibank.co.kr' },
  { name: '한국수출입은행', desc: '대외경제 협력 전담기관', url: 'https://www.koreaexim.go.kr' },
];

// 3. 전국 지방은행
const regionalBanks = [
  { name: 'BNK부산은행', desc: '부산·경남의 금융 중심', url: 'https://www.busanbank.co.kr' },
  { name: 'BNK경남은행', desc: '지역과 함께 성장하는 은행', url: 'https://www.knbank.co.kr' },
  { name: 'DGB대구은행 (iM뱅크)', desc: '시중은행으로 새로 뛰어오르는 iM뱅크', url: 'https://www.imbank.co.kr' },
  { name: '광주은행', desc: '호남을 대표하는 대표은행', url: 'https://www.kjbank.com' },
  { name: '전북은행', desc: '전북 지역밀착 네트워크', url: 'https://www.jbbank.co.kr' },
  { name: '제주은행', desc: '청정 제주의 대표 금융', url: 'https://www.jejubank.co.kr' },
];

// 4. 서민금융 & 상호금융기관
const mutualBanks = [
  { name: '우체국예금', desc: '국가가 보증하는 안심 예금', url: 'https://www.epostbank.go.kr' },
  { name: 'Sh수협은행', desc: '어업인과 국민의 따뜻한 금융', url: 'https://www.suhyup-bank.com' },
  { name: '새마을금고', desc: '지역 공동체 서민 금융', url: 'https://www.kfcc.co.kr' },
  { name: '신협 (신용협동조합)', desc: '복지사회 건설을 향한 서민금융', url: 'https://www.cu.co.kr' },
  { name: '산림조합중앙회', desc: '임업인과 산림 중심 상호금융', url: 'https://www.nfcf.or.kr' },
];

// 5. 주요 저축은행
const savingsBanks = [
  { name: 'SBI저축은행', url: 'https://www.sbisb.co.kr' },
  { name: 'OK저축은행', url: 'https://www.oksavingsbank.com' },
  { name: '웰컴저축은행', url: 'https://www.welcomebank.co.kr' },
  { name: '다올저축은행', url: 'https://www.daolbank.co.kr' },
  { name: '페퍼저축은행', url: 'https://www.pepperbank.kr' },
  { name: '한국투자저축은행', url: 'https://www.koreainvestmentbank.com' },
  { name: 'DB저축은행', url: 'https://www.db-bank.co.kr' },
  { name: 'JT친애저축은행', url: 'https://www.jtchinaebank.co.kr' },
];

// 6. 주요 증권사 (비대면 계좌 개설)
const brokerages = [
  { name: '키움증권', url: 'https://www3.kiwoom.com/m/newaccount/VNewAccountIntroView' },
  { name: '삼성증권', url: 'https://www.onestopsamsungpop.co.kr/?skipSection=stock_main' },
  { name: '미래에셋증권', url: 'https://securities.miraeasset.com/mka/mka1001/n01.do' },
  { name: '한국투자증권', url: 'https://securities.koreainvestment.com/main/A_CO_10004.jsp' },
  { name: 'KB증권', url: 'https://www.kbsec.com/go.able?linkcd=m06020000' },
  { name: '나무 (NH투자)', url: 'https://www.mynamuhbegin.com/' },
  { name: '토스증권', url: 'https://www.tossinvest.com/' },
  { name: '신한투자증권', url: 'https://m.shinhansec.com/mweb/acct/mact/amact0013' },
  { name: '하나증권', url: 'https://www.hanaw.com/main/customer/openAccount/CS_180100_P.cmd' },
  { name: '메리츠증권', url: 'https://meritzevent.com/super365/' },
  { name: '카카오페이증권', url: 'https://www.kakaopaysec.com/guide/account/dynamicPage.do' },
  { name: '유진투자증권', url: 'https://www.eugenefn.com/comm/msgDetail.do?msgId=508968&menu_id=03060500&menu_level=3&boardYn=Y&boardUrl=/serv/svsc/svsc501r' },
  { name: '유안타증권', url: 'https://www.myasset.com/myasset/hello/open/HU_0100000_P1.cmd' },
  { name: '한화투자증권', url: 'https://m.hanwhawm.com:9090/M/nftf/main/index.cmd#noback' },
];

export default function KoreaAllBanksPage() {
  return (
    <div className="min-h-screen bg-[#07080d] text-zinc-100 selection:bg-emerald-500/30" style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}>
      
      {/* Background Glowing Lights */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[75vw] h-[75vw] rounded-full bg-emerald-950/20 blur-[140px] mix-blend-screen"></div>
        <div className="absolute top-[30%] -right-[15%] w-[65vw] h-[65vw] rounded-full bg-blue-950/25 blur-[130px] mix-blend-screen"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-indigo-950/20 blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        
        {/* Hero Header */}
        <div className="text-center mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-1">
            <FaUniversity className="animate-pulse text-emerald-400" />
            KOREA FINANCIAL INSTITUTION PORTAL
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            대한민국 모든 은행<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              공식 홈페이지 통합 바로가기
            </span>
          </h1>
          
          <p className="text-zinc-400 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed break-keep">
            시중은행, 인터넷은행, 지방은행, 저축은행, 주요 증권사까지 대한민국에 존재하는 모든 은행과 금융기관의 공식 사이트로 즉시 이동할 수 있는 종합 바로가기 센터입니다.
          </p>
        </div>

        {/* ======================================================== */}
        {/* ALL BANK & FINANCIAL INSTITUTION BUTTON LIST SECTION     */}
        {/* ======================================================== */}
        <div className="space-y-10 mb-16">
          
          {/* Section 1: 5대 시중은행 & 인터넷전문은행 */}
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-5 sm:p-8 backdrop-blur-md">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
              <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-3 text-white">
                <FaBuilding className="text-emerald-400" />
                5대 시중은행 & 인터넷전문은행 바로가기
              </h2>
              <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                8개 대표 은행
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {majorBanks.map((bank, idx) => (
                <Link
                  key={idx}
                  href={bank.url}
                  className={`group relative flex flex-col justify-between p-5 rounded-2xl bg-gradient-to-br ${bank.color} border backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-lg`}
                >
                  <div>
                    <h3 className="text-lg font-extrabold mb-1 group-hover:underline">{bank.name}</h3>
                    <p className="text-xs text-zinc-400 leading-snug">{bank.desc}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-end text-xs font-bold gap-1 text-white/90">
                    <span>공식 사이트 접속</span>
                    <FaChevronRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Section 2: 국책, 특수 & 외국계 은행 */}
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-5 sm:p-8 backdrop-blur-md">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
              <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-3 text-white">
                <FaUniversity className="text-blue-400" />
                국책 · 특수 · 외국계 은행 바로가기
              </h2>
              <span className="text-xs text-blue-400 font-semibold bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                5개 은행
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {specialBanks.map((bank, idx) => (
                <Link
                  key={idx}
                  href={bank.url}
                  className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-zinc-900/80 hover:bg-blue-600 text-zinc-100 hover:text-white font-bold text-xs sm:text-sm border border-white/10 hover:border-blue-400 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] text-center"
                >
                  <span>{bank.name}</span>
                  <span className="text-[10px] text-zinc-400 group-hover:text-blue-100 font-normal mt-1 flex items-center gap-0.5">
                    접속하기
                    <FaChevronRight className="text-[8px]" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Section 3: 전국 지방은행 */}
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-5 sm:p-8 backdrop-blur-md">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
              <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-3 text-white">
                <FaUniversity className="text-amber-400" />
                전국 지방은행 바로가기
              </h2>
              <span className="text-xs text-amber-400 font-semibold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                6개 지방은행
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
              {regionalBanks.map((bank, idx) => (
                <Link
                  key={idx}
                  href={bank.url}
                  className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-zinc-900/80 hover:bg-amber-600 text-zinc-100 hover:text-white font-bold text-xs sm:text-sm border border-white/10 hover:border-amber-400 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] text-center"
                >
                  <span>{bank.name}</span>
                  <span className="text-[10px] text-zinc-400 group-hover:text-amber-100 font-normal mt-1 flex items-center gap-0.5">
                    접속하기
                    <FaChevronRight className="text-[8px]" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Section 4: 서민금융 & 상호금융기관 */}
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-5 sm:p-8 backdrop-blur-md">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
              <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-3 text-white">
                <FaPiggyBank className="text-rose-400" />
                우체국 · 새마을금고 · 신협 · 상호금융 바로가기
              </h2>
              <span className="text-xs text-rose-400 font-semibold bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                5개 상호금융
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {mutualBanks.map((bank, idx) => (
                <Link
                  key={idx}
                  href={bank.url}
                  className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-zinc-900/80 hover:bg-rose-600 text-zinc-100 hover:text-white font-bold text-xs sm:text-sm border border-white/10 hover:border-rose-400 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] text-center"
                >
                  <span>{bank.name}</span>
                  <span className="text-[10px] text-zinc-400 group-hover:text-rose-100 font-normal mt-1 flex items-center gap-0.5">
                    접속하기
                    <FaChevronRight className="text-[8px]" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Section 5: 주요 저축은행 */}
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-5 sm:p-8 backdrop-blur-md">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
              <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-3 text-white">
                <FaSearchDollar className="text-purple-400" />
                주요 저축은행 바로가기
              </h2>
              <span className="text-xs text-purple-400 font-semibold bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                8개 저축은행
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3.5">
              {savingsBanks.map((bank, idx) => (
                <Link
                  key={idx}
                  href={bank.url}
                  className="group flex flex-col items-center justify-center p-3.5 rounded-2xl bg-zinc-900/80 hover:bg-purple-600 text-zinc-100 hover:text-white font-bold text-xs sm:text-sm border border-white/10 hover:border-purple-400 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] text-center"
                >
                  <span>{bank.name}</span>
                  <span className="text-[10px] text-zinc-400 group-hover:text-purple-100 font-normal mt-0.5 flex items-center gap-0.5">
                    바로가기
                    <FaChevronRight className="text-[8px]" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Section 6: 주요 증권사 (비대면 계좌 개설) */}
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-5 sm:p-8 backdrop-blur-md">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
              <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-3 text-white">
                <FaExchangeAlt className="text-cyan-400" />
                주요 증권사 비대면 계좌개설 바로가기
              </h2>
              <span className="text-xs text-cyan-400 font-semibold bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                14개 증권사
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
              {brokerages.map((broker, idx) => (
                <Link
                  key={idx}
                  href={broker.url}
                  className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 hover:from-cyan-600 hover:to-blue-600 text-zinc-100 hover:text-white font-bold text-xs sm:text-sm border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] text-center"
                >
                  <span>{broker.name}</span>
                  <span className="text-[10px] text-cyan-300 group-hover:text-white font-normal mt-1 flex items-center gap-0.5">
                    계좌 개설하기
                    <FaChevronRight className="text-[8px]" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Security Notice */}
        <div className="p-6 rounded-3xl bg-emerald-950/20 border border-emerald-900/30 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-3xl mx-auto space-y-2">
          <div className="flex items-center gap-2 font-bold text-emerald-400">
            <FaShieldAlt className="text-base" />
            <span>안전 접속 및 보이스피싱 예방 수칙</span>
          </div>
          <p className="break-keep">
            본 페이지는 대한민국 공식 은행 및 금융기관의 검증된 공식 도메인으로 연결됩니다. 출처가 불분명한 문자 메시지나 메신저 수신 링크 대신 인증된 공식 웹사이트를 통해 거래하시는 것이 파밍 및 보이스피싱 예방에 안전합니다.
          </p>
        </div>

      </div>
    </div>
  );
}
