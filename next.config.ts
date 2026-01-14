import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Exclude /live routes from build since they use MUI
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

export default nextConfig;
