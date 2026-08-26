'use client';

import React from 'react';
import CoupangAds from '@/components/CoupangAds';

export default function PotPlayerPage() {
  const navigateTo = (url: string) => {
    window.location.href = url;
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen bg-[#0f1015] text-[#e1e3e8] overflow-y-auto overflow-x-hidden py-10 px-4 sm:px-6 selection:bg-[#fee500] selection:text-black"
      style={{
        fontFamily:
          '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <div className="w-full max-w-[760px] flex flex-col gap-6">
        {/* Header Section */}
        <header className="text-center relative z-10 pt-2 pb-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1e26] border border-[#2e3240] mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#fee500] animate-pulse" />
            <span className="text-[#fee500] text-[12px] sm:text-[13px] font-[800] tracking-wider uppercase">
              DAUM & KAKAO MULTIMEDIA
            </span>
          </div>
          <h1 className="text-[28px] sm:text-[38px] font-[900] m-0 mb-3 tracking-tight text-white leading-[1.25]">
            다음 팟플레이어 & 팟인코더<br />
            <span className="bg-gradient-to-r from-[#fee500] via-[#ffaa00] to-[#ff6b35] bg-clip-text text-transparent">
              빠른 다운로드 바로가기
            </span>
          </h1>
          <p className="text-[14px] sm:text-[15px] text-[#9a9ea8] m-0 break-keep font-[500] leading-[1.6] max-w-[600px] mx-auto">
            원하시는 소프트웨어와 버전을 선택하시면 다운로드 페이지로 즉시 연결됩니다.
          </p>
        </header>

        {/* 🚀 상단 핵심 다운로드 버튼 섹션 (모바일 최우선 배치) */}
        <section className="flex flex-col gap-4">
          {/* Section 1: 팟플레이어 최신/구버전 2열 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* 팟플레이어 최신버전 카드 */}
            <div className="bg-[#171821] border border-[#2b2f3e] rounded-[22px] p-5 flex flex-col justify-between shadow-xl hover:border-[#fee500]/70 transition-all duration-200">
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="px-2.5 py-1 rounded-md bg-[#fee500]/15 text-[#fee500] text-[11px] font-[800]">
                    공식 최신버전
                  </span>
                  <span className="text-xs text-[#6e7280]">v-Latest</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#fee500] flex items-center justify-center text-lg text-black shadow-md shrink-0">
                    ⚡
                  </div>
                  <div>
                    <h2 className="text-white text-[17px] sm:text-[18px] font-[800] m-0 leading-tight">
                      팟플레이어 최신버전
                    </h2>
                    <span className="text-[#9ea2b0] text-[12px] font-[500]">
                      카카오 공식 홈페이지
                    </span>
                  </div>
                </div>

                {/* 🎯 버튼을 설명보다 위쪽에 배치 */}
                <button
                  type="button"
                  onClick={() => navigateTo('https://tv.kakao.com/guide/potplayer')}
                  className="w-full my-2 py-3.5 px-4 bg-[#fee500] hover:bg-[#ebd300] active:scale-[0.98] text-black text-[15px] font-[800] rounded-[14px] transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(254,229,0,0.25)] cursor-pointer"
                >
                  <span>최신버전 다운로드</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                {/* 📝 설명은 버튼 아래쪽에 위치 */}
                <p className="text-[#8e93a3] text-[12.5px] leading-relaxed mt-2.5 mb-0 break-keep">
                  • 4K·8K 초고화질 하드웨어 가속 지원<br />
                  • 최신 보안 패치 및 최신 비디오 코덱 탑재<br />
                  • 카카오TV 라이브 방송 및 스트리밍 연동
                </p>
              </div>
            </div>

            {/* 팟플레이어 구버전 카드 */}
            <div className="bg-[#171821] border border-[#2b2f3e] rounded-[22px] p-5 flex flex-col justify-between shadow-xl hover:border-[#3b82f6]/70 transition-all duration-200">
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="px-2.5 py-1 rounded-md bg-[#3b82f6]/15 text-[#60a5fa] text-[11px] font-[800]">
                    광고 없는 구버전
                  </span>
                  <span className="text-xs text-[#6e7280]">v1.7.x</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center text-lg text-white shadow-md shrink-0">
                    🛡️
                  </div>
                  <div>
                    <h2 className="text-white text-[17px] sm:text-[18px] font-[800] m-0 leading-tight">
                      팟플레이어 구버전
                    </h2>
                    <span className="text-[#9ea2b0] text-[12px] font-[500]">
                      광고 없는 가벼운 순정
                    </span>
                  </div>
                </div>

                {/* 🎯 버튼을 설명보다 위쪽에 배치 */}
                <button
                  type="button"
                  onClick={() => navigateTo('https://kbench.com/software/?q=node/74024')}
                  className="w-full my-2 py-3.5 px-4 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] active:scale-[0.98] text-white text-[15px] font-[800] rounded-[14px] transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(37,99,235,0.3)] cursor-pointer"
                >
                  <span>구버전 다운로드</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                {/* 📝 설명은 버튼 아래쪽에 위치 */}
                <p className="text-[#8e93a3] text-[12.5px] leading-relaxed mt-2.5 mb-0 break-keep">
                  • 우측 하단 팝업 광고가 추가되기 전 순정 버전<br />
                  • 시스템 리소스 점유율이 극도로 낮아 저사양 PC에 최적<br />
                  • 설치 후 자동 업데이트 알림 끄기 권장
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: 다음 팟인코더 구버전 카드 */}
          <div className="bg-[#171821] border border-[#2b2f3e] rounded-[22px] p-5 sm:p-6 shadow-xl hover:border-[#ff6b35]/70 transition-all duration-200">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#ff6b35]/15 text-[#ff8c5a] text-[11px] font-[800]">
                    DTS 오디오 변환 지원
                  </span>
                  <span className="text-xs text-[#6e7280]">v2.1.4.53</span>
                </div>
                <span className="text-xs text-[#ff8c5a] font-semibold">인기 명작 버전</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff6b35] to-[#e64a19] flex items-center justify-center text-lg text-white shadow-md shrink-0">
                  🎬
                </div>
                <div>
                  <h2 className="text-white text-[18px] sm:text-[19px] font-[800] m-0 leading-tight">
                    다음 팟인코더 구버전 (DTS 지원)
                  </h2>
                  <span className="text-[#9ea2b0] text-[12px] font-[500]">
                    오디오 변환 제한 없는 동영상 인코더
                  </span>
                </div>
              </div>

              {/* 🎯 버튼을 설명보다 위쪽에 배치 */}
              <button
                type="button"
                onClick={() => navigateTo('https://kbench.com/software/?q=node/47422')}
                className="w-full my-1.5 py-3.5 px-4 bg-gradient-to-r from-[#ff6b35] via-[#f4511e] to-[#e64a19] hover:brightness-110 active:scale-[0.98] text-white text-[15px] font-[800] rounded-[14px] transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(255,107,53,0.3)] cursor-pointer"
              >
                <span>팟인코더 구버전 다운로드</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              {/* 📝 설명은 버튼 아래쪽에 위치 */}
              <p className="text-[#8e93a3] text-[12.5px] sm:text-[13px] leading-relaxed m-0 break-keep">
                신버전에서 라이선스로 인해 제외된 <strong>DTS 오디오 코덱 변환</strong>이 완벽하게 지원되는 명작 구버전입니다. 동영상 자르기, 용량 압축, 자막 싱크 맞추기, 스마트폰/태블릿 최적화 인코딩을 가장 손쉽게 처리할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 📖 상세 안내 & 꿀팁 섹션 (버튼 아래 상세 설명) */}
        <section className="bg-[#14151d] border border-[#242735] rounded-[22px] p-5 sm:p-6 mt-2 shadow-md">
          <h3 className="text-white text-[17px] font-[800] mb-4 flex items-center gap-2">
            <span>📌</span> 프로그램 상세 가이드 & 설치 팁
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 팟플레이어 팁 */}
            <div className="bg-[#1a1b24] border border-[#2a2d3d] rounded-[18px] p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-base">💡</span>
                  <h4 className="text-white text-[14px] font-[700] m-0">
                    팟플레이어 구버전 유지 팁
                  </h4>
                </div>
                <p className="text-[#8c91a0] text-[12.5px] leading-relaxed m-0 break-keep">
                  구버전 설치 후 실행 시 나타나는 <strong>&quot;자동 업데이트 알림&quot;</strong> 창에서 반드시 <strong>&apos;취소&apos;</strong>를 눌러주세요. 환경설정(F5) → 기본 → 자동 업데이트 항목을 <strong>&apos;사용 안 함&apos;</strong>으로 변경하시면 광고 없이 계속 사용할 수 있습니다.
                </p>
              </div>
            </div>

            {/* 팟인코더 팁 */}
            <div className="bg-[#1a1b24] border border-[#2a2d3d] rounded-[18px] p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-base">💡</span>
                  <h4 className="text-white text-[14px] font-[700] m-0">
                    팟인코더 DTS 인코딩 팁
                  </h4>
                </div>
                <p className="text-[#8c91a0] text-[12.5px] leading-relaxed m-0 break-keep">
                  DTS 음원 영상을 인코딩할 때 소리가 안 나오거나 오류가 발생하는 경우, 이 <strong>2.1.4.53 구버전</strong>을 사용하시면 별도 코덱 설치 없이 AAC 또는 MP3 오디오로 깨끗하게 변환됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coupang Ads */}
        <CoupangAds
          keyword="초고속 외장SSD"
          title="🎬 고화질 영상 보관 & 빠른 전송 필수품"
          hookText="4K/8K 대용량 영상도 끊김 없이! 초고속 외장 SSD와 가성비 모니터 헤드셋 특가를 확인해보세요."
        />

        {/* Footer */}
        <footer className="border-t border-[#232633] pt-6 pb-12 text-center text-xs text-[#626673] space-y-2">
          <p className="font-semibold text-[#828694]">
            © 2026 DAUM & KAKAO MULTIMEDIA GUIDE. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[11px] leading-relaxed break-keep max-w-[580px] mx-auto">
            본 페이지는 다음 팟인코더 및 팟플레이어 이용자들을 위해 공식 및 신뢰할 수 있는 소프트웨어 아카이브 다운로드 링크를 정리한 안내 페이지입니다.
            각 소프트웨어의 저작권은 카카오(Kakao Corp.) 및 원저작권자에게 있습니다.
          </p>
        </footer>
      </div>
    </div>
  );
}
