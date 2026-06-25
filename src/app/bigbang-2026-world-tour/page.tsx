import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

const bookingUrl = 'https://www.coupangplay.com/promotion/BIGBANG-2026-WORLD-TOUR/';

export const metadata = {
  title: '빅뱅 콘서트 예매 바로가기 | BIGBANG 2026 WORLD TOUR IN GOYANG',
  description:
    '쿠팡플레이와 함께하는 BIGBANG 2026 WORLD TOUR IN GOYANG 예매 일정, 선예매, 일반예매, 공연일, 장소, 유의사항을 한눈에 정리했습니다.',
  keywords: [
    '빅뱅 콘서트 예매',
    'BIGBANG 2026 WORLD TOUR',
    '빅뱅 고양 콘서트',
    '쿠팡플레이 빅뱅',
    '빅뱅 티켓팅',
    'BIGBANG 예매',
  ],
  alternates: {
    canonical: '/bigbang-2026-world-tour',
  },
  openGraph: {
    title: '빅뱅 콘서트 예매 바로가기',
    description: '쿠팡 와우회원 대상 쿠팡플레이 모바일 앱 단독 예매 정보를 빠르게 확인하세요.',
    url: 'https://zucca100.com/bigbang-2026-world-tour',
    type: 'article',
  },
};

const showDates = [
  ['8월 21일 (금)', '오후 7:30'],
  ['8월 22일 (토)', '오후 7:30'],
  ['8월 23일 (일)', '오후 7:00'],
];

const bookingSteps = [
  ['팬클럽 선예매', '6월 24일 (수) 오후 7:00', 'BIGBANG V.I.P OFFICIAL MEMBERSHIP 인증 와우회원, 회차별 1매'],
  ['일반 예매', '6월 25일 (목) 오후 7:00', '모든 쿠팡 와우회원, 선예매 포함 회차별 최대 2매'],
  ['휠체어석 예매', '6월 26일 (금) 오전 9:00', '고객센터를 통한 별도 예매 안내 확인 필요'],
];

const cautions = [
  '국내 티켓 예매는 쿠팡플레이 모바일 앱에서만 가능합니다.',
  '쿠팡 와우회원만 구매할 수 있고, 계정 1개당 동시 1명만 접속할 수 있습니다.',
  '부정 예매 방지를 위해 국내 발급 카드 결제만 가능하며 무통장 입금은 불가합니다.',
  '공연 당일 유효 신분증 확인 후 입장용 팔찌가 제공되며 양도는 불가능합니다.',
  '공연장 내 주차는 불가하므로 대중교통 이용이 권장됩니다.',
];

function BookingButton({ label = '빅뱅 콘서트 예매 페이지 바로가기' }: { label?: string }) {
  return (
    <Link
      href={bookingUrl}
      className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#00A7F6] px-6 py-4 text-center text-base font-black text-white shadow-xl shadow-sky-500/25 transition hover:-translate-y-0.5 hover:bg-[#008FE0] sm:w-auto sm:px-8"
    >
      {label}
      <span className="transition group-hover:translate-x-1" aria-hidden="true">
        →
      </span>
    </Link>
  );
}

