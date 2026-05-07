import { Metadata } from 'next';
import KoreaJapanSingerContent from '@/components/KoreaJapanSingerContent';

export const metadata: Metadata = {
  title: '2026 한일가왕전 투표 채널 바로가기 및 틱톡 라이트 다운로드',
  description: '2026 한일가왕전 공식 투표 채널 바로가기와 틱톡 라이트 안드로이드/iOS 앱 다운로드 링크를 제공합니다. 당신이 응원하는 한일 양국의 가수에게 투표하세요!',
  keywords: ['2026한일가왕전', '한일가왕전', '한일가왕전투표', '틱톡라이트', '틱톡투표', '트로트', '음악경연', '한일전', '가왕전'],
  openGraph: {
    title: '2026 한일가왕전 투표 및 틱톡 라이트 안내',
    description: '한일 양국의 자존심 대결! 2026 한일가왕전 투표 채널 및 앱 다운로드 바로가기.',
    images: ['/korea-japan-singer-bg.png'],
  }
};

export default function KoreaJapanSingerPage() {
  return <KoreaJapanSingerContent />;
}
