/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      type: "asset/resource",
      resourceQuery: /url/, // *.svg?url
    });
    config.module.rules.push({
      test: /\.svg$/,
      resourceQuery: { not: [/url/] },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
