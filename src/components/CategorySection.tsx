'use client';

import { useState } from 'react';
import { CategoryPost } from '@/utils/categoryDataTypes';
import { getCategoryDisplayName, getCategoryColor } from '@/utils/categoryData';

interface CategorySectionProps {
  categoryKey: string;
  posts: CategoryPost[];
  count: number;
}

export default function CategorySection({ categoryKey, posts, count }: CategorySectionProps) {
  const displayName = getCategoryDisplayName(categoryKey);
  const colorClass = getCategoryColor(categoryKey);
  const [showAll, setShowAll] = useState(false);
  
  // 최대 12개 표시, 12개를 초과하는 경우에만 "더 보기" 버튼 표시
  const maxInitialPosts = 12;
  const initialPosts = posts.slice(0, maxInitialPosts);
  const remainingPosts = posts.slice(maxInitialPosts);
  const displayedPosts = showAll ? posts : initialPosts;
  const hasMorePosts = remainingPosts.length > 0;

  return (
    <section className="mb-16 category-section" aria-labelledby={`${categoryKey}-heading`}>
      <div className="mb-8">
        <h2 id={`${categoryKey}-heading`} className="text-3xl font-bold text-gray-900 leading-tight mb-2">{displayName}</h2>
        <p className="text-gray-600">{count}개의 혜택 정보</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
        {displayedPosts.map((post, index) => (
          <article key={index} role="listitem" className="group relative bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            {/* 배경 그라데이션 효과 */}
            <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} aria-hidden="true"></div>
            
            {/* 상단 번호와 화살표 */}
            <div className="relative flex items-start justify-between mb-4">
              <div className={`w-6 h-6 ${colorClass} rounded-md flex items-center justify-center text-white text-xs font-bold`} aria-label={`${index + 1}번째 글`}>
                {index + 1}
              </div>
              <div className={`w-5 h-5 ${colorClass} rounded-full flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110`} aria-hidden="true">
                →
              </div>
            </div>
            
            {/* 제목 */}
            <div className="relative mb-4">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight line-clamp-3">
                <a href={post.link} className="block" aria-label={`${post.title} 자세히 보기`}>
                  {post.title}
                </a>
              </h3>
            </div>
            
            {/* 키워드 태그 */}
            {post.matched_keywords && post.matched_keywords.length > 0 && (
              <div className="relative mb-4">
                <div className="flex flex-wrap gap-1.5" role="list" aria-label="관련 키워드">
                  {post.matched_keywords.slice(0, 3).map((keyword, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100"
                      role="listitem"
                    >
                      {keyword}
                    </span>
                  ))}
                  {post.matched_keywords.length > 3 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200" role="listitem">
                      +{post.matched_keywords.length - 3}
                    </span>
                  )}
                </div>
              </div>
            )}
            
            {/* 하단 액션 */}
            <div className="relative">
              <div className="flex items-center justify-between">
                <a 
                  href={post.link}
                  className="flex items-center text-xs text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label={`${post.title} 자세히 보기`}
                >
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  자세히 보기
                </a>
                <div className="text-xs text-gray-400" aria-label={`${index + 1}번째 글, 총 ${count}개 중`}>
                  {index + 1} / {count}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* 모던한 더 보기 버튼 */}
      {!showAll && hasMorePosts && (
        <div className="text-center mt-12">
          <div className="relative">
            {/* 배경 그라데이션 */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl blur-lg opacity-30"></div>
            
            {/* 메인 버튼 */}
            <button
              onClick={() => setShowAll(true)}
              className="relative group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-2xl font-bold text-lg hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-xl"
              aria-label={`${remainingPosts.length}개 더 보기`}
            >
              {/* 아이콘 */}
              <div className="mr-4 p-2 bg-white/20 rounded-full group-hover:bg-white/30 transition-all duration-300">
                <svg className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* 텍스트 */}
              <div className="text-left">
                <div className="font-bold text-xl">{remainingPosts.length}개 더 보기</div>
                <div className="text-sm opacity-90 font-normal">총 {count}개의 혜택 정보</div>
              </div>
              
              {/* 화살표 */}
              <div className="ml-4 p-2 bg-white/20 rounded-full group-hover:bg-white/30 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          </div>
          
          {/* 진행률 표시 */}
          <div className="mt-4 flex items-center justify-center space-x-2">
            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                style={{ width: `${(initialPosts.length / count) * 100}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600 font-medium">
              {initialPosts.length} / {count}
            </span>
          </div>
        </div>
      )}

      {/* 모던한 접기 버튼 */}
      {showAll && hasMorePosts && (
        <div className="text-center mt-12">
          <div className="relative">
            {/* 배경 그라데이션 */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl blur-lg opacity-30"></div>
            
            {/* 메인 버튼 */}
            <button
              onClick={() => setShowAll(false)}
              className="relative group inline-flex items-center px-10 py-5 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-2xl font-bold text-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-xl"
              aria-label="목록 접기"
            >
              {/* 아이콘 */}
              <div className="mr-4 p-2 bg-white/20 rounded-full group-hover:bg-white/30 transition-all duration-300">
                <svg className="w-6 h-6 group-hover:-rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </div>
              
              {/* 텍스트 */}
              <div className="text-left">
                <div className="font-bold text-xl">목록 접기</div>
                <div className="text-sm opacity-90 font-normal">처음 {maxInitialPosts}개만 보기</div>
              </div>
              
              {/* 화살표 */}
              <div className="ml-4 p-2 bg-white/20 rounded-full group-hover:bg-white/30 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
              </div>
            </button>
          </div>
          
          {/* 완료 표시 */}
          <div className="mt-4 flex items-center justify-center space-x-2">
            <div className="flex items-center text-green-600">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">모든 {count}개 항목 표시됨</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 