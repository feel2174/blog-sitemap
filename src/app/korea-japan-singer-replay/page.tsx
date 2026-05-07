import { Metadata } from 'next';
import KoreaJapanSingerReplayContent from '@/components/KoreaJapanSingerReplayContent';

export const metadata: Metadata = {
  title: '2026 한일가왕전 재방송 다시보기 안내 | MBN 실시간·티빙·웨이브',
  description: '2026 한일가왕전 재방송 편성표 확인, MBN 실시간 라이브 시청 및 티빙/웨이브 다시보기 링크를 제공합니다. 놓친 방송을 지금 바로 감상하세요.',
  keywords: ['한일가왕전재방송', '한일가왕전다시보기', '한일가왕전편성표', 'MBN온에어', '티빙한일가왕전', '웨이브한일가왕전', '한일가왕전투표'],
  openGraph: {
    title: '2026 한일가왕전 재방송 & 다시보기 통합 안내',
    description: '놓칠 수 없는 한일 양국 가왕의 무대! 재방송 편성표와 OTT 바로가기.',
    images: ['/korea-japan-singer-replay-bg.png'],
  }
};

export default function KoreaJapanSingerReplayPage() {
  return <KoreaJapanSingerReplayContent />;
}
