'use client';

import { getCategoryDisplayName, getCategoryColor } from '@/utils/categoryData';

interface CategorySummaryProps {
  categoryKey: string;
  count: number;
  description: string;
}

export default function CategorySummary({ categoryKey, count, description }: CategorySummaryProps) {
  const displayName = getCategoryDisplayName(categoryKey);
  const colorClass = getCategoryColor(categoryKey);

  return (
    <article className="group relative bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 block overflow-hidden">
      {/* 배경 그라데이션 효과 */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} aria-hidden="true"></div>
      
      {/* 제목과 설명 */}
      <div className="relative mb-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight mb-2">
          <a href={`#${categoryKey}`} className="block" aria-label={`${displayName} 카테고리로 이동`}>
            {displayName}
          </a>
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* 중간 통계 정보 */}
      <div className="relative mb-4">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1" aria-label={`${count}개의 혜택 정보`}>{count}</div>
            <div className="text-xs text-gray-500 font-medium">혜택 정보</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-blue-600 group-hover:text-blue-800 transition-colors mb-1">
              바로가기
            </div>
            <div className="text-xs text-gray-500">클릭하여 확인</div>
          </div>
        </div>
      </div>
      
      {/* 우상단 화살표 */}
      <div className={`absolute top-3 right-3 w-6 h-6 ${colorClass} rounded-full flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110`} aria-hidden="true">
        →
      </div>
    </article>
  );
} 