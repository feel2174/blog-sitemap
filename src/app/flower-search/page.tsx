import Link from 'next/link';
import React from 'react';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '사진으로 꽃 이름 찾기 어플 추천 BEST 4 (바로가기)',
    description: '길가다 마주친 예쁜 꽃, 이름이 궁금하다면? 사진만 찍으면 AI가 바로 알려주는 식물 이름 찾기 어플 4종(픽쳐디스, 모야모 등)을 추천해 드립니다.',
    keywords: ['꽃 이름 찾기', '식물 이름 찾기', '사진으로 꽃 찾기', '모야모', '픽쳐디스', '꽃 검색 어플', '꽃 어플'],
};

export default function FlowerSearchAppsPage() {
    const flowerApps = [
        { 
            name: 'PictureThis (픽쳐디스)', 
            url: 'https://play.google.com/store/apps/details?id=cn.danatech.xingseus&hl=ko', 
            desc: '전 세계 1억 명이 사용하는 1위 무적의 AI 식물 도감!',
            badge: '글로벌 1위',
            color: 'bg-emerald-500',
            hoverColor: 'hover:border-emerald-500 hover:shadow-emerald-500/20',
            bgLight: 'bg-emerald-50',
            icon: '📸🌿'
        },
        { 
            name: 'HiPlant (하이플랜트)', 
            url: 'https://play.google.com/store/apps/details?id=com.hiplant.ai.identifyplants.plantscanner.plantidentifier&hl=ko', 
            desc: '사진 한 장으로 꽃 이름부터 관리 방법까지 한 번에 진단',
            badge: 'AI 식물 진단',
            color: 'bg-teal-500',
            hoverColor: 'hover:border-teal-500 hover:shadow-teal-500/20',
            bgLight: 'bg-teal-50',
            icon: '🪴🔍'
        },
        { 
            name: '무슨 꽃 식물 뭐야?', 
            url: 'https://play.google.com/store/apps/details?id=com.aipro.watcam&hl=ko', 
            desc: '직관적이고 빠르다! 초보자도 쓰기 편한 간편 검색 어플',
            badge: '초보자 추천',
            color: 'bg-lime-500',
            hoverColor: 'hover:border-lime-500 hover:shadow-lime-500/20',
            bgLight: 'bg-lime-50',
            icon: '🌼📱'
        },
        { 
            name: '모야모 (Moyamo)', 
            url: 'https://apps.apple.com/kr/app/%EB%AA%A8%EC%95%BC%EB%AA%A8-moyamo-%EA%BD%83-%EB%82%98%EB%AC%B4-%EC%8B%9D%EB%AC%BC%EC%9D%B4%EB%A6%84-%EC%B0%BE%EA%B8%B0/id978584923', 
            desc: '국내 전문가들이 식물 이름을 직접 답변해주는 따뜻한 커뮤니티',
            badge: '집단 지성',
            color: 'bg-pink-500',
            hoverColor: 'hover:border-pink-500 hover:shadow-pink-500/20',
            bgLight: 'bg-pink-50',
            icon: '👨‍🌾🌸'
        }
    ];

    return (
        <div 
            className="min-h-screen bg-[#F8FAFC] text-slate-800 py-12 px-4 sm:px-6 flex flex-col items-center selection:bg-emerald-200 font-sans relative overflow-hidden"
            style={{ 
                fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
            }}
        >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-emerald-100/50 to-transparent pointer-events-none"></div>
            <div className="absolute -top-24 -right-24 text-[250px] opacity-10 pointer-events-none rotate-12 drop-shadow-2xl">
                🌸
            </div>
            <div className="absolute top-64 -left-24 text-[200px] opacity-10 pointer-events-none -rotate-12 drop-shadow-2xl">
                🌿
            </div>

            {/* Header Section */}
            <div className="w-full max-w-4xl text-center mb-16 relative z-10 pt-8">
                
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white text-emerald-600 rounded-full text-sm font-bold mb-6 shadow-sm border border-emerald-100">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></span>
                    봄 나들이 필수템 가이드
                </div>

                <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
                    사진으로 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">꽃 이름 찾기</span> <br className="hidden sm:block"/>
                    어플 BEST 4
                </h1>
                
                <p className="text-slate-600 font-medium text-lg sm:text-xl max-w-2xl mx-auto break-keep leading-relaxed mb-8">
                    길을 걷다 마주친 예쁜 꽃, 이름이 궁금하신가요? <br className="hidden sm:block"/>
                    사진만 찍으면 인공지능이 1초만에 바로 식물 이름을 알려줍니다.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                    <span className="px-4 py-2 bg-white rounded-2xl border border-emerald-100 text-emerald-800 font-bold text-sm shadow-sm ring-1 ring-emerald-50/50">#사진으로식물찾기</span>
                    <span className="px-4 py-2 bg-white rounded-2xl border border-emerald-100 text-emerald-800 font-bold text-sm shadow-sm ring-1 ring-emerald-50/50">#꽃이름어플</span>
                    <span className="px-4 py-2 bg-white rounded-2xl border border-emerald-100 text-emerald-800 font-bold text-sm shadow-sm ring-1 ring-emerald-50/50">#모야모</span>
                </div>
            </div>

            {/* Link Buttons Grid */}
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-16 z-10 relative">
                {flowerApps.map((app, index) => (
                    <Link 
                        key={index}
                        href={app.url}
                        className={`group relative overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border-2 border-transparent ${app.hoverColor} flex flex-col justify-between items-start h-full cursor-pointer`}
                    >
                        {/* App Badge */}
                        <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-black tracking-wide text-white ${app.color} shadow-sm transform group-hover:-rotate-3 transition-transform z-20`}>
                            {app.badge}
                        </div>

                        <div className="relative z-10 flex flex-col w-full">
                            <div className={`w-16 h-16 ${app.bgLight} rounded-3xl flex items-center justify-center text-3xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500 border border-slate-100`}>
                                {app.icon}
                            </div>
                            
                            <h3 className="text-2xl font-black text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors">
                                {app.name}
                            </h3>
                            <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8 break-keep pr-8 min-h-[40px]">
                                {app.desc}
                            </p>
                            
                            <div className={`mt-auto inline-flex items-center justify-center ${app.bgLight} ${app.color.replace('bg-', 'text-')} rounded-2xl py-4 px-6 font-bold text-[15px] w-full group-hover:${app.color} group-hover:text-white transition-all duration-300`}>
                                어플 설치하러 가기
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 -rotate-45 group-hover:rotate-0 group-hover:translate-x-1 transition-all"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>
                        </div>

                        {/* Top Right Decorative Blur */}
                        <div className={`absolute -top-12 -right-12 w-48 h-48 ${app.color} rounded-full opacity-[0.03] blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none`}></div>
                    </Link>
                ))}
            </div>

            {/* Guide Section */}
            <div className="w-full max-w-4xl bg-white border border-slate-100 rounded-[2.5rem] p-8 sm:p-10 shadow-lg relative overflow-hidden z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="text-[100px] w-32 shrink-0 text-center animate-[wave_3s_ease-in-out_infinite] origin-bottom-right">
                    🌿
                </div>
                
                <div className="relative z-10 flex-grow">
                    <h2 className="text-2xl font-black text-slate-800 mb-2">식물 사진 잘 찍는 꿀팁 💡</h2>
                    <p className="text-slate-500 mb-5 font-medium leading-relaxed">AI가 더 정확하게 인식할 수 있도록 이렇게 찍어보세요!</p>
                    
                    <ul className="text-slate-700 font-semibold space-y-3">
                        <li className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-black shrink-0">1</span>
                            <span><strong>꽃이나 잎의 정면</strong>을 화면 가득 채워서 찍어주세요.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-black shrink-0">2</span>
                            <span>줄기, 잎사귀, 열매가 있다면 함께 나오게 찍을수록 정확도가 올라갑니다.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-black shrink-0">3</span>
                            <span>비슷한 잡초나 다른 식물이 <strong>배경에 겹치지 않게</strong> 주의하세요.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{__html: `
                @keyframes wave {
                    0% { transform: rotate(0deg); }
                    50% { transform: rotate(10deg); }
                    100% { transform: rotate(0deg); }
                }
            `}} />
            <CoupangAds 
                keyword="꽃병" 
                title="🪴 찾은 꽃, 집안에도 들여볼까요?"
                hookText="이름을 찾은 그 꽃, 집안 인테리어로도 제격입니다! 어떤 꽃과도 잘 어울리는 감성 유리 꽃병과 실내 식물을 위한 영양제 리스트를 확인해보세요."
            />

        </div>
    );
}
