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
  if (stage >= 50) return { title: '색채의 신 (God level)', color: 'text-amber-400', desc: '초인적인 색 변별력을 가지고 계시군요!' };
  if (stage >= 35) return { title: '독수리의 눈 (Excellent)', color: 'text-purple-400', desc: '매우 뛰어난 색 감각을 보유하고 있습니다.' };
  if (stage >= 20) return { title: '일반수준 (Normal)', color: 'text-blue-400', desc: '지극히 정상적인 색 변별력을 가지고 있습니다.' };
  if (stage >= 10) return { title: '약한 색약 (Level 1)', color: 'text-orange-400', desc: '색 구분이 조금 힘드셨나요? 관리가 필요할 수 있습니다.' };
  return { title: '심한 색약 (Level 2)', color: 'text-red-400', desc: '전문의와 상담을 권장드리는 수준입니다.' };
};

export default function ColorBlindTest() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [stage, setStage] = useState(1);
  const [timeLeft, setTimeLeft] = useState(15);
  const [colors, setColors] = useState({ base: '', answer: '' });
  const [answerIndex, setAnswerIndex] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

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
    let timer: NodeJS.Timeout;
    if (isPlaying && !isGameOver && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 0.1) {
            setIsGameOver(true);
            setIsPlaying(false);
            return 0;
          }
          return prev - 0.1;
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isPlaying, isGameOver, timeLeft]);

  return (
    <div className="min-h-screen bg-neutral-900 text-white font-['Pretendard'] py-12 px-4 flex flex-col items-center">
      <div className="max-w-xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black mb-4 tracking-tighter">
            색맹 / 색약 테스트
          </h1>
          <p className="text-neutral-400 font-medium">
            다른 색깔의 타일을 찾아 클릭하세요! <br />
            단계가 올라갈수록 구분이 어려워집니다.
          </p>
        </div>

        {/* Game Area */}
        {!isPlaying && !isGameOver ? (
          <div className="bg-neutral-800 rounded-[2.5rem] p-12 text-center shadow-2xl border border-neutral-700">
            <div className="text-6xl mb-8">👁️</div>
            <h2 className="text-2xl font-bold mb-6">테스트를 시작할까요?</h2>
            <p className="text-neutral-400 mb-10 leading-relaxed break-keep">
              제한 시간 15초가 주어집니다. <br />
              오답 클릭 시 **시간이 3초 차감**되니 주의하세요!
            </p>
            <button
              onClick={startGame}
              className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-black text-xl shadow-lg transition-all active:scale-95"
            >
              테스트 시작
            </button>
          </div>
        ) : isGameOver ? (
          <div className="bg-neutral-800 rounded-[2.5rem] p-12 text-center shadow-2xl border border-neutral-700">
            <h2 className="text-3xl font-black mb-2">테스트 결과</h2>
            <div className="text-6xl my-8">📊</div>
            <div className="mb-8">
              <p className="text-neutral-400 text-lg mb-1">나의 스코어</p>
              <p className="text-5xl font-black text-indigo-400">Level {stage}</p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-2xl p-6 mb-10">
              <p className={`text-2xl font-black mb-2 ${getRank(stage).color}`}>
                {getRank(stage).title}
              </p>
              <p className="text-neutral-400 font-medium break-keep">
                {getRank(stage).desc}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={startGame}
                className="py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition-all"
              >
                다시 하기
              </button>
              <Link
                href="/"
                className="py-4 bg-neutral-700 hover:bg-neutral-600 rounded-xl font-bold transition-all text-center flex items-center justify-center"
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
                <span className="text-neutral-500 font-bold uppercase text-xs tracking-widest">Stage</span>
                <p className="text-3xl font-black text-indigo-400">{stage}</p>
              </div>
              <div className="text-right">
                <span className="text-neutral-500 font-bold uppercase text-xs tracking-widest">Time Left</span>
                <p className={`text-3xl font-mono font-black ${timeLeft < 5 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
                  {timeLeft.toFixed(1)}s
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-100 ${timeLeft < 5 ? 'bg-red-500' : 'bg-indigo-500'}`}
                style={{ width: `${(timeLeft / 15) * 100}%` }}
              ></div>
            </div>

            {/* Grid */}
            <div 
              className="aspect-square bg-neutral-800 p-2 sm:p-4 rounded-[2rem] grid gap-1.5 sm:gap-3 shadow-2xl"
              style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
            >
              {Array.from({ length: totalTiles }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleTileClick(i)}
                  className="rounded-md sm:rounded-xl transition-transform active:scale-95 hover:brightness-110"
                  style={{ 
                    backgroundColor: i === answerIndex ? colors.answer : colors.base 
                  }}
                />
              ))}
            </div>

            <div className="text-center pt-4">
              <button 
                onClick={() => setIsGameOver(true)}
                className="text-neutral-500 hover:text-red-400 font-bold text-sm transition-colors"
              >
                테스트 종료하기
              </button>
            </div>
          </div>
        )}

        {/* Info */}
        {!isPlaying && (
          <div className="mt-16 bg-neutral-800/50 rounded-3xl p-8 border border-neutral-700/50">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-indigo-400">💡</span> 테스트 가이드
            </h3>
            <ul className="space-y-3 text-neutral-400 font-medium text-sm leading-relaxed">
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
