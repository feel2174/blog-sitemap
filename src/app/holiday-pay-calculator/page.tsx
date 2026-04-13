'use client';

import { useState, useEffect } from 'react';

export default function HolidayPayCalculator() {
    const [workedHours, setWorkedHours] = useState<string>('');
    const [hourlyWage, setHourlyWage] = useState<string>('10320');
    const [result, setResult] = useState<number | null>(null);
    const [showAd, setShowAd] = useState<boolean>(false);
    const [isCalculating, setIsCalculating] = useState<boolean>(false);

    const calculateHolidayPay = () => {
        const hours = parseFloat(workedHours);
        const wage = parseFloat(hourlyWage);

        if (isNaN(hours) || isNaN(wage) || hours < 1) {
            alert('올바른 시간을 입력해주세요.');
            return;
        }

        setIsCalculating(true);
        setShowAd(true);

        // Simulate ad display for 3 seconds before showing results
        setTimeout(() => {
            let holidayPay = 0;
            if (hours >= 15) {
                // 주휴수당 공식: (1주일 총 근로시간 / 40시간) * 8시간 * 시급
                // 단, 40시간 초과 근무해도 40시간까지만 인정
                const baseHours = Math.min(hours, 40);
                holidayPay = Math.floor((baseHours / 40) * 8 * wage);
            } else {
                holidayPay = 0;
            }
            
            setResult(holidayPay);
            setShowAd(false);
            setIsCalculating(false);
        }, 3000);
    };

    useEffect(() => {
        // Push ads to any ins tags if they exist
        try {
            // @ts-expect-error: window.adsbygoogle is not defined in global window object
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('AdSense error:', e);
        }
    }, [showAd]);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center font-['Pretendard'] text-slate-900 pb-20">
            <div className="w-full max-w-lg bg-white shadow-xl rounded-t-3xl overflow-hidden pt-12 pb-16 px-8 relative">
                {/* Title */}
                <h1 className="text-4xl font-bold text-center mb-16 tracking-tight">주휴수당 계산기</h1>

                {/* Input 1 */}
                <div className="mb-12">
                    <label className="block text-2xl font-bold mb-4">1주일동안 총 일한 시간은</label>
                    <div className="relative border-b-2 border-slate-900 flex items-center">
                        <input
                            type="number"
                            placeholder="00"
                            value={workedHours}
                            onChange={(e) => setWorkedHours(e.target.value)}
                            className="w-full text-3xl py-2 outline-none appearance-none"
                        />
                        <span className="text-2xl font-medium text-slate-600 ml-2">시간</span>
                    </div>
                </div>

                {/* Input 2 */}
                <div className="mb-4">
                    <label className="block text-2xl font-bold mb-4">나의 시급은</label>
                    <div className="relative border-b-2 border-slate-900 flex items-center">
                        <input
                            type="number"
                            placeholder="10320"
                            value={hourlyWage}
                            onChange={(e) => setHourlyWage(e.target.value)}
                            className="w-full text-3xl py-2 outline-none appearance-none font-medium"
                        />
                        <span className="text-2xl font-medium text-slate-600 ml-2">원</span>
                    </div>
                </div>
                <p className="text-sm text-slate-400 mb-12">* 2026년도 최저임금은 10,320원입니다.</p>

                {/* Calculate Button */}
                <div className="flex justify-center">
                    <button
                        onClick={calculateHolidayPay}
                        disabled={isCalculating}
                        className="bg-[#0051cc] text-white px-10 py-3 rounded-md text-lg font-bold shadow-lg hover:bg-[#0041a3] transition-colors active:scale-95 flex items-center gap-2"
                    >
                        {isCalculating ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                계산 중...
                            </>
                        ) : '계산하기'}
                    </button>
                </div>

                {/* Simulated Interstitial Ad Overlay */}
                {showAd && (
                    <div className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center p-6 text-center">
                        <div className="mb-4 text-slate-500 text-sm animate-pulse">결과를 불러오는 동안 광고를 확인해주세요...</div>
                        
                        {/* Google AdSense Placeholder */}
                        <div className="w-full h-[250px] bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden rounded-lg">
                            <ins className="adsbygoogle"
                                 style={{ display: 'block', width: '300px', height: '250px' }}
                                 data-ad-client="ca-pub-9196149361612087"
                                 data-ad-slot="your-slot-id" // Replace with actual slot ID if available
                                 data-ad-format="auto"
                                 data-full-width-responsive="true"></ins>
                        </div>
                        
                        <div className="mt-6 w-full max-w-[200px] h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-[#0051cc] animate-loading-bar"></div>
                        </div>
                    </div>
                )}
            </div>

            {/* Result Section */}
            <div className="w-full max-w-lg bg-[#0a2e63] text-white py-20 px-8 rounded-b-3xl shadow-2xl">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-2xl font-bold">
                    <span>주휴수당은</span>
                    <div className="relative min-w-[200px] border-b-2 border-white text-center pb-2">
                        {result !== null ? (
                            <span className="text-3xl text-yellow-300 animate-fade-in">
                                {result.toLocaleString()}
                            </span>
                        ) : (
                            <span className="text-white/30 text-3xl">_________</span>
                        )}
                    </div>
                    <span>원입니다.</span>
                </div>
                
                {result !== null && result === 0 && workedHours !== '' && parseFloat(workedHours) < 15 && (
                    <p className="text-center mt-6 text-slate-300 text-sm">
                        * 주 15시간 미만 근무 시 주휴수당 대상이 아닙니다.
                    </p>
                )}
            </div>

            <style jsx global>{`
                @keyframes loading-bar {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }
                .animate-loading-bar {
                    animation: loading-bar 3s linear forwards;
                }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
}
