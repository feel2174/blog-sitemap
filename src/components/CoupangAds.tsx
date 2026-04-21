"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Product {
  productId: number;
  productName: string;
  productPrice: number;
  productImage: string;
  productUrl: string;
}

interface CoupangAdsProps {
  keyword: string;
  title?: string;
  hookText?: string;
}

export default function CoupangAds({ keyword, title, hookText }: CoupangAdsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`/api/coupang/search?keyword=${encodeURIComponent(keyword)}`);
        const json = await res.json();
        if (json.success) {
          setProducts(json.data);
        }
      } catch (error) {
        console.error("Ads fetch failed", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [keyword]);

  if (loading) return (
    <div className="w-full py-10 flex justify-center">
      <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
  
  if (products.length === 0) return null;

  return (
    <div className="my-16 w-full max-w-5xl mx-auto px-4">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-neutral-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-bold">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              실시간 최저가 추천
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight">
              {title || `${keyword} 관련 인기 상품`}
            </h2>
            <p className="text-neutral-500 font-medium break-keep">
              {hookText || "품절 주의! 지금 가장 많이 찾는 실시간 랭킹 제품입니다."}
            </p>
          </div>
          <button className="text-neutral-400 font-bold hover:text-orange-500 transition-colors flex items-center gap-1 group">
            더보기 <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((p) => (
            <a 
              key={p.productId} 
              href={p.productUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col bg-neutral-50 rounded-3xl overflow-hidden border border-transparent hover:border-orange-200 transition-all hover:bg-white hover:shadow-xl"
            >
              <div className="relative aspect-square w-full bg-white overflow-hidden">
                <Image 
                  src={p.productImage} 
                  alt={p.productName} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-sm font-bold text-neutral-800 line-clamp-2 mb-2 min-h-[40px]">
                  {p.productName}
                </h3>
                <div className="mt-auto">
                  <div className="text-orange-600 font-black text-lg">
                    {p.productPrice.toLocaleString()}원
                  </div>
                  <div className="mt-2 py-2 w-full bg-orange-100/50 text-orange-700 text-xs text-center font-bold rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    구매하기
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <p className="mt-8 text-[10px] text-neutral-400 text-center">
          &quot;이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.&quot;
        </p>
      </div>
    </div>
  );
}
