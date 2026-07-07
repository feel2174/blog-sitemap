import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '2026 자동차세 계산기 | 배기량·차령·연납 할인 반영 예상 세액 조회',
    description:
        '배기량, 등록연도, 비영업용/영업용 여부만 입력하면 자동차세를 바로 계산합니다. 차령 경감, 전기차 정액세, 연납 할인율까지 반영한 자동차세 계산기.',
    keywords: [
        '자동차세 계산기', '자동차세 연납', '자동차세 배기량', '자동차세 계산 방법',
        '전기차 자동차세', '자동차세 차령 경감', '자동차세 납부기간',
    ],
    alternates: {
        canonical: '/car-tax-calculator',
    },
    openGraph: {
        title: '자동차세 계산기 | 배기량·차령·연납 할인 반영',
        description: '내 차 정보만 입력하면 예상 자동차세를 바로 확인할 수 있습니다.',
    },
};

export default function CarTaxCalculatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
