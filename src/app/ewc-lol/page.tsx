import { Metadata } from 'next';
import EwcLolContent from '@/components/EwcLolContent';

export const metadata: Metadata = {
  title: 'Esports World Cup LoL 중계 및 경기 일정 | 네이버 e스포츠',
  description: '사우디 e스포츠 월드컵(EWC) 리그 오브 레전드 경기 일정과 중계 정보. Road to EWC의 한화생명e스포츠, T1, Dplus Kia 등의 매치업을 실시간으로 확인하세요.',
  keywords: ['EWC', 'e스포츠월드컵', '롤중계', '리그오브레전드', 'T1', '한화생명e스포츠', 'RoadtoEWC', 'DplusKia', '네이버e스포츠'],
  openGraph: {
    title: 'Esports World Cup LoL 중계 안내',
    description: '사우디 EWC 리그 오브 레전드 생중계 및 매치업 일정 확인하기',
    images: ['/ewc-lol-bg.png'],
  }
};

export default function EwcLolPage() {
  return <EwcLolContent />;
}
