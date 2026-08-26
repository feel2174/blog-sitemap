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
      <div className="w-full max-w-[760px] flex flex-col gap-8">
        {/* Header Section */}
        <header className="text-center relative z-10 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1e26] border border-[#2e3240] mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#fee500] animate-pulse" />
            <span className="text-[#fee500] text-[12px] sm:text-[13px] font-[800] tracking-wider uppercase">
              DAUM & KAKAO MULTIMEDIA
            </span>
          </div>
          <h1 className="text-[28px] sm:text-[40px] font-[900] m-0 mb-3 tracking-tight text-white leading-[1.25]">
            다음 팟플레이어 & 팟인코더<br />
            <span className="bg-gradient-to-r from-[#fee500] via-[#ffaa00] to-[#ff6b35] bg-clip-text text-transparent">
              버전별 무료 다운로드
            </span>
          </h1>
          <p className="text-[14px] sm:text-[16px] text-[#9a9ea8] m-0 break-keep font-[500] leading-[1.6] max-w-[620px] mx-auto">
            국민 동영상 재생기 <strong>팟플레이어</strong>와 영상 변환의 필수품 <strong>팟인코더</strong>!<br className="hidden sm:block" />
            최신 공식 버전부터 광고 없고 DTS 인코딩이 가능한 명작 구버전까지 선택하여 다운로드하세요.
          </p>
        </header>

        {/* Section 1: 다음 팟플레이어 (PotPlayer) */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5 px-1">
            <span className="text-2xl">🎬</span>
            <div>
              <h2 className="text-[19px] sm:text-[22px] font-[800] text-white tracking-tight">
                다음 팟플레이어 (PotPlayer)
              </h2>
              <p className="text-[12px] sm:text-[13px] text-[#888c99] m-0">
                초고화질 끊김 없는 재생 & 풍부한 코덱 지원의 대표 동영상 플레이어
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 팟플레이어 최신버전 */}
            <div className="bg-[#171821] border border-[#2b2f3e] rounded-[22px] p-5 sm:p-6 flex flex-col justify-between shadow-lg hover:border-[#fee500]/60 transition-all duration-200">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#fee500]/15 text-[#fee500] text-[11px] font-[800]">
                    공식 최신버전
                  </span>
                  <span className="text-xs text-[#6e7280]">v-Latest</span>
                </div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-11 h-11 rounded-xl bg-[#fee500] flex items-center justify-center text-xl text-black shadow-md shrink-0">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-white text-[17px] sm:text-[18px] font-[800] m-0 leading-tight">
                      팟플레이어 최신버전
                    </h3>
                    <span className="text-[#9ea2b0] text-[12px] font-[500]">
                      카카오 공식 홈페이지
                    </span>
                  </div>
                </div>
                <p className="text-[#8e93a3] text-[13px] leading-relaxed my-3 break-keep">
                  최신 보안 패치, 4K/8K 초고화질 하드웨어 가속, 최신 코덱 지원 및 카카오TV 연동
                </p>
              </div>

              <button
                type="button"
                onClick={() => navigateTo('https://tv.kakao.com/guide/potplayer')}
                className="w-full mt-3 py-3.5 px-4 bg-[#fee500] hover:bg-[#ebd300] active:scale-[0.98] text-black text-[15px] font-[800] rounded-[14px] transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(254,229,0,0.25)] cursor-pointer"
              >
                <span>최신버전 다운로드</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* 팟플레이어 구버전 */}
            <div className="bg-[#171821] border border-[#2b2f3e] rounded-[22px] p-5 sm:p-6 flex flex-col justify-between shadow-lg hover:border-[#3b82f6]/60 transition-all duration-200">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#3b82f6]/15 text-[#60a5fa] text-[11px] font-[800]">
                    광고 없는 무설치/구버전
                  </span>
                  <span className="text-xs text-[#6e7280]">v1.7.x</span>
                </div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center text-xl text-white shadow-md shrink-0">
                    🛡️
                  </div>
                  <div>
                    <h3 className="text-white text-[17px] sm:text-[18px] font-[800] m-0 leading-tight">
                      팟플레이어 구버전
                    </h3>
                    <span className="text-[#9ea2b0] text-[12px] font-[500]">
                      광고 없는 가벼운 순정
                    </span>
                  </div>
                </div>
                <p className="text-[#8e93a3] text-[13px] leading-relaxed my-3 break-keep">
                  우측 하단 팝업 광고 없음, 저사양 PC에서도 가볍고 쾌적한 순수 미디어 플레이어
                </p>
              </div>

              <button
                type="button"
                onClick={() => navigateTo('https://kbench.com/software/?q=node/74024')}
                className="w-full mt-3 py-3.5 px-4 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] active:scale-[0.98] text-white text-[15px] font-[800] rounded-[14px] transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(37,99,235,0.3)] cursor-pointer"
              >
                <span>구버전 다운로드</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: 다음 팟인코더 (PotEncoder) */}
        <section className="flex flex-col gap-4 mt-2">
          <div className="flex items-center gap-2.5 px-1">
            <span className="text-2xl">🎞️</span>
            <div>
              <h2 className="text-[19px] sm:text-[22px] font-[800] text-white tracking-tight">
                다음 팟인코더 (PotEncoder)
              </h2>
              <p className="text-[12px] sm:text-[13px] text-[#888c99] m-0">
                초보자도 쉬운 동영상 자르기·용량 줄이기·인코딩 프로그램
              </p>
            </div>
          </div>

          <div className="bg-[#171821] border border-[#2b2f3e] rounded-[22px] p-5 sm:p-6 shadow-lg hover:border-[#ff6b35]/60 transition-all duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#ff6b35]/15 text-[#ff8c5a] text-[11px] font-[800]">
                    DTS 오디오 변환 지원
                  </span>
                  <span className="text-xs text-[#6e7280]">v2.1.4.53</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#ff6b35] to-[#e64a19] flex items-center justify-center text-xl text-white shadow-md shrink-0">
                    🎬
                  </div>
                  <div>
                    <h3 className="text-white text-[18px] font-[800] m-0 leading-tight">
                      다음 팟인코더 구버전 (DTS 지원 명작)
                    </h3>
                    <span className="text-[#9ea2b0] text-[12px] font-[500]">
                      오디오 변환 제한 없는 필수 구버전
                    </span>
                  </div>
                </div>
                <p className="text-[#8e93a3] text-[13px] leading-relaxed m-0 break-keep">
                  이후 버전에서 라이선스로 인해 제거되었던 <strong>DTS 오디오 코덱 변환</strong>이 완벽하게 지원되며,
                  간단한 동영상 편집(구간 자르기, 음성 추출, 용량 압축)에 가장 최적화되어 있습니다.
                </p>
              </div>

              <div className="sm:w-[220px] shrink-0">
                <button
                  type="button"
                  onClick={() => navigateTo('https://kbench.com/software/?q=node/47422')}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-[#ff6b35] via-[#f4511e] to-[#e64a19] hover:brightness-110 active:scale-[0.98] text-white text-[15px] font-[800] rounded-[14px] transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(255,107,53,0.3)] cursor-pointer"
                >
                  <span>팟인코더 구버전 받기</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Tip & Guide Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          {/* 팟플레이어 팁 */}
          <div className="bg-[#15161f] border border-[#242735] rounded-[20px] p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">💡</span>
                <h4 className="text-white text-[15px] font-[700] m-0">
                  팟플레이어 구버전 사용 팁
                </h4>
              </div>
              <p className="text-[#858a99] text-[13px] leading-relaxed m-0 break-keep">
                구버전 설치 후 프로그램 실행 시 <strong>&quot;자동 업데이트 알림&quot;</strong> 창이 뜨면 반드시 <strong>&quot;취소&quot;</strong>를 누르고, 환경설정(F5) → 기본 → 자동 업데이트 항목을 <strong>&quot;사용 안 함&quot;</strong>으로 설정해 두셔야 광고 없는 구버전이 유지됩니다.
              </p>
            </div>
          </div>

          {/* 팟인코더 팁 */}
          <div className="bg-[#15161f] border border-[#242735] rounded-[20px] p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">💡</span>
                <h4 className="text-white text-[15px] font-[700] m-0">
                  팟인코더 인코딩 팁
                </h4>
              </div>
              <p className="text-[#858a99] text-[13px] leading-relaxed m-0 break-keep">
                스마트폰이나 태블릿 등 모바일 기기에 넣을 영상은 상단의 <strong>&apos;휴대용 기기&apos;</strong> 프리셋을 선택하고, 자막을 영상에 직접 입히거나 용량을 대폭 줄이고 싶을 때는 <strong>&apos;웹서버용&apos;</strong> 또는 비트레이트를 조절하세요.
              </p>
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
