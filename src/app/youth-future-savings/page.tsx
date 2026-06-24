import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
  title: '청년미래적금 신청 조건 총정리 | 최대 19% 체감 금리 효과와 5부제 일정',
  description:
    '청년미래적금 신청기간, 가입 조건, 소득 기준, 정부기여금 6%·12%, 5부제 일정, 청년도약계좌 갈아타기 순서를 한 번에 정리했습니다.',
  keywords: [
    '청년미래적금',
    '청년미래적금 신청',
    '청년미래적금 조건',
    '청년미래적금 19%',
    '청년도약계좌 갈아타기',
    '청년 적금',
  ],
  alternates: {
    canonical: '/youth-future-savings',
  },
  openGraph: {
    title: '청년미래적금 신청 조건 총정리',
    description: '월 최대 50만원, 3년 만기, 정부기여금 6%·12%와 비과세 혜택까지 핵심만 확인하세요.',
    url: 'https://zucca100.com/youth-future-savings',
    type: 'article',
  },
};

const officialUrl = 'https://www.kinfa.or.kr/financialProduct/youthFutureSavings.do';
const fscUrl = 'https://www.fsc.go.kr/no010101/87158';

const schedule = [
  ['6월 22일(월)', '출생연도 끝자리 1, 6'],
  ['6월 23일(화)', '출생연도 끝자리 2, 7'],
  ['6월 24일(수)', '출생연도 끝자리 3, 8'],
  ['6월 25일(목)', '출생연도 끝자리 4, 9'],
  ['6월 26일(금)', '출생연도 끝자리 5, 0'],
  ['6월 29일(월)~7월 3일(금)', '끝자리 제한 없이 신청'],
];

const checks = [
  { label: '나이', value: '만 19세~34세, 병역 이행기간 최대 6년 차감' },
  { label: '납입한도', value: '월 최대 50만원, 연간 600만원' },
  { label: '가입기간', value: '3년 만기 자유적립식 적금' },
  { label: '지원', value: '정부기여금 6% 또는 12%, 이자소득 비과세' },
];

function CTAButton({ children, href = officialUrl }: { children: React.ReactNode; href?: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#F97316] px-5 py-4 text-center text-base font-black text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:bg-[#EA580C] sm:w-auto sm:px-7"
    >
      {children}
      <span className="transition group-hover:translate-x-1" aria-hidden="true">
        →
      </span>
    </Link>
  );
}

