import type { Metadata } from "next";
import Script from "next/script";
import TransitionLink from "@/components/TransitionLink";
import { BLOG_POSTS, type BlogPost } from "./data";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog de desarrollo web y UX",
  description:
    "Artículos sobre desarrollo web, SEO, UX y estrategia digital para negocios en Argentina. Sin humo, con datos reales de proyectos.",
  keywords: [
    "blog desarrollo web argentina",
    "cuanto cuesta landing page argentina",
    "desarrollo web argentina",
    "seo argentina",
    "ux ui argentina",
    "sistemas de gestion argentina",
  ],
  alternates: {
    canonical: "https://www.uxnicorp.com.ar/blog",
    languages: {
      es: "https://www.uxnicorp.com.ar/blog",
      en: "https://www.uxnicorp.com.ar/en/blog",
      "x-default": "https://www.uxnicorp.com.ar/blog",
    },
  },
  openGraph: {
    title: "Blog de desarrollo web y UX | UXnicorp",
    description:
      "Artículos sobre desarrollo web, SEO, UX y estrategia digital. Sin humo, con datos reales de proyectos en Argentina.",
    url: "https://www.uxnicorp.com.ar/blog",
    type: "website",
    locale: "es_AR",
    siteName: "UXnicorp",
    images: [{ url: "/og-image.jpg", width: 1343, height: 633, alt: "Blog UXnicorp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de desarrollo web y UX | UXnicorp",
    description:
      "Artículos sobre desarrollo web, SEO, UX y estrategia digital. Sin humo, con datos reales.",
    images: ["/og-image.jpg"],
  },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Blog de desarrollo web — UXnicorp",
    description:
      "Artículos sobre desarrollo web, SEO, UX y estrategia digital para negocios en Argentina.",
    url: "https://www.uxnicorp.com.ar/blog",
    numberOfItems: BLOG_POSTS.length,
    itemListElement: BLOG_POSTS.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "BlogPosting",
        name: post.title,
        description: post.description,
        url: `https://www.uxnicorp.com.ar/blog/${post.slug}`,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        author: { "@type": "Person", name: post.author },
      },
    })),
  };

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
          id="blog-list-jsonld"
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
              <li>
                <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>Blog</span>
              </li>
            </ol>
          </nav>

          <div style={{ marginBottom: "2.5rem" }}>
            <p style={{ fontSize: "0.69rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#974c67", marginBottom: "0.75rem" }}>
              Blog
            </p>
            <h1
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "#111",
                margin: "0 0 0.75rem 0",
                lineHeight: 1.1,
              }}
            >
              Desarrollo web sin humo
            </h1>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#4a5568", maxWidth: "560px", margin: 0 }}>
              Artículos con datos reales de proyectos en Argentina. Sin fórmulas mágicas, sin “10 tips que van a cambiar tu vida”.
            </p>
          </div>

          {BLOG_POSTS.length === 0 ? (
            <div
              style={{
                borderRadius: "1.25rem",
                padding: "3rem 2rem",
                background: "rgba(255,255,255,0.5)",
                border: "1px solid rgba(255,255,255,0.65)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "1rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>
                Estamos preparando los primeros artículos.
              </p>
              <p style={{ fontSize: "0.88rem", color: "#6b7280", margin: 0 }}>
                Volvé en unos días. Mientras tanto, podés ver nuestros{" "}
                <TransitionLink href="/casos" style={{ color: "#974c67", fontWeight: 600, textDecoration: "none" }}>
                  casos reales
                </TransitionLink>
                .
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {BLOG_POSTS.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer locale="es" />
    </>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <TransitionLink
      href={`/blog/${post.slug}`}
      style={{
        display: "block",
        borderRadius: "1.25rem",
        padding: "1.75rem 2rem",
        background: "rgba(255,255,255,0.5)",
        border: "1px solid rgba(255,255,255,0.65)",
        boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap", marginBottom: "0.75rem" }}>
        <span style={{ fontSize: "0.69rem", fontWeight: 700, color: "#974c67", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          {post.category}
        </span>
        <span style={{ fontSize: "0.69rem", fontWeight: 600, color: "#6b7280" }}>
          {new Date(post.datePublished).toLocaleDateString("es-AR", { year: "numeric", month: "long", day: "numeric" })}
        </span>
      </div>
      <h2 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#111", margin: "0 0 0.5rem 0", letterSpacing: "-0.03em", lineHeight: 1.3 }}>
        {post.title}
      </h2>
      <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#4a5568", margin: "0 0 1rem 0" }}>
        {post.description}
      </p>
      <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
        {post.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: "0.69rem",
              fontWeight: 600,
              padding: "0.2rem 0.6rem",
              borderRadius: "99px",
              background: "rgba(243,122,166,0.1)",
              color: "#974c67",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </TransitionLink>
  );
}
