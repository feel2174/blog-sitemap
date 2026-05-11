'use client';

import React, { useState } from 'react';
import CoupangAds from '@/components/CoupangAds';

export default function ExcelClient() {
    const categories = [
        {
            title: "검색 및 참조",
            icon: "🔍",
            functions: [
                {
                    name: "VLOOKUP",
                    desc: "지정한 범위의 첫 번째 열에서 특정 값을 찾아, 같은 행에 있는 다른 열의 값을 반환합니다.",
                    usage: "=VLOOKUP(찾을값, 참조범위, 열번호, [일치옵션])",
                    example: "특정 직원의 사번으로 이름이나 부서 찾기"
                },
                {
                    name: "XLOOKUP",
                    desc: "VLOOKUP의 상위 호환 버전! 왼쪽/오른쪽 방향 상관없이 값을 찾을 수 있고, 에러 처리도 기본 지원합니다.",
                    usage: "=XLOOKUP(찾을값, 찾을범위, 반환범위, [에러시반환값])",
                    example: "VLOOKUP으로 찾기 힘든 역방향 데이터 검색"
                },
                {
                    name: "INDEX & MATCH",
                    desc: "MATCH로 위치를 찾고 INDEX로 해당 위치의 값을 가져옵니다. 다중 조건 검색 시 매우 유용합니다.",
                    usage: "=INDEX(반환범위, MATCH(찾을값, 찾을범위, 0))",
                    example: "행과 열의 조건을 모두 만족하는 교차점의 데이터 추출"
                }
            ]
        },
        {
            title: "조건 및 논리",
            icon: "⚖️",
            functions: [
                {
                    name: "IF",
                    desc: "주어진 조건이 참(True)인지 거짓(False)인지에 따라 다른 결과를 반환합니다.",
                    usage: "=IF(조건식, 참일때값, 거짓일때값)",
                    example: "점수가 80점 이상이면 '합격', 아니면 '불합격' 표시"
                },
                {
                    name: "IFERROR",
                    desc: "수식에서 에러(#N/A, #DIV/0! 등)가 발생할 경우 지정한 값으로 대체합니다.",
                    usage: "=IFERROR(수식, 에러시표시할값)",
                    example: "VLOOKUP 실패 시 '#N/A' 대신 '데이터없음' 표시"
                },
                {
                    name: "IFS",
                    desc: "여러 개의 IF 조건을 중첩하지 않고 직관적으로 여러 조건을 판별할 수 있습니다.",
                    usage: "=IFS(조건1, 결과1, 조건2, 결과2, ...)",
                    example: "점수 대역별 등급(A, B, C) 부여"
                }
            ]
        },
        {
            title: "데이터 집계",
            icon: "📊",
            functions: [
                {
                    name: "SUMIFS",
                    desc: "여러 가지 조건을 모두 만족하는 데이터들의 합계를 구합니다.",
                    usage: "=SUMIFS(합계범위, 조건범위1, 조건1, [조건범위2, 조건2...])",
                    example: "특정 부서의 특정 직급 직원들의 급여 총합"
                },
                {
                    name: "COUNTIFS",
                    desc: "여러 가지 조건을 모두 만족하는 데이터의 개수를 구합니다.",
                    usage: "=COUNTIFS(조건범위1, 조건1, [조건범위2, 조건2...])",
                    example: "영업부에서 매출 달성률이 100% 이상인 직원의 수"
                },
                {
                    name: "AVERAGEIFS",
                    desc: "여러 가지 조건을 모두 만족하는 데이터들의 평균을 구합니다.",
                    usage: "=AVERAGEIFS(평균범위, 조건범위1, 조건1...)",
                    example: "특정 제품군의 월평균 판매량 계산"
                }
            ]
        }
    ];

    const [activeTab, setActiveTab] = useState(0);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
            {/* Tabs for Mobile/Desktop */}
            <div className="flex overflow-x-auto whitespace-nowrap gap-3 pb-4 mb-8 scrollbar-hide px-1">
                {categories.map((cat, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 border shadow-sm ${
                            activeTab === idx 
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-emerald-200' 
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-emerald-50 hover:text-emerald-700'
                        }`}
                    >
                        <span>{cat.icon}</span>
                        {cat.title}
                    </button>
                ))}
            </div>

            {/* Active Category Content */}
            <div className="mb-12 animate-[fadeIn_0.4s_ease-out]">
                <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-6 flex items-center gap-3 ml-2">
                    <span className="text-3xl bg-white p-2 rounded-xl shadow-sm border border-slate-100">{categories[activeTab].icon}</span>
                    {categories[activeTab].title} 함수
                </h2>
                
                <div className="grid grid-cols-1 gap-6">
                    {categories[activeTab].functions.map((func, fIdx) => {
                        const uniqueId = `${activeTab}-${fIdx}`;
                        return (
                            <div 
                                key={uniqueId} 
                                className="bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:border-emerald-200 hover:shadow-[0_8px_30px_rgb(16,185,129,0.08)] transition-all duration-300"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                                        {func.name}
                                    </h3>
                                    <span className="px-3.5 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-black rounded-full border border-emerald-100 uppercase tracking-wider">
                                        필수 함수
                                    </span>
                                </div>
                                
                                <p className="text-slate-600 mb-6 text-[15px] md:text-base leading-relaxed font-medium">
                                    {func.desc}
                                </p>
                                
                                {/* Dark Mode Code Block for High Contrast */}
                                <div className="bg-[#0f172a] rounded-2xl p-5 mb-5 shadow-inner border border-slate-800">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                            공식 구문
                                        </div>
                                        <button 
                                            onClick={() => handleCopy(func.usage, uniqueId)}
                                            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold rounded-lg transition-colors border border-slate-700 active:scale-95"
                                            aria-label="수식 복사하기"
                                        >
                                            {copiedId === uniqueId ? '✅ 복사 완료' : '📋 복사'}
                                        </button>
                                    </div>
                                    <code className="text-emerald-400 font-mono text-[14px] md:text-[16px] font-bold block overflow-x-auto whitespace-nowrap pb-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                                        {func.usage}
                                    </code>
                                </div>
                                
                                <div className="flex items-start gap-3 text-sm text-slate-700 bg-emerald-50/70 p-5 rounded-2xl border border-emerald-100">
                                    <span className="text-emerald-600 mt-0.5 text-lg">💡</span>
                                    <div className="leading-relaxed">
                                        <strong className="text-emerald-800 font-bold mr-2">활용 예시:</strong>
                                        <span className="font-medium text-slate-700">{func.example}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                {/* 더 많은 엑셀함수 확인하기 버튼 */}
                <div className="mt-10 mb-4 text-center">
                    <a 
                        href="https://www.oppadu.com/%EC%97%91%EC%85%80-%ED%95%A8%EC%88%98-%EB%AA%A9%EB%A1%9D/"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-slate-800 hover:bg-slate-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                        더 많은 엑셀함수 확인하기
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                </div>
            </div>

            {/* 쿠팡 파트너스 영역 */}
            <div className="mt-16 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <CoupangAds 
                    keyword="엑셀 실무 책" 
                    title="📚 더 깊이 있는 엑셀 실무 공부가 필요하다면?"
                    hookText="직장인들의 칼퇴를 돕는 베스트셀러 엑셀 실무 도서를 확인해보세요. 하루 10분 투자로 엑셀 마스터가 될 수 있습니다."
                />
            </div>
            
            <div className="mt-6 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <CoupangAds 
                    keyword="사무용 마우스" 
                    title="🖱️ 손목이 편안한 사무용 마우스 추천"
                    hookText="엑셀 작업으로 지친 손목을 보호하세요! 사무 작업에 최적화된 인체공학 무선 마우스 베스트 상품을 소개합니다."
                />
            </div>
            
            {/* 탭 관련 CSS 스타일 (스크롤바 숨김용) */}
            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </main>
    );
}
