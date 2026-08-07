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
  description: string;
  author: string;
  category: string;
  datePublished: string;
  dateModified: string;
  tags: string[];
  ogImage: string;
  ctaText: string;
  ctaHref: string;
  sections: BlogSection[];
};

export const BLOG_POSTS: BlogPost[] = BLOG_POSTS_DATA;

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
