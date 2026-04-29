import { Metadata } from 'next';
import HometaxContent from '@/components/HometaxContent';

export const metadata: Metadata = {
  title: '국세청 홈택스 & 손택스 다운로드 (연말정산 및 세금신고)',
  description: '국세청 홈택스 PC 홈페이지 접속 및 안드로이드, iOS 손택스 앱 다운로드 링크를 제공합니다. 연말정산과 종합소득세 신고를 간편하게 진행하세요.',
  keywords: ['국세청', '홈택스', '손택스', '연말정산', '세금신고', '종합소득세', '부가세', '손택스다운로드', '홈택스바로가기'],
  openGraph: {
    title: '국세청 홈택스 & 손택스 다운로드 및 바로가기',
    description: '세무 업무를 내 손안에! 홈택스 PC 및 모바일 손택스 앱 다운로드 안내.',
    images: ['/hometax-bg.png'],
  }
};

export default function HometaxPage() {
  return <HometaxContent />;
}
