/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "**/*.module.scss")],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    domains: ["localhost", "localhost:3000", "almasp-store.darkube.app"],
    formats: ["image/avif", "image/webp"],
    loader: "imgix",
    path: "",
  },
  output: "standalone",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    baseUrl: "/",
    NEXT_PUBLIC_BACKEND_URI:
      process.env.NEXT_PUBLIC_BACKEND_URI || "https://api.almas-pro.ir/",
    NEXT_PUBLIC_BASE_URI:
      process.env.NEXT_PUBLIC_BASE_URI || "http://localhost:3000/",
    NEXT_PUBLIC_IMAGE_PREFIX:
      process.env.NEXT_PUBLIC_IMAGE_PREFIX || "http://localhost:3000/",
    NEXT_PUBLIC_BASE_TOKEN_NAME:
      process.env.NEXT_PUBLIC_BASE_TOKEN_NAME || "token-name",
  },
};
