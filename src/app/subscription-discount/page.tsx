import Link from 'next/link';

const PARTNER_URL = 'https://pickle.plus/partners/partner-code/B43B9B75';

export const metadata = {
    title: '구독료 최대 83% 할인, 공동구독 총정리 | 피클플러스',
    description:
        '넷플릭스, 티빙, 유튜브 프리미엄부터 ChatGPT, 애플뮤직, 밀리의 서재까지. 대한민국 1위 공동구독 플랫폼 피클플러스로 모든 구독 서비스를 1/N 가격에 이용하는 방법을 정리했습니다.',
    keywords: [
        '피클플러스', '공동구독', '구독료 할인', 'OTT 할인', '넷플릭스 할인',
        '티빙 할인', '유튜브 프리미엄 할인', '공동구독 플랫폼',
    ],
    alternates: {
        canonical: '/subscription-discount',
    },
    openGraph: {
        title: '구독료 최대 83% 할인, 공동구독 총정리 | 피클플러스',
        description: '넷플릭스·티빙·유튜브 프리미엄·ChatGPT까지, 모든 구독 서비스를 1/N 가격으로.',
    },
};

type Service = {
    name: string;
    hook: string;
    original: string;
    discount: string;
    price: string;
    badge?: '즉시매칭' | '선착순' | '최저가 도전';
    emoji: string;
};

type Category = {
    id: string;
    title: string;
    subtitle: string;
    services: Service[];
};

