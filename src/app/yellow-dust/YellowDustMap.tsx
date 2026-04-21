"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import { Map, CustomOverlayMap } from "react-kakao-maps-sdk";
import CoupangAds from "@/components/CoupangAds";

// Update the component to fetch from the newly created `/api/yellow-dust` endpoint.
// Let's remove REGION_LOCATIONS since the API route returns lat/lng.
interface DustData {
  sidoName: string;
  pm10Value: number;
  dataTime: string;
  lat: number;
  lng: number;
}

export default function YellowDustMapPage() {
  const [kakaoLoaded, setKakaoLoaded] = useState(false);
  const [dustData, setDustData] = useState<DustData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<DustData | null>(null);

  // KAKAO App Key for script loading (Using environment variable, fallback to dummy)
  // For actual use, the user must set NEXT_PUBLIC_KAKAO_APP_KEY in their .env
  const KAKAO_APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY || "app_key_placeholder";

  useEffect(() => {
    // Fetch actual KMA data from our internal Next.js API route
    const fetchDustData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch("/api/yellow-dust");
        const json = await res.json();
        
        if (json.success && json.data) {
          setDustData(json.data);
        } else {
          setError(json.error || "데이터를 불러오는 중 오류가 발생했습니다.");
          console.error("Failed to fetch yellow dust data", json);
        }
      } catch (error) {
        setError("인터넷 연결을 확인하거나 잠시 후 다시 시도해주세요.");
        console.error("Dust data fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDustData();
  }, []);

  const getDustStatusInfo = (value: number) => {
    if (value <= 30) return { label: "좋음", color: "bg-blue-500", dot: "bg-blue-500", text: "text-blue-500", hex: "#3b82f6" };
    if (value <= 80) return { label: "보통", color: "bg-green-500", dot: "bg-green-500", text: "text-green-500", hex: "#22c55e" };
    if (value <= 150) return { label: "나쁨", color: "bg-orange-500", dot: "bg-orange-500", text: "text-orange-500", hex: "#f97316" };
    return { label: "매우나쁨", color: "bg-red-500", dot: "bg-red-500", text: "text-red-500", hex: "#ef4444" };
  };

  return (
    <div className="min-h-screen bg-neutral-900 font-['Pretendard']">
      {/* Kakao Map Script loader */}
      {KAKAO_APP_KEY !== "app_key_placeholder" && (
        <Script
          strategy="lazyOnload"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&autoload=false`}
          onLoad={() => {
            window.kakao.maps.load(() => {
              setKakaoLoaded(true);
            });
          }}
        />
      )}

      {/* Header Section */}
      <div className="pt-20 pb-8 px-4 text-center z-10 relative">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
          실시간 전국 황사 지도
        </h1>
        <p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto">
          기상청 (에어코리아) 공공데이터와 카카오맵을 활용하여 전국 실시간 대기 오염 수준을 제공합니다.
        </p>
      </div>

      {/* Main Map Container */}
      <div className="max-w-6xl mx-auto px-4 pb-20 relative">
        
        {/* Status Legend */}
        <div className="flex justify-center gap-4 md:gap-8 mb-6 lg:mb-8 flex-wrap">
          {[
            { label: '좋음 (0~30)', style: 'bg-blue-500' },
            { label: '보통 (31~80)', style: 'bg-green-500' },
            { label: '나쁨 (81~150)', style: 'bg-orange-500' },
            { label: '매우나쁨 (151~)', style: 'bg-red-500' }
          ].map((item, id) => (
            <div key={id} className="flex items-center gap-2 bg-neutral-800/80 px-4 py-2 rounded-full backdrop-blur-sm border border-neutral-700/50">
              <div className={`w-3 h-3 rounded-full ${item.style}`}></div>
              <span className="text-sm font-medium text-neutral-300">{item.label}</span>
            </div>
          ))}
        </div>
        
        {/* Call to Action Button */}
        <div className="flex justify-center mb-8">
          <Link 
            href="https://zucca100.com/weather/"
            className="group relative flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold text-lg shadow-lg shadow-emerald-900/20 transition-all hover:-translate-y-1 active:scale-95"
          >
            <span>기상청 날씨누리 바로가기</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7M5 19l7-7-7-7" />
            </svg>
          </Link>
        </div>

        <CoupangAds 
          keyword="KF94 마스크" 
          title="⚠️ 미세먼지·황사 완벽 차단!"
          hookText="오늘 공기 질이 좋지 않네요. 우리 가족 호흡기 건강을 위한 최적의 KF94 마스크 & 공기청정기 추천 리스트입니다."
        />

        {/* Error Message Display */}
        {error && (
          <div className="mb-8 p-4 bg-red-900/20 border border-red-500/50 rounded-2xl text-center">
            <p className="text-red-400 font-medium">⚠️ {error}</p>
          </div>
        )}

        {/* The Map */}
        <div className="w-full h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-neutral-700/50 relative bg-neutral-800 flex items-center justify-center">
          
          {KAKAO_APP_KEY === "app_key_placeholder" ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-900/90 text-center p-6 z-50">
              <div className="w-16 h-16 mb-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">카카오맵 API 키가 필요합니다.</h2>
              <p className="text-neutral-400 max-w-md mx-auto mb-6">
                .env 파일에 NEXT_PUBLIC_KAKAO_APP_KEY를 추가하거나 소스코드 내에서 API 키를 설정해주세요. (카카오 디벨로퍼스에서 발급 가능)
              </p>
              <div className="bg-neutral-800 p-4 rounded-lg text-left text-sm text-emerald-400 font-mono w-full max-w-md">
                <p>NEXT_PUBLIC_KAKAO_APP_KEY=여러분의_키</p>
                <p>NEXT_PUBLIC_KMA_API_KEY=에어코리아_API_키</p>
              </div>
            </div>
          ) : !kakaoLoaded ? (
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-neutral-400">카카오맵을 불러오는 중입니다...</p>
            </div>
          ) : (
            <Map
              center={{ lat: 36.3504, lng: 127.3845 }} // 대전을 중심 좌표로
              style={{ width: "100%", height: "100%" }}
              level={12} // 전국이 보이도록 레벨 조정
            >
              {!isLoading && dustData.map((data, idx) => {
                const position = { lat: data.lat, lng: data.lng };
                const info = getDustStatusInfo(data.pm10Value);

                return (
                  <CustomOverlayMap
                    key={`dust-${idx}`}
                    position={position}
                    yAnchor={1} // 오버레이의 위치를 조정
                  >
                    <div 
                      className="group cursor-pointer transform hover:scale-110 transition-all duration-300"
                      onClick={() => setSelectedRegion(data)}
                    >
                      <div className={`relative flex flex-col items-center p-2 bg-neutral-900/80 backdrop-blur-md border border-neutral-700/50 rounded-2xl shadow-xl hover:shadow-${info.label === '좋음' ? 'blue' : info.label === '보통' ? 'green' : info.label === '나쁨' ? 'orange' : 'red'}-500/20`}>
                        <div className="text-xs font-semibold text-white mb-1">{data.sidoName}</div>
                        <div className={`text-xl font-black ${info.text}`}>
                          {data.pm10Value}
                        </div>
                        <div className={`mt-1 text-[10px] px-2 py-0.5 rounded-full text-white font-medium ${info.color}`}>
                          {info.label}
                        </div>
                        
                        {/* Selected Indicator */}
                        {selectedRegion?.sidoName === data.sidoName && (
                          <div className="absolute -inset-1 border-2 border-white rounded-2xl animate-pulse pointer-events-none"></div>
                        )}
                        
                        {/* Triangle pointing down */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-neutral-900/80"></div>
                      </div>
                    </div>
                  </CustomOverlayMap>
                );
              })}
            </Map>
          )}

          {/* Loading data overlay */}
          {isLoading && kakaoLoaded && KAKAO_APP_KEY !== "app_key_placeholder" && (
             <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm z-30 flex items-center justify-center flex-col">
               <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mb-4"></div>
               <p className="text-white font-medium drop-shadow-md">기상청(에어코리아) 실시간 대기 오염 정보 연동 중...</p>
             </div>
          )}
        </div>
        
        {/* Detail Panel */}
        <div className={`mt-6 p-6 rounded-3xl bg-neutral-800 border border-neutral-700/50 backdrop-blur-sm transition-all duration-500 transform ${selectedRegion ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none hidden'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {selectedRegion?.sidoName} 대기 분석 리포트
              </h3>
              <p className="text-neutral-400 text-sm">
                기준 시각: {selectedRegion ? selectedRegion.dataTime : '-'}
              </p>
            </div>
            
            {selectedRegion && (
              <div className="flex w-full md:w-auto items-center gap-6 bg-neutral-900/50 p-4 rounded-2xl border border-neutral-700/50">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-neutral-400 mb-1">PM10 (미세먼지/황사)</span>
                  <div className="flex items-end gap-2">
                    <span className={`text-4xl font-black ${getDustStatusInfo(selectedRegion.pm10Value).text}`}>
                      {selectedRegion.pm10Value}
                    </span>
                    <span className="text-neutral-500 text-sm mb-1 pb-1">µg/m³</span>
                  </div>
                </div>
                
                <div className="w-px h-12 bg-neutral-700"></div>
                
                <div className="flex flex-col items-center">
                  <span className="text-sm text-neutral-400 mb-1">상태</span>
                  <div className={`px-4 py-1.5 rounded-full text-white font-bold text-sm shadow-lg ${getDustStatusInfo(selectedRegion.pm10Value).color}`}>
                    {getDustStatusInfo(selectedRegion.pm10Value).label}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
