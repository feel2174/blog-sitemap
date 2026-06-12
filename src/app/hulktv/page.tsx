import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

const hulkTvUrl = 'https://www.hulk24.com/index.php';

export const metadata = {
  title: '헐크티비 바로가기 | 실시간 스포츠 중계 안내',
  description:
    '헐크티비 실시간 스포츠 중계 바로가기 페이지입니다. 해외축구, 야구, 농구, 격투기 등 주요 스포츠 중계 접근 링크를 모바일에 최적화해 정리했습니다.',
  keywords: ['헐크티비', '헐크티비 바로가기', '스포츠 중계', '실시간 스포츠 중계', '무료 스포츠 중계'],
  alternates: {
    canonical: '/hulktv',
  },
  openGraph: {
    title: '헐크티비 바로가기',
    description: '헐크티비 실시간 스포츠 중계 링크와 주요 종목별 바로가기를 확인하세요.',
    url: 'https://zucca100.com/hulktv',
    type: 'article',
  },
};

const sportsLinks = [
  {
    icon: 'SOCCER',
    title: '해외축구',
    desc: 'EPL, 라리가',
  },
  {
    icon: 'BASE',
    title: '야구',
    desc: 'MLB, KBO',
  },
  {
    icon: 'BASKET',
    title: '농구',
    desc: 'NBA, KBL',
  },
  {
    icon: 'FIGHT',
    title: '격투기',
    desc: 'UFC, 격투 스포츠',
  },
];

export default function HulkTVPage() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden overflow-y-auto bg-[#090b08] py-6"
      style={{
        fontFamily:
          '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "sans-serif"',
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
 @keyframes hulk-pulse {
 0% { transform: scale(0.98); box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.72); }
 50% { transform: scale(1.02); box-shadow: 0 0 28px 16px rgba(74, 222, 128, 0); }
 100% { transform: scale(0.98); box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
 }
 @keyframes hulk-float {
 0%, 100% { transform: translateY(0); }
 50% { transform: translateY(-10px); }
 }
 @keyframes hulk-glow {
 0%, 100% { text-shadow: 0 0 10px rgba(132, 204, 22, 0.45), 0 0 20px rgba(34, 197, 94, 0.24); }
 50% { text-shadow: 0 0 20px rgba(132, 204, 22, 0.78), 0 0 34px rgba(34, 197, 94, 0.5); }
 }
 .hulk-glass {
 background: rgba(18, 24, 18, 0.72);
 backdrop-filter: blur(12px);
 -webkit-backdrop-filter: blur(12px);
 border: 1px solid rgba(187, 247, 208, 0.12);
 box-shadow: 0 8px 36px 0 rgba(0, 0, 0, 0.58);
 }
 `,
        }}
      />

      <div className="box-border flex w-full max-w-[500px] flex-col gap-6 p-5">
        <div className="mb-2 mt-4 text-center" style={{ animation: 'hulk-float 4s ease-in-out infinite' }}>
          <div className="mb-4 inline-block rounded-full border border-[#29412d] bg-[#131a13] px-4 py-1.5">
            <span className="text-[13px] font-[800] tracking-wide text-[#86efac]">LIVE SPORTS STREAMING</span>
          </div>
          <h1 className="m-0 mb-3 text-[36px] font-[900] leading-[1.1] tracking-[-1px] text-white sm:text-[42px]">
            실시간 스포츠 중계
            <br />
            <span
              className="bg-gradient-to-r from-[#a3e635] to-[#22c55e] bg-clip-text text-transparent"
              style={{ animation: 'hulk-glow 2s infinite' }}
            >
              헐크티비
            </span>{' '}
            바로가기
          </h1>
          <p className="m-0 break-keep px-4 text-[15px] font-[500] leading-[1.5] text-[#b7c3b7] sm:text-[16px]">
            해외축구, 야구, 농구, 격투기 등 주요 스포츠 중계를 모바일에서 빠르게 확인할 수 있도록 정리했습니다.
          </p>
        </div>

        <div className="hulk-glass relative flex flex-col gap-4 overflow-hidden rounded-[24px] p-6">
          <div className="pointer-events-none absolute left-[-10%] top-[-50%] h-[120%] w-[120%] bg-[radial-gradient(ellipse_at_center,rgba(132,204,22,0.16)_0%,rgba(0,0,0,0)_70%)]" />

          <div className="relative z-10 mb-2 flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#84cc16] opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#84cc16]" />
            </span>
            <h2 className="text-[20px] font-bold tracking-tight text-white">실시간 중계 시청하기</h2>
          </div>

          <Link
            href={hulkTvUrl}
            className="relative z-10 flex w-full flex-col items-center justify-center rounded-[18px] px-[15px] py-[24px] no-underline transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, #65a30d, #15803d)',
              border: '2px solid #bef264',
              animation: 'hulk-pulse 1.8s infinite',
            }}
          >
            <span
              className="mb-2 flex items-center gap-2 text-[24px] font-[900] tracking-[-1px] text-white"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              헐크티비 공식 바로가기
            </span>
            <span className="rounded-full bg-[rgba(0,0,0,0.22)] px-4 py-1.5 text-[15px] font-[700] text-[rgba(255,255,255,0.95)]">
              최신 접속 주소 확인
            </span>
          </Link>

          <div className="relative z-10 mt-2 grid w-full grid-cols-2 gap-3">
            {sportsLinks.map((item) => (
              <Link
                key={item.title}
                href={hulkTvUrl}
                className="flex w-full flex-col items-center justify-center rounded-[14px] border border-[#2d3f2f] bg-[#141b14] px-[5px] py-[16px] no-underline transition-colors duration-200 hover:bg-[#1e2a1e]"
              >
                <span className="mb-1 rounded-full bg-[#203820] px-2 py-1 text-[10px] font-[900] tracking-wide text-[#bbf7d0]">
                  {item.icon}
                </span>
                <span className="text-[15px] font-[800] text-white">{item.title}</span>
                <span className="text-[12px] font-[500] text-[#91a391]">{item.desc}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="hulk-glass mt-2 flex items-start gap-3 rounded-[16px] border border-[#273327] px-5 py-4 text-left text-[14px] font-[500] text-[#d1d5db]">
          <span className="text-[18px]">!</span>
          <p className="m-0 break-keep leading-relaxed">
            접속 주소는 운영 상황에 따라 변경될 수 있습니다. 연결이 원활하지 않을 경우 공식 바로가기 버튼을 통해
            최신 주소를 확인하세요.
          </p>
        </div>

        <CoupangAds
          keyword="스포츠 용품"
          title="응원과 시청을 위한 스포츠 아이템"
          hookText="헐크티비로 스포츠 중계를 볼 때 함께 준비하기 좋은 응원용품, 편의용품, 운동 관련 아이템을 확인해보세요."
        />
      </div>
    </div>
  );
}
