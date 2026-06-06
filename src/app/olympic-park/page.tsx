import type { Metadata } from 'next';

const links = [
  {
    label: '주차장 혼잡도 안내',
    description: '올림픽공원 방문 전 주차장 상황을 확인하세요.',
    href: 'https://www.ksponco.or.kr/olympicpark/parkingInfo?mid=a20111000000',
    eyebrow: 'Parking Info',
    accent: 'from-emerald-600 to-teal-700',
  },
  {
    label: '안드로이드 앱 다운로드',
    description: 'Google Play에서 올림픽공원 앱을 설치하세요.',
    href: 'https://play.google.com/store/apps/details?id=com.kspo.olympicPark&hl=ko',
    eyebrow: 'Android App',
    accent: 'from-lime-600 to-green-700',
  },
  {
    label: '아이폰 앱 다운로드',
    description: 'App Store에서 올림픽공원 앱을 설치하세요.',
    href: 'https://apps.apple.com/kr/app/%EC%98%AC%EB%A6%BC%ED%94%BD%EA%B3%B5%EC%9B%90/id522263236',
    eyebrow: 'iPhone App',
    accent: 'from-sky-600 to-blue-700',
  },
];

const tips = [
  {
    title: '방문 전 확인',
    body: '공연·행사일에는 주차장이 빠르게 혼잡해질 수 있어 출발 전 주차 정보를 먼저 확인하는 것이 좋습니다.',
  },
  {
    title: '앱 활용',
    body: '올림픽공원 앱을 설치하면 공원 이용 정보와 편의 기능을 모바일에서 확인하기 쉽습니다.',
  },
  {
    title: '공식 경로',
    body: '이 페이지의 버튼은 올림픽공원 관련 공식 안내와 앱 스토어 페이지로 연결됩니다.',
  },
];

export const metadata: Metadata = {
  title: '올림픽공원 주차장 혼잡도 및 앱 다운로드 바로가기',
  description:
    '올림픽공원 주차장 혼잡도 안내, 안드로이드 앱 다운로드, 아이폰 앱 다운로드 링크를 한 화면에서 확인하세요.',
  keywords: ['올림픽공원', '올림픽공원 주차장', '올림픽공원 주차 혼잡도', '올림픽공원 앱', 'KSPO'],
  alternates: {
    canonical: '/olympic-park',
  },
  openGraph: {
    title: '올림픽공원 바로가기',
    description: '주차장 혼잡도 안내와 올림픽공원 앱 다운로드 링크를 빠르게 확인하세요.',
    url: 'https://zucca100.com/olympic-park',
    type: 'article',
  },
};

export default function OlympicParkPage() {
  return (
    <main className="min-h-screen bg-[#f3f8f3] px-4 py-6 text-slate-950 sm:px-6 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-48px)] max-w-4xl flex-col justify-center">
        <div className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-[0_24px_70px_-44px_rgba(15,23,42,0.75)] sm:p-8">
          <div className="mb-4 flex flex-wrap gap-2 text-xs font-black">
            <span className="rounded-full bg-slate-950 px-3 py-1.5 text-white">Olympic Park</span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-emerald-700">
              주차장 혼잡도
            </span>
            <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-blue-700">앱 다운로드</span>
          </div>

          <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">KSPO Official Links</p>
          <h1 className="mt-2 text-3xl font-black leading-tight sm:text-5xl">올림픽공원 바로가기</h1>
          <p className="mt-3 max-w-2xl text-base font-semibold leading-7 text-slate-600">
            주차장 혼잡도 안내와 올림픽공원 앱 다운로드 링크를 한 화면에서 빠르게 확인하세요.
          </p>

          <div className="mt-6 grid gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-transform hover:-translate-y-0.5 active:scale-[0.99]"
              >
                <div className="grid grid-cols-[10px_1fr]">
                  <div className={`bg-gradient-to-b ${link.accent}`} aria-hidden="true" />
                  <div className="flex items-center justify-between gap-4 p-4 sm:p-5">
                    <span className="min-w-0">
                      <span className="block text-xs font-black uppercase tracking-[0.18em] text-slate-400">{link.eyebrow}</span>
                      <span className="mt-1 block text-xl font-black leading-snug">{link.label}</span>
                      <span className="mt-2 block text-sm font-semibold leading-6 text-slate-600">{link.description}</span>
                    </span>
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r ${link.accent} text-white shadow-lg transition-transform group-hover:translate-x-1`}>
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-6-6 6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {tips.map((tip) => (
              <article key={tip.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h2 className="text-sm font-black">{tip.title}</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{tip.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
