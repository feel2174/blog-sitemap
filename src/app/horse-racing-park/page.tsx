import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '경마공원 주차정보 및 더비온 앱 다운로드 | 렛츠런파크 바로가기',
  description:
    '경마공원 주차정보, 더비온 앱 다운로드, 렛츠런파크 모바일 홈페이지를 한곳에서 바로 확인할 수 있는 공식 링크 안내 페이지입니다.',
  keywords: ['경마공원', '렛츠런파크', '경마공원 주차', '더비온 앱', 'KRA', '한국마사회'],
  alternates: {
    canonical: '/horse-racing-park',
  },
  openGraph: {
    title: '경마공원 공식 바로가기 모음',
    description: '주차정보, 더비온 앱 다운로드, 렛츠런파크 바로가기를 빠르게 확인하세요.',
    url: 'https://zucca100.com/horse-racing-park',
    type: 'article',
  },
};

const primaryLinks = [
  {
    label: '경마공원 주차정보',
    description: '서울 경마공원 방문 전 주차장 위치와 이용 정보를 확인하세요.',
    href: 'https://m.kra.co.kr/park/seoul/main.do',
    accent: 'from-emerald-500 to-teal-600',
    border: 'hover:border-emerald-400',
  },
  {
    label: '더비온 앱 다운로드',
    description: '경마 정보와 서비스 이용을 위한 KRA 앱 목록으로 이동합니다.',
    href: 'https://m.kra.co.kr/comp/view/kraAppList.do',
    accent: 'from-amber-400 to-orange-500',
    border: 'hover:border-amber-300',
  },
  {
    label: '렛츠런파크 바로가기',
    description: '한국마사회 모바일 메인 페이지에서 최신 공지와 서비스를 확인하세요.',
    href: 'https://m.kra.co.kr/main.do',
    accent: 'from-sky-500 to-blue-600',
    border: 'hover:border-sky-300',
  },
];

const infoItems = [
  {
    title: '방문 전 확인',
    body: '주말과 주요 행사일에는 주변 도로와 주차장이 혼잡할 수 있어 출발 전 모바일 안내를 먼저 확인하는 것이 좋습니다.',
  },
  {
    title: '앱 이용',
    body: '더비온 및 KRA 관련 앱은 공식 앱 목록에서 설치 경로를 확인하면 기기별 스토어로 안전하게 이동할 수 있습니다.',
  },
  {
    title: '공식 링크',
    body: '이 페이지의 버튼은 모두 한국마사회 모바일 공식 페이지로 연결되며 새 창 속성 없이 현재 탭에서 이동합니다.',
  },
];

export default function HorseRacingParkPage() {
  return (
    <div className="min-h-screen bg-[#11130f] text-white">
      <Header />

      <main>
        <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(17,19,15,0.94),rgba(33,37,27,0.82)),radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.20),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(20,184,166,0.16),transparent_28%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-56 bg-[repeating-linear-gradient(100deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_2px,transparent_2px,transparent_24px)] opacity-60" />
          </div>

          <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-amber-200 backdrop-blur">
                KRA Official Links
              </p>
              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                경마공원 방문 전 필요한 링크를 한 번에 확인하세요
              </h1>
              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-zinc-300 sm:text-lg">
                주차정보, 더비온 앱 다운로드, 렛츠런파크 모바일 바로가기를 큼직한 버튼으로 정리했습니다.
                모든 버튼은 현재 탭에서 공식 페이지로 이동하도록 구성했습니다.
              </p>
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#1c2118] shadow-2xl">
              <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.55)),repeating-linear-gradient(90deg,#755b2d_0,#755b2d_16px,#846735_16px,#846735_32px)]" />
              <div className="absolute left-1/2 top-12 h-52 w-52 -translate-x-1/2 rounded-full border-[18px] border-emerald-400/25" />
              <div className="absolute left-1/2 top-[5.5rem] h-36 w-36 -translate-x-1/2 rounded-full border-[14px] border-amber-300/30" />
              <div className="absolute left-8 top-8 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-300">LetsRun Park</p>
                <p className="mt-1 text-2xl font-black text-white">Parking · App · Main</p>
              </div>
              <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full bg-white text-[#11130f] shadow-xl">
                <div className="flex h-full w-full items-center justify-center text-center text-sm font-black leading-tight">
                  공식
                  <br />
                  바로가기
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f3ea] px-4 py-14 text-[#1f241b] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-4">
              {primaryLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`group relative overflow-hidden rounded-2xl border border-[#dfd5c2] bg-white p-6 shadow-[0_14px_40px_-24px_rgba(0,0,0,0.45)] transition-all duration-300 ${link.border} hover:-translate-y-1 hover:shadow-[0_24px_55px_-30px_rgba(0,0,0,0.55)]`}
                  aria-label={`${link.label} 공식 페이지로 이동`}
                >
                  <div className={`absolute left-0 top-0 h-full w-2 bg-gradient-to-b ${link.accent}`} />
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="pl-2">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-stone-400">Official Shortcut</p>
                      <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">{link.label}</h2>
                      <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-stone-600 sm:text-base">{link.description}</p>
                    </div>
                    <span className={`inline-flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-r ${link.accent} px-6 py-4 text-base font-black text-white shadow-lg transition-transform duration-300 group-hover:translate-x-1`}>
                      바로가기
                      <svg className="ml-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-6-6 6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 text-[#1f241b] sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {infoItems.map((item) => (
              <article key={item.title} className="border-l-4 border-amber-400 bg-stone-50 p-6">
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-4 text-sm font-medium leading-7 text-stone-600">{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
