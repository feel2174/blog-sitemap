import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "오늘의 날씨 정보 및 기상청 날씨누리 바로가기 | 전국 동네 예보",
  description: "기상청 날씨누리 메인, 전국 동네 예보, 기상 특보 등 오늘의 날씨 정보를 한눈에 확인하세요. 실제 일기예보 바로가기 링크를 제공합니다.",
  keywords: ["날씨", "오늘의날씨", "기상청", "날씨누리", "동네예보", "일기예보", "기상특보"],
};

export default function WeatherPage() {
  const weatherLinks = [
    {
      title: "기상청 날씨누리 메인",
      description: "오늘의 날씨 정보와 전국 기상 상황을 한눈에 확인하세요.",
      url: "https://www.weather.go.kr/w/index.do",
      icon: "🌤️",
      color: "bg-blue-500",
    },
    {
      title: "전국 동네 예보",
      description: "내가 사는 동네의 시간별 상세 예보를 확인해보세요.",
      url: "https://www.weather.go.kr/w/wnuri-fct2021/main/current-weather.do",
      icon: "🏠",
      color: "bg-emerald-500",
    },
    {
      title: "기상 특보 현황",
      description: "호우, 태풍, 강풍 등 실시간 기상 특보 발령 상황입니다.",
      url: "https://www.weather.go.kr/w/status/warning.do",
      icon: "⚠️",
      color: "bg-amber-500",
    },
    {
      title: "위성 및 레이더 영상",
      description: "구름의 이동과 비구름의 위치를 실시간 영상으로 확인하세요.",
      url: "https://www.weather.go.kr/w/image/vshpmrt.do",
      icon: "📡",
      color: "bg-indigo-500",
    },
    {
      title: "전국 실시간 황사 지도",
      description: "현재 미세먼지 수치와 황사 이동 경로를 확인하세요.",
      url: "https://zucca100.com/yellow-dust",
      icon: "🏜️",
      color: "bg-orange-500",
      internal: true,
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-['Pretendard'] text-slate-900 pb-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 py-24 px-4 overflow-hidden border-b border-white/10 shadow-2xl">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-24 -translate-x-24 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mb-8 shadow-xl border border-white/30 animate-bounce">
            <span className="text-4xl text-white">🌤️</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 drop-shadow-sm tracking-tight">
            오늘의 <span className="text-blue-200">날씨</span> 정보
          </h1>
          <p className="text-blue-100/80 text-lg sm:text-xl max-w-2xl font-medium leading-relaxed">
            기상청 날씨누리 공식 정보와 동네 예보를 <br className="hidden sm:block" /> 빠르고 정확하게 확인하실 수 있도록 연결해 드립니다.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto -mt-12 px-4 relative z-20">
        <div className="grid gap-6">
          {weatherLinks.map((link, idx) => (
            <Link 
              key={idx}
              href={link.url}
              className="group flex flex-col sm:flex-row items-center gap-6 p-8 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white hover:border-blue-200 hover:shadow-[0_40px_80px_rgba(37,99,235,0.1)] transition-all duration-500 hover:-translate-y-1.5"
            >
              <div className={`w-20 h-20 shrink-0 ${link.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-black/5 group-hover:scale-110 transition-transform duration-500`}>
                {link.icon}
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {link.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {link.description}
                </p>
              </div>
              <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 group-hover:bg-blue-50 group-hover:text-blue-500 transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M5 19l7-7-7-7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center">
            <p className="text-slate-400 text-sm font-medium">
              본 서비스는 기상청 공식 정보를 보다 쉽게 접근하기 위해 제공되는 링크 안내 페이지입니다. <br />
              정확한 기상 발령 사항은 반드시 기상청 날씨누리 홈페이지를 참고해 주세요.
            </p>
        </div>
      </div>
    </div>
  );
}
