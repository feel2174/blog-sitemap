import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '비교견적서 양식 무료 다운로드 | HWP, PDF 표준 서식',
    description: '공공기관 및 기업 제출용으로 적합한 표준 비교견적서 양식입니다. HWP(한글) 및 PDF 파일로 제공되니 용도에 맞게 다운로드하세요.',
    keywords: ['비교견적서', '비교견적서양식', '견적서다운로드', '무료양식', 'HWP견적서', 'PDF견적서', '공공기관견적서'],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
