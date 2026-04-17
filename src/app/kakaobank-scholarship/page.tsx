import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2026 카카오뱅크 스칼라십 장학금 신청 안내 | 대학생 350만원 지원',
  description: '경제적 어려움을 겪는 대학생을 위한 2026 카카오뱅크 스칼라십 장학금 모집! 선발 기준, 신청 자격, 혜택 정보 및 중위소득 100% 확인하기.',
  keywords: ['카카오뱅크장학금', '카카오뱅크스칼라십', '대학생장학금', '2026장학금', '중위소득100%', '사회복지공동모금회'],
};

export default function KakaoBankScholarshipPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-['Pretendard']">
      {/* Hero Section */}
      <section className="bg-[#FEE500] pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-8 bg-black/5 px-4 py-1.5 rounded-full text-sm font-bold">
                <span className="text-red-500">🍒</span> 사회복지공동모금회 X 카카오뱅크
            </div>
            <h1 className="text-4xl sm:text-7xl font-black mb-6 tracking-tighter leading-tight text-[#1a1a1a]">
                2026 <br className="sm:hidden" />
                카카오뱅크 <br />
                <span className="text-black">스칼라십</span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold mb-12 text-black/70 break-keep">
                경제적 어려움 속에서도 꿈을 키워가는 <br className="hidden sm:block" />
                전국 대학생의 학업 지속과 성장을 지원합니다.
            </p>
            
            <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl shadow-yellow-900/10 max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 pb-8 border-b border-gray-100">
                    <div className="text-left">
                        <p className="text-gray-400 text-sm font-black mb-1">모집 기간</p>
                        <p className="text-2xl font-black">3.26(목) — 4.19(일)</p>
                    </div>
                    <div className="text-left sm:text-right">
                        <p className="text-gray-400 text-sm font-black mb-1">지원 대상</p>
                        <p className="text-2xl font-black">4년제 대학생 60명</p>
                    </div>
                </div>
                
                <div className="flex flex-col gap-4">
                    <Link 
                        href="https://www.queran.or.kr/kakaobank_recruitment"
                        className="w-full py-5 bg-black text-white text-xl font-black rounded-2xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                    >
                        장학금 신청하기
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M3 12h18" />
                        </svg>
                    </Link>
                    <Link 
                        href="https://zucca100.com/2026-reference-median-income-table-100-150-200/"
                        className="w-full py-5 bg-[#FEE500] text-black text-lg font-black rounded-2xl border-2 border-black/10 hover:bg-white transition-colors"
                    >
                        기준 중위소득 100% 확인
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto space-y-24">
            {/* 지원 내용 */}
            <div>
                <div className="flex items-center gap-4 mb-12">
                    <span className="px-6 py-2 bg-[#FEE500] rounded-full text-lg font-black shadow-lg shadow-yellow-100 italic">01</span>
                    <h2 className="text-3xl sm:text-5xl font-black">지원 내용</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 rounded-[3rem] p-10 border border-gray-100">
                        <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                            <span className="text-3xl">📚</span> 학업 지속 장학금
                        </h3>
                        <p className="text-4xl font-black text-[#1a1a1a] mb-4 underline decoration-4 decoration-[#FEE500] underline-offset-8 transition-all hover:decoration-black">
                            총 300만원
                        </p>
                        <p className="text-gray-500 font-medium text-lg leading-relaxed">
                            학기별 150만원씩 2회 지급 <br />
                            사용처 제한 없이 생활비 또는 자기개발에 활용 가능
                        </p>
                    </div>
                    <div className="bg-gray-50 rounded-[3rem] p-10 border border-gray-100">
                        <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                            <span className="text-3xl">✨</span> 성실 참여 인센티브
                        </h3>
                        <p className="text-4xl font-black text-[#1a1a1a] mb-4">
                            + 50만원 추가
                        </p>
                        <p className="text-gray-500 font-medium text-lg leading-relaxed">
                            &apos;새로운 경험하기&apos; 미션 7회 완수 시 지급 <br />
                            (월 1회 일상 속 새로운 경험 소감 제출)
                        </p>
                    </div>
                </div>
            </div>

            {/* 지원 자격 */}
            <div className="bg-[#1a1a1a] rounded-[4rem] p-10 sm:p-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="flex items-center gap-4 mb-16 relative z-10">
                    <span className="px-6 py-2 bg-[#FEE500] rounded-full text-lg font-black text-black italic">02</span>
                    <h2 className="text-3xl sm:text-5xl font-black">지원 자격</h2>
                </div>
                
                <div className="space-y-12 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                            <p className="text-[#FEE500] font-black text-sm mb-4 uppercase tracking-widest">Enrollment</p>
                            <h4 className="text-xl font-black mb-4 break-keep leading-snug">2026학년도 4년제 대학 재학생</h4>
                            <p className="text-gray-400 text-sm break-keep">전 학기 연속 재학 예정 필수 (8월 졸업예정 및 휴학 계획자 제외)</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                            <p className="text-[#FEE500] font-black text-sm mb-4 uppercase tracking-widest">Credit</p>
                            <h4 className="text-xl font-black mb-4">재학생 및 졸업예정자</h4>
                            <p className="text-gray-400 text-sm break-keep">재학생: 2-6학기 이수중 <br/> 졸업예정자: 최종학년 재학중</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                            <p className="text-[#FEE500] font-black text-sm mb-4 uppercase tracking-widest">Financial</p>
                            <h4 className="text-xl font-black mb-4">경제적 요건 충족</h4>
                            <p className="text-gray-400 text-sm break-keep">학자금 지원 5구간 이하 또는 <br/>중위소득 100% 이하인 가구</p>
                        </div>
                    </div>
                    
                    <div className="p-8 bg-white/5 rounded-3xl border border-white/10 text-center">
                        <p className="text-gray-400 mb-6 font-medium">나의 소득 분위와 중위소득 기준을 지금 바로 확인해 보세요.</p>
                        <Link 
                            href="https://zucca100.com/2026-reference-median-income-table-100-150-200/"
                            className="inline-flex items-center gap-2 text-[#FEE500] border-b-2 border-[#FEE500]/30 pb-1 font-black text-xl hover:text-white hover:border-white transition-all"
                        >
                            기준 중위소득 100% 가이드 확인하기
                        </Link>
                    </div>
                </div>
            </div>

            {/* 선발 기준 */}
            <div>
                <div className="flex items-center gap-4 mb-12">
                    <span className="px-6 py-2 bg-[#FEE500] rounded-full text-lg font-black shadow-lg shadow-yellow-100 italic">03</span>
                    <h2 className="text-3xl sm:text-5xl font-black">선발 기준</h2>
                </div>
                <div className="bg-gray-50 rounded-[3rem] overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="p-10 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col items-center text-center">
                            <div className="text-4xl mb-6">🧗</div>
                            <h4 className="text-xl font-black mb-4">자기주도적 태도</h4>
                            <p className="text-gray-500 text-sm break-keep">환경적 제약을 극복하기 위해 <br/> 스스로 노력해 왔는가?</p>
                        </div>
                        <div className="p-10 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col items-center text-center">
                            <div className="text-4xl mb-6">🆘</div>
                            <h4 className="text-xl font-black mb-4">지원 필요성</h4>
                            <p className="text-gray-500 text-sm break-keep">정말 필요한 대상인가? <br/> 실질적인 변화를 가져올 수 있는가?</p>
                        </div>
                        <div className="p-10 flex flex-col items-center text-center">
                            <div className="text-4xl mb-6">🎯</div>
                            <h4 className="text-xl font-black mb-4">목표 의식</h4>
                            <p className="text-gray-500 text-sm break-keep">계획이 구체적이고 <br/> 명확한가?</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 프로그램 일정 */}
            <div className="bg-yellow-50 rounded-[4rem] p-10 sm:p-20">
                <div className="flex items-center gap-4 mb-16">
                    <span className="px-6 py-2 bg-black rounded-full text-xl font-black text-white italic">04</span>
                    <h2 className="text-3xl sm:text-5xl font-black">프로그램 일정</h2>
                </div>
                
                <div className="relative">
                    <div className="absolute top-0 bottom-0 left-[23px] w-1 bg-black/10 hidden sm:block"></div>
                    <div className="space-y-12">
                        <div className="flex items-start gap-8 relative">
                           <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold shrink-0 relative z-10">1</div>
                           <div>
                               <h4 className="text-xl font-black mb-1">서류 접수 (온라인)</h4>
                               <p className="text-black/60 font-bold">3월 26일 ~ 4월 19일</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-8 relative">
                           <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold shrink-0 relative z-10">2</div>
                           <div>
                               <h4 className="text-xl font-black mb-1">장학생 인터뷰 및 발표</h4>
                               <p className="text-black/60 font-bold">5월 13일 (수) 발표 예정</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-8 relative">
                           <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold shrink-0 relative z-10">3</div>
                           <div>
                               <h4 className="text-xl font-black mb-1">오리엔테이션</h4>
                               <p className="text-black/60 font-bold">5월 15일 (금) 오후 7시 예정</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-8 relative">
                           <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold shrink-0 relative z-10">4</div>
                           <div>
                               <h4 className="text-xl font-black mb-1">장학금 지급 (1·2학기)</h4>
                               <p className="text-black/60 font-bold">5월 및 10월 분할 지급</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-black text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black mb-8 break-keep">당신의 소중한 꿈을 <br/> 카카오뱅크가 함께 응원합니다.</h2>
            <p className="text-gray-400 text-lg mb-12">지금 바로 지원하고 혜택을 확인하세요.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                    href="https://www.queran.or.kr/kakaobank_recruitment"
                    className="px-12 py-5 bg-[#FEE500] text-black text-xl font-black rounded-2xl hover:scale-105 transition-transform"
                >
                    온라인 지원 바로가기
                </Link>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-100 text-center">
        <p className="text-gray-400 text-sm font-semibold mb-2">© 2026 KAKAOBANK SCHOLARSHIP INFOMATION HUB.</p>
        <p className="text-gray-300 text-xs">이 프로그램은 사회복지공동모금회와 카카오뱅크가 함께합니다.</p>
      </footer>
    </div>
  );
}
