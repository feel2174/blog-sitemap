'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoupangAds from '@/components/CoupangAds';
import Image from 'next/image';

const APPS = [
 {
 name: 'AliExpress',
 subtitle: '알리익스프레스',
 description: '가전, 패션, 리빙 등 수백만 개의 상품을 상상할 수 없는 가격에 만나보세요.',
 icon: '🛍️',
 color: 'from-orange-500 to-red-600',
 shadowColor: 'shadow-orange-500/20',
 btnColor: 'bg-orange-50',
 btnHover: 'hover:bg-orange-100',
 textColor: 'text-orange-600',
 androidUrl: 'https://play.google.com/store/apps/details?id=com.alibaba.aliexpresshd&hl=ko',
 iosUrl: 'https://apps.apple.com/kr/app/aliexpress-shopping-app/id436672029'
 },
 {
 name: 'Temu',
 subtitle: '테무',
 description: '억만장자처럼 쇼핑하기! 파격적인 할인과 무제한 무료배송 혜택을 지금 확인하세요.',
 icon: '🎁',
 color: 'from-rose-500 to-red-500',
 shadowColor: 'shadow-rose-500/20',
 btnColor: 'bg-rose-50',
 btnHover: 'hover:bg-rose-100',
 textColor: 'text-rose-600',
 androidUrl: 'https://play.google.com/store/apps/details?id=com.einnovation.temu&hl=ko',
 iosUrl: 'https://apps.apple.com/kr/app/temu-%EC%96%B5%EB%A7%8C%EC%9E%A5%EC%9E%90%EC%B2%98%EB%9F%BC-%EC%87%BC%ED%95%91%ED%95%98%EA%B8%B0/id1641486558'
 }
];

