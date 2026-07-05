import type { Metadata } from 'next';
import CoupangAds from '@/components/CoupangAds';

const koreaMatches = [
  {
    round: '조별리그 1차전',
    date: '6월 12일 (금)',
    time: '오전 11:00',
    opponent: '대한민국 vs 체코',
    venue: '에스타디오 아크론 (멕시코 과달라하라)',
    status: '2:1 승',
  },
  {
    round: '조별리그 2차전',
    date: '6월 19일 (금)',
    time: '오전 10:00',
    opponent: '멕시코 vs 대한민국',
    venue: '에스타디오 아크론 (멕시코 과달라하라)',
    status: '패',
  },
  {
    round: '조별리그 3차전',
    date: '6월 25일 (목)',
    time: '오전 10:00',
    opponent: '남아공 vs 대한민국',
    venue: '에스타디오 BBVA (멕시코 몬테레이)',
    status: '패',
  },
];

const stageSchedule = [
  {
    stage: '개막전',
    localDate: '6월 11일 (목)',
    kstDate: '6월 12일 (금) 오전 4시',
    matches: '멕시코 vs 남아공 · 멕시코시티 스타디움(에스타디오 아즈테카)',
    status: '종료',
  },
  {
    stage: '조별리그',
    localDate: '6월 11일 ~ 6월 27일',
    kstDate: '6월 12일 ~ 6월 28일 새벽·오전',
    matches: '48개국 12개 조, 총 72경기 · 한국은 1승 2패로 조 3위 탈락',
    status: '종료',
  },
  {
    stage: '32강 토너먼트',
    localDate: '6월 28일 ~ 7월 3일',
    kstDate: '6월 29일 ~ 7월 4일 새벽·오전',
    matches: '16경기 종료 · 16강 진출 16개국 확정 (한국 진출 실패)',
    status: '종료',
  },
  {
    stage: '16강 토너먼트',
    localDate: '7월 4일 ~ 7월 7일',
    kstDate: '7월 5일 ~ 7월 8일 새벽·오전',
    matches: '2경기 종료(모로코·프랑스 승리) · 6경기 진행 예정',
    status: '진행중',
  },
  {
    stage: '8강 토너먼트',
    localDate: '7월 9일 ~ 7월 11일',
    kstDate: '7월 10일 ~ 7월 12일 새벽·오전',
    matches: '모로코 vs 프랑스(7월 10일 오전 5시) 확정 · 나머지 3경기 대진 미정',
    status: '1경기 확정',
  },
  {
    stage: '4강 토너먼트',
    localDate: '7월 14일 ~ 7월 15일',
    kstDate: '7월 15일 ~ 7월 16일 새벽·오전',
    matches: '알링턴(AT&T 스타디움) · 애틀랜타(메르세데스-벤츠 스타디움) / 대진 미정',
    status: '대진 미정',
  },
  {
    stage: '3·4위전',
    localDate: '7월 18일 (토)',
    kstDate: '7월 19일 (일) 오전 6시',
    matches: '마이애미가든스(하드록 스타디움) / 대진 미정',
    status: '대진 미정',
  },
  {
    stage: '결승전',
    localDate: '7월 19일 (일)',
    kstDate: '7월 20일 (월) 오전 4시',
    matches: '이스트러더퍼드(메트라이프 스타디움) / 대진 미정',
    status: '대진 미정',
  },
];

const overviewCards = [
  {
    title: '대회 기간',
    body: '현지시간 2026년 6월 11일부터 7월 19일까지, 한국시간 기준 6월 12일 새벽부터 7월 20일 오전까지 진행됩니다.',
  },
  {
    title: '개최국',
    body: '미국·캐나다·멕시코 3개국 공동 개최로, 16개 도시에서 경기가 열립니다.',
  },
  {
    title: '참가국·경기 수',
    body: '역대 최초 48개국이 참가하며 총 104경기가 열립니다. 이번 대회부터 32강 토너먼트가 새로 도입됐습니다.',
  },
  {
    title: '한국 경기 시간대',
    body: '한국 조별리그 경기는 모두 멕시코에서 열려 한국시간 오전 10~11시에 시청할 수 있습니다.',
  },
];

const roundOf32Highlights = [
  ['32강 결과', '16경기 종료 · 승부차기 3회, 연장 2회'],
  ['16강 기간', '7월 4일 ~ 7월 7일(현지시간)'],
  ['8강 첫 확정', '모로코 vs 프랑스 · 7월 10일 오전 5시'],
  ['결승', '7월 19일 메트라이프 스타디움'],
];

const groupA = [
  { team: '멕시코', note: '개최국 · 시드 배정' },
  { team: '대한민국', note: '아시아 예선 통과' },
  { team: '남아프리카공화국', note: '아프리카 예선 통과' },
  { team: '체코', note: 'UEFA 플레이오프 패스D 통과' },
];

