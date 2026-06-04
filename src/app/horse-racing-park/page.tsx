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
    <div className="min-h-screen bg-[#f7f3ea] text-[#1f241b]">
      <Header />

      <main className="px-4 pb-12 pt-20 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-3xl">
          <div className="mb-4 rounded-2xl bg-[#11130f] px-5 py-4 text-white shadow-xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-200">KRA Official Links</p>
            <h1 className="mt-2 text-2xl font-black leading-tight tracking-tight sm:text-4xl">
              경마공원 공식 바로가기
            </h1>
            <p className="mt-2 text-sm font-semibold leading-6 text-zinc-300">
              주차정보, 더비온 앱 다운로드, 렛츠런파크를 바로 확인하세요.
            </p>
          </div>

          <div className="grid gap-3">
              {primaryLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`group relative overflow-hidden rounded-2xl border-2 border-[#dfd5c2] bg-white p-4 shadow-[0_14px_40px_-24px_rgba(0,0,0,0.45)] transition-all duration-300 sm:p-5 ${link.border} hover:-translate-y-1 hover:shadow-[0_24px_55px_-30px_rgba(0,0,0,0.55)]`}
                  aria-label={`${link.label} 공식 페이지로 이동`}
                >
                  <div className={`absolute left-0 top-0 h-full w-2 bg-gradient-to-b ${link.accent}`} aria-hidden="true" />
                  <div className="flex items-center justify-between gap-4 pl-2">
                    <div className="min-w-0">
                      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-stone-400">Official Shortcut</p>
                      <h2 className="mt-1 text-xl font-black tracking-tight sm:text-2xl">{link.label}</h2>
                      <p className="mt-2 text-sm font-semibold leading-5 text-stone-600">{link.description}</p>
                    </div>
                    <span className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r ${link.accent} text-white shadow-lg transition-transform duration-300 group-hover:translate-x-1 sm:h-auto sm:w-auto sm:px-5 sm:py-3 sm:text-sm sm:font-black`}>
                      <span className="hidden sm:inline">바로가기</span>
                      <svg className="h-5 w-5 sm:ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-6-6 6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
          </div>
        </section>

        <section className="mx-auto mt-8 grid max-w-3xl gap-3 md:grid-cols-3">
            {infoItems.map((item) => (
              <article key={item.title} className="border-l-4 border-amber-400 bg-white p-4 shadow-sm">
                <h3 className="text-base font-black">{item.title}</h3>
                <p className="mt-2 text-sm font-medium leading-6 text-stone-600">{item.body}</p>
              </article>
            ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
