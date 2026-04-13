'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

// 5부제 규칙
// 월: 1,6 / 화: 2,7 / 수: 3,8 / 목: 4,9 / 금: 5,0 / 주말: 없음
const restrictionRules: Record<number, number[]> = {
    1: [1, 6],
    2: [2, 7],
    3: [3, 8],
    4: [4, 9],
    5: [5, 0],
    6: [],
    0: []
};

export default function CarRotationPage() {
    const [plateDigit, setPlateDigit] = useState<string>('');
    const [currentTime, setCurrentTime] = useState<Date | null>(null);

    // Initialize time on client to avoid hydration mismatch
    useEffect(() => {
        setCurrentTime(new Date());
        
        // Optionally update time every minute
        const timer = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    const daysKor = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const todayNum = currentTime ? currentTime.getDay() : 1; // Default to Monday before hydration
    const todayKor = daysKor[todayNum];
    const isWeekend = todayNum === 0 || todayNum === 6;

    const todaysRestricted = useMemo(() => restrictionRules[todayNum] || [], [todayNum]);

    // Check logic
    const isRestrictedToday = useMemo(() => {
        if (!plateDigit || isWeekend) return false;
        const digit = parseInt(plateDigit[plateDigit.length - 1], 10);
        return todaysRestricted.includes(digit);
    }, [plateDigit, todaysRestricted, isWeekend]);

    return (
        <div 
            className="min-h-screen bg-neutral-900 text-white py-12 px-4 sm:px-6 relative overflow-hidden font-sans selection:bg-emerald-500/30 selection:text-emerald-200"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            {/* Animated Background Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-600/20 blur-[120px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-4xl mx-auto relative z-10 space-y-12">
                
                {/* Header */}
                <header className="text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </span>
                        <span className="text-sm font-medium text-neutral-300">자동차 5부제 실시간 확인 시스템</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 pb-2">
                        내 차는 오늘 탈 수 있을까?
                    </h1>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto break-keep leading-relaxed">
                        차량 번호 끝자리를 입력하면 오늘 5부제 적용 대상인지 1초 만에 확인해드립니다. 
                        환경을 지키고 교통체증을 줄이는 작은 실천에 동참해주세요.
                    </p>
                </header>

                {/* Today's Status Banner */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="relative bg-neutral-800/80 backdrop-blur-xl border border-neutral-700/50 rounded-[2.5rem] p-8 sm:p-12 text-center shadow-2xl flex flex-col items-center justify-center">
                        <p className="text-neutral-400 font-bold text-lg mb-2 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            오늘은 {currentTime ? `${currentTime.getMonth() + 1}월 ${currentTime.getDate()}일` : '...'}
                        </p>
                        <div className="text-5xl sm:text-7xl font-black text-white mb-6 tracking-tight">
                            {todayKor}
                        </div>
                        
                        {isWeekend ? (
                            <div className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-6 py-3 rounded-2xl text-xl font-bold">
                                주말은 5부제가 시행되지 않습니다! 자유롭게 운행하세요 🚗
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <p className="text-xl sm:text-2xl text-neutral-300 font-medium">
                                    오늘 운행이 <span className="text-rose-400 font-bold">제한되는</span> 차량 번호 끝자리
                                </p>
                                <div className="flex justify-center gap-4">
                                    {todaysRestricted.map(num => (
                                        <span key={num} className="w-16 h-16 sm:w-20 sm:h-20 bg-rose-500/10 border-2 border-rose-500 text-rose-500 text-3xl sm:text-4xl font-black rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(244,63,94,0.3)]">
                                            {num}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Interactive Checker */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Input Side */}
                    <div className="bg-neutral-800/50 border border-neutral-700/50 rounded-[2rem] p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                            <span className="text-2xl">🔍</span> 번호판 조회
                        </h3>
                        <div className="space-y-4">
                            <label className="block text-neutral-400 font-medium mb-2">차량 번호판의 맨 마지막 숫자를 눌러주세요</label>
                            
                            <div className="grid grid-cols-5 gap-3">
                                {Array.from({length: 10}).map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setPlateDigit(i.toString())}
                                        className={`h-14 sm:h-16 rounded-xl text-xl sm:text-2xl font-black transition-all duration-300 active:scale-95 ${
                                            plateDigit === i.toString() 
                                                ? 'bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)] border-transparent' 
                                                : 'bg-neutral-700/50 text-neutral-300 border border-neutral-600 hover:bg-neutral-600 hover:border-neutral-500'
                                        }`}
                                    >
                                        {i}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Result Side */}
                    <div className="bg-neutral-800/50 border border-neutral-700/50 rounded-[2rem] p-8 flex flex-col items-center justify-center min-h-[300px] text-center transition-all duration-500 relative overflow-hidden">
                        {!plateDigit ? (
                            <div className="text-neutral-500 font-medium text-lg flex flex-col items-center gap-4">
                                <svg className="w-16 h-16 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
                                숫자를 선택하시면 결과를 알려드려요
                            </div>
                        ) : isWeekend ? (
                            <div className="animate-in fade-in zoom-in duration-500 flex flex-col items-center">
                                <div className="w-24 h-24 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-5xl mb-6 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                                    ✓
                                </div>
                                <h4 className="text-3xl font-black text-white mb-2">운행 <span className="text-emerald-400">가능!</span></h4>
                                <p className="text-emerald-400/80 font-medium text-lg">주말은 5부제 예외입니다.</p>
                            </div>
                        ) : isRestrictedToday ? (
                            <div className="animate-in fade-in zoom-in duration-500 flex flex-col items-center w-full h-full justify-center">
                                {/* Red alert background effect */}
                                <div className="absolute inset-0 bg-rose-500/10 opacity-50"></div>
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>
                                
                                <div className="relative z-10 w-24 h-24 bg-rose-500/20 text-rose-500 rounded-full flex items-center justify-center text-5xl mb-6 border-4 border-rose-500/30 shadow-[0_0_40px_rgba(244,63,94,0.5)]">
                                    ✕
                                </div>
                                <h4 className="relative z-10 text-3xl font-black text-white mb-2 tracking-tight">오늘은 <span className="text-rose-500">운행 휴무일</span>입니다</h4>
                                <p className="relative z-10 text-rose-400 font-medium text-lg bg-rose-500/10 px-4 py-2 rounded-lg mt-2">차량을 두고 대중교통을 이용해주세요 🚌</p>
                            </div>
                        ) : (
                            <div className="animate-in fade-in zoom-in duration-500 flex flex-col items-center w-full h-full justify-center">
                                {/* Green yay background effect */}
                                <div className="absolute inset-0 bg-emerald-500/10 opacity-50"></div>
                                <div className="relative z-10 w-24 h-24 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-5xl mb-6 border-4 border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.5)]">
                                    🚗
                                </div>
                                <h4 className="relative z-10 text-3xl font-black text-white mb-2 tracking-tight">지금 바로 <span className="text-emerald-400">운행 가능!</span></h4>
                                <p className="relative z-10 text-emerald-400/80 font-medium text-lg mt-2">오늘 끝자리 [{plateDigit}]번은 자유롭게 탈 수 있어요.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Information / Summary Table */}
                <div className="bg-neutral-800/80 border border-neutral-700/50 rounded-[2.5rem] p-8 sm:p-12 overflow-hidden">
                    <h3 className="text-2xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
                        요일별 5부제 적용 끝자리 안내
                    </h3>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                        {[
                            { d: '월요일', nums: '1, 6' },
                            { d: '화요일', nums: '2, 7' },
                            { d: '수요일', nums: '3, 8' },
                            { d: '목요일', nums: '4, 9' },
                            { d: '금요일', nums: '5, 0' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-neutral-900/80 rounded-2xl p-5 text-center border border-neutral-700/50 hover:bg-neutral-700/50 transition-colors">
                                <div className="text-neutral-400 text-sm font-semibold mb-3">{item.d}</div>
                                <div className="text-white text-2xl font-black font-mono">{item.nums}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Read More Article Action */}
                <div className="flex justify-center mt-12 pb-12">
                    <Link
                        href="https://mediahub.seoul.go.kr/archives/2017722"
                        className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 rounded-[2rem] bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 hover:border-emerald-500/50 shadow-xl overflow-hidden"
                    >
                        <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-emerald-500/20 -translate-x-1/2 group-hover:animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 blur-xl"></div>
                        <span className="relative z-10 flex items-center gap-3">
                            <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"></path></svg>
                            자세한 5부제 소식 보러가기 (서울시 뉴스)
                            <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                        </span>
                    </Link>
                </div>

            </div>
        </div>
    );
}
