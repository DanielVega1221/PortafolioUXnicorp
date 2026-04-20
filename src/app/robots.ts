import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.uxnicorp.com.ar/sitemap.xml",
    host: "https://www.uxnicorp.com.ar",
  };
}
