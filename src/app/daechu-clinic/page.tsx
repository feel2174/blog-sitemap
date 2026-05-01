import { Metadata } from 'next';
import DaechuClinicContent from '@/components/DaechuClinicContent';

export const metadata: Metadata = {
  title: '나는솔로 29기 영철 정숙 방문! 경주 대추밭백한의원 예약 바로가기',
  description: '나는솔로 29기 영철 정숙 부부가 임신 치료를 위해 방문한 경주 대추밭백한의원! 지금 바로 진료 예약하고 건강한 임신을 준비하세요.',
  keywords: ['대추밭백한의원', '경주한의원', '나는솔로29기', '영철정숙', '난임치료', '임신한의원', '경주대추밭백한의원'],
  openGraph: {
    title: '경주 대추밭백한의원 예약 안내',
    description: '나는솔로 29기 영철 정숙 방문 한의원! 임신 준비 예약하기',
    images: ['/daechu_clinic_bg.png'],
  }
};

export default function DaechuClinicPage() {
  return <DaechuClinicContent />;
}
