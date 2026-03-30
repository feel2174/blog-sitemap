import React from 'react';
import CastList from './cast-list';

export const metadata = {
    title: '나는솔로 30기 31기 출연진 인스타 | 영숙 순자 옥순 정숙 현숙',
    description: '나는솔로(나는 SOLO) 30기 및 31기 출연진 인스타그램 주소 (SNS) 링크 모음.',
};

export default function IamSoloPage() {
    return (
        <div 
            className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-sky-50 text-slate-800 py-16 px-4 sm:px-6 flex flex-col items-center selection:bg-pink-200"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            <CastList />
        </div>
    );
}
