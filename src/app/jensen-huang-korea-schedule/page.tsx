import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '젠슨 황 방한 일정 분석 | 2026년 6월 한국 방문 캘린더',
  description:
    '젠슨 황 엔비디아 CEO의 2026년 6월 한국 방문 일정을 날짜별 캘린더로 정리하고 HBM, 피지컬 AI, 데이터센터 협력 의미를 분석합니다.',
  keywords: [
    '젠슨 황 방한 일정',
    '젠슨 황 한국 방문',
    '엔비디아 CEO 방한',
    'GTC Taipei',
    '피지컬 AI',
    'HBM',
    '네이버 1784',
    '현대차',
    'LG전자',
  ],
  alternates: {
    canonical: '/jensen-huang-korea-schedule',
  },
  openGraph: {
    title: '젠슨 황 방한 일정 분석',
    description: '2026년 6월 젠슨 황 방한 일정을 캘린더 형식으로 정리했습니다.',
    url: 'https://zucca100.com/jensen-huang-korea-schedule',
    type: 'article',
  },
};

const highlights = [
  { label: '6월 5일', title: '김포공항 입국', status: '공개 보도' },
  { label: '5일 저녁', title: '주요 기업인 회동 가능성', status: '유력' },
  { label: '6월 8일', title: 'LG·현대차·네이버 방문 거론', status: '유력/조율' },
];

const calendarItems = [
  {
    date: '1~4',
    month: 'JUN',
    day: '월~목',
    title: 'GTC Taipei 및 대만 일정',
    status: '확정',
    statusClass: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    summary:
      'NVIDIA의 대만 행사와 현지 일정이 마무리된 뒤 한국 방문으로 이어지는 사전 구간입니다.',
    agenda: ['GTC Taipei 2026', 'Computex 관련 공개 행보', '아시아 AI 공급망 메시지 발신'],
    meaning:
      '한국 방문은 대만 일정 직후 이어지는 흐름으로, 아시아 AI 공급망 점검의 연장선으로 해석할 수 있습니다.',
  },
  {
    date: '5',
    month: 'JUN',
    day: '금',
    title: '한국 입국 및 첫 회동 구간',
    status: '확정/유력',
    statusClass: 'border-blue-200 bg-blue-50 text-blue-700',
    summary:
      '김포공항 입국과 함께 국내 주요 기업인들과의 저녁 회동 가능성이 거론됩니다.',
    agenda: ['김포공항 입국', '성수동 회동 가능성', 'SK·현대차·LG·네이버 주요 인사 접점'],
    meaning:
      'HBM 공급망과 피지컬 AI 협력 의제가 동시에 열릴 수 있는 방한 초반 핵심 구간입니다.',
  },
  {
    date: '6~7',
    month: 'JUN',
    day: '주말',
    title: '비공개 미팅 가능 구간',
    status: '관측',
    statusClass: 'border-slate-200 bg-slate-100 text-slate-700',
    summary:
      '공개 일정이 많지 않은 구간으로 기업, 스타트업, 대학 연구진과의 비공개 논의 가능성이 있습니다.',
    agenda: ['AI·로보틱스 스타트업 접점', '대학·연구진 미팅 가능성', '개별 기업 후속 논의 가능성'],
    meaning:
      '공개 발표보다 실제 협력 논의가 진행될 수 있어 방문 이후 발표 여부를 확인해야 합니다.',
  },
  {
    date: '8',
    month: 'JUN',
    day: '월',
    title: '주요 사업장 방문 거론',
    status: '유력/조율',
    statusClass: 'border-amber-200 bg-amber-50 text-amber-700',
    summary:
      'LG전자, 현대차그룹, 네이버 1784 방문이 거론되며 피지컬 AI 의제가 가장 부각되는 날입니다.',
    agenda: ['LG전자 여의도 사옥 거론', '현대차그룹 양재 사옥 거론', '네이버 1784 방문 유력'],
    meaning:
      '로봇, 자율주행, 디지털트윈, 클라우드 기반 로봇 제어 협력 가능성에 시장 관심이 집중됩니다.',
  },
  {
    date: '8~9',
    month: 'JUN',
    day: '월~화',
    title: '출국 예상 구간',
    status: '예상',
    statusClass: 'border-purple-200 bg-purple-50 text-purple-700',
    summary:
      '방한 일정 종료 후 8일 늦은 오후 또는 9일 오전 출국 가능성이 언급됩니다.',
    agenda: ['방한 일정 마무리', '공동 발표 여부 확인', '후속 계약·MOU 보도 체크'],
    meaning:
      '일정 종료 이후에는 회동 사진보다 공동 발표, 투자 규모, 공급 계약 여부가 더 중요합니다.',
  },
];

