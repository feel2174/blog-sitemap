import { Metadata } from 'next';
import AliExpressTemuContent from '@/components/AliExpressTemuContent';

export const metadata: Metadata = {
  title: '알리익스프레스 & 테무 앱 다운로드 안내 | 글로벌 쇼핑을 한 손에',
  description: '전 세계 최저가 쇼핑의 시작! 알리익스프레스(AliExpress)와 테무(Temu) 공식 앱을 안드로이드, iOS에서 다운로드하고 억만장자처럼 쇼핑하세요.',
  keywords: ['알리익스프레스', '테무', 'AliExpress', 'Temu', '알리다운로드', '테무다운로드', '쇼핑앱', '해외직구'],
  openGraph: {
    title: '알리익스프레스 & 테무(Temu) 앱 설치 바로가기',
    description: '최저가 글로벌 쇼핑몰 앱을 다운로드하고 다양한 할인 혜택을 누리세요.',
    images: ['/shopping-app-bg.png'],
  }
};

export default function AliExpressTemuPage() {
  return <AliExpressTemuContent />;
}
