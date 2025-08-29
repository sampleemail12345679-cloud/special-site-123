import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true, // optional but safer for static routes

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
