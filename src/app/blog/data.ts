import { BLOG_POSTS_DATA } from "./posts";

export type BlogSection = {
  type: "text" | "heading" | "list" | "image" | "cta";
  content?: string;
  items?: string[];
  src?: string;
  alt?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  author: string;
  category: string;
  datePublished: string;
  dateModified: string;
  tags: string[];
  ogImage?: string;
  ctaText: string;
  ctaHref: string;
  ctaLabel: string;
  sections: BlogSection[];
};

export const BLOG_POSTS: BlogPost[] = [...BLOG_POSTS_DATA].sort((a, b) => b.datePublished.localeCompare(a.datePublished));

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
