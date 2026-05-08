import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
  title: '홈플러스 영업중단 점포 37곳 리스트 (2026년 5월) | 잠정 휴점 매장 안내',
  description: '2026년 5월 10일부터 영업 잠정 중단되는 홈플러스 37개 점포 전체 리스트입니다. 서울, 부산, 인천, 경기 등 지역별 휴점 매장과 상품권·포인트 사용 안내를 확인하세요.',
};

const closedStores = [
  {
    region: '서울',
    color: 'from-rose-500 to-pink-600',
    accent: 'rose',
    stores: ['중계점', '신내점', '면목점', '잠실점'],
  },
  {
    region: '부산',
    color: 'from-blue-500 to-cyan-600',
    accent: 'blue',
    stores: ['센텀시티점', '부산반여점', '영도점', '서부산점'],
  },
  {
    region: '대구',
    color: 'from-red-500 to-orange-600',
    accent: 'red',
    stores: ['상인점'],
  },
  {
    region: '인천',
    color: 'from-indigo-500 to-blue-600',
    accent: 'indigo',
    stores: ['가좌점', '숭의점', '연수점', '송도점', '논현점'],
  },
  {
    region: '경기',
    color: 'from-emerald-500 to-teal-600',
    accent: 'emerald',
    stores: ['킨텍스점', '고양터미널점', '포천송우점', '남양주진접점', '경기하남점', '부천소사점', '분당오리점', '동수원점'],
  },
  {
    region: '충남',
    color: 'from-amber-500 to-yellow-600',
    accent: 'amber',
    stores: ['계룡점'],
  },
  {
    region: '전북',
    color: 'from-lime-500 to-green-600',
    accent: 'lime',
    stores: ['익산점', '김제점'],
  },
  {
    region: '전남',
    color: 'from-teal-500 to-cyan-600',
    accent: 'teal',
    stores: ['목포점', '순천풍덕점'],
  },
  {
    region: '경북',
    color: 'from-violet-500 to-purple-600',
    accent: 'violet',
    stores: ['경산점', '포항점', '포항죽도점', '구미점'],
  },
  {
    region: '경남',
    color: 'from-fuchsia-500 to-pink-600',
    accent: 'fuchsia',
    stores: ['밀양점', '진주점', '삼천포점', '마산점', '진해점', '김해점'],
  },
];

const totalStores = closedStores.reduce((sum, r) => sum + r.stores.length, 0);

