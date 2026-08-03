import { MetadataRoute } from 'next'
import { getCategorizedPosts } from '@/utils/categoryData'

export default function sitemap(): MetadataRoute.Sitemap {
  const categorizedData = getCategorizedPosts();
  const { categories } = categorizedData;
  
  const baseUrl = 'https://plus.zucca100.com'
  
  // 메인 페이지
  const mainPage = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1,
  }
  
  // 카테고리별 페이지
  const categoryPages = Object.keys(categories).map(categoryKey => ({
    url: `${baseUrl}/#${categoryKey}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
  
  // 개별 블로그 포스트
  const blogPosts = Object.values(categories).flat().map(post => ({
    url: post.link.startsWith('http') ? post.link : `${baseUrl}${post.link}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const staticPages = [
    {
      url: `${baseUrl}/horse-racing-park`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/jensen-huang-korea-ai-stocks`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/jensen-huang-korea-schedule`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/heritage-passport`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/olympic-park`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/samsung-onnuri-festival`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/worldcup-2026`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/worldcup-2026-schedule`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/worldcup-hydration-break`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/chzzk-worldcup`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/tving-privacy-check`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/hulktv`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/telecom-customer-center`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]
  
  return [mainPage, ...categoryPages, ...blogPosts, ...staticPages]
} 
