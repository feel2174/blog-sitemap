import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '각 은행별 고유가 피해지원금 신청 바로가기',
    description: '고유가 시대, 부담을 줄여주는 은행 및 지자체별 피해지원금 신청 안내. 신한, 기업, 우리, 농협, 하나, BC, 토스, 광주, 부산, 동백전 등 실시간 바로가기 제공.',
};

const bankLinks = [
    { name: '신한은행', url: 'https://www.shinhancard.com/pconts/html/myPage/governmentSupport/MOBFM591N/MOBFM591R02.html', color: 'bg-blue-50 text-[#0046FF] border-[#0046FF]/20 hover:border-[#0046FF]/50' },
    { name: '기업은행', url: 'https://www.ibk.co.kr/', color: 'bg-blue-50 text-[#0055d4] border-[#003B91]/20 hover:border-[#003B91]/50' },
    { name: '우리은행', url: 'https://pc.wooricard.com/dcpc/yh1/mcd/mcd04/fcstistlfee/H1MCD204S85.do?1777219246389', color: 'bg-sky-50 text-[#0088e8] border-[#0070C0]/20 hover:border-[#0070C0]/50' },
    { name: '농협은행', url: 'https://banking.nonghyup.com/nhbank.html', color: 'bg-green-50 text-[#009A3E] border-[#009A3E]/20 hover:border-[#009A3E]/50' },
    { name: '하나은행', url: 'https://m.hanacard.co.kr/MKEVT1010M.web?EVN_SEQ=60332', color: 'bg-teal-50 text-[#009490] border-[#009490]/20 hover:border-[#009490]/50' },
    { name: 'BC카드', url: 'https://go.bccard.com/app/apply?mbNo=007&tab=', color: 'bg-red-50 text-[#E30613] border-[#E30613]/20 hover:border-[#E30613]/50' },
    { name: '토스(Toss)', url: 'https://www.tossbank.com/', color: 'bg-blue-50 text-[#0050FF] border-[#0050FF]/20 hover:border-[#0050FF]/50' },
    { name: '광주은행', url: 'https://www.kjbank.com/ib20/mnu/BHPBKIF050101?ib20_wc=BHPBKIF050101V10:BHPBKIF050101V20&DIV100_S1=2&BLTHG_NO=32386&INBN_POPUP_BLBD_DVCD=NWS&ROW_NUM1=1', color: 'bg-sky-50 text-[#005CA2] border-[#005CA2]/20 hover:border-[#005CA2]/50' },
    { name: '부산은행', url: 'https://www.busan.go.kr/relief/', color: 'bg-rose-50 text-[#E60024] border-[#E60024]/20 hover:border-[#E60024]/50' },
    { name: '동백전', url: 'https://busandong100.kr/cs/noticeDesc?seq=29801', color: 'bg-emerald-50 text-[#009B8B] border-[#009B8B]/20 hover:border-[#009B8B]/50' },
    { name: '네이버페이', url: 'https://pay.naver.com/gov/energyrelief', color: 'bg-green-50 text-[#03C75A] border-[#03C75A]/20 hover:border-[#03C75A]/50' },
];

export default function OilPriceSupportPage() {
    return (
        <div
            className="min-h-screen bg-slate-50 text-neutral-900 flex flex-col items-center py-10 px-4 sm:px-6 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Light Theme Background Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-100/50 via-white to-white z-[1] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-200/40 via-transparent to-transparent z-[2] pointer-events-none" />

            <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center mt-6">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                        </span>
                        Financial Relief Support
                    </div>

                    <h1 className="text-3xl md:text-4xl font-black tracking-tighter mb-3 leading-tight text-neutral-900">
                        각 은행별 고유가<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-600">피해지원금 신청</span>
                    </h1>

                    <div className="h-1 w-10 bg-blue-500 mx-auto rounded-full mb-4" />

                    <p className="text-neutral-600 text-sm font-medium tracking-tight leading-relaxed px-2">
                        소상공인 및 취약계층의 유류비 부담 완화를 위한<br />
                        <span className="text-blue-700 font-bold">고유가 피해지원금</span>을 지금 바로 신청하세요.
                    </p>
                </div>

                {/* Mobile Optimized Grid Layout */}
                <div className="w-full grid grid-cols-2 gap-3 mb-10">
                    {bankLinks.map((bank, index) => (
                        <Link
                            key={index}
                            href={bank.url}
                            className={`group relative flex flex-col items-center justify-center bg-white border ${bank.color} p-4 rounded-[1.25rem] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-95`}
                        >
                            {/* Icon Placeholder (Can be replaced with actual SVG) */}
                            <div className={`w-10 h-10 mb-2 rounded-full bg-white shadow-sm flex items-center justify-center text-current`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
                            </div>
                            
                            <span className="font-bold text-sm tracking-tight text-center z-10 text-neutral-800">{bank.name}</span>
                        </Link>
                    ))}
                </div>

                {/* Additional Notice Card */}
                <div className="w-full bg-blue-50/50 border border-blue-100 p-5 rounded-2xl relative overflow-hidden mb-8 shadow-sm">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                    <h4 className="text-blue-900 text-sm font-bold mb-2 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                        지원금 신청 안내
                    </h4>
                    <ul className="text-[11px] sm:text-xs text-neutral-600 space-y-1.5 list-disc pl-4 leading-relaxed font-medium">
                        <li>각 은행사 및 카드사별로 지원 대상과 신청 기간이 다를 수 있으니 상세 내용을 반드시 확인하세요.</li>
                        <li>화물차 유가보조금 카드 및 사업자 카드를 통한 캐시백 형태의 지원이 주로 이루어집니다.</li>
                        <li>로그인이 필요한 서비스가 포함되어 있으므로, 이용하시는 해당 금융기관의 인증 수단을 미리 준비해 주세요.</li>
                    </ul>
                </div>

                <footer className="text-center w-full mb-10">
                    <div className="h-px w-full max-w-[150px] mx-auto bg-gradient-to-r from-transparent via-neutral-200 to-transparent mb-4" />
                    <p className="text-neutral-400 text-[9px] font-bold tracking-widest uppercase">
                        GOVERNMENT SUPPORT LINKS
                    </p>
                </footer>
            </div>
            
            <CoupangAds 
                keyword="주유상품권" 
                title="⛽ 실속있는 주유 혜택"
                hookText="지원금과 함께 사용하면 더 큰 혜택! 모바일 주유권 및 자동차 용품을 확인해 보세요."
            />
        </div>
    );
}
