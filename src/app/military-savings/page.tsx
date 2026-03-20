import Link from 'next/link';

export const metadata = {
    title: '2025 전국 장병내일준비적금 은행별 금리 비교 및 신청 - KB, 하나, IBK, 신한 등 14개 은행',
    description: '전국 14개 은행의 장병내일준비적금 금리를 한눈에 비교하세요. 최고 10%대 금리 정보와 네이버페이 간편 신청 링크를 제공합니다. 군 장병을 위한 고금리 적금 완벽 가이드.',
};

export default function MilitarySavingsPage() {
    const unifiedUrl = 'https://pay.naver.com/savings/search?keyword=%EC%9E%A5%EB%B3%91%EB%82%B4%EC%9D%BC%EC%A4%80%EB%B9%84%EC%A0%81%EA%B8%88&productTypeCode=1003';

    const bankData = [
        { name: 'KB 국민은행', maxRate: '10.00%', baseRate: '4.50%', color: 'from-amber-400 to-amber-600' },
        { name: '하나은행', maxRate: '9.80%', baseRate: '4.60%', color: 'from-emerald-500 to-emerald-700' },
        { name: 'IBK 기업은행', maxRate: '9.70%', baseRate: '4.50%', color: 'from-blue-600 to-blue-800' },
        { name: '신한은행', maxRate: '9.50%', baseRate: '4.50%', color: 'from-blue-500 to-indigo-700' },
        { name: 'NH 농협은행', maxRate: '7.50%', baseRate: '4.50%', color: 'from-green-500 to-lime-600' },
        { name: '우리은행', maxRate: '5.30%', baseRate: '4.30%', color: 'from-sky-400 to-blue-500' },
        { name: '우체국', maxRate: '5.30%', baseRate: '4.50%', color: 'from-red-500 to-rose-600' },
        { name: 'iM 뱅크 (대구)', maxRate: '5.00%', baseRate: '4.50%', color: 'from-cyan-500 to-blue-500' },
        { name: '광주은행 (KJB)', maxRate: '4.70%', baseRate: '4.20%', color: 'from-blue-500 to-indigo-600' },
        { name: '경남은행', maxRate: '4.60%', baseRate: '4.50%', color: 'from-red-600 to-rose-700' },
        { name: 'SH 수협은행', maxRate: '4.50%', baseRate: '4.50%', color: 'from-blue-400 to-blue-600' },
        { name: '제주은행', maxRate: '4.50%', baseRate: '4.50%', color: 'from-blue-600 to-indigo-700' },
        { name: '전북은행 (JB)', maxRate: '4.10%', baseRate: '4.10%', color: 'from-indigo-600 to-blue-800' },
        { name: '부산은행', maxRate: '4.10%', baseRate: '4.00%', color: 'from-red-500 to-red-700' }
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-[10px] font-black tracking-widest uppercase mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        2025 Military Financial Guide
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
                        <span className="block">장병내일준비적금</span>
                        <span className="text-green-500">은행별 금리 비교</span>
                    </h1>

                    <p className="text-zinc-400 text-sm md:text-base font-medium max-w-lg mx-auto leading-relaxed">
                        전국 14개 은행의 금리를 한눈에 비교하고 <br />
                        <span className="text-white">나에게 가장 유리한 혜택</span>을 선택하세요.
                    </p>
                </div>

                {/* Grid Layout for Bank Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-16">
                    {bankData.map((bank, index) => (
                        <Link
                            key={index}
                            href={unifiedUrl}
                            className="group relative flex items-center justify-between bg-zinc-900/40 border border-white/5 p-4 rounded-2xl transition-all duration-300 hover:bg-zinc-800/60 hover:border-green-500/30 active:scale-[0.98]"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-1 h-10 rounded-full bg-gradient-to-b ${bank.color}`} />
                                <div className="flex flex-col">
                                    <span className="text-base font-bold text-zinc-100 group-hover:text-white">
                                        {bank.name}
                                    </span>
                                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
                                        Tomorrow Savings
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col items-end">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-[10px] text-zinc-400">최고</span>
                                    <span className="text-lg font-black text-green-500 group-hover:scale-110 transition-transform">
                                        {bank.maxRate}
                                    </span>
                                </div>
                                <span className="text-[10px] text-zinc-500">
                                    기본 {bank.baseRate}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Important Notes */}
                <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-3xl mb-20">
                    <h3 className="text-green-500 font-black text-sm mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        주요 가입 정보 및 혜택
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-left">
                            <h4 className="text-zinc-300 text-xs font-bold mb-2">총 이자 혜택</h4>
                            <p className="text-zinc-500 text-[11px] leading-relaxed">은행 금리(최고 5%) + 국가 지원 금리(1%)로 실질 금리 6% 대의 혜택을 제공합니다.</p>
                        </div>
                        <div className="text-left">
                            <h4 className="text-zinc-300 text-xs font-bold mb-2">매칭지원금</h4>
                            <p className="text-zinc-500 text-[11px] leading-relaxed">전역 시 원금 및 이자의 100%를 국가가 추가로 지급합니다. (원금의 2배 효과)</p>
                        </div>
                        <div className="text-left">
                            <h4 className="text-zinc-300 text-xs font-bold mb-2">비과세 혜택</h4>
                            <p className="text-zinc-500 text-[11px] leading-relaxed">이자소득에 대한 세금(15.4%)이 면제되어 정해진 이자를 온전히 수령합니다.</p>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <footer className="text-center pb-12">
                     <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                         National Military Finance Portal
                     </p>
                     <p className="text-zinc-700 text-[9px] leading-relaxed max-w-sm mx-auto">
                        금리 정보는 공시 시점에 따라 차이가 있을 수 있으므로 <br />
                        반드시 해당 은행 신청 페이지에서 상세 내용을 확인하시기 바랍니다.
                     </p>
                </footer>
            </div>
        </div>
    );
}
