import Link from 'next/link';

export const metadata = {
    title: '통신사 고객센터 링크 모음 | SKT KT LGU+ 알뜰폰 고객센터',
    description: 'SKT, KT, LG U+ 고객센터 바로가기와 알뜰폰 고객센터 전화번호를 한 페이지에서 확인하세요.',
};

const majorCarriers = [
    {
        name: 'SKT고객센터',
        href: 'https://www.tworld.co.kr/web/support',
        description: 'T world 고객지원 페이지로 이동',
        accent: 'from-rose-500 via-orange-500 to-amber-400',
        panel: 'from-rose-500/20 to-orange-500/10',
    },
    {
        name: 'KT고객센터',
        href: 'https://help.kt.com/store/KtCustCenter.do',
        description: 'KT 고객센터 안내 페이지로 이동',
        accent: 'from-lime-400 via-emerald-400 to-green-500',
        panel: 'from-lime-400/20 to-green-500/10',
    },
    {
        name: 'LGT고객센터',
        href: 'https://www.lguplus.com/biz/support/online/contact-info/phone-number',
        description: 'LG U+ 고객센터 대표번호와 상담 안내',
        accent: 'from-fuchsia-500 via-violet-500 to-purple-600',
        panel: 'from-fuchsia-500/20 to-violet-500/10',
    },
];

const budgetPhoneRows = [
    { company: 'CJ헬로모바일', alias: '씨제이헬로모바일', network: 'KT', phone: '1688-1144' },
    { company: '앤텔레콤', alias: '엔알커뮤니케이션', network: 'KT', phone: '1899-7700' },
    { company: '플러스모바일', alias: '홈플러스알뜰폰', network: 'KT', phone: '1566-0888' },
    { company: '에넥스텔레콤', alias: 'A', network: 'KT', phone: '1588-1635' },
    { company: '프리텔레콤', alias: 'FreeC', network: 'KT', phone: '1577-4551' },
    { company: 'EG모바일', alias: '에버그린모바일', network: 'KT', phone: '1588-6220' },
    { company: 'KT파워텔', alias: '-', network: 'KT', phone: '1588-0130' },
    { company: '위너스텔', alias: 'Well', network: 'KT', phone: '02-2277-0074' },
    { company: '에스원', alias: '에스원넷', network: 'KT', phone: '1599-7114' },
    { company: '착한통신', alias: '-', network: 'KT', phone: '1899-5369' },
    { company: 'M모바일', alias: '엠모바일, KTIS', network: 'KT', phone: '1899-2214' },
    { company: '플래시모바일', alias: '에이씨엔', network: 'KT', phone: '1688-9800' },
    { company: '씨엔커뮤니케이션', alias: '더블유', network: 'KT', phone: '1544-3350' },
    { company: '스노우맨', alias: '온세텔레콤', network: 'KT', phone: '1688-9300' },
    { company: '한국케이블텔레콤KCT', alias: '티플러스', network: 'SKT', phone: '1877-9114' },
    { company: '아이즈비전', alias: '아이즈모바일', network: 'SKT', phone: '1800-6100' },
    { company: '유니컴즈', alias: '모빙', network: 'SKT', phone: '1899-3633' },
    { company: '큰사람컴퓨터', alias: '이야기알뜰폰', network: 'SKT', phone: '1670-9114' },
    { company: '스마텔', alias: '스마토모바일', network: 'SKT', phone: '1566-0212' },
    { company: 'SK텔링크', alias: '7모바일', network: 'SKT', phone: '1599-0999' },
    { company: '이마트', alias: '이마트알뜰폰', network: 'SKT', phone: '0599-0077' },
    { company: '에스원', alias: '에스원넷', network: 'SKT', phone: '1599-7114' },
    { company: '스페이스네트', alias: '프리티', network: 'LG U+', phone: '1544-7229' },
    { company: '머천드코리아', alias: '마이월드', network: 'LG U+', phone: '1600-7019' },
    { company: 'MTT텔레콤', alias: '메리큐', network: 'LG U+', phone: '02-1544-3688' },
    { company: '미디어로그', alias: 'U+알뜰모바일', network: 'LG U+', phone: '1644-5353' },
    { company: '홈플러스LG', alias: '플러스모바일', network: 'LG U+', phone: '1566-0888' },
];

const networkStyles: Record<string, string> = {
    KT: 'bg-lime-400/85 text-slate-950',
    SKT: 'bg-orange-500/90 text-white',
    'LG U+': 'bg-violet-600/90 text-white',
};

const networkLabels: Record<string, string> = {
    KT: 'KT망',
    SKT: 'SKT망',
    'LG U+': 'LG U+망',
};

function getNetworkRowSpans(rows: typeof budgetPhoneRows) {
    const spans = new Map<number, number>();

    rows.forEach((row, index) => {
        const isFirst = index === 0 || rows[index - 1].network !== row.network;

        if (!isFirst) {
            return;
        }

        let rowSpan = 1;

        while (rows[index + rowSpan]?.network === row.network) {
            rowSpan += 1;
        }

        spans.set(index, rowSpan);
    });

    return spans;
}

