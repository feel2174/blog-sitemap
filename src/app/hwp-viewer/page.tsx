import { Metadata } from 'next';
import HwpViewerContent from '@/components/HwpViewerContent';

export const metadata: Metadata = {
  title: '한글(HWP) 뷰어 무료 다운로드 | Windows, Mac, Android, iOS 공식 버전',
  description: '한컴오피스 한글 뷰어 공식 무료 다운로드 안내. 설치 없이 HWP, HWPX 문서를 원본 서식 그대로 확인하세요. 윈도우, 맥, 모바일 모든 기기 지원.',
  keywords: ['한글뷰어', 'HWP뷰어', '한컴오피스뷰어', '한글뷰어다운로드', '무료한글뷰어', 'HWP파일열기', '한글뷰어Mac', '한글뷰어모바일'],
  openGraph: {
    title: '한글(HWP) 뷰어 무료 다운로드 | 공식 홈페이지 바로가기',
    description: '어떤 기기에서도 한글 문서를 완벽하게! 한컴 공식 뷰어 무료 다운로드 링크를 확인하세요.',
    images: ['/hwp-viewer-bg.png'],
  }
};

export default function HwpViewerPage() {
  return <HwpViewerContent />;
}
