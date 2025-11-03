export enum NewsType {
  News = 'news',
  Blog = 'blog',
  Event = 'event'
}

export interface NewsArticle {
  slug: string;
  type: NewsType;
  title: string;
  publish_date: string;
  excerpt: string;
  thumbnail: string;
  body: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: '外壁' | '水まわり' | '内装' | '店舗';
  city: string;
  price_range: '〜50万円' | '50〜100万円' | '100〜300万円' | '300万円〜';
  duration: string;
  gallery: string[];
  before_after: { before: string; after: string }[];
  note: string;
  customer_voice?: string;
}
