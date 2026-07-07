'use client';

import { useState } from 'react';
import CoupangAds from '@/components/CoupangAds';

type BusinessType = 'private' | 'business';
type FuelType = 'normal' | 'ev';
type PrepayOption = 'none' | 'jan' | 'mar' | 'jun' | 'sep';

const PREPAY_RATES: Record<PrepayOption, number> = {
    none: 0,
    jan: 0.0458,
    mar: 0.0376,
    jun: 0.0251,
    sep: 0.0125,
};

const PREPAY_LABELS: Record<PrepayOption, string> = {
    none: '연납 안함 (6월·12월 정기 분납)',
    jan: '1월 연납 (약 4.58% 할인)',
    mar: '3월 연납 (약 3.76% 할인)',
    jun: '6월 연납 (약 2.51% 할인)',
    sep: '9월 연납 (약 1.25% 할인)',
};

type CalcResult = {
    baseTax: number;
    reductionRate: number;
    reductionAmount: number;
    carTax: number;
    eduTax: number;
    totalTax: number;
    halfPayment: number;
    prepayDiscount: number;
    prepayFinal: number;
    carAge: number;
};

function calcBaseTax(businessType: BusinessType, fuelType: FuelType, cc: number): number {
    if (fuelType === 'ev') {
        return businessType === 'private' ? 100000 : 20000;
    }
    if (businessType === 'private') {
        if (cc <= 1000) return cc * 80;
        if (cc <= 1600) return cc * 140;
        return cc * 200;
    }
    if (cc <= 1600) return cc * 18;
    if (cc <= 2500) return cc * 19;
    return cc * 24;
}

