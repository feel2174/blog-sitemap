import type { Metadata } from 'next';
import CoupangAds from '@/components/CoupangAds';

type Match = {
  time: string;
  group: string;
  teams: string;
  city: string;
  korea?: boolean;
};

type MatchDay = {
  date: string;
  matches: Match[];
};

const groups = [
  { name: 'A조', teams: ['멕시코', '남아공', '대한민국', '체코'], korea: true },
  { name: 'B조', teams: ['캐나다', '보스니아', '카타르', '스위스'] },
  { name: 'C조', teams: ['브라질', '모로코', '아이티', '스코틀랜드'] },
  { name: 'D조', teams: ['미국', '파라과이', '호주', '튀르키예'] },
  { name: 'E조', teams: ['독일', '퀴라소', '코트디부아르', '에콰도르'] },
  { name: 'F조', teams: ['네덜란드', '일본', '스웨덴', '튀니지'] },
  { name: 'G조', teams: ['벨기에', '이집트', '이란', '뉴질랜드'] },
  { name: 'H조', teams: ['스페인', '카보베르데', '사우디아라비아', '우루과이'] },
  { name: 'I조', teams: ['프랑스', '세네갈', '이라크', '노르웨이'] },
  { name: 'J조', teams: ['아르헨티나', '알제리', '오스트리아', '요르단'] },
  { name: 'K조', teams: ['포르투갈', 'DR콩고', '우즈베키스탄', '콜롬비아'] },
  { name: 'L조', teams: ['잉글랜드', '크로아티아', '가나', '파나마'] },
];