const sources = [
  {
    label: 'FIFA 공식 경기 일정',
    href: 'https://www.fifa.com/ko/tournaments/mens/worldcup/canadamexicousa2026/scores-fixtures',
    desc: '2026 월드컵 전체 경기 결과 및 일정 공식 페이지',
  },
  {
    label: '이데일리 - 한국 32강 진출 무산',
    href: 'https://www.edaily.co.kr/News/Read?newsId=02482966645485984&mediaCodeNo=257',
    desc: '한국의 조별리그 탈락과 이란과의 순위 비교 보도',
  },
  {
    label: '파이낸셜뉴스 - 16강 대진 완성',
    href: 'https://www.fnnews.com/news/202607041620424888',
    desc: '32강 결과와 16강 대진 확정 소식',
  },
];

export const metadata: Metadata = {
  title: '2026 북중미 월드컵 일정 총정리 (32강 결과·16강 진행 상황)',
  description:
    '2026 북중미 월드컵 32강 결과와 16강 진행 상황을 한국시간 기준으로 정리했습니다. 한국 조별리그 결과와 32강 탈락 배경, 16강·8강 대진까지 확인하세요.',
  keywords: [
    '2026 월드컵 일정',
    '북중미 월드컵',
    '한국 월드컵 탈락',
    '월드컵 32강 결과',
    '월드컵 16강 일정',
  ],
  alternates: {
    canonical: '/worldcup-2026',
  },
  openGraph: {
    title: '2026 북중미 월드컵 일정 총정리 (32강 결과·16강 진행 상황)',
    description: '한국 조별리그 결과부터 32강 전체 결과, 16강 진행 상황까지 2026 월드컵을 한 화면에서 확인하세요.',
    url: 'https://zucca100.com/worldcup-2026',
    type: 'article',
  },
};

function LiveButton({ label }: { label: string }) {
  return (
    <a
      href="https://zucca100.com/kingkongtv/"
      className="flex w-full items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-700 px-5 py-5 text-left text-white shadow-xl transition-transform hover:-translate-y-0.5 active:scale-[0.99]"
    >
      <span className="min-w-0">
        <span className="block text-xs font-black uppercase tracking-[0.18em] text-emerald-100">Live</span>
        <span className="mt-1 block text-lg font-black leading-snug sm:text-xl">{label}</span>
      </span>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-emerald-700">
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
      </span>
    </a>
  );
}

