import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
  title: '2026 고3 5월 모의고사 등급컷 확인 | EBS·이투스·메가스터디 학력평가 결과',
  description: '2026년 고3 5월 모의고사(학력평가) 등급컷을 EBS, 이투스, 메가스터디에서 확인하세요. 국어, 수학, 영어, 탐구 과목별 등급 구분 점수를 한눈에 비교합니다.',
};

export default function GradeCutMayPage() {
  return (
    <div
      className="min-h-screen bg-[#05070f] text-white flex flex-col items-center py-16 px-6 relative overflow-hidden"
      style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 via-transparent to-transparent z-[1] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl z-[2] pointer-events-none" />
      <div className="absolute top-20 left-10 w-[200px] h-[200px] bg-violet-600/8 rounded-full blur-2xl z-[2] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[200px] h-[200px] bg-blue-600/8 rounded-full blur-2xl z-[2] pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">

        {/* Header Badge */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            2026 · 고3 · 5월 학력평가
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">5월 모의고사</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-violet-400 to-blue-400">등급컷 바로가기</span>
          </h1>

          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full mb-6" />

          <p className="text-neutral-400 text-sm md:text-base font-light tracking-tight leading-relaxed">
            2026년 고3 5월 학력평가 등급 구분 점수를<br className="hidden md:block" />
            <span className="text-neutral-200 font-medium">EBS · 이투스 · 메가스터디</span>에서 확인하세요.
          </p>
        </div>

        {/* Exam Info Card */}
        <div className="w-full bg-indigo-950/40 border border-indigo-500/15 rounded-2xl p-4 mb-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-300 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          </div>
          <div>
            <p className="text-white text-sm font-semibold">2026년 5월 8일 (목) 시행</p>
            <p className="text-neutral-400 text-xs">고등학교 3학년 학력평가 · 전국연합학력평가</p>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="w-full flex flex-col gap-4 mb-10">

          {/* EBS */}
          <Link
            href="https://www.ebsi.co.kr/ebs/xip/xipa/retrieveSCVMainInfo.ebs?irecord=202605073&targetCd=D300&cookieGradeVal=high3"
            className="group relative flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-xl border border-white/5 hover:border-indigo-500/30 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/8 to-indigo-500/0 -translate-x-full group-hover:animate-shimmer" />
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                <span className="text-indigo-300 text-xs font-black tracking-widest">EBS</span>
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-indigo-300 text-[10px] font-bold tracking-[0.15em] uppercase">EBS 학력평가</span>
                <span className="text-white font-bold text-lg md:text-xl tracking-tight">EBS에서 5모 등급컷 확인하기</span>
                <span className="text-neutral-500 text-xs mt-0.5">ebsi.co.kr · 공식 등급컷 발표</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100 flex-shrink-0"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>

          {/* 이투스 */}
          <Link
            href="https://event.etoos.com/m.html"
            className="group relative flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-xl border border-white/5 hover:border-orange-500/30 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/8 to-orange-500/0 -translate-x-full group-hover:animate-shimmer" />
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <span className="text-orange-300 text-[9px] font-black tracking-widest">이투스</span>
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-orange-300 text-[10px] font-bold tracking-[0.15em] uppercase">ETOOS 등급컷</span>
                <span className="text-white font-bold text-lg md:text-xl tracking-tight">이투스에서 5모 등급컷 확인하기</span>
                <span className="text-neutral-500 text-xs mt-0.5">etoos.com · 실시간 등급컷 분석</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100 flex-shrink-0"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>

          {/* 메가스터디 */}
          <Link
            href="https://m.megastudy.net/mobile/smart/entinfo/rank_cut.asp?exam_seq=352&exam_grd=3&TabNo=2"
            className="group relative flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-xl border border-white/5 hover:border-emerald-500/30 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/8 to-emerald-500/0 -translate-x-full group-hover:animate-shimmer" />
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <span className="text-emerald-300 text-[8px] font-black tracking-widest leading-tight text-center">메가<br/>스터디</span>
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-emerald-300 text-[10px] font-bold tracking-[0.15em] uppercase">MEGA STUDY 등급컷</span>
                <span className="text-white font-bold text-lg md:text-xl tracking-tight">메가스터디에서 5모 등급컷 확인하기</span>
                <span className="text-neutral-500 text-xs mt-0.5">megastudy.net · 과목별 상세 분석</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100 flex-shrink-0"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
        </div>

        {/* Grade Info Card */}
        <div className="w-full bg-black/40 border border-neutral-800/80 p-5 md:p-6 rounded-2xl relative overflow-hidden mb-4">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-violet-500" />
          <h2 className="text-white text-sm md:text-base font-bold mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            등급 구분 기준 안내
          </h2>
          <div className="grid grid-cols-4 gap-2 text-center text-xs mb-3">
            {[
              { grade: '1등급', pct: '상위 4%', color: 'text-violet-400 bg-violet-500/10 border-violet-500/20' },
              { grade: '2등급', pct: '누적 11%', color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' },
              { grade: '3등급', pct: '누적 23%', color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
              { grade: '4등급', pct: '누적 40%', color: 'text-sky-400 bg-sky-500/10 border-sky-500/20' },
            ].map((item) => (
              <div key={item.grade} className={`rounded-xl border p-2 ${item.color}`}>
                <div className="font-bold text-[11px]">{item.grade}</div>
                <div className="text-[9px] opacity-70 mt-0.5">{item.pct}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            {[
              { grade: '5등급', pct: '누적 60%', color: 'text-green-400 bg-green-500/10 border-green-500/20' },
              { grade: '6등급', pct: '누적 77%', color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20' },
              { grade: '7등급', pct: '누적 89%', color: 'text-orange-400 bg-orange-500/10 border-orange-500/20' },
              { grade: '8등급', pct: '누적 96%', color: 'text-red-400 bg-red-500/10 border-red-500/20' },
            ].map((item) => (
              <div key={item.grade} className={`rounded-xl border p-2 ${item.color}`}>
                <div className="font-bold text-[11px]">{item.grade}</div>
                <div className="text-[9px] opacity-70 mt-0.5">{item.pct}</div>
              </div>
            ))}
          </div>
          <p className="text-neutral-500 text-[10px] mt-3 leading-relaxed">
            ※ 등급컷은 원점수 기준이며 표준점수 등급컷과 다를 수 있습니다. 영어·한국사는 절대평가 적용.
          </p>
        </div>

        {/* Subject Notice Card */}
        <div className="w-full bg-black/40 border border-neutral-800/80 p-5 md:p-6 rounded-2xl relative overflow-hidden mb-10">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500 to-pink-500" />
          <h3 className="text-white text-sm md:text-base font-bold mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
            5월 모의고사 과목 구성
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              { subject: '국어', detail: '선택과목 포함', icon: '📖' },
              { subject: '수학', detail: '선택과목 포함', icon: '📐' },
              { subject: '영어', detail: '절대평가', icon: '🌐' },
              { subject: '한국사', detail: '필수·절대평가', icon: '🏛️' },
              { subject: '사회탐구', detail: '최대 2과목', icon: '🌏' },
              { subject: '과학탐구', detail: '최대 2과목', icon: '🔬' },
            ].map((item) => (
              <div key={item.subject} className="flex items-center gap-2 bg-neutral-900/50 rounded-xl px-3 py-2">
                <span className="text-base">{item.icon}</span>
                <div>
                  <div className="text-white text-xs font-semibold">{item.subject}</div>
                  <div className="text-neutral-500 text-[9px]">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coupang Ads */}
        <CoupangAds
          keyword="수능 참고서"
          title="📚 수험생을 위한 필수 학습 자료"
          hookText="5월 모의고사 결과를 바탕으로 취약 과목을 집중 공략하세요. 수험생에게 꼭 필요한 문제집과 학습 자료를 확인해보세요."
        />

        <footer className="mt-12 text-center w-full">
          <div className="h-px w-full max-w-[200px] mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
          <p className="text-neutral-600 text-[10px] font-medium tracking-widest uppercase">
            2026 고3 5월 모의고사 · 학력평가 등급컷
          </p>
        </footer>
      </div>

      {/* Shimmer animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}} />
    </div>
  );
}
