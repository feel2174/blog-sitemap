import { Metadata } from 'next';
import GyeongnamSupportContent from '@/components/GyeongnamSupportContent';

export const metadata: Metadata = {
  title: '경남도민생활지원금 신청 및 안내 | 혜택 확인 바로가기',
  description: '경상남도 도민을 위한 생활안정지원금! 자격 조건과 지급 내용을 확인하고 지금 바로 신청하세요.',
  keywords: ['경남도민생활지원금', '경상남도지원금', '경남생활지원금', '지원금신청', '경남재난지원금'],
  openGraph: {
    title: '경남도민생활지원금 안내',
    description: '경남도민이라면 누구나! 생활지원금 대상 여부를 확인하세요.',
    images: ['/gyeongnam-support-bg.png'],
  }
};

export default function GyeongnamSupportPage() {
  return <GyeongnamSupportContent />;
}