export default function AliExpressTemuContent() {
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
 <div className="min-h-screen bg-slate-950 font-['Pretendard'] text-white">
 <Header />
 
 <main className="pb-20">
 {/* Hero Section */}
 <div className="relative h-[450px] sm:h-[600px] overflow-hidden">
 <Image 
 src="/shopping-app-bg.png"
 alt="해외 쇼핑 앱 배너"
 fill
 className="object-cover opacity-60"
 priority
 />
 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
 <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-4 text-center">
 <div className="mb-6 flex gap-3 animate-bounce">
 <span className="px-5 py-2 bg-orange-600/80 backdrop-blur-md text-white rounded-full text-sm font-black shadow-xl border border-orange-500/30">
 초저가 해외직구
 </span>
 <span className="px-5 py-2 bg-rose-600/80 backdrop-blur-md text-white rounded-full text-sm font-black shadow-xl border border-rose-500/30">
 무료배송 혜택
 </span>
 </div>
 <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
 글로벌 쇼핑의 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">새로운 기준</span>
 </h1>
 <p className="text-slate-300 text-lg sm:text-2xl font-bold max-w-2xl break-keep leading-relaxed drop-shadow-md">
 알리익스프레스와 테무를 다운로드하고 <br className="hidden sm:block" />
 전 세계의 트렌디한 상품을 가장 저렴하게 만나보세요.
 </p>
 </div>
 </div>

 <div className="max-w-5xl mx-auto px-4 -mt-10 relative z-10">
 {/* App Download Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
 {APPS.map((app, index) => (
 <div 
 key={index}
 className={`bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 hover:border-white/30 transition-all duration-500 shadow-2xl ${app.shadowColor} group flex flex-col relative overflow-hidden`}
 >
 <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${app.color} opacity-10 blur-[100px] rounded-full group-hover:opacity-20 transition-opacity`}></div>
 
 <div className="relative z-10">
 <div className="flex items-center gap-6 mb-8">
 <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${app.color} flex items-center justify-center text-4xl shadow-xl transform group-hover:scale-110 transition-transform duration-500`}>
 {app.icon}
 </div>
 <div>
 <h2 className="text-3xl font-black mb-1">{app.name}</h2>
 <p className="text-slate-400 font-bold">{app.subtitle}</p>
 </div>
 </div>
 
 <p className="text-slate-300 font-medium leading-relaxed mb-10 h-16 break-keep">
 {app.description}
 </p>
 
 <div className="space-y-4 mt-auto">
 <button
 onClick={() => handleLinkClick(app.androidUrl)}
 className={`w-full py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-black shadow-lg transition-all flex items-center justify-center gap-3 border border-white/5`}
 >
 <span className="text-2xl">🤖</span>
 안드로이드 (Google Play)
 </button>
 <button
 onClick={() => handleLinkClick(app.iosUrl)}
 className={`w-full py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-black shadow-lg transition-all flex items-center justify-center gap-3`}
 >
 <span className="text-2xl">🍎</span>
 iOS (App Store)
 </button>
 </div>
 </div>
 </div>
 ))}
 </div>

 {/* Guide Section */}
 <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] p-10 sm:p-16 relative overflow-hidden shadow-2xl border border-white/5">
 <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full"></div>
 <div className="relative z-10">
 <h3 className="text-3xl font-black mb-10 flex items-center gap-4">
 <span className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">💡</span>
 직구 앱 100% 활용하기
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 <div className="bg-slate-950/50 p-8 rounded-[2rem] border border-white/5">
 <div className="text-3xl mb-4">🎫</div>
 <h4 className="text-xl font-bold mb-3">신규 가입 혜택</h4>
 <p className="text-slate-400 text-sm leading-relaxed break-keep">
 앱을 처음 다운로드하고 가입하면 파격적인 신규 회원 전용 쿠폰팩과 무료 배송 혜택이 즉시 제공됩니다.
 </p>
 </div>
 <div className="bg-slate-950/50 p-8 rounded-[2rem] border border-white/5">
 <div className="text-3xl mb-4">🔍</div>
 <h4 className="text-xl font-bold mb-3">이미지 검색</h4>
 <p className="text-slate-400 text-sm leading-relaxed break-keep">
 찾고 싶은 상품의 사진만 있으면 앱 내 이미지 검색 기능을 통해 동일하거나 비슷한 상품을 쉽게 찾을 수 있습니다.
 </p>
 </div>
 <div className="bg-slate-950/50 p-8 rounded-[2rem] border border-white/5">
 <div className="text-3xl mb-4">⭐</div>
 <h4 className="text-xl font-bold mb-3">리뷰 확인 필수</h4>
 <p className="text-slate-400 text-sm leading-relaxed break-keep">
 한국인 구매자들의 사진 리뷰를 확인하면 실패 없는 쇼핑이 가능합니다. 별점과 후기를 꼼꼼히 체크하세요.
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </main>

 <CoupangAds 
 keyword="로켓직구" 
 title="✈️ 쿠팡 로켓직구 베스트셀러"
 hookText="알리, 테무에서 쇼핑 후 쿠팡 로켓직구도 비교해보세요. 더 빠르고 안전한 해외 배송이 기다립니다."
 />

 <Footer />

 {/* Interstitial Ad Screen */}
 {showInterstitial && (
 <div className="fixed inset-0 z-[100] bg-black/98 flex flex-col items-center justify-center p-4 backdrop-blur-md">
 <div className="max-w-md w-full text-white text-center">
 {counter > 0 ? (
 <>
 <div className="w-24 h-24 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-10 shadow-2xl shadow-orange-500/20"></div>
 <h2 className="text-3xl font-black mb-6">앱스토어로 이동 중</h2>
 <p className="text-slate-400 text-lg mb-10 break-keep">
 전 세계 최저가 쇼핑이 <br className="hidden sm:block" />
 곧 시작됩니다. ({counter}초)
 </p>
 </>
 ) : (
 <>
 <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-10 text-4xl animate-bounce shadow-2xl shadow-orange-500/40">
 🛒
 </div>
 <h2 className="text-3xl font-black mb-6">준비가 완료되었습니다</h2>
 <a 
 href={targetLink}
 
 
 onClick={() => setShowInterstitial(false)}
 className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-900 font-black rounded-2xl mb-10 hover:bg-slate-100 transition-all shadow-xl"
 >
 다운로드 바로가기
 </a>
 </>
 )}
 
 <div className="p-8 bg-zinc-900 rounded-[2.5rem] border border-white/5 shadow-2xl">
 <p className="text-[10px] text-zinc-500 mb-6 uppercase tracking-widest font-black">Sponsored</p>
 <div className="w-full h-48 bg-zinc-800/50 rounded-2xl flex items-center justify-center border border-dashed border-zinc-700 italic text-zinc-600 text-sm">
 광고 확인 후 이동이 완료됩니다
 </div>
 </div>
 
 <button 
 onClick={() => setShowInterstitial(false)}
 className="mt-10 text-zinc-600 text-sm font-bold hover:text-white transition-colors"
 >
 SKIP AD
 </button>
 </div>
 </div>
 )}
 </div>
 );
}
