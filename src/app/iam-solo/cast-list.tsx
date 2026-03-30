'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function CastList() {
    const [season, setSeason] = useState(30);

    const femaleCast = [
        { name: '영숙', url: 'https://www.instagram.com/bwhessy/', bg: 'from-pink-100 to-rose-200', text: 'text-rose-600', hover: 'hover:border-rose-400 hover:shadow-rose-200' },
        { name: '정숙', url: 'https://www.instagram.com/wlrkdwn/', bg: 'from-fuchsia-100 to-purple-200', text: 'text-purple-600', hover: 'hover:border-purple-400 hover:shadow-purple-200' },
        { name: '순자', url: 'https://www.instagram.com/boxing_podo/', bg: 'from-red-100 to-rose-100', text: 'text-red-500', hover: 'hover:border-red-300 hover:shadow-red-200' },
        { name: '옥순', url: 'https://www.instagram.com/noajoa_/', bg: 'from-pink-50 to-pink-200', text: 'text-pink-600', hover: 'hover:border-pink-300 hover:shadow-pink-200' },
        { name: '현숙', url: 'https://www.instagram.com/itsgabventures/', bg: 'from-rose-50 to-orange-100', text: 'text-orange-500', hover: 'hover:border-orange-300 hover:shadow-orange-200' }
    ];

    const maleCast = [
        { name: '영수', url: 'https://www.instagram.com/_dryhands/', bg: 'from-blue-100 to-cyan-200', text: 'text-blue-600', hover: 'hover:border-blue-400 hover:shadow-blue-200' },
        { name: '영호', url: 'https://www.instagram.com/jhw1773/', bg: 'from-sky-100 to-blue-200', text: 'text-sky-600', hover: 'hover:border-sky-300 hover:shadow-sky-200' },
        { name: '영식', url: 'https://www.instagram.com/shimpodo/', bg: 'from-indigo-100 to-purple-200', text: 'text-indigo-600', hover: 'hover:border-indigo-400 hover:shadow-indigo-200' },
        { name: '광수', url: 'https://www.instagram.com/ps_mooon/', bg: 'from-cyan-100 to-blue-100', text: 'text-cyan-600', hover: 'hover:border-cyan-300 hover:shadow-cyan-200' },
        { name: '상철', url: 'https://www.instagram.com/rtmx_11/', bg: 'from-slate-100 to-blue-200', text: 'text-slate-600', hover: 'hover:border-slate-400 hover:shadow-slate-200' }
    ];

    return (
        <div className="w-full flex flex-col items-center">
            {/* Header Section */}
            <div className="w-full max-w-5xl text-center mb-10 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-40 bg-pink-400 w-64 h-64 rounded-full pointer-events-none"></div>
                <div className="absolute top-10 right-1/4 translate-x-12 blur-3xl opacity-40 bg-sky-300 w-48 h-48 rounded-full pointer-events-none"></div>
                
                <div className="relative z-10">
                    <div className="inline-flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-pink-100 mb-6 drop-shadow-sm">
                        <span className="text-3xl animate-pulse">💖</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mb-5 leading-tight flex flex-col sm:inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">나는 SOLO</span>
                        <span className="sm:ml-4 text-3xl sm:text-5xl text-slate-800">{season}기 인스타</span>
                    </h1>
                    
                    <p className="text-slate-600 font-medium text-base sm:text-lg max-w-2xl mx-auto break-keep leading-relaxed mt-2">
                        화제의 <strong className="text-pink-500">나는솔로 {season}기</strong> 출연진들의 일상을 엿볼 수 있는 <br className="hidden sm:block"/>
                        개인 인스타그램(Instagram) 프로필 바로가기 주소 모음입니다.
                    </p>
                </div>
            </div>

            {/* Season Selector */}
            <div className="relative z-20 mb-16 p-2 bg-white/50 backdrop-blur-md rounded-3xl border border-pink-100 shadow-xl flex gap-2">
                <button 
                    onClick={() => setSeason(30)}
                    className={`px-8 py-3 rounded-2xl font-black text-lg transition-all duration-300 ${season === 30 ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-pink-200' : 'text-slate-400 hover:text-rose-500 hover:bg-rose-50'}`}
                >
                    30기
                </button>
                <button 
                    onClick={() => setSeason(31)}
                    className={`px-8 py-3 rounded-2xl font-black text-lg transition-all duration-300 ${season === 31 ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-pink-200' : 'text-slate-400 hover:text-rose-500 hover:bg-rose-50'}`}
                >
                    31기
                </button>
            </div>

            {/* Content Container */}
            <div className="w-full max-w-4xl relative z-10 transition-opacity duration-300">
                
                {/* Female Cast Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-gradient-to-r from-transparent to-pink-200 flex-1" />
                        <h2 className="text-2xl sm:text-3xl font-black text-pink-600 flex items-center gap-2">
                            <span className="text-2xl">👩</span> {season}기 솔로녀
                        </h2>
                        <div className="h-px bg-gradient-to-l from-transparent to-pink-200 flex-1" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {femaleCast.map((person, index) => (
                            <Link 
                                key={index}
                                href={person.url}
                                className={`group bg-white rounded-3xl p-6 border-2 border-transparent shadow shadow-slate-100 ${person.hover} transition-all duration-300 flex flex-col items-center justify-center text-center`}
                            >
                                <div className={`w-20 h-20 mb-4 rounded-full bg-gradient-to-tr ${person.bg} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                                    <span className={`text-2xl font-black ${person.text}`}>{person.name}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-1">
                                    {person.name}
                                </h3>
                                <div className="flex items-center gap-1 text-sm font-medium text-pink-500 opacity-80 group-hover:opacity-100 transition-opacity mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    <span>인스타그램 보기</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Male Cast Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-gradient-to-r from-transparent to-blue-200 flex-1" />
                        <h2 className="text-2xl sm:text-3xl font-black text-blue-600 flex items-center gap-2">
                            <span className="text-2xl">👨</span> {season}기 솔로남
                        </h2>
                        <div className="h-px bg-gradient-to-l from-transparent to-blue-200 flex-1" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center">
                        {maleCast.map((person, index) => (
                            <Link 
                                key={index}
                                href={person.url}
                                className={`group bg-white rounded-3xl p-6 border-2 border-transparent shadow shadow-slate-100 ${person.hover} transition-all duration-300 flex flex-col items-center justify-center text-center`}
                            >
                                <div className={`w-20 h-20 mb-4 rounded-full bg-gradient-to-tr ${person.bg} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                                    <span className={`text-2xl font-black ${person.text}`}>{person.name}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-1">
                                    {person.name}
                                </h3>
                                <div className="flex items-center gap-1 text-sm font-medium text-blue-500 opacity-80 group-hover:opacity-100 transition-opacity mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    <span>인스타그램 보기</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Notice */}
            <div className="w-full max-w-3xl mt-10 p-6 bg-white/60 backdrop-blur-md rounded-3xl border border-slate-200/60 text-center relative z-10 shadow-sm">
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
                    본 페이지는 시청자들을 위한 참고용 링크 모음입니다. <br className="hidden sm:block"/>
                    출연진을 향한 <strong className="text-rose-500">무분별한 비난이나 악플은 자제</strong> 부탁드립니다. 🙏
                </p>
            </div>
        </div>
    );
}
