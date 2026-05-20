import Link from 'next/link';
import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

export const metadata = {
    title: '동대문엽기떡볶이 앱 다운로드',
    description: '지금 엽기떡볶이 멤버십 앱을 다운로드 하시고, 다양한 멤버십 혜택의 기회를 잡으세요!',
};

export default function YupddukAppPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4" style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, sans-serif' }}>
            <div className="max-w-[600px] w-full flex flex-col items-center text-center py-20">
                {/* 엽떡 로고 */}
                <div className="w-[100px] h-[100px] mb-8 rounded-[24px] overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center bg-white p-2">
                    <img 
                        src="https://play-lh.googleusercontent.com/9nFowxJ0_D2E7z-J6H_YpLGBQx2q_E-W88D1q78AIfB6HqGfP3zRTY5aH2oA19j95A=w240-h240-rw" 
                        alt="엽기떡볶이 로고" 
                        className="w-full h-auto object-contain"
                    />
                </div>
                
                <h1 className="text-[26px] font-bold text-[#111] mb-12 tracking-tight">
                    동대문엽기떡볶이
                </h1>
                
                <p className="text-[15px] sm:text-[16px] text-[#333] mb-10 leading-[1.6] break-keep">
                    지금 엽기떡볶이 멤버십 앱을 다운로드 하시고,<br />
                    다양한 멤버십 혜택의 기회를 잡으세요!
                </p>
                
                {/* 앱 다운로드 버튼 */}
                <div className="flex flex-col gap-3 w-full max-w-[200px]">
                    <Link 
                        href="https://apps.apple.com/kr/app/%EC%97%BD%EA%B8%B0%EB%96%A1%EB%B3%B6%EC%9D%B4/id1190023113"
                        className="w-full flex items-center justify-center gap-2 bg-black text-white rounded-xl py-3 px-4 hover:bg-gray-800 transition-all transform hover:scale-105 active:scale-95"
                    >
                        <FaApple className="text-[28px]" />
                        <div className="flex flex-col items-start text-left">
                            <span className="text-[10px] leading-[1] text-gray-300">Download on the</span>
                            <span className="text-[18px] font-semibold leading-[1.1] tracking-tight">App Store</span>
                        </div>
                    </Link>
                    
                    <Link 
                        href="https://play.google.com/store/apps/details?id=com.yupdduk.morder&hl=ko"
                        className="w-full flex items-center justify-center gap-2 bg-black text-white rounded-xl py-3 px-4 hover:bg-gray-800 transition-all transform hover:scale-105 active:scale-95"
                    >
                        <FaGooglePlay className="text-[24px]" />
                        <div className="flex flex-col items-start text-left">
                            <span className="text-[10px] leading-[1] text-gray-300">GET IT ON</span>
                            <span className="text-[18px] font-semibold leading-[1.1] tracking-tight">Google Play</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
