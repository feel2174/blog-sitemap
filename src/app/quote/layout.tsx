import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '깔끔한 견적서 양식 무료 다운로드 | 엑셀, 한글, 워드, PDF',
    description: '비즈니스 실무에서 바로 사용 가능한 깔끔한 견적서 양식입니다. 엑셀, 한글, 워드, PDF 등 다양한 포맷을 무료로 다운로드하세요.',
    keywords: ['견적서', '견적서양식', '엑셀견적서', '한글견적서', '워드견적서', '무료다운로드', '표준서식', '비즈니스양식'],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
