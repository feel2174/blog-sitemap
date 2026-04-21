import React from 'react';
import CastList from './cast-list';
import CoupangAds from '@/components/CoupangAds';

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
            <CoupangAds 
                keyword="향수" 
                title="💖 첫인상을 결정하는 마법의 향"
                hookText="나는솔로 출연진들처럼 매력적인 첫인상을 남기고 싶나요? 소개팅과 데이트에서 호감을 높여주는 인기 향수와 뷰티 아이템 추천 리스트입니다."
            />
        </div>
    );
}