const industryMeanings = [
  {
    title: 'HBM 공급망',
    body:
      'SK하이닉스와 삼성전자는 엔비디아 AI 가속기 수요의 핵심 병목인 HBM과 첨단 메모리 공급망에 직접 연결됩니다.',
  },
  {
    title: '피지컬 AI',
    body:
      'LG전자, 두산로보틱스, 네이버 1784, 현대차·보스턴다이내믹스 축은 로봇·자율주행·디지털트윈 협력 기대와 맞닿아 있습니다.',
  },
  {
    title: 'AI 데이터센터',
    body:
      '네이버 클라우드, 소버린 AI, 디지털트윈 인프라 논의는 한국형 AI 인프라 협력의 확장 신호가 될 수 있습니다.',
  },
];

const sources = [
  {
    label: '연합뉴스 영문 보도',
    href: 'https://en.yna.co.kr/view/AEN20260604004652320?section=economy-finance%2Feconomy',
    desc: '4일간 방한, 기업 총수·연구진 회동 가능성',
  },
  {
    label: '연합뉴스 국문 보도',
    href: 'https://www.yna.co.kr/view/AKR20260603053851017',
    desc: '입국, 저녁 회동, 출국 예상 일정',
  },
  {
    label: '뉴시스 보도',
    href: 'https://www.newsis.com/view/NISX20260601_0003651743',
    desc: '네이버 1784 방문 유력 및 피지컬 AI 논의 전망',
  },
  {
    label: 'YTN 보도',
    href: 'https://m.ytn.co.kr/news_view.php?key=202606041003495884&s_mcd=0102',
    desc: '한국 입국 일정 하루 연기 보도',
  },
];

function BenefitButton({ href, variant = 'solid' }: { href: string; variant?: 'solid' | 'banner' }) {
  if (variant === 'banner') {
    return (
      <a
        href={href}
        className="flex w-full items-center justify-between gap-4 rounded-2xl bg-slate-950 px-5 py-5 text-left text-white shadow-xl transition-transform hover:-translate-y-0.5 active:scale-[0.99]"
      >
        <span className="min-w-0">
          <span className="block text-xs font-black uppercase tracking-[0.18em] text-blue-200">Related Report</span>
          <span className="mt-1 block text-base font-black leading-snug sm:text-lg">
            젠슨황 방한 수혜주 정리 바로가기
          </span>
        </span>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-950">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </span>
      </a>
    );
  }

  return (
    <a
      href={href}
      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3.5 text-center text-sm font-black leading-snug text-white shadow-lg transition-transform hover:-translate-y-0.5 active:scale-[0.99] sm:w-auto sm:px-5"
    >
      젠슨황 방한 수혜주 정리 바로가기
      <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-6-6 6 6-6 6" />
      </svg>
    </a>
  );
}

export default function JensenHuangKoreaSchedulePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="bg-white px-4 pb-5 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-3 flex flex-wrap gap-2 text-xs font-black">
            <span className="rounded-full bg-slate-950 px-3 py-1.5 text-white">기준일 2026.06.04</span>
            <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-blue-700">
              공개 보도 기반 일정 분석
            </span>
            <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-red-700">
              일정 변경 가능
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-black leading-tight sm:text-5xl">젠슨 황 방한 일정 캘린더</h1>
              <p className="mt-2 max-w-3xl text-sm font-bold leading-6 text-slate-600 sm:text-base">
                2026년 6월 한국 방문 일정을 날짜별로 정리하고, HBM·피지컬 AI·데이터센터 협력 의미를 함께 분석합니다.
              </p>
            </div>
            <div className="lg:justify-self-end">
              <BenefitButton href="https://zucca100.com/nvidia-jensen-huang/" />
            </div>
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
                <p className="text-xs font-black text-slate-400">{item.label}</p>
                <strong className="mt-1 block text-base font-black leading-snug">{item.title}</strong>
                <span className="mt-2 inline-flex rounded-full bg-white px-3 py-1 text-xs font-black text-blue-700 shadow-sm">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Schedule Calendar</p>
            <h2 className="mt-1 text-2xl font-black">날짜별 방한 일정</h2>
            <p className="mt-2 text-sm font-bold text-slate-500">
              확정 보도와 유력·조율 일정을 구분해 방문 흐름을 한눈에 볼 수 있게 정리했습니다.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {calendarItems.map((item) => (
              <article key={`${item.date}-${item.title}`} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="grid grid-cols-[86px_1fr] sm:grid-cols-[126px_1fr]">
                  <div className="flex flex-col items-center justify-center bg-slate-950 px-2 py-6 text-white">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-200">{item.month}</span>
                    <span className="mt-1 text-4xl font-black leading-none sm:text-5xl">{item.date}</span>
                    <span className="mt-2 rounded-full bg-white/10 px-3 py-1 text-xs font-black">{item.day}</span>
                  </div>

                  <div className="min-w-0 p-4 sm:p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`rounded-full border px-3 py-1 text-xs font-black ${item.statusClass}`}>{item.status}</span>
                      <span className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">NVIDIA Korea Visit</span>
                    </div>
                    <h3 className="mt-3 text-lg font-black leading-snug sm:text-xl">{item.title}</h3>
                    <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{item.summary}</p>
                    <div className="mt-4 grid gap-2">
                      {item.agenda.map((agenda) => (
                        <div key={agenda} className="rounded-xl bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700">
                          {agenda}
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 p-3 text-sm font-bold leading-6 text-blue-900">
                      {item.meaning}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <BenefitButton href="https://zucca100.com/nvidia-jensen-huang/" variant="banner" />
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600">Industry Meaning</p>
            <h2 className="mt-1 text-2xl font-black">방한 일정이 의미하는 산업 의제</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {industryMeanings.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-black">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-2xl border border-red-200 bg-white p-5">
            <h2 className="text-xl font-black text-red-700">체크포인트</h2>
            <ol className="mt-4 space-y-3 text-sm font-semibold leading-6 text-slate-600">
              <li>1. 확정 일정과 유력·조율 일정은 구분해서 봐야 합니다.</li>
              <li>2. 회동 사진보다 공동 발표, 투자 규모, 공급 계약 여부가 더 중요합니다.</li>
              <li>3. HBM은 단기 실적 연결 가능성이 높지만, 피지컬 AI는 사업화까지 시간이 걸릴 수 있습니다.</li>
              <li>4. 방한 이벤트 이후에는 차익실현과 기대 소멸 리스크를 함께 봐야 합니다.</li>
            </ol>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-950 p-5 text-white">
            <h2 className="text-xl font-black">출처</h2>
            <div className="mt-4 grid gap-2">
              {sources.map((source) => (
                <a key={source.href} href={source.href} className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <strong className="block text-sm font-black">{source.label}</strong>
                  <span className="mt-1 block text-xs font-semibold text-slate-300">{source.desc}</span>
                </a>
              ))}
            </div>
          </article>
        </div>

        <div className="mx-auto mt-5 max-w-6xl rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-semibold leading-6 text-slate-500">
            본 페이지는 2026년 6월 4일 공개 보도 기준의 일정 분석입니다. 실제 일정은 현장 상황과 기업 사정에 따라 변경될 수 있으며,
            투자 판단은 공식 발표와 계약·투자 규모 확인 이후 본인의 책임으로 결정해야 합니다.
          </p>
          <div className="mt-4">
            <BenefitButton href="https://zucca100.com/nvidia-jensen-huang/" />
          </div>
        </div>
      </section>
    </main>
  );
}
