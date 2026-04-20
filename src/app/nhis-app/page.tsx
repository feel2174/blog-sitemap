import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '국민건강보험공단 건강보험25시 앱 다운로드 (PC/모바일)',
    description: '국민건강보험공단의 공식 모바일 앱인 «건강보험25시(The건강보험)»를 통한 자격득실확인서 발급, 진료받은 내용 보기, 건강검진 결과 확인 방법을 안내합니다.',
};

export default function NHISAppDownloadPage() {
    return (
        <div 
            className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 flex flex-col items-center overflow-x-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            {/* Header section with Trustworthy/Corporate feel */}
            <div className="w-full max-w-5xl text-center mb-16 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full -z-10"></div>
                <div className="inline-block mb-6">
                    <div className="px-6 py-2 bg-white text-blue-800 rounded-full shadow-md font-bold text-sm tracking-wide border border-blue-100 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
                        국민건강보험공단 공식 서비스
                    </div>
                </div>
                
                <h1 className="text-4xl sm:text-6xl font-[900] tracking-tight mb-8 text-slate-900 leading-tight">
                    모바일로 더 쉽고 빠르게 <br />
                    <span className="text-blue-700">The건강보험 (건강보험25시)</span>
                </h1>
                
                <p className="text-slate-600 font-bold text-lg sm:text-xl max-w-2xl mx-auto break-keep leading-relaxed bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-slate-200/50 shadow-sm">
                    건강검진 결과 확인, 진료 내역 조회, 자격득실확인서 발급까지! <br className="hidden sm:block" />
                    이제 국민건강보험공단 방문 없이 스마트폰과 웹에서 모든 민원 업무를 간편하게 처리하세요.
                </p>
            </div>

            {/* Quick Service Features Grid */}
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-center">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all">
                    <div className="w-14 h-14 mx-auto bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-4">📄</div>
                    <h4 className="text-lg font-black text-slate-800 mb-2">증명서 즉시 발급</h4>
                    <p className="text-slate-500 text-sm font-medium break-keep">자격득실확인서, 보험료 납부확인서를 PDF 파일로 바로 발급하고 팩스로 전송할 수 있습니다.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md hover:blue-200 transition-all">
                    <div className="w-14 h-14 mx-auto bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-3xl mb-4">🩺</div>
                    <h4 className="text-lg font-black text-slate-800 mb-2">건강검진 결과 조회</h4>
                    <p className="text-slate-500 text-sm font-medium break-keep">과거부터 최근까지의 국가건강검진 결과를 한눈에 비교하고 건강 상태를 체계적으로 관리하세요.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md hover:blue-200 transition-all">
                    <div className="w-14 h-14 mx-auto bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-3xl mb-4">🏥</div>
                    <h4 className="text-lg font-black text-slate-800 mb-2">진료받은 내용 보기</h4>
                    <p className="text-slate-500 text-sm font-medium break-keep">가족과 본인이 언제, 어디서, 어떤 진료를 받았는지 1년간의 병원 및 약국 이용 내역을 확인합니다.</p>
                </div>
            </div>

            {/* Download Links Section */}
            <div className="w-full max-w-5xl bg-white rounded-[3rem] p-8 sm:p-12 shadow-xl border border-slate-200/60 mb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -z-10"></div>
                
                <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm">다운로드</span> 플랫폼별 접속 안내
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Link 1: Android */}
                    <div className="group border-2 border-slate-100 p-8 rounded-3xl hover:bg-slate-50 hover:border-blue-200 transition-colors flex flex-col items-center">
                        <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:scale-110 transition-transform">
                            🤖
                        </div>
                        <h4 className="text-xl font-black text-slate-800 mb-2">안드로이드 앱</h4>
                        <p className="text-slate-500 text-sm font-medium text-center mb-8 break-keep">갤럭시, LG 스마트폰 등 안드로이드 전용 버전을 구글 플레이 스토어에서 다운로드합니다.</p>
                        <Link
                            href="https://play.google.com/store/apps/details?id=kr.or.nhic&hl=ko"
                            className="mt-auto w-full py-4 bg-teal-50 hover:bg-teal-600 hover:text-white text-teal-700 font-bold rounded-xl text-center transition-all duration-300"
                        >
                            Play Store 다운로드
                        </Link>
                    </div>

                    {/* Link 2: iOS */}
                    <div className="group border-2 border-slate-100 p-8 rounded-3xl hover:bg-slate-50 hover:border-blue-200 transition-colors flex flex-col items-center">
                        <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:scale-110 transition-transform">
                            🍎
                        </div>
                        <h4 className="text-xl font-black text-slate-800 mb-2">아이폰 앱 (iOS)</h4>
                        <p className="text-slate-500 text-sm font-medium text-center mb-8 break-keep">아이폰 및 아이패드 사용자를 위한 버전을 애플 앱스토어에서 무료 다운로드합니다.</p>
                        <Link
                            href="https://apps.apple.com/tr/app/%EA%B1%B4%EA%B0%95%EB%B3%B4%ED%97%9825%EC%8B%9C/id375279377"
                            className="mt-auto w-full py-4 bg-slate-100 hover:bg-slate-800 hover:text-white text-slate-700 font-bold rounded-xl text-center transition-all duration-300"
                        >
                            App Store 다운로드
                        </Link>
                    </div>

                    {/* Link 3: Web */}
                    <div className="group border-2 border-slate-100 p-8 rounded-3xl hover:bg-blue-50/50 hover:border-blue-300 transition-colors flex flex-col items-center shadow-[0_0_30px_rgba(37,99,235,0.05)]">
                        <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:scale-110 transition-transform">
                            💻
                        </div>
                        <h4 className="text-xl font-black text-blue-800 mb-2">PC 웹사이트</h4>
                        <p className="text-slate-500 text-sm font-medium text-center mb-8 break-keep">앱 설치가 번거롭거나 PC/노트북 데스크탑 사용자를 위한 공식 웹사이트 바로가기입니다.</p>
                        <Link
                            href="https://www.nhis.or.kr/nhis/index.do"
                            className="mt-auto w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-center shadow-lg transition-all duration-300"
                        >
                            공식 홈페이지 접속
                        </Link>
                    </div>

                </div>
            </div>

            {/* Guide Section */}
            <div className="w-full max-w-3xl">
                <div className="bg-slate-900 rounded-[2rem] p-8 sm:p-10 text-white border-t-8 border-blue-500">
                    <h5 className="text-xl font-black mb-6 flex items-center gap-3">
                        <span className="text-blue-400">🚨</span> 본인 인증 안내 필수 확인사항
                    </h5>
                    <p className="text-slate-300 font-medium mb-6 leading-relaxed break-keep">
                        건강보험공단의 모든 서비스는 민감한 개인의 의료 및 소득 정보를 다루므로 철저한 본인 인증이 필요합니다. 원활한 서비스 이용을 위해 다음 인증 수단 중 하나를 미리 준비해 주시길 권장합니다.
                    </p>
                    <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <li className="bg-slate-800 border border-slate-700 py-3 rounded-lg text-center font-bold text-sm text-slate-200">간편인증 (카카오/네이버 등)</li>
                        <li className="bg-slate-800 border border-slate-700 py-3 rounded-lg text-center font-bold text-sm text-slate-200">금융인증서</li>
                        <li className="bg-slate-800 border border-slate-700 py-3 rounded-lg text-center font-bold text-sm text-slate-200">공동인증서 (구 공인인증서)</li>
                        <li className="bg-slate-800 border border-slate-700 py-3 rounded-lg text-center font-bold text-sm text-slate-200">모바일 신분증</li>
                    </ul>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-20 flex flex-col items-center">
                <p className="text-slate-400 text-sm font-bold tracking-[0.1em] uppercase">
                    © 2026 THE HEALTH INSURANCE INFO HUB.
                </p>
            </footer>
        </div>
    );
}
