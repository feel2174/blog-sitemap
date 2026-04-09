import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2026 숙박 할인권 발급/사용처 | 대한민국 숙박세일페스타',
  description: '2026 대한민국 숙박세일페스타 할인권 발급 및 사용처 모음입니다. 지마켓, 롯데온, 11번가, 여기어때 등 다양한 플랫폼에서 쿠폰을 발급받으세요.',
};

export default function StayFestaPage() {
  const platforms = [
    {
      id: 'gmarket',
      logo: <span className="text-[#00854a] font-bold text-[28px] tracking-tight flex items-center">G<span className="text-[#004e9a]">market</span></span>,
      name: '지마켓',
      url: 'https://rpp.gmarket.co.kr/?exhib=176089'
    },
    {
      id: 'lotteon',
      logo: <span className="text-black font-extrabold text-2xl flex items-center gap-1.5"><span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center italic text-sm font-serif pb-0.5">l</span> LOTTE ON</span>,
      name: '롯데온',
      url: 'https://www.lotteon.com/event/ktostayfesta'
    },
    {
      id: '11st',
      logo: <span className="text-[#f1203b] font-black text-3xl tabular-nums tracking-tighter flex items-center">11<span className="text-2xl font-light scale-x-125 ml-1 pt-0.5">&gt;</span></span>,
      name: '11번가',
      url: 'https://promo.11st.co.kr/view/p/20260408-koreastayfesta'
    },
    {
      id: 'yeogi',
      logo: <span className="text-[#f7323f] font-black text-[26px] tracking-tighter">여기어때<span className="text-[#f7323f]">.</span></span>,
      name: '여기어때',
      url: 'https://yeogi.onelink.me/SECZ/oqxgi7rl'
    },
    {
      id: 'myrealtrip',
      logo: <span className="text-black font-serif italic font-bold text-3xl tracking-tighter">Myrealtrip</span>,
      name: '마이리얼트립',
      url: 'https://www.myrealtrip.com/promotions/2026salefesta_ss'
    },
    {
      id: 'kakao',
      logo: (
        <span className="text-black font-extrabold text-[22px] flex items-center gap-1.5">
          <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-5.5 0-10 3.5-10 8 0 2.8 1.8 5.3 4.6 6.8-.2.7-1 3-1 3.2 0 .2.2.3.4.2.2-.1 3.6-2.5 3.6-2.5.8.2 1.6.3 2.4.3 5.5 0 10-3.5 10-8s-4.5-8-10-8z"/></svg>
          예약하기
        </span>
      ),
      name: '카카오톡 예약하기',
      url: 'https://booking.kakao.com/promotion/festa'
    },
    {
      id: 'nol',
      logo: <span className="text-[#3b59ff] font-black text-3xl tracking-tighter">NOL</span>,
      name: 'NOL',
      url: 'https://content.yanolja.com/promotions/salefesta'
    }
  ];

  return (
    <>
      <style>{`
        @keyframes scalePulse {
          0%, 100% { transform: scale(0.9); }
          50% { transform: scale(1.1); }
        }
        .animate-scale-pulse {
          animation: scalePulse 1.5s ease-in-out infinite;
        }
      `}</style>
      <div className="min-h-screen bg-[#e8f8d5] py-14 px-4 font-['Pretendard'] selection:bg-[#f04f58] selection:text-white pb-32">
        <div className="max-w-[850px] mx-auto">
        <h1 className="text-center text-[30px] sm:text-[34px] font-black text-gray-900 mb-8 tracking-tight">숙박 할인권 발급/사용처</h1>
        
        <div className="flex justify-center mb-10 items-center">
          <div className="relative flex items-center">
            <div className="z-10 bg-[#e8f8d5] rounded-full flex items-center justify-center w-[64px] h-[64px] shadow-[0_0_15px_rgba(252,85,102,0.3)] -mr-7 left-0 border-4 border-transparent bg-clip-padding relative overflow-hidden">
              {/* Background gradient for the outer ring effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#fc5565] to-[#f4263a] rounded-full p-[3px]">
                <div className="w-full h-full bg-[#fbdee0] rounded-full p-[4px]">
                  {/* Inner clock icon */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#fc5565] to-[#f32034] flex items-center justify-center relative shadow-inner">
                    <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-3 h-1.5 bg-[#fbdee0] rounded-[2px] z-20"></div>
                    <div className="absolute top-[4px] right-[4px] w-1.5 h-1.5 bg-white/50 rounded-full rotate-45 z-20"></div>
                    
                    {/* Clock frame decorations to look like stopwatch */}
                    <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-4 h-[5px] bg-[#e41e30] rounded-t-sm"></div>
                    <div className="absolute top-1/2 -left-[2px] -translate-y-1/2 w-[3px] h-2 bg-[#e41e30] rounded-l-sm"></div>
                    
                    {/* Clock hands */}
                    <div className="w-[1.5px] h-[10px] bg-white absolute bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom rounded-full -rotate-12 z-20"></div>
                    <div className="w-[10px] h-[1.5px] bg-white/90 absolute top-1/2 left-1/2 -translate-y-1/2 origin-left rounded-full rotate-[15deg] z-20"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full z-30 relative shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#fa5566] to-[#fc6c7f] text-white font-bold py-3 pl-[3.2rem] pr-8 rounded-r-full rounded-l-3xl shadow-[0_4px_10px_rgba(250,85,102,0.25)] text-[16px] sm:text-[18px] tracking-tight relative z-0">
               매일 오전 10시부터 발급가능
            </div>
          </div>
        </div>

        <div className="text-center mb-12 text-[15px] sm:text-[16px] leading-[1.8] text-gray-800 font-medium break-keep px-2">
          <p>발급 이후 유효기간이 지난 쿠폰은 자동 소멸됩니다.</p>
          <p className="mt-1">
            쿠폰 발급 마감된 참여사의 경우 
            <span className="text-[#ef3646] font-bold mx-1.5 border-b-[1.5px] border-[#ef3646] pb-[1px]">발급 마감</span> 
            으로 표시가 되나, 참여사별로 조기 소진될 수 있으므로
          </p>
          <p className="mt-1">쿠폰 발급 가능 여부는 각 참여사 사이트에서 최종 확인하시기 바랍니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-[18px]">
          {platforms.map((platform) => (
            <div key={platform.id} className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex items-stretch h-[135px] sm:h-[145px] relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] group">
              {/* Left ticket stub */}
              <div className="w-[50px] sm:w-[60px] border-r-[2px] border-dashed border-gray-200 flex flex-col justify-center items-center relative shrink-0 bg-white">
                {/* Top Cutout */}
                <div className="absolute -top-3 -right-[13px] w-6 h-6 bg-[#e8f8d5] rounded-full shadow-[inset_0_-2px_4px_rgba(0,0,0,0.02)] z-10"></div>
                {/* Bottom Cutout */}
                <div className="absolute -bottom-3 -right-[13px] w-6 h-6 bg-[#e8f8d5] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] z-10"></div>

                <div className="-rotate-90 whitespace-nowrap text-gray-200 font-extrabold tracking-[0.25em] text-[13px] sm:text-[15px] mt-1 select-none">COUPON</div>
              </div>
              
              {/* Right content */}
              <div className="flex-grow flex flex-col justify-center items-center py-4 px-2 relative pl-2 sm:pl-3 bg-white z-0">
                <div className="h-12 sm:h-14 flex items-center justify-center mb-1 select-none group-hover:scale-105 transition-transform duration-300">
                  {platform.logo}
                </div>
                <div className="text-[11px] sm:text-[12px] text-gray-600 font-medium mb-3 tracking-tight">{platform.name}</div>
                <a 
                  href={platform.url} 
                  className="font-['Pretendard'] w-[85%] max-w-[280px] bg-[#ef4656] hover:bg-[#de3746] transition-colors text-white text-[13px] sm:text-[14px] font-bold flex justify-center items-center gap-2 py-2.5 sm:py-[11px] rounded-full shadow-sm animate-scale-pulse"
                >
                  <span className="translate-y-[0.5px]">숙박 할인권 받기</span>
                  <span className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] rounded-full bg-black/15 text-white flex items-center justify-center text-[10px] sm:text-[11px] font-black pb-[0.5px] ml-0.5">
                    &gt;
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
