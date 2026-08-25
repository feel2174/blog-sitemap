'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

interface FinancialInstitution {
    name: string;
    category: 'card' | 'bank' | 'regional' | 'public';
    categoryLabel: string;
    subLabel: string;
    url: string;
    badge: string;
    inquiryTip: string;
    color: string;
    borderHover: string;
    badgeColor: string;
}

const institutions: FinancialInstitution[] = [
    // 공공 전담 시스템
    {
        name: '화물차 유가보조금 (FSMS)',
        category: 'public',
        categoryLabel: '공공 전담기관',
        subLabel: '국토교통부 통합관리',
        url: 'https://www.fsms.go.kr',
        badge: '공식 포털',
        inquiryTip: '화물차 유류구매카드 실시간 잔여 보조금 및 월별 사용량 조회',
        color: 'bg-blue-50 text-blue-800',
        borderHover: 'hover:border-blue-500 border-blue-200',
        badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    },
    {
        name: '국세청 홈택스 (경차 환급)',
        category: 'public',
        categoryLabel: '공공 전담기관',
        subLabel: '경차 유류세 환급',
        url: 'https://www.hometax.go.kr',
        badge: '국세청 공식',
        inquiryTip: '경차(연 30만원 한도) 유류세 환급 누적 금액 및 잔여한도 조회',
        color: 'bg-slate-50 text-slate-800',
        borderHover: 'hover:border-slate-500 border-slate-200',
        badgeColor: 'bg-slate-200 text-slate-800 border-slate-300',
    },
    {
        name: '정부24 (보조금24)',
        category: 'public',
        categoryLabel: '공공 전담기관',
        subLabel: '맞춤형 정부지원금',
        url: 'https://www.gov.kr',
        badge: '행정안전부',
        inquiryTip: '정부 및 지자체 에너지·고유가 취약계층 맞춤 지원금 잔액 확인',
        color: 'bg-indigo-50 text-indigo-800',
        borderHover: 'hover:border-indigo-500 border-indigo-200',
        badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    },

    // 주요 카드사
    {
        name: 'KB국민카드',
        category: 'card',
        categoryLabel: '주요 카드사',
        subLabel: 'KB Pay / 카드',
        url: 'https://m.kbcard.com/BON/DVIEW/MBHV1103',
        badge: 'KB Pay 앱',
        inquiryTip: 'KB Pay 앱 > 메뉴 > 혜택/바우처 > 정부지원금 잔액 및 이용내역',
        color: 'bg-amber-50/70 text-[#5f4b32]',
        borderHover: 'hover:border-amber-400 border-amber-200',
        badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    },
    {
        name: '신한카드',
        category: 'card',
        categoryLabel: '주요 카드사',
        subLabel: '신한 SOL페이',
        url: 'https://www.shinhancard.com/pconts/html/myPage/governmentSupport/MOBFM591N/MOBFM591R02.html',
        badge: 'SOL페이 앱',
        inquiryTip: '신한 SOL페이 앱 > 마이페이지 > 정부지원금/바우처 잔액조회',
        color: 'bg-blue-50 text-[#0046FF]',
        borderHover: 'hover:border-blue-400 border-blue-200',
        badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    },
    {
        name: '삼성카드',
        category: 'card',
        categoryLabel: '주요 카드사',
        subLabel: '모니모 / 삼성카드',
        url: 'https://www.samsungcard.com/personal/main/UHPPCO0101M0.jsp',
        badge: '삼성카드 앱',
        inquiryTip: '삼성카드 앱 > 혜택/바우처 > 정부지원금 잔여한도 실시간 확인',
        color: 'bg-sky-50 text-[#0055c1]',
        borderHover: 'hover:border-sky-400 border-sky-200',
        badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
    },
    {
        name: '현대카드',
        category: 'card',
        categoryLabel: '주요 카드사',
        subLabel: '현대카드 앱',
        url: 'https://www.hyundaicard.com/cpb/gs/CPBGS2501_01.hc',
        badge: '현대카드 앱',
        inquiryTip: '현대카드 앱 > 전체메뉴 > 정부지원금 이용 및 잔액내역 조회',
        color: 'bg-zinc-100 text-zinc-900',
        borderHover: 'hover:border-zinc-500 border-zinc-300',
        badgeColor: 'bg-zinc-200 text-zinc-800 border-zinc-400',
    },
    {
        name: '우리카드',
        category: 'card',
        categoryLabel: '주요 카드사',
        subLabel: '우리WON카드',
        url: 'https://pc.wooricard.com/dcpc/yh1/mcd/mcd04/fcstistlfee/H1MCD204S85.do',
        badge: '우리WON카드',
        inquiryTip: '우리WON카드 앱 > MY > 바우처/정부지원금 잔여금액 조회',
        color: 'bg-sky-50 text-[#0070C0]',
        borderHover: 'hover:border-sky-400 border-sky-200',
        badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
    },
    {
        name: '하나카드',
        category: 'card',
        categoryLabel: '주요 카드사',
        subLabel: '하나Pay',
        url: 'https://m.hanacard.co.kr/MKEVT1010M.web?EVN_SEQ=60332',
        badge: '하나Pay 앱',
        inquiryTip: '하나Pay 앱 > 마이메뉴 > 정부지원금/바우처 잔액 및 상세이용내역',
        color: 'bg-teal-50 text-[#009490]',
        borderHover: 'hover:border-teal-400 border-teal-200',
        badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    },
    {
        name: '롯데카드',
        category: 'card',
        categoryLabel: '주요 카드사',
        subLabel: '디지로카',
        url: 'https://jiwon3.lottecard.co.kr/app/LPEMRFA_P300.lc',
        badge: '디지로카 앱',
        inquiryTip: '디지로카 앱 > 혜택/바우처 > 정부지원금 잔여금액 및 승인내역',
        color: 'bg-rose-50 text-[#ED1C24]',
        borderHover: 'hover:border-rose-400 border-rose-200',
        badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    },
    {
        name: 'NH농협카드',
        category: 'card',
        categoryLabel: '주요 카드사',
        subLabel: 'NH pay',
        url: 'https://card.nonghyup.com/',
        badge: 'NH pay 앱',
        inquiryTip: 'NH pay 앱 > 마이페이지 > 정부지원금/바우처 잔액조회',
        color: 'bg-emerald-50 text-[#009A3E]',
        borderHover: 'hover:border-emerald-400 border-emerald-200',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    },
    {
        name: 'BC카드',
        category: 'card',
        categoryLabel: '주요 카드사',
        subLabel: '페이북',
        url: 'https://go.bccard.com/app/apply?mbNo=007&tab=',
        badge: '페이북 앱',
        inquiryTip: '페이북(paybooc) 앱 > MY > 바우처/지원금 잔액 확인',
        color: 'bg-red-50 text-[#E30613]',
        borderHover: 'hover:border-red-400 border-red-200',
        badgeColor: 'bg-red-100 text-red-800 border-red-300',
    },
    {
        name: 'IBK기업은행 (IBK카드)',
        category: 'card',
        categoryLabel: '주요 카드사',
        subLabel: 'i-ONE Bank',
        url: 'https://www.ibk.co.kr/',
        badge: 'i-ONE Bank',
        inquiryTip: 'i-ONE Bank 앱 > 카드 > 보조금/지원금 잔액 및 이용내역',
        color: 'bg-blue-50 text-[#003B91]',
        borderHover: 'hover:border-blue-400 border-blue-200',
        badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    },

    // 시중은행 및 인터넷은행
    {
        name: 'KB국민은행',
        category: 'bank',
        categoryLabel: '은행 / 뱅킹',
        subLabel: 'KB스타뱅킹',
        url: 'https://www.kbstar.com/',
        badge: 'KB스타뱅킹',
        inquiryTip: 'KB스타뱅킹 앱 > 뱅킹 > 정부지원 바우처 잔액 및 거래내역',
        color: 'bg-amber-50 text-[#60584c]',
        borderHover: 'hover:border-amber-400 border-amber-200',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    },
    {
        name: '신한은행',
        category: 'bank',
        categoryLabel: '은행 / 뱅킹',
        subLabel: '신한 SOL뱅크',
        url: 'https://www.shinhan.com/',
        badge: 'SOL뱅크',
        inquiryTip: '신한 SOL뱅크 앱 > 자산/혜택 > 정부지원금 바우처 조회',
        color: 'bg-blue-50 text-[#0046FF]',
        borderHover: 'hover:border-blue-400 border-blue-200',
        badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    },
    {
        name: '우리은행',
        category: 'bank',
        categoryLabel: '은행 / 뱅킹',
        subLabel: '우리WON뱅킹',
        url: 'https://www.wooribank.com/',
        badge: '우리WON뱅킹',
        inquiryTip: '우리WON뱅킹 앱 > 전체메뉴 > 보조금/지원금 잔액 조회',
        color: 'bg-sky-50 text-[#0070C0]',
        borderHover: 'hover:border-sky-400 border-sky-200',
        badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
    },
    {
        name: '하나은행',
        category: 'bank',
        categoryLabel: '은행 / 뱅킹',
        subLabel: '하나원큐',
        url: 'https://www.kebhana.com/',
        badge: '하나원큐',
        inquiryTip: '하나원큐 앱 > 마이페이지 > 공공/바우처 지원금 잔여금액',
        color: 'bg-teal-50 text-[#009490]',
        borderHover: 'hover:border-teal-400 border-teal-200',
        badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    },
    {
        name: 'NH농협은행',
        category: 'bank',
        categoryLabel: '은행 / 뱅킹',
        subLabel: 'NH스마트뱅킹',
        url: 'https://banking.nonghyup.com/nhbank.html',
        badge: 'NH스마트뱅킹',
        inquiryTip: 'NH스마트뱅킹 앱 > 혜택/공공 > 정부지원금 바우처 잔액',
        color: 'bg-emerald-50 text-[#009A3E]',
        borderHover: 'hover:border-emerald-400 border-emerald-200',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    },
    {
        name: '카카오뱅크',
        category: 'bank',
        categoryLabel: '은행 / 뱅킹',
        subLabel: '카카오뱅크 앱',
        url: 'https://www.kakaobank.com/',
        badge: '카뱅 앱',
        inquiryTip: '카카오뱅크 앱 > 전체메뉴 > 카드/바우처 지원금 잔액 확인',
        color: 'bg-yellow-50 text-neutral-800',
        borderHover: 'hover:border-yellow-400 border-yellow-200',
        badgeColor: 'bg-yellow-100 text-neutral-800 border-yellow-300',
    },
    {
        name: '토스(Toss) / 토스뱅크',
        category: 'bank',
        categoryLabel: '은행 / 뱅킹',
        subLabel: '토스 앱',
        url: 'https://www.tossbank.com/',
        badge: 'Toss 앱',
        inquiryTip: '토스 앱 > 내 소비 / 자산 > 정부지원금/바우처 잔액 확인',
        color: 'bg-blue-50 text-[#0050FF]',
        borderHover: 'hover:border-blue-400 border-blue-200',
        badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    },
    {
        name: '케이뱅크',
        category: 'bank',
        categoryLabel: '은행 / 뱅킹',
        subLabel: '케이뱅크 앱',
        url: 'https://www.kbanknow.com/ib20/mnu/PBKMAN000000',
        badge: 'Kbank',
        inquiryTip: '케이뱅크 앱 > MY > 정부지원금 내역 및 잔여금액 조회',
        color: 'bg-indigo-50 text-[#000066]',
        borderHover: 'hover:border-indigo-400 border-indigo-200',
        badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    },
    {
        name: 'SC제일은행',
        category: 'bank',
        categoryLabel: '은행 / 뱅킹',
        subLabel: 'SC제일 모바일',
        url: 'https://www.standardchartered.co.kr/',
        badge: 'SC제일 앱',
        inquiryTip: 'SC제일은행 앱 > 뱅킹/카드 > 바우처 잔액 및 거래내역',
        color: 'bg-emerald-50 text-[#007A3E]',
        borderHover: 'hover:border-emerald-400 border-emerald-200',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    },
    {
        name: '우체국예금보험',
        category: 'bank',
        categoryLabel: '은행 / 뱅킹',
        subLabel: '우체국 스마트뱅킹',
        url: 'https://www.epostbank.go.kr/',
        badge: '우체국뱅킹',
        inquiryTip: '우체국 스마트뱅킹 > 카드/바우처 > 정부지원금 잔액 조회',
        color: 'bg-red-50 text-[#C8102E]',
        borderHover: 'hover:border-red-400 border-red-200',
        badgeColor: 'bg-red-100 text-red-800 border-red-300',
    },
    {
        name: 'Sh수협은행',
        category: 'bank',
        categoryLabel: '은행 / 뱅킹',
        subLabel: '헤이뱅크',
        url: 'https://www.suhyup-bank.com/',
        badge: '헤이뱅크',
        inquiryTip: '수협 헤이뱅크 앱 > 카드/혜택 > 정부보조금 잔액 확인',
        color: 'bg-sky-50 text-[#005BAC]',
        borderHover: 'hover:border-sky-400 border-sky-200',
        badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
    },

    // 지방은행 & 간편결제 / 지역화폐
    {
        name: 'iM뱅크 (대구은행)',
        category: 'regional',
        categoryLabel: '지방은행 / 페이',
        subLabel: 'iM뱅크 앱',
        url: 'https://www.imbank.co.kr/',
        badge: 'iM뱅크',
        inquiryTip: 'iM뱅크 앱 > 카드/바우처 > 피해지원금 잔여한도 조회',
        color: 'bg-cyan-50 text-[#0085CA]',
        borderHover: 'hover:border-cyan-400 border-cyan-200',
        badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-300',
    },
    {
        name: '부산은행',
        category: 'regional',
        categoryLabel: '지방은행 / 페이',
        subLabel: 'BNK부산은행',
        url: 'https://www.busanbank.co.kr/',
        badge: '부산은행 앱',
        inquiryTip: '부산은행 앱/웹 > 재난/지원금 바우처 잔액조회',
        color: 'bg-rose-50 text-[#E60024]',
        borderHover: 'hover:border-rose-400 border-rose-200',
        badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    },
    {
        name: '경남은행',
        category: 'regional',
        categoryLabel: '지방은행 / 페이',
        subLabel: 'BNK경남은행',
        url: 'https://www.knbank.co.kr/',
        badge: '경남은행 앱',
        inquiryTip: '경남은행 모바일뱅킹 > MY > 지원금/바우처 잔여조회',
        color: 'bg-red-50 text-[#C8102E]',
        borderHover: 'hover:border-red-400 border-red-200',
        badgeColor: 'bg-red-100 text-red-800 border-red-300',
    },
    {
        name: '광주은행',
        category: 'regional',
        categoryLabel: '지방은행 / 페이',
        subLabel: '마이원뱅크',
        url: 'https://www.kjbank.com/',
        badge: '광주은행 앱',
        inquiryTip: '광주은행 스마트뱅킹 > 카드/지원금 > 잔여 한도 및 잔액',
        color: 'bg-sky-50 text-[#005CA2]',
        borderHover: 'hover:border-sky-400 border-sky-200',
        badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
    },
    {
        name: '전북은행',
        category: 'regional',
        categoryLabel: '지방은행 / 페이',
        subLabel: 'JB뱅크',
        url: 'https://www.jbbank.co.kr/',
        badge: 'JB뱅크 앱',
        inquiryTip: 'JB뱅크 앱 > 지원금/카드 > 잔액조회 및 결제내역',
        color: 'bg-indigo-50 text-[#1E3A8A]',
        borderHover: 'hover:border-indigo-400 border-indigo-200',
        badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    },
    {
        name: '제주은행',
        category: 'regional',
        categoryLabel: '지방은행 / 페이',
        subLabel: 'JBANK',
        url: 'https://www.jejubank.co.kr/',
        badge: 'JBANK 앱',
        inquiryTip: '제주은행 앱 > 정부지원금 바우처 잔여 잔액 확인',
        color: 'bg-blue-50 text-[#003876]',
        borderHover: 'hover:border-blue-400 border-blue-200',
        badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    },
    {
        name: '동백전 (부산 지역화폐)',
        category: 'regional',
        categoryLabel: '지방은행 / 페이',
        subLabel: '부산시 지역화폐',
        url: 'https://busandong100.kr/',
        badge: '동백전 앱',
        inquiryTip: '동백전 앱 메인 > 정책지원금 잔여포인트 및 결제이력 확인',
        color: 'bg-emerald-50 text-[#009B8B]',
        borderHover: 'hover:border-emerald-400 border-emerald-200',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    },
    {
        name: '네이버페이',
        category: 'regional',
        categoryLabel: '지방은행 / 페이',
        subLabel: '네이버페이 포인트',
        url: 'https://pay.naver.com/',
        badge: 'NPay 앱',
        inquiryTip: '네이버페이 앱 > 페이머니/포인트 > 정책지원금 잔액조회',
        color: 'bg-green-50 text-[#03C75A]',
        borderHover: 'hover:border-green-400 border-green-200',
        badgeColor: 'bg-green-100 text-green-800 border-green-300',
    },
    {
        name: '카카오페이',
        category: 'regional',
        categoryLabel: '지방은행 / 페이',
        subLabel: '카카오페이 머니',
        url: 'https://www.kakaopay.com/',
        badge: '카카오페이',
        inquiryTip: '카카오페이 > 자산 > 정부·지자체 지원금 바우처 잔액 확인',
        color: 'bg-amber-50 text-[#3C1E1E]',
        borderHover: 'hover:border-amber-400 border-amber-200',
        badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    },
];

