import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '젠슨 황 방한 의미와 국내 수혜주 리포트 | AI 반도체·피지컬 AI',
  description:
    '2026년 6월 4일 기준 젠슨 황 엔비디아 CEO 방한 의미와 SK하이닉스, 삼성전자, LG전자, 두산로보틱스 등 국내 AI 수혜 가능 종목을 뉴스 기반으로 점검합니다.',
  keywords: [
    '젠슨 황 방한',
    '엔비디아 수혜주',
    'AI 반도체 수혜주',
    '피지컬 AI',
    'HBM 수혜주',
    'SK하이닉스',
    '삼성전자',
    '두산로보틱스',
    'LG전자',
    'NAVER',
  ],
  alternates: {
    canonical: '/jensen-huang-korea-ai-stocks',
  },
  openGraph: {
    title: '젠슨 황 방한 의미와 국내 수혜주 리포트',
    description: 'AI 반도체와 피지컬 AI 관점에서 국내 수혜 가능 종목을 뉴스 기반으로 점검합니다.',
    url: 'https://zucca100.com/jensen-huang-korea-ai-stocks',
    type: 'article',
  },
};

const featuredStocks = [
  { name: 'SK하이닉스', code: '000660', group: '1차 수혜', tone: 'from-orange-500 to-red-500' },
  { name: '삼성전자', code: '005930', group: '1차 수혜', tone: 'from-blue-500 to-indigo-600' },
  { name: 'LG전자', code: '066570', group: '피지컬 AI', tone: 'from-rose-500 to-pink-600' },
  { name: '두산로보틱스', code: '454910', group: '피지컬 AI', tone: 'from-emerald-500 to-teal-600' },
  { name: '현대차', code: '005380', group: '모빌리티', tone: 'from-sky-500 to-cyan-600' },
  { name: 'NAVER', code: '035420', group: '클라우드/AI', tone: 'from-green-500 to-lime-600' },
];

const stockGroups = [
  {
    id: 'primary',
    title: '1차 수혜',
    summary: 'HBM과 첨단 메모리 공급망에 직접 연결되는 종목군입니다.',
    stocks: [
      {
        category: '1차 수혜',
        name: 'SK하이닉스',
        code: '000660',
        confidence: '높음',
        logic: '엔비디아 AI GPU 핵심 부품인 HBM 공급망과 가장 직접적으로 연결됩니다. AI 인프라 투자 확대의 1차 수혜 기대가 큽니다.',
      },
      {
        category: '1차 수혜',
        name: '삼성전자',
        code: '005930',
        confidence: '높음',
        logic: 'HBM 공급 확대 기대와 메모리·파운드리·로봇 사업 노출이 동시에 부각될 수 있습니다.',
      },
    ],
  },
  {
    id: 'physical-ai',
    title: '피지컬 AI·모빌리티·클라우드',
    summary: '로봇, 자율주행, 데이터센터, 디지털트윈 협력 기대가 연결되는 종목군입니다.',
    stocks: [
      {
        category: '피지컬 AI',
        name: 'LG전자',
        code: '066570',
        confidence: '중상',
        logic: 'NVIDIA 로봇 스택 활용, 클로이 로봇, 액추에이터, LG그룹 AI 협력 기대가 연결됩니다.',
      },
      {
        category: '피지컬 AI',
        name: '두산로보틱스',
        code: '454910',
        confidence: '중상',
        logic: 'NVIDIA Cosmos 공식 활용 기업으로 언급됐고 협동로봇·휴머노이드 확장 기대가 있습니다.',
      },
      {
        category: '모빌리티',
        name: '현대차',
        code: '005380',
        confidence: '중상',
        logic: '자율주행, SDV, 보스턴다이내믹스 로봇 사업에서 NVIDIA 협력 기대가 이어질 수 있습니다.',
      },
      {
        category: '클라우드/AI',
        name: 'NAVER',
        code: '035420',
        confidence: '중상',
        logic: '네이버 1784, 클라우드, 디지털트윈, 로봇 운영 플랫폼 협력 기대가 부각될 수 있습니다.',
      },
    ],
  },
  {
    id: 'value-chain',
    title: '후방 밸류체인·테마 확산 후보',
    summary: '직접 협력보다 HBM 장비, 로봇 부품, 게임 AI 테마 확산에 따른 기대가 큰 종목군입니다.',
    stocks: [
      {
        category: '후방 밸류체인',
        name: '한미반도체',
        code: '042700',
        confidence: '중',
        logic: 'HBM 생산 확대 시 장비 수요 기대가 있습니다. 직접 회동보다는 AI 반도체 후방 수혜 성격입니다.',
      },
      {
        category: '후방 밸류체인',
        name: 'LG이노텍',
        code: '011070',
        confidence: '중',
        logic: '로봇 센싱, 기판, 카메라 모듈 등 피지컬 AI 부품 기대가 연결될 수 있습니다.',
      },
      {
        category: '피지컬 AI',
        name: '레인보우로보틱스',
        code: '277810',
        confidence: '중',
        logic: '삼성전자 로봇 사업 확대와 연결된 테마성 수혜 가능성이 있습니다.',
      },
      {
        category: '게임/AI 후보',
        name: '크래프톤',
        code: '259960',
        confidence: '낮음~중',
        logic: '게임 AI·로보틱스 자회사 관련 협력 기대가 있으나 본업 실적 연결은 확인이 필요합니다.',
      },
      {
        category: '게임/AI 후보',
        name: '엔씨소프트',
        code: '036570',
        confidence: '낮음~중',
        logic: '게임업계 미팅 가능성에 따른 단기 테마성은 있으나 직접 수혜 가시성은 낮은 편입니다.',
      },
    ],
  },
];

