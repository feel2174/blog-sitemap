import Link from 'next/link';
import CoupangAds from '@/components/CoupangAds';

export const metadata = {
    title: '2026년 토정비결 무료 사이트 모음 | 신년운세 바로보기',
    description: '디지털역술방, 궁합닷컴, 운세의신, 신한라이프 등 무료로 토정비결을 볼 수 있는 사이트를 한곳에 모았습니다. 2026년 신년운세를 바로 확인해보세요.',
};

const sites = [
    {
        name: '디지털역술방',
        desc: '무료 토정비결',
        detail: '생년월일만 입력하면 바로 확인하는 전통 토정비결 풀이',
        url: 'https://www.yuksul.com/tojung.html',
        emoji: '📖',
        color: 'bg-amber-500/10 hover:bg-amber-500/20',
        borderColor: 'border-amber-500/30',
    },
    {
        name: '궁합닷컴',
        desc: '토정비결',
        detail: '궁합은 물론 토정비결까지 함께 볼 수 있는 종합 운세 사이트',
        url: 'https://www.gunghap.com/tojeong/tojeong.php3',
        emoji: '🀄',
        color: 'bg-rose-500/10 hover:bg-rose-500/20',
        borderColor: 'border-rose-500/30',
    },
    {
        name: '운세의신',
        desc: '토정비결',
        detail: '올해 신수와 월별 운세를 함께 풀어보는 토정비결 서비스',
        url: 'https://www.unsin.co.kr/unse/tojung/total/form',
        emoji: '🔮',
        color: 'bg-teal-500/10 hover:bg-teal-500/20',
        borderColor: 'border-teal-500/30',
    },
    {
        name: '신한라이프',
        desc: '토정비결',
        detail: '신한라이프 운세관에서 제공하는 사주 기반 토정비결',
        url: 'https://shinhanlife.sinbiun.com/unse/saju/saju.php?unse_code=A104',
        emoji: '🏮',
        color: 'bg-blue-500/10 hover:bg-blue-500/20',
        borderColor: 'border-blue-500/30',
    },
];

export default function TojeongBigyeolPage() {
    return (
        <div
            className="min-h-screen bg-[#FDF9F1] text-stone-800 py-20 px-4 flex flex-col items-center relative overflow-hidden"
            style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif' }}
        >
            <style>
                {`
                    @keyframes float-slow {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-8px); }
                    }
                    .oriental-card {
                        background: white;
                        border-radius: 24px;
                        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
                    }
                    .oriental-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 12px 30px rgba(217, 119, 6, 0.15);
                    }
                    .oriental-pattern {
                        background-image: radial-gradient(#e5e5e5 1px, transparent 1px);
                        background-size: 20px 20px;
                    }
                `}
            </style>

            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 oriental-pattern opacity-50 pointer-events-none w-full h-full" />

            {/* Decorative circles */}
            <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none z-0"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-rose-500/10 rounded-full blur-[80px] pointer-events-none z-0"></div>

            <div className="w-full max-w-4xl text-center mb-16 relative z-10" style={{ animation: 'float-slow 6s ease-in-out infinite' }}>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full border border-amber-200 mb-6 shadow-md">
                    <span className="text-4xl">📜</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight mb-5 leading-tight">
                    2026년 <span className="text-amber-600">토정비결</span> 무료 사이트
                </h1>
                <p className="text-stone-500 font-medium text-lg sm:text-xl max-w-2xl mx-auto break-keep leading-relaxed mt-4">
                    생년월일만 있으면 무료로 볼 수 있는 토정비결 사이트를 모았습니다<br className="hidden sm:block" />
                    올 한 해의 신수를 미리 확인해보세요!
                </p>
            </div>

            <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 relative z-10">
                {sites.map((site) => (
                    <Link
                        key={site.name}
                        href={site.url}
                        className="oriental-card p-7 flex flex-col items-center text-center cursor-pointer border border-stone-100 group"
                    >
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-5 border ${site.borderColor} ${site.color} transition-colors duration-300`}>
                            <span className="text-4xl group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                                {site.emoji}
                            </span>
                        </div>

                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-2xl text-stone-800">{site.name}</span>
                            <span className="text-sm font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100">
                                {site.desc}
                            </span>
                        </div>

                        <p className="text-sm text-stone-500 font-medium mt-3 leading-relaxed break-keep">
                            {site.detail}
                        </p>

                        <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-amber-700 group-hover:gap-2 transition-all">
                            바로가기
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </Link>
                ))}
            </div>

            <div className="mt-16 text-stone-400 text-sm flex items-center gap-2 font-medium z-10 bg-white/50 backdrop-blur-sm py-2 px-4 rounded-full border border-stone-200">
                <span>💡 각 사이트의 서비스 정책에 따라 이용 방법과 결과가 달라질 수 있습니다.</span>
            </div>

            <CoupangAds
                keyword="타로 카드"
                title="🔮 운세를 더 특별하게"
                hookText="토정비결로 올 한 해 신수를 확인했다면, 타로 카드와 힐링 아이템으로 마음까지 든든하게 채워보세요."
            />
        </div>
    );
}
