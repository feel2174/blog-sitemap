import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'KFC 치킨나이트 1+1 혜택 안내 | 매일 밤 9시~10시 치킨 파티',
    description: '매일 밤 9시부터 10시까지, KFC 치킨이 1+1! 치킨나이트 혜택 내용, 대상 품목, KFC 앱 할인 쿠폰 확인 방법 및 다운로드 링크를 안내해 드립니다.',
    keywords: ['KFC', '치킨나이트', 'KFC1+1', '치킨할인', 'KFC쿠폰', 'KFC앱', '밤9시치킨', '야식추천', 'KFC이벤트', '치킨나이트시간'],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
