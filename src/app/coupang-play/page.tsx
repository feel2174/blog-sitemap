import { Metadata } from 'next';
import CoupangPlayContent from '@/components/CoupangPlayContent';

export const metadata: Metadata = {
  title: '쿠팡플레이(Coupang Play) 공식 홈페이지 및 앱 다운로드 안내',
  description: '쿠팡 와우 회원이라면 누구나 무제한으로 즐기는 쿠팡플레이! SNL 코리아, 독점 스포츠 생중계, 최신 영화 및 드라마를 지금 바로 감상하세요.',
  keywords: ['쿠팡플레이', 'CoupangPlay', '쿠팡플레이다운로드', '쿠팡플레이홈페이지', 'SNL코리아', 'K리그중계', '와우회원혜택', 'OTT추천'],
  openGraph: {
    title: '쿠팡플레이(Coupang Play) | 와우 회원의 무제한 스트리밍',
    description: '오직 쿠팡플레이에서만 볼 수 있는 독점 콘텐츠와 실시간 스포츠 중계. 와우 회원 혜택을 지금 확인하세요.',
    images: ['/coupang-play-bg.png'],
  }
};

export default function CoupangPlayPage() {
  return <CoupangPlayContent />;
}
