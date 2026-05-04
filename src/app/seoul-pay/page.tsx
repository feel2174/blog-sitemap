import { Metadata } from 'next';
import SeoulPayContent from '@/components/SeoulPayContent';

export const metadata: Metadata = {
  title: '서울사랑상품권(서울페이+) 구매하기 및 누리집 바로가기',
  description: '서울사랑상품권을 사용할 수 있는 서울페이+ 앱 안드로이드, 아이폰 다운로드 링크와 발행 일정을 확인할 수 있는 서울시 누리집 바로가기 안내입니다.',
  keywords: ['서울사랑상품권', '서울페이+', '서울페이플러스', '앱다운로드', '서울사랑상품권앱', '누리집', '상품권구매', '가맹점'],
  openGraph: {
    title: '서울사랑상품권(서울페이+) 구매하기 및 누리집',
    description: '할인된 가격으로 구매하고 다양하게 사용하는 서울사랑상품권! 서울페이+ 앱을 설치하세요.',
  }
};

export default function SeoulPayPage() {
  return <SeoulPayContent />;
}