export default function OilPriceSupportPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const filteredInstitutions = useMemo(() => {
        return institutions.filter((item) => {
            const matchesCategory =
                selectedCategory === 'all' || item.category === selectedCategory;
            const matchesSearch =
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.subLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.inquiryTip.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <div
            className="min-h-screen bg-slate-50 text-neutral-900 flex flex-col items-center py-10 px-4 sm:px-6 relative overflow-hidden"
            style={{
                fontFamily:
                    '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
            }}
        >
            {/* Background Decorative Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-100/50 via-white to-slate-50 z-[1] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-200/40 via-transparent to-transparent z-[2] pointer-events-none" />

            <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center mt-2">
                {/* Header Section */}
                <div className="text-center mb-8 w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-[11px] font-bold tracking-wider uppercase mb-4 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                        </span>
                        실시간 잔액 및 한도 조회
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-3 leading-tight text-neutral-900">
                        각 은행·카드사별<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-indigo-600">
                            고유가 지원금 잔액조회
                        </span>
                    </h1>

                    <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full mb-4" />

                    <p className="text-neutral-600 text-sm sm:text-base font-medium tracking-tight leading-relaxed max-w-lg mx-auto">
                        고유가 피해지원금, 경차 유류세 환급, 화물차 유가보조금의<br />
                        <span className="text-blue-700 font-bold">남은 잔액 및 이용 한도</span>를 해당 금융기관에서 즉시 조회하세요.
                    </p>
                </div>

                {/* Core Public Inquiry Action Banner */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <Link
                        href="https://www.fsms.go.kr"
                        className="group relative flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white backdrop-blur-sm shrink-0">
                                🚛
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-blue-100 text-[11px] font-bold tracking-tight">국토교통부 공식</span>
                                <span className="text-white font-black text-sm sm:text-base tracking-tight">화물차 유가보조금 잔액조회</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-transform shrink-0"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </Link>

                    <Link
                        href="https://www.hometax.go.kr"
                        className="group relative flex items-center justify-between bg-gradient-to-r from-teal-600 to-emerald-600 p-4 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white backdrop-blur-sm shrink-0">
                                🚗
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-teal-100 text-[11px] font-bold tracking-tight">국세청 홈택스</span>
                                <span className="text-white font-black text-sm sm:text-base tracking-tight">경차 유류세 환급 한도조회</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-transform shrink-0"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </Link>
                </div>

                {/* Usage Official Guide Banner */}
                <Link
                    href="https://www.korea.kr/multi/visualNewsView.do?newsId=148964625&pWise=main&pWiseMain=R1"
                    className="w-full mb-6 group relative flex items-center justify-between bg-gradient-to-r from-amber-500 to-orange-500 p-3.5 sm:p-4 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white backdrop-blur-sm shrink-0">
                            💡
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-white/90 text-[10px] font-bold tracking-tight">대한민국 정책브리핑</span>
                            <span className="text-white font-bold text-xs sm:text-sm tracking-tight">고유가 지원금 사용처 & 주유 할인 혜택 안내</span>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-transform shrink-0"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </Link>

                {/* Search & Category Filter Section */}
                <div className="w-full bg-white rounded-2xl p-4 shadow-sm border border-slate-200 mb-6 space-y-3">
                    {/* Search Input */}
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="은행, 카드사, 기관명 검색 (예: 신한, 국민, FSMS, 현대...)"
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-neutral-800 placeholder:text-slate-400"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 text-xs"
                            >
                                지우기
                            </button>
                        )}
                    </div>

                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                        {[
                            { id: 'all', label: '전체' },
                            { id: 'card', label: '주요 카드사' },
                            { id: 'bank', label: '은행 / 뱅킹' },
                            { id: 'regional', label: '지방은행 / 페이' },
                            { id: 'public', label: '공공 전담기관' },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setSelectedCategory(tab.id)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                    selectedCategory === tab.id
                                        ? 'bg-blue-600 text-white shadow-sm'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Total Count Info */}
                <div className="w-full flex items-center justify-between px-1 mb-3 text-xs text-slate-500 font-medium">
                    <span>
                        조회처 목록 (<strong className="text-blue-600">{filteredInstitutions.length}</strong>개)
                    </span>
                    <span className="text-[11px] text-slate-400">클릭 시 공식 잔액조회 페이지로 이동</span>
                </div>

                {/* Responsive Grid List */}
                {filteredInstitutions.length === 0 ? (
                    <div className="w-full bg-white rounded-2xl p-8 text-center border border-slate-200 mb-8">
                        <p className="text-slate-500 text-sm font-medium">
                            &apos;{searchQuery}&apos;에 해당하는 조회처를 찾을 수 없습니다.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                            }}
                            className="mt-3 text-xs text-blue-600 font-bold hover:underline"
                        >
                            전체 목록 보기
                        </button>
                    </div>
                ) : (
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                        {filteredInstitutions.map((item, index) => (
                            <Link
                                key={index}
                                href={item.url}
                                className={`group relative flex flex-col justify-between bg-white border ${item.borderHover} p-4 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] text-left`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${item.badgeColor}`}>
                                            {item.badge}
                                        </span>
                                        <span className="text-[10px] text-slate-400 font-medium">
                                            {item.subLabel}
                                        </span>
                                    </div>

                                    <h3 className="font-extrabold text-base text-neutral-900 tracking-tight mb-1.5 group-hover:text-blue-600 transition-colors">
                                        {item.name}
                                    </h3>

                                    <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed mb-3 line-clamp-2">
                                        {item.inquiryTip}
                                    </p>
                                </div>

                                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-blue-600 text-xs font-bold">
                                    <span>잔액조회 바로가기</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transform group-hover:translate-x-1 transition-transform"
                                    >
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                {/* Balance Inquiry Guide Section */}
                <div className="w-full bg-white border border-slate-200 p-5 rounded-2xl relative overflow-hidden mb-6 shadow-sm">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500" />
                    
                    <h3 className="text-neutral-900 text-base font-extrabold mb-3 flex items-center gap-2">
                        <span className="text-blue-600">💡</span> 고유가 지원금 잔액조회 핵심 방법 3가지
                    </h3>

                    <div className="space-y-3.5 text-xs sm:text-[13px] text-slate-700 leading-relaxed font-medium">
                        <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                            <span className="font-bold text-blue-900 block mb-1">1. 금융사 전용 모바일 앱 조회</span>
                            해당 카드사 및 은행 앱(KB Pay, 신한 SOL, 현대카드, 삼성카드 등)에 로그인 후 <strong>[혜택/바우처]</strong> 또는 <strong>[정부지원금 잔액조회]</strong> 메뉴에서 실시간 잔여 지원금을 즉시 확인할 수 있습니다.
                        </div>

                        <div className="p-3 bg-teal-50/50 rounded-xl border border-teal-100">
                            <span className="font-bold text-teal-900 block mb-1">2. 결제 승인 문자(SMS) 및 알림톡 확인</span>
                            주유소 및 가맹점에서 지원금 카드로 결제 시 발송되는 문자 메시지에서 <strong>[이번 결제 차감액]</strong>과 <strong>[현재 남은 잔액]</strong>이 실시간으로 표시됩니다.
                        </div>

                        <div className="p-3 bg-slate-100/60 rounded-xl border border-slate-200">
                            <span className="font-bold text-slate-900 block mb-1">3. FSMS 및 국세청 공공 포털 조회</span>
                            화물차 유가보조금은 <strong>화물차 유가보조금 관리시스템(FSMS)</strong>에서, 경차 유류세 환급은 <strong>국세청 홈택스</strong>에서 연간/월별 한도와 사용 누적액을 가장 정확하게 조회할 수 있습니다.
                        </div>
                    </div>
                </div>

                {/* FAQ & Information Notice */}
                <div className="w-full bg-slate-100/80 border border-slate-200 p-5 rounded-2xl mb-8">
                    <h4 className="text-slate-900 text-sm font-bold mb-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                        잔액 조회 및 이용 관련 자주 묻는 질문
                    </h4>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 leading-relaxed font-medium">
                        <li><strong>결제 금액이 지원금 잔액보다 많은 경우:</strong> 지원금 잔액이 먼저 전액 차감된 후, 초과 금액은 카드 결제(신용 청구 또는 체크 계좌 출금)로 자동 승인됩니다.</li>
                        <li><strong>잔액 갱신 주기:</strong> 결제 즉시 카드사 전산에 실시간 반영되며, 공공 통합망(FSMS)의 경우 1~2영업일 이내에 최종 정산 데이터가 갱신됩니다.</li>
                        <li><strong>경차 유류세 환급 한도:</strong> 연간 최대 30만원 한도 내에서 휘발유·경유 리터당 250원, LPG 리터당 161원 자동 할인 차감됩니다.</li>
                    </ul>
                </div>

                <footer className="text-center w-full mb-8">
                    <div className="h-px w-full max-w-[150px] mx-auto bg-gradient-to-r from-transparent via-neutral-200 to-transparent mb-4" />
                    <p className="text-neutral-400 text-[10px] font-bold tracking-widest uppercase">
                        GOVERNMENT RELIEF & FUEL SUBSIDY BALANCE INQUIRY
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

