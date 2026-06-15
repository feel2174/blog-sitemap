import type { Metadata } from 'next';

const sedamUrl = 'https://sedam-classaction.co.kr/tving';
const jihyangUrl = 'https://www.jihyanglaw.com/?p=4031';
const lookupUrl = 'https://zucca100.com/tving-privacy/';

const leakItems = [
  '아이디',
  '이름',
  '생년월일',
  '성별',
  '휴대전화번호',
  '이메일',
  '연계정보(CI)',
  '중복가입확인정보(DI)',
  '환불 계좌번호',
  '비밀번호',
  '서비스 이용 정보',
];

const lawFirmCards = [
  {
    name: '법무법인 세담',
    label: '티빙 개인정보 유출 집단소송',
    fee: '착수금 0원, 성공보수 20%',
    summary:
      '티빙 가입 이력 또는 개인정보 유출 통지를 받은 이용자를 대상으로 비대면 접수와 진행 상황 조회를 안내합니다.',
    points: ['착수금 없이 접수', '패소 시 비용 미청구 안내', '신분증 및 피해 자료 중심 접수', '2차 피해 자료 반영 가능'],
    href: sedamUrl,
    button: '세담 소송 안내 보기',
  },
  {
    name: '법무법인 지향',
    label: '티빙 개인정보 유출 피해자 집단소송',
    fee: '소송 참가비 10,000원 안내',
    summary:
      '접근 통제 부실 가능성, 과도한 개인정보 수집, 동의 화면 문제 등을 쟁점으로 손해배상 청구를 추진합니다.',
    points: ['전자계약 방식 참여', 'CI/DI 유출 위험성 강조', '개인정보보호법 위반 쟁점 제기', '사칭 문자 주의 안내'],
    href: jihyangUrl,
    button: '지향 소송 안내 보기',
  },
];

const timeline = [
  {
    date: '2026.05.30',
    title: '침해 정황 발생',
    body: '개인정보가 저장된 데이터베이스 서버에 비인가 접근 및 쿼리 실행 정황이 확인된 것으로 알려졌습니다.',
  },
  {
    date: '2026.05.31',
    title: '사고 인지 및 차단',
    body: '티빙은 침해사고를 인지하고 비인가 접근을 차단한 뒤 노출 자격증명 교체 등 초동 조치를 진행했다고 밝혔습니다.',
  },
  {
    date: '2026.06.02 - 06.03',
    title: '개인정보 유출 공지',
    body: '티빙은 유출 가능 항목을 공지하고 대표 명의 사과문을 발표했습니다.',
  },
  {
    date: '2026.06.03 이후',
    title: '정부 조사 및 소송 모집',
    body: '관계 기관 조사와 함께 피해 이용자를 대상으로 한 집단소송 참여 안내가 시작됐습니다.',
  },
];

const actionSteps = [
  '먼저 본인의 유출 여부와 유출 항목을 조회합니다.',
  '같은 아이디와 비밀번호를 쓰는 다른 서비스가 있다면 즉시 변경합니다.',
  '티빙, CJ ONE, 통신사, 금융기관을 사칭한 문자와 링크를 누르지 않습니다.',
  '스미싱, 보이스피싱, 계정 도용 정황이 있으면 캡처와 통화 기록을 보관합니다.',
  '소송 참여를 검토한다면 각 법무법인의 비용 구조와 위임 범위를 확인합니다.',
];

export const metadata: Metadata = {
  title: '티빙 개인정보 유출 소송 안내 | 세담·지향 집단소송 및 유출 조회',
  description:
    '티빙 개인정보 유출 관련 법무법인 세담, 법무법인 지향 집단소송 안내와 유출 여부 조회, 피해 대응 요령을 정리했습니다.',
  keywords: ['티빙 개인정보 유출', '티빙 소송', '티빙 집단소송', '법무법인 세담 티빙', '법무법인 지향 티빙'],
  alternates: {
    canonical: '/tving-lawsuit',
  },
  openGraph: {
    title: '티빙 개인정보 유출 소송 안내',
    description: '세담·지향 집단소송 참여 안내와 유출 조회, 2차 피해 대응 요령을 한 번에 확인하세요.',
    url: 'https://zucca100.com/tving-lawsuit',
    type: 'article',
  },
};

