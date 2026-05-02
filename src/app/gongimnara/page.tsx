import { Metadata } from 'next';
import GongimnaraContent from '@/components/GongimnaraContent';

export const metadata: Metadata = {
  title: '공임나라 예약 및 표준 공임비 확인 | 엔진교체, 타이어교체, 차량정비',
  description: '투명한 표준 공임비로 믿을 수 있는 공임나라! 엔진교체, 타이어교체, 일반 차량 정비 등 합리적인 정비 서비스를 예약하세요.',
  keywords: ['공임나라', '엔진교체', '타이어교체', '차량정비', '표준공임비', '엔진오일교환', '공임나라예약'],
  openGraph: {
    title: '공임나라 예약 및 정비 서비스 안내',
    description: '엔진교체, 타이어교체, 차량정비! 표준 공임비로 투명하고 합리적인 공임나라.',
    images: ['/gongimnara-bg.png'],
  }
};

export default function GongimnaraPage() {
  return <GongimnaraContent />;
}