export default function Worldcup2026Page() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-950">
      <section className="bg-white px-4 pb-7 pt-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-3 flex flex-wrap gap-2 text-xs font-black">
            <span className="rounded-full bg-slate-950 px-3 py-1.5 text-white">2026.07 기준</span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-emerald-700">
              32강 결과 완료
            </span>
            <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-blue-700">16강 진행중</span>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_0.95fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-600">FIFA World Cup 26</p>
              <h1 className="mt-2 text-3xl font-black leading-tight sm:text-5xl">
                2026 북중미 월드컵 일정 총정리
              </h1>
              <p className="mt-3 max-w-3xl text-base font-semibold leading-7 text-slate-600">
                32강 토너먼트 16경기가 모두 끝나고 16강이 진행 중입니다. 한국 A조 경기 결과부터
                32강 전체 결과, 16강·8강 진행 상황까지 한국시간 기준으로 한 화면에서 확인하세요. 한국은
                조별리그 3위(1승 2패)로 32강 진출에 실패했습니다.
              </p>
            </div>

            <LiveButton label="월드컵 실시간 중계 바로가기" />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {overviewCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h2 className="text-base font-black">{card.title}</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{card.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-3xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
            <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-700">Round of 32 · 종료</p>
                <h2 className="mt-1 text-2xl font-black">월드컵 32강 결과 10초 요약</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                  32강 16경기(6월 28일~7월 3일 현지시간)가 모두 끝나 16강 진출 16개국이 확정됐습니다.
                  16강은 7월 4일~7일(현지시간) 진행 중이며, 8강 첫 대진(모로코 vs 프랑스)도 이미 확정됐습니다.
                </p>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {roundOf32Highlights.map(([title, body]) => (
                  <div key={title} className="rounded-2xl bg-white p-3 ring-1 ring-emerald-100">
                    <strong className="block text-sm font-black text-emerald-800">{title}</strong>
                    <span className="mt-1 block text-xs font-semibold leading-5 text-slate-600">{body}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              <a href="#stage-schedule" className="rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-black text-white">
                단계별 진행 상황 확인하기
              </a>
              <a href="#korea-round-of-32" className="rounded-xl bg-emerald-600 px-4 py-3 text-center text-sm font-black text-white">
                한국 조별리그 탈락 이유 보기
              </a>
              <a href="/worldcup-2026-schedule#round-of-16" className="rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-black text-white">
                16강 대진·일정 바로 확인하기
              </a>
            </div>
          </div>

          <a
            href="https://zucca100.com/%ec%9b%94%eb%93%9c%ec%bb%b5-%ec%9d%bc%ec%a0%95-%ec%a4%91%ea%b3%84-%eb%b3%b4%eb%8a%94%eb%b2%95-%ec%8b%9c%ea%b0%84-%eb%ac%b4%eb%a3%8c-%ec%a4%91%ea%b3%84-%eb%b0%94%eb%a1%9c%ea%b0%80%ea%b8%b0/"
            className="group mt-3 flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white shadow-lg transition-transform hover:-translate-y-0.5 active:scale-[0.99]"
          >
            <span className="min-w-0">
              <span className="block text-xs font-black uppercase tracking-[0.16em] opacity-80">Full Schedule</span>
              <strong className="mt-1 block text-base font-black leading-snug">
                조별리그 72경기 전체 일정표 보러가기
              </strong>
            </span>
            <svg className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-black">대한민국 조별리그 결과 (A조 · 한국시간)</h2>
          <p className="mt-2 text-sm font-semibold text-slate-600">
            세 경기 모두 멕시코에서 열렸습니다. 한국은 1승 2패(승점 3, 골득실 -1)로 조 3위를 기록했습니다.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {koreaMatches.map((match) => (
              <article key={match.round} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-black text-white">{match.round}</span>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs font-black ${
                      match.status === '패'
                        ? 'border-rose-200 bg-rose-50 text-rose-700'
                        : 'border-emerald-200 bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    {match.status}
                  </span>
                </div>
                <p className="mt-3 text-lg font-black leading-snug">{match.opponent}</p>
                <p className="mt-2 text-sm font-black text-blue-700">
                  {match.date} {match.time}
                </p>
                <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">{match.venue}</p>
              </article>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="text-base font-black">A조 구성</h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {groupA.map((entry) => (
                <div key={entry.team} className="rounded-xl bg-slate-50 px-4 py-3">
                  <strong className="block text-sm font-black text-slate-800">{entry.team}</strong>
                  <span className="mt-0.5 block text-xs font-semibold text-slate-500">{entry.note}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="korea-round-of-32" className="mt-4 rounded-2xl border border-slate-200 bg-slate-900 p-4 text-white shadow-sm">
            <p className="text-sm font-black text-emerald-300">한국 32강 진출 실패</p>
            <h3 className="mt-1 text-xl font-black">이란에 골득실 밀려 조 3위 팀 10위, 8년 만의 조별리그 탈락</h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-slate-200">
              32강은 조 1·2위 24팀과 조 3위 중 성적 상위 8팀이 오르는 방식이었습니다. 한국은 조 3위
              12개 팀 가운데 골득실에서 앞선 이란(6위)에 밀려 10위에 그쳐 32강 티켓을 놓쳤습니다. 전체
              48개국 중 34위로 대회를 마쳤으며, 2018 러시아 대회 이후 8년 만의 조별리그 탈락입니다.
            </p>
          </div>
        </div>
      </section>

      <section id="stage-schedule" className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-black">단계별 진행 상황</h2>
          <p className="mt-2 text-sm font-semibold text-slate-600">
            조별리그와 32강은 종료됐고 16강이 진행 중입니다. 8강 이후 대진은 앞선 라운드 결과에 따라
            순차 확정되며, 확정 전 경기는 일정만 기재하고 대진은 미정으로 표기했습니다.
          </p>

          <div className="mt-4 space-y-3">
            {stageSchedule.map((stage) => (
              <article
                key={stage.stage}
                className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[150px_1fr_auto] sm:items-center"
              >
                <div>
                  <h3 className="text-base font-black">{stage.stage}</h3>
                  <span
                    className={`mt-1.5 inline-block rounded-full px-2.5 py-1 text-xs font-black ${
                      stage.status === '종료'
                        ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                        : stage.status === '진행중'
                          ? 'border border-blue-200 bg-blue-50 text-blue-700'
                          : 'border border-amber-200 bg-amber-50 text-amber-800'
                    }`}
                  >
                    {stage.status}
                  </span>
                </div>
                <div className="text-sm font-semibold leading-6 text-slate-600">
                  <p>
                    <strong className="font-black text-slate-800">현지시간</strong> {stage.localDate}
                  </p>
                  <p>
                    <strong className="font-black text-slate-800">한국시간</strong> {stage.kstDate}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">{stage.matches}</p>
                </div>
                <div className="hidden sm:block">
                  <svg className="h-5 w-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-bold leading-6 text-amber-900">
            8강 이후 토너먼트의 개별 경기 킥오프 시간은 대진 확정 후 FIFA 공식 일정에서 발표될 예정입니다.
            한국은 조별리그 3위로 탈락해 이후 토너먼트에는 참가하지 않습니다.
          </p>
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
              본 페이지는 FIFA 공식 일정과 국내 보도를 바탕으로 정리한 안내입니다. 토너먼트 대진과 킥오프
              시간은 경기 결과에 따라 변경·확정될 수 있으므로, 시청 전 FIFA 공식 페이지의 최신 일정을 함께
              확인하세요.
            </p>
            <div className="mt-5">
              <LiveButton label="월드컵 실시간 중계 바로가기" />
            </div>
          </article>
        </div>
      </section>

      <CoupangAds
        keyword="월드컵 응원용품"
        title="월드컵 응원과 시청 준비 아이템"
        hookText="경기 일정 확인 후 집관, 단체 응원, 야식 타임에 함께 준비하기 좋은 월드컵 응원용품과 시청 아이템을 확인해보세요."
      />
    </main>
  );
}
