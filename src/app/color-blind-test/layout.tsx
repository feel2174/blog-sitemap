import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '색맹 / 색약 테스트 (Color Blind Test) | 나의 색채 감각은 어느 수준일까? 지금 바로 테스트 해보세요',
  description: '미세하게 다른 색깔의 타일을 찾아 클릭하며 나의 색채 변별력을 테스트해보세요. 레벨별 난이도 상승과 실시간 랭킹 시스템으로 재미있게 시각 건강을 체크할 수 있습니다.',
  keywords: ['색맹테스트', '색약테스트', '색채감각', '눈건강', '시력테스트', '색깔찾기게임'],
};

export default function ColorBlindTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
