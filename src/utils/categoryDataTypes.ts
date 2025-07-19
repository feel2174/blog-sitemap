export interface CategoryPost {
  title: string;
  link: string;
  category: string;
  matched_keywords?: string[];
}

export interface CategorySummary {
  count: number;
  description: string;
}

export interface CategorizedData {
  summary: Record<string, CategorySummary>;
  categories: Record<string, CategoryPost[]>;
} 