export default function BigbangWorldTourPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'BIGBANG 2026 WORLD TOUR IN GOYANG',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: '고양종합운동장',
      address: '경기도 고양시 일산서구',
    },
    organizer: {
      '@type': 'Organization',
      name: 'Coupang Play',
      url: bookingUrl,
    },
    url: bookingUrl,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main
        className="min-h-screen bg-[#05070B] text-white"
        style={{
          fontFamily:
            '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        }}
      >
        <section className="relative overflow-hidden px-4 pb-12 pt-16 sm:px-6">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: 'url("/coupang-play-bg.png")' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,7,11,0.98),rgba(9,20,34,0.9)_48%,rgba(0,167,246,0.48))]" />
          <div className="relative mx-auto max-w-5xl">
            <div className="inline-flex rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-2 text-sm font-black text-sky-100">
              쿠팡 와우회원 전용 · 쿠팡플레이 모바일 앱 단독 예매
            </div>
            <h1 className="mt-5 break-keep text-4xl font-black leading-tight tracking-normal sm:text-6xl">
              BIGBANG 2026 WORLD TOUR
              <span className="block text-[#79D8FF]">고양 콘서트 예매 바로가기</span>
            </h1>
            <p className="mt-5 max-w-3xl break-keep text-lg font-semibold leading-8 text-slate-200">
              빅뱅 콘서트 국내 티켓은 쿠팡플레이 모바일 앱에서만 예매할 수 있습니다. 선예매와 일반예매 시간이
              다르고 회차별 매수 제한이 있으니, 예매 전 와우회원 계정과 모바일 앱 접속 환경을 먼저 확인하세요.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookingButton />
              <Link
                href="#booking-guide"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-base font-black text-white transition hover:bg-white/15 sm:w-auto"
              >
                예매 일정 먼저 보기
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6">
          <div className="mx-auto grid max-w-5xl gap-3 md:grid-cols-3">
            {showDates.map(([date, time]) => (
              <article key={date} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-sm">
                <p className="text-sm font-black text-sky-300">공연 일시</p>
                <h2 className="mt-2 text-2xl font-black">{date}</h2>
                <p className="mt-1 text-base font-bold text-slate-300">{time}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="booking-guide" className="px-4 pb-8 sm:px-6">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl sm:p-7">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-sky-300">Ticket Open</p>
            <h2 className="mt-2 break-keep text-3xl font-black">빅뱅 콘서트 예매 일정</h2>
            <div className="mt-5 grid gap-3">
              {bookingSteps.map(([title, time, detail]) => (
                <article key={title} className="rounded-2xl bg-white p-4 text-slate-950">
                  <div className="grid gap-2 sm:grid-cols-[160px_1fr] sm:items-center">
                    <strong className="text-lg font-black text-slate-950">{title}</strong>
                    <div>
                      <p className="text-base font-black text-sky-700">{time}</p>
                      <p className="mt-1 break-keep text-sm font-semibold leading-6 text-slate-600">{detail}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6">
              <BookingButton label="쿠팡플레이 빅뱅 예매 정보 확인하기" />
            </div>
          </div>
        </section>

        <section className="px-4 pb-8 sm:px-6">
          <div className="mx-auto grid max-w-5xl gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-3xl bg-[#00A7F6] p-6 text-slate-950">
              <p className="text-sm font-black uppercase tracking-[0.16em]">Venue</p>
              <h2 className="mt-2 text-3xl font-black">고양종합운동장</h2>
              <p className="mt-3 break-keep text-base font-bold leading-7">
                지하철 3호선 대화역 2번 출구에서 도보 약 6분 거리입니다. 공연 당일 혼잡이 예상되고 공연장 내 주차가
                불가하므로 대중교통 이동을 기준으로 계획하는 편이 좋습니다.
              </p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-sky-300">Check List</p>
              <h2 className="mt-2 text-3xl font-black">예매 전 꼭 확인할 점</h2>
              <ul className="mt-4 grid gap-3">
                {cautions.map((item) => (
                  <li key={item} className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold leading-6 text-slate-100">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="px-4 pb-10 sm:px-6">
          <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 text-slate-950 shadow-xl sm:p-8">
            <p className="text-sm font-black text-sky-700">공식 예매 안내</p>
            <h2 className="mt-2 break-keep text-3xl font-black">쿠팡플레이 앱에서 예매 정보 확인 후 진행하세요</h2>
            <p className="mt-3 break-keep text-base font-semibold leading-7 text-slate-600">
              선예매 인증, 잔여석, 세부 예매 정책은 쿠팡플레이 공식 안내에서 최신 정보로 확인해야 합니다. 아래 버튼은
              공식 빅뱅 월드투어 프로모션 페이지로 이동합니다.
            </p>
            <div className="mt-6">
              <BookingButton label="BIGBANG 2026 WORLD TOUR 예매 바로가기" />
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <CoupangAds
              keyword="콘서트 준비물"
              title="콘서트 관람 준비 아이템"
              hookText="티켓 예매를 준비했다면 공연 당일 필요한 보조배터리, 응원봉 보관, 이동용 가방도 함께 확인해보세요."
            />
          </div>
        </section>
      </main>
    </>
  );
}