const categories: Category[] = [
    {
        id: 'video',
        title: '영상 스트리밍',
        subtitle: '4K 최고화질 요금제를 1/N 가격으로',
        services: [
            { name: '넷플릭스', emoji: '🎬', hook: '4K 프리미엄을 반값 아래로', original: '17,000원', discount: '44%', price: '월 9,490원~' },
            { name: '유튜브 프리미엄', emoji: '▶️', hook: '광고 없는 유튜브 + 뮤직까지', original: '19,500원', discount: '44%', price: '월 10,900원', badge: '선착순' },
            { name: '티빙', emoji: '📺', hook: '프리미엄 요금제 반값 구독', original: '17,000원', discount: '50%', price: '월 8,490원~', badge: '즉시매칭' },
            { name: '뉴 디즈니+', emoji: '🏰', hook: '4K 프리미엄 절반 가격', original: '17,900원', discount: '47%', price: '월 9,440원~' },
            { name: '구 디즈니+', emoji: '✨', hook: '디즈니 정주행 71% 할인', original: '13,900원', discount: '71%', price: '월 3,965원~', badge: '즉시매칭' },
            { name: '웨이브', emoji: '🌊', hook: 'HD 베이직보다 싼 4K 프리미엄', original: '13,900원', discount: '71%', price: '월 3,965원~', badge: '즉시매칭' },
            { name: '왓챠', emoji: '🍿', hook: '프리미엄 요금제 71% 할인', original: '12,900원', discount: '71%', price: '월 3,715원~', badge: '즉시매칭' },
            { name: '라프텔', emoji: '🎌', hook: '애니 무제한 72% 할인', original: '14,900원', discount: '72%', price: '월 4,215원~', badge: '즉시매칭' },
            { name: '애플 TV', emoji: '🍎', hook: '오리지널 드라마 76% 할인', original: '6,510원', discount: '76%', price: '월 1,575원~' },
        ],
    },
    {
        id: 'music',
        title: '음악',
        subtitle: '무제한 스트리밍도 나눠서 저렴하게',
        services: [
            { name: '애플 뮤직', emoji: '🎵', hook: '1억 곡 스트리밍 80% 할인', original: '13,500원', discount: '80%', price: '월 2,740원~', badge: '즉시매칭' },
            { name: 'FLO 무제한 듣기', emoji: '🎧', hook: '무제한 듣기 15% 할인', original: '8,800원', discount: '15%', price: '월 7,480원', badge: '선착순' },
            { name: '스포티파이 프리미엄', emoji: '🎸', hook: '프리미엄 42% 할인', original: '11,990원', discount: '42%', price: '월 6,900원', badge: '선착순' },
        ],
    },
    {
        id: 'membership',
        title: '멤버십',
        subtitle: '쇼핑·적립 멤버십도 공동구독으로',
        services: [
            { name: '네이버플러스 멤버십', emoji: '🛍️', hook: '월 990원에 적립+무료배송', original: '4,900원', discount: '80%', price: '월 990원~', badge: '즉시매칭' },
            { name: '애플 ONE', emoji: '🍏', hook: '뮤직+TV+iCloud 통합 81% 할인', original: '20,910원', discount: '81%', price: '월 3,975원~', badge: '즉시매칭' },
            { name: '카카오 이모티콘 플러스', emoji: '😊', hook: '이모티콘 무제한 반값', original: '6,900원', discount: '49%', price: '월 3,500원', badge: '선착순' },
            { name: '스노우 VIP', emoji: '📸', hook: '보정 필터 무제한 64% 할인', original: '8,900원', discount: '64%', price: '월 3,167원~', badge: '선착순' },
            { name: '에픽 PRO', emoji: '📚', hook: 'PRO 멤버십 45% 할인', original: '8,900원', discount: '45%', price: '월 4,900원', badge: '선착순' },
            { name: '콰트 멤버십', emoji: '💪', hook: '홈트레이닝 41% 할인', original: '23,100원', discount: '41%', price: '월 13,700원', badge: '선착순' },
        ],
    },
    {
        id: 'ai',
        title: 'AI',
        subtitle: 'AI 구독료 부담도 공동구독으로 해결',
        services: [
            { name: 'Google AI', emoji: '🤖', hook: '구글 AI 프리미엄 77% 할인', original: '7,500원', discount: '77%', price: '월 1,740원~', badge: '즉시매칭' },
            { name: 'ChatGPT 파티형', emoji: '💬', hook: 'GPT 유료 기능 82% 할인', original: '29,010원', discount: '82%', price: '월 5,325원~', badge: '즉시매칭' },
        ],
    },
    {
        id: 'education',
        title: '교육·도서',
        subtitle: '자기계발 구독도 1/N로 가볍게',
        services: [
            { name: '밀리의 서재', emoji: '📖', hook: '전자책 무제한 63% 할인', original: '11,910원', discount: '63%', price: '월 4,460원~', badge: '즉시매칭' },
            { name: '슈퍼 듀오링고', emoji: '🦉', hook: '언어 학습 83% 할인', original: '13,260원', discount: '83%', price: '월 2,210원~', badge: '즉시매칭' },
            { name: '말해보카', emoji: '🗣️', hook: '영어 어휘 학습 75% 할인', original: '24,600원', discount: '75%', price: '월 6,150원~' },
            { name: '콴다 프리미엄', emoji: '➗', hook: '문제풀이 프리미엄 20% 할인', original: '18,500원', discount: '20%', price: '월 14,800원', badge: '선착순' },
            { name: '리디셀렉트', emoji: '📕', hook: '전자책 셀렉트 20% 할인', original: '4,900원', discount: '20%', price: '월 3,900원', badge: '선착순' },
            { name: '플랭 프리미엄', emoji: '🎯', hook: '스피킹 훈련 74% 할인', original: '29,000원', discount: '74%', price: '월 7,417원~', badge: '선착순' },
        ],
    },
    {
        id: 'phone',
        title: '휴대폰',
        subtitle: '휴대폰도 합리적으로! 여러 명이 모여 공동구독',
        services: [
            { name: '아이폰', emoji: '📱', hook: '여러 명이 모여 최저가 도전', original: '1,584,000원~', discount: '100%', price: '1,000원~', badge: '최저가 도전' },
            { name: '갤럭시', emoji: '📲', hook: '갤럭시도 공동구독으로 절약', original: '1,254,000원~', discount: '91%', price: '114,000원~', badge: '최저가 도전' },
        ],
    },
];

const packageDeals = [
    { combo: '티빙 + 애플뮤직 + 네이버멤버십', price: '8,500원', note: '3개를 다 써도' },
    { combo: '티빙 + 디즈니 + 네이버멤버십', price: '9,700원', note: '3개를 다 써도' },
    { combo: '티빙 + 디즈니 + 웨이브', price: '16,420원', note: '3개를 다 구독해도' },
    { combo: '넷플릭스 + 티빙 + 네이버멤버십 + 애플뮤직', price: '18,970원', note: '4개를 다 구독해도' },
];

const trustPoints = [
    {
        emoji: '🛡️',
        title: '1/N 이용금액 보장 제도',
        desc: '파티원이 다 채워지지 않거나 중간에 탈퇴해도, 파티장은 매달 정산금액을 보장받고 파티원은 내 몫인 1/N만 결제해요.',
    },
    {
        emoji: '💸',
        title: '중도 해지 시 일할 계산 현금 환불',
        desc: '원할 때 언제든 해지할 수 있고, 이용한 만큼만 일할 계산해 현금으로 돌려받아요. 위약금이나 크레딧 환불이 아니에요.',
    },
    {
        emoji: '⚡',
        title: '365일 고객센터, 평균 응답 1분',
        desc: '주말·공휴일 포함 매일 오전 9시~밤 10시 운영. 문제가 생기면 전문 상담원이 1분 대로 답변해요.',
    },
    {
        emoji: '🔄',
        title: '이용 불가 시 빠른 재매칭',
        desc: '파티가 해산되거나 문제가 생기면 다른 파티로 빠르게 재매칭해주고, 어려울 땐 고객센터로 확실하게 해결해요.',
    },
];

