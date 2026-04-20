import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SBTI 무료 테스트 | 나의 성적 행동 유형 확인하기 (Sexual Behavior Type Indicator)',
  description: '나의 성격과 행동 패턴을 통해 분석하는 SBTI 유형 테스트입니다. 16가지 유형 중 나는 어떤 유형에 해당할까? 지금 바로 확인해보세요.',
  keywords: ['SBTI', '성적행동유형', '심리테스트', '무료테스트', '성격유형', '자기이해', 'MBTI'],
};

export default function SBTIPage() {
  const testUrl = 'https://sbti-test.com/ko/';

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-['Pretendard'] py-20 px-4 flex flex-col items-center">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-900/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Header Section */}
      <div className="w-full max-w-4xl text-center mb-16 relative z-10">
        <div className="inline-flex items-center justify-center p-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-2xl shadow-purple-500/20 mb-8 transform hover:scale-110 transition-transform duration-500">
          <span className="text-5xl">🔮</span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-8 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
            SBTI
          </span>
          <br />
          무료 테스트
        </h1>
        <p className="text-slate-400 font-medium text-lg sm:text-2xl max-w-2xl mx-auto break-keep leading-relaxed border-l-4 border-pink-500/50 pl-6 text-left sm:text-center">
          단순한 재미를 넘어선 나의 심층적인 행동 패턴 분석! <br />
          나도 몰랐던 나의 진짜 유형을 <br className="hidden sm:block" />
          가장 인기 있는 SBTI 테스트를 통해 확인해보세요.
        </p>
      </div>

      {/* Main Action Section */}
      <div className="w-full max-w-2xl relative z-10 mb-20">
        <Link
          href={testUrl}
          className="group block relative p-1 rounded-[2.5rem] bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:shadow-[0_0_50px_rgba(236,72,153,0.3)] transition-all duration-500 active:scale-95"
        >
          <div className="bg-[#1e293b] rounded-[2.4rem] p-10 sm:p-14 text-center">
            <div className="flex flex-col items-center gap-6">
              <div className="text-6xl group-hover:animate-bounce transition-all duration-300">
                🚀
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-black mb-4 group-hover:text-pink-400 transition-colors">
                  SBTI 테스트 시작하기
                </h3>
                <p className="text-slate-400 text-lg mb-8">
                  약 3분 소요 | 16가지 정밀 유형 결과
                </p>
              </div>
              
              <div className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-xl font-black shadow-xl group-hover:px-14 transition-all duration-300 flex items-center gap-3">
                검사 하러가기
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 5l7 7-7 7M5 12h14" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Info Section */}
      <div className="w-full max-w-4xl relative z-10">
        <div className="bg-slate-800/50 backdrop-blur-xl border border-white/5 rounded-[3rem] p-10 sm:p-16">
          <h3 className="text-3xl font-black mb-12 flex items-center gap-4 border-b border-white/10 pb-6">
            <span className="text-pink-400">✨</span> SBTI란 무엇인가요?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-300 font-medium leading-relaxed break-keep text-lg">
            <div className="space-y-4">
              <strong className="text-white text-2xl block mb-2 underline decoration-pink-500/30 underline-offset-4">성격과 행동의 결합</strong>
              SBTI는 MBTI의 분석 체계를 기반으로 개인의 성적 취향과 행동 양식을 16가지 유형으로 분류한 흥미로운 심리 도구입니다.
            </div>
            <div className="space-y-4">
              <strong className="text-white text-2xl block mb-2 underline decoration-purple-500/30 underline-offset-4">자신에 대한 탐구</strong>
              상대방과의 조화뿐만 아니라 본인 스스로가 어떤 성향을 가지고 있는지 객관적인 지표를 통해 확인해볼 수 있는 기회를 제공합니다.
            </div>
          </div>

          
        </div>
      </div>

      {/* Promotion Action Section */}
      <div className="w-full max-w-xl relative z-10 mt-12">
        <Link
          href="https://link.coupang.com/a/es9HQ8"
          className="group flex flex-col items-center gap-4 p-8 bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-md border border-pink-500/30 rounded-[2.5rem] hover:bg-gradient-to-r hover:from-purple-900/60 hover:to-pink-900/60 transition-all duration-300 shadow-xl"
        >
          <div className="text-center">
            <h4 className="text-xl sm:text-2xl font-black text-white mb-2">
              🔮 우리 사이 더 특별하게!
            </h4>
            <p className="text-pink-300/80 font-bold text-lg">
              커플 필수템 대화카드 & 밸런스 게임 확인하기
            </p>
          </div>
          <div className="flex items-center gap-2 text-white/50 group-hover:text-pink-400 transition-colors">
            <span>추천 제품 보러가기</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7-7 7M5 19l7-7-7-7" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-slate-500 text-sm font-semibold tracking-wider">
        © 2026 SBTI INSIGHT HUB. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
