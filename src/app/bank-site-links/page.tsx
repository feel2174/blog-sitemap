import Link from 'next/link';

export const metadata = {
    title: '전국 은행 홈페이지 바로가기 | 14개 은행 공식 사이트 및 적금 금리 비교',
    description: 'KB국민은행, 하나은행, 신한은행, IBK기업은행, NH농협은행 등 전국 14개 은행의 공식 홈페이지를 한곳에서 바로가기 하세요. 은행별 적금 최고금리 정보도 함께 확인할 수 있습니다.',
};

export default function BankSiteLinksPage() {
    const bankData = [
        { name: 'KB 국민은행', short: 'KB', maxRate: '10.00%', baseRate: '4.50%', color: 'from-amber-400 to-amber-600', url: 'https://www.kbstar.com' },
        { name: '하나은행', short: '하나', maxRate: '9.80%', baseRate: '4.60%', color: 'from-emerald-500 to-emerald-700', url: 'https://www.kebhana.com' },
        { name: 'IBK 기업은행', short: 'IBK', maxRate: '9.70%', baseRate: '4.50%', color: 'from-blue-600 to-blue-800', url: 'https://www.ibk.co.kr' },
        { name: '신한은행', short: '신한', maxRate: '9.50%', baseRate: '4.50%', color: 'from-blue-500 to-indigo-700', url: 'https://www.shinhan.com' },
        { name: 'NH 농협은행', short: 'NH', maxRate: '7.50%', baseRate: '4.50%', color: 'from-green-500 to-lime-600', url: 'https://banking.nonghyup.com' },
        { name: '우리은행', short: '우리은행', maxRate: '5.30%', baseRate: '4.30%', color: 'from-sky-400 to-blue-500', url: 'https://www.wooribank.com' },
        { name: '우정사업본부', short: '우체국', maxRate: '5.30%', baseRate: '4.50%', color: 'from-red-500 to-rose-600', url: 'https://www.epostbank.go.kr' },
        { name: 'iM 뱅크', short: 'iM', maxRate: '5.00%', baseRate: '4.50%', color: 'from-cyan-500 to-blue-500', url: 'https://www.imbank.co.kr' },
        { name: '광주은행', short: 'KJB', maxRate: '4.70%', baseRate: '4.20%', color: 'from-blue-500 to-indigo-600', url: 'https://www.kjbank.com' },
        { name: '경남은행', short: '경남은행', maxRate: '4.60%', baseRate: '4.50%', color: 'from-red-600 to-rose-700', url: 'https://www.knbank.co.kr' },
        { name: 'SH 수협은행', short: 'Sh', maxRate: '4.50%', baseRate: '4.50%', color: 'from-blue-400 to-blue-600', url: 'https://www.suhyup-bank.com' },
        { name: '제주은행', short: '제주은행', maxRate: '4.50%', baseRate: '4.50%', color: 'from-blue-600 to-indigo-700', url: 'https://www.jejubank.co.kr' },
        { name: '전북은행', short: 'JB', maxRate: '4.10%', baseRate: '4.10%', color: 'from-indigo-600 to-blue-800', url: 'https://www.jbbank.co.kr' },
        { name: '부산은행', short: '부산은행', maxRate: '4.10%', baseRate: '4.00%', color: 'from-red-500 to-red-700', url: 'https://www.busanbank.co.kr' },
    ];

    return (
        <div
            className="min-h-screen bg-[#050805] text-white flex flex-col items-center px-4 py-16 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-[1]" />

            <div className="relative z-10 w-full max-w-4xl">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-[10px] font-black tracking-widest uppercase mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Bank Official Site Directory
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
                        <span className="block">전국 은행</span>
                        <span className="text-green-500">홈페이지 바로가기</span>
                    </h1>

                    <p className="text-zinc-300 text-sm md:text-base font-medium max-w-lg mx-auto leading-relaxed">
                        전국 14개 은행의 공식 홈페이지로 바로 이동하고 <br />
                        <span className="text-white font-bold">은행별 적금 최고금리</span>도 함께 확인하세요.
                    </p>
                </div>

                {/* Grid Layout for Bank Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                    {bankData.map((bank, index) => (
                        <Link
                            key={index}
                            href={bank.url}
                            className="group relative flex items-center justify-between bg-zinc-900/50 border border-white/10 p-5 rounded-2xl transition-all duration-300 hover:bg-zinc-800/80 hover:border-green-500/40 active:scale-[0.98] shadow-lg"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-1 h-12 rounded-full bg-gradient-to-b ${bank.color} shadow-[0_0_10px_rgba(0,0,0,0.5)]`} />
                                <div className="flex flex-col">
                                    <span className="text-base md:text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                                        {bank.name}
                                    </span>
                                    <span className="text-xs text-zinc-400 font-medium group-hover:text-zinc-200">
                                        공식 홈페이지 바로가기
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col items-end">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-[10px] text-zinc-300 font-bold">적금 최고</span>
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
                        이용 안내
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-left">
                            <h4 className="text-zinc-200 text-xs font-black mb-3 border-l-2 border-green-500 pl-2 uppercase tracking-tighter">공식 사이트 연결</h4>
                            <p className="text-zinc-400 text-[11px] leading-relaxed font-medium">각 카드 클릭 시 해당 은행의 공식 홈페이지로 바로 이동합니다. 즐겨찾기에 등록해두면 다음에도 빠르게 접속할 수 있습니다.</p>
                        </div>
                        <div className="text-left">
                            <h4 className="text-zinc-200 text-xs font-black mb-3 border-l-2 border-green-500 pl-2 uppercase tracking-tighter">피싱 사이트 주의</h4>
                            <p className="text-zinc-400 text-[11px] leading-relaxed font-medium">문자나 메신저로 받은 링크 대신 이 페이지처럼 공식 주소를 통해 접속하는 것이 안전합니다. 주소창의 도메인을 꼭 확인하세요.</p>
                        </div>
                        <div className="text-left">
                            <h4 className="text-zinc-200 text-xs font-black mb-3 border-l-2 border-green-500 pl-2 uppercase tracking-tighter">금리 정보 안내</h4>
                            <p className="text-zinc-400 text-[11px] leading-relaxed font-medium">표시된 적금 금리는 참고용이며, 상품·우대조건에 따라 달라질 수 있으니 각 은행 홈페이지에서 최신 금리를 확인하세요.</p>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <footer className="text-center pb-12">
                    <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                        National Bank Site Directory
                    </p>
                    <p className="text-zinc-600 text-[9px] leading-relaxed max-w-sm mx-auto font-medium">
                        은행별 홈페이지 주소와 금리 정보는 변경될 수 있으므로 <br />
                        반드시 접속한 사이트에서 최신 정보를 다시 확인하시기 바랍니다.
                    </p>
                </footer>
            </div>
        </div>
    );
}
