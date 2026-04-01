import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '고유가 민생지원금 - 우대·특별 지역 확인하기',
  description: '내가 사는 지역이 인구감소지역인지, 우대형(20만원) 또는 특별형(25만원) 지원 대상인지 검색해보고 전국 현황 지도를 확인해보세요.',
  keywords: ['인구감소지역', '인구소멸위기지역', '주거지원금', '20만원지원', '25만원지원', '지역위기판정'],
  openGraph: {
    title: '고유가 민생지원금',
    description: '전국 인구감소지역 현황 및 지원금 확인 서비스',
    type: 'website',
  }
};

export default function PopulationDecreaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
