import type { Metadata } from 'next';
import FreeWebtoonContent from '@/components/FreeWebtoonContent';

export const metadata: Metadata = {
  title: '무료 웹툰 플랫폼 바로가기 | 네이버웹툰 카카오웹툰 리디웹툰',
  description:
    '네이버웹툰, 카카오웹툰, 리디웹툰 공식 웹툰 서비스를 한 화면에서 빠르게 이동할 수 있는 바로가기 페이지입니다.',
  keywords: ['무료 웹툰', '네이버웹툰', '카카오웹툰', '리디웹툰', '웹툰 바로가기', '웹툰 추천'],
  alternates: {
    canonical: '/free-webtoon',
  },
  openGraph: {
    title: '무료 웹툰 플랫폼 바로가기',
    description: '네이버웹툰, 카카오웹툰, 리디웹툰 바로가기를 한 화면에서 확인하세요.',
    url: 'https://zucca100.com/free-webtoon',
    type: 'article',
    images: ['/free-webtoon-bg.png'],
  },
};

export default function FreeWebtoonPage() {
  return <FreeWebtoonContent />;
}
