import { Metadata } from 'next';
import SetlogContent from '@/components/SetlogContent';

export const metadata: Metadata = {
  title: '셋로그(Setlog) 앱 다운로드 및 설치 안내 | 안드로이드, 아이폰 바로가기',
  description: '새로운 소통의 시작, 셋로그(Setlog) 앱을 다운로드하고 설치해보세요. 구글 플레이스토어 및 애플 앱스토어 설치 링크를 제공합니다.',
  keywords: ['셋로그', 'Setlog', '앱다운로드', '셋로그앱', '채팅앱', '소통앱', '안드로이드', '아이폰', '앱설치'],
  openGraph: {
    title: '셋로그(Setlog) 앱 다운로드 및 설치 안내',
    description: '언제 어디서나 즐거운 대화와 소통! 셋로그 앱 다운로드 바로가기.',
  }
};

export default function SetlogPage() {
  return <SetlogContent />;
}
