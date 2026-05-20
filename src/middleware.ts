import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 미들웨어 메인 함수
export function middleware(request: NextRequest) {
  // 현재는 별도의 로직이 없다면 next()를 반환합니다.
  // 추후 로그인 체크나 리다이렉션 로직을 이곳에 추가할 수 있습니다.
  return NextResponse.next();
}

// 미들웨어가 실행될 경로를 설정하는 부분
export const config = {
  matcher: [
    /*
     * 아래 경로들을 제외한 모든 요청에 대해 미들웨어를 실행합니다:
     * - api (API 라우트)
     * - _next/static (정적 파일)
     * - _next/image (이미지 최적화 파일)
     * - favicon.ico, sitemap.xml, robots.txt (메타데이터 파일)
     * - 각종 정적 이미지 및 폰트 파일 확장자 (svg, png, jpg, jpeg, gif, webp, avif, ico, woff, woff2, eot, ttf, otf)
     */
    '/((?!api|_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|woff|woff2|eot|ttf|otf)).*)',
  ],
};
