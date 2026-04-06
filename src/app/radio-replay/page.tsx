import Link from 'next/link';

export const metadata = {
    title: '라디오 다시듣기 모음 (MBC, SBS, KBS, CBS, YTN, CPBC, EBS)',
    description: '대한민국 주요 방송사의 라디오 다시듣기 및 팟캐스트 바로가기 모음입니다. 놓친 라디오 방송을 지금 바로 들어보세요.',
};

export default function RadioReplayPage() {
    const radioStations = [
        {
            name: "MBC 라디오",
            description: "MBC 미니(mini) 다시듣기 및 팟캐스트",
            url: "https://mini.imbc.com/",
            bgColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
            icon: "📻"
        },
        {
            name: "SBS 라디오",
            description: "SBS 고릴라 주요 프로그램 다시듣기",
            url: "http://m.sbs.co.kr/builder/programPobcastBoard.do?pgm_id=22000008784&pgm_mnu_id=39525",
            bgColor: "bg-gradient-to-r from-indigo-500 to-purple-500",
            icon: "🎙️"
        },
        {
            name: "KBS 라디오",
            description: "KBS 콩(KONG) 방송 프로그램 다시듣기",
            url: "https://radio.kbs.co.kr/",
            bgColor: "bg-gradient-to-r from-teal-400 to-emerald-500",
            icon: "🎧"
        },
        {
            name: "CBS 라디오",
            description: "CBS 레인보우 다시듣기",
            url: "https://www.cbs.co.kr/radio/programReplay",
            bgColor: "bg-gradient-to-r from-orange-400 to-red-500",
            icon: "📡"
        },
        {
            name: "YTN 라디오",
            description: "YTN 뉴스 및 라디오 다시듣기",
            url: "https://radio.ytn.co.kr/radio_hear/radio_hear.php",
            bgColor: "bg-gradient-to-r from-slate-600 to-gray-800",
            icon: "📰"
        },
        {
            name: "CPBC 라디오",
            description: "가톨릭평화방송 AOD 다시듣기",
            url: "https://www.cpbc.co.kr/aod.html?category=16",
            bgColor: "bg-gradient-to-r from-sky-400 to-blue-600",
            icon: "🕊️"
        },
        {
            name: "EBS 라디오",
            description: "EBS 교육방송 라디오 다시듣기",
            url: "https://www.ebs.co.kr/radio/replay",
            bgColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
            icon: "📚"
        }
    ];

    return (
        <div 
            className="min-h-screen bg-neutral-50 text-neutral-900 py-12 px-4 md:px-8 relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
        >
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-indigo-100/50 to-transparent z-0 pointer-events-none" />
            <div className="absolute top-20 right-0 w-64 h-64 bg-purple-200/40 rounded-full blur-3xl z-0 pointer-events-none" />
            <div className="absolute top-40 left-10 w-48 h-48 bg-blue-200/40 rounded-full blur-3xl z-0 pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 mt-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-sm mb-6 border border-neutral-100 relative">
                        <span className="text-4xl">📻</span>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-pulse border-4 border-white" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-neutral-900">
                        라디오 다시듣기 모음
                    </h1>
                    <p className="text-neutral-500 text-lg md:text-xl font-medium max-w-2xl mx-auto break-keep leading-relaxed">
                        대한민국 주요 방송사의 라디오 프로그램을 놓치셨나요?<br className="hidden md:block"/>
                        원하는 방송사의 다시듣기 서비스로 바로 이동하세요.
                    </p>
                </div>

                {/* Radio Station Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
                    {radioStations.map((station, index) => (
                        <Link 
                            key={index} 
                            href={station.url}
                            className="group relative flex flex-col justify-center bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                            style={{ textDecoration: 'none' }}
                        >
                            <div className={`absolute top-0 left-0 w-full h-1.5 ${station.bgColor}`} />
                            
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-4">
                                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-inner ${station.bgColor} bg-opacity-10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                                        <span className="drop-shadow-sm">{station.icon}</span>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-neutral-800 mb-1 group-hover:text-indigo-600 transition-colors">
                                            {station.name}
                                        </h2>
                                        <p className="text-sm text-neutral-500 break-keep">
                                            {station.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-neutral-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all duration-300 self-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Radio Schedule CTA */}
                <div className="mb-16">
                    <Link
                        href="https://zucca100.com/radio-schedule/"
                        className="group relative flex items-center justify-between bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        style={{ textDecoration: 'none' }}
                    >
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                        
                        <div className="flex items-center gap-5 relative z-10">
                            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl shadow-inner backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                📅
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-1 drop-shadow-sm">
                                    라디오 편성표 확인하기
                                </h2>
                                <p className="text-emerald-50 drop-shadow-sm hidden md:block">
                                    각 채널별 실시간 / 일일 라디오 시간표를 한눈에 확인하세요.
                                </p>
                            </div>
                        </div>
                        <div className="text-white opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 relative z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </div>
                    </Link>
                </div>

                {/* Footer Notice */}
                <div className="bg-neutral-100 rounded-2xl p-6 text-center border border-neutral-200">
                    <p className="text-neutral-500 text-sm font-medium">
                        ※ 각 바로가기 링크는 해당 방송사의 공식 정책에 따라 로그인 및 전용 앱 설치가 필요할 수 있습니다.
                    </p>
                </div>
            </div>
        </div>
    );
}
