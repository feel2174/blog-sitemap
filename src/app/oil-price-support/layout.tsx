import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '각 은행·카드사별 고유가 지원금 및 유가보조금 잔액조회 바로가기',
    description:
        'KB국민, 신한, 삼성, 현대, 롯데, 우리, 하나, 농협, BC 등 각 카드사 및 은행별 고유가 피해지원금, 경차 유류세 환급, 화물차 유가보조금 실시간 잔액조회 공식 바로가기 안내.',
    keywords: [
        '유가보조금 잔액조회',
        '고유가 피해지원금 잔액',
        '경차 유류세 환급 잔액',
        '화물차 유가보조금 조회',
        '신한카드 유가지원금',
        '국민카드 유가보조금',
        'FSMS 유가보조금',
        '지원금 잔액조회',
        '유류비 지원금 한도',
    ],
    alternates: {
        canonical: '/oil-price-support',
    },
    openGraph: {
        title: '각 은행·카드사별 고유가 지원금 및 유가보조금 잔액조회 바로가기',
        description: '카드사 및 은행별 고유가 피해지원금, 유류세 환급 잔여한도 실시간 잔액조회 링크 제공.',
    },
};

export default function OilPriceSupportLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
