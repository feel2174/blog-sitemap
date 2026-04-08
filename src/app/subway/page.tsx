import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '전국 지하철 노선도 바로가기 | 1~9호선, GTX, 신분당선 등 네이버 지도 길찾기',
    description: '수도권 및 전국 지하철 노선도를 빠르고 간편하게 확인하세요. 1호선부터 9호선, 공항철도, 신분당선, GTX-A 등 노선별 실시간 길찾기 바로가기를 제공합니다.',
};

export default function SubwayPage() {
    const mainLines = [
        { name: '1호선', code: '201', color: '#0052A4', text: 'white' },
        { name: '2호선', code: '202', color: '#00A84D', text: 'white' },
        { name: '3호선', code: '203', color: '#EF7C1C', text: 'white' },
        { name: '4호선', code: '204', color: '#00A4E3', text: 'white' },
        { name: '5호선', code: '205', color: '#996CAC', text: 'white' },
        { name: '6호선', code: '206', color: '#CD7C2F', text: 'white' },
        { name: '7호선', code: '207', color: '#747F00', text: 'white' },
        { name: '8호선', code: '208', color: '#E6186C', text: 'white' },
        { name: '9호선', code: '209', color: '#BDB092', text: 'white' },
    ];

    const otherLines = [
        { name: '공항철도', code: '210', color: '#0090D2', text: 'white' },
        { name: '경의중앙', code: '211', color: '#77C4A3', text: 'white' },
        { name: '경춘', code: '212', color: '#0C8E72', text: 'white' },
        { name: '수인분당', code: '213', color: '#FABE00', text: '#191919' },
        { name: '신분당', code: '214', color: '#D31145', text: 'white' },
        { name: '경강', code: '215', color: '#0054A6', text: 'white' },
        { name: '서해', code: '216', color: '#81A914', text: 'white' },
        { name: '인천1호선', code: '217', color: '#7CA8D5', text: '#191919' },
        { name: '인천2호선', code: '218', color: '#ED8B00', text: 'white' },
        { name: '용인에버라인', code: '219', color: '#56C174', text: 'white' },
        { name: '의정부', code: '220', color: '#FDA600', text: '#191919' },
        { name: '우이신설', code: '221', color: '#B7C452', text: '#191919' },
        { name: '김포골드', code: '222', color: '#A17800', text: 'white' },
        { name: '신림', code: '223', color: '#6789CA', text: 'white' },
        { name: 'GTX-A', code: '224', color: '#9B326A', text: 'white' },
    ];

    return (
        <div 
            className="min-h-screen bg-slate-50 text-slate-800 py-16 px-4 md:px-8 font-sans selection:bg-blue-200"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            {/* Header */}
            <div className="max-w-6xl mx-auto text-center mb-16">
                <div className="inline-flex items-center justify-center p-4 bg-blue-100 text-blue-600 rounded-3xl mb-6 shadow-sm">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                    지하철 노선도 <span className="text-blue-600">바로가기</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto break-keep leading-relaxed">
                    복잡한 지하철 검색은 이제 그만!<br className="hidden sm:block"/>
                    원하는 호선을 선택하고 네이버 지도에서 빠르고 정확하게 확인하세요.
                </p>

                <div className="mt-10">
                    <Link 
                        href="https://map.naver.com/p/subway/1000/-/-/-"
                        className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl text-lg shadow-xl shadow-slate-900/20 transition-all hover:scale-105 active:scale-95 group"
                    >
                        🗺️ 전체 지하철 노선도 보기
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto space-y-16">
                
                {/* 1~9호선 Grid */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                            1~9호선
                        </h2>
                        <span className="flex-1 h-px bg-slate-200"></span>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {mainLines.map((line) => (
                            <Link
                                key={line.code}
                                href={`https://map.naver.com/p/subway/1000/-/-/-?lineCode=${line.code}`}
                                className="group relative overflow-hidden rounded-2xl border-2 border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col items-center justify-center gap-3"
                            >
                                <div 
                                    className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold shadow-inner group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundColor: line.color, color: line.text }}
                                >
                                    {line.name.replace('호선', '')}
                                </div>
                                <span className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">
                                    {line.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* 기타 노선 Grid */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                            수도권/기타 노선
                        </h2>
                        <span className="flex-1 h-px bg-slate-200"></span>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {otherLines.map((line) => (
                            <Link
                                key={line.code}
                                href={`https://map.naver.com/p/subway/1000/-/-/-?lineCode=${line.code}`}
                                className="group relative overflow-hidden rounded-2xl border-2 border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col items-center justify-center gap-3"
                            >
                                <div 
                                    className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-extrabold shadow-inner group-hover:scale-110 transition-transform duration-300 text-center break-keep leading-tight px-1"
                                    style={{ backgroundColor: line.color, color: line.text }}
                                >
                                    {line.name.includes('호선') ? line.name.replace('호선', '') : line.name.substring(0, 3)}
                                </div>
                                <span className="font-bold text-slate-800 text-base group-hover:text-blue-600 transition-colors text-center">
                                    {line.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>

              

            </div>

            {/* Footer */}
            <footer className="mt-24 text-center text-slate-400 font-medium pb-8">
                &copy; 2026 대한민국 지하철 노선도 바로가기 안내센터
            </footer>
        </div>
    );
}
