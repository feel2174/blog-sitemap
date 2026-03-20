'use client';

import React, { useState, useEffect, useRef } from 'react';

const CountdownTimer: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<number>(0);
    const [initialTime, setInitialTime] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const requestRef = useRef<number>(undefined);
    const startTimeRef = useRef<number>(undefined);

    useEffect(() => {
        // Generate a random time between 5 and 15 minutes (300,000 to 900,000 milliseconds)
        const randomMs = Math.floor(Math.random() * (900000 - 300000 + 1)) + 300000;
        setInitialTime(randomMs);
        setTimeLeft(randomMs);

        const animate = (time: number) => {
            if (!startTimeRef.current) startTimeRef.current = time;
            const elapsed = time - startTimeRef.current;
            const remaining = Math.max(0, randomMs - elapsed);
            
            setTimeLeft(remaining);

            if (remaining > 0) {
                requestRef.current = requestAnimationFrame(animate);
            }
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    const formatTime = (ms: number) => {
        const totalSeconds = Math.floor(ms / 1000);
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        const milliseconds = Math.floor((ms % 1000) / 10);
        
        return {
            display: `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`,
            ms: milliseconds.toString().padStart(2, '0')
        };
    };

    const progress = initialTime > 0 ? (timeLeft / initialTime) * 100 : 0;
    const { display, ms } = formatTime(timeLeft);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-[100] px-4 pb-6 sm:pb-8 flex justify-center pointer-events-none">
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes fomo-glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.2); }
                    50% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.5); }
                }
                @keyframes shimmer {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(100%); }
                }
            `}} />
            
            <div 
                className="max-w-[500px] w-full bg-[#facc15] rounded-3xl p-[2px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] pointer-events-auto overflow-hidden relative group"
                style={{ animation: 'fomo-glow 2s infinite ease-in-out' }}
            >
                {/* Internal container with dark contrast */}
                <div className="bg-[#0f0f0f] rounded-[22px] p-4 flex items-center justify-between relative overflow-hidden">
                    
                    {/* Shimmer effect background */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-[rgba(250,204,21,0.05)] to-transparent skew-x-[-20deg] animate-[shimmer_3s_infinite]"></div>
                    </div>

                    {/* Progress line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5"></div>
                    <div 
                        className="absolute top-0 left-0 h-[2.5px] bg-[#facc15] shadow-[0_0_10px_#facc15] transition-none"
                        style={{ width: `${progress}%` }}
                    ></div>

                    <div className="flex flex-col gap-0.5 relative z-10">
                        <div className="flex items-center gap-1.5">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#facc15] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#facc15]"></span>
                            </span>
                            <span className="text-[#facc15] text-[12px] font-[900] uppercase tracking-tighter">
                                LIMITED TIME CHANCE
                            </span>
                        </div>
                        <h3 className="text-white text-[16px] font-[800] tracking-tight leading-tight mt-0.5">
                            현재 대기순번 급상승 중!
                        </h3>
                    </div>

                    <div className="flex items-center gap-4 relative z-10">
                        <div className="flex items-baseline min-w-[75px] justify-end">
                            <span className="text-[#facc15] text-[24px] font-[900] font-mono tabular-nums tracking-[-1px] drop-shadow-[0_0_12px_rgba(250,204,21,0.4)]">
                                {display}
                            </span>
                            <span className="text-white text-[15px] font-[900] font-mono tabular-nums ml-0.5 opacity-80">
                                .{ms}
                            </span>
                        </div>
                        
                        <button 
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="bg-[#facc15] text-[#000000] px-6 py-3 rounded-2xl text-[15px] font-[1000] shadow-[0_10px_25px_rgba(250,204,21,0.3)] hover:bg-white transition-all duration-300 hover:scale-[1.05] active:scale-95 whitespace-nowrap uppercase italic"
                        >
                            GO FAST
                        </button>
                    </div>

                    {/* Closing button */}
                    <button 
                        onClick={() => setIsVisible(false)}
                        className="absolute top-1 right-2 p-1 text-white/20 hover:text-[#facc15] transition-colors"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
