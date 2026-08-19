import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '전국 KTX 기차표 예매 및 열차 시간표 조회 | 코레일 승차권 예약',
    description: '코레일(Korail) 공식 홈페이지를 통한 전국 KTX, ITX-마음/새마을, 무궁화호 기차표 실시간 예매 및 최신 열차 시간표 조회를 편리하게 이용하세요.',
    keywords: ['기차표예매', 'KTX예매', 'KTX시간표', '코레일기차표예매', '코레일톡', '기차시간표조회', '열차예매', '승차권예약', '코레일예매'],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
