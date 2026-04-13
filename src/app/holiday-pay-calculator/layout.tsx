import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '2026 주휴수당 계산기 | 나의 주휴수당은 얼마? (최저임금 반영)',
    description: '1주일 15시간 이상 근무 시 받을 수 있는 주휴수당을 2026년 최저임금 기준에 맞춰 정확하게 계산해 보세요.',
};

export default function HolidayPayLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
