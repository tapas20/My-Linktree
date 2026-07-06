import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow all domains for future external images
    remotePatterns: [],
  },
};

export default nextConfig;
