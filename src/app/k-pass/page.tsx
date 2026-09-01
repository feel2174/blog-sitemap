'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

interface BankCardRefundInfo {
    name: string;
    type: string;
    refundSchedule: string;
    creditMethod: string;
    checkMethod: string;
    appGuide: string;
    color: string;
    badgeColor: string;
    officialUrl: string;
}

const bankCardList: BankCardRefundInfo[] = [
    {
        name: '신한카드 (신한 K-패스)',
        type: '신한 SOL페이 / 신한은행',
        refundSchedule: '매월 10일 ~ 13일경 (영업일 기준)',
        creditMethod: '결제일 청구대금에서 환급금 자동 차감 (청구할인)',
        checkMethod: '신한 결제계좌로 현금 캐시백 입금 (결제일 후 2~3영업일)',
        appGuide: '신한 SOL페이 앱 > 마이페이지 > 정부지원/바우처 > K-패스 적립내역',
        color: 'border-blue-200 hover:border-blue-500 bg-blue-50/40',
        badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
        officialUrl: 'https://korea-pass.kr/',
    },
    {
        name: 'NH농협카드 (농협 K-패스)',
        type: 'NH pay / 농협은행·축협',
        refundSchedule: '매월 11일 ~ 14일경 (영업일 기준)',
        creditMethod: '해당 월 신용카드 청구서에 마이너스(-) 할인 반영',
        checkMethod: '농협 결제계좌로 현금 캐시백 다이렉트 입금',
        appGuide: 'NH pay 앱 > 혜택/마이 > 정부지원금 > K-패스 마일리지',
        color: 'border-emerald-200 hover:border-emerald-500 bg-emerald-50/40',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        officialUrl: 'https://korea-pass.kr/',
    },
    {
        name: 'KB국민카드 (KB K-패스)',
        type: 'KB Pay / 국민은행',
        refundSchedule: '매월 12일 ~ 15일경 (영업일 기준)',
        creditMethod: '결제대금 차감 후 잔여금 발생 시 환급 계좌 입금',
        checkMethod: '국민은행/연결계좌로 현금 환급금 캐시백 입금',
        appGuide: 'KB Pay 앱 > 메뉴 > 혜택/바우처 > K-패스 환급금 내역',
        color: 'border-amber-200 hover:border-amber-500 bg-amber-50/40',
        badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
        officialUrl: 'https://korea-pass.kr/',
    },
    {
        name: '우리카드 (우리 K-패스)',
        type: '우리WON카드 / 우리은행',
        refundSchedule: '매월 7일 ~ 10일경 (가장 빠른 편)',
        creditMethod: '당월 대중교통 이용대금 청구할인 적용',
        checkMethod: '우리은행 결제계좌로 현금 입금 완료',
        appGuide: '우리WON카드 앱 > MY > 정부지원사업 > K-패스 내역조회',
        color: 'border-sky-200 hover:border-sky-500 bg-sky-50/40',
        badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
        officialUrl: 'https://korea-pass.kr/',
    },
    {
        name: '하나카드 (하나 K-패스)',
        type: '하나Pay / 하나은행',
        refundSchedule: '매월 10일 ~ 13일경',
        creditMethod: '신용카드 결제일에 결제금액 차감 청구',
        checkMethod: '하나은행 결제계좌로 캐시백 현금 입금',
        appGuide: '하나Pay 앱 > 마이메뉴 > 정부지원 바우처 > K-패스 환급',
        color: 'border-teal-200 hover:border-teal-500 bg-teal-50/40',
        badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
        officialUrl: 'https://korea-pass.kr/',
    },
    {
        name: '삼성카드 (삼성 K-패스)',
        type: '삼성카드 앱 / 모니모',
        refundSchedule: '매월 9일 ~ 12일경',
        creditMethod: '신용카드 결제대금에서 환급금 자동 공제',
        checkMethod: '체크카드 연결 계좌로 현금 캐시백 송금',
        appGuide: '삼성카드 앱 > 혜택 > 정부지원금/K-패스 조회',
        color: 'border-indigo-200 hover:border-indigo-500 bg-indigo-50/40',
        badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
        officialUrl: 'https://korea-pass.kr/',
    },
    {
        name: '현대카드 (현대 K-패스)',
        type: '현대카드 앱',
        refundSchedule: '매월 10일 ~ 15일경 (결제일별 상이)',
        creditMethod: '도래하는 결제일 청구서에 청구할인으로 반영',
        checkMethod: '체크 결제계좌로 환급금 자동 입금',
        appGuide: '현대카드 앱 > 메뉴 > 혜택/공공바우처 > K-패스 내역',
        color: 'border-zinc-300 hover:border-zinc-600 bg-zinc-50',
        badgeColor: 'bg-zinc-200 text-zinc-800 border-zinc-300',
        officialUrl: 'https://korea-pass.kr/',
    },
    {
        name: 'BC카드 / IBK기업은행 (IBK K-패스)',
        type: '페이북 / i-ONE Bank',
        refundSchedule: '매월 10일 ~ 14일경',
        creditMethod: '결제일 결제대금 자동 차감',
        checkMethod: '기업은행/BC 제휴계좌로 현금 캐시백 입금',
        appGuide: '페이북 앱 > MY > K-패스 마일리지 / 기업은행 앱 카드 메뉴',
        color: 'border-rose-200 hover:border-rose-500 bg-rose-50/40',
        badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
        officialUrl: 'https://korea-pass.kr/',
    },
    {
        name: '카카오뱅크 / 케이뱅크 (인터넷뱅크 K-패스)',
        type: '카카오뱅크·케이뱅크 앱',
        refundSchedule: '매월 15일 ~ 20일경',
        creditMethod: '해당 카드 결제일 청구할인',
        checkMethod: '카카오뱅크/케이뱅크 계좌로 현금 캐시백 즉시 입금',
        appGuide: '각 은행 앱 > 카드 관리 > K-패스 캐시백 내역',
        color: 'border-yellow-200 hover:border-yellow-500 bg-yellow-50/40',
        badgeColor: 'bg-yellow-100 text-yellow-900 border-yellow-300',
        officialUrl: 'https://korea-pass.kr/',
    },
    {
        name: '모바일 이즐 & 티머니 (선불형 K-패스)',
        type: '모바일이즐 / 모바일티머니',
        refundSchedule: '매월 15일 ~ 20일경',
        creditMethod: '해당 없음 (선불 충전식)',
        checkMethod: '앱 내 마일리지 포인트로 적립 후 교통카드 잔액 무료 충전',
        appGuide: '모바일이즐 또는 티머니 앱 > K-패스 마일리지 확인 및 충전',
        color: 'border-purple-200 hover:border-purple-500 bg-purple-50/40',
        badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
        officialUrl: 'https://korea-pass.kr/',
    },
];