const comparisonRows = [
    { label: '중도 해지', pickle: 'O · 일할 계산 현금 환불', l: '△ 보증금·위약금 부과', b: 'X 환불 불가', g: '△ 크레딧 환불' },
    { label: '파티장 정산 보장', pickle: 'O · 무조건 보장', l: 'X 채워진 만큼만', b: 'X 채워진 만큼만', g: 'X 파티장 없음' },
    { label: '계정 안전성', pickle: 'O', l: 'O', b: 'X', g: 'X' },
    { label: '고객센터', pickle: '365일 · 응답 1분', l: '평일만 운영', b: '평일만 운영', g: '365일 · 응답 3시간+' },
    { label: '이용 불가 시 대처', pickle: '재매칭·빠른 환불', l: '당사자 간 해결 권장', b: '판매자별 상이', g: '크레딧 환불' },
];

const faqs = [
    {
        q: '공동구독이 뭔가요?',
        a: '많은 구독 서비스가 제공하는 동시 시청 기능이나 패밀리 멤버십을 활용해 여러 명이 함께 구독하고 비용을 나눠 내는 방식이에요. 오프라인에서 가족·친구와 하던 계정공유를 온라인으로 옮겨왔다고 생각하면 쉬워요. 피클플러스는 자동매칭으로 모르는 사람과도 안전하게 함께 쓸 수 있게 도와줘요.',
    },
    {
        q: '피클플러스는 믿을 수 있는 곳인가요?',
        a: '2020년에 만들어져 7년째 활발하게 운영 중인 대한민국 1위 공동구독 플랫폼이에요. 1/N 이용금액 보장 제도와 365일 고객센터로 사기·먹튀 걱정 없이 이용할 수 있어요.',
    },
    {
        q: '중간에 그만두고 싶으면 어떻게 하나요?',
        a: '언제든지 해지할 수 있고, 이용한 만큼만 일할 계산해서 현금으로 환불받아요. (네이버멤버십, 애플뮤직 등 일부 서비스는 조건이 다를 수 있어요.)',
    },
    {
        q: '파티원이 안 구해지면 손해 보는 것 아닌가요?',
        a: '아니에요. 파티장은 파티원이 다 채워지지 않아도 매달 정산금을 피클플러스가 보장해주고, 파티원은 항상 자기 몫인 1/N만 결제해요.',
    },
];

function CTAButton({ label, sub }: { label: string; sub?: string }) {
    return (
        <Link
            href={PARTNER_URL}
            className="group flex w-full items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-4 text-left text-white shadow-lg shadow-violet-900/40 transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
        >
            <span className="min-w-0">
                {sub && <span className="block text-[11px] font-black uppercase tracking-[0.14em] text-violet-200">{sub}</span>}
                <span className="mt-0.5 block text-base font-black leading-snug sm:text-lg">{label}</span>
            </span>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:translate-x-1">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
            </span>
        </Link>
    );
}

