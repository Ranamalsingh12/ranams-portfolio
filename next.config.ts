import type { NextConfig } from "next";

const repo = "ranams-portfolio";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
