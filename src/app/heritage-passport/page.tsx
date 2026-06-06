import type { Metadata } from 'next';

const passportApplyUrl = 'https://www.kh.or.kr/visit/kor/tour/passport/step1.do';

export const metadata: Metadata = {
  title: '국가유산청 여권 신청 바로가기 | 국가유산 방문자 여권',
  description:
    '국가유산 방문자 여권 신청 페이지로 바로 이동할 수 있는 원페이지 바로가기입니다. 새 창이 아닌 현재 창에서 공식 신청 페이지로 이동합니다.',
  keywords: ['국가유산청 여권', '국가유산 방문자 여권', '국가유산 여권 신청', '국가유산 방문 캠페인'],
  alternates: {
    canonical: '/heritage-passport',
  },
  openGraph: {
    title: '국가유산청 여권 신청 바로가기',
    description: '국가유산 방문자 여권 공식 신청 페이지로 바로 이동하세요.',
    url: 'https://zucca100.com/heritage-passport',
    type: 'article',
  },
};

const notes = [
  {
    title: '공식 신청 페이지',
    body: '버튼은 한국문화재재단 국가유산 방문자 여권 신청 단계로 연결됩니다.',
  },
  {
    title: '현재 창 이동',
    body: '새 창을 열지 않고 현재 보고 있는 창에서 신청 페이지로 바로 이동합니다.',
  },
  {
    title: '신청 전 확인',
    body: '신청 조건, 발급 안내, 개인정보 입력 항목은 이동 후 공식 페이지에서 확인하세요.',
  },
];

export default function HeritagePassportPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] px-4 py-6 text-stone-950 sm:px-6 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-48px)] max-w-3xl flex-col justify-center">
        <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-[0_24px_70px_-42px_rgba(41,37,36,0.8)] sm:p-8">
          <div className="mb-4 flex flex-wrap gap-2 text-xs font-black">
            <span className="rounded-full bg-stone-950 px-3 py-1.5 text-white">Official Shortcut</span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-emerald-700">
              국가유산 방문자 여권
            </span>
          </div>

          <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-700">Korea Heritage Passport</p>
          <h1 className="mt-2 text-3xl font-black leading-tight sm:text-5xl">국가유산청 여권 신청 바로가기</h1>
          <p className="mt-3 text-base font-semibold leading-7 text-stone-600">
            국가유산 방문자 여권 신청을 빠르게 시작할 수 있도록 공식 신청 페이지로 바로 연결합니다.
          </p>

          <a
            href={passportApplyUrl}
            className="mt-6 flex w-full items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-emerald-700 to-stone-950 px-5 py-5 text-left text-white shadow-xl transition-transform hover:-translate-y-0.5 active:scale-[0.99]"
            aria-label="국가유산청 여권 신청 공식 페이지로 이동"
          >
            <span className="min-w-0">
              <span className="block text-xs font-black uppercase tracking-[0.18em] text-emerald-100">Apply Now</span>
              <span className="mt-1 block text-xl font-black leading-snug sm:text-2xl">여권 신청 바로가기</span>
            </span>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-emerald-800">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </span>
          </a>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {notes.map((note) => (
              <article key={note.title} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <h2 className="text-sm font-black">{note.title}</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-stone-600">{note.body}</p>
              </article>
            ))}
          </div>

          <p className="mt-5 text-xs font-semibold leading-6 text-stone-500">
            본 페이지는 공식 신청 화면으로 빠르게 이동하기 위한 바로가기 안내 페이지입니다. 신청 내용과 운영 정책은 연결된 공식 페이지의 안내를 기준으로 확인하세요.
          </p>
        </div>
      </section>
    </main>
  );
}
