import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "정부 지원금 & 환급 한눈에 보기 | 블로그 사이트맵",
  description: "2026년 민생회복 지원금, 소비쿠폰, 세금 환급 등 정부 혜택 정보를 카테고리별로 정리한 사이트맵. 실제 받을 수 있는 지원금과 환급 정보를 한눈에 확인하세요.",
  keywords: [
    "정부 지원금", "민생회복 지원금", "소비쿠폰", "세금 환급", 
    "양육비 선지급제", "활력보험지원금", "차상위계층", "소상공인 지원",
    "금융 투자", "제품 리뷰", "건강 웰빙", "기술 IT", "라이프스타일"
  ],
  authors: [{ name: "zucca100" }],
  creator: "zucca100",
  publisher: "zucca100",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zucca100.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "정부 지원금 & 환급 한눈에 보기 | 블로그 사이트맵",
    description: "2026년 민생회복 지원금, 소비쿠폰, 세금 환급 등 정부 혜택 정보를 카테고리별로 정리한 사이트맵",
    url: 'https://zucca100.com',
    siteName: 'zucca100 블로그',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '정부 지원금 & 환급 한눈에 보기',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "정부 지원금 & 환급 한눈에 보기 | 블로그 사이트맵",
    description: "2026년 민생회복 지원금, 소비쿠폰, 세금 환급 등 정부 혜택 정보를 카테고리별로 정리한 사이트맵",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
      </head>
      <body className={inter.className}>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9196149361612087"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
