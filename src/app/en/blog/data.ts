import { BLOG_POSTS_DATA } from "./posts";
import type { BlogPost } from "@/app/blog/data";

export const BLOG_POSTS_EN: BlogPost[] = [...BLOG_POSTS_DATA].sort((a, b) => b.datePublished.localeCompare(a.datePublished));

export function getPostEN(slug: string): BlogPost | undefined {
  return BLOG_POSTS_EN.find((p) => p.slug === slug);
}