import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategorySection from '@/components/CategorySection';
import CategorySummary from '@/components/CategorySummary';
import ScrollIndicator from '@/components/ScrollIndicator';
import { HeaderAd, InContentAd, FooterAd } from '@/components/AdSense';
import { getCategorizedPosts } from '@/utils/categoryData';
import CoupangAds from '@/components/CoupangAds';

export default function Home() {
  const categorizedData = getCategorizedPosts();
  const { summary, categories } = categorizedData;

  // 카테고리 우선순위 정의 (지원금, 환급금 관련을 상단에 배치)
  const categoryPriority = {
    'government_support': 1,    // 정부 지원금 & 환급
    'finance_investment': 2,    // 금융 & 투자
    'health_wellness': 3,       // 건강 & 웰빙
    'technology': 4,            // 기술 & IT
    'lifestyle': 5              // 라이프스타일
  };

  // 카테고리를 우선순위와 글 개수로 정렬
  const sortedCategories = Object.entries(summary)
    .filter(([, info]) => info.count > 0)
    .sort(([aKey, a], [bKey, b]) => {
      const aPriority = categoryPriority[aKey as keyof typeof categoryPriority] || 999;
      const bPriority = categoryPriority[bKey as keyof typeof categoryPriority] || 999;
      
      // 우선순위가 같으면 글 개수로 정렬
      if (aPriority === bPriority) {
        return b.count - a.count;
      }
      
      return aPriority - bPriority;
    });

  // 스키마 마크업 생성
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "zucca100 블로그",
    "url": "https://zucca100.com",
    "description": "정부 지원금 & 환급 정보를 카테고리별로 정리한 블로그",
    "publisher": {
      "@type": "Organization",
      "name": "zucca100",
      "url": "https://zucca100.com"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "정부 지원금 & 환급 정보 목록",
      "numberOfItems": Object.values(summary).reduce((sum, info: any) => sum + info.count, 0),
      "itemListElement": sortedCategories.map(([categoryKey, info], index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": info.description,
          "description": `${info.count}개의 혜택 정보`,
          "url": `https://zucca100.com/#${categoryKey}`
        }
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        <ScrollIndicator />
        <Header />
        
        {/* 헤더 광고 */}
        <HeaderAd />
        
        {/* Hero Section */}
        <main>
          <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="mb-8">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  💰 놓치면 후회하는 혜택 정보
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                지원금 & 환급
                <br />
                <span className="text-blue-200">한눈에 보기</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-4xl mx-auto leading-relaxed">
                정부 지원금부터 세금 환급까지<br />
                <span className="font-semibold">실제 받을 수 있는 혜택</span>만 모았습니다
              </p>
              
              <div className="flex justify-center">
                <a 
                  href="https://www.gov.kr/portal/rcvfvrSvc/main/nonLogin"
                  className="group bg-white text-blue-600 px-12 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                  aria-label="정부24 혜택 조회 페이지로 이동"
                >
                  혜택 확인하기
                  <svg className="w-6 h-6 ml-3 inline group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* Category Summary Section */}
          <section id="categories" className="py-20 bg-gray-50" aria-labelledby="categories-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  📋 카테고리별 정리
                </span>
                <h2 id="categories-heading" className="text-4xl font-bold text-gray-900 mb-4">혜택 종류별로 보기</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  총 <span className="font-bold text-blue-600">{Object.values(summary).reduce((sum, info) => sum + info.count, 0)}개</span>의 혜택 정보를 
                  <span className="font-bold text-blue-600">{Object.keys(summary).length}개</span> 카테고리로 정리했습니다
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" role="list">
                {sortedCategories.map(([categoryKey, info]) => (
                  <div key={categoryKey} role="listitem">
                    <CategorySummary 
                      categoryKey={categoryKey}
                      count={info.count}
                      description={info.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 콘텐츠 중간 광고 */}
          <InContentAd />

          {/* Category Sections */}
          <section className="py-16 bg-white" aria-labelledby="details-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  🔍 상세 정보
                </span>
                <h2 id="details-heading" className="text-4xl font-bold text-gray-900 mb-4">카테고리별 상세 정보</h2>
                <p className="text-lg text-gray-600">
                  각 카테고리를 클릭하여 신청 방법과 자세한 정보를 확인하세요
                </p>
              </div>
              
              {sortedCategories.map(([categoryKey, info]) => (
                <div key={categoryKey} id={categoryKey}>
                  <CategorySection 
                    categoryKey={categoryKey}
                    posts={categories[categoryKey] || []}
                    count={info.count}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gray-900 text-white" aria-labelledby="cta-heading">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 id="cta-heading" className="text-3xl font-bold mb-4">더 많은 콘텐츠를 원하시나요?</h2>
              <p className="text-xl text-gray-300 mb-8">
                zucca100.com에서 최신 글과 업데이트를 확인하세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://zucca100.com"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  aria-label="zucca100.com 메인 블로그로 이동"
                >
                  zucca100.com 방문하기
                </a>
                <a 
                  href="#categories"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                  aria-label="카테고리 목록으로 이동"
                >
                  카테고리 다시 보기
                </a>
              </div>
            </div>
          </section>
        </main>
        {/* 쇼핑 추천 섹션 */}
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <CoupangAds 
                    keyword="애플워치" 
                    title="💎 프리미엄 추천 라이프"
                    hookText="나를 위한 특별한 선물, 최신 프리미엄 가전과 생활 필수템을 특가로 만나보세요."
                />
            </div>
        </section>

        {/* 푸터 광고 */}
        <FooterAd />

        <Footer />
      </div>
    </>
  );
}