export default function TelecomCustomerCenterPage() {
    const networkRowSpans = getNetworkRowSpans(budgetPhoneRows);

    return (
        <div
            className="min-h-screen overflow-hidden bg-[#fffaf0] text-slate-900"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}
        >
            <div className="relative">
                <div className="absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.28),_transparent_52%),radial-gradient(circle_at_right,_rgba(249,115,22,0.18),_transparent_36%),linear-gradient(180deg,#fff7d1_0%,rgba(255,250,240,0)_100%)]" />

                <main className="relative mx-auto flex w-full max-w-6xl flex-col px-4 pb-20 pt-14 sm:px-6 lg:px-8">
                    <header className="mx-auto mb-12 max-w-3xl text-center">
                        <span className="inline-flex items-center rounded-full border border-amber-300 bg-white/75 px-4 py-2 text-xs font-black tracking-[0.25em] text-amber-700 shadow-sm backdrop-blur">
                            MOBILE SUPPORT
                        </span>
                        <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                            통신사 고객센터
                            <br />
                            바로가기 모음
                        </h1>
                        <p className="mt-5 text-sm leading-7 text-slate-600 md:text-lg">
                            SKT, KT, LG U+ 고객센터 링크를 먼저 배치하고,
                            <br />
                            하단에는 이미지 기준으로 알뜰폰 고객센터 정보를 별도 정리했습니다.
                        </p>
                    </header>

                    <section className="mb-14 grid gap-5 md:grid-cols-3">
                        {majorCarriers.map((carrier, index) => (
                            <Link
                                key={carrier.name}
                                href={carrier.href}
                                className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.16)]"
                                style={{ animation: `fadeIn 0.6s ease-out backwards ${index * 120}ms` }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${carrier.panel} opacity-0 transition duration-300 group-hover:opacity-100`} />
                                <div className="relative">
                                    <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${carrier.accent} text-lg font-black text-white shadow-lg`}>
                                        {carrier.name.replace('고객센터', '').slice(0, 3)}
                                    </div>
                                    <h2 className="text-2xl font-black tracking-tight text-slate-950">
                                        {carrier.name}
                                    </h2>
                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        {carrier.description}
                                    </p>
                                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition group-hover:text-slate-950">
                                        페이지 이동
                                        <span aria-hidden="true" className="transition group-hover:translate-x-1">
                                            →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </section>

                    <section className="rounded-[2.25rem] border border-slate-200 bg-white/92 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
                        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="text-sm font-black tracking-[0.18em] text-amber-700">
                                    알뜰폰 고객센터 정보
                                </p>
                                <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                                    알뜰폰 통신사 대표번호 정리
                                </h2>
                            </div>
                            <p className="text-sm leading-6 text-slate-500">
                                스크린샷 기준 정보를 표 형태로 재구성했습니다.
                            </p>
                        </div>

                        <div className="mb-5 flex flex-wrap gap-2">
                            {Object.entries(networkLabels).map(([network, label]) => (
                                <span
                                    key={network}
                                    className={`inline-flex rounded-full px-3 py-1 text-xs font-black ${networkStyles[network]}`}
                                >
                                    {label}
                                </span>
                            ))}
                        </div>

                        <div className="overflow-x-auto rounded-[1.5rem] border border-slate-200">
                            <table className="min-w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-amber-300 text-center text-slate-950">
                                        <th className="border border-amber-500 px-4 py-3 font-black">알뜰폰통신사이름</th>
                                        <th className="border border-amber-500 px-4 py-3 font-black">별칭</th>
                                        <th className="border border-amber-500 px-4 py-3 font-black">이동통신망</th>
                                        <th className="border border-amber-500 px-4 py-3 font-black">고객센터전화번호</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {budgetPhoneRows.map((row, index) => (
                                        <tr key={`${row.company}-${row.alias}-${row.phone}`} className="bg-white text-center even:bg-slate-50">
                                            <td className="border border-slate-200 px-4 py-3 font-semibold text-slate-800">
                                                {row.company}
                                            </td>
                                            <td className="border border-slate-200 px-4 py-3 text-slate-700">
                                                {row.alias}
                                            </td>
                                            {networkRowSpans.has(index) ? (
                                                <td
                                                    rowSpan={networkRowSpans.get(index)}
                                                    className={`border border-slate-200 px-4 py-3 align-middle text-base font-black ${networkStyles[row.network]}`}
                                                >
                                                    {row.network}
                                                </td>
                                            ) : null}
                                            <td className="border border-slate-200 px-4 py-3 font-bold tracking-wide text-slate-900">
                                                {row.phone}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 grid gap-3 text-sm text-slate-600 md:grid-cols-3">
                            <div className="rounded-2xl bg-amber-50 px-4 py-4">
                                메이저 3사 링크는 상단 버튼에서 바로 이동할 수 있습니다.
                            </div>
                            <div className="rounded-2xl bg-lime-50 px-4 py-4">
                                알뜰폰은 사용 중인 통신망별로 한눈에 찾을 수 있게 묶었습니다.
                            </div>
                            <div className="rounded-2xl bg-violet-50 px-4 py-4">
                                링크 버튼에는 요청하신 대로 <code className="font-bold">{'target="_blank"'}</code>를 넣지 않았습니다.
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
