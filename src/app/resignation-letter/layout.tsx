import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '사직서 양식 무료 다운로드 | HWP, PDF 표준 서식 및 작성 가이드',
    description: '깔끔하고 전문적인 표준 사직서 양식입니다. HWP(한글) 및 PDF 파일 무료 다운로드와 함께 사직서 작성 시 유의사항 및 퇴사 절차 가이드를 확인하세요.',
    keywords: ['사직서', '사직서양식', '사직서다운로드', '무료사직서', '퇴사절차', '표준사직서', '사직서작성법', 'HWP사직서', 'PDF사직서'],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
