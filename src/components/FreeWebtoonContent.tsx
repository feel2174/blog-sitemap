'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoupangAds from '@/components/CoupangAds';
import Image from 'next/image';

const WEBTOON_LINKS = [
  {
    name: '네이버웹툰',
    url: 'https://m.comic.naver.com/',
    description: '인기 연재작과 요일별 웹툰을 모바일에서 빠르게 확인하세요.',
    eyebrow: 'Naver Webtoon',
    color: 'from-emerald-500 to-green-600',
  },
  {
    name: '카카오웹툰',
    url: 'https://webtoon.kakao.com/',
    description: '카카오웹툰의 오리지널 작품과 추천 웹툰을 둘러보세요.',
    eyebrow: 'Kakao Webtoon',
    color: 'from-yellow-400 to-amber-500',
  },
  {
    name: '리디웹툰',
    url: 'https://ridibooks.com/webtoon/recommendation',
    description: '리디의 추천 웹툰과 장르별 작품을 바로 확인하세요.',
    eyebrow: 'Ridi Webtoon',
    color: 'from-sky-500 to-blue-600',
  },
];

const guideItems = [
  {
    title: '공식 플랫폼',
    body: '네이버웹툰, 카카오웹툰, 리디웹툰 공식 서비스로 연결됩니다.',
  },
  {
    title: '모바일 우선',
    body: '휴대폰에서도 버튼이 먼저 보이도록 카드와 CTA 영역을 크게 배치했습니다.',
  },
  {
    title: '빠른 이동',
    body: '원하는 플랫폼을 선택하면 해당 웹툰 서비스로 바로 이동합니다.',
  },
];

export default function FreeWebtoonContent() {
  return (
    <div className="min-h-screen bg-slate-50 font-['Pretendard'] text-slate-950">
      <Header />

      <main className="pb-16">
        <section className="relative overflow-hidden bg-slate-950 px-4 pb-12 pt-24 text-white sm:px-6 lg:px-8">
          <div className="absolute inset-0 opacity-30">
            <Image src="/free-webtoon-bg.png" alt="웹툰 바로가기 배경" fill className="object-cover" priority />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/85 to-slate-950" />

          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="mb-4 flex flex-wrap gap-2 text-xs font-black">
              <span className="rounded-full bg-white px-3 py-1.5 text-slate-950">Official Webtoon</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-white">바로가기 모음</span>
            </div>

            <h1 className="text-3xl font-black leading-tight sm:text-5xl">무료 웹툰 플랫폼 바로가기</h1>
            <p className="mt-3 max-w-2xl text-base font-semibold leading-7 text-slate-200">
              네이버웹툰, 카카오웹툰, 리디웹툰을 한 화면에서 빠르게 선택하세요.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {WEBTOON_LINKS.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  className={`group rounded-2xl bg-gradient-to-r ${link.color} p-4 text-white shadow-xl transition-transform hover:-translate-y-0.5 active:scale-[0.99]`}
                >
                  <span className="block text-xs font-black uppercase tracking-[0.16em] opacity-80">{link.eyebrow}</span>
                  <span className="mt-2 flex items-center justify-between gap-4">
                    <strong className="text-xl font-black">{link.name}</strong>
                    <svg className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {WEBTOON_LINKS.map((link) => (
              <article key={link.name} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">{link.eyebrow}</p>
                <h2 className="mt-2 text-2xl font-black">{link.name}</h2>
                <p className="mt-3 min-h-[72px] text-sm font-semibold leading-6 text-slate-600">{link.description}</p>
                <a
                  href={link.url}
                  className={`mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${link.color} px-4 py-4 text-sm font-black text-white shadow-lg transition-transform hover:-translate-y-0.5 active:scale-[0.99]`}
                >
                  {link.name} 바로가기
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </a>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-3 rounded-3xl bg-white p-5 shadow-sm md:grid-cols-3">
            {guideItems.map((item) => (
              <div key={item.title} className="rounded-2xl bg-slate-50 p-4">
                <h3 className="text-base font-black">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <CoupangAds
        keyword="웹툰 단행본"
        title="소장하고 싶은 인기 웹툰 단행본"
        hookText="좋아하는 작품을 책장에 남기고 싶다면 인기 웹툰 단행본과 굿즈를 함께 확인해보세요."
      />

      <Footer />
    </div>
  );
}
