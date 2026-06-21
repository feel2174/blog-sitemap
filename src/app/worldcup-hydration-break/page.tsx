import type { Metadata } from 'next';

type Term = {
  term: string;
  korean: string;
  definition: string;
  note?: string;
  tone: 'sky' | 'orange' | 'emerald' | 'violet';
};

const terms: Term[] = [
  { term: 'Hydration break', korean: '하이드레이션 브레이크 · 수분 보충 휴식', definition: '선수들이 물이나 전해질 음료를 마시며 수분을 보충하도록 경기 중 마련하는 짧은 공식 휴식입니다.', tone: 'sky' },
  { term: 'Cooling break', korean: '쿨링 브레이크 · 냉각 휴식', definition: '수분 보충에 더해 체온을 낮추는 데 초점을 둔 휴식입니다. 그늘, 얼음수건, 냉각 장비 등을 함께 쓸 수 있습니다.', note: '방송과 기사에서는 hydration break와 섞어 쓰이기도 합니다.', tone: 'orange' },
  { term: 'Water break', korean: '워터 브레이크', definition: '물을 마시는 행위에 초점을 둔 일상적 표현입니다. 대회 공식 문서에서는 hydration 또는 cooling break라는 표현이 더 자주 쓰일 수 있습니다.', tone: 'emerald' },
  { term: 'Heat break', korean: '폭염 휴식', definition: '고온·고습 등 열환경 때문에 주어지는 휴식을 뜻하는 넓은 표현입니다. 정식 규정명이라기보다 해설·보도에서 쓰는 경우가 많습니다.', tone: 'violet' },
  { term: 'Drinks break', korean: '음료 휴식', definition: '영국식 축구 표현으로, 물·전해질 음료를 마시기 위한 짧은 중단을 가리킵니다.', tone: 'sky' },
  { term: 'Heat protocol', korean: '폭염 대응 프로토콜', definition: '기온·습도 확인, 휴식 시행, 의료진 대응, 관중 안내까지 포함하는 더위 안전 운영 절차를 말합니다.', tone: 'orange' },
  { term: 'WBGT', korean: '습구흑구온도', definition: '기온만이 아니라 습도, 햇볕, 복사열, 바람을 함께 반영해 열 스트레스를 판단하는 지표입니다.', note: '체감온도와 같은 말은 아닙니다.', tone: 'emerald' },
  { term: 'Heat stress', korean: '열 스트레스', definition: '더운 환경에서 운동할 때 몸이 받는 열 부담입니다. 탈수와 체온 상승이 겹치면 경기력과 안전에 영향을 줄 수 있습니다.', tone: 'violet' },
  { term: 'Medical time-out', korean: '의료 중단', definition: '부상이나 응급 상황에 대응하기 위한 중단입니다. 예방적 수분 보충을 위한 hydration break와 목적이 다릅니다.', tone: 'sky' },
  { term: 'Added time', korean: '추가시간 · 어딧 타임', definition: '휴식·부상·교체 등으로 멈춘 시간을 반영해 전·후반 끝에 더하는 시간입니다. 하이드레이션 브레이크가 있으면 추가시간에 반영될 수 있습니다.', tone: 'orange' },
  { term: 'Match referee', korean: '주심', definition: '경기장 상황과 대회 운영 지침을 바탕으로 경기 중단·재개를 지휘하는 심판입니다.', tone: 'emerald' },
  { term: 'Fourth official', korean: '대기심', definition: '교체, 추가시간 표시, 벤치 운영을 지원하는 심판입니다. 휴식 운영에서도 현장 안내를 도울 수 있습니다.', tone: 'violet' },
];

const checklist = [
  ['수분', '물과 전해질 음료를 소량씩 보충'],
  ['냉각', '그늘·얼음수건·냉각 장비로 체온 관리'],
  ['의료', '어지럼증·경련·의식 저하 등 이상 징후 확인'],
  ['재개', '심판 신호 후 같은 경기 흐름으로 재개'],
];

export const metadata: Metadata = {
  title: '2026 북중미 월드컵 하이드레이션 브레이크 뜻 · 관련 용어 총정리',
  description: '2026 북중미 월드컵의 하이드레이션 브레이크와 쿨링 브레이크, WBGT, 열 스트레스, 추가시간 등 관련 키워드의 뜻과 차이를 쉽게 정리했습니다.',
  keywords: ['하이드레이션 브레이크', '월드컵 하이드레이션 브레이크', '쿨링 브레이크', '워터 브레이크', 'WBGT', '북중미 월드컵 폭염'],
  alternates: { canonical: '/worldcup-hydration-break' },
  openGraph: {
    title: '하이드레이션 브레이크, 정확히 뭐가 다를까?',
    description: '2026 북중미 월드컵 폭염 대응 용어를 한 페이지에 정리했습니다.',
    url: 'https://zucca100.com/worldcup-hydration-break',
    type: 'article',
  },
};

const toneClasses = {
  sky: 'border-sky-200 bg-sky-50 text-sky-900',
  orange: 'border-orange-200 bg-orange-50 text-orange-950',
  emerald: 'border-emerald-200 bg-emerald-50 text-emerald-950',
  violet: 'border-violet-200 bg-violet-50 text-violet-950',
};

export default function WorldcupHydrationBreakPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fc] text-slate-950">
      <section className="overflow-hidden bg-slate-950 px-4 pb-12 pt-6 text-white sm:px-6 sm:pt-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2 text-xs font-black">
            <span className="rounded-full bg-white px-3 py-1.5 text-slate-950">FIFA World Cup 26</span>
            <span className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1.5 text-cyan-100">Heat &amp; Hydration Guide</span>
          </div>
          <div className="mt-7 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">World Cup terminology</p>
              <h1 className="mt-3 max-w-4xl text-4xl font-black leading-[1.12] sm:text-6xl">
                하이드레이션 브레이크,<br />
                <span className="text-cyan-300">90분 안의 짧은 안전장치</span>
              </h1>
              <p className="mt-5 max-w-3xl text-base font-semibold leading-7 text-slate-300 sm:text-lg">
                2026 북중미 월드컵의 더위 대응을 이해할 때 꼭 필요한 용어를 모았습니다. 비슷해 보이는 ‘워터 브레이크’와 ‘쿨링 브레이크’의 차이부터, 추가시간에 미치는 영향까지 한 번에 확인하세요.
              </p>
            </div>
            <aside className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">핵심 한 줄</p>
              <p className="mt-2 text-xl font-black leading-snug">선수의 수분 보충과 열질환 예방을 위한 공식 경기 중단입니다.</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-300">실제 시행 여부·시점·길이는 경기 당일의 기상 조건과 대회 운영 지침, 심판 판단에 따라 달라질 수 있습니다.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-3xl bg-cyan-500 p-6 text-slate-950 shadow-lg shadow-cyan-500/20">
              <p className="text-xs font-black uppercase tracking-[0.16em]">Why</p>
              <h2 className="mt-2 text-2xl font-black">왜 필요한가요?</h2>
              <p className="mt-3 text-sm font-bold leading-6">고온·고습 환경에서 탈수와 체온 상승의 위험을 낮추기 위해서입니다.</p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">What</p>
              <h2 className="mt-2 text-2xl font-black">무엇을 하나요?</h2>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">물을 마시고, 필요한 경우 그늘·얼음수건 등으로 몸을 식힌 뒤 경기를 재개합니다.</p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Who decides</p>
              <h2 className="mt-2 text-2xl font-black">누가 결정하나요?</h2>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">대회 지침과 현장 기상·의료 정보를 바탕으로 심판진과 경기 운영진이 적용합니다.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-700">Glossary</p>
              <h2 className="mt-1 text-3xl font-black">관련 키워드 12개</h2>
            </div>
            <p className="text-sm font-semibold text-slate-500">영문 표현 · 한국어 뜻 · 헷갈리는 지점</p>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {terms.map((item, index) => (
              <article key={item.term} className={`rounded-2xl border p-5 ${toneClasses[item.tone]}`}>
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-black text-white">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] opacity-65">{item.term}</p>
                    <h3 className="mt-1 text-lg font-black">{item.korean}</h3>
                    <p className="mt-2 text-sm font-semibold leading-6 opacity-85">{item.definition}</p>
                    {item.note && <p className="mt-2 rounded-xl bg-white/60 px-3 py-2 text-xs font-bold leading-5">TIP · {item.note}</p>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-700">How it works</p>
            <h2 className="mt-1 text-3xl font-black">휴식 시간엔 이렇게 움직입니다</h2>
            <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">경기 흐름을 위한 전술 타임아웃이 아니라, 열 부담을 낮추는 안전 절차입니다. 그래서 팀 지시보다 선수 컨디션 확인이 우선입니다.</p>
            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-bold leading-6 text-amber-950">
              알아두기 · 하이드레이션 브레이크의 횟수와 정확한 분 단위, 적용 기준은 모든 경기에 고정된 값으로 단정할 수 없습니다. 각 경기의 공식 운영 안내를 확인하는 것이 가장 정확합니다.
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {checklist.map(([title, copy], index) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <span className="text-sm font-black text-cyan-700">0{index + 1}</span>
                <h3 className="mt-2 text-xl font-black">{title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-300">Quick distinction</p>
          <h2 className="mt-1 text-3xl font-black">비슷한 말, 이렇게 구분하세요</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-5"><strong className="text-lg">Hydration</strong><p className="mt-2 text-sm font-semibold leading-6 text-slate-300">‘마신다’에 중심 — 수분 보충</p></div>
            <div className="rounded-2xl bg-white/10 p-5"><strong className="text-lg">Cooling</strong><p className="mt-2 text-sm font-semibold leading-6 text-slate-300">‘식힌다’에 중심 — 체온 관리</p></div>
            <div className="rounded-2xl bg-white/10 p-5"><strong className="text-lg">Added time</strong><p className="mt-2 text-sm font-semibold leading-6 text-slate-300">‘보상한다’에 중심 — 중단 시간 반영</p></div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">확인할 공식 정보</h2>
          <p className="mt-2 text-sm font-semibold leading-7 text-slate-600">대회별 세부 운영은 변경될 수 있습니다. 경기 직전에는 FIFA 대회 페이지와 해당 경기의 공식 공지를 함께 확인하세요.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a className="rounded-xl bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-slate-700" href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026">FIFA World Cup 26 공식 페이지</a>
            <a className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-black text-slate-800 transition hover:bg-slate-50" href="https://www.theifab.com/laws/latest/the-referee/">IFAB 경기규칙 · 심판 권한</a>
          </div>
        </div>
      </section>
    </main>
  );
}
