'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

// Helper to generate a random color and a slightly different one
const generateColors = (stage: number) => {
  const r = Math.floor(Math.random() * 200) + 20; // Avoid too bright/dark
  const g = Math.floor(Math.random() * 200) + 20;
  const b = Math.floor(Math.random() * 200) + 20;
  
  // Difficulty formula: the color difference decreases as stage increases
  // Starts around 25 and goes down to 2
  const diff = Math.max(2, Math.floor(25 - (stage / 3)));
  
  const isAdd = Math.random() > 0.5;
  const dr = isAdd ? Math.min(255, r + diff) : Math.max(0, r - diff);
  const dg = isAdd ? Math.min(255, g + diff) : Math.max(0, g - diff);
  const db = isAdd ? Math.min(255, b + diff) : Math.max(0, b - diff);

  return {
    base: `rgb(${r}, ${g}, ${b})`,
    answer: `rgb(${dr}, ${dg}, ${db})`,
  };
};

const getRank = (stage: number) => {
  if (stage >= 50) return { title: '색채의 신 (God level)', color: 'text-amber-600', desc: '초인적인 색 변별력을 가지고 계시군요!' };
  if (stage >= 35) return { title: '독수리의 눈 (Excellent)', color: 'text-purple-600', desc: '매우 뛰어난 색 감각을 보유하고 있습니다.' };
  if (stage >= 20) return { title: '일반수준 (Normal)', color: 'text-blue-600', desc: '지극히 정상적인 색 변별력을 가지고 있습니다.' };
  if (stage >= 10) return { title: '약한 색약 (Level 1)', color: 'text-orange-600', desc: '색 구분이 조금 힘드셨나요? 관리가 필요할 수 있습니다.' };
  return { title: '심한 색약 (Level 2)', color: 'text-red-600', desc: '전문의와 상담을 권장드리는 수준입니다.' };
};