const groupStageDays: MatchDay[] = [
  {
    date: '6월 12일 (금)',
    matches: [
      { time: '04:00', group: 'A', teams: '멕시코 vs 남아공 (개막전)', city: '멕시코시티' },
      { time: '11:00', group: 'A', teams: '대한민국 vs 체코', city: '과달라하라', korea: true },
    ],
  },
  {
    date: '6월 13일 (토)',
    matches: [
      { time: '04:00', group: 'B', teams: '캐나다 vs 보스니아', city: '토론토' },
      { time: '10:00', group: 'D', teams: '미국 vs 파라과이', city: '잉글우드' },
    ],
  },
  {
    date: '6월 14일 (일)',
    matches: [
      { time: '04:00', group: 'B', teams: '카타르 vs 스위스', city: '샌타클래라' },
      { time: '07:00', group: 'C', teams: '브라질 vs 모로코', city: '이스트러더퍼드' },
      { time: '10:00', group: 'C', teams: '아이티 vs 스코틀랜드', city: '폭스버러' },
      { time: '13:00', group: 'D', teams: '호주 vs 튀르키예', city: '밴쿠버' },
    ],
  },
  {
    date: '6월 15일 (월)',
    matches: [
      { time: '02:00', group: 'E', teams: '독일 vs 퀴라소', city: '휴스턴' },
      { time: '05:00', group: 'F', teams: '네덜란드 vs 일본', city: '알링턴' },
      { time: '08:00', group: 'E', teams: '코트디부아르 vs 에콰도르', city: '필라델피아' },
      { time: '11:00', group: 'F', teams: '스웨덴 vs 튀니지', city: '몬테레이' },
    ],
  },
  {
    date: '6월 16일 (화)',
    matches: [
      { time: '02:00', group: 'H', teams: '스페인 vs 카보베르데', city: '애틀랜타' },
      { time: '07:00', group: 'G', teams: '벨기에 vs 이집트', city: '시애틀' },
      { time: '07:00', group: 'H', teams: '사우디아라비아 vs 우루과이', city: '마이애미가든스' },
      { time: '13:00', group: 'G', teams: '이란 vs 뉴질랜드', city: '잉글우드' },
    ],
  },
  {
    date: '6월 17일 (수)',
    matches: [
      { time: '04:00', group: 'I', teams: '프랑스 vs 세네갈', city: '이스트러더퍼드' },
      { time: '07:00', group: 'I', teams: '이라크 vs 노르웨이', city: '폭스버러' },
      { time: '10:00', group: 'J', teams: '아르헨티나 vs 알제리', city: '캔자스시티' },
      { time: '13:00', group: 'J', teams: '오스트리아 vs 요르단', city: '샌타클래라' },
    ],
  },
  {
    date: '6월 18일 (목)',
    matches: [
      { time: '02:00', group: 'K', teams: '포르투갈 vs DR콩고', city: '휴스턴' },
      { time: '05:00', group: 'L', teams: '잉글랜드 vs 크로아티아', city: '알링턴' },
      { time: '08:00', group: 'L', teams: '가나 vs 파나마', city: '토론토' },
      { time: '11:00', group: 'K', teams: '우즈베키스탄 vs 콜롬비아', city: '멕시코시티' },
    ],
  },
  {
    date: '6월 19일 (금)',
    matches: [
      { time: '01:00', group: 'A', teams: '체코 vs 남아공', city: '애틀랜타' },
      { time: '04:00', group: 'B', teams: '스위스 vs 보스니아', city: '잉글우드' },
      { time: '07:00', group: 'B', teams: '캐나다 vs 카타르', city: '밴쿠버' },
      { time: '10:00', group: 'A', teams: '멕시코 vs 대한민국', city: '과달라하라', korea: true },
    ],
  },
  {
    date: '6월 20일 (토)',
    matches: [
      { time: '04:00', group: 'D', teams: '미국 vs 호주', city: '시애틀' },
      { time: '07:00', group: 'C', teams: '스코틀랜드 vs 모로코', city: '폭스버러' },
      { time: '10:00', group: 'C', teams: '브라질 vs 아이티', city: '필라델피아' },
      { time: '13:00', group: 'D', teams: '튀르키예 vs 파라과이', city: '샌타클래라' },
    ],
  },
  {
    date: '6월 21일 (일)',
    matches: [
      { time: '02:00', group: 'F', teams: '네덜란드 vs 스웨덴', city: '휴스턴' },
      { time: '05:00', group: 'E', teams: '독일 vs 코트디부아르', city: '토론토' },
      { time: '09:00', group: 'E', teams: '에콰도르 vs 퀴라소', city: '캔자스시티' },
      { time: '13:00', group: 'F', teams: '튀니지 vs 일본', city: '몬테레이' },
    ],
  },
  {
    date: '6월 22일 (월)',
    matches: [
      { time: '01:00', group: 'H', teams: '스페인 vs 사우디아라비아', city: '애틀랜타' },
      { time: '04:00', group: 'G', teams: '벨기에 vs 이란', city: '잉글우드' },
      { time: '07:00', group: 'H', teams: '우루과이 vs 카보베르데', city: '마이애미가든스' },
      { time: '10:00', group: 'G', teams: '뉴질랜드 vs 이집트', city: '밴쿠버' },
    ],
  },
  {
    date: '6월 23일 (화)',
    matches: [
      { time: '02:00', group: 'J', teams: '아르헨티나 vs 오스트리아', city: '알링턴' },
      { time: '06:00', group: 'I', teams: '프랑스 vs 이라크', city: '필라델피아' },
      { time: '09:00', group: 'I', teams: '노르웨이 vs 세네갈', city: '이스트러더퍼드' },
      { time: '12:00', group: 'J', teams: '요르단 vs 알제리', city: '샌타클래라' },
    ],
  },
  {
    date: '6월 24일 (수)',
    matches: [
      { time: '02:00', group: 'K', teams: '포르투갈 vs 우즈베키스탄', city: '휴스턴' },
      { time: '05:00', group: 'L', teams: '잉글랜드 vs 가나', city: '폭스버러' },
      { time: '08:00', group: 'L', teams: '파나마 vs 크로아티아', city: '토론토' },
      { time: '11:00', group: 'K', teams: '콜롬비아 vs DR콩고', city: '과달라하라' },
    ],
  },
  {
    date: '6월 25일 (목)',
    matches: [
      { time: '04:00', group: 'B', teams: '스위스 vs 캐나다', city: '밴쿠버' },
      { time: '04:00', group: 'B', teams: '보스니아 vs 카타르', city: '시애틀' },
      { time: '07:00', group: 'C', teams: '스코틀랜드 vs 브라질', city: '마이애미가든스' },
      { time: '07:00', group: 'C', teams: '모로코 vs 아이티', city: '애틀랜타' },
      { time: '10:00', group: 'A', teams: '체코 vs 멕시코', city: '멕시코시티' },
      { time: '10:00', group: 'A', teams: '남아공 vs 대한민국', city: '몬테레이', korea: true },
    ],
  },
  {
    date: '6월 26일 (금)',
    matches: [
      { time: '05:00', group: 'E', teams: '에콰도르 vs 독일', city: '이스트러더퍼드' },
      { time: '05:00', group: 'E', teams: '퀴라소 vs 코트디부아르', city: '필라델피아' },
      { time: '08:00', group: 'F', teams: '일본 vs 스웨덴', city: '알링턴' },
      { time: '08:00', group: 'F', teams: '튀니지 vs 네덜란드', city: '캔자스시티' },
      { time: '11:00', group: 'D', teams: '튀르키예 vs 미국', city: '잉글우드' },
      { time: '11:00', group: 'D', teams: '파라과이 vs 호주', city: '샌타클래라' },
    ],
  },
  {
    date: '6월 27일 (토)',
    matches: [
      { time: '04:00', group: 'I', teams: '노르웨이 vs 프랑스', city: '폭스버러' },
      { time: '04:00', group: 'I', teams: '세네갈 vs 이라크', city: '토론토' },
      { time: '09:00', group: 'H', teams: '카보베르데 vs 사우디아라비아', city: '휴스턴' },
      { time: '09:00', group: 'H', teams: '우루과이 vs 스페인', city: '과달라하라' },
      { time: '12:00', group: 'G', teams: '이집트 vs 이란', city: '시애틀' },
      { time: '12:00', group: 'G', teams: '뉴질랜드 vs 벨기에', city: '밴쿠버' },
    ],
  },
  {
    date: '6월 28일 (일)',
    matches: [
      { time: '06:00', group: 'L', teams: '파나마 vs 잉글랜드', city: '이스트러더퍼드' },
      { time: '06:00', group: 'L', teams: '크로아티아 vs 가나', city: '필라델피아' },
      { time: '08:30', group: 'K', teams: '콜롬비아 vs 포르투갈', city: '마이애미가든스' },
      { time: '08:30', group: 'K', teams: 'DR콩고 vs 우즈베키스탄', city: '애틀랜타' },
      { time: '11:00', group: 'J', teams: '알제리 vs 오스트리아', city: '캔자스시티' },
      { time: '11:00', group: 'J', teams: '요르단 vs 아르헨티나', city: '알링턴' },
    ],
  },
];

