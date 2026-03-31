'use client';

import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// 2026년 기준 중위소득 데이터 (100% 기준)
const MEDIAN_INCOME_2026 = [
    { people: 1, income: 2564238 },
    { people: 2, income: 4199292 },
    { people: 3, income: 5359036 },
    { people: 4, income: 6494738 },
    { people: 5, income: 7556719 },
    { people: 6, income: 8555952 }
];

// 비율 정의
const PERCENTAGES = [
    { label: '50% (기초생활보장)', value: 0.5, desc: '생계/의료/주거 급여 기준' },
    { label: '70% (교육급여 등)', value: 0.7, desc: '각종 바우처 선정 기준' },
    { label: '100% (중위소득)', value: 1.0, desc: '우리나라 가구 소득의 딱 중간' },
    { label: '120% (하위 60% 상당)', value: 1.2, desc: '청년 주거 지원 등 기준' },
    { label: '150% (하위 70% 상당)', value: 1.5, desc: '재난지원금/정부지원금 핵심 기준', highlight: true },
    { label: '180% (하위 80% 상당)', value: 1.8, desc: '긴급복지 등 지원 기준' },
    { label: '200% (중산층 기준)', value: 2.0, desc: '안정적인 중산층 소득 수준' }
];

export default function MedianIncomeCalculator() {
    const [householdSize, setHouseholdSize] = useState(4);

    const currentMedian = useMemo(() => {
        const found = MEDIAN_INCOME_2026.find(item => item.people === householdSize);
        return found ? found.income : 0;
    }, [householdSize]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' })
            .format(amount)
            .replace('₩', '') + '원';
    };

    const formatMillion = (amount: number) => {
        return (amount / 10000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '만원';
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Header />
            
            <main className="flex-grow py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700">
                        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-tight mb-4">
                            2026년 최신 기준 안내
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
                            중위소득 및 <span className="text-blue-600">지원금 선정</span> 계산기
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                            가구원수를 입력하면 하위 70%, 60%, 50% 등 <br className="hidden md:block" />
                            정부 지원금 대상자 여부를 한눈에 확인할 수 있습니다.
                        </p>
                    </div>

                    {/* Calculator Section */}
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-12">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <label className="block text-blue-100 text-sm font-bold uppercase tracking-wider mb-4">
                                    우리집 가구원수는 몇 명인가요?
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {[1, 2, 3, 4, 5, 6].map((num) => (
                                        <button
                                            key={num}
                                            onClick={() => setHouseholdSize(num)}
                                            className={`
                                                flex-1 min-w-[60px] py-4 rounded-xl font-bold text-xl transition-all duration-300
                                                ${householdSize === num 
                                                    ? 'bg-white text-blue-700 shadow-lg scale-105' 
                                                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'}
                                            `}
                                        >
                                            {num}인
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {/* Decorative Ball */}
                            <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                        </div>

                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {PERCENTAGES.map((p, idx) => (
                                    <div 
                                        key={idx}
                                        className={`
                                            group p-6 rounded-2xl border-2 transition-all duration-300
                                            ${p.highlight 
                                                ? 'bg-blue-50 border-blue-200 shadow-md ring-4 ring-blue-500/5' 
                                                : 'bg-white border-gray-100 hover:border-gray-200'}
                                        `}
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <h3 className={`font-bold text-lg ${p.highlight ? 'text-blue-700' : 'text-gray-900'}`}>
                                                    {p.label}
                                                </h3>
                                                <p className="text-gray-500 text-xs mt-0.5">{p.desc}</p>
                                            </div>
                                            {p.highlight && (
                                                <span className="bg-blue-600 text-white text-[10px] px-2 py-1 rounded-md font-black animate-pulse">
                                                    강력 추천
                                                </span>
                                            )}
                                        </div>
                                        <div className="mt-4">
                                            <p className={`text-2xl md:text-3xl font-black ${p.highlight ? 'text-blue-800' : 'text-gray-900'}`}>
                                                {formatCurrency(currentMedian * p.value)}
                                            </p>
                                            <p className="text-gray-400 text-sm font-medium mt-1">
                                                약 {formatMillion(currentMedian * p.value)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Policy Card (Note from User) */}
                    <div className="bg-indigo-900 text-white rounded-3xl p-8 mb-12 shadow-xl border border-indigo-800 relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
                                <span className="text-3xl">💡</span> 정책 참고사항 (꼭 확인하세요!)
                            </h2>
                            <div className="space-y-6 text-indigo-100 leading-relaxed font-medium">
                                <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
                                    <p className="mb-2 text-white font-bold">소득 하위 70% 지원 기준</p>
                                    <p className="text-sm">
                                        정부가 기준으로 제시한 <span className="text-yellow-300 font-black">‘소득 하위 70%’</span>는 통상적으로 <span className="text-yellow-300 font-black">중위소득 150%</span> 수준에 해당합니다. 
                                        예를 들어 4인 가구의 경우 월 소득 약 <span className="text-white font-bold">974만원 이하</span>라면 대상에 포함될 가능성이 높습니다.
                                    </p>
                                </div>
                                
                                <ul className="list-disc list-inside space-y-3 text-sm">
                                    <li>작년 추경 지원금 대상이 아니었다면 올해도 제외될 가능성이 높습니다 (상위 10% 제외 기준 동일).</li>
                                    <li>건강보험료 기준액은 위 소득 금액을 기준으로 산정됩니다.</li>
                                    <li>소득 하위 60%는 중위소득 약 120%~130%, 하위 50%는 중위소득 100% 수준을 참고하시면 좋습니다.</li>
                                    <li>실제 선정 기준은 재산 합산액에 따라 달라질 수 있으므로 &apos;복지로&apos; 등 공식 사이트를 통한 확인이 필수입니다.</li>
                                </ul>
                            </div>
                        </div>
                        {/* Decorative Background Art */}
                        <div className="absolute bottom-[-10%] right-[-5%] text-[150px] opacity-10 pointer-events-none grayscale">💰</div>
                    </div>

                    {/* Comparison Table Section */}
                    <section className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 overflow-x-auto">
                        <h2 className="text-2xl font-black text-gray-900 mb-8 text-center italic">가구원수별 중위소득 전체 표 (2026)</h2>
                        <table className="w-full text-sm text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr className="bg-gray-50 text-gray-400 font-bold border-b border-gray-100 uppercase tracking-widest text-[10px]">
                                    <th className="py-4 px-4 text-gray-900">구분</th>
                                    <th className="py-4 px-2">중위 50%</th>
                                    <th className="py-4 px-2">중위 100%</th>
                                    <th className="py-4 px-2 text-blue-600">중위 150% (하위 70%)</th>
                                    <th className="py-4 px-2">중위 200%</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 font-medium divide-y divide-gray-50">
                                {MEDIAN_INCOME_2026.map((item) => (
                                    <tr key={item.people} className={`hover:bg-blue-50/30 transition-colors ${item.people === householdSize ? 'bg-blue-50/50' : ''}`}>
                                        <td className="py-5 px-4 font-black text-gray-900">{item.people}인 가구</td>
                                        <td className="py-5 px-2">{formatCurrency(item.income * 0.5)}</td>
                                        <td className="py-5 px-2 font-bold text-gray-700">{formatCurrency(item.income)}</td>
                                        <td className="py-5 px-2 font-black text-blue-700">{formatCurrency(item.income * 1.5)}</td>
                                        <td className="py-5 px-2">{formatCurrency(item.income * 2.0)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p className="mt-8 text-gray-400 text-xs text-center font-medium">
                            * 보건복지부 고시 기준이며, 실제 복지사업별로 적용 시점이 다를 수 있습니다.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