export default function CarTaxCalculatorPage() {
    const [businessType, setBusinessType] = useState<BusinessType>('private');
    const [fuelType, setFuelType] = useState<FuelType>('normal');
    const [displacement, setDisplacement] = useState<string>('1998');
    const [regYear, setRegYear] = useState<string>('2022');
    const [prepayOption, setPrepayOption] = useState<PrepayOption>('none');
    const [result, setResult] = useState<CalcResult | null>(null);
    const [showAd, setShowAd] = useState<boolean>(false);
    const [isCalculating, setIsCalculating] = useState<boolean>(false);

    const calculate = () => {
        const cc = parseInt(displacement, 10);
        const year = parseInt(regYear, 10);
        const currentYear = new Date().getFullYear();

        if (fuelType === 'normal' && (isNaN(cc) || cc <= 0)) {
            alert('배기량을 정확히 입력해주세요.');
            return;
        }
        if (isNaN(year) || year < 1990 || year > currentYear) {
            alert('등록연도를 정확히 입력해주세요.');
            return;
        }

        setIsCalculating(true);
        setShowAd(true);

        setTimeout(() => {
            const carAge = Math.max(currentYear - year, 0);
            const baseTax = calcBaseTax(businessType, fuelType, cc || 0);

            let reductionRate = 0;
            if (businessType === 'private' && fuelType === 'normal' && carAge >= 3) {
                reductionRate = Math.min((carAge - 2) * 5, 50);
            }

            const reductionAmount = Math.floor((baseTax * reductionRate) / 100);
            const carTax = baseTax - reductionAmount;
            const eduTax = Math.floor(carTax * 0.3);
            const totalTax = carTax + eduTax;
            const halfPayment = Math.round(totalTax / 2);
            const prepayDiscount = Math.floor(totalTax * PREPAY_RATES[prepayOption]);
            const prepayFinal = totalTax - prepayDiscount;

            setResult({
                baseTax,
                reductionRate,
                reductionAmount,
                carTax,
                eduTax,
                totalTax,
                halfPayment,
                prepayDiscount,
                prepayFinal,
                carAge,
            });
            setShowAd(false);
            setIsCalculating(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-['Pretendard'] pb-20">
            {/* Header / Hero */}
            <div className="bg-gradient-to-br from-slate-800 to-blue-900 pt-16 pb-32 px-4 text-center text-white">
                <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">자동차세 계산기</h1>
                <p className="text-blue-100 font-medium opacity-90 max-w-lg mx-auto break-keep">
                    배기량, 등록연도만 입력하면<br />차령 경감과 연납 할인까지 반영한 예상 자동차세를 확인하세요.
                </p>
            </div>

            {/* Calculator Card */}
            <div className="max-w-xl mx-auto px-4 -mt-16 relative z-10">
                <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border border-blue-50 overflow-hidden relative">
                    <div className="space-y-10">
                        {/* Business Type Toggle */}
                        <div>
                            <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                                차량 구분
                            </label>
                            <div className="flex bg-slate-100 p-1.5 rounded-2xl">
                                <button
                                    onClick={() => setBusinessType('private')}
                                    className={`flex-1 py-3 rounded-xl font-bold transition-all ${businessType === 'private' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    비영업용 (자가용)
                                </button>
                                <button
                                    onClick={() => setBusinessType('business')}
                                    className={`flex-1 py-3 rounded-xl font-bold transition-all ${businessType === 'business' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    영업용
                                </button>
                            </div>
                        </div>

                        {/* Fuel Type Toggle */}
                        <div>
                            <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                                연료·차종
                            </label>
                            <div className="flex bg-slate-100 p-1.5 rounded-2xl">
                                <button
                                    onClick={() => setFuelType('normal')}
                                    className={`flex-1 py-3 rounded-xl font-bold transition-all ${fuelType === 'normal' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    일반(휘발유·경유 등)
                                </button>
                                <button
                                    onClick={() => setFuelType('ev')}
                                    className={`flex-1 py-3 rounded-xl font-bold transition-all ${fuelType === 'ev' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    전기·수소차
                                </button>
                            </div>
                        </div>

                        {/* Displacement */}
                        {fuelType === 'normal' && (
                            <div>
                                <label className="block text-lg font-bold mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">
                                        cc
                                    </span>
                                    배기량
                                </label>
                                <div className="relative border-b-2 border-slate-200 focus-within:border-blue-500 transition-colors flex items-center group">
                                    <input
                                        type="number"
                                        value={displacement}
                                        onChange={(e) => setDisplacement(e.target.value)}
                                        className="w-full text-3xl py-2 outline-none font-black bg-transparent"
                                        placeholder="1998"
                                    />
                                    <span className="text-xl font-bold text-slate-400">cc</span>
                                </div>
                                <p className="mt-2 text-xs text-slate-400">* 자동차등록증(차량등록증)의 배기량을 확인하세요.</p>
                            </div>
                        )}

                        {/* Registration Year */}
                        <div>
                            <label className="block text-lg font-bold mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">
                                    📅
                                </span>
                                최초 등록연도
                            </label>
                            <div className="relative border-b-2 border-slate-200 focus-within:border-blue-500 transition-colors flex items-center group">
                                <input
                                    type="number"
                                    value={regYear}
                                    onChange={(e) => setRegYear(e.target.value)}
                                    className="w-full text-3xl py-2 outline-none font-black bg-transparent"
                                    placeholder="2022"
                                />
                                <span className="text-xl font-bold text-slate-400">년</span>
                            </div>
                            <p className="mt-2 text-xs text-slate-400">
                                * 차령 3년 이상부터 매년 5%p씩(최대 50%) 세액이 경감됩니다.
                            </p>
                        </div>

                        {/* Prepay Option */}
                        <div>
                            <label className="block text-lg font-bold mb-3 flex items-center gap-2">
                                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">
                                    %
                                </span>
                                연납 여부
                            </label>
                            <select
                                value={prepayOption}
                                onChange={(e) => setPrepayOption(e.target.value as PrepayOption)}
                                className="w-full text-lg py-3 px-4 outline-none font-bold bg-slate-50 rounded-xl border border-slate-200 focus:border-blue-500 transition-colors"
                            >
                                {(Object.keys(PREPAY_LABELS) as PrepayOption[]).map((key) => (
                                    <option key={key} value={key}>
                                        {PREPAY_LABELS[key]}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button
                        onClick={calculate}
                        disabled={isCalculating}
                        className="w-full mt-12 bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-[1.5rem] text-xl font-black shadow-lg shadow-blue-200 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                    >
                        {isCalculating ? (
                            <>
                                <div className="w-5 h-5 border-[3px] border-white/30 border-t-white rounded-full animate-spin"></div>
                                계산 중...
                            </>
                        ) : (
                            '자동차세 계산하기'
                        )}
                    </button>

                    {/* Ad Interstitial Overlay */}
                    {showAd && (
                        <div className="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center p-8 text-center animate-in fade-in">
                            <p className="text-blue-600 font-bold mb-6 animate-pulse">차령 경감률과 지방교육세를 반영해 계산하고 있습니다...</p>
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
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">
                                {prepayOption === 'none' ? '연간 총 자동차세' : '연납 시 실제 납부액'}
                            </p>
                            <h2 className="text-5xl font-black text-yellow-400 tracking-tight">
                                {(prepayOption === 'none' ? result.totalTax : result.prepayFinal).toLocaleString()}
                                <span className="text-2xl ml-1">원</span>
                            </h2>
                        </div>

                        <div className="space-y-4 border-t border-slate-700 pt-8 text-sm">
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 font-medium">기준 세액 (경감 전)</span>
                                <span className="font-bold">{result.baseTax.toLocaleString()}원</span>
                            </div>
                            {result.reductionRate > 0 && (
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-400 font-medium">차령 경감 (차령 {result.carAge}년, {result.reductionRate}%)</span>
                                    <span className="font-bold text-emerald-400">-{result.reductionAmount.toLocaleString()}원</span>
                                </div>
                            )}
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 font-medium">자동차세 (경감 후)</span>
                                <span className="font-bold">{result.carTax.toLocaleString()}원</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 font-medium">지방교육세 (30%)</span>
                                <span className="font-bold">{result.eduTax.toLocaleString()}원</span>
                            </div>
                            <div className="flex justify-between items-center border-t border-slate-700 pt-4">
                                <span className="text-slate-300 font-bold">연간 총 자동차세</span>
                                <span className="font-black">{result.totalTax.toLocaleString()}원</span>
                            </div>

                            {prepayOption === 'none' ? (
                                <div className="mt-2 p-4 bg-slate-800/60 rounded-xl">
                                    <p className="text-slate-300 font-bold mb-2">정기 분납 시 (6월·12월)</p>
                                    <div className="flex justify-between">
                                        <span className="text-slate-400">1기분 (6월)</span>
                                        <span className="font-bold">{result.halfPayment.toLocaleString()}원</span>
                                    </div>
                                    <div className="flex justify-between mt-1">
                                        <span className="text-slate-400">2기분 (12월)</span>
                                        <span className="font-bold">{result.halfPayment.toLocaleString()}원</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="mt-2 p-4 bg-emerald-900/30 border border-emerald-700/50 rounded-xl">
                                    <div className="flex justify-between">
                                        <span className="text-emerald-200 font-medium">연납 할인액</span>
                                        <span className="font-bold text-emerald-300">-{result.prepayDiscount.toLocaleString()}원</span>
                                    </div>
                                    <div className="flex justify-between mt-2 border-t border-emerald-700/40 pt-2">
                                        <span className="text-emerald-100 font-bold">최종 납부액</span>
                                        <span className="font-black text-emerald-300">{result.prepayFinal.toLocaleString()}원</span>
                                    </div>
                                </div>
                            )}

                            {fuelType === 'ev' && (
                                <div className="mt-2 p-4 bg-amber-900/30 border border-amber-700/50 rounded-xl text-amber-200 text-xs leading-relaxed break-keep">
                                    ⚠️ 전기·수소차는 배기량 개념이 없어 정액(비영업용 10만원·영업용 2만원)으로 과세되며, 이미 최저 구간이라 차령 경감은 적용되지 않습니다.
                                </div>
                            )}
                            {businessType === 'business' && fuelType === 'normal' && (
                                <div className="mt-2 p-4 bg-amber-900/30 border border-amber-700/50 rounded-xl text-amber-200 text-xs leading-relaxed break-keep">
                                    ⚠️ 영업용 승용차는 비영업용과 다른 별도 경감 규정이 적용되어 이 계산기에서는 차령 경감을 반영하지 않았습니다.
                                </div>
                            )}
                        </div>

                        <p className="mt-6 text-[11px] text-slate-500 leading-relaxed break-keep">
                            * 본 계산 결과는 참고용 예상 금액이며, 지자체 고시·원단위 절사 방식에 따라 실제 고지 세액과 차이가 있을 수 있습니다. 정확한 금액은 위택스(Wetax) 또는 관할 지자체에서 확인하세요.
                        </p>
                    </div>
                )}
            </div>

            {/* Info Section */}
            <div className="max-w-xl mx-auto px-4 mt-20 space-y-12">
                <section>
                    <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                        <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                        자동차세 계산 방법
                    </h3>
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
                        <div className="flex gap-4">
                            <span className="text-2xl">✅</span>
                            <div>
                                <h4 className="font-bold mb-1 text-slate-900 text-lg">기본 계산식</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    자동차세(승용차) = 배기량(cc) × cc당 세액 − 차령 경감액. 여기에 산출된 자동차세의
                                    30%가 지방교육세로 추가 부과되어 총 납부액이 정해집니다.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-2xl">✅</span>
                            <div>
                                <h4 className="font-bold mb-1 text-slate-900 text-lg">배기량별 cc당 세액</h4>
                                <div className="mt-2 overflow-hidden rounded-xl border border-slate-200">
                                    <table className="w-full text-xs text-left">
                                        <thead className="bg-slate-900 text-white">
                                            <tr>
                                                <th className="px-3 py-2">구분</th>
                                                <th className="px-3 py-2">1,000cc 이하</th>
                                                <th className="px-3 py-2">1,600cc 이하</th>
                                                <th className="px-3 py-2">초과</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-slate-600">
                                            <tr className="border-t border-slate-100">
                                                <td className="px-3 py-2 font-bold">비영업용</td>
                                                <td className="px-3 py-2">80원</td>
                                                <td className="px-3 py-2">140원</td>
                                                <td className="px-3 py-2">200원(1,600cc 초과)</td>
                                            </tr>
                                            <tr className="border-t border-slate-100">
                                                <td className="px-3 py-2 font-bold">영업용</td>
                                                <td className="px-3 py-2">18원</td>
                                                <td className="px-3 py-2">18원</td>
                                                <td className="px-3 py-2">19원(2,500cc↓)·24원(2,500cc↑)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-2xl">✅</span>
                            <div>
                                <h4 className="font-bold mb-1 text-slate-900 text-lg">차령 경감(연식 할인)</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    비영업용 승용차는 등록 후 3년째부터 매년 5%p씩 세액이 경감되며, 12년 이상이면
                                    최대 50%까지 경감됩니다. (예: 7년 된 차는 25% 경감)
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-2xl">✅</span>
                            <div>
                                <h4 className="font-bold mb-1 text-slate-900 text-lg">전기·수소차는 정액 과세</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    내연기관이 없어 배기량을 산정할 수 없는 전기차·수소차는 비영업용 10만원, 영업용
                                    2만원의 정액 세금이 부과되고, 지방교육세를 더하면 비영업용 기준 연 13만원입니다.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-2xl">✅</span>
                            <div>
                                <h4 className="font-bold mb-1 text-slate-900 text-lg">연납 할인율(2026년 기준)</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    1년치 세금을 미리 내는 연납을 신청하면 남은 기간에 비례해 할인받습니다. 1월
                                    신청 시 약 4.58%로 할인 폭이 가장 크고, 3월 3.76%, 6월 2.51%, 9월 1.25% 순으로
                                    줄어듭니다. 신청은 위택스(Wetax) 또는 정부24, 관할 지자체 앱에서 가능합니다.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-2xl">✅</span>
                            <div>
                                <h4 className="font-bold mb-1 text-slate-900 text-lg">정기 납부 기간</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    연납을 신청하지 않으면 1년치 세액을 반으로 나눠 1기분은 6월 16일~30일, 2기분은
                                    12월 16일~31일에 각각 납부합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                        <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                        자주 묻는 질문
                    </h3>
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
                        <div>
                            <h4 className="font-bold text-slate-900 mb-1">경차(1,000cc 이하)는 자동차세 감면이 있나요?</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                경차는 지자체 조례에 따라 자동차세를 일정 한도까지 추가 감면하는 경우가 많습니다.
                                다만 감면 한도와 대상은 지역별로 달라 관할 지자체(위택스) 확인이 필요합니다.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-1">차를 연도 중간에 팔면 세금은 어떻게 되나요?</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                자동차세는 매년 6월 1일, 12월 1일 기준 소유자에게 각 기분 세액이 전액 부과됩니다.
                                연납을 낸 뒤 중도에 이전·말소하면 남은 기간에 해당하는 세액은 다음 달 자동
                                환급됩니다.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-1">차령 경감은 배기량과 무관하게 똑같이 적용되나요?</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                네. 차령 경감률(3년차 5%~12년차 50%)은 배기량 구간과 관계없이 산출된 세액에
                                동일한 비율로 적용됩니다.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                        <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                        참고자료
                    </h3>
                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-3 text-sm">
                        <a
                            href="https://www.wetax.go.kr/"
                            className="block rounded-xl border border-slate-100 bg-slate-50 p-3 hover:bg-slate-100 transition-colors"
                        >
                            <strong className="block font-bold text-slate-800">위택스 (Wetax)</strong>
                            <span className="text-xs text-slate-500">자동차세 조회·연납 신청 공식 지방세 포털</span>
                        </a>
                        <a
                            href="https://www.seocho.go.kr/site/tax/03/10303010000002023050810.jsp"
                            className="block rounded-xl border border-slate-100 bg-slate-50 p-3 hover:bg-slate-100 transition-colors"
                        >
                            <strong className="block font-bold text-slate-800">서초구청 - 자동차세 연납 안내</strong>
                            <span className="text-xs text-slate-500">연납 할인율 및 신청 기간 공식 안내</span>
                        </a>
                        <a
                            href="https://www.seocho.go.kr/site/tax/02/10201050000002023050810.jsp"
                            className="block rounded-xl border border-slate-100 bg-slate-50 p-3 hover:bg-slate-100 transition-colors"
                        >
                            <strong className="block font-bold text-slate-800">서초구청 - 자동차세(소유분) 안내</strong>
                            <span className="text-xs text-slate-500">배기량별 세율, 차령 경감 산식 공식 안내</span>
                        </a>
                    </div>
                </section>

                <CoupangAds
                    keyword="차량용품"
                    title="🚗 내 차 관리, 더 알뜰하게"
                    hookText="자동차세 계산이 끝났다면, 세차용품부터 차량 정리함까지 필수 차량용품도 함께 확인해보세요."
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