const knockoutRounds = [
  {
    stage: '32강 토너먼트 (16경기)',
    kstDate: '6월 29일 (월) ~ 7월 4일 (토)',
    detail: '각 조 1·2위와 조 3위 상위 8개 팀 진출 · 대진 미정',
    status: '대진 미정',
  },
  {
    stage: '16강 토너먼트 (8경기)',
    kstDate: '7월 5일 (일) ~ 7월 8일 (수)',
    detail: '32강 승리 팀 진출 · 대진 미정',
    status: '대진 미정',
  },
  {
    stage: '8강 토너먼트 (4경기)',
    kstDate: '7월 10일 (금) ~ 7월 12일 (일)',
    detail: '폭스버러 · 잉글우드 · 마이애미가든스 · 캔자스시티 / 대진 미정',
    status: '대진 미정',
  },
  {
    stage: '4강 토너먼트 (2경기)',
    kstDate: '7월 15일 (수) ~ 7월 16일 (목)',
    detail: '알링턴(AT&T 스타디움) · 애틀랜타(메르세데스-벤츠 스타디움) / 대진 미정',
    status: '대진 미정',
  },
  {
    stage: '3·4위전',
    kstDate: '7월 19일 (일) 오전 6:00',
    detail: '마이애미가든스(하드록 스타디움) / 대진 미정',
    status: '대진 미정',
  },
  {
    stage: '결승전',
    kstDate: '7월 20일 (월) 오전 4:00',
    detail: '이스트러더퍼드(메트라이프 스타디움) / 대진 미정',
    status: '대진 미정',
  },
];

