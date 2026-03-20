import Link from 'next/link';

export const metadata = {
    title: '2025 전국 장병내일준비적금 은행별 금리 비교 및 신청 - KB, 하나, IBK, 신한 등 14개 은행',
    description: '전국 14개 은행의 장병내일준비적금 금리를 한눈에 비교하세요. 최고 10%대 금리 정보와 네이버페이 간편 신청 링크를 제공합니다. 군 장병을 위한 고금리 적금 완벽 가이드.',
};

export default function MilitarySavingsPage() {
    const unifiedUrl = 'https://pay.naver.com/savings/search?keyword=%EC%9E%A5%EB%B3%91%EB%82%B4%EC%9D%BC%EC%A4%80%EB%B9%84%EC%A0%81%EA%B8%88&productTypeCode=1003';

    const bankData = [
        { name: 'KB 국민은행', short: 'KB', maxRate: '10.00%', baseRate: '4.50%', color: 'from-amber-400 to-amber-600' },
        { name: '하나은행', short: '하나', maxRate: '9.80%', baseRate: '4.60%', color: 'from-emerald-500 to-emerald-700' },
        { name: 'IBK 기업은행', short: 'IBK', maxRate: '9.70%', baseRate: '4.50%', color: 'from-blue-600 to-blue-800' },
        { name: '신한은행', short: '신한', maxRate: '9.50%', baseRate: '4.50%', color: 'from-blue-500 to-indigo-700' },
        { name: 'NH 농협은행', short: 'NH', maxRate: '7.50%', baseRate: '4.50%', color: 'from-green-500 to-lime-600' },
        { name: '우리은행', short: '우리은행', maxRate: '5.30%', baseRate: '4.30%', color: 'from-sky-400 to-blue-500' },
        { name: '우정사업본부', short: '우체국', maxRate: '5.30%', baseRate: '4.50%', color: 'from-red-500 to-rose-600' },
        { name: 'iM 뱅크', short: 'iM', maxRate: '5.00%', baseRate: '4.50%', color: 'from-cyan-500 to-blue-500' },
        { name: '광주은행', short: 'KJB', maxRate: '4.70%', baseRate: '4.20%', color: 'from-blue-500 to-indigo-600' },
        { name: '경남은행', short: '경남은행', maxRate: '4.60%', baseRate: '4.50%', color: 'from-red-600 to-rose-700' },
        { name: 'SH 수협은행', short: 'Sh', maxRate: '4.50%', baseRate: '4.50%', color: 'from-blue-400 to-blue-600' },
        { name: '제주은행', short: '제주은행', maxRate: '4.50%', baseRate: '4.50%', color: 'from-blue-600 to-indigo-700' },
        { name: '전북은행', short: 'JB', maxRate: '4.10%', baseRate: '4.10%', color: 'from-indigo-600 to-blue-800' },
        { name: '부산은행', short: '부산은행', maxRate: '4.10%', baseRate: '4.00%', color: 'from-red-500 to-red-700' }
    ];

    return (
        <div
            className="min-h-screen bg-[#050805] text-white flex flex-col items-center px-4 py-16 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Background Layer */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-20 scale-110 pointer-events-none grayscale"
                style={{ backgroundImage: 'url("/military-savings-bg.png")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-[1]" />

            <div className="relative z-10 w-full max-w-4xl">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-[10px] font-black tracking-widest uppercase mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        2025 Military Financial Guide
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
                        <span className="block">장병내일준비적금</span>
                        <span className="text-green-500">은행별 금리 비교</span>
                    </h1>

                    <p className="text-zinc-300 text-sm md:text-base font-medium max-w-lg mx-auto leading-relaxed">
                        전국 14개 은행의 금리를 한눈에 비교하고 <br />
                        <span className="text-white font-bold">나에게 가장 유리한 혜택</span>을 선택하세요.
                    </p>
                </div>

                {/* Grid Layout for Bank Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                    {bankData.map((bank, index) => (
                        <Link
                            key={index}
                            href={unifiedUrl}
                            className="group relative flex items-center justify-between bg-zinc-900/50 border border-white/10 p-5 rounded-2xl transition-all duration-300 hover:bg-zinc-800/80 hover:border-green-500/40 active:scale-[0.98] shadow-lg"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-1 h-12 rounded-full bg-gradient-to-b ${bank.color} shadow-[0_0_10px_rgba(0,0,0,0.5)]`} />
                                <div className="flex flex-col">
                                    <span className="text-base md:text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                                        <span className="text-green-500">{bank.short}</span>장병내일준비적금
                                    </span>
                                    <span className="text-xs text-zinc-400 font-medium group-hover:text-zinc-200">
                                        {bank.name}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col items-end">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-[10px] text-zinc-300 font-bold">최고</span>
                                    <span className="text-xl font-black text-green-400 group-hover:scale-105 transition-transform drop-shadow-[0_0_5px_rgba(72,187,120,0.2)]">
                                        {bank.maxRate}
                                    </span>
                                </div>
                                <span className="text-[10px] text-zinc-400 font-bold">
                                    기본 {bank.baseRate}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Important Notes */}
                <div className="p-8 bg-zinc-900/40 border border-white/10 rounded-3xl mb-20 backdrop-blur-sm">
                    <h3 className="text-green-400 font-black text-sm mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        주요 가입 정보 및 혜택
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-left">
                            <h4 className="text-zinc-200 text-xs font-black mb-3 border-l-2 border-green-500 pl-2 uppercase tracking-tighter">총 이자 혜택</h4>
                            <p className="text-zinc-400 text-[11px] leading-relaxed font-medium">은행 금리(최고 5%) + 국가 지원 금리(1%)로 실질 금리 6% 대의 혜택을 제공합니다.</p>
                        </div>
                        <div className="text-left">
                            <h4 className="text-zinc-200 text-xs font-black mb-3 border-l-2 border-green-500 pl-2 uppercase tracking-tighter">매칭지원금</h4>
                            <p className="text-zinc-400 text-[11px] leading-relaxed font-medium">전역 시 원금 및 이자의 100%를 국가가 추가로 지급합니다. (원금의 2배 효과)</p>
                        </div>
                        <div className="text-left">
                            <h4 className="text-zinc-200 text-xs font-black mb-3 border-l-2 border-green-500 pl-2 uppercase tracking-tighter">비과세 혜택</h4>
                            <p className="text-zinc-400 text-[11px] leading-relaxed font-medium">이자소득에 대한 세금(15.4%)이 면제되어 정해진 이자를 온전히 수령합니다.</p>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <footer className="text-center pb-12">
                     <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                         National Military Finance Portal
                     </p>
                     <p className="text-zinc-600 text-[9px] leading-relaxed max-w-sm mx-auto font-medium">
                        금리 정보는 공시 시점에 따라 차이가 있을 수 있으므로 <br />
                        반드시 해당 은행 가입 페이지에서 상세 내용을 확인하시기 바랍니다.
                     </p>
                </footer>
            </div>
        </div>
    );
}
