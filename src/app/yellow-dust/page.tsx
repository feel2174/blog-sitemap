import { Metadata } from "next";
import YellowDustMap from "./YellowDustMap";

export const metadata: Metadata = {
  title: "실시간 전국 황사 미세먼지 지도 | 우리 지역 대기질 정밀 조회",
  description: "기상청 APIHub와 카카오맵을 연동한 실시간 전국 황사·미세먼지(PM10) 지도입니다. 대전, 세종, 청주 등 전국 거점 도시의 대기 상태를 실시간으로 확인하세요.",
  keywords: ["황사", "미세먼지", "실시간지도", "기상청", "카카오맵", "대기질", "PM10"],
  openGraph: {
    title: "실시간 전국 황사 미세먼지 지도 | 우리 지역 대기질 정밀 조회",
    description: "전국 주요 도시의 황사 및 미세먼지 수치를 실시간 지도로 확인하세요.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <YellowDustMap />;
}
