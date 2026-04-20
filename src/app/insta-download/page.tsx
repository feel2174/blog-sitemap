import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: '인스타그램 사진 및 동영상 다운로드 사이트 모음 (릴스, 스토리 저장)',
    description: '인스타그램 피드 사진, 동영상, 릴스(Reels) 및 스토리(Story)를 원본 화질로 바로 저장할 수 있는 빠르고 간편한 무료 다운로드 사이트를 소개합니다.',
};

export default function InstaDownloadPage() {
    return (
        <div 
            className="min-h-screen bg-[#fafafa] text-[#262626] py-16 px-4 sm:px-6 flex flex-col items-center"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            {/* Header section with Instagram gradient feel */}
            <div className="w-full max-w-4xl text-center mb-16 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-96 h-96 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] opacity-10 blur-[100px] rounded-full -z-10"></div>
                <div className="inline-block mb-8">
                    <div className="p-1.5 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-[2.2rem] shadow-xl transform transition-transform duration-500 hover:scale-105">
                        <div className="bg-white rounded-[1.8rem] p-5">
                            <span className="text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]">📸</span>
                        </div>
                    </div>
                </div>
                <h1 className="text-4xl sm:text-6xl font-[900] tracking-tight mb-6 leading-tight">
                    인스타 사진·동영상 <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">
                        무료 다운로드 센터
                    </span>
                </h1>
                <p className="text-zinc-600 font-bold text-lg sm:text-xl max-w-2xl mx-auto break-keep leading-relaxed border-l-4 border-[#e1306c] pl-6 py-2 text-left sm:text-center sm:border-l-0 sm:pl-0 mt-6">
                    마음에 드는 인스타 피드, 스토리, 릴스를 원본 화질 그대로! <br className="hidden sm:block" />
                    로그인 없이 링크 하나만으로 빠르게 저장할 수 있는 사이트들을 모았습니다.
                </p>
            </div>

            {/* Download Links Section */}
            <div className="w-full max-w-3xl space-y-6 mb-16">
                
                {/* Link 1 */}
                <div className="group bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100 hover:shadow-2xl hover:border-pink-200 transition-all duration-300 relative overflow-hidden flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-50 to-transparent rounded-bl-full -z-10"></div>
                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-tr from-[#fd1d1d]/10 to-[#833ab4]/10 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                        ⚡
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-2xl font-black text-zinc-800 mb-2">SnapInsta (스냅인스타)</h3>
                        <p className="text-slate-500 font-medium mb-6 break-keep leading-relaxed text-sm sm:text-base">
                            가장 빠르고 간편하게 인스타그램 사진, 동영상, 릴스, IGTV를 다운로드할 수 있는 대표적인 서비스입니다. 고화질 저장을 지원합니다.
                        </p>
                        <Link
                            href="https://snapinsta.to/ko"
                            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#cd486b] to-[#e1306c] hover:from-[#b93b5a] hover:to-[#c12658] text-white font-bold text-lg rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            SnapInsta 접속하기
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Link 2 */}
                <div className="group bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100 hover:shadow-2xl hover:border-orange-200 transition-all duration-300 relative overflow-hidden flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-50 to-transparent rounded-bl-full -z-10"></div>
                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-tr from-[#f56040]/10 to-[#ffdc80]/10 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                        🌟
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-2xl font-black text-zinc-800 mb-2">SaveFree (세이브프리)</h3>
                        <p className="text-slate-500 font-medium mb-6 break-keep leading-relaxed text-sm sm:text-base">
                            인스타그램의 모든 미디어 포맷을 안정적으로 무료 다운로드할 수 있는 올인원 다운로더입니다. 직관적인 인터페이스가 장점입니다.
                        </p>
                        <Link
                            href="https://www.save-free.com/ko/"
                            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#f56040] to-[#fd1d1d] hover:from-[#e35636] hover:to-[#db1717] text-white font-bold text-lg rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            SaveFree 접속하기
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Link 3 */}
                <div className="group bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 relative overflow-hidden flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-50 to-transparent rounded-bl-full -z-10"></div>
                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-tr from-[#833ab4]/10 to-[#c13584]/10 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                        ⏱️
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                        <div className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                            <span className="w-2 h-2 rounded-full bg-purple-500"></span> 스토리 전용
                        </div>
                        <h3 className="text-2xl font-black text-zinc-800 mb-2">SaveFrom (세이브프롬)</h3>
                        <p className="text-slate-500 font-medium mb-6 break-keep leading-relaxed text-sm sm:text-base">
                            24시간 이후에 사라지는 &apos;인스타 스토리&apos;와 &apos;하이라이트&apos;를 깔끔하게 저장하기에 최적화된 강력한 다운로드 툴입니다.
                        </p>
                        <Link
                            href="https://ko.savefrom.net/20-download-instagram-stories-86RP.html"
                            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#833ab4] to-[#5851db] hover:from-[#7636a0] hover:to-[#4e48c0] text-white font-bold text-lg rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            SaveFrom 접속하기
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>

            </div>

            {/* Guide Section */}
            <div className="w-full max-w-3xl bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200">
                <h5 className="text-xl font-black mb-6 text-zinc-800 flex items-center gap-3">
                    <span className="bg-zinc-100 p-2 rounded-xl">ℹ️</span> 이용 방법 안내
                </h5>
                <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">1</span>
                        <p className="text-slate-600 font-medium pt-1">인스타그램 앱이나 웹사이트에서 저장하고 싶은 게시물(사진/동영상/릴스)의 오른쪽 상단 메뉴(또는 공유 아이콘)를 누릅니다.</p>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">2</span>
                        <p className="text-slate-600 font-medium pt-1"><strong className="text-zinc-800">링크 복사 (Copy Link)</strong>를 선택하여 링크 주소를 복사합니다.</p>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#f09433] to-[#bc1888] flex items-center justify-center font-bold text-white shadow-sm">3</span>
                        <p className="text-slate-600 font-medium pt-1">위에 안내된 다운로드 사이트 중 하나에 접속하여 복사한 링크를 붙여넣고 <strong className="text-[#e1306c]">Download</strong> 버튼을 누르면 끝!</p>
                    </li>
                </ul>
                <div className="mt-8 p-4 bg-orange-50 border border-orange-100 rounded-xl">
                    <p className="text-sm text-orange-800 font-semibold break-keep">
                        * 주의사항: 다운로드한 콘텐츠는 원작자의 저작권 보호를 받습니다. 개인 소장 용도로만 사용하시고, 무단 재배포 및 상업적 이용을 삼가주세요.
                    </p>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-16 text-slate-400 text-sm font-semibold tracking-wider uppercase">
                © 2026 INSTAGRAM DOWNLOAD HUB.
            </footer>
        </div>
    );
}
