import { Metadata } from 'next';
import IncomeTaxContent from '@/components/IncomeTaxContent';

export const metadata: Metadata = {
  title: '2026 종합소득세 환급금 조회 및 신청 방법 | 금융소득 종합과세 계산기 세율 기준',
  description: '5월 종합소득세 신고 기간 및 방법, 금융소득 종합과세 대상자 조회, 환급금 계산기, 모두채움 신고하기 등 홈택스 바로가기 안내.',
  keywords: [
    '금융소득 종합과세', '종합소득세 환급', '종합소득세 신고방법', '종합소득세 계산기', 
    '5월 종합소득세', '환급금 조회', '모두채움 신고', '홈택스 바로가기'
  ],
  openGraph: {
    title: '종합소득세 환급금 조회 및 신청 가이드',
    description: '금융소득 종합과세 기준 및 종합소득세 신고 방법 총정리.',
    images: ['/income-tax-banner.png'],
  }
};

export default function IncomeTaxPage() {
  return <IncomeTaxContent />;
}
