import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
  title: '공시지가 이의신청 방법 및 양식 다운로드 | 개별·공동주택 공시가격',
  description: '2026년 공시지가 이의신청 방법과 절차를 확인하세요. 개별공시지가, 공동주택 공시가격 이의신청 양식 무료 다운로드 및 온라인 신청 바로가기를 제공합니다.',
};

export default function RealtyPriceObjectionPage() {
  return (
    <div
      className="min-h-screen bg-[#080a12] text-white flex flex-col items-center pt-8 pb-16 px-6 relative overflow-hidden"
      style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent z-[1] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-2xl mx-auto">
        {/* Header Section - Minimal Padding */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Real Estate Service
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 text-2xl md:text-3xl block mb-1">공시가격에 대한 정당한 권리</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-600 italic">공시지가 이의신청 안내</span>
          </h1>

          <div className="h-1 w-12 bg-amber-500 mx-auto rounded-full mb-6" />

          <p className="text-neutral-400 text-sm md:text-base font-light tracking-tight leading-relaxed max-w-lg mx-auto">
            공시된 가격에 이의가 있으신가요? <br className="hidden md:block" />
            <span className="text-neutral-200 font-medium">이의신청 절차와 서식</span>을 통해 소중한 재산권을 보호하세요.
          </p>
        </div>

        {/* Primary Action Section - Objection */}
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-amber-400 text-xs font-bold tracking-widest uppercase ml-1 mb-1">Objection Services</h2>
          
          {/* Objection Guide */}
          <Link
            href="https://www.realtyprice.kr/notice/gsindividual/objectionGuide.htm"
            className="group relative flex items-center justify-between bg-zinc-900/40 hover:bg-zinc-800/60 backdrop-blur-xl border border-white/5 hover:border-amber-500/30 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 -translate-x-full group-hover:animate-shimmer" />
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 border border-amber-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-amber-500 text-[10px] font-bold tracking-wider">GUIDE</span>
                <span className="text-white font-bold text-lg md:text-xl tracking-tight">공시지가 이의신청 방법 안내</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>

          {/* Individual Appraisal Price Objection (Gov24) */}
          <Link
            href="https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=&CappBizCD=15000000011"
            className="group relative flex items-center justify-between bg-zinc-900/40 hover:bg-zinc-800/60 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 -translate-x-full group-hover:animate-shimmer" />
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-blue-400 text-[10px] font-bold tracking-wider">GOVERNMENT 24</span>
                <span className="text-white font-bold text-lg md:text-xl tracking-tight">개별공시지가 이의신청 바로가기</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>

          {/* Form Download */}
          <Link
            href="https://www.law.go.kr/LSW/lsBylInfoPLinkR.do?lsiSeq=241621&lsNm=%EB%B6%80%EB%8F%99%EC%82%B0+%EA%B0%80%EA%B2%A9%EA%B3%B5%EC%8B%9C%EC%97%90+%EA%B4%80%ED%95%9C+%EB%B2%95%EB%A5%A0+%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99&bylNo=0008&bylBrNo=00&bylCls=BF&bylEfYd=20220330&bylEfYdYn=Y"
            className="group relative flex items-center justify-between bg-zinc-900/40 hover:bg-zinc-800/60 backdrop-blur-xl border border-white/5 hover:border-emerald-500/30 p-5 pr-6 rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 -translate-x-full group-hover:animate-shimmer" />
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-emerald-400 text-[10px] font-bold tracking-wider">DOWNLOAD FORM</span>
                <span className="text-white font-bold text-lg md:text-xl tracking-tight">이의신청 양식 무료 다운로드</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400 opacity-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
        </div>

        {/* Inquiry Section - Two Column Grid for Mobile Optimization */}
        <div className="mb-12">
          <h2 className="text-neutral-500 text-xs font-bold tracking-widest uppercase ml-1 mb-4">Inquiry Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Apartment Price */}
            <Link
              href="https://zucca100.com/realtyprice1/"
              className="group flex flex-col gap-3 bg-zinc-900/30 border border-white/5 p-5 rounded-2xl hover:border-amber-500/20 hover:bg-zinc-800/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-base">공동주택 공시지가</h3>
                <p className="text-neutral-500 text-xs mt-1">아파트·연립·다세대 조회</p>
              </div>
            </Link>

            {/* Standard Land Price */}
            <Link
              href="https://zucca100.com/realtyprice4/"
              className="group flex flex-col gap-3 bg-zinc-900/30 border border-white/5 p-5 rounded-2xl hover:border-blue-500/20 hover:bg-zinc-800/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-base">표준지 공시지가</h3>
                <p className="text-neutral-500 text-xs mt-1">대표성 있는 필지 가격 조회</p>
              </div>
            </Link>

            {/* Individual Land Price */}
            <Link
              href="https://zucca100.com/realtyprice5/"
              className="group flex flex-col gap-3 bg-zinc-900/30 border border-white/5 p-5 rounded-2xl hover:border-emerald-500/20 hover:bg-zinc-800/40 transition-all duration-300 sm:col-span-2"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-base">개별지 공시지가 조회하기</h3>
                  <p className="text-neutral-500 text-xs mt-1">필지별 상세 공시지가를 확인하세요.</p>
                </div>
              </div>
            </Link>

          </div>
        </div>

        {/* Notice Card */}
        <div className="w-full bg-black/40 border border-neutral-800/80 p-5 md:p-6 rounded-2xl relative overflow-hidden mb-12">
          <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/80" />
          <h4 className="text-white text-sm md:text-base font-bold mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
            이의신청 안내사항
          </h4>
          <ul className="text-xs md:text-sm text-neutral-400 space-y-2 list-disc pl-5 leading-relaxed font-light">
            <li>이의신청은 공시가격 결정·공시일로부터 30일 이내에 가능합니다.</li>
            <li>온라인 신청 또는 시·군·구청 민원실에 직접 방문하여 제출할 수 있습니다.</li>
            <li>신청 결과는 신청기간 만료일로부터 30일 이내에 서면으로 통지됩니다.</li>
          </ul>
        </div>

        <CoupangAds 
          keyword="부동산 경매" 
          title="🏠 부동산 자산 관리 가이드"
          hookText="공시지가 확인 후, 내 자산의 가치를 높이는 전략을 세워보세요. 부동산 투자 및 자산 관리에 도움되는 필독서를 추천합니다."
        />

        <footer className="mt-16 text-center w-full">
          <div className="h-px w-full max-w-[200px] mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
          <p className="text-neutral-600 text-[10px] font-medium tracking-widest uppercase">
            REAL ESTATE APPRAISAL PRICE OBJECTION
          </p>
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}} />
    </div>
  );
}
