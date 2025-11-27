// next.config.js
const createNextIntlPlugin = require("next-intl/plugin");

// If request.ts is at /i18n/request.ts:
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config: any) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = withNextIntl(nextConfig);
