import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // optional but safer for static routes
};

export default nextConfig;
