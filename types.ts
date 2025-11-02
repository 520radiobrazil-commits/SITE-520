
export interface Article {
  id: number;
  category: string;
  title: string;
  summary: string;
  content: string; // Full content for AI summary
  imageUrl: string;
  videoUrl?: string;
  audioUrl?: string;
  author: string;
  date: string;
  isFeatured?: boolean;
  views?: number;
  ogTitle?: string;
  ogDescription?: string;
  ogImageUrl?: string;
}

export interface Comment {
  id: string;
  articleId: number;
  author: string;
  text: string;
  timestamp: string;
}