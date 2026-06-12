import type { Metadata } from 'next';

const checkUrl = 'https://mkt.tving.com/s/033F1188694';

const guideCards = [
  {
    title: '조회 목적',
    body: '외부 비인가 접근으로 인한 개인정보 유출 여부를 회원이 직접 확인할 수 있도록 안내된 조회 페이지입니다.',
  },
  {
    title: '먼저 할 일',
    body: '조회 후 동일 계정 정보를 사용하는 다른 서비스가 있다면 비밀번호 변경과 2단계 인증 설정을 권장합니다.',
  },
  {
    title: '주의할 연락',
    body: '수상한 전화, 메일, 문자, 소셜미디어 메시지는 링크를 누르기 전 발신자와 주소를 반드시 확인하세요.',
  },
];

const actionItems = [
  '개인정보 유출 조회 페이지에서 본인 해당 여부를 먼저 확인합니다.',
  '동일한 이메일, 아이디, 비밀번호를 다른 서비스에서도 사용 중이라면 즉시 변경합니다.',
  '수상한 문자나 메일의 첨부파일, 단축 URL, 로그인 유도 링크는 열지 않습니다.',
  '피해가 의심되면 관계 기관 신고 채널 또는 티빙 고객센터로 상담합니다.',
];

const reportChannels = [
  {
    title: '스미싱 문자',
    body: '한국인터넷진흥원 118 또는 카카오톡 보호나라 채널',
  },
  {
    title: '보이스 피싱',
    body: '전기통신금융사기 통합신고대응센터 1566-1188',
  },
  {
    title: '피싱 사이트',
    body: '한국인터넷진흥원 118 또는 1566-1188',
  },
  {
    title: '악성 앱 설치 피해',
    body: '경찰청 사이버범죄 신고시스템 또는 가까운 경찰서',
  },
];

export const metadata: Metadata = {
  title: '티빙 개인정보 유출 조회 바로가기 | TVING 유출 여부 확인 안내',
  description:
    '티빙 개인정보 유출 조회 바로가기와 이용자 행동 요령, 스미싱·피싱 신고처, 티빙 고객센터 정보를 모바일에서 빠르게 확인할 수 있도록 정리했습니다.',
  keywords: ['티빙 개인정보 유출', 'TVING 개인정보 유출 조회', '티빙 유출 조회', '개인정보 유출 확인'],
  alternates: {
    canonical: '/tving-privacy-check',
  },
  openGraph: {
    title: '티빙 개인정보 유출 조회 바로가기',
    description: '티빙 개인정보 유출 여부 조회 버튼과 피해 예방 행동 요령을 한 화면에서 확인하세요.',
    url: 'https://zucca100.com/tving-privacy-check',
    type: 'article',
  },
};

export default function TvingPrivacyCheckPage() {
  return (
    <main className="min-h-screen bg-[#f4f6fb] text-slate-950">
      <section className="bg-white px-4 pb-6 pt-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 flex flex-wrap gap-2 text-xs font-black">
            <span className="rounded-full bg-slate-950 px-3 py-1.5 text-white">TVING</span>
            <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-red-700">
              개인정보 유출 조회
            </span>
            <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-blue-700">
              모바일 바로가기
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-red-600">Privacy Check</p>
              <h1 className="mt-2 text-3xl font-black leading-tight sm:text-5xl">
                티빙 개인정보 유출 조회 바로가기
              </h1>
              <p className="mt-3 max-w-3xl text-base font-semibold leading-7 text-slate-600">
                티빙 안내에 따라 개인정보 유출 여부를 확인할 수 있는 조회 링크와 이용자 행동 요령을 빠르게
                확인할 수 있도록 정리했습니다.
              </p>
            </div>

            <a
              href={checkUrl}
              className="flex w-full items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-red-600 to-slate-950 px-5 py-5 text-left text-white shadow-xl transition-transform hover:-translate-y-0.5 active:scale-[0.99]"
              aria-label="티빙 개인정보 유출 조회 페이지로 이동"
            >
              <span className="min-w-0">
                <span className="block text-xs font-black uppercase tracking-[0.18em] text-red-100">Check Now</span>
                <span className="mt-1 block text-xl font-black leading-snug sm:text-2xl">
                  개인정보 유출 여부 조회하기
                </span>
              </span>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-red-700">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </span>
            </a>
          </div>

          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-bold leading-6 text-amber-900">
            안내 문자는 스미싱으로 오인될 수 있으니, 조회 전 주소가 안내된 링크와 일치하는지 확인하고
            비밀번호나 인증번호를 요구하는 의심 메시지는 주의하세요.
          </div>
        </div>
      </section>

      <section className="px-4 py-7 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-black">핵심 확인 사항</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {guideCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-base font-black">{card.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-7 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-4 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-black">이용자 행동 요령</h2>
            <ol className="mt-4 space-y-3">
              {actionItems.map((item, index) => (
                <li key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-3 text-sm font-semibold leading-6 text-slate-700">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-black text-white">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white shadow-sm">
            <h2 className="text-2xl font-black">티빙 고객센터</h2>
            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-300">Phone</p>
                <p className="mt-1 text-2xl font-black">1551-2391</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-300">Email</p>
                <p className="mt-1 break-all text-lg font-black">tving@cj.net</p>
              </div>
            </div>
            <p className="mt-4 text-sm font-semibold leading-6 text-slate-300">
              상담 채널과 운영 방식은 티빙의 공식 안내에 따라 달라질 수 있으니 최신 공지는 티빙 안내 페이지에서 확인하세요.
            </p>
          </article>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-black">피해 접수·신고 기관</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {reportChannels.map((channel) => (
                <div key={channel.title} className="rounded-2xl bg-slate-50 p-4">
                  <h3 className="text-base font-black">{channel.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{channel.body}</p>
                </div>
              ))}
            </div>
          </article>

          <a
            href={checkUrl}
            className="mt-5 flex w-full items-center justify-center rounded-2xl bg-red-600 px-5 py-4 text-center text-base font-black text-white shadow-lg transition-transform hover:-translate-y-0.5 active:scale-[0.99]"
          >
            티빙 개인정보 유출 조회하기
          </a>
        </div>
      </section>
    </main>
  );
}
