import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/iron-man-portfolio",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
