import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
import TaboolaWidgets from "@/components/TaboolaWidgets";
import "./globals.css";

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
  metadataBase: new URL('https://plus.zucca100.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "정부 지원금 & 환급 한눈에 보기 | 블로그 사이트맵",
    description: "2026년 민생회복 지원금, 소비쿠폰, 세금 환급 등 정부 혜택 정보를 카테고리별로 정리한 사이트맵",
    url: 'https://plus.zucca100.com',
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
    other: {
      'naver-site-verification': '49cd45a393c108009ed3408790b090fb5a69a8a6',
    },
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
  var PUBLISHER_ID = 'zucca-network';
  var PAGE_TYPE = 'article';

  var LOADER_URL = '//cdn.taboola.com/libtrc/' + PUBLISHER_ID + '/loader.js';
  var LOADER_PRIVACY_URL = '//static.tblcontent.com/libtrc/' + PUBLISHER_ID + '/loader.privacy.js';
  var PIXEL_URL = 'https://static.qovani.com/libtrc/tr5?type=pixel&publisher=' + PUBLISHER_ID;
  var SCRIPT_ID = 'tb_loader_script';

  window._taboola = window._taboola || [];

  var pageTypePush = {};
  pageTypePush[PAGE_TYPE] = 'auto';
  _taboola.push(pageTypePush);

  new Image().src = PIXEL_URL;

  var firstScript = document.getElementsByTagName('script')[0];

  function injectLoader(id, src, fallbackSrc) {
    if (document.getElementById(id)) return;
    var s = document.createElement('script');
    s.async = true;
    s.src = src;
    s.id = id;
    if (fallbackSrc) {
      s.onerror = function () {
        if (s.parentNode) s.parentNode.removeChild(s);
        injectLoader(SCRIPT_ID + '_fb', fallbackSrc, null);
      };
    }
    firstScript.parentNode.insertBefore(s, firstScript);
  }

  injectLoader(SCRIPT_ID, LOADER_URL, LOADER_PRIVACY_URL);

  if (window.performance && typeof window.performance.mark === 'function') {
    window.performance.mark('tbl_ic');
  }
})();`,
          }}
        />
      </head>
      <body className="font-['Pretendard']">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YF4WG4NT61"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YF4WG4NT61');
          `}
        </Script>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9196149361612087"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Floating Coupang Logo */}
        <div className="fixed top-4 right-4 z-[9999] pointer-events-none sm:pointer-events-auto">
          <div className="relative w-32 h-14 sm:w-56 sm:h-24 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex items-center justify-center p-3">
            <Image 
              src="/coupang.png" 
              alt="Coupang" 
              width={200} 
              height={80}
              className="object-contain"
              priority
            />
          </div>
        </div>
        {children}
        <TaboolaWidgets />
        <Analytics />
      </body>
    </html>
  );
}
