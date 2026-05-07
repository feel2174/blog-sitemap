"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';

type Post = {
  title: string;
  link: string;
};

interface Props {
  posts: Post[];
}

export default function InfinitePostList({ posts }: Props) {
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDisplayedPosts(posts.slice(0, page * itemsPerPage));
  }, [page, posts]);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loaderRef.current) observer.observe(loaderRef.current);
    
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [handleObserver]);

  return (
    <div className="flex flex-col gap-4 max-w-3xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        🔥 HOT 실시간 많이 찾는 지원금
      </h2>
      
      {displayedPosts.map((post, idx) => (
        <a
          key={idx}
          href={post.link}
          className="flex items-center justify-between w-full bg-white border border-gray-200 hover:border-blue-500 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 group"
        >
          <div className="flex-1 pr-4">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 line-clamp-2">
              {post.title}
            </h3>
          </div>
          <div className="shrink-0 flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
            <svg className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </a>
      ))}
      
      {page * itemsPerPage < posts.length && (
        <div ref={loaderRef} className="py-8 flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
      {page * itemsPerPage >= posts.length && (
        <div className="py-8 text-center text-gray-500 font-medium">
          모든 지원금 정보를 불러왔습니다.
        </div>
      )}
    </div>
  );
}
