export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  slug: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  count: number;
} 