const sources = [
  {
    label: 'FIFA 공식 경기 일정',
    href: 'https://www.fifa.com/ko/tournaments/mens/worldcup/canadamexicousa2026/scores-fixtures',
    desc: '2026 월드컵 전체 경기 결과 및 일정 공식 페이지',
  },
  {
    label: 'ESPN 전체 일정',
    href: 'https://www.espn.com/soccer/story/_/id/48939282/2026-fifa-world-cup-fixtures-results-match-schedule-group-stage-knockout-rounds-bracket',
    desc: '조 편성과 조별리그 72경기 전체 일정',
  },
  {
    label: '한국 경기 일정 정리',
    href: 'https://bluesharehub.com/world-cup-2026-korea-schedule/',
    desc: '한국 조별리그 3경기 한국시간 일정 정리',
  },
];

export const metadata: Metadata = {
  title: '2026 월드컵 전체 경기 일정표 (한국시간) - 조별리그 72경기 총정리',
  description:
    '2026 북중미 월드컵 조별리그 72경기 전체 일정을 한국시간 기준 날짜별로 정리했습니다. A조부터 L조까지 조 편성, 한국 경기, 32강부터 결승까지 토너먼트 일정과 실시간 중계 바로가기를 확인하세요.',
  keywords: [
    '2026 월드컵 전체 일정',
    '월드컵 경기 일정표',
    '월드컵 조별리그 일정',
    '월드컵 조 편성',
    '월드컵 한국시간',
  ],
  alternates: {
    canonical: '/worldcup-2026-schedule',
  },
  openGraph: {
    title: '2026 월드컵 전체 경기 일정표 (한국시간)',
    description: '조별리그 72경기부터 결승까지, 2026 월드컵 모든 경기 일정을 한국시간으로 확인하세요.',
    url: 'https://zucca100.com/worldcup-2026-schedule',
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

export default function Worldcup2026SchedulePage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-950">
      <section className="bg-white px-4 pb-7 pt-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-3 flex flex-wrap gap-2 text-xs font-black">
            <span className="rounded-full bg-slate-950 px-3 py-1.5 text-white">한국시간 기준</span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-emerald-700">
              조별리그 72경기
            </span>
            <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-blue-700">총 104경기</span>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_0.95fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-600">FIFA World Cup 26</p>
              <h1 className="mt-2 text-3xl font-black leading-tight sm:text-5xl">
                2026 월드컵 전체 경기 일정표
              </h1>
              <p className="mt-3 max-w-3xl text-base font-semibold leading-7 text-slate-600">
                조별리그 72경기 전체를 한국시간 기준 날짜별로 정리했습니다. 대한민국 경기는 따로 강조했고,
                32강 이후 대진이 확정되지 않은 토너먼트 경기는 미정으로 표기했습니다.
              </p>
            </div>

            <LiveButton label="월드컵 실시간 중계 바로가기" />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a
              href="https://zucca100.com/%ed%95%9c%ea%b5%ad-%ec%9b%94%eb%93%9c%ec%bb%b5-%ec%9d%bc%ec%a0%95-%ec%a4%91%ea%b3%84-%eb%b3%b4%eb%8a%94%eb%b2%95-%ec%8b%9c%ea%b0%84-%eb%ac%b4%eb%a3%8c-%ec%a4%91%ea%b3%84-%eb%b0%94%eb%a1%9c%ea%b0%80/"
              className="group flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white shadow-lg transition-transform hover:-translate-y-0.5 active:scale-[0.99]"
            >
              <span className="min-w-0">
                <span className="block text-xs font-black uppercase tracking-[0.16em] opacity-80">Korea Focus</span>
                <strong className="mt-1 block text-base font-black leading-snug">한국 경기 중심 일정 보러가기</strong>
              </span>
              <svg className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <strong className="block text-sm font-black text-slate-800">시차 안내</strong>
              <p className="mt-1 text-sm font-semibold leading-6 text-slate-600">
                미국·캐나다·멕시코 현지 저녁 경기가 한국시간 새벽~오후에 열립니다. 한국 경기는 모두 오전
                10~11시입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-black">조 편성 (A조 ~ L조)</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {groups.map((group) => (
              <article
                key={group.name}
                className={`rounded-2xl border p-4 shadow-sm ${
                  group.korea ? 'border-emerald-300 bg-emerald-50' : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-black">{group.name}</h3>
                  {group.korea && (
                    <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-black text-white">
                      대한민국
                    </span>
                  )}
                </div>
                <ul className="mt-2 space-y-1">
                  {group.teams.map((team) => (
                    <li
                      key={team}
                      className={`text-sm font-bold ${
                        team === '대한민국' ? 'text-emerald-700' : 'text-slate-600'
                      }`}
                    >
                      {team}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-black">조별리그 전체 일정 (한국시간)</h2>
          <p className="mt-2 text-sm font-semibold text-slate-600">
            한국시간 6월 12일부터 28일까지 매일 열리는 72경기 전체 일정입니다. 초록색으로 표시된 경기가
            대한민국 경기입니다.
          </p>

          <div className="mt-4 space-y-4">
            {groupStageDays.map((day) => (
              <article key={day.date} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-base font-black">{day.date}</h3>
                <div className="mt-3 grid gap-2">
                  {day.matches.map((match) => (
                    <div
                      key={`${day.date}-${match.teams}`}
                      className={`flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl px-3 py-2.5 ${
                        match.korea ? 'bg-emerald-50 ring-1 ring-emerald-300' : 'bg-slate-50'
                      }`}
                    >
                      <span className="w-12 shrink-0 text-sm font-black text-blue-700">{match.time}</span>
                      <span className="shrink-0 rounded-full bg-slate-950 px-2 py-0.5 text-[10px] font-black text-white">
                        {match.group}조
                      </span>
                      <span
                        className={`min-w-0 flex-1 text-sm font-bold ${
                          match.korea ? 'text-emerald-800' : 'text-slate-700'
                        }`}
                      >
                        {match.teams}
                      </span>
                      <span className="shrink-0 text-xs font-semibold text-slate-400">{match.city}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-black">토너먼트 일정 (32강 ~ 결승)</h2>
          <p className="mt-2 text-sm font-semibold text-slate-600">
            토너먼트 대진은 조별리그 결과에 따라 순차 확정됩니다. 확정 전 경기는 일정만 기재하고 대진은
            미정으로 표기했습니다.
          </p>

          <div className="mt-4 space-y-3">
            {knockoutRounds.map((round) => (
              <article
                key={round.stage}
                className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[200px_1fr_auto] sm:items-center"
              >
                <div>
                  <h3 className="text-base font-black">{round.stage}</h3>
                  <span className="mt-1.5 inline-block rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-black text-amber-800">
                    {round.status}
                  </span>
                </div>
                <div className="text-sm font-semibold leading-6 text-slate-600">
                  <p>
                    <strong className="font-black text-slate-800">한국시간</strong> {round.kstDate}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">{round.detail}</p>
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
            32강 이후 개별 경기의 킥오프 시간은 대진 확정 후 FIFA 공식 일정에서 발표될 예정입니다. 방송
            편성과 현지 사정에 따라 일정이 변경될 수 있으니 시청 전 최신 일정을 확인하세요.
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
              본 페이지는 FIFA 공식 일정과 국내외 보도를 바탕으로 한국시간 기준으로 변환해 정리한
              안내입니다. 토너먼트 대진과 킥오프 시간은 경기 결과에 따라 변경·확정될 수 있으므로, 시청 전
              FIFA 공식 페이지의 최신 일정을 함께 확인하세요.
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
        hookText="조별리그 일정과 중계 시간을 확인했다면, 집관과 응원에 필요한 간식, 응원용품, 시청 아이템도 함께 준비해보세요."
      />
    </main>
  );
}
