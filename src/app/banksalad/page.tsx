import { Metadata } from 'next';
import BanksaladContent from '@/components/BanksaladContent';

export const metadata: Metadata = {
  title: '뱅크샐러드 다운로드 및 PC 홈페이지 바로가기 (무료 유전자 검사)',
  description: '뱅크샐러드 PC 홈페이지 접속 및 안드로이드, iOS 앱 다운로드 링크를 제공합니다. 내 자산 관리부터 무료 유전자 검사까지 한 번에 확인하세요.',
  keywords: ['뱅크샐러드', '뱅크샐러드앱', '뱅크샐러드다운로드', '뱅크샐러드PC', '무료유전자검사', '자산관리앱', '가계부앱'],
  openGraph: {
    title: '뱅크샐러드 다운로드 및 PC 홈페이지 바로가기',
    description: '흩어진 내 자산을 한눈에! 뱅크샐러드 앱 다운로드 및 PC 버전 접속 안내.',
    images: ['/banksalad-bg.png'],
  }
};

export default function BanksaladPage() {
  return <BanksaladContent />;
}
