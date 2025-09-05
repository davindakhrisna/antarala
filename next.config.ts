// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.prismic.io", "prismic-io.s3.amazonaws.com"],
  },
};

export default nextConfig;
