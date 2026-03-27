import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '하스카프베리 묘목 판매처 바로가기',
    description: '달콤하고 영양가 높은 하스카프베리 묘목 판매처 사이트 링크 화면입니다.',
};

export default function HaskapBerryPage() {
    return (
        <div 
            className="min-h-screen bg-slate-50 text-slate-800 py-20 px-4 flex flex-col items-center selection:bg-red-200"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            <style>
                {`
                    @keyframes pulse-red {
                        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.4); }
                        70% { transform: scale(1.02); box-shadow: 0 0 0 12px rgba(255, 0, 0, 0); }
                        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 0, 0, 0); }
                    }
                `}
            </style>

            <div className="w-full max-w-3xl text-center mb-12">
                <div className="inline-flex items-center justify-center p-4 bg-white rounded-3xl shadow-sm border border-slate-200 mb-6 drop-shadow-sm">
                    <span className="text-5xl">🍒</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
                    <span className="text-red-600">하스카프베리</span> 묘목 판매처
                </h1>
                <p className="text-slate-500 font-medium text-base sm:text-lg max-w-xl mx-auto break-keep leading-relaxed mt-2">
                    슈퍼푸드로 각광받는 하스카프베리 묘목을 만나보세요. <br className="hidden sm:block"/>
                    믿을 수 있는 판매처로 바로 연결됩니다.
                </p>
            </div>

            <div className="w-full max-w-md flex flex-col gap-[20px] my-[30px] z-10">
                <div 
                    style={{ 
                        backgroundColor: 'red', 
                        borderRadius: '12px', 
                        textAlign: 'center', 
                        animation: 'pulse-red 2s infinite', 
                        padding: '18px' 
                    }}
                >
                    <Link
                        href="https://www.dailimseed.co.kr/shop/1442403368"
                        style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}
                    >
                        하스카프베리 묘목 판매처1 바로가기
                    </Link>
                </div>
                
                <div 
                    style={{ 
                        backgroundColor: 'red', 
                        borderRadius: '12px', 
                        textAlign: 'center', 
                        animation: 'pulse-red 2s infinite', 
                        padding: '18px' 
                    }}
                >
                    <Link
                        href="https://m.woolimtree.com/shop/detail.php?pno=445DC1BD2498D250B1A65A9BBE4BB5D9&rURL=https%3A%2F%2Fm.woolimtree.com%2Fshop%2Fbig_section.php%3Fpage%3D3%26cno1%3D1004&ctype=1&cno1=1004"
                        style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', display: 'block' }}
                    >
                        하스카프베리 묘목 판매처2 바로가기
                    </Link>
                </div>
            </div>

            {/* Bottom Background Decoration */}
            <div className="fixed bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-red-50 to-transparent pointer-events-none -z-10"></div>
        </div>
    );
}
