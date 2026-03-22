import GameItemClient from './GameItemClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '게임 아이템 거래 플랫폼 추천 & 바로가기 - 랜덤 순위 가이드',
    description: '아이템매니아, 아이템베이, 아이디팜, 저팔계, 바로템 등 믿을 수 있는 국내 주요 게임 아이템 거래소 링크를 제공합니다. 매번 새로운 순서로 추천되는 안전한 거래 플랫폼을 확인하세요.',
    keywords: ['게임아이템거래', '아이템매니아', '아이템베이', '아이디팜', '저팔계', '바로템', '로켓아이템땡스', '게임마켓', '싸템', '아이템중개'],
    openGraph: {
        title: '게임 아이템 거래 플랫폼 리스트',
        description: '국내 주요 게임 아이템 거래소들을 한눈에 확인하고 바로 접속하세요.',
        type: 'website',
    },
};

export default function GameItemPage() {
    return <GameItemClient />;
}
