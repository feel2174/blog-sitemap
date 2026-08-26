import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '다음 팟인코더 & 팟플레이어 다운로드 (최신버전 / 구버전)',
    description: '다음 팟인코더(구버전 DTS 지원) 및 다음 팟플레이어(최신버전, 광고 없는 구버전) 무료 다운로드 링크와 상세 설치 가이드를 제공합니다.',
    keywords: ['다음팟인코더', '다음팟플레이어', '팟인코더구버전', '팟플레이어구버전', '팟플레이어최신버전', '다음팟인코더다운로드', '동영상인코더', '동영상플레이어', 'PotPlayer', 'PotEncoder'],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
