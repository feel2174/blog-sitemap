'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import CoupangAds from '@/components/CoupangAds';

export default function VotePage() {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('vote-bookmarked');
        if (saved === 'true') {
            setIsBookmarked(true);
        }
    }, []);

    const handleBookmark = () => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const isAndroid = /Android/.test(navigator.userAgent);

        if (!isBookmarked) {
            localStorage.setItem('vote-bookmarked', 'true');
            setIsBookmarked(true);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);

            if (isIOS) {
                alert('아이폰 사파리: 하단의 "공유" 버튼을 누른 후 "홈 화면에 추가"를 눌러주세요.');
            } else if (isAndroid) {
                alert('안드로이드 크롬: 상단의 "⋮" 메뉴를 누른 후 "홈 화면에 추가" 또는 "현재 페이지 북마크"를 눌러주세요.');
            } else {
                alert('데스크탑: Ctrl + D (Mac은 Cmd + D)를 눌러 즐겨찾기에 추가할 수 있습니다.');
            }
        } else {
            localStorage.removeItem('vote-bookmarked');
            setIsBookmarked(false);
        }
    };

    const ActionButtons = () => (
        <div className="w-full max-w-xs flex flex-col gap-3 px-4">
            <Link 
                href="https://m.entertain.naver.com/poll/polling?id=363" 
                className="group relative w-full py-5 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 rounded-2xl overflow-hidden animate-[pulse-blue_3s_infinite] transition-transform active:scale-95 shadow-xl border border-white/10"
            >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-[shine_1.5s_infinite] pointer-events-none" />
                <span className="relative z-10 text-xl font-black text-white flex items-center justify-center gap-3">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9a10,10,0,0,0,0-20Zm0,18H5.41l.24-.24a1,1,0,0,0,.05-1.36A7.93,7.93,0,0,1,4,12,8,8,0,0,1,19.9,10H17a1,1,0,0,0,0,2h4a1,1,0,0,0,1-1V7a1,1,0,0,0-2,0v2.4A9.93,9.93,0,0,0,12,4,8,8,0,0,1,16,11a1,1,0,0,0,2,0,10,10,0,0,0-6-9Z"/>
                    </svg>
                    지금 바로 투표하기
                </span>
            </Link>

            <button 
                onClick={handleBookmark}
                className={`w-full py-4 rounded-2xl backdrop-blur-md transition-all flex items-center justify-center gap-3 font-bold group border ${isBookmarked ? 'bg-amber-500/20 border-amber-500 text-amber-400' : 'bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10'}`}
            >
                <svg className={`w-6 h-6 transition-all ${isBookmarked ? 'fill-amber-500 text-amber-500 animate-[star-pop_0.4s_ease-out]' : 'text-zinc-500 group-hover:text-amber-500'}`} fill={isBookmarked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span className="text-base tracking-wider">
                    {isBookmarked ? '즐겨찾기 저장됨' : '즐겨찾기 추가'}
                </span>
            </button>
        </div>
    );

    const InfoButtons = () => (
        <div className="w-full max-w-xs flex flex-col gap-2 px-4 mt-6">
            <Link 
                href="https://zucca100.com/mbn-channel-live/" 
                className="w-full py-3 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 rounded-xl transition-all flex items-center justify-center gap-2 text-zinc-300 group"
            >
                <span className="text-sm font-bold">📡 MBN 편성표 보기</span>
            </Link>
            <Link 
                href="https://zucca100.com/mbn-channel-live/" 
                className="w-full py-3 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 rounded-xl transition-all flex items-center justify-center gap-2 text-zinc-300 group"
            >
                <span className="text-sm font-bold">📂 무명전설 재방송 다시보기</span>
            </Link>
        </div>
    );

    return (
        <div 
            className="min-h-screen bg-[#050b18] text-white flex flex-col items-center px-4 py-8 relative"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a162d] via-black to-[#050b18] z-0 overflow-hidden" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full z-0 pointer-events-none" />

            {/* Custom Animations */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                @keyframes glow-blue {
                    0% { text-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
                    50% { text-shadow: 0 0 25px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4); }
                    100% { text-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
                }
                @keyframes pulse-blue {
                    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
                    50% { transform: scale(1.03); box-shadow: 0 0 20px 10px rgba(59, 130, 246, 0); }
                    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
                }
                @keyframes shine {
                    from { left: -100%; }
                    to { left: 200%; }
                }
                @keyframes star-pop {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.5); }
                    100% { transform: scale(1); }
                }
            `}} />

            <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
                
                {/* 1. Header & Badges */}
                <div className="w-full flex flex-col items-center text-center px-4 pt-4 mb-4">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-blue-500/10 border border-blue-500/30 text-blue-400 backdrop-blur-md">
                        MBN THE LEGEND COMPETITION
                    </span>

                    <div className="mb-6">
                        <h2 className="text-base md:text-lg font-light tracking-[0.2em] text-zinc-400 mb-1 uppercase">
                            Legend of the Unknown
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-2 drop-shadow-2xl flex flex-col gap-0.5">
                            <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent leading-none">무명전설</span>
                            <span className="text-blue-400 animate-[glow-blue_3s_ease-in-out_infinite] leading-tight">국민의 선택</span>
                        </h1>
                    </div>

                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-6 opacity-40" />
                </div>

                {/* 2. Top Action Buttons */}
                <div className="w-full flex flex-col items-center mb-10">
                    <ActionButtons />
                    <InfoButtons />
                </div>

                {/* 3. Main Poster Image */}
                <div className="w-full max-w-[420px] mb-10 relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,1)] border border-white/10 animate-[float_6s_ease-in-out_infinite]">
                    <Image 
                        src="/legend.png" 
                        alt="무명전설 포스터" 
                        width={420}
                        height={600}
                        className="w-full h-auto object-contain bg-black/40"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050b18] to-transparent pointer-events-none" />
                </div>

                {/* 4. Bottom Action Buttons */}
                <div className="w-full flex flex-col items-center mb-12">
                    <ActionButtons />
                    <InfoButtons />
                </div>

                {/* 5. Footer Description */}
                <div className="w-full text-center px-4 mb-12">
                     <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed max-w-xs mx-auto opacity-80">
                        귀하의 한 표가 전설의 주인공을 결정합니다.<br />
                        MBN 무명전설에 참여해주셔서 감사합니다.
                    </p>
                </div>

                <CoupangAds 
                    keyword="응원봉" 
                    title="🚩 우리 가수 기 살려주기!"
                    hookText="투표로 응원하고, 현장에서는 더 뜨겁게! 우리 가수를 돋보이게 해줄 화려한 응원봉과 공연 필수 아이템들을 만나보세요."
                />
            </div>

            {/* Notification Toast */}
            {showToast && (
                <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-amber-500 text-black px-8 py-4 rounded-2xl font-bold shadow-2xl animate-bounce z-50 flex items-center gap-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    내 즐겨찾기에 추가되었습니다!
                </div>
            )}
            
            <footer className="relative z-10 mt-auto text-zinc-600 text-[9px] py-4 tracking-widest text-center">
                &copy; 2026 MBN Legend of the Unknown. All Rights Reserved.
            </footer>
        </div>
    );
}
