'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoupangAds from '@/components/CoupangAds';

const LINKS = [
 {
 name: '안드로이드 앱 다운로드',
 url: 'https://play.google.com/store/apps/details?id=com.newchat.setlog&hl=ko',
 description: '구글 플레이스토어에서 셋로그(Setlog) 앱을 설치하고 새로운 소통을 시작하세요.',
 icon: '🤖',
 color: 'from-blue-500 to-indigo-600'
 },
 {
 name: '아이폰 앱 다운로드',
 url: 'https://apps.apple.com/kr/app/setlog/id6587576438',
 description: '앱스토어에서 셋로그(Setlog) 앱을 설치하고 아이폰에서도 편리하게 즐기세요.',
 icon: '🍎',
 color: 'from-slate-700 to-slate-900'
 }
];

export default function SetlogContent() {
 const [showInterstitial, setShowInterstitial] = useState(false);
 const [targetLink, setTargetLink] = useState('');
 const [counter, setCounter] = useState(3);

 const handleLinkClick = (url: string) => {
 window.location.href = url;
    return;
 setCounter(3);
 };

 useEffect(() => {
 let timer: NodeJS.Timeout;
 if (showInterstitial && counter > 0) {
 timer = setTimeout(() => setCounter(counter - 1), 1000);
 }
 return () => clearTimeout(timer);
 }, [showInterstitial, counter]);

 return (
 <div className="min-h-screen bg-slate-50 font-['Pretendard']">
 <Header />
 
 <main className="pb-20">
 {/* Hero Section */}
 <div className="relative h-[400px] sm:h-[450px] overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900">
 <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full mix-blend-screen"></div>
 <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full mix-blend-screen"></div>
 
 <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10">
 <span className="px-5 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-black mb-6 border border-white/20 shadow-xl">
 새로운 소통의 시작 💬
 </span>
 <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">셋로그(Setlog)</span> 다운로드
 </h1>
 <p className="text-blue-100 text-lg sm:text-xl font-medium max-w-2xl break-keep leading-relaxed">
 셋로그 앱을 통해 언제 어디서나 즐거운 대화와 <br className="hidden sm:block" />
 다양한 콘텐츠를 모바일에서 간편하게 경험해 보세요.
 </p>
 </div>
 </div>

 <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-20">
 {/* Link Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
 <button
 onClick={() => handleLinkClick(link.url)}
 className={`w-full py-4 rounded-2xl bg-gradient-to-r ${link.color} text-white font-black shadow-lg group-hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-auto`}
 >
 앱 설치하기
 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
 </svg>
 </button>
 </div>
 </div>
 ))}
 </div>

 {/* Guide Section */}
 <div className="mt-20 bg-slate-900 rounded-[3rem] p-8 sm:p-16 text-white relative overflow-hidden shadow-2xl">
 <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full"></div>
 <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
 <div className="relative z-10">
 <h3 className="text-3xl font-black mb-10 flex items-center gap-4">
 <span className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">✨</span>
 설치 안내 및 유의사항
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-400 font-medium leading-relaxed break-keep">
 <div className="space-y-4">
 <h4 className="text-white text-xl font-bold">1. 안드로이드 사용자</h4>
 <p>
 갤럭시 등 안드로이드 스마트폰을 이용하시는 경우, &apos;안드로이드 앱 다운로드&apos; 버튼을 눌러 구글 플레이스토어로 이동 후 설치를 진행해주세요.
 </p>
 </div>
 <div className="space-y-4">
 <h4 className="text-white text-xl font-bold">2. 아이폰 사용자 (iOS)</h4>
 <p>
 아이폰 및 아이패드를 이용하시는 경우, &apos;아이폰 앱 다운로드&apos; 버튼을 눌러 애플 앱스토어로 이동 후 설치를 진행해주세요.
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </main>

 <CoupangAds 
 keyword="스마트폰 액세서리" 
 title="📱 모바일 라이프를 더 편리하게"
 hookText="새로운 앱과 함께하면 좋은 스마트폰 액세서리를 만나보세요."
 />

 <Footer />

 {/* Interstitial Ad Screen */}
 {showInterstitial && (
 <div className="fixed inset-0 z-[100] bg-slate-950/95 flex flex-col items-center justify-center p-4 backdrop-blur-sm">
 <div className="max-w-md w-full text-white text-center">
 {counter > 0 ? (
 <>
 <div className="relative w-24 h-24 mx-auto mb-10">
 <div className="absolute inset-0 border-4 border-purple-500/20 rounded-full"></div>
 <div className="absolute inset-0 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
 <div className="absolute inset-0 flex items-center justify-center text-2xl font-black">
 {counter}
 </div>
 </div>
 <h2 className="text-3xl font-black mb-6">스토어로 이동 중입니다</h2>
 <p className="text-slate-400 text-lg mb-10 break-keep">
 안전한 다운로드 페이지 연결을 위해 <br className="hidden sm:block" />
 잠시만 기다려주세요.
 </p>
 </>
 ) : (
 <>
 <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-10 text-4xl shadow-2xl shadow-purple-500/40 animate-bounce">
 🚀
 </div>
 <h2 className="text-3xl font-black mb-6">준비가 완료되었습니다</h2>
 <a 
 href={targetLink}
 
 
 onClick={() => setShowInterstitial(false)}
 className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-slate-900 font-black rounded-2xl mb-10 hover:bg-indigo-50 transition-all shadow-xl hover:scale-105 active:scale-95"
 >
 다운로드 바로가기
 </a>
 </>
 )}
 
 <div className="p-8 bg-slate-900 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
 <p className="text-[10px] text-slate-500 mb-6 uppercase tracking-[0.2em] font-black">Sponsored Content</p>
 <div className="w-full h-48 bg-slate-800/50 rounded-2xl flex items-center justify-center border border-white/5 italic text-slate-500 text-sm">
 광고 확인 후 서비스가 계속됩니다
 </div>
 </div>
 
 <button 
 onClick={() => setShowInterstitial(false)}
 className="mt-10 text-slate-500 text-sm font-bold hover:text-white transition-colors underline underline-offset-4"
 >
 건너뛰기 (Skip)
 </button>
 </div>
 </div>
 )}
 </div>
 );
}
