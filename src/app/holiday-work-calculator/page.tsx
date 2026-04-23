'use client';

import { useState, useEffect } from 'react';
import CoupangAds from '@/components/CoupangAds';

export default function HolidayWorkCalculator() {
    const [workedHours, setWorkedHours] = useState<string>('');
    const [hourlyWage, setHourlyWage] = useState<string>('10320');
    const [businessSize, setBusinessSize] = useState<'5+' | 'under5'>('5+');
    const [result, setResult] = useState<{ total: number; base: number; extra: number } | null>(null);
    const [showAd, setShowAd] = useState<boolean>(false);
    const [isCalculating, setIsCalculating] = useState<boolean>(false);

    const calculatePay = () => {
        const hours = parseFloat(workedHours);
        const wage = parseFloat(hourlyWage);

        if (isNaN(hours) || isNaN(wage) || hours <= 0) {
            alert('올바른 근무 시간과 시급을 입력해주세요.');
            return;
        }

        setIsCalculating(true);
        setShowAd(true);

        // Simulate calculation time/ad display
        setTimeout(() => {
            if (businessSize === 'under5') {
                // 4인 이하: 의무 없음 (통상 1배 또는 약정 기준)
                const total = hours * wage;
                setResult({ total, base: total, extra: 0 });
            } else {
                // 5인 이상: 8시간 이내 1.5배, 8시간 초과 2배
                let base = 0;
                let extra = 0;
                if (hours <= 8) {
                    base = hours * wage * 1.5;
                } else {
                    base = 8 * wage * 1.5;
                    extra = (hours - 8) * wage * 2;
                }
                setResult({ total: base + extra, base, extra });
            }
            setShowAd(false);
            setIsCalculating(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-['Pretendard'] pb-20">
            {/* Header / Hero */}
            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 pt-16 pb-32 px-4 text-center text-white">
                <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">휴일근로수당 계산기</h1>
                <p className="text-indigo-100 font-medium opacity-90 max-w-lg mx-auto break-keep">
                    공휴일, 대체공휴일, 일요일 등 휴일 근무 시<br />내가 받을 수 있는 수당을 정확히 확인하세요.
                </p>
            </div>

            {/* Calculator Card */}
            <div className="max-w-xl mx-auto px-4 -mt-16 relative z-10">
                <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border border-blue-50 overflow-hidden relative">
                    
                    {/* Inputs */}
                    <div className="space-y-10">
                        {/* Business Size Toggle */}
                        <div>
                            <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">사업장 규모</label>
                            <div className="flex bg-slate-100 p-1.5 rounded-2xl">
                                <button 
                                    onClick={() => setBusinessSize('5+')}
                                    className={`flex-1 py-3 rounded-xl font-bold transition-all ${businessSize === '5+' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    5인 이상
                                </button>
                                <button 
                                    onClick={() => setBusinessSize('under5')}
                                    className={`flex-1 py-3 rounded-xl font-bold transition-all ${businessSize === 'under5' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    4인 이하
                                </button>
                            </div>
                        </div>

                        {/* Hourly Wage */}
                        <div>
                            <label className="block text-lg font-bold mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">₩</span>
                                통상임금 시급
                            </label>
                            <div className="relative border-b-2 border-slate-200 focus-within:border-blue-500 transition-colors flex items-center group">
                                <input
                                    type="number"
                                    value={hourlyWage}
                                    onChange={(e) => setHourlyWage(e.target.value)}
                                    className="w-full text-3xl py-2 outline-none font-black bg-transparent"
                                    placeholder="10320"
                                />
                                <span className="text-xl font-bold text-slate-400">원</span>
                            </div>
                            <p className="mt-2 text-xs text-slate-400">* 2026년 최저임금: 10,320원</p>
                        </div>

                        {/* Work Hours */}
                        <div>
                            <label className="block text-lg font-bold mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">⌚</span>
                                휴일 총 근무 시간
                            </label>
                            <div className="relative border-b-2 border-slate-200 focus-within:border-blue-500 transition-colors flex items-center group">
                                <input
                                    type="number"
                                    value={workedHours}
                                    onChange={(e) => setWorkedHours(e.target.value)}
                                    className="w-full text-3xl py-2 outline-none font-black bg-transparent"
                                    placeholder="8"
                                />
                                <span className="text-xl font-bold text-slate-400">시간</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button
                        onClick={calculatePay}
                        disabled={isCalculating}
                        className="w-full mt-12 bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-[1.5rem] text-xl font-black shadow-lg shadow-blue-200 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                    >
                        {isCalculating ? (
                            <>
                                <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                                계산 중...
                            </>
                        ) : '수당 계산하기'}
                    </button>

                    {/* Ad Interstitial Overlay */}
                    {showAd && (
                        <div className="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center p-8 text-center animate-in fade-in">
                            <p className="text-blue-600 font-bold mb-6 animate-pulse">정확한 법정 가산 수당을 산출하고 있습니다...</p>
                            <div className="w-full max-w-sm aspect-video bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center overflow-hidden">
                                <ins className="adsbygoogle"
                                     style={{ display: 'block', width: '100%', height: '100%' }}
                                     data-ad-client="ca-pub-9196149361612087"
                                     data-ad-slot="your-slot-id"
                                     data-ad-format="auto"
                                     data-full-width-responsive="true"></ins>
                            </div>
                            <div className="mt-8 w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-600 animate-loading-bar"></div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Result Section */}
                {result && (
                    <div className="mt-8 bg-[#1E293B] rounded-[2rem] p-10 text-white shadow-2xl animate-in slide-in-from-top-4 duration-700">
                        <div className="text-center mb-8">
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">총 예상 수당액</p>
                            <h2 className="text-5xl font-black text-yellow-400 tracking-tight">
                                {result.total.toLocaleString()}<span className="text-2xl ml-1">원</span>
                            </h2>
                        </div>
                        
                        <div className="space-y-4 border-t border-slate-700 pt-8">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-400 font-medium">8시간 이내 (1.5배 가산)</span>
                                <span className="font-bold">{result.base.toLocaleString()}원</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-400 font-medium">8시간 초과분 (2배 가산)</span>
                                <span className="font-bold">{result.extra.toLocaleString()}원</span>
                            </div>
                            {businessSize === 'under5' && (
                                <div className="mt-4 p-4 bg-amber-900/30 border border-amber-700/50 rounded-xl text-amber-200 text-xs leading-relaxed break-keep">
                                    ⚠️ 4인 이하 사업장은 법정 가산수당 의무가 없어 통상 1배로 계산되었습니다. 사업장 규정 또는 근로계약서를 확인하세요.
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Info Section */}
            <div className="max-w-xl mx-auto px-4 mt-20 space-y-12">
                <section>
                    <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                        <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                        휴일근로수당 계산 핵심 가이드
                    </h3>
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
                        <div className="flex gap-4">
                            <span className="text-2xl">✅</span>
                            <div>
                                <h4 className="font-bold mb-1 text-slate-900 text-lg">가산 비율 (5인 이상)</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    휴일 근로는 기본 시급의 50%가 가산되어 총 150%를 지급받습니다. 만약 하루 8시간을 넘겨 일한다면 초과분에 대해서는 100%가 가산된 200%를 지급받아야 합니다.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-2xl">✅</span>
                            <div>
                                <h4 className="font-bold mb-1 text-slate-900 text-lg">통상임금의 범위</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    기본급뿐만 아니라 매월 고정적·일률적으로 지급되는 식대, 직책수당 등을 모두 포함하여 계산한 시급이 기준이 됩니다.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-2xl">✅</span>
                            <div>
                                <h4 className="font-bold mb-1 text-slate-900 text-lg">휴일 vs 휴무일</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    법정 공휴일이나 주휴일은 &apos;휴일&apos;이며 가산수당 대상입니다. 하지만 토요일처럼 노사 합의로 쉬는 &apos;휴무일&apos;은 별도 규정이 없으면 무급이며 수당 발생 여부가 다를 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <CoupangAds 
                    keyword="재테크 도서" 
                    title="💰 내 급여, 더 똑똑하게 관리하기"
                    hookText="수당만큼 중요한 것이 번 돈을 지키는 것입니다! 사회초년생부터 고수까지 추천하는 재테크 및 자산관리 베스트 도서 모음입니다."
                />
            </div>

            <style jsx global>{`
                @keyframes loading-bar {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }
                .animate-loading-bar {
                    animation: loading-bar 2s linear forwards;
                }
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
}
