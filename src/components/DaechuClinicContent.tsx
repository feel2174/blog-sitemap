'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoupangAds from '@/components/CoupangAds';
import Image from 'next/image';

const LINKS = [
  {
    name: '경주 대추밭백한의원 예약하러가기',
    url: 'http://daechuhani.co.kr/',
    description: '건강한 임신을 위한 첫걸음! 지금 바로 온라인으로 진료 예약을 진행하세요.',
    icon: '🌿',
    color: 'from-emerald-500 to-teal-600'
  }
];

export default function DaechuClinicContent() {
  return (
    <div className="min-h-screen bg-slate-50 font-['Pretendard']">
      <Header />
      
      <main className="pb-20">
        {/* Hero Section */}
        <div className="relative h-[250px] sm:h-[500px] overflow-hidden">
          <Image 
            src="/daechu_clinic_bg.png"
            alt="경주 대추밭백한의원 배너"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 sm:pb-12 px-4 text-center">
            <span className="px-3 py-1 sm:px-4 sm:py-1.5 bg-emerald-500 text-white rounded-full text-xs sm:text-sm font-black mb-4 sm:mb-6 animate-bounce shadow-lg shadow-emerald-500/30">
              나는솔로 29기 영철♥정숙 방문 📺
            </span>
            <h1 className="text-3xl sm:text-6xl font-black text-white mb-3 sm:mb-6 tracking-tight drop-shadow-2xl">
              <span className="text-emerald-400">경주 대추밭백한의원</span> 안내
            </h1>
            <p className="text-slate-200 text-sm sm:text-xl font-bold max-w-2xl break-keep mb-2 sm:mb-0">
              소중한 새 생명을 기다리는 부부를 위한 맞춤 진료! <br className="hidden sm:block" />
              130년 전통의 삼대 한의원에서 건강한 임신을 준비하세요.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 -mt-12 sm:-mt-10 relative z-10">
          {/* Link Grid */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-lg mx-auto">
            {LINKS.map((link, index) => (
              <div 
                key={index}
                className="group bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative flex flex-col"
              >
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${link.color}`}></div>
                <div className="flex flex-col h-full">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="text-5xl group-hover:scale-125 transition-transform duration-500 mb-4">
                      {link.icon}
                    </div>
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                      {link.name}
                    </h3>
                  </div>
                  <p className="text-slate-500 font-medium mb-8 flex-grow leading-relaxed break-keep text-center text-sm">
                    {link.description}
                  </p>
                  <a
                    href={link.url}
                    className={`w-full py-4 rounded-2xl bg-gradient-to-r ${link.color} text-white font-black shadow-lg group-hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-auto`}
                  >
                    바로 이동하기
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Guide Section */}
          <div className="mt-20 bg-slate-900 rounded-[3rem] p-8 sm:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-10 flex items-center gap-4">
                <span className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">ℹ️</span>
                진료 및 예약 안내
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-400 font-medium leading-relaxed break-keep">
                <div className="space-y-4">
                  <h4 className="text-white text-xl font-bold">1. 진료 과목</h4>
                  <p>
                    난임, 불임, 산후조리, 여성 질환 등 부부의 건강한 임신을 돕기 위한 체계적이고 전문적인 한방 치료를 제공합니다.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white text-xl font-bold">2. 예약 방법</h4>
                  <p>
                    대기 시간이 길어질 수 있으므로 방문 전 반드시 홈페이지를 통해 진료 일정을 확인하시고 온라인 예약을 진행해 주시기 바랍니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <CoupangAds 
          keyword="임산부영양제" 
          title="💊 건강한 임신을 위한 필수 영양제"
          hookText="엽산, 철분제 등 임신 준비 기간부터 꼭 챙겨야 할 필수 영양제를 로켓배송으로 만나보세요."
      />

      <Footer />
    </div>
  );
}
