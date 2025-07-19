'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [bookmarkAdded, setBookmarkAdded] = useState(false);
  const [showBookmarkMessage, setShowBookmarkMessage] = useState(false);

  const addToBookmarks = () => {
    if (typeof window !== 'undefined') {
      try {
        // 브라우저 북마크 추가
        if ('sidebar' in window && window.sidebar && typeof (window.sidebar as any).addPanel === 'function') {
          // Mozilla Firefox
          (window.sidebar as any).addPanel(document.title, window.location.href, '');
        } else if ('external' in window && window.external && typeof (window.external as any).AddFavorite === 'function') {
          // Internet Explorer
          (window.external as any).AddFavorite(window.location.href, document.title);
        } else {
          // 다른 브라우저들
          alert('Ctrl+D (또는 Cmd+D)를 눌러서 즐겨찾기에 추가하세요.');
        }
        
        setBookmarkAdded(true);
        setShowBookmarkMessage(true);
        
        // 3초 후 메시지 숨기기
        setTimeout(() => {
          setShowBookmarkMessage(false);
        }, 3000);
        
      } catch {
        // 실패 시 키보드 단축키 안내
        alert('Ctrl+D (또는 Cmd+D)를 눌러서 즐겨찾기에 추가하세요.');
      }
    }
  };

  const copyUrl = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('URL이 클립보드에 복사되었습니다!');
      }).catch(() => {
        // 폴백: 수동 복사 안내
        const textArea = document.createElement('textarea');
        textArea.value = window.location.href;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('URL이 클립보드에 복사되었습니다!');
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">zu</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">zucca100.com</span>
                <span className="text-sm text-gray-400">혜택 정보 사이트맵</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              정부 지원금부터 세금 환급까지, 실제 받을 수 있는 혜택 정보를 카테고리별로 정리한 zucca100.com의 사이트맵입니다. 
              즐겨찾기 추가 후 더 많은 정보를 확인해보세요.
            </p>
            
            {/* 북마크 기능 버튼들 */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <button
                onClick={addToBookmarks}
                className={`flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  bookmarkAdded 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                aria-label="즐겨찾기에 추가"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
                </svg>
                {bookmarkAdded ? '즐겨찾기 추가됨' : '즐겨찾기 추가'}
              </button>
              
              <button
                onClick={copyUrl}
                className="flex items-center justify-center px-4 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-all duration-300"
                aria-label="URL 복사"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                URL 복사
              </button>
            </div>

            {/* 북마크 추가 메시지 */}
            {showBookmarkMessage && (
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm animate-pulse">
                ✅ 즐겨찾기에 추가되었습니다! (Ctrl+D 또는 Cmd+D로도 추가 가능)
              </div>
            )}

            {/* 키보드 단축키 안내 */}
            <div className="text-xs text-gray-500 mt-2">
              💡 <strong>키보드 단축키:</strong> Ctrl+D (Windows) 또는 Cmd+D (Mac)으로 즐겨찾기 추가
            </div>
          </div>

          {/* Quick Links */}
          

          {/* Categories */}
         
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 zucca100.com. 모든 권리 보유.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 