'use client';

import { useEffect } from 'react';

interface AdSenseProps {
  adSlot: string;
  adFormat?: 'auto' | 'fluid';
  style?: React.CSSProperties;
  className?: string;
}

export default function AdSense({ 
  adSlot, 
  adFormat = 'auto', 
  style = {}, 
  className = '' 
}: AdSenseProps) {
  useEffect(() => {
    try {
      // AdSense가 로드되었는지 확인
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        (window as any).adsbygoogle.push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9196149361612087"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}

// 특정 위치에 광고를 배치하는 컴포넌트들
export function HeaderAd() {
  return (
    <div className="w-full bg-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <AdSense 
          adSlot="1234567890" // 실제 광고 슬롯 ID로 변경 필요
          className="text-center"
        />
      </div>
    </div>
  );
}

export function SidebarAd() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <AdSense 
        adSlot="0987654321" // 실제 광고 슬롯 ID로 변경 필요
        className="text-center"
      />
    </div>
  );
}

export function FooterAd() {
  return (
    <div className="w-full bg-gray-100 py-4 mt-8">
      <div className="max-w-7xl mx-auto px-4">
        <AdSense 
          adSlot="1122334455" // 실제 광고 슬롯 ID로 변경 필요
          className="text-center"
        />
      </div>
    </div>
  );
}

export function InContentAd() {
  return (
    <div className="my-8 text-center">
      <AdSense 
        adSlot="5566778899" // 실제 광고 슬롯 ID로 변경 필요
        className="inline-block"
      />
    </div>
  );
} 