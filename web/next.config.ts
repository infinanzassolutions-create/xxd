import type { NextConfig } from "next";

// Static export so the site can be served from GitHub Pages at /xxd/financore.
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/xxd/financore",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