export default function HomeplusClosurePage() {
  return (
    <div
      className="min-h-screen bg-[#060810] text-white flex flex-col items-center pt-8 pb-16 px-4 relative overflow-hidden"
      style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_var(--tw-gradient-stops))] from-red-900/15 via-transparent to-transparent z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent z-[1] pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-[10px] font-bold tracking-[0.15em] uppercase mb-4 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            속보 · 2026.05.08 발표
          </div>

          <h1 className="text-3xl md:text-4xl font-black tracking-tighter mb-3 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 block text-xl md:text-2xl mb-1">홈플러스 영업 잠정 중단</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-rose-400 to-pink-500">전국 {totalStores}개 점포 리스트</span>
          </h1>

          <div className="h-1 w-12 bg-red-500 mx-auto rounded-full mb-4" />

          <p className="text-neutral-400 text-xs md:text-sm font-light tracking-tight leading-relaxed max-w-lg mx-auto">
            <span className="text-red-400 font-semibold">2026년 5월 10일 ~ 7월 3일</span>까지<br />
            기업회생 절차에 따른 운영 효율화를 위해<br className="md:hidden" />
            <span className="text-neutral-200 font-medium">전국 104개 대형마트 중 {totalStores}곳</span>이 영업을 잠정 중단합니다.
          </p>
        </div>

        {/* Quick Summary Banner */}
        <div className="w-full grid grid-cols-3 gap-2 mb-6">
          <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-3 text-center">
            <div className="text-red-400 text-xl font-black">{totalStores}곳</div>
            <div className="text-neutral-500 text-[10px] mt-1">영업중단 점포</div>
          </div>
          <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-3 text-center">
            <div className="text-amber-400 text-xl font-black">5.10</div>
            <div className="text-neutral-500 text-[10px] mt-1">중단 시작일</div>
          </div>
          <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-3 text-center">
            <div className="text-blue-400 text-xl font-black">7.3</div>
            <div className="text-neutral-500 text-[10px] mt-1">회생 시한</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mb-8">
          <h2 className="text-neutral-500 text-xs font-bold tracking-widest uppercase ml-1 mb-1">Quick Links</h2>

          <Link
            href="https://corporate.homeplus.co.kr/store/shoplist.aspx"
            className="group relative flex items-center justify-between bg-zinc-900/40 hover:bg-zinc-800/60 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 p-4 pr-5 rounded-2xl transition-all duration-300 overflow-hidden active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 -translate-x-full group-hover:animate-shimmer" />
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <span className="text-white font-bold text-base tracking-tight block">홈플러스 매장 찾기</span>
                <span className="text-neutral-500 text-[10px]">영업 중인 가까운 매장을 확인하세요</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-transform flex-shrink-0"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>

          <Link
            href="https://www.homeplus.co.kr"
            className="group relative flex items-center justify-between bg-zinc-900/40 hover:bg-zinc-800/60 backdrop-blur-xl border border-white/5 hover:border-emerald-500/30 p-4 pr-5 rounded-2xl transition-all duration-300 overflow-hidden active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 -translate-x-full group-hover:animate-shimmer" />
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </div>
              <div>
                <span className="text-white font-bold text-base tracking-tight block">홈플러스 공식 홈페이지</span>
                <span className="text-neutral-500 text-[10px]">온라인 주문 및 공지사항 확인</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400 opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-transform flex-shrink-0"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>

          <Link
            href="https://mapp.homeplus.co.kr"
            className="group relative flex items-center justify-between bg-zinc-900/40 hover:bg-zinc-800/60 backdrop-blur-xl border border-white/5 hover:border-orange-500/30 p-4 pr-5 rounded-2xl transition-all duration-300 overflow-hidden active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 -translate-x-full group-hover:animate-shimmer" />
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              </div>
              <div>
                <span className="text-white font-bold text-base tracking-tight block">홈플러스 모바일앱</span>
                <span className="text-neutral-500 text-[10px]">상품권·포인트 잔액 확인 및 사용</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400 opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-transform flex-shrink-0"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
        </div>

        {/* Store List by Region */}
        <div className="mb-8">
          <h2 className="text-white text-sm font-bold mb-4 flex items-center gap-2 ml-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
            지역별 영업중단 점포 목록
          </h2>

          <div className="flex flex-col gap-3">
            {closedStores.map((region) => (
              <div key={region.region} className="bg-zinc-900/30 border border-white/5 rounded-2xl overflow-hidden">
                <div className={`bg-gradient-to-r ${region.color} px-4 py-2.5 flex items-center justify-between`}>
                  <span className="text-white font-bold text-sm">{region.region}</span>
                  <span className="text-white/80 text-[10px] font-semibold bg-white/15 px-2 py-0.5 rounded-full">
                    {region.stores.length}개 점포
                  </span>
                </div>
                <div className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    {region.stores.map((store) => (
                      <span
                        key={store}
                        className="inline-flex items-center gap-1 text-xs text-neutral-300 bg-neutral-800/50 px-3 py-1.5 rounded-lg border border-neutral-700/30"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/70 flex-shrink-0"></span>
                        {store}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Info Cards */}
        <div className="flex flex-col gap-4 mb-8">
          {/* Gift Card / Points */}
          <div className="w-full bg-black/40 border border-neutral-800/80 p-5 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/80" />
            <h3 className="text-white text-sm font-bold mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
              상품권 · 포인트 사용 안내
            </h3>
            <ul className="text-xs text-neutral-400 space-y-2 list-disc pl-4 leading-relaxed font-light">
              <li>보유 중인 <span className="text-neutral-200 font-medium">상품권은 정상 영업 매장</span>에서 기존과 동일하게 사용 가능합니다.</li>
              <li>외부 제휴처(영화관, 외식업체 등)에서의 사용은 <span className="text-red-400 font-medium">제한</span>될 수 있으니 사전 확인이 필요합니다.</li>
              <li>지류 상품권 환불은 잔액 60% 이상 시 고객센터(<span className="text-neutral-200 font-medium">1588-3315</span>)로 문의 가능합니다.</li>
              <li>포인트 및 상품권은 <span className="text-amber-400 font-medium">가능한 빠르게 소진</span>하시는 것을 권장합니다.</li>
            </ul>
          </div>

          {/* Employee Treatment */}
          <div className="w-full bg-black/40 border border-neutral-800/80 p-5 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/80" />
            <h3 className="text-white text-sm font-bold mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              직원 처우 안내
            </h3>
            <ul className="text-xs text-neutral-400 space-y-2 list-disc pl-4 leading-relaxed font-light">
              <li>영업 중단 점포 직원에게는 <span className="text-neutral-200 font-medium">평균 임금의 70%</span> 수준 휴업 수당이 지급됩니다.</li>
              <li>희망자에 한해 정상 영업 점포로 <span className="text-neutral-200 font-medium">전환 배치</span>가 진행됩니다.</li>
              <li><span className="text-neutral-200 font-medium">대형마트 영업만 중단</span>되며, 입점 매장(테넌트)은 정상 운영됩니다.</li>
            </ul>
          </div>

          {/* Background Info */}
          <div className="w-full bg-black/40 border border-neutral-800/80 p-5 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-violet-500/80" />
            <h3 className="text-white text-sm font-bold mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
              기업회생 진행 상황
            </h3>
            <ul className="text-xs text-neutral-400 space-y-2 list-disc pl-4 leading-relaxed font-light">
              <li>홈플러스는 2025년 기업회생 절차를 신청한 이후 자금난을 겪고 있습니다.</li>
              <li>제한된 물량을 <span className="text-neutral-200 font-medium">핵심 점포에 집중 투입</span>하여 운영 효율을 높이기 위한 조치입니다.</li>
              <li>회생계획안 가결 시한은 <span className="text-violet-400 font-medium">2026년 7월 3일</span>입니다.</li>
              <li>홈플러스 익스프레스 매각 계약이 체결되었으나, 추가 자금 확보가 필요한 상황입니다.</li>
            </ul>
          </div>
        </div>

        {/* Customer Service */}
        <div className="w-full bg-zinc-900/40 border border-white/5 rounded-2xl p-5 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div>
              <h3 className="text-white text-sm font-bold">고객센터 문의</h3>
              <p className="text-neutral-500 text-[10px]">상품권, 포인트, 영업 관련 문의</p>
            </div>
          </div>
          <div className="bg-neutral-800/40 rounded-xl px-4 py-3 text-center">
            <span className="text-green-400 font-black text-xl tracking-wider">1588-3315</span>
          </div>
        </div>

        <CoupangAds
          keyword="생필품 대용량"
          title="🛒 마트 영업중단 대비 장보기"
          hookText="근처 홈플러스가 영업중단되기 전 미리 준비하세요. 대용량 생필품을 온라인으로 간편하게 주문할 수 있습니다."
        />

        <footer className="mt-12 text-center w-full">
          <div className="h-px w-full max-w-[200px] mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
          <p className="text-neutral-600 text-[10px] font-medium tracking-widest uppercase mb-1">
            HOMEPLUS TEMPORARY STORE CLOSURE LIST
          </p>
          <p className="text-neutral-700 text-[9px]">
            ※ 본 페이지는 보도 내용을 기반으로 작성되었으며, 실제 운영 일정은 변경될 수 있습니다.
          </p>
        </footer>
      </div>

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
