import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Ensure Turbopack uses the correct workspace root when there are multiple lockfiles
    root: __dirname,
  },
};

export default nextConfig;
