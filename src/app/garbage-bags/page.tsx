import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '전국 지자체 종량제봉투 인터넷 주문 (지정판매소 전용)',
    description: '대구, 천안, 포항, 성남, 양산 등 전국 주요 지자체 종량제봉투 (쓰레기봉투) 인터넷 주문 및 결제 사이트 바로가기 안내.',
};

export default function GarbageBagsPage() {
    const govSites = [
        { name: '대구광역시 중구', url: 'https://jung.daegu.kr/garbagebag/', desc: '중구 종량제봉투 구매시스템' },
        { name: '대구광역시 서구', url: 'https://dgs.go.kr', desc: '통합서비스 (모바일 앱 지원)' },
        { name: '천안시', url: 'http://smartm.iexe.co.kr/', desc: '천안도시공사 종량제 주문' },
        { name: '포항시', url: 'http://reservation.phsisul.org', desc: '시설관리공단 예약/주문 시스템' },
        { name: '창원시', url: 'https://www.cwsisul.or.kr', desc: '시설공단 (카톡 창원쓰봉 지원)' },
        { name: '양산시', url: 'https://www.yssisul.or.kr', desc: '종량제봉투 웹주문 시스템' },
        { name: '화성시', url: 'https://www.hsef.or.kr', desc: '환경재단 종량제봉투 주문' },
        { name: '성남시', url: 'https://www.isdc.co.kr', desc: '종량제봉투 인터넷 접수 시스템' },
        { name: '의왕시', url: 'https://www.uuc.or.kr', desc: '의왕도시공사 지정판매소 구매' },
        { name: '부천시', url: 'https://best.or.kr', desc: '부천도시공사 종량제 주문' }
    ];

    return (
        <div 
            className="min-h-screen bg-slate-50 text-slate-800 py-16 px-4 sm:px-6 flex flex-col items-center selection:bg-green-200"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            {/* Header Section */}
            <div className="w-full max-w-5xl text-center mb-14">
                <div className="inline-flex items-center justify-center p-4 bg-white rounded-3xl shadow-sm border border-slate-200 mb-6 drop-shadow-sm">
                    <span className="text-4xl">♻️</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
                    종량제봉투 <span className="text-green-600">인터넷 주문</span>
                </h1>
                <p className="text-slate-500 font-semibold text-base sm:text-lg max-w-2xl mx-auto break-keep leading-relaxed">
                    전국 주요 지자체의 종량제봉투(쓰레기봉투) 인터넷 배송 주문 시스템입니다. <br className="hidden sm:block"/>
                    지정판매소를 운영하시는 점주님들께서 이용할 수 있는 원클릭 사이트 모음입니다.
                </p>
            </div>

                {/* Private Platforms Section */}
                <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold text-slate-800">통합 민간 플랫폼</h2>
                    <div className="h-px bg-slate-300 flex-1 ml-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
                    <Link
                        href="https://www.jongryangje.com/"
                        className="group bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black mb-3">종량제닷컴</h3>
                            <p className="text-blue-100 mb-6 font-medium leading-relaxed max-w-sm">
                                전국 단위 통합 결제 플랫폼. 인천, 서울, 경기도 등 전국 70여개 지역 시/군/구별 지정판매소 배송 지원.
                            </p>
                            <span className="inline-flex items-center font-bold text-white/90 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                                바로가기 
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </span>
                        </div>
                        <div className="absolute right-[-20%] bottom-[-40%] text-[200px] opacity-10 rotate-[-15deg] pointer-events-none transition-transform duration-500 group-hover:scale-110">
                            🌐
                        </div>
                    </Link>
                </div>

                {/* Local Government Grids */}
                <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold text-slate-800">지자체 운영 주문 사이트</h2>
                    <div className="h-px bg-slate-300 flex-1 ml-4" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
                    {govSites.map((site, index) => (
                        <Link 
                            key={index}
                            href={site.url}
                            className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-green-300 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-green-700 transition-colors">
                                    {site.name}
                                </h3>
                                <p className="text-sm text-slate-500 font-medium">
                                    {site.desc}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Information Notice */}
            <div className="w-full max-w-4xl bg-yellow-50/50 border border-yellow-200/60 rounded-[24px] p-6 sm:p-8 flex items-start gap-4">
                <div className="text-2xl mt-1">ℹ️</div>
                <div className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    <strong className="text-slate-900 block mb-2 text-lg">이용 시 주의사항</strong>
                    <ul className="list-disc list-inside space-y-1.5 marker:text-yellow-500 text-slate-600">
                        <li>위 사이트들은 낱장 판매용이 아닌 <strong>슈퍼/마트/편의점 등 종량제 지정판매소(도매)</strong> 전용 주문 시스템입니다.</li>
                        <li>주문 시 각 관할 지자체에 등록된 <strong>지정판매소 거래처 코드(상호/사업자번호)</strong> 확인 및 사전 로그인이 필요합니다.</li>
                        <li>주문 마감 시간 및 정기 배송 요일은 지역별/가게별로 다를 수 있으니 결제 전 수령 일자를 꼭 확인하세요.</li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
}
