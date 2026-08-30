import Script from "next/script";
import Image from "next/image";
import TransitionLink from "@/components/TransitionLink";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BLOG_POSTS, getPost } from "../data";
import { truncate } from "@/lib/truncate";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { robots: { index: false, follow: false } };
  const canonicalUrl = `https://www.uxnicorp.com.ar/blog/${slug}`;
  return {
    title: post.title,
    description: truncate(post.summary, 157),
    keywords: post.tags,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: canonicalUrl,
        en: `https://www.uxnicorp.com.ar/en/blog/${slug}`,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title: `${post.title} | UXnicorp`,
      description: post.description,
      url: canonicalUrl,
      type: "article",
      locale: "es_AR",
      siteName: "UXnicorp",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: post.ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | UXnicorp`,
      description: post.description,
      images: [post.ogImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t))
  ).slice(0, 3);

  const canonicalUrl = `https://www.uxnicorp.com.ar/blog/${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${canonicalUrl}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
      headline: post.title,
      description: post.description,
      image: {
        "@type": "ImageObject",
        url: post.ogImage.startsWith("http") ? post.ogImage : `https://www.uxnicorp.com.ar${post.ogImage}`,
        width: 1200,
        height: 630,
      },
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      author: { "@id": "https://www.uxnicorp.com.ar/#gonzalo", name: post.author },
      publisher: {
        "@type": "Organization",
        name: "UXnicorp",
        logo: {
          "@type": "ImageObject",
          url: "https://www.uxnicorp.com.ar/brand/logo.png",
          width: 759,
          height: 840,
        },
      },
      keywords: post.tags.join(", "),
      url: canonicalUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.uxnicorp.com.ar" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.uxnicorp.com.ar/blog" },
        { "@type": "ListItem", position: 3, name: post.title, item: canonicalUrl },
      ],
    },
  ];

  return (
    <>
      <main
        style={{
          background:
            "radial-gradient(ellipse 90% 48% at 72% 20%, rgba(224,166,216,0.70) 0%, rgba(202,222,249,0.72) 38%, rgba(254,224,214,0.66) 72%, rgba(255,255,255,0) 100%), #ffffff",
          minHeight: "100vh",
        }}
      >
        <Script
          id={`blog-jsonld-${post.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="mx-auto max-w-[860px] px-6 py-20 md:px-8 md:py-28">
          <nav aria-label="Breadcrumb" style={{ marginBottom: "2.5rem" }}>
            <ol style={{ display: "flex", alignItems: "center", gap: "0.5rem", listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <TransitionLink href="/" style={{ fontSize: "0.8rem", fontWeight: 600, color: "#974c67", textDecoration: "none" }}>
                  Inicio
                </TransitionLink>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M4 2.5l4 3.5-4 3.5" stroke="#d1d5db" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <TransitionLink href="/blog" style={{ fontSize: "0.8rem", fontWeight: 600, color: "#974c67", textDecoration: "none" }}>
                  Blog
                </TransitionLink>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M4 2.5l4 3.5-4 3.5" stroke="#d1d5db" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </li>
              <li>
                <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>{post.title}</span>
              </li>
            </ol>
          </nav>

          <article>
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.69rem",
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      padding: "0.25rem 0.7rem",
                      borderRadius: "99px",
                      background: "rgba(243,122,166,0.1)",
                      color: "#974c67",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "#111",
                  margin: "0 0 0.5rem 0",
                  lineHeight: 1.1,
                }}
              >
                {post.title}
              </h1>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "#111" }}>
                  {post.author}
                </span>
                <span style={{ fontSize: "0.88rem", color: "#6b7280" }}>
                  {new Date(post.datePublished).toLocaleDateString("es-AR", { year: "numeric", month: "long", day: "numeric" })}
                </span>
              </div>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#4a5568", maxWidth: "640px", margin: 0 }}>
                {post.description}
              </p>
              <div
                style={{
                  marginTop: "1.25rem",
                  borderRadius: "1rem",
                  padding: "1.1rem 1.4rem",
                  background: "rgba(243,122,166,0.07)",
                  border: "1px solid rgba(243,122,166,0.18)",
                }}
              >
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#974c67", margin: "0 0 0.35rem 0" }}>
                  Respuesta corta
                </p>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#374151", margin: 0 }}>
                  {post.summary}
                </p>
              </div>
            </div>

            {post.ogImage && (
              <div style={{ borderRadius: "1.25rem", overflow: "hidden", marginBottom: "2rem", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <Image
                  src={post.ogImage}
                  alt={post.title}
                  width={860}
                  height={450}
                  sizes="(max-width: 1024px) 100vw, 860px"
                  priority
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
              {post.sections.map((section, i) => (
                <BlogSection key={i} section={section} />
              ))}
            </div>

            {related.length > 0 && (
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#6b7280", marginBottom: "0.875rem" }}>
                  Artículos relacionados
                </p>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  {related.map((r) => (
                    <TransitionLink
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        padding: "0.55rem 1.1rem",
                        borderRadius: "0.75rem",
                        background: "rgba(255,255,255,0.5)",
                        border: "1px solid rgba(255,255,255,0.65)",
                        fontSize: "0.84rem",
                        fontWeight: 600,
                        color: "#111",
                        textDecoration: "none",
                      }}
                    >
                      {r.title}
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                        <path d="M2 5.5h7M6 3l2.5 2.5L6 8" stroke="#F37AA6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </TransitionLink>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </main>
      <Footer locale="es" />
    </>
  );
}

function BlogSection({ section }: { section: import("../data").BlogSection }) {

  switch (section.type) {
    case "heading":
      return (
        <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#111", margin: "0.5rem 0 0 0", letterSpacing: "-0.03em" }}>
          {section.content}
        </h2>
      );
    case "text":
      return (
        <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#374151", margin: 0 }}>
          {section.content}
        </p>
      );
    case "list":
      return (
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {section.items?.map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.55rem", fontSize: "0.93rem", color: "#374151", lineHeight: 1.7 }}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "0.15rem" }}>
                <circle cx="7.5" cy="7.5" r="6.5" fill="#F37AA6" fillOpacity="0.15" />
                <path d="M4.75 7.5l2 2L10.25 5.5" stroke="#F37AA6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      );
    case "image":
      return (
        <div style={{ borderRadius: "1rem", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <Image
            src={section.src!}
            alt={section.alt || ""}
            width={860}
            height={450}
            sizes="(max-width: 1024px) 100vw, 860px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      );
    case "cta":
      return (
        <div
          style={{
            borderRadius: "1rem",
            padding: "1.5rem 2rem",
            background: "rgba(243,122,166,0.08)",
            border: "1px solid rgba(243,122,166,0.15)",
          }}
        >
          <p style={{ fontSize: "0.93rem", lineHeight: 1.7, color: "#374151", margin: "0 0 0.75rem 0" }}>
            {section.content}
          </p>
          <TransitionLink
            href="/#contacto"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              fontSize: "0.84rem",
              fontWeight: 700,
              color: "#974c67",
              textDecoration: "none",
            }}
          >
            Contactanos
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
              <path d="M2 5.5h7M6 3l2.5 2.5L6 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </TransitionLink>
        </div>
      );
    default:
      return null;
  }
}
