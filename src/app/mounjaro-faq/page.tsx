import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '마운자로 FAQ | 효과, 사용법, 부작용과 진료 전 체크리스트',
  description:
    '마운자로(성분명 티르제파타이드)에 대해 자주 묻는 질문을 정리했습니다. 작용 원리, 주사 일정, 흔한 부작용, 주의가 필요한 경우와 진료 전 준비사항을 확인하세요.',
  keywords: ['마운자로', '마운자로 FAQ', '티르제파타이드', '마운자로 부작용', '마운자로 병원'],
  openGraph: {
    title: '마운자로 FAQ | 진료 전 꼭 확인할 내용',
    description: '마운자로의 사용 전 알아둘 점과 병원 상담 체크리스트',
  },
};

const faqs = [
  {
    question: '마운자로는 어떤 약인가요?',
    answer:
      '마운자로는 티르제파타이드(tirzepatide)를 성분으로 하는 주 1회 피하주사제입니다. GLP-1과 GIP 수용체에 작용해 식후 혈당 조절과 식욕·포만감 조절에 관여합니다. 개인의 질환, 허가 적응증, 병력에 따라 처방 여부가 달라지므로 진료를 통해 결정해야 합니다.',
  },
  {
    question: '위고비와 마운자로는 무엇이 다른가요?',
    answer:
      '두 약 모두 인크레틴 계열 주사제이지만 성분과 작용 방식이 다릅니다. 위고비의 성분은 세마글루타이드(GLP-1 수용체 작용제)이고, 마운자로의 성분은 티르제파타이드(GLP-1·GIP 이중 수용체 작용제)입니다. 어느 약이 더 적합한지는 체중 목표만이 아니라 당뇨 여부, 복용 약, 부작용 경험, 비용 및 공급 상황을 함께 고려합니다.',
  },
  {
    question: '어떻게, 얼마나 자주 맞나요?',
    answer:
      '일반적으로 일주일에 한 번, 복부·허벅지·상완 부위에 피하주사합니다. 같은 요일에 맞는 것이 편하지만, 처방받은 제품 설명서와 의료진의 지시가 우선입니다. 위장관 부작용을 줄이기 위해 보통 낮은 용량에서 시작해 일정 간격으로 조절하며, 임의로 용량을 올리거나 건너뛰지 않는 것이 중요합니다.',
  },
  {
    question: '주사를 빼먹으면 어떻게 하나요?',
    answer:
      '놓친 주사는 경과 시간과 다음 예정일에 따라 대응이 달라질 수 있습니다. 제품 설명서의 누락 용량 안내를 확인하고, 판단이 어렵다면 처방 의료기관이나 약사에게 문의하세요. 한 번에 두 번 투여하거나, 보충하려고 용량을 늘리면 안 됩니다.',
  },
  {
    question: '흔한 부작용은 무엇인가요?',
    answer:
      '메스꺼움, 설사, 구토, 변비, 소화불량, 복통, 식욕 감소 같은 위장관 증상이 비교적 흔합니다. 대개 치료 시작 또는 증량 시기에 두드러질 수 있습니다. 소량씩 천천히 먹고 기름진 음식·과음을 피하며 수분을 나누어 섭취하면 도움이 될 수 있지만, 증상이 계속되거나 일상생활이 어렵다면 의료진과 상의해야 합니다.',
  },
  {
    question: '바로 진료가 필요한 경고 신호가 있나요?',
    answer:
      '지속적이고 심한 복통(특히 등으로 퍼지는 통증), 반복 구토와 탈수, 심한 알레르기 증상(호흡 곤란·얼굴 또는 목 부종), 저혈당 의심 증상(식은땀·떨림·혼란) 등은 지체하지 말고 의료 도움을 받으세요. 인슐린이나 설폰요소제와 함께 사용하는 경우 저혈당 위험이 더 높아질 수 있습니다.',
  },
  {
    question: '누가 특히 신중해야 하나요?',
    answer:
      '본인 또는 가족의 수질성 갑상선암(MTC) 병력, 다발성 내분비 종양증 2형(MEN 2), 심한 위장관 질환·위 배출 지연, 췌장염 또는 담낭질환 병력, 당뇨망막병증, 신장 기능 저하가 있다면 처방 전 반드시 알리세요. 임신 중이거나 임신을 계획 중인 경우, 수유 중인 경우도 의료진과 별도 상담이 필요합니다.',
  },
  {
    question: '다른 약과 같이 먹어도 되나요?',
    answer:
      '마운자로는 위 배출을 늦춰 일부 경구약의 흡수 시점에 영향을 줄 수 있습니다. 복용 중인 당뇨약, 혈압약, 피임약을 포함해 처방약·일반약·건강기능식품을 모두 의료진에게 알려주세요. 특히 경구 피임약은 치료 시작·용량 변경 시 추가 피임 방법이 필요한지 상담하는 편이 안전합니다.',
  },
  {
    question: '식사와 운동을 하지 않아도 되나요?',
    answer:
      '아닙니다. 약물은 식사 조절, 신체활동, 수면과 함께 장기적인 건강 관리를 돕는 수단입니다. 무리한 절식은 영양 부족과 근손실 위험을 높일 수 있으므로 단백질·수분 섭취와 본인에게 맞는 근력·유산소 운동 계획을 진료 또는 영양 상담과 함께 세우는 것이 좋습니다.',
  },
  {
    question: '진료 전에 무엇을 준비하면 좋을까요?',
    answer:
      '최근 체중 변화, 기존 질환과 수술력, 복용 약 목록, 가족력, 임신 계획, 이전에 겪은 위장관 증상을 메모해 가세요. 목표 체중뿐 아니라 혈당·혈압·지질·수면·통증처럼 함께 개선하고 싶은 건강 목표를 정리하면 상담에 도움이 됩니다.',
  },
];

