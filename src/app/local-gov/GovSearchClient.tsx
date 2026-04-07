'use client';

import { useState } from 'react';
import Link from 'next/link';
import { govData } from './govData';

export default function GovSearchClient() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredLinks = govData.filter(link => {
        if (!searchQuery.trim()) return true;
        const query = searchQuery.replace(/\s+/g, '').toLowerCase();
        
        // Exact or partial match on the keywords, name, or description
        return (
            link.name.toLowerCase().includes(query) ||
            link.desc.replace(/\s+/g, '').toLowerCase().includes(query) ||
            link.keywords.some(kw => kw.toLowerCase().includes(query) || query.includes(kw.toLowerCase()))
        );
    });

    return (
        <div className="w-full">
            {/* Search Input Section */}
            <div className="mb-10 max-w-md mx-auto relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input
                    type="text"
                    className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium shadow-sm"
                    placeholder="우리동네 이름 검색 (예: 관악구)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Grid Layout for Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredLinks.length > 0 ? (
                    filteredLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            className="group relative flex items-center bg-white border border-slate-200 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50 active:scale-[0.98] overflow-hidden"
                        >
                            <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${link.color} group-hover:w-2 transition-all duration-300`} />
                            
                            <div className="flex w-full items-center justify-between ml-2">
                                <div className="text-left">
                                    <span className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {link.name}
                                    </span>
                                    <p className="text-slate-400 text-[11px] font-medium mt-0.5 group-hover:text-slate-600 transition-colors">
                                        {link.desc}
                                    </p>
                                </div>
                                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="col-span-1 md:col-span-2 py-12 text-center text-slate-500 bg-white/50 border border-slate-200 border-dashed rounded-2xl">
                        검색 결과가 없습니다. <br />
                        <span className="text-sm">다른 지역명으로 검색해보세요.</span>
                    </div>
                )}
            </div>
        </div>
    );
}
