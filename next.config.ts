import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
