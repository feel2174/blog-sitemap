import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '버거킹 공식 앱 다운로드 및 멤버십 혜택 안내 | 와퍼 할인 쿠폰 확인',
    description: '버거킹을 더 맛있고 저렴하게 즐기는 방법! 버거킹 공식 앱 다운로드 링크와 등급별 멤버십 혜택, 킹오더 및 딜리버리 이용 방법을 안내해 드립니다.',
    keywords: ['버거킹', 'BurgerKing', '버거킹앱', '버거킹쿠폰', '와퍼할인', '킹오더', '버거킹딜리버리', '버거킹멤버십', '와퍼', '버거킹할인'],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
