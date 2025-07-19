import { MetadataRoute } from 'next'
import { getCategorizedPosts } from '@/utils/categoryData'

export default function sitemap(): MetadataRoute.Sitemap {
  const categorizedData = getCategorizedPosts();
  const { categories } = categorizedData;
  
  const baseUrl = 'https://zucca100.com'
  
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
    url: post.link,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  return [mainPage, ...categoryPages, ...blogPosts]
} 