function BadgeChip({ badge }: { badge: NonNullable<Service['badge']> }) {
    const styles =
        badge === '즉시매칭'
            ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
            : badge === '선착순'
                ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                : 'bg-rose-500/15 text-rose-300 border-rose-500/30';
    return (
        <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-black ${styles}`}>
            {badge === '최저가 도전' ? '🔥 최저가 도전' : badge}
        </span>
    );
}

export default function SubscriptionDiscountPage() {
    return (
        <div
            className="min-h-screen bg-[#0b0713] text-white px-4 pb-32 pt-14 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif' }}
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute top-[-10%] left-1/2 z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[100px]" />
            <div className="pointer-events-none absolute bottom-[10%] right-[-10%] z-0 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[100px]" />

            <div className="relative z-10 mx-auto w-full max-w-2xl">
                {/* Hero */}
                <div className="mb-10 text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/15 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-violet-300">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                        대한민국 1위 공동구독 플랫폼
                    </div>

                    <h1 className="mb-4 text-3xl font-black leading-tight tracking-tighter sm:text-5xl">
                        쓰고 싶은 구독,
                        <br />
                        <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                            이제 참지 말고 나눠 내세요
                        </span>
                    </h1>

                    <p className="mx-auto max-w-md break-keep text-sm font-medium leading-relaxed text-zinc-300 sm:text-base">
                        처음 만나는 구독 공동체, 피클플러스.
                        <br />
                        넷플릭스부터 ChatGPT까지 <strong className="text-white">모든 구독 서비스를 1/N 가격</strong>으로 이용해보세요.
                    </p>

                    <div className="mt-7">
                        <CTAButton sub="Pickle Plus" label="1개 가격으로 쓰고 싶은 구독 다 쓰기" />
                    </div>
                </div>

                {/* Package deals */}
                <section className="mb-12">
                    <h2 className="mb-1 text-xl font-black">이 조합, 진짜 이 가격이에요</h2>
                    <p className="mb-4 text-xs font-semibold text-zinc-400">
                        여러 개를 구독해도 1개 값. 귀찮게 여기저기 왔다갔다 하지 마세요.
                    </p>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {packageDeals.map((deal) => (
                            <Link
                                key={deal.combo}
                                href={PARTNER_URL}
                                className="group rounded-2xl border border-violet-500/20 bg-zinc-900/60 p-4 transition-all hover:border-violet-500/50 hover:bg-zinc-800/70 active:scale-[0.98]"
                            >
                                <p className="text-xs font-bold leading-relaxed text-zinc-300 break-keep">{deal.combo}</p>
                                <p className="mt-2 text-sm font-black text-white">
                                    {deal.note}{' '}
                                    <span className="text-xl font-black text-violet-300 group-hover:text-violet-200">{deal.price}</span>
                                    <span className="text-violet-300">!</span>
                                </p>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Category sections */}
                {categories.map((category) => (
                    <section key={category.id} className="mb-12">
                        <h2 className="mb-1 text-xl font-black">{category.title}</h2>
                        <p className="mb-4 text-xs font-semibold text-zinc-400">{category.subtitle}</p>
                        <div className="grid grid-cols-2 gap-3">
                            {category.services.map((service) => (
                                <Link
                                    key={service.name}
                                    href={PARTNER_URL}
                                    className="group flex flex-col rounded-2xl border border-white/10 bg-zinc-900/60 p-4 shadow-lg transition-all hover:border-violet-500/40 hover:bg-zinc-800/70 active:scale-[0.98]"
                                >
                                    <div className="mb-3 flex items-start justify-between gap-2">
                                        <span className="text-2xl drop-shadow-sm">{service.emoji}</span>
                                        {service.badge && <BadgeChip badge={service.badge} />}
                                    </div>
                                    <h3 className="text-sm font-black leading-snug text-white group-hover:text-violet-300 sm:text-base">
                                        {service.name}
                                    </h3>
                                    <p className="mt-1 break-keep text-[11px] font-semibold leading-relaxed text-zinc-400">
                                        {service.hook}
                                    </p>
                                    <div className="mt-3 border-t border-white/5 pt-2.5">
                                        <span className="block text-[11px] font-bold text-zinc-500 line-through">{service.original}</span>
                                        <span className="mt-0.5 flex items-baseline gap-1.5">
                                            <span className="text-sm font-black text-violet-400">{service.discount}</span>
                                            <span className="text-sm font-black text-white">{service.price}</span>
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}

                {/* What is joint subscription */}
                <section className="mb-12 rounded-3xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-sm">
                    <h2 className="mb-3 text-xl font-black">공동구독이 뭐예요?</h2>
                    <p className="break-keep text-sm font-medium leading-relaxed text-zinc-300">
                        많은 구독 서비스에는 <strong className="text-white">동시 시청 기능</strong>이나{' '}
                        <strong className="text-white">패밀리 멤버십</strong>이 있어요. 공동구독은 이 기능을 활용해 여러 명이 함께
                        구독하고 비용을 나눠 내는 방식이에요.
                    </p>
                    <p className="mt-3 break-keep text-sm font-medium leading-relaxed text-zinc-300">
                        가족·친구와 하던 계정공유를 온라인으로 옮겨왔다고 생각하면 쉬워요. 피클플러스는{' '}
                        <strong className="text-violet-300">자동매칭 기능</strong>으로 모르는 사람과도 안전하고 편리하게 공동구독할 수
                        있게 도와주는 플랫폼이에요.
                    </p>
                    <p className="mt-3 break-keep text-sm font-medium leading-relaxed text-zinc-300">
                        예를 들어 웨이브는 HD 화질 베이직이 7,900원이지만, 피클플러스로 공동구독하면{' '}
                        <strong className="text-white">4K 프리미엄을 월 4,740원</strong>에 쓸 수 있어요. 화질은 올라가고 가격은
                        내려가는 거죠.
                    </p>
                </section>

                {/* Trust points */}
                <section className="mb-12">
                    <h2 className="mb-1 text-xl font-black">이래서 안심하고 쓸 수 있어요</h2>
                    <p className="mb-4 text-xs font-semibold text-zinc-400">2020년부터 7년째 운영 중인 플랫폼의 보장 제도</p>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {trustPoints.map((point) => (
                            <div key={point.title} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
                                <span className="text-2xl">{point.emoji}</span>
                                <h3 className="mt-2 text-sm font-black text-white">{point.title}</h3>
                                <p className="mt-1.5 break-keep text-xs font-medium leading-relaxed text-zinc-400">{point.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Comparison table */}
                <section className="mb-12">
                    <h2 className="mb-1 text-xl font-black">다른 곳과 뭐가 다른가요?</h2>
                    <p className="mb-4 text-xs font-semibold text-zinc-400">주요 공동구독 서비스 기능 비교</p>
                    <div className="overflow-x-auto rounded-2xl border border-white/10">
                        <table className="w-full min-w-[560px] border-collapse text-left text-xs">
                            <thead>
                                <tr className="bg-zinc-900">
                                    <th className="px-3 py-3 font-black text-zinc-400">구분</th>
                                    <th className="px-3 py-3 font-black text-violet-300">피클플러스</th>
                                    <th className="px-3 py-3 font-black text-zinc-500">L사</th>
                                    <th className="px-3 py-3 font-black text-zinc-500">B사</th>
                                    <th className="px-3 py-3 font-black text-zinc-500">G사</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map((row) => (
                                    <tr key={row.label} className="border-t border-white/5 bg-zinc-900/40">
                                        <td className="px-3 py-3 font-black text-zinc-300">{row.label}</td>
                                        <td className="px-3 py-3 font-bold text-violet-200">{row.pickle}</td>
                                        <td className="px-3 py-3 font-medium text-zinc-500">{row.l}</td>
                                        <td className="px-3 py-3 font-medium text-zinc-500">{row.b}</td>
                                        <td className="px-3 py-3 font-medium text-zinc-500">{row.g}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-2 text-[10px] font-medium text-zinc-600">
                        * 각 사 공개 정책 기준 기능 비교이며, 세부 조건은 변경될 수 있습니다.
                    </p>
                </section>

                {/* FAQ */}
                <section className="mb-12">
                    <h2 className="mb-4 text-xl font-black">자주 묻는 질문</h2>
                    <div className="space-y-3">
                        {faqs.map((faq) => (
                            <div key={faq.q} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
                                <h3 className="text-sm font-black text-white">Q. {faq.q}</h3>
                                <p className="mt-2 break-keep text-xs font-medium leading-relaxed text-zinc-400">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="mb-10 rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-950/80 to-zinc-900/80 p-6 text-center">
                    <h2 className="text-2xl font-black leading-tight">
                        더 이상 원하는 구독,
                        <br />
                        참지 마세요
                    </h2>
                    <p className="mx-auto mt-2 max-w-sm break-keep text-xs font-semibold leading-relaxed text-zinc-400">
                        지금 쓰고 있는 구독 요금, 피클플러스 공동구독으로 바로 아낄 수 있어요. 언제든 참여하고 언제든 해지하세요.
                    </p>
                    <div className="mt-5">
                        <CTAButton sub="지금 시작하기" label="피클플러스에서 내 구독료 아끼기" />
                    </div>
                </section>

                <footer className="pb-6 text-center">
                    <p className="mx-auto max-w-sm text-[10px] font-medium leading-relaxed text-zinc-600">
                        본 페이지는 피클플러스 파트너 활동의 일환으로, 링크를 통한 가입 시 일정액의 수수료를 제공받을 수 있습니다.
                        가격·할인율은 파티 구성과 시점에 따라 달라질 수 있으니 가입 페이지에서 최신 정보를 확인하세요.
                    </p>
                </footer>
            </div>

            {/* Sticky bottom CTA (mobile) */}
            <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#0b0713]/90 px-4 py-3 backdrop-blur-md">
                <div className="mx-auto max-w-2xl">
                    <Link
                        href={PARTNER_URL}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3.5 text-sm font-black text-white shadow-lg shadow-violet-900/40 transition-transform active:scale-[0.98]"
                    >
                        구독료 최대 83% 아끼러 가기
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-6-6 6 6-6 6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
