import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '애니어그램 무료 테스트 (Enneagram Test) | 9가지 성격 유형 확인하기',
  description: '나의 진짜 성향을 파악할 수 있는 애니어그램 성격 유형 무료 검사 링크 모음입니다. 총 9가지 유형 중 나는 어디에 해당할까? 지금 바로 확인해보세요.',
  keywords: ['애니어그램', '성격유형테스트', '심리테스트', '무료성격검사', '9가지유형', '자기이해'],
};

export default function EnneagramTestPage() {
  const testLinks = [
    {
      id: 1,
      title: '애니어그램 무료검사 (정식버전)',
      desc: '가장 널리 알려진 클래식한 방식의 정밀 애니어그램 테스트입니다.',
      url: 'https://enneagram-app.appspot.com/quest/',
      icon: '🧠',
      tag: '정밀검사',
    },
    {
      id: 2,
      title: 'AI 인공지능 애니어그램 테스트',
      desc: 'AI 분석을 통해 더 빠르고 정확하게 나의 성격 유형을 도출합니다.',
      url: 'http://aiselftest.com/enneagram/',
      icon: '🤖',
      tag: 'AI분석',
    },
    {
      id: 3,
      title: '글로벌 성격 유형 검사 (Ko)',
      desc: '전 세계적으로 사용되는 글로벌 기준의 애니어그램 한국어 버전입니다.',
      url: 'https://enneagram-personality.com/ko/',
      icon: '🌍',
      tag: '글로벌표준',
    },
    {
      id: 4,
      title: '테스트모아 애니어그램 검사',
      desc: '쉽고 간결한 문항으로 구성되어 누구나 부담 없이 시도해볼 수 있습니다.',
      url: 'https://testmoa.com/enneagram-test/',
      icon: '✨',
      tag: '간편검사',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-['Pretendard'] py-20 px-4 flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full max-w-4xl text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-64 h-64 bg-indigo-100/50 blur-3xl rounded-full -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-white rounded-3xl shadow-lg border border-slate-100 mb-8 transform hover:scale-110 transition-transform duration-500">
          <span className="text-5xl">☸️</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-8 leading-tight text-slate-900">
          애니어그램 <span className="text-indigo-600 underline decoration-wavy decoration-indigo-200 underline-offset-8">무료 테스트</span>
        </h1>
        <p className="text-slate-500 font-bold text-lg sm:text-xl max-w-2xl mx-auto break-keep leading-relaxed italic border-x-2 border-slate-200 px-6">
          &quot;나는 누구인가?&quot; 에 대한 9가지 대답 <br />
          검증된 애니어그램 테스트를 통해 당신의 내면 세계와 <br className="hidden sm:block" />
          잠재된 성격 유형을 깊이 있게 탐구해보세요.
        </p>
      </div>

      {/* Test Selection Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {testLinks.map((test) => (
          <Link
            key={test.id}
            href={test.url}
            className="group bg-white rounded-[2.5rem] p-8 sm:p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-[5rem] group-hover:w-40 group-hover:h-40 transition-all duration-700 -z-0"></div>
            
            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                {test.tag}
              </div>
              
              <div className="flex items-center gap-5 mb-6">
                <div className="text-4xl group-hover:scale-125 transition-transform duration-300">
                  {test.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {test.title}
                </h3>
              </div>
              
              <p className="text-slate-500 font-medium leading-relaxed mb-10 break-keep">
                {test.desc}
              </p>
              
              <div className="flex items-center text-indigo-600 font-black text-lg group-hover:translate-x-2 transition-transform">
                테스트 시작하기
                <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 5l7 7-7 7M5 12h14" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Guide Section */}
      <div className="w-full max-w-4xl">
        <div className="bg-slate-900 rounded-[3rem] p-10 sm:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-10 border-b border-white/10 pb-6 flex items-center gap-4">
              <span className="text-indigo-400">ℹ️</span> 애니어그램이란?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-300 font-medium leading-relaxed break-keep">
              <div className="space-y-4">
                <strong className="text-white text-xl block mb-2">인간 이해의 9가지 도구</strong>
                애니어그램은 사람을 9가지 기본적인 성격 유형으로 분류하는 자기이해 도구입니다. 단순히 행동을 분류하는 것을 넘어, 우리의 사고방식과 감정의 원인을 파악하게 해줍니다.
              </div>
              <div className="space-y-4">
                <strong className="text-white text-xl block mb-2">성장을 위한 나침반</strong>
                나의 유형을 아는 것은 끝이 아니라 시작입니다. 각 유형이 가진 장점을 극대화하고 약점을 보완하며 더 성숙한 인격으로 성장하는 방향을 제시합니다.
              </div>
            </div>

            <div className="mt-12 p-8 bg-white/5 rounded-3xl border border-white/10">
                <p className="text-sm text-slate-400 font-bold mb-4">📢 테스트 시 유의사항</p>
                <ul className="text-sm space-y-2 text-slate-400">
                    <li>• 최대한 솔직하고 직관적으로 답변하는 것이 중요합니다.</li>
                    <li>• &quot;내가 되고 싶은 모습&quot; 보다는 &quot;평소의 내 모습&quot;을 기준으로 선택하세요.</li>
                    <li>• 검사 결과는 참고용이며, 스스로에 대한 깊은 사색이 동반될 때 더욱 가치 있습니다.</li>
                </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-slate-400 text-sm font-semibold tracking-wider">
        © 2026 ENNEAGRAM INSIGHT HUB.
      </footer>
    </div>
  );
}
