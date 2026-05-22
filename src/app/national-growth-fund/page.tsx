import React from 'react';
import Link from 'next/link';
import { FaBuilding, FaChevronRight, FaChartLine, FaShieldAlt } from 'react-icons/fa';

export const metadata = {
    title: '국민성장펀드 계좌 개설 안내 | 전 은행사 통합',
    description: '국민성장펀드 가입을 위한 각 은행 및 카드사별 계좌 개설 바로가기입니다.',
};

const bankLinks = [
    { name: '신한은행', url: 'https://www.shinhancard.com/pconts/html/myPage/governmentSupport/MOBFM591N/MOBFM591R02.html' },
    { name: '기업은행', url: 'https://www.ibk.co.kr/' },
    { name: '우리은행', url: 'https://pc.wooricard.com/dcpc/yh1/mcd/mcd04/fcstistlfee/H1MCD204S85.do?1777219246389' },
    { name: '농협은행', url: 'https://banking.nonghyup.com/nhbank.html' },
    { name: '하나은행', url: 'https://m.hanacard.co.kr/MKEVT1010M.web?EVN_SEQ=60332' },
    { name: 'BC카드', url: 'https://go.bccard.com/app/apply?mbNo=007&tab=' },
    { name: '토스(Toss)', url: 'https://www.tossbank.com/' },
    { name: '광주은행', url: 'https://www.kjbank.com/ib20/mnu/BHPBKIF050101?ib20_wc=BHPBKIF050101V10:BHPBKIF050101V20&DIV100_S1=2&BLTHG_NO=32386&INBN_POPUP_BLBD_DVCD=NWS&ROW_NUM1=1' },
    { name: '부산은행', url: 'https://www.busan.go.kr/relief/' },
    { name: '동백전', url: 'https://busandong100.kr/cs/noticeDesc?seq=29801' },
    { name: '네이버페이', url: 'https://pay.naver.com/gov/energyrelief' },
    { name: '케이뱅크', url: 'https://www.kbanknow.com/ib20/mnu/PBKMAN000000' },
    { name: '현대카드', url: 'https://www.hyundaicard.com/cpb/gs/CPBGS2501_01.hc' },
    { name: '롯데카드', url: 'https://jiwon3.lottecard.co.kr/app/LPEMRFA_P300.lc' },
    { name: '삼성카드', url: 'https://www.samsungcard.com/personal/main/UHPPCO0101M0.jsp' },
    { name: '국민카드', url: 'https://m.kbcard.com/BON/DVIEW/MBHV1103' },
    { name: '신한카드', url: 'https://www.shinhancard.com/pconts/html/myPage/governmentSupport/MOBFM591N/MOBFM591R02.html' },
];

export default function NationalGrowthFundPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-emerald-500/30" style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}>
            
            {/* Cinematic Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-emerald-900/20 blur-[120px] mix-blend-screen"></div>
                <div className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-teal-900/20 blur-[100px] mix-blend-screen"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 lg:py-32">
                
                {/* Hero Section */}
                <div className="text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-2">
                        <FaChartLine className="animate-pulse" />
                        National Growth Fund 2026
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-tight">
                        미래를 위한 확실한 투자,<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                            국민성장펀드
                        </span>
                    </h1>
                    
                    <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed break-keep">
                        정부가 지원하는 안정적인 수익률과 세제 혜택. 지금 바로 주거래 은행에서 계좌를 개설하고 혜택을 누리세요.
                    </p>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
                        <FaShieldAlt className="text-3xl text-emerald-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-3">안전한 자산 보호</h3>
                        <p className="text-zinc-400 leading-relaxed break-keep">국가에서 보증하는 펀드 상품으로 원금 손실의 위험을 최소화하여 안정적인 자산 증식을 돕습니다.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
                        <FaChartLine className="text-3xl text-cyan-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-3">비과세 혜택</h3>
                        <p className="text-zinc-400 leading-relaxed break-keep">발생하는 수익에 대해 전면 비과세 혜택이 주어져 실질 수익률을 극대화할 수 있습니다.</p>
                    </div>
                </div>

                {/* Bank List Section (Vertical Rows instead of Grid Cards) */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                        <h2 className="text-2xl font-bold flex items-center gap-3">
                            <FaBuilding className="text-emerald-500" />
                            참여 금융기관 목록
                        </h2>
                        <span className="text-zinc-500 text-sm font-medium">총 {bankLinks.length}개 기관</span>
                    </div>

                    <div className="flex flex-col gap-3">
                        {bankLinks.map((bank, index) => (
                            <Link 
                                key={index} 
                                href={bank.url}
                                className="group relative w-full flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/50 hover:bg-white/[0.08] transition-all duration-300"
                            >
                                {/* Left: Bank Info */}
                                <div className="flex items-center gap-5 mb-4 sm:mb-0">
                                    <div className="w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center border border-white/10 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
                                        <span className="font-black text-lg text-zinc-300 group-hover:text-emerald-400">{bank.name.charAt(0)}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">{bank.name}</h3>
                                        <p className="text-sm text-zinc-500 font-medium mt-1">온라인 간편 계좌 개설 지원</p>
                                    </div>
                                </div>

                                {/* Right: Action Button */}
                                <div className="flex items-center sm:justify-end">
                                    <div className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full bg-zinc-800 text-zinc-300 font-bold text-sm border border-white/5 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300">
                                        <span>계좌 개설하기</span>
                                        <FaChevronRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    );
}
