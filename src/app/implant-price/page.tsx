import React from 'react';
import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '임플란트 가격비교 조회 사이트',
    description: '전국 치과별 임플란트 가격을 한눈에 비교하고 비급여 진료비 정보를 조회할 수 있는 서비스를 바로 제공합니다.',
};

export default function ImplantPricePage() {
    return (
        <div 
            className="min-h-screen bg-slate-50 font-['Pretendard'] text-slate-900 flex flex-col justify-center items-center py-20 px-4"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-teal-400/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="text-center mb-16 relative z-10 w-full max-w-2xl">
                <div className="inline-block px-4 py-1.5 bg-teal-100 text-teal-800 rounded-full text-sm font-black tracking-widest mb-6 border border-teal-200">
                    전국 치과 비급여 조회
                </div>
                <h1 className="text-5xl sm:text-7xl font-black mb-4 tracking-tight leading-tight text-slate-900">
                    임플란트 <span className="text-teal-600">가격비교</span>
                </h1>
            </div>

            {/* Buttons ONLY, NO DESCRIPTIONS */}
            <div className="w-full max-w-lg space-y-6 relative z-10">
                <Link 
                    href="https://www.modoodoc.com/senior/treatment-estimate-submit/%EC%9E%84%ED%94%8C%EB%9E%80%ED%8A%B8"
                    className="flex items-center justify-between w-full p-6 sm:p-8 bg-white border-2 border-teal-500 rounded-3xl shadow-[0_10px_40px_-10px_rgba(20,184,166,0.3)] hover:bg-teal-50 hover:scale-[1.02] transition-all group"
                >
                    <span className="text-xl sm:text-2xl font-black text-teal-700">동네 치과 견적 받아보기</span>
                    <svg className="w-8 h-8 text-teal-500 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                </Link>

                <Link 
                    href="https://www.hira.or.kr/npay/index.do?pgmid=HIRAA030009000000&WT.ac=%EB%B9%84%EA%B8%89%EC%97%AC%EC%A7%84%EB%A3%8C%EB%B9%84%EC%A0%95%EB%B3%B4%EB%B0%94%EB%A1%9C%EA%B0%80%EA%B8%B0#app%2Frb%2FnpayDamtInfoList"
                    className="flex items-center justify-between w-full p-6 sm:p-8 bg-gradient-to-r from-teal-600 to-teal-500 rounded-3xl shadow-[0_10px_40px_-10px_rgba(20,184,166,0.5)] hover:from-teal-700 hover:to-teal-600 hover:scale-[1.02] transition-all group"
                >
                    <span className="text-xl sm:text-2xl font-black text-white">건강보험심사평가원 비급여 조회</span>
                    <svg className="w-8 h-8 text-white group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                </Link>
            </div>

            <CoupangAds 
                keyword="워터픽 구강세정기" 
                title="🦷 임플란트 관리의 핵심!"
                hookText="비싼 임플란트 시술 후 가장 중요한 것은 철저한 위생 관리입니다. 구석구석 깨끗하게 관리해주는 구강세정기 베스트 제품입니다."
            />
        </div>
    );
}
