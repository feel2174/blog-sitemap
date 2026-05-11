import ExcelClient from './ExcelClient';

export const metadata = {
    title: '직장인 필수 엑셀 함수 총정리 (VLOOKUP, SUMIFS, XLOOKUP 등)',
    description: '실무에서 가장 많이 쓰이는 직장인 필수 엑셀 함수 모음입니다. VLOOKUP부터 IF, SUMIFS, XLOOKUP까지 예시와 함께 완벽하게 마스터하세요.',
};

export default function ExcelFunctionsPage() {
    return (
        <div 
            className="min-h-screen bg-[#f8f9fa] text-slate-800 pb-16 relative"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}
        >
            {/* Header */}
            <header className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                    <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"></path><path d="M8 12h8v2H8zm0 4h8v2H8z"></path></svg>
                </div>
                
                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <span className="inline-block py-1.5 px-4 bg-white/20 rounded-full text-emerald-50 text-sm font-bold tracking-widest mb-6 backdrop-blur-md border border-white/30 shadow-sm">
                        EXCEL MASTER GUIDE
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                        칼퇴를 부르는 직장인<br className="md:hidden" /> 필수 <span className="text-emerald-200 border-b-4 border-emerald-300">엑셀 함수</span>
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-50 font-medium opacity-90 max-w-2xl mx-auto">
                        실무에서 가장 많이 쓰이는 핵심 함수만 모았습니다. 
                        수식 복사해서 바로 실무에 적용해 보세요!
                    </p>
                </div>
            </header>

            {/* Interactive Content Area */}
            <ExcelClient />
        </div>
    );
}
