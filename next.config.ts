import type { NextConfig } from "next";
import path from "path";

const prodCsp = [
  "default-src 'self'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com",
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com",
  "frame-src 'self'",
  "manifest-src 'self'",
].join("; ");

const devCsp = [
  "default-src 'self'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com",
  "connect-src 'self' http://127.0.0.1:3000 http://localhost:3000 https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com",
  "frame-src 'self'",
  "manifest-src 'self'",
].join("; ");

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  async headers() {
    const contentSecurityPolicy = process.env.NODE_ENV === "development" ? devCsp : prodCsp;

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: contentSecurityPolicy,
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/como-trabajamos",
        destination: "/",
        permanent: true,
      },
      {
        source: "/es",
        destination: "/",
        permanent: true,
      },
      {
        source: "/es/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/conceptos",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/conceptos",
        destination: "/en",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
