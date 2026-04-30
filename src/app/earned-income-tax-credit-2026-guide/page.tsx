import { Metadata } from 'next';
import EarnedIncomeTaxCreditContent from '@/components/EarnedIncomeTaxCreditContent';

export const metadata: Metadata = {
  title: '2026년 근로장려금 & 자녀장려금 신청 완벽 가이드 | 최대 330만원 지급',
  description: '놓치면 후회하는 숨은 돈! 2026년 대폭 확대된 근로장려금 및 자녀장려금 대상자 요건과 신청 방법을 지금 바로 확인하세요.',
  keywords: ['근로장려금', '자녀장려금', '2026년근로장려금', '정부지원금', '장려금신청', '근로장려금신청'],
  openGraph: {
    title: '2026 근로장려금 신청 가이드',
    description: '1인 평균 최대 330만원! 올해 확대된 근로·자녀장려금 혜택을 놓치지 마세요.',
    images: ['/hometax-bg.png'],
  }
};

export default function EarnedIncomeTaxCreditPage() {
  return <EarnedIncomeTaxCreditContent />;
}
