import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "무명전설 국민의 선택 | 투표 안내",
  description: "무명전설 국민의 선택 투표 페이지입니다. 전설을 향한 마지막 관문, 여러분의 소중한 한 표를 행사하세요.",
  keywords: ["무명전설", "국민의 선택", "투표", "전설의 시작", "팬투표"],
  openGraph: {
    title: "무명전설 국민의 선택 | 투표 안내",
    description: "전설을 결정하는 단 하나의 선택, 무명전설 국민의 선택 투표에 참여하세요.",
    images: [{ url: '/legend.png' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function VoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
    </section>
  );
}
