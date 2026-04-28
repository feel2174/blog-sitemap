import { Metadata } from 'next';
import FreeWebtoonContent from '@/components/FreeWebtoonContent';

export const metadata: Metadata = {
  title: '2026 무료웹툰 최신 주소 모음 | 조아툰, 블랙툰, 툰코 등 실시간 주소 확인',
  description: '조아툰, 블랙툰, 툰코, 웹툰모아 등 인기 무료 웹툰 사이트의 최신 접속 주소를 실시간으로 제공합니다. 막힘 없는 최신 주소로 인기 웹툰을 무료로 즐기세요.',
  keywords: ['무료웹툰', '웹툰최신주소', '조아툰', '블랙툰', '툰코', '웹툰모아', '무료웹툰사이트', '웹툰다시보기'],
  openGraph: {
    title: '2026 무료웹툰 최신 주소 모음 | 실시간 업데이트',
    description: '인기 무료 웹툰 사이트 최신 주소 총정리. 조아툰, 블랙툰, 툰코 등 접속 주소 실시간 확인.',
    images: ['/free-webtoon-bg.png'],
  }
};

export default function FreeWebtoonPage() {
  return <FreeWebtoonContent />;
}
