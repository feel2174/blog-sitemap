import React from 'react';
import { FaMoneyCheckAlt, FaCreditCard, FaMobileAlt, FaBuilding, FaExclamationTriangle, FaInfoCircle, FaCheckCircle, FaWallet } from 'react-icons/fa';

export const metadata = {
    title: '2026년 고유가 피해지원금 잔액조회 및 사용처 안내',
    description: '고유가 피해지원금 잔액조회 확인방법, 잔액부족 대처법, 사용처 등에 대해 자세히 안내해드립니다.',
};

export default function HighOilPriceSupportPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 pb-20" style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, sans-serif' }}>
            
            {/* Header / Hero Section */}
            <div className="bg-gradient-to-br from-blue-700 to-teal-600 text-white pt-16 pb-12 px-5 rounded-b-[40px] shadow-lg mb-8 relative overflow-hidden">
                <div className="absolute top-[-20px] right-[-20px] opacity-10">
                    <FaWallet className="text-[150px]" />
                </div>
                <div className="max-w-3xl mx-auto relative z-10">
                    <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-white/30">
                        2026년 정부 지원금 가이드
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight break-keep">
                        고유가 피해지원금<br />잔액조회 및 사용 안내
                    </h1>
                    <p className="text-blue-100 text-[15px] sm:text-base leading-relaxed break-keep opacity-90">
                        지원금을 지급받은 후 현재 잔액이 얼마나 남아있는지, 결제 시 잔액 부족 문제가 발생했을 때 어떻게 대처해야 하는지 자세히 안내해 드립니다.
                    </p>
                </div>
            </div>

            <main className="max-w-3xl mx-auto px-5 space-y-8">
                
                {/* Table of Contents */}
                <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                    <h2 className="text-lg font-bold flex items-center gap-2 mb-4 text-slate-700 border-b pb-3">
                        <FaInfoCircle className="text-blue-500" />
                        목차
                    </h2>
                    <ul className="space-y-3 text-[15px] font-medium text-slate-600">
                        <li className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                            <a href="#balance-check">고유가 피해지원금 잔액조회 확인방법</a>
                        </li>
                        <li className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                            <a href="#insufficient-balance">고유가 피해지원금 잔액부족</a>
                        </li>
                        <li className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                            <span className="text-slate-400">고유가 피해지원금 사용처 확인방법 등 (Q/A)</span>
                        </li>
                        <li className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                            <span className="text-slate-400">고유가 피해지원금 신청방법</span>
                        </li>
                    </ul>
                </section>

                {/* Section 1: 잔액조회 확인방법 */}
                <section id="balance-check" className="scroll-mt-6">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <FaMoneyCheckAlt className="text-xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800">잔액조회 확인방법</h2>
                    </div>
                    <p className="text-slate-600 mb-6 text-[15px] break-keep">
                        잔액조회는 실시간으로 반영되며, 사용 후 즉시 차감된 금액을 확인할 수 있습니다. 주로 사용하는 결제 수단에 따라 아래 방법으로 조회해 보세요.
                    </p>

                    <div className="space-y-4">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group hover:border-blue-200 transition-colors">
                            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                            <h3 className="text-[17px] font-bold text-slate-800 mb-3 flex items-center gap-2">
                                <FaCreditCard className="text-blue-500" /> 카드사 앱에서 조회
                            </h3>
                            <ol className="list-decimal list-inside space-y-2 text-[15px] text-slate-600 ml-1">
                                <li>지원금을 지급받은 카드사 앱 실행</li>
                                <li>로그인 후 메인 화면에서 <strong className="text-slate-800">&apos;카드&apos;</strong> 또는 <strong className="text-slate-800">&apos;내 카드 관리&apos;</strong> 메뉴 선택</li>
                                <li>고유가 피해지원금이 충전된 카드 선택</li>
                                <li>상세 화면에서 <strong className="text-slate-800">&apos;잔액 조회&apos;</strong> 또는 <strong className="text-slate-800">&apos;사용 가능 금액&apos;</strong> 확인</li>
                                <li className="text-blue-600 font-medium">전용 잔액이 별도로 표시됩니다.</li>
                            </ol>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group hover:border-teal-200 transition-colors">
                            <div className="absolute top-0 left-0 w-1 h-full bg-teal-500"></div>
                            <h3 className="text-[17px] font-bold text-slate-800 mb-3 flex items-center gap-2">
                                <FaMobileAlt className="text-teal-500" /> 지역사랑상품권 앱에서 조회
                            </h3>
                            <ol className="list-decimal list-inside space-y-2 text-[15px] text-slate-600 ml-1">
                                <li>지역사랑상품권 앱 실행</li>
                                <li>로그인 후 메인 화면에서 <strong className="text-slate-800">&apos;잔액 조회&apos;</strong> 선택</li>
                                <li>고유가 피해지원금 잔액 확인</li>
                                <li>사용 내역도 함께 확인 가능</li>
                            </ol>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group hover:border-yellow-300 transition-colors">
                            <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400"></div>
                            <h3 className="text-[17px] font-bold text-slate-800 mb-3 flex items-center gap-2">
                                <span className="w-5 h-5 bg-yellow-400 text-white rounded-full flex items-center justify-center text-[10px] font-bold">P</span> 간편결제 앱에서 조회
                            </h3>
                            <ol className="list-decimal list-inside space-y-2 text-[15px] text-slate-600 ml-1">
                                <li>네이버페이, 카카오페이, 페이코 등 앱 실행</li>
                                <li>메뉴에서 <strong className="text-slate-800">&apos;포인트/머니&apos;</strong> 또는 <strong className="text-slate-800">&apos;잔액 조회&apos;</strong> 선택</li>
                                <li>고유가 피해지원금 잔액 확인</li>
                            </ol>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group hover:border-slate-300 transition-colors">
                            <div className="absolute top-0 left-0 w-1 h-full bg-slate-400"></div>
                            <h3 className="text-[17px] font-bold text-slate-800 mb-3 flex items-center gap-2">
                                <FaBuilding className="text-slate-500" /> 주민센터 방문 조회
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-[15px] text-slate-600 ml-1">
                                <li>거주지 관할 주민센터 방문</li>
                                <li><strong className="text-slate-800">신분증</strong>을 지참하여 잔액 조회 요청</li>
                                <li>담당 직원을 통해 정확한 잔액 확인</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 2: 잔액부족 */}
                <section id="insufficient-balance" className="scroll-mt-6 pt-6">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                            <FaExclamationTriangle className="text-xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800">결제 시 잔액부족 발생</h2>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">잔액부족 발생 원인</h3>
                        <ul className="space-y-3 text-[15px] text-slate-600 mb-8">
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-red-400 mt-1 shrink-0" />
                                <span>지원금을 이미 모두 사용한 경우</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-red-400 mt-1 shrink-0" />
                                <span>결제 금액이 남은 지원금 잔액보다 큰 경우</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-red-400 mt-1 shrink-0" />
                                <span>카드에 일반 금액과 지원금이 함께 충전되어 있어 <strong className="text-slate-800">일반 금액만 먼저 사용된 경우</strong></span>
                            </li>
                        </ul>

                        <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">잔액부족 시 대처방법</h3>
                        <div className="bg-slate-50 rounded-xl p-4 space-y-3 text-[15px] text-slate-700">
                            <p className="flex items-start gap-2">
                                <span className="font-bold text-blue-600">1.</span>
                                <span>카드사 앱에서 현재 잔액을 다시 한번 정확히 확인합니다.</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="font-bold text-blue-600">2.</span>
                                <span>잔액이 부족한 경우 <strong className="text-slate-800">결제 금액을 줄이거나 분할 결제(복합 결제)</strong>를 가맹점에 요청하세요.</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="font-bold text-blue-600">3.</span>
                                <span>고유가 피해지원금 전용 잔액과 일반 잔액이 명확히 구분되어 있는지 확인합니다.</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="font-bold text-blue-600">4.</span>
                                <span>잔액이 넉넉히 남아있는데도 결제가 안 되는 경우, 즉시 <strong className="text-slate-800">카드사 고객센터</strong>에 문의하셔야 합니다.</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Important Notice */}
                <section className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                    <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
                        💡 잔액 소진 권장 및 유의사항
                    </h3>
                    <ul className="space-y-3 text-[15px] text-blue-900/80">
                        <li className="flex items-start gap-2">
                            <span className="shrink-0 mt-0.5">•</span>
                            <span>결제 전 반드시 잔액을 확인하고 사용하시기 바랍니다.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="shrink-0 mt-0.5">•</span>
                            <span>남은 소액 잔액은 다른 결제 수단(현금, 일반 카드)과 병행하여 분할 결제로 사용할 수 있습니다.</span>
                        </li>
                        <li className="flex items-start gap-2 font-semibold text-blue-800">
                            <span className="shrink-0 mt-0.5">•</span>
                            <span>사용기한(2026년 8월 31일)이 지나면 잔액이 소멸되므로, 기한 내 모두 사용하시기 바랍니다.</span>
                        </li>
                        <li className="flex items-start gap-2 bg-white/60 p-4 rounded-xl mt-3 border border-blue-100 shadow-sm">
                            <span className="shrink-0 mt-0.5 text-lg">📌</span>
                            <span className="leading-relaxed">고유가 피해지원금은 사용기한이 정해져 있으므로, <strong className="text-blue-900">병원비, 주유비, 장보기 등 필수 생활비</strong>로 계획적으로 사용하여 잔액을 모두 소진하시는 것이 좋습니다.</span>
                        </li>
                    </ul>
                </section>

            </main>
        </div>
    );
}
