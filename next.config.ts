import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./src/image-loader.ts",
  },
  basePath: "/salonwebsitepreview.github.io",
};

export default nextConfig;
