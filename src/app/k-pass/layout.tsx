import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '2026 K패스(모두의카드) 등록·발급방법·환급 기준 15회 및 은행별 환급일 총정리',
    description:
        'K패스(모두의카드) 카드 발급 및 공식 홈페이지(korea-pass.kr) 등록방법, 월 15회 환급 조건, 가입 첫 달 1회 환급 특례, 신한·농협·국민·우리 등 카드사별 환급일 및 경기도 The 경기패스 혜택 완벽 정리.',
    keywords: [
        'K패스 등록방법',
        'K패스 발급방법',
        'K패스 환급일',
        'K패스환급기준15회방법',
        'K패스환급기준1방법',
        'K패스환급방법',
        '경기도K패스환급방법',
        '농협K패스환급방법',
        '신한K-패스환급방법',
        'The경기패스',
        '모두의카드',
        '알뜰교통카드 K패스',
    ],
    alternates: {
        canonical: '/k-pass',
    },
    openGraph: {
        title: '2026 K패스(모두의카드) 등록·발급방법·환급 기준 15회 및 은행별 환급일 총정리',
        description:
            'K패스 공식 등록 링크(korea-pass.kr), 15회 환급 기준, 신한·농협 등 은행별 환급 방법 및 경기도 The 경기패스 혜택 실시간 가이드.',
    },
};

export default function KPassLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