const sources = [
  {
    label: '연합뉴스 보도',
    href: 'https://en.yna.co.kr/view/AEN20260604004651320',
    desc: '방한 일정과 주요 기업 회동 가능성',
  },
  {
    label: '브릿지경제 보도',
    href: 'https://www.viva100.com/article/20260603500193',
    desc: 'LG전자·현대차·네이버 방문 거론',
  },
  {
    label: 'NVIDIA Cosmos 3 발표',
    href: 'https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Launches-Cosmos-3-the-Open-Frontier-Foundation-Model-for-Physical-AI/default.aspx',
    desc: '피지컬 AI와 활용 기업 언급',
  },
];

const confidenceStyle: Record<string, string> = {
  높음: 'bg-red-50 text-red-700 border-red-200',
  중상: 'bg-orange-50 text-orange-700 border-orange-200',
  중: 'bg-blue-50 text-blue-700 border-blue-200',
  '낮음~중': 'bg-slate-100 text-slate-700 border-slate-200',
};

function stockLinks(code: string) {
  return {
    naver: `https://finance.naver.com/item/main.naver?code=${code}`,
    toss: `https://www.tossinvest.com/stocks/A${code}`,
  };
}

export default function JensenHuangKoreaAiStocksPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-950">
      <main>
        <section className="border-b border-slate-200 bg-white px-4 pb-5 pt-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-3 flex flex-wrap gap-2 text-xs font-black">
              <span className="rounded-full bg-slate-950 px-3 py-1.5 text-white">기준일 2026.06.04</span>
              <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-red-700">투자 권유 아님</span>
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-blue-700">뉴스 기반 수혜 가능성 점검</span>
            </div>

            <h1 className="text-2xl font-black leading-tight tracking-tight sm:text-4xl">
              젠슨 황 방한 수혜주 리포트
            </h1>
            <p className="mt-2 max-w-3xl text-sm font-bold leading-6 text-slate-600 sm:text-base">
              핵심은 HBM 공급망 확인을 넘어 한국형 피지컬 AI 생태계 편입 가능성입니다.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {featuredStocks.map((stock) => (
                <a
                  key={stock.code}
                  href={stockLinks(stock.code).naver}
                  className={`rounded-2xl bg-gradient-to-br ${stock.tone} p-3 text-white shadow-lg transition-transform hover:-translate-y-0.5 active:scale-[0.98]`}
                  aria-label={`${stock.name} 네이버 종목 확인`}
                >
                  <span className="block text-[11px] font-black opacity-80">{stock.group}</span>
                  <strong className="mt-1 block text-base font-black leading-tight">{stock.name}</strong>
                  <span className="mt-1 block text-xs font-bold opacity-90">{stock.code} 확인</span>
                </a>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
              <a href="#primary" className="rounded-xl border border-slate-300 bg-slate-950 px-4 py-3 text-center text-sm font-black text-white">
                1차 수혜 바로 확인
              </a>
              <a href="#physical-ai" className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-center text-sm font-black text-slate-900">
                피지컬 AI 종목 보기
              </a>
              <a href="#value-chain" className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-center text-sm font-black text-slate-900">
                후방 밸류체인 확인
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-black">방문 의미</h2>
              <p className="mt-4 text-sm font-semibold leading-7 text-slate-600">
                이번 방한은 단순한 의전성 방문보다 산업적 의미가 큽니다. HBM, AI 데이터센터, 자율주행,
                로보틱스, 피지컬 AI 논의 가능성이 함께 거론되며 한국 기업을 메모리 공급처뿐 아니라
                로봇·자율주행·클라우드·디지털트윈 파트너로 보는 신호로 해석할 수 있습니다.
              </p>
              <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
                특히 NVIDIA의 Cosmos 3 발표에서 두산로보틱스, LG전자, Samsung 등이 언급된 점은
                이번 테마가 AI 반도체에서 피지컬 AI로 확장되는 근거로 볼 수 있습니다.
              </p>
            </article>

            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
              <h2 className="text-xl font-black text-amber-950">가장 주목할 종목군</h2>
              <div className="mt-4 space-y-4 text-sm font-semibold leading-7 text-amber-950/80">
                <p>
                  <strong className="text-amber-950">1순위는 SK하이닉스·삼성전자입니다.</strong> 엔비디아 AI 가속기
                  판매가 늘수록 HBM 수요가 증가하고 한국 메모리 기업이 그 중심에 있습니다.
                </p>
                <p>
                  <strong className="text-amber-950">2순위는 LG전자·두산로보틱스·현대차·NAVER입니다.</strong>
                  피지컬 AI, 자율주행, 데이터센터, 디지털트윈 협력 기대가 연결됩니다.
                </p>
                <p>
                  <strong className="text-amber-950">3순위는 후방 밸류체인입니다.</strong> HBM 장비, 로봇 부품,
                  센싱, 기판 테마로 시장 관심이 확산될 때 따라붙는 종목군입니다.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="px-4 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-8">
            {stockGroups.map((group) => (
              <section key={group.id} id={group.id} className="scroll-mt-4">
                <div className="mb-3">
                  <h2 className="text-2xl font-black tracking-tight">{group.title}</h2>
                  <p className="mt-1 text-sm font-bold text-slate-500">{group.summary}</p>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {group.stocks.map((stock) => {
                    const links = stockLinks(stock.code);

                    return (
                      <article key={stock.code} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">{stock.category}</p>
                            <h3 className="mt-1 text-xl font-black">
                              {stock.name} <span className="text-base text-slate-400">{stock.code}</span>
                            </h3>
                          </div>
                          <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-black ${confidenceStyle[stock.confidence]}`}>
                            {stock.confidence}
                          </span>
                        </div>

                        <p className="mt-3 min-h-[72px] text-sm font-semibold leading-6 text-slate-600">{stock.logic}</p>

                        <div className="mt-4 grid grid-cols-2 gap-2">
                          <a href={links.naver} className="rounded-xl bg-[#03c75a] px-3 py-3 text-center text-sm font-black text-white">
                            네이버 종목 확인
                          </a>
                          <a href={links.toss} className="rounded-xl bg-[#0050ff] px-3 py-3 text-center text-sm font-black text-white">
                            토스 종목 확인
                          </a>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="px-4 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-2">
            <article className="rounded-2xl border border-red-200 bg-white p-5">
              <h2 className="text-xl font-black text-red-700">리스크 체크포인트</h2>
              <ol className="mt-4 space-y-3 text-sm font-semibold leading-6 text-slate-600">
                <li>1. 단순 회동, MOU, 실제 공급 계약은 다릅니다. 공동 발표와 계약 규모 확인이 필요합니다.</li>
                <li>2. 이미 급등한 종목은 방한 당일 또는 발표 직후 차익실현이 나올 수 있습니다.</li>
                <li>3. HBM은 실적 연결이 비교적 빠를 수 있지만 로봇·피지컬 AI는 매출 반영까지 시간이 걸릴 수 있습니다.</li>
                <li>4. 직접 공급망 종목과 단기 테마 종목은 확신도를 다르게 봐야 합니다.</li>
              </ol>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-950 p-5 text-white">
              <h2 className="text-xl font-black">출처와 면책 고지</h2>
              <div className="mt-4 grid gap-2">
                {sources.map((source) => (
                  <a key={source.href} href={source.href} className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <strong className="block text-sm font-black">{source.label}</strong>
                    <span className="mt-1 block text-xs font-semibold text-slate-300">{source.desc}</span>
                  </a>
                ))}
              </div>
              <p className="mt-4 text-xs font-semibold leading-6 text-slate-300">
                본 페이지는 뉴스 기반 수혜 가능성 점검 자료이며 특정 종목에 대한 매수·매도 권유가 아닙니다.
                실제 투자 판단은 공식 발표, 계약·투자 규모, 사업화 일정, 주가 반영 정도를 함께 확인한 뒤
                투자자 본인의 책임으로 결정해야 합니다.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
