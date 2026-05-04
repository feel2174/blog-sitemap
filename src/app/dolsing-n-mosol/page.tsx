import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '연애기숙학교 돌싱N모솔 출연진 인스타 주소 총정리 | 티빙, 쿠팡플레이 보러가기',
    description: 'MBC every1 예능 연애기숙학교 돌싱N모솔 남자 여자 출연자 인스타 주소 및 티빙, 쿠팡플레이 다시보기 링크 안내입니다.',
};

export default function DolsingNMosolPage() {
    const maleCast = [
        { name: '조지', url: 'http://instagram.com/minjekil', bg: 'from-blue-100 to-cyan-200', text: 'text-blue-600', hover: 'hover:border-blue-400 hover:shadow-blue-200' },
        { name: '현무', url: 'https://www.instagram.com/happy23virus', bg: 'from-blue-100 to-cyan-200', text: 'text-blue-600', hover: 'hover:border-blue-400 hover:shadow-blue-200' },
        { name: '루키', url: 'https://www.instagram.com/cluyt_0', bg: 'from-sky-100 to-blue-200', text: 'text-sky-600', hover: 'hover:border-sky-300 hover:shadow-sky-200' },
        { name: '낙화유수', url: 'https://instagram.com/victor_sevcenkov', bg: 'from-indigo-100 to-purple-200', text: 'text-indigo-600', hover: 'hover:border-indigo-400 hover:shadow-indigo-200' },
        { name: '수금지화', url: 'https://instagram.com/hyegram', bg: 'from-cyan-100 to-blue-100', text: 'text-cyan-600', hover: 'hover:border-cyan-300 hover:shadow-cyan-200' },
        { name: '맹꽁이', url: 'https://instagram.com/kimgupi123', bg: 'from-slate-100 to-blue-200', text: 'text-slate-600', hover: 'hover:border-slate-400 hover:shadow-slate-200' }
    ];

    const femaleCast = [
        { name: '서울쥐', url: 'https://instagram.com/seoul_juhee', bg: 'from-pink-100 to-rose-200', text: 'text-rose-600', hover: 'hover:border-rose-400 hover:shadow-rose-200' },
        { name: '순무', url: 'https://instagram.com/uuntit1ed', bg: 'from-fuchsia-100 to-purple-200', text: 'text-purple-600', hover: 'hover:border-purple-400 hover:shadow-purple-200' },
        { name: '카멜리아', url: 'https://instagram.com/chaewoon_p', bg: 'from-red-100 to-rose-100', text: 'text-red-500', hover: 'hover:border-red-300 hover:shadow-red-200' },
        { name: '핑퐁', url: 'https://instagram.com/re92_redoit', bg: 'from-pink-50 to-pink-200', text: 'text-pink-600', hover: 'hover:border-pink-300 hover:shadow-pink-200' },
        { name: '불나방', url: 'https://instagram.com/m.xoxom', bg: 'from-rose-50 to-orange-100', text: 'text-orange-500', hover: 'hover:border-orange-300 hover:shadow-orange-200' },
        { name: '두쫀쿠', url: 'https://instagram.com/i_am_ayoon', bg: 'from-orange-50 to-rose-100', text: 'text-orange-500', hover: 'hover:border-orange-300 hover:shadow-orange-200' }
    ];

    return (
        <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                {/* Header Section */}
                <div className="w-full text-center mb-10 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-40 bg-purple-400 w-64 h-64 rounded-full pointer-events-none"></div>
                    <div className="absolute top-10 right-1/4 translate-x-12 blur-3xl opacity-40 bg-pink-300 w-48 h-48 rounded-full pointer-events-none"></div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-purple-100 mb-6 drop-shadow-sm">
                            <span className="text-3xl animate-pulse">🏫</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight flex flex-col sm:inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">연애기숙학교</span>
                            <span className="sm:ml-4 text-3xl sm:text-5xl text-slate-800">돌싱N모솔</span>
                        </h1>

                        <p className="text-slate-600 font-medium text-base sm:text-lg max-w-2xl mx-auto break-keep leading-relaxed mt-2">
                            화제의 MBC every1 예능 <strong className="text-purple-600">돌싱N모솔</strong> 출연진 인스타 주소 및 <br className="hidden sm:block" />
                            다시보기 링크 모음입니다.
                        </p>
                    </div>
                </div>

                {/* Stream Links */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 relative z-20">
                    <a
                        href="https://www.tving.com/contents/P001785422"
                        className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-red-600 to-red-500 text-white rounded-3xl shadow-xl shadow-red-200 hover:scale-[1.02] transition-transform duration-300"
                    >
                        <span className="text-sm font-bold text-red-100 mb-2">TVING 오리지널</span>
                        <span className="text-xl font-black">연애기숙학교 보러가기 (티빙)</span>
                    </a>
                    <a
                        href="https://www.coupangplay.com/content/3f563f4b-a48b-4a80-aad4-b1372f7ad397"
                        className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-3xl shadow-xl shadow-blue-200 hover:scale-[1.02] transition-transform duration-300"
                    >
                        <span className="text-sm font-bold text-blue-100 mb-2">Coupang Play</span>
                        <span className="text-xl font-black">연애기숙학교 보러가기 (쿠팡플레이)</span>
                    </a>
                </div>

                {/* Content Container */}
                <div className="w-full relative z-10 transition-opacity duration-300">
                    
                    {/* Female Cast Section */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px bg-gradient-to-r from-transparent to-pink-200 flex-1" />
                            <h2 className="text-2xl sm:text-3xl font-black text-pink-600 flex items-center gap-2">
                                <span className="text-2xl">👩</span> 여자 출연자
                            </h2>
                            <div className="h-px bg-gradient-to-l from-transparent to-pink-200 flex-1" />
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
                            {femaleCast.map((person, index) => (
                                <a
                                    key={index}
                                    href={person.url}
                                    className={`group bg-white rounded-3xl p-5 border-2 border-transparent shadow shadow-slate-100 ${person.hover} transition-all duration-300 flex flex-col items-center justify-center text-center`}
                                >
                                    <div className={`w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 rounded-full bg-gradient-to-tr ${person.bg} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                                        <span className={`text-lg sm:text-2xl font-black ${person.text}`}>{person.name.substring(0,2)}</span>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1">
                                        {person.name}
                                    </h3>
                                    <div className="flex items-center gap-1 text-xs sm:text-sm font-medium text-pink-500 opacity-80 group-hover:opacity-100 transition-opacity mt-1 sm:mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                        <span>인스타그램</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Male Cast Section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px bg-gradient-to-r from-transparent to-blue-200 flex-1" />
                            <h2 className="text-2xl sm:text-3xl font-black text-blue-600 flex items-center gap-2">
                                <span className="text-2xl">👨</span> 남자 출연자
                            </h2>
                            <div className="h-px bg-gradient-to-l from-transparent to-blue-200 flex-1" />
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
                            {maleCast.map((person, index) => (
                                <a
                                    key={index}
                                    href={person.url}
                                    className={`group bg-white rounded-3xl p-5 border-2 border-transparent shadow shadow-slate-100 ${person.hover} transition-all duration-300 flex flex-col items-center justify-center text-center`}
                                >
                                    <div className={`w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 rounded-full bg-gradient-to-tr ${person.bg} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                                        <span className={`text-lg sm:text-2xl font-black ${person.text}`}>{person.name.substring(0,2)}</span>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1">
                                        {person.name}
                                    </h3>
                                    <div className="flex items-center gap-1 text-xs sm:text-sm font-medium text-blue-500 opacity-80 group-hover:opacity-100 transition-opacity mt-1 sm:mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                        <span>인스타그램</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