export default function ColorBlindTest() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [stage, setStage] = useState(1);
  const [timeLeft, setTimeLeft] = useState(15);
  const [colors, setColors] = useState({ base: '', answer: '' });
  const [answerIndex, setAnswerIndex] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: '색맹 / 색약 테스트 결과',
      text: `나의 색채 감각 스코어는 Level ${stage}! 내 등급은 [${getRank(stage).title}] 입니다. 당신의 색채 감각은 어느 수준인가요? 지금 바로 테스트해보세요!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('링크가 복사되었습니다. 친구에게 공유해보세요!');
      } catch {
        alert('링크 복사에 실패했습니다.');
      }
    }
  };

  // Grid size logic: 2x2, 3x3, ..., 10x10 max
  const gridSize = Math.min(Math.floor((stage + 1) / 2) + 1, 10);
  const totalTiles = gridSize * gridSize;

  const startNextStage = useCallback((currentStage: number) => {
    const newColors = generateColors(currentStage);
    setColors(newColors);
    
    // gridSize is calculated based on currentStage
    const currentGridSize = Math.min(Math.floor((currentStage + 1) / 2) + 1, 10);
    setAnswerIndex(Math.floor(Math.random() * (currentGridSize * currentGridSize)));
    setTimeLeft(15);
  }, []);

  const startGame = () => {
    setIsGameOver(false);
    setIsAnalyzing(false);
    setStage(1);
    setIsPlaying(true);
    startNextStage(1);
  };

  const handleTileClick = (index: number) => {
    if (!isPlaying || isGameOver) return;

    if (index === answerIndex) {
      const nextStage = stage + 1;
      setStage(nextStage);
      startNextStage(nextStage);
    } else {
      setTimeLeft(prev => Math.max(0, prev - 3));
    }
  };

  useEffect(() => {
    let timerId: any;
    if (isPlaying && !isGameOver && !isAnalyzing && timeLeft > 0) {
      timerId = window.setInterval(() => {
        setTimeLeft(prev => Math.max(0, prev - 0.1));
      }, 100);
    }
    return () => {
      if (timerId) window.clearInterval(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, isGameOver, isAnalyzing]);

  // Handle Time out
  useEffect(() => {
    if (isPlaying && timeLeft <= 0) {
      setIsPlaying(false);
      setIsAnalyzing(true);
    }
  }, [timeLeft, isPlaying]);

  // Handle Analysis delay
  useEffect(() => {
    if (isAnalyzing) {
      const timer = setTimeout(() => {
        setIsAnalyzing(false);
        setIsGameOver(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isAnalyzing]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-['Pretendard'] py-12 px-4 flex flex-col items-center">
      <div className="max-w-xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black mb-4 tracking-tighter text-slate-900">
            색맹 / 색약 테스트
          </h1>
          <p className="text-slate-500 font-medium whitespace-pre-wrap">
            다른 색깔의 타일을 찾아 클릭하세요! {"\n"}
            단계가 올라갈수록 구분이 어려워집니다.
          </p>
        </div>

        {/* Game Area */}
        {!isPlaying && !isGameOver && !isAnalyzing ? (
          <div className="bg-white rounded-[2.5rem] p-12 text-center shadow-xl border border-slate-200">
            <div className="text-6xl mb-8">👁️</div>
            <h2 className="text-2xl font-bold mb-6 text-slate-800">테스트를 시작할까요?</h2>
            <p className="text-slate-500 mb-10 leading-relaxed break-keep">
              제한 시간 15초가 주어집니다. <br />
              오답 클릭 시 시간이 3초 차감되니 주의하세요!
            </p>
            <button
              onClick={startGame}
              className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-xl shadow-lg transition-all active:scale-95"
            >
              테스트 시작
            </button>
          </div>
        ) : isAnalyzing ? (
          <div className="bg-white rounded-[2.5rem] p-16 text-center shadow-xl border border-slate-200 flex flex-col items-center justify-center min-h-[400px]">
            <div className="relative w-24 h-24 mb-10">
              <div className="absolute inset-0 border-4 border-indigo-100 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
            </div>
            <h2 className="text-3xl font-black mb-4 text-slate-800">결과 분석 중</h2>
            <p className="text-slate-500 font-medium animate-pulse">
              색채 변별 능력을 분석하고 있습니다...
            </p>
          </div>
        ) : isGameOver ? (
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 text-center shadow-2xl border border-slate-200 animate-in fade-in zoom-in duration-500">
                <h2 className="text-3xl font-black mb-2 text-slate-900">테스트 결과</h2>
                <div className="text-6xl my-6">📊</div>
                <div className="mb-8">
                  <p className="text-slate-500 text-lg mb-1 font-bold">나의 스코어</p>
                  <p className="text-5xl font-black text-indigo-600">Level {stage}</p>
                </div>
                
                <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
                  <p className={`text-2xl font-black mb-2 ${getRank(stage).color}`}>
                    {getRank(stage).title}
                  </p>
                  <p className="text-slate-600 font-medium break-keep">
                    {getRank(stage).desc}
                  </p>
                </div>

                {/* Share Button (Kakao Style) */}
                <button
                  onClick={handleShare}
                  className="w-full mb-4 py-4 bg-[#FEE500] hover:bg-[#FDD800] text-[#191919] rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.558 1.707 4.8 4.315 6.095l-.81 2.962c-.05.18.15.34.3.23l3.483-2.32c.56.082 1.13.128 1.712.128 4.97 0 9-3.185 9-7.115S16.97 3 12 3z"/>
                  </svg>
                  결과 공유하기 (카카오톡 등)
                </button>

                {/* Disclaimer & Information Link */}
                <div className="mb-10 text-left bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100/50">
                    <p className="text-xs text-slate-500 mb-4 leading-relaxed break-keep">
                        ※ 본 테스트는 오락 및 참고용으로만 사용해 주세요. 정확한 시력 및 색채 판별을 위해서는 반드시 <strong>안과 전문의와 상담</strong>이 필요합니다.
                    </p>
                    <Link
                        href="https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=1469"
                        className="flex items-center justify-between w-full p-4 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 transition-colors group/link"
                    >
                        <span className="text-sm font-bold text-slate-700">질병관리청 국가건강정보포털 상세안내</span>
                        <svg className="w-4 h-4 text-slate-400 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={startGame}
                    className="py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all active:scale-95"
                  >
                    다시 하기
                  </button>
                  <Link
                    href="/"
                    className="py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition-all text-center flex items-center justify-center active:scale-95"
                  >
                    홈으로
                  </Link>
                </div>
              </div>
        ) : (
          <div className="space-y-6">
            {/* HUD */}
            <div className="flex justify-between items-end px-2">
              <div>
                <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">Stage</span>
                <p className="text-3xl font-black text-indigo-600">{stage}</p>
              </div>
              <div className="text-right">
                <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">Time Left</span>
                <p className={`text-3xl font-mono font-black ${timeLeft < 5 ? 'text-red-500 animate-pulse' : 'text-slate-800'}`}>
                  {timeLeft.toFixed(1)}s
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-3 bg-slate-200 rounded-full overflow-hidden shadow-inner">
              <div 
                className={`h-full transition-all duration-100 ${timeLeft < 5 ? 'bg-red-500' : 'bg-indigo-600'}`}
                style={{ width: `${(timeLeft / 15) * 100}%` }}
              ></div>
            </div>

            {/* Grid */}
            <div 
              className="aspect-square bg-slate-100 p-2 sm:p-4 rounded-[2rem] grid gap-1.5 sm:gap-3 shadow-inner border border-slate-200"
              style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
            >
              {Array.from({ length: totalTiles }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleTileClick(i)}
                  className="rounded-md sm:rounded-xl shadow-sm transition-transform active:scale-95 hover:brightness-105"
                  style={{ 
                    backgroundColor: i === answerIndex ? colors.answer : colors.base 
                  }}
                />
              ))}
            </div>

            <div className="text-center pt-4">
              <button 
                onClick={() => {
                  setIsPlaying(false);
                  setIsAnalyzing(true);
                }}
                className="text-slate-400 hover:text-red-500 font-bold text-sm transition-colors"
              >
                테스트 종료하기
              </button>
            </div>
          </div>
        )}

        {/* Info */}
        {!isPlaying && (
          <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
              <span className="text-indigo-600">💡</span> 테스트 가이드
            </h3>
            <ul className="space-y-3 text-slate-500 font-medium text-sm leading-relaxed">
              <li>• 수많은 타일 중 미세하게 색상이 다른 하나를 찾아 클릭하세요.</li>
              <li>• 총 15초의 시간이 주어지며, 정답을 맞출 때마다 시간이 초기화됩니다.</li>
              <li>• 오답을 클릭하면 시간이 3초씩 차감되니 정확하게 클릭하는 것이 중요합니다.</li>
              <li>• 레벨이 높아질수록 타일 수도 많아지고 색깔 차이도 줄어듭니다.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
