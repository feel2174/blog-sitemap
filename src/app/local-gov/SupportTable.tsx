import React from 'react';

export default function SupportTable() {
    return (
        <div className="w-full max-w-3xl mx-auto mb-12">
            {/* Title & Highlight Banner */}
            <div className="mb-4 relative">
                <div className="absolute inset-0 bg-blue-600 blur-md opacity-10 rounded-t-2xl"></div>

            </div>

            {/* Support Amount Table */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-center border-collapse min-w-[500px]">
                        <thead>
                            <tr className="bg-slate-800 text-white">
                                <th className="py-2.5 px-2 font-bold text-[13px] border-r border-slate-700 w-[25%]">거주 지역</th>
                                <th className="py-2.5 px-2 font-black text-yellow-300 text-[14px] bg-slate-900 border-r border-slate-700 w-[25%] shadow-inner relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/10 to-transparent"></div>
                                    <span className="relative z-10">소득하위 70%</span>
                                </th>
                                <th className="py-2.5 px-2 font-bold text-[13px] border-r border-slate-700 w-[25%]">차상위·한부모</th>
                                <th className="py-2.5 px-2 font-bold text-[13px] w-[25%]">기초수급자</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-800 text-sm">
                            {/* 수도권 */}
                            <tr className="border-b border-slate-200 group transition-colors">
                                <td className="py-3 px-2 font-bold text-slate-700 bg-slate-50 border-r border-slate-200">
                                    수도권
                                </td>
                                <td className="py-3 px-2 font-black text-blue-600 bg-blue-50/30 border-r border-slate-200 text-base md:text-lg">
                                    10<span className="text-xs font-bold text-blue-500/80 ml-0.5">만원</span>
                                </td>
                                <td className="py-3 px-2 font-semibold border-r border-slate-200 text-[15px]" rowSpan={2}>
                                    45<span className="text-xs font-medium text-slate-400 ml-0.5">만원</span>
                                </td>
                                <td className="py-3 px-2 font-semibold text-[15px]" rowSpan={2}>
                                    55<span className="text-xs font-medium text-slate-400 ml-0.5">만원</span>
                                </td>
                            </tr>
                            {/* 비수도권 */}
                            <tr className="border-b border-slate-200 group transition-colors">
                                <td className="py-3 px-2 font-bold text-slate-700 bg-slate-50 border-r border-slate-200">
                                    비수도권
                                </td>
                                <td className="py-3 px-2 font-black text-blue-600 bg-blue-50/30 border-r border-slate-200 text-base md:text-lg">
                                    15<span className="text-xs font-bold text-blue-500/80 ml-0.5">만원</span>
                                </td>
                            </tr>
                            {/* 인구감소 우대 */}
                            <tr className="border-b border-slate-200 group transition-colors">
                                <td className="py-3 px-2 font-bold text-slate-700 bg-slate-50 border-r border-slate-200 flex flex-col items-center justify-center gap-1 h-full">
                                    <div className="flex items-center gap-1">
                                        <span>인구감소</span>
                                        <span className="inline-block px-1.5 py-0.5 bg-slate-700 text-white text-[10px] rounded tracking-wider">우대</span>
                                    </div>
                                    <a href="https://zucca100.com/population/" className="inline-flex items-center gap-0.5 px-2 py-0.5 bg-white border border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 rounded text-[10px] font-bold transition-all shadow-sm">
                                        해당지역 조회
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                    </a>
                                </td>
                                <td className="py-3 px-2 font-black text-blue-600 bg-blue-50/30 border-r border-slate-200 text-base md:text-lg">
                                    20<span className="text-xs font-bold text-blue-500/80 ml-0.5">만원</span>
                                </td>
                                <td className="py-3 px-2 font-semibold border-r border-slate-200 text-[15px]" rowSpan={2}>
                                    50<span className="text-xs font-medium text-slate-400 ml-0.5">만원</span>
                                </td>
                                <td className="py-3 px-2 font-semibold text-[15px]" rowSpan={2}>
                                    60<span className="text-xs font-medium text-slate-400 ml-0.5">만원</span>
                                </td>
                            </tr>
                            {/* 인구감소 특별 */}
                            <tr className="group transition-colors">
                                <td className="py-3 px-2 font-bold text-slate-700 bg-slate-50 border-r border-slate-200 flex flex-col items-center justify-center gap-1 h-full">
                                    <div className="flex items-center gap-1">
                                        <span>인구감소</span>
                                        <span className="inline-block px-1.5 py-0.5 bg-blue-600 text-white text-[10px] rounded tracking-wider">특별</span>
                                    </div>
                                    <a href="https://zucca100.com/population/" className="inline-flex items-center gap-0.5 px-2 py-0.5 bg-white border border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 rounded text-[10px] font-bold transition-all shadow-sm">
                                        해당지역 조회
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                    </a>
                                </td>
                                <td className="py-3 px-2 font-black text-red-600 bg-blue-50/30 border-r border-slate-200 text-base md:text-lg relative overflow-hidden">
                                    25<span className="text-xs font-bold text-red-500/80 ml-0.5">만원</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Reference Box */}
                <div className="bg-slate-50 p-4 border-t border-slate-200 relative">
                    <ul className="text-[11px] md:text-xs text-slate-500 space-y-1.5 text-left list-none mb-3">
                        <li className="flex items-start gap-1.5">
                            <span className="text-blue-500 font-black">*</span>
                            <span><strong className="font-bold text-slate-700">인구감소지역 (특별지원)</strong> : 균형발전·낙후도평가 하위 40개 시·군</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                            <span className="text-blue-500 font-black">*</span>
                            <span><strong className="font-bold text-slate-700">인구감소지역 (우대지원)</strong> : 특별지원지역에 해당하지 않는 인구감소지역 49개 시·군</span>
                        </li>
                    </ul>

                    <a href="https://zucca100.com/population/" className="inline-flex w-full md:w-auto items-center justify-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-[13px] font-bold transition-colors shadow-sm">
                        내 지역이 인구감소지역인지 확인하기
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