export default function MounjaroFaqPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="border-b border-emerald-100 bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-900 px-5 py-12 text-white sm:py-16">
        <div className="mx-auto max-w-3xl">
          <a
            href="https://www.modoodoc.com/"
            className="group mb-10 flex items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-300 text-xl">⌖</span>
              <span>
                <span className="block text-xs font-bold tracking-widest text-emerald-200">NEARBY CLINIC SEARCH</span>
                <span className="block text-base font-bold sm:text-lg">우리동네 위고비/마운자로 병원검색</span>
              </span>
            </span>
            <span className="text-2xl transition-transform group-hover:translate-x-1">→</span>
          </a>

          <p className="mb-3 text-sm font-semibold tracking-widest text-emerald-200">MOUNJARO GUIDE</p>
          <h1 className="text-3xl font-black leading-tight sm:text-5xl">마운자로 FAQ</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-emerald-50 sm:text-lg">
            처방 전 자주 묻는 질문을 한눈에 정리했습니다. 이 페이지는 건강 정보이며, 개인별 처방과 용량 결정은 의료진의 진료가 필요합니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
        <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
          <p className="font-bold">먼저 확인하세요</p>
          <p className="mt-1">마운자로는 전문의약품입니다. 온라인 후기나 타인의 용량을 기준으로 시작·증량·중단하지 말고, 반드시 처방 의료진의 안내를 따르세요.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white shadow-sm open:border-emerald-200 open:ring-2 open:ring-emerald-50">
              <summary className="flex cursor-pointer list-none items-center gap-4 p-5 text-left font-bold leading-6 marker:content-none">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-800">{index + 1}</span>
                <span className="flex-1">{faq.question}</span>
                <span className="text-xl text-emerald-700 transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="border-t border-slate-100 px-5 pb-5 pt-4 pl-16 text-sm leading-7 text-slate-600 sm:text-base">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <section className="mt-12 rounded-2xl bg-slate-900 p-6 text-slate-100 sm:p-8">
          <h2 className="text-xl font-bold">참고한 의약품 정보</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">허가사항은 국가·제품·개정 시점에 따라 달라질 수 있습니다. 진료 시에는 국내 제품 첨부문서와 의료진 안내를 최종 기준으로 확인하세요.</p>
          <ul className="mt-4 space-y-2 text-sm text-emerald-300 underline underline-offset-4">
            <li><a href="https://www.accessdata.fda.gov/scripts/cder/daf/">미국 FDA Drugs@FDA 의약품 정보</a></li>
            <li><a href="https://www.mounjaro.com/">Mounjaro 공식 제품 정보</a></li>
            <li><a href="https://nedrug.mfds.go.kr/">의약품안전나라 의약품 통합정보</a></li>
          </ul>
        </section>
      </section>
    </main>
  );
}