export default function KPassPage() {
    // Calculator States
    const [monthlySpend, setMonthlySpend] = useState<number>(70000);
    const [rideCount, setRideCount] = useState<number>(35);
    const [userType, setUserType] = useState<'normal' | 'youth' | 'lowIncome' | 'multiChild3'>('youth');
    const [region, setRegion] = useState<'national' | 'gyeonggi' | 'incheon'>('gyeonggi');
    const [isOffPeak, setIsOffPeak] = useState<boolean>(false);

    // Filter for bank search
    const [searchBank, setSearchBank] = useState<string>('');

    // Calculator calculation
    const calculationResult = useMemo(() => {
        // Base rate
        let baseRate = 0.20; // 20%
        let userTypeLabel = '일반 (20%)';

        if (userType === 'youth') {
            baseRate = 0.30;
            userTypeLabel = '청년 (30%)';
        } else if (userType === 'lowIncome') {
            baseRate = 0.533;
            userTypeLabel = '저소득층 (53.3%)';
        } else if (userType === 'multiChild3') {
            baseRate = 0.50;
            userTypeLabel = '3자녀 이상 다자녀 (50%)';
        }

        // Off-peak bonus (출퇴근 시차제 +30%p)
        const finalRate = isOffPeak ? Math.min(baseRate + 0.30, 0.833) : baseRate;

        // Minimum 15 rides condition check
        const isEligible = rideCount >= 15;

        // Cap rule: National is max 60 rides, Gyeonggi/Incheon is UNLIMITED
        let effectiveRides = rideCount;
        if (region === 'national' && rideCount > 60) {
            effectiveRides = 60;
        }

        // Spend per ride estimation
        const avgPerRide = rideCount > 0 ? monthlySpend / rideCount : 0;
        const eligibleSpend = avgPerRide * effectiveRides;

        // Estimated refund
        let estimatedRefund = 0;
        if (isEligible) {
            estimatedRefund = Math.round(eligibleSpend * finalRate);
        }

        const realCost = Math.max(monthlySpend - estimatedRefund, 0);

        return {
            isEligible,
            effectiveRides,
            finalRatePercent: Math.round(finalRate * 1000) / 10,
            estimatedRefund,
            realCost,
            userTypeLabel,
        };
    }, [monthlySpend, rideCount, userType, region, isOffPeak]);

    const filteredBankList = useMemo(() => {
        if (!searchBank.trim()) return bankCardList;
        return bankCardList.filter(
            (b) =>
                b.name.toLowerCase().includes(searchBank.toLowerCase()) ||
                b.type.toLowerCase().includes(searchBank.toLowerCase()) ||
                b.appGuide.toLowerCase().includes(searchBank.toLowerCase())
        );
    }, [searchBank]);

    return (
        <div
            className="min-h-screen bg-slate-50 text-neutral-900 flex flex-col items-center py-8 px-4 sm:px-6 relative overflow-hidden"
            style={{
                fontFamily:
                    '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
            }}
        >
            {/* Background Decorative Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/40 via-white to-slate-50 z-[1] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-teal-200/30 via-transparent to-transparent z-[2] pointer-events-none" />

            <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
                
                {/* 1. HERO / INTRODUCTION SECTION */}
                <div className="text-center mb-6 w-full pt-2">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-emerald-800 text-[11px] font-black tracking-wider uppercase mb-3.5 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                        </span>
                        2026 K-패스 & The 경기패스 공식 안내
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-3 leading-tight text-neutral-900 break-keep">
                        K-패스 등록·발급방법 &<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
                            환급 기준 15회·은행별 환급일 총정리
                        </span>
                    </h1>

                    <div className="h-1 w-14 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-3.5" />

                    <p className="text-neutral-600 text-xs sm:text-sm font-medium tracking-tight leading-relaxed max-w-lg mx-auto break-keep mb-6">
                        대중교통비 최대 <strong>53.3% + 출퇴근 추가 환급</strong>! 카드를 발급받은 후 반드시 <strong>K-패스 공식 홈페이지(korea-pass.kr)</strong>에 카드를 등록해야 환급이 정상 진행됩니다.
                    </p>

                    {/* HERO IMMEDIATE ACTION BUTTONS (서론 섹션 바로가기 버튼) */}
                    <div className="w-full flex flex-col sm:flex-row gap-2.5 sm:gap-3 mb-6">
                        <Link
                            href="https://korea-pass.kr/"
                            className="flex-1 group relative flex items-center justify-between bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-4 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
                        >
                            <div className="flex items-center gap-3 text-left">
                                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white text-xl backdrop-blur-sm shrink-0">
                                    💳
                                </div>
                                <div>
                                    <span className="text-emerald-100 text-[10px] font-bold block">공식 홈페이지</span>
                                    <span className="text-white font-extrabold text-sm sm:text-base tracking-tight">K-패스 카드등록 바로가기</span>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-90 group-hover:opacity-100 group-hover:translate-x-1 transition-transform shrink-0"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </Link>

                        <a
                            href="#calculator"
                            className="flex-1 group relative flex items-center justify-between bg-white border border-emerald-200 text-emerald-800 p-4 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md hover:bg-emerald-50/50 hover:-translate-y-0.5 active:scale-[0.98]"
                        >
                            <div className="flex items-center gap-3 text-left">
                                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl shrink-0">
                                    🧮
                                </div>
                                <div>
                                    <span className="text-emerald-600 text-[10px] font-bold block">환급액 자동계산</span>
                                    <span className="text-neutral-900 font-extrabold text-sm sm:text-base tracking-tight">내 환급금 시뮬레이터</span>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-transform shrink-0"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </a>
                    </div>
                </div>

                {/* 2. CORE RULES CALLOUT BADGES */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
                    <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm text-center">
                        <span className="text-[11px] text-slate-500 font-bold block mb-1">월 환급 최소 기준</span>
                        <strong className="text-emerald-600 text-base sm:text-lg font-black block">15회 이상</strong>
                        <span className="text-[10px] text-slate-400 font-medium">최대 60회 (경기 무제한)</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm text-center">
                        <span className="text-[11px] text-slate-500 font-bold block mb-1">가입 첫 달 특례</span>
                        <strong className="text-teal-600 text-base sm:text-lg font-black block">1회 탑승도 환급</strong>
                        <span className="text-[10px] text-slate-400 font-medium">15회 미만도 즉시 적용</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm text-center">
                        <span className="text-[11px] text-slate-500 font-bold block mb-1">청년층 환급률</span>
                        <strong className="text-blue-600 text-base sm:text-lg font-black block">30% 환급</strong>
                        <span className="text-[10px] text-slate-400 font-medium">경기: 만19~39세 확대</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm text-center">
                        <span className="text-[11px] text-slate-500 font-bold block mb-1">저소득층 환급률</span>
                        <strong className="text-indigo-600 text-base sm:text-lg font-black block">53.3% 환급</strong>
                        <span className="text-[10px] text-slate-400 font-medium">기초생활/차상위계층</span>
                    </div>
                </div>

                {/* 3. STEP-BY-STEP REGISTRATION & ISSUANCE GUIDE */}
                <div className="w-full bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-2.5 py-0.5 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-black">STEP GUIDE</span>
                        <h2 className="text-base sm:text-lg font-extrabold text-neutral-900 tracking-tight">
                            K-패스 카드 발급 및 등록방법 4단계
                        </h2>
                    </div>

                    <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                        {/* Step 1 */}
                        <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                            <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center shrink-0 text-xs mt-0.5">
                                1
                            </span>
                            <div>
                                <strong className="text-neutral-900 block font-bold text-sm mb-1">
                                    K-패스 전용 카드 발급 (신용/체크/선불)
                                </strong>
                                <p className="text-slate-600 leading-relaxed">
                                    신한, 농협, 국민, 우리, 하나, 삼성, 현대, BC(기업은행), 케이뱅크, 카카오뱅크 등 제휴 금융사 또는 모바일이즐/티머니에서 <strong>&apos;K-패스 카드&apos;</strong>를 신청·발급받습니다.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                            <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center shrink-0 text-xs mt-0.5">
                                2
                            </span>
                            <div>
                                <strong className="text-neutral-900 block font-bold text-sm mb-1">
                                    K-패스 공식 사이트(korea-pass.kr) 또는 앱 접속
                                </strong>
                                <p className="text-slate-600 leading-relaxed">
                                    카드를 수령한 후, <strong>K-패스 공식 홈페이지(korea-pass.kr)</strong>나 전용 모바일 앱(iOS/Android)을 설치하고 <strong>[회원가입]</strong>을 진행합니다.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex items-start gap-3 p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200">
                            <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center shrink-0 text-xs mt-0.5">
                                3
                            </span>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <strong className="text-emerald-900 font-bold text-sm">
                                        카드번호 16자리 등록 & 본인 인증 (필수!)
                                    </strong>
                                    <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded">핵심</span>
                                </div>
                                <p className="text-slate-700 leading-relaxed">
                                    발급받은 실물 카드 번호 16자리를 입력하고 <strong>[카드 유효성 체크]</strong>를 완료합니다. 
                                    <span className="text-emerald-800 font-semibold block mt-1">
                                        ※ 모바일 교통카드 이용자는 실물 카드가 아닌 &apos;모바일 앱 내 16자리 가상 카드번호&apos;를 등록해야 합니다.
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                            <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center shrink-0 text-xs mt-0.5">
                                4
                            </span>
                            <div>
                                <strong className="text-neutral-900 block font-bold text-sm mb-1">
                                    전국 대중교통 태그 이용 후 익월 환급
                                </strong>
                                <p className="text-slate-600 leading-relaxed">
                                    시내버스, 마을버스, 지하철, 광역버스, 신분당선, GTX 등 전국 대중교통을 등록된 카드로 이용하면 <strong>월 15회 이상 이용 시 다음 달 카드사별 지정일에 환급금이 자동 지급</strong>됩니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs text-slate-500 font-medium">카드 발급 후 즉시 등록하세요</span>
                        <Link
                            href="https://korea-pass.kr/"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
                        >
                            <span>공식 카드등록 페이지</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </Link>
                    </div>
                </div>

                {/* 4. REFUND RULES (15-RIDE RULE & FIRST MONTH 1-RIDE RULE) */}
                <div className="w-full bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm mb-8 space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-lg bg-blue-100 text-blue-800 text-xs font-black">환급 기준</span>
                        <h2 className="text-base sm:text-lg font-extrabold text-neutral-900 tracking-tight">
                            K패스 환급 기준 15회 & 첫 달 1회 탑승 특례
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                        <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-100">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                <h3 className="font-extrabold text-sm text-blue-900">K패스 환급기준 15회 방법</h3>
                            </div>
                            <p className="text-xs text-slate-700 leading-relaxed mb-2 font-medium">
                                매월 1일~말일까지 <strong>월 15회 이상</strong> 대중교통을 탑승해야만 해당 월의 환급 마일리지가 정산되어 지급됩니다.
                            </p>
                            <ul className="text-[11px] text-slate-600 space-y-1 list-disc pl-4">
                                <li>전국 기본 K-패스: 월 최대 <strong>60회</strong>까지 환급</li>
                                <li>The 경기패스 & 인천 I-패스: <strong>무제한(60회 초과분도 전부 환급)</strong></li>
                                <li>환승 시에는 1회 탑승으로 인정됩니다.</li>
                            </ul>
                        </div>

                        <div className="p-4 bg-teal-50/60 rounded-2xl border border-teal-100">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                                <h3 className="font-extrabold text-sm text-teal-900">K패스 환급기준 1회 방법 (첫 달 특례)</h3>
                            </div>
                            <p className="text-xs text-slate-700 leading-relaxed mb-2 font-medium">
                                K-패스 <strong>신규 가입 첫 달</strong>에 한하여 15회를 채우지 못하고 <strong>단 1회만 이용해도 이용금액 환급 혜택</strong>이 무조건 적용됩니다.
                            </p>
                            <ul className="text-[11px] text-slate-600 space-y-1 list-disc pl-4">
                                <li>가입일이 월말(예: 25일 이후)이어도 1회 이상 이용 시 혜택 보장</li>
                                <li>익월(가입 다음 달)부터는 정상적으로 15회 이상 이용 필수</li>
                                <li>시스템에서 가입일을 자동 체크하여 첫 달 특례 산정</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 5. GYEONGGI THE-GYEONGGI-PASS SPECIAL GUIDE */}
                <div className="w-full bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white rounded-3xl p-5 sm:p-6 shadow-md mb-8 relative overflow-hidden">
                    <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-blue-500/10 pointer-events-none" />
                    
                    <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-500/30 border border-blue-400/30 text-blue-200 text-xs font-bold">
                            경기도민 전용 특화 혜택
                        </span>
                        <span className="text-[11px] text-blue-200/80 font-medium">별도 카드 발급 NO</span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-black mb-2 text-white tracking-tight">
                        경기도 K-패스 (The 경기패스) 환급방법 & 특장점
                    </h2>

                    <p className="text-blue-100/90 text-xs sm:text-sm leading-relaxed mb-4 font-medium">
                        K-패스 등록 시 주민등록상 거주지가 경기도라면 <strong>자동으로 &apos;The 경기패스&apos; 혜택이 적용</strong>됩니다.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                        <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                            <span className="text-amber-300 font-bold block mb-0.5">청년 연령 만 39세까지</span>
                            <span className="text-white/80 text-[11px] leading-snug block">전국(만34세) 대비 5년 확대되어 30% 환급 적용</span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                            <span className="text-emerald-300 font-bold block mb-0.5">월 60회 상한 無제한</span>
                            <span className="text-white/80 text-[11px] leading-snug block">월 70회, 100회 탑승분도 모두 무제한 환급</span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                            <span className="text-sky-300 font-bold block mb-0.5">광역버스 & GTX 전액 포함</span>
                            <span className="text-white/80 text-[11px] leading-snug block">신분당선, 광역버스, GTX-A 등 고비용 노선 환급</span>
                        </div>
                    </div>
                </div>

                {/* 6. INTERACTIVE K-PASS REFUND CALCULATOR */}
                <div id="calculator" className="w-full bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm mb-8 scroll-mt-6">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <span className="px-2.5 py-0.5 rounded-lg bg-teal-100 text-teal-800 text-xs font-black">SIMULATOR</span>
                            <h2 className="text-base sm:text-lg font-extrabold text-neutral-900 tracking-tight mt-1">
                                K-패스 예상 환급금 실시간 계산기
                            </h2>
                        </div>
                        <span className="text-[11px] text-slate-400 font-medium">최신 환급 기준</span>
                    </div>

                    <div className="space-y-4 pt-1">
                        {/* Monthly Spend Slider */}
                        <div>
                            <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
                                <span>월 대중교통 이용 금액</span>
                                <span className="text-emerald-600 font-black text-sm">{monthlySpend.toLocaleString()}원</span>
                            </div>
                            <input
                                type="range"
                                min={20000}
                                max={250000}
                                step={5000}
                                value={monthlySpend}
                                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                            />
                            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-medium">
                                <span>2만원</span>
                                <span>10만원</span>
                                <span>25만원</span>
                            </div>
                        </div>

                        {/* Monthly Ride Count Slider */}
                        <div>
                            <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
                                <span>월 탑승 횟수</span>
                                <span className={`${rideCount >= 15 ? 'text-emerald-600' : 'text-rose-500'} font-black text-sm`}>
                                    {rideCount}회 {rideCount < 15 && '(15회 미만: 첫 달 외 환급 불가)'}
                                </span>
                            </div>
                            <input
                                type="range"
                                min={5}
                                max={100}
                                step={1}
                                value={rideCount}
                                onChange={(e) => setRideCount(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                            />
                            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-medium">
                                <span>5회</span>
                                <span className="text-emerald-600 font-bold">15회(기준)</span>
                                <span>60회(전국상한)</span>
                                <span>100회</span>
                            </div>
                        </div>

                        {/* User Type & Region Selection */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">대상자 유형</label>
                                <select
                                    value={userType}
                                    onChange={(e) => setUserType(e.target.value as any)}
                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                >
                                    <option value="normal">일반 (만 35세 이상 / 경기 40세 이상) - 20%</option>
                                    <option value="youth">청년 (만 19~34세 / 경기 만 19~39세) - 30%</option>
                                    <option value="multiChild3">3자녀 이상 다자녀 - 50%</option>
                                    <option value="lowIncome">저소득층 (기초생활/차상위) - 53.3%</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">거주 지역</label>
                                <select
                                    value={region}
                                    onChange={(e) => setRegion(e.target.value as any)}
                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                >
                                    <option value="gyeonggi">경기도 (The 경기패스 / 무제한 환급)</option>
                                    <option value="national">전국 기본 (월 최대 60회 상한)</option>
                                    <option value="incheon">인천광역시 (인천 I-패스 / 무제한 환급)</option>
                                </select>
                            </div>
                        </div>

                        {/* Off-peak Toggle */}
                        <div className="flex items-center justify-between p-3 bg-emerald-50/50 rounded-xl border border-emerald-100">
                            <div>
                                <span className="font-bold text-xs text-emerald-900 block">출퇴근 시차제 추가 환급 (+30%p)</span>
                                <span className="text-[10px] text-emerald-700">시차 시간대(05:30~06:30, 09:00~10:00, 16:00~17:00 등) 이용 시</span>
                            </div>
                            <input
                                type="checkbox"
                                checked={isOffPeak}
                                onChange={(e) => setIsOffPeak(e.target.checked)}
                                className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500 accent-emerald-600 cursor-pointer"
                            />
                        </div>

                        {/* Calculation Output Box */}
                        <div className="mt-4 p-4 sm:p-5 bg-gradient-to-br from-slate-900 to-neutral-900 text-white rounded-2xl">
                            <div className="flex items-center justify-between text-xs text-slate-300 pb-3 border-b border-slate-700">
                                <span>적용 환급률 ({calculationResult.userTypeLabel})</span>
                                <strong className="text-emerald-400 text-sm font-black">{calculationResult.finalRatePercent}%</strong>
                            </div>

                            <div className="flex items-center justify-between pt-3">
                                <div>
                                    <span className="text-xs text-slate-300 block">예상 월 환급 금액</span>
                                    <span className="text-[10px] text-slate-400">
                                        {calculationResult.isEligible ? `${calculationResult.effectiveRides}회 인정 탑승` : '15회 미만 (첫달 외 지급제외)'}
                                    </span>
                                </div>
                                <div className="text-right">
                                    <strong className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight">
                                        +{calculationResult.estimatedRefund.toLocaleString()}원
                                    </strong>
                                    <span className="text-[11px] text-slate-300 block mt-0.5">
                                        실질 부담액: <strong className="text-white">{calculationResult.realCost.toLocaleString()}원</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 7. BANK & CARD COMPANY REFUND SCHEDULE TABLE (신한, 농협, 국민 등) */}
                <div className="w-full bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <div>
                            <span className="px-2.5 py-0.5 rounded-lg bg-blue-100 text-blue-800 text-xs font-black">금융사별 안내</span>
                            <h2 className="text-base sm:text-lg font-extrabold text-neutral-900 tracking-tight mt-1">
                                신한·농협 등 주요 은행·카드사별 환급일 & 방법
                            </h2>
                        </div>

                        {/* Search Bar */}
                        <div className="relative">
                            <input
                                type="text"
                                value={searchBank}
                                onChange={(e) => setSearchBank(e.target.value)}
                                placeholder="카드사/은행 검색 (신한, 농협 등)"
                                className="pl-3 pr-8 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 text-neutral-800"
                            />
                            {searchBank && (
                                <button
                                    onClick={() => setSearchBank('')}
                                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="space-y-3">
                        {filteredBankList.map((card, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-2xl border ${card.color} transition-all duration-200 shadow-xs`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${card.badgeColor}`}>
                                        {card.type}
                                    </span>
                                    <span className="text-emerald-700 text-xs font-black">
                                        {card.refundSchedule}
                                    </span>
                                </div>

                                <h3 className="text-sm sm:text-base font-extrabold text-neutral-900 mb-2">
                                    {card.name}
                                </h3>

                                <div className="space-y-1.5 text-xs text-slate-700">
                                    <div className="flex items-start gap-2">
                                        <span className="text-slate-400 shrink-0 font-bold">체크카드:</span>
                                        <span className="font-medium text-slate-800">{card.checkMethod}</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-slate-400 shrink-0 font-bold">신용카드:</span>
                                        <span className="font-medium text-slate-800">{card.creditMethod}</span>
                                    </div>
                                    <div className="flex items-start gap-2 pt-1 border-t border-slate-100 text-[11px] text-slate-500">
                                        <span className="font-semibold text-slate-600 shrink-0">조회경로:</span>
                                        <span>{card.appGuide}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 8. FAQ SECTION */}
                <div className="w-full bg-slate-100/90 rounded-2xl p-5 sm:p-6 border border-slate-200 mb-8">
                    <h3 className="text-sm sm:text-base font-extrabold text-neutral-900 mb-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        K-패스 등록 및 환급 자주 묻는 질문 (FAQ)
                    </h3>

                    <div className="space-y-2.5 text-xs text-slate-700 leading-relaxed font-medium">
                        <div className="bg-white p-3.5 rounded-xl border border-slate-200/80">
                            <strong className="text-neutral-900 block font-bold mb-1">
                                Q. 카드를 발급받고 K-패스 앱에 등록하지 않으면 환급이 안 되나요?
                            </strong>
                            <span>
                                네, 맞습니다. 반드시 <strong>K-패스 공식 사이트(korea-pass.kr) 또는 앱</strong>에 회원가입 후 카드 번호 16자리를 등록해야만 환급 마일리지가 적립·정산됩니다.
                            </span>
                        </div>

                        <div className="bg-white p-3.5 rounded-xl border border-slate-200/80">
                            <strong className="text-neutral-900 block font-bold mb-1">
                                Q. KTX, SRT, 고속버스, 공항버스도 K-패스 환급 대상인가요?
                            </strong>
                            <span>
                                KTX, SRT, 시외버스, 고속버스, 별도 좌석 지정 공항버스는 환급 대상에서 제외됩니다. 전국 <strong>시내버스, 마을버스, 지하철, 광역버스(빨간버스), 신분당선, GTX 노선</strong>만 환급 대상입니다.
                            </span>
                        </div>

                        <div className="bg-white p-3.5 rounded-xl border border-slate-200/80">
                            <strong className="text-neutral-900 block font-bold mb-1">
                                Q. 이사해서 주소지가 변경된 경우 어떻게 해야 하나요?
                            </strong>
                            <span>
                                K-패스 앱 내 마이페이지 &gt; [주소지 검증] 메뉴에서 새로운 주민등록지로 재검증을 진행하시면 경기도 The 경기패스 등 해당 지자체 특화 혜택으로 자동 갱신됩니다.
                            </span>
                        </div>
                    </div>
                </div>

                {/* 9. BOTTOM SUMMARY CTA BANNER */}
                <div className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-5 mb-8 text-center shadow-md">
                    <h3 className="font-extrabold text-base sm:text-lg mb-1.5">
                        지금 바로 K-패스 카드를 등록하고 교통비 환급을 시작하세요!
                    </h3>
                    <p className="text-emerald-100 text-xs mb-4">
                        공식 홈페이지에서 회원가입 및 카드 유효성 인증 후 즉시 이용 가능합니다.
                    </p>
                    <Link
                        href="https://korea-pass.kr/"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-emerald-800 font-extrabold text-sm rounded-xl transition-all shadow-sm hover:bg-emerald-50 active:scale-95"
                    >
                        <span>K-패스 공식 등록 사이트 바로가기</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </Link>
                </div>

                <footer className="text-center w-full mb-8">
                    <div className="h-px w-full max-w-[150px] mx-auto bg-gradient-to-r from-transparent via-neutral-200 to-transparent mb-4" />
                    <p className="text-neutral-400 text-[10px] font-bold tracking-widest uppercase">
                        K-PASS & THE GYEONGGI-PASS OFFICIAL DIRECTORY
                    </p>
                </footer>
            </div>

            {/* Coupang Monetization Banner */}
            <CoupangAds
                keyword="교통카드"
                title="🚌 실속있는 대중교통 혜택"
                hookText="K-패스와 함께 사용하면 유용한 모바일 교통 액세서리 및 카드지갑을 확인해 보세요."
            />
        </div>
    );
}