export default function TvingLawsuitPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="bg-white px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 flex flex-wrap gap-2 text-xs font-black">
            <span className="rounded-full bg-slate-950 px-3 py-1.5 text-white">TVING</span>
            <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-red-700">
              개인정보 유출
            </span>
            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-indigo-700">
              집단소송 안내
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-red-600">Privacy Lawsuit Guide</p>
              <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
                티빙 개인정보 유출 관련
                <br />
                소송 내용 바로 확인하기
              </h1>
              <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-slate-600">
                티빙 개인정보 유출 사고와 관련해 법무법인 세담, 법무법인 지향에서 안내 중인 집단소송
                내용을 비교하고, 본인의 유출 여부 조회와 2차 피해 대응까지 한 화면에서 정리했습니다.
              </p>
            </div>

            <div className="rounded-[1.25rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-xl">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-300">Quick Action</p>
              <p className="mt-2 text-2xl font-black">유출 여부부터 확인하세요</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-300">
                조회 후 유출 항목, 통지 화면, 2차 피해 정황을 저장해두면 상담이나 소송 검토에 도움이 됩니다.
              </p>
              <a
                href={lookupUrl}
                className="mt-4 flex w-full items-center justify-center rounded-xl bg-red-600 px-5 py-4 text-center text-base font-black text-white transition hover:bg-red-700 active:scale-[0.99]"
              >
                티빙 개인정보 유출 조회하기
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 lg:grid-cols-2">
            {lawFirmCards.map((firm) => (
              <article key={firm.name} className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-black text-red-600">{firm.label}</p>
                    <h2 className="mt-1 text-2xl font-black">{firm.name}</h2>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-black text-slate-700">
                    {firm.fee}
                  </span>
                </div>
                <p className="mt-4 text-sm font-semibold leading-6 text-slate-600">{firm.summary}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {firm.points.map((point) => (
                    <li key={point} className="rounded-xl bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700">
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={firm.href}
                  className="mt-5 flex w-full items-center justify-center rounded-xl bg-slate-950 px-5 py-3.5 text-center text-sm font-black text-white transition hover:bg-slate-800 active:scale-[0.99]"
                >
                  {firm.button}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-black">유출 가능 정보</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
              공지와 소송 안내에서 언급된 주요 항목입니다. 실제 유출 항목은 개인별 조회 결과로 확인해야 합니다.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {leakItems.map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-bold">
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-black">사건 흐름</h2>
            <div className="mt-4 grid gap-3">
              {timeline.map((item) => (
                <div key={item.date} className="grid gap-2 rounded-xl bg-slate-50 p-4 sm:grid-cols-[130px_1fr]">
                  <p className="text-sm font-black text-red-600">{item.date}</p>
                  <div>
                    <h3 className="text-base font-black">{item.title}</h3>
                    <p className="mt-1 text-sm font-semibold leading-6 text-slate-600">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[1fr_360px]">
          <article className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-black">피해 최소화 체크리스트</h2>
            <ol className="mt-4 grid gap-3">
              {actionSteps.map((step, index) => (
                <li key={step} className="flex gap-3 rounded-xl bg-slate-50 p-3 text-sm font-semibold leading-6 text-slate-700">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-black text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>

          <aside className="rounded-[1.25rem] border border-amber-200 bg-amber-50 p-5 shadow-sm">
            <h2 className="text-xl font-black text-amber-950">사칭 피해 주의</h2>
            <p className="mt-3 text-sm font-bold leading-6 text-amber-900">
              법무법인, 티빙, CJ ONE, 수사기관을 사칭해 입금이나 본인인증을 요구하는 문자를 조심하세요. 링크를 누르기
              전 공식 안내 페이지 주소인지 확인하고, 수상한 연락은 118 또는 1566-1188로 상담하세요.
            </p>
            <div className="mt-5 grid gap-2">
              <a
                href={sedamUrl}
                className="rounded-xl bg-white px-4 py-3 text-center text-sm font-black text-slate-950 shadow-sm transition hover:bg-slate-100"
              >
                세담 접수 페이지
              </a>
              <a
                href={jihyangUrl}
                className="rounded-xl bg-white px-4 py-3 text-center text-sm font-black text-slate-950 shadow-sm transition hover:bg-slate-100"
              >
                지향 참여 안내
              </a>
              <a
                href={lookupUrl}
                className="rounded-xl bg-red-600 px-4 py-3 text-center text-sm font-black text-white shadow-sm transition hover:bg-red-700"
              >
                유출 조회 바로가기
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
