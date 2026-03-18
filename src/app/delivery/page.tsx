import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '전국 택배 배송조회 통합 안내 🚚',
    description: '어디로 배송될까? 국내 주요 택배사 및 편의점 택배 배송조회를 한눈에 확인하세요.',
};

export default function DeliveryTrackingPage() {
    const couriers = [
        {
            name: 'CJ대한통운',
            url: 'https://www.cjlogistics.com/ko/tool/parcel/tracking',
            icon: '📦',
            bg: 'bg-[#00519A]',
            shadow: 'hover:shadow-[0_15px_30px_-5px_var(--tw-shadow-color)] shadow-[#00519A]/40'
        },
        {
            name: '우체국택배',
            url: 'https://service.epost.go.kr/iservice/usr/trace/usrtrc001k01.jsp',
            icon: '📮',
            bg: 'bg-[#FF4C00]',
            shadow: 'hover:shadow-[0_15px_30px_-5px_var(--tw-shadow-color)] shadow-[#FF4C00]/40'
        },
        {
            name: '롯데택배',
            url: 'https://www.lotteglogis.com/home/reservation/tracking/index',
            icon: '🚚',
            bg: 'bg-[#DA001D]',
            shadow: 'hover:shadow-[0_15px_30px_-5px_var(--tw-shadow-color)] shadow-[#DA001D]/40'
        },
        {
            name: '한진택배',
            url: 'https://www.hanjin.com/kor/CMS/DeliveryMgr/WaybillSch.do?mCode=MN038',
            icon: '✈️',
            bg: 'bg-[#003C87]',
            shadow: 'hover:shadow-[0_15px_30px_-5px_var(--tw-shadow-color)] shadow-[#003C87]/40'
        },
        {
            name: '로젠택배',
            url: 'https://www.ilogen.com/web',
            icon: '⚡',
            bg: 'bg-[#F2A000]',
            shadow: 'hover:shadow-[0_15px_30px_-5px_var(--tw-shadow-color)] shadow-[#F2A000]/40'
        },
        {
            name: 'GS25 편의점',
            url: 'https://www.cvsnet.co.kr/reservation-inquiry/delivery/index.do',
            icon: '🏪',
            bg: 'bg-[#007CFF]',
            shadow: 'hover:shadow-[0_15px_30px_-5px_var(--tw-shadow-color)] shadow-[#007CFF]/40'
        },
        {
            name: '경동택배',
            url: 'https://kdexp.com/index.do',
            icon: '🚛',
            bg: 'bg-[#01254D]',
            shadow: 'hover:shadow-[0_15px_30px_-5px_var(--tw-shadow-color)] shadow-[#01254D]/40'
        },
        {
            name: '대신택배',
            url: 'https://www.ds3211.co.kr/',
            icon: '🏢',
            bg: 'bg-[#00723F]',
            shadow: 'hover:shadow-[0_15px_30px_-5px_var(--tw-shadow-color)] shadow-[#00723F]/40'
        },
        {
            name: 'CU 편의점',
            url: 'https://www.cupost.co.kr/postbox/delivery/all.cupost',
            icon: '🏪',
            bg: 'bg-[#652C91]',
            shadow: 'hover:shadow-[0_15px_30px_-5px_var(--tw-shadow-color)] shadow-[#652C91]/40'
        }
    ];

    return (
        <div
            className="min-h-screen bg-[#F5F7FA] text-slate-800 py-12 px-4 sm:px-6 flex flex-col items-center selection:bg-blue-200"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            {/* 상단 헤더 섹션 */}
            <div className="w-full max-w-5xl text-center mt-6 mb-12">
                <div className="inline-flex items-center justify-center p-4 bg-white rounded-[28px] shadow-sm border border-slate-200 mb-6 drop-shadow-sm">
                    <span className="text-4xl">🚚</span>
                </div>
                <h1 className="text-[34px] sm:text-[42px] font-[900] text-[#1E293B] tracking-tight mb-4 leading-tight">
                    원클릭 택배 배송조회
                </h1>
                <p className="text-slate-500 font-semibold text-[15px] sm:text-[17px] break-keep max-w-xl mx-auto">
                    운송장 번호만 있으면, 국내 주요 택배사와 편의점 택배의 실시간 배송 현황을 빠르고 정확하게 확인할 수 있습니다.
                </p>
            </div>

            {/* 그리드 컨테이너 */}
            <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {couriers.map((courier, idx) => (
                    <Link
                        href={courier.url}
                        key={idx}
                        className={`group relative overflow-hidden bg-white rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2 border border-slate-200/60 shadow-[0_8px_20px_rgb(0,0,0,0.03)] ${courier.shadow}`}
                    >
                        {/* 호버 시 은은한 배경 글로우 */}
                        <div className={`absolute -bottom-10 -right-10 w-32 h-32 ${courier.bg} rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                        
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 shadow-sm ${courier.bg} text-white`}>
                            {courier.icon}
                        </div>
                        
                        <div className="relative z-10 w-full">
                            <h2 className="text-[18px] sm:text-[20px] font-extrabold text-slate-800 mb-1 tracking-tight group-hover:text-black">
                                {courier.name}
                            </h2>
                            <p className="text-[13px] text-slate-500 font-medium group-hover:text-slate-700 transition-colors">
                                실시간 배송조회
                            </p>
                        </div>
                        
                        {/* 화살표 아이콘 */}
                        <div className="absolute top-5 right-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </div>
                    </Link>
                ))}
            </div>

            {/* 유의사항 알림 박스 */}
            <div className="w-full max-w-4xl mt-14 bg-white p-6 sm:p-8 rounded-[24px] shadow-sm border border-slate-200 text-slate-600 text-sm sm:text-base leading-relaxed flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                </div>
                <div className="pt-0.5">
                    <strong className="text-slate-800 text-lg block mb-1">배송조회 이용 안내</strong>
                    각 택배사의 배송조회 페이지는 해당 공식 홈페이지로 직접 연결됩니다.<br className="hidden sm:block" />
                    운송장 번호를 미리 복사해두시면 이동 후 즉시 붙여넣어 더욱 빠르게 조회하실 수 있습니다.
                </div>
            </div>

            {/* 푸터 */}
            <div className="mt-16 text-slate-400 text-[13px] font-medium text-center pb-8 opacity-80">
                <p>Copyright © Total Parcel Delivery Tracking. All rights reserved.</p>
            </div>
            
        </div>
    );
}
