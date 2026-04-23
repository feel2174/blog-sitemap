import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '반디집(Bandizip) 및 반디소프트 필수 프로그램 다운로드',
    description: '가장 빠르고 가벼운 국민 압축 프로그램 반디집(Windows/Mac)과 꿀캠, 꿀뷰, 반디뷰 등 반디소프트(Bandisoft)의 모든 필수 유틸리티를 다운로드하세요.',
    keywords: ['반디집', '반디소프트', 'Bandizip', 'Bandisoft', '압축프로그램', '꿀뷰', '꿀캠', '반디뷰', '무료다운로드', '윈도우필수프로그램'],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
