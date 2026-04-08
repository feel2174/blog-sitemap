import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '부산 지하철 노선도 바로가기 | 1~4호선, 동해선, 부산김해경전철 네이버 지도 길찾기',
    description: '부산광역시 지하철 노선도를 빠르고 간편하게 확인하세요. 1호선부터 4호선, 동해선, 부산김해경전철 등 노선별 실시간 길찾기 바로가기를 제공합니다.',
};

export default function BusanSubwayPage() {
    const busanLines = [
        { name: '1호선', code: '225', color: '#F06A00', text: 'white' },
        { name: '2호선', code: '226', color: '#81BF48', text: 'white' },
        { name: '3호선', code: '227', color: '#BB8C00', text: 'white' },
        { name: '4호선', code: '228', color: '#217DCB', text: 'white' },
        { name: '동해선', code: '229', color: '#0054A6', text: 'white' },
        { name: '부산김해', code: '230', color: '#8652A1', text: 'white' },
    ];

    return (
        <div 
            className="min-h-screen bg-slate-50 text-slate-800 py-16 px-4 md:px-8 font-sans selection:bg-blue-200"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <div className="inline-flex items-center justify-center p-4 bg-orange-100 text-orange-600 rounded-3xl mb-6 shadow-sm">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                    <span className="text-orange-600">부산</span> 지하철 노선도
                </h1>
                <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto break-keep leading-relaxed">
                    부산광역시의 복잡한 대중교통 경로를 지금 바로 확인해보세요.<br className="hidden sm:block"/>
                    원하는 호선을 선택하시면 네이버 지도 부산 노선도로 빠르게 이동합니다.
                </p>

                <div className="mt-10">
                    <Link 
                        href="https://map.naver.com/p/subway/7000/-/-/-"
                        className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl text-lg shadow-xl shadow-slate-900/20 transition-all hover:scale-105 active:scale-95 group"
                    >
                        🗺️ 부산 전체 노선도 보기
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto space-y-16">
                
                {/* 부산 노선 Grid */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                            노선별 바로가기
                        </h2>
                        <span className="flex-1 h-px bg-slate-200"></span>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                        {busanLines.map((line) => (
                            <Link
                                key={line.code}
                                href={`https://map.naver.com/p/subway/7000/-/-/-?lineCode=${line.code}`}
                                className="group relative overflow-hidden rounded-2xl border-2 border-slate-100 bg-white p-6 md:p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col items-center justify-center gap-4"
                            >
                                <div 
                                    className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-inner group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundColor: line.color, color: line.text }}
                                >
                                    {line.name.replace('호선', '')}
                                </div>
                                <span className="font-bold text-slate-800 text-xl group-hover:text-orange-600 transition-colors">
                                    {line.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Guide Section */}
                <section className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm mt-16 flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center md:text-left">이용 안내</h3>
                        <ul className="space-y-3 text-slate-600 font-medium text-lg">
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2 shrink-0">•</span>
                                <span>위에 나열된 호선 버튼을 클릭하시면 네이버 지도의 <strong>부산 지하철 노선도</strong>로 바로 이동합니다.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2 shrink-0">•</span>
                                <span>모바일 환경에서는 네이버 지도 앱이 설치되어 있을 경우 앱으로 자동 연결되어 더욱 편리한 길찾기가 가능합니다.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2 shrink-0">•</span>
                                <span>안전하고 빠른 페이지 이용을 위해 모든 링크는 <strong>현재 창</strong>에서 열립니다.</span>
                            </li>
                        </ul>
                    </div>
                </section>

            </div>

            {/* Footer */}
            <footer className="mt-24 text-center text-slate-400 font-medium pb-8 border-t border-slate-200/60 pt-8">
                &copy; 2026 부산 지하철 노선도 바로가기 안내센터
            </footer>
        </div>
    );
}