export default function YouthFutureSavingsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '청년미래적금 신청 조건 총정리',
    description: '청년미래적금 신청기간, 가입 조건, 정부기여금, 5부제 일정, 신청 팁 정리',
    datePublished: '2026-06-24',
    dateModified: '2026-06-24',
    author: {
      '@type': 'Organization',
      name: 'zucca100',
    },
    mainEntityOfPage: 'https://zucca100.com/youth-future-savings',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main
        className="min-h-screen bg-[#F8FAFC] text-slate-900"
        style={{
          fontFamily:
            '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        }}
      >
        <section className="relative overflow-hidden bg-[#0F172A] px-4 pb-12 pt-16 text-white sm:px-6 sm:pb-16">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url("/gold-bg.png")' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(6,78,59,0.84)_58%,rgba(251,146,60,0.46))]" />
          <div className="relative mx-auto max-w-4xl">
            <p className="mb-4 inline-flex rounded-full bg-emerald-400/15 px-4 py-2 text-sm font-extrabold text-emerald-100 ring-1 ring-emerald-300/30">
              2026년 6월 24일 기준 신청 진행 중
            </p>
            <h1 className="break-keep text-4xl font-black leading-tight tracking-normal sm:text-6xl">
              청년미래적금 조건,
              <span className="block text-[#FDBA74]">체감 금리 19% 포인트만 보세요</span>
            </h1>
            <p className="mt-5 max-w-2xl break-keep text-lg font-semibold leading-8 text-slate-100">
              월 최대 50만원을 3년 동안 넣으면 정부기여금과 비과세 혜택까지 붙는 정책형 적금입니다.
              신청기간이 짧고 첫 주는 5부제로 운영되니, 내 신청 가능일을 먼저 확인하는 게 핵심입니다.
            </p>

            <div className="mt-8 grid gap-3 sm:flex sm:items-center">
              <CTAButton>청년미래적금 19% 효과, 내 신청일 바로 확인</CTAButton>
              <Link
                href={fscUrl}
                className="inline-flex w-full items-center justify-center rounded-lg border border-white/30 bg-white/10 px-5 py-4 text-base font-black text-white backdrop-blur transition hover:bg-white/20 sm:w-auto"
              >
                금융위 발표자료 보기
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
          <div className="grid gap-3 sm:grid-cols-4">
            {checks.map((item) => (
              <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-black text-emerald-700">{item.label}</p>
                <p className="mt-2 break-keep text-sm font-bold leading-6 text-slate-700">{item.value}</p>
              </div>
            ))}
          </div>

          <article className="mt-10 space-y-10 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <section>
              <h2 className="text-2xl font-black tracking-normal">청년도약계좌보다 짧은 3년 만기</h2>
              <p className="mt-4 break-keep text-base font-medium leading-8 text-slate-700">
                청년미래적금은 기존 장기 정책상품이 부담스러웠던 청년을 위해 3년 만기로 설계된 자유적립식
                적금입니다. 매월 최대 50만원까지 납입할 수 있고, 일반형은 납입액의 6%, 우대형은 12%의
                정부기여금이 붙습니다. 여기에 이자소득 비과세가 더해져 우대형 기준 체감 효과가 일반 단리
                적금의 약 18.2~19.4% 수준으로 안내되고 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black tracking-normal">1991년생도 먼저 확인해야 하는 나이 조건</h2>
              <p className="mt-4 break-keep text-base font-medium leading-8 text-slate-700">
                기본 대상은 만 19세부터 34세까지입니다. 최초 가입기간에는 1991년 1월 1일생부터 2007년
                8월 7일생까지 신청할 수 있고, 병역 이행자는 복무기간을 최대 6년까지 연령 계산에서 뺄 수
                있습니다. 소득은 개인소득과 가구 중위소득을 함께 보며, 직전 3개년도 중 금융소득 종합과세
                대상자는 가입이 제한될 수 있습니다.
              </p>
            </section>

            <section className="overflow-hidden rounded-lg bg-[#ECFDF5] ring-1 ring-emerald-100">
              <div className="grid gap-5 p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-6">
                <div>
                  <p className="text-sm font-black text-emerald-700">신청 전 가장 많이 보는 계산 포인트</p>
                  <h2 className="mt-1 break-keep text-2xl font-black tracking-normal text-slate-950">
                    월 50만원 넣으면 만기 얼마인지 먼저 계산하세요
                  </h2>
                  <p className="mt-2 break-keep text-sm font-semibold leading-6 text-slate-700">
                    납입액, 정부기여금, 비과세 혜택을 같이 봐야 청년미래적금의 실제 체감 효과가 보입니다.
                  </p>
                </div>
                <CTAButton>청년미래적금 조건조회, 신청 전 30초 체크</CTAButton>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black tracking-normal">신청기간과 5부제 일정</h2>
              <p className="mt-4 break-keep text-base font-medium leading-8 text-slate-700">
                가입신청은 2026년 6월 22일부터 7월 3일까지 2주간 진행됩니다. 첫 5영업일은 출생연도
                끝자리 기준 5부제이고, 6월 29일부터 7월 3일까지는 출생연도와 관계없이 신청할 수 있습니다.
                이후 7월 6일부터 7월 24일까지 심사가 진행되고, 통과자는 7월 27일부터 8월 7일까지 계좌를
                개설합니다.
              </p>

              <div className="mt-5 overflow-hidden rounded-lg border border-slate-200">
                <table className="w-full border-collapse text-left text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-4 py-3">신청일</th>
                      <th className="px-4 py-3">신청 가능 대상</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map(([date, target], index) => (
                      <tr key={date} className={index % 2 ? 'bg-slate-50' : 'bg-white'}>
                        <td className="border-t border-slate-200 px-4 py-3 font-black">{date}</td>
                        <td className="border-t border-slate-200 px-4 py-3 font-semibold text-slate-700">{target}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black tracking-normal">청년도약계좌 갈아타기 순서</h2>
              <p className="mt-4 break-keep text-base font-medium leading-8 text-slate-700">
                청년도약계좌와 청년미래적금은 중복 가입이 불가하지만, 최초 가입기간에는 갈아타기가 허용됩니다.
                순서는 청년미래적금 가입신청, 가입대상 통보 확인, 청년미래적금 계좌개설, 청년도약계좌 특별중도해지,
                청년미래적금 납입 개시입니다. 출시 전에 청년도약계좌를 먼저 해지하면 갈아타기 신청이 어려울 수
                있으니 순서를 지키는 것이 중요합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black tracking-normal">신청 꿀팁 4가지</h2>
              <ul className="mt-4 grid gap-3 text-base font-semibold leading-7 text-slate-700">
                <li className="rounded-lg bg-slate-50 p-4">취급기관 앱을 최신 버전으로 업데이트하고 본인인증 수단을 미리 준비하세요.</li>
                <li className="rounded-lg bg-slate-50 p-4">첫 주 5부제 날짜를 놓쳤다면 6월 29일~7월 3일 전체 신청기간을 활용하세요.</li>
                <li className="rounded-lg bg-slate-50 p-4">우대금리는 은행별 급여이체, 카드실적, 교육이수 조건이 다르므로 신청 전 비교가 필요합니다.</li>
                <li className="rounded-lg bg-slate-50 p-4">선착순 신청이 아니므로, 접속이 몰리면 무리하지 말고 가능 시간 안에 다시 시도하세요.</li>
              </ul>
            </section>
          </article>

          <section className="mt-10 rounded-lg bg-[#111827] p-6 text-white shadow-xl sm:p-8">
            <p className="text-sm font-black text-[#FDBA74]">신청기간이 짧은 정책형 적금</p>
            <h2 className="mt-2 break-keep text-3xl font-black tracking-normal">
              청년미래적금 신청 마감 전, 내 조건부터 바로 확인
            </h2>
            <p className="mt-3 break-keep text-base font-semibold leading-7 text-slate-200">
              공식 상품 안내에서 가입대상과 취급기관을 확인한 뒤, 본인이 쓰는 은행 앱에서 비대면 신청을 진행하면 됩니다.
            </p>
            <div className="mt-6">
              <CTAButton>청년미래적금 신청 바로가기</CTAButton>
            </div>
          </section>

          <section className="mt-10">
            <CoupangAds
              keyword="청년 재테크"
              title="청년 자산관리 필수템 추천"
              hookText="적금과 함께 지출 관리까지 챙기고 싶다면, 실속 있는 재테크 도구를 같이 확인해보세요."
            />
          </section>

          <p className="mt-8 break-keep rounded-lg bg-slate-100 p-4 text-sm font-medium leading-6 text-slate-600">
            이 글은 금융위원회와 서민금융진흥원 공식 안내를 기준으로 정리한 참고 정보입니다. 실제 가입 가능 여부,
            금리, 우대조건은 신청 시점의 취급기관 앱과 공식 공시를 반드시 확인하세요.
          </p>
        </section>
      </main>
    </>
  );
}
