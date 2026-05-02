import { Metadata } from 'next';
import KrasContent from '@/components/KrasContent';

export const metadata: Metadata = {
  title: '일사편리 부동산정보조회 | 토지대장, 건축물대장 종합 열람',
  description: '국토교통부 일사편리 시스템에서 부동산 종합증명서, 토지대장, 건축물대장, 개별공시지가를 한 번에 열람하고 발급받으세요.',
  keywords: ['일사편리', '부동산정보조회', '토지대장', '건축물대장', '개별공시지가', '부동산종합증명서', '국토교통부'],
  openGraph: {
    title: '일사편리 부동산 종합정보조회 시스템',
    description: '18종의 복잡한 부동산 공부를 하나로! 일사편리에서 빠르고 간편하게 확인하세요.',
    images: ['/kras-bg.png'],
  }
};

export default function KrasPage() {
  return <KrasContent />;
}
