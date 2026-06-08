import type { Metadata } from 'next';

const primaryLinks = [
  {
    label: '삼성전자 감사제 페스티벌 바로가기',
    description: '삼성전자 공식 페이지에서 행사와 신청 안내를 확인하세요.',
    href: 'https://www.samsung.com/sec/',
    eyebrow: 'Samsung Official',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    label: '온누리상품권 사용처',
    description: '받은 디지털 온누리상품권을 어디서 쓸 수 있는지 확인하세요.',
    href: 'https://zucca100.com/onnuri-gift/',
    eyebrow: 'Usage Guide',
    color: 'from-emerald-600 to-teal-700',
  },
  {
    label: '온누리상품권 앱 다운로드 안드로이드',
    description: '안드로이드 이용자는 온누리상품권 앱 안내 페이지를 확인하세요.',
    href: 'https://zucca100.com/onnuri-gift/',
    eyebrow: 'Android App',
    color: 'from-lime-600 to-green-700',
  },
  {
    label: '온누리상품권 앱 다운로드 iOS',
    description: '아이폰 이용자는 온누리상품권 앱 안내 페이지를 확인하세요.',
    href: 'https://zucca100.com/onnuri-gift/',
    eyebrow: 'iPhone App',
    color: 'from-sky-600 to-blue-700',
  },
];

const summaryCards = [
  {
    title: '행사 기간',
    body: '2026년 6월 8일부터 7월 5일까지 진행되는 것으로 보도되었습니다.',
  },
  {
    title: '핵심 혜택',
    body: '행사 대상 제품 구매 시 구매 금액의 20%를 디지털 온누리상품권으로 지급합니다.',
  },
  {
    title: '추가 혜택',
    body: '군인·경찰·소방·교정 공무원 등 제복공무원은 30% 혜택이 거론됩니다.',
  },
  {
    title: '신청 기한',
    body: '행사 참여처 구매 고객은 2026년 9월 30일까지 삼성닷컴을 통해 신청하는 것으로 안내됩니다.',
  },
];

const steps = [
  '행사 기간에 삼성전자 행사 대상 제품을 구매합니다.',
  '구매 영수증, 주문 정보, 신청자 정보 등 환급 신청에 필요한 내용을 준비합니다.',
  '삼성닷컴 또는 삼성전자 공식 안내 페이지에서 신청 경로를 확인합니다.',
  '디지털 온누리상품권 지급 여부와 사용 가능 가맹점을 확인합니다.',
];

const purchasePlaces = [
  '삼성스토어',
  '전자랜드·하이마트 등 가전 양판점',
  '이마트·홈플러스·코스트코 등 대형마트',
  '백화점 내 삼성전자 매장',
  '삼성닷컴 및 공식 온라인 판매 채널',
];

const sources = [
  {
    label: '삼성전자 뉴스룸',
    href: 'https://news.samsung.com/kr/%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90-%EA%B5%AD%EB%AF%BC%EA%B3%BC-%ED%95%A8%EA%BB%98-%EA%B0%90%EC%82%AC-%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C-%EC%8B%9C%EC%9E%91',
    desc: '감사 페스티벌 시작과 디지털 온누리상품권 지급 안내',
  },
  {
    label: '뉴스핌 보도',
    href: 'https://www.newspim.com/news/view/20260608000079',
    desc: '구매처, 신청 기한, 온누리상품권 지급 관련 보도',
  },
  {
    label: '조선비즈 보도',
    href: 'https://biz.chosun.com/it-science/ict/2026/06/05/VO337VI7WFEDJNH2P5IYNFU2QY/?outputType=amp',
    desc: '행사 기간과 구매액 20% 환급 보도',
  },
];

export const metadata: Metadata = {
  title: '삼성전자 감사제 페스티벌 온누리상품권 환급 신청 방법',
  description:
    '삼성전자 감사제 페스티벌 온누리상품권 환급 신청 방법, 구매처, 혜택, 온누리상품권 사용처와 앱 다운로드 안내를 정리했습니다.',
  keywords: [
    '삼성전자 감사제 페스티벌',
    '삼성전자 온누리상품권',
    '온누리상품권 환급',
    '삼성전자 환급 신청',
    '온누리상품권 사용처',
  ],
  alternates: {
    canonical: '/samsung-onnuri-festival',
  },
  openGraph: {
    title: '삼성전자 감사제 페스티벌 온누리상품권 환급 신청 방법',
    description: '삼성전자 감사제 페스티벌 혜택과 온누리상품권 신청·사용처를 한 화면에서 확인하세요.',
    url: 'https://zucca100.com/samsung-onnuri-festival',
    type: 'article',
  },
};

export default function SamsungOnnuriFestivalPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-950">
      <section className="bg-white px-4 pb-7 pt-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-3 flex flex-wrap gap-2 text-xs font-black">
            <span className="rounded-full bg-slate-950 px-3 py-1.5 text-white">2026.06 기준</span>
            <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-blue-700">삼성전자 감사 페스티벌</span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-emerald-700">
              디지털 온누리상품권
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_0.95fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-600">Samsung Onnuri Festival</p>
              <h1 className="mt-2 text-3xl font-black leading-tight sm:text-5xl">
                삼성전자 감사제 페스티벌 온누리상품권 환급 신청 방법
              </h1>
              <p className="mt-3 max-w-3xl text-base font-semibold leading-7 text-slate-600">
                구매처, 혜택, 신청 흐름, 온누리상품권 사용처와 앱 안내를 한 화면에서 확인하세요.
              </p>
            </div>

            <a
              href="https://www.samsung.com/sec/"
              className="flex w-full items-center justify-between gap-4 rounded-2xl bg-blue-600 px-5 py-5 text-left text-white shadow-xl transition-transform hover:-translate-y-0.5 active:scale-[0.99]"
            >
              <span className="min-w-0">
                <span className="block text-xs font-black uppercase tracking-[0.18em] text-blue-100">Official</span>
                <span className="mt-1 block text-xl font-black leading-snug">삼성전자 감사제 페스티벌 바로가기</span>
              </span>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-blue-700">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </span>
            </a>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {primaryLinks.map((link) => (
              <a
                key={`${link.label}-${link.href}`}
                href={link.href}
                className={`group rounded-2xl bg-gradient-to-r ${link.color} p-4 text-white shadow-lg transition-transform hover:-translate-y-0.5 active:scale-[0.99]`}
              >
                <span className="block text-xs font-black uppercase tracking-[0.16em] opacity-80">{link.eyebrow}</span>
                <span className="mt-2 flex items-center justify-between gap-3">
                  <strong className="text-base font-black leading-snug">{link.label}</strong>
                  <svg className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-black">핵심 혜택 요약</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-4">
            {summaryCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-base font-black">{card.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-black">환급 신청 흐름</h2>
            <ol className="mt-4 space-y-3">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-3 rounded-2xl bg-slate-50 p-3 text-sm font-semibold leading-6 text-slate-700">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-black text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-black">구매처 체크</h2>
            <div className="mt-4 grid gap-2">
              {purchasePlaces.map((place) => (
                <div key={place} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">
                  {place}
                </div>
              ))}
            </div>
            <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-bold leading-6 text-amber-900">
              매장·제품·결제 조건에 따라 행사 적용 여부가 달라질 수 있으니 구매 전 행사 대상 여부를 반드시 확인하세요.
            </p>
          </article>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white">
            <h2 className="text-2xl font-black">출처</h2>
            <div className="mt-4 grid gap-2">
              {sources.map((source) => (
                <a key={source.href} href={source.href} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <strong className="block text-sm font-black">{source.label}</strong>
                  <span className="mt-1 block text-xs font-semibold leading-5 text-slate-300">{source.desc}</span>
                </a>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-black">확인 사항</h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-slate-600">
              본 페이지는 공개 보도와 삼성전자 안내를 바탕으로 정리한 바로가기 안내입니다. 실제 행사 대상 제품,
              신청 절차, 지급 일정, 온누리상품권 사용 조건은 삼성전자 공식 페이지와 신청 화면의 최신 안내를 기준으로 확인하세요.
            </p>
            <a
              href="https://zucca100.com/onnuri-gift/"
              className="mt-5 flex w-full items-center justify-center rounded-2xl bg-emerald-600 px-4 py-4 text-sm font-black text-white shadow-lg transition-transform hover:-translate-y-0.5 active:scale-[0.99]"
            >
              온누리상품권 사용처 다시 확인
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
