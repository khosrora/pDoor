// next.config.js
const createNextIntlPlugin = require("next-intl/plugin");

// If request.ts is located at /i18n/request.ts:
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.persiadoorco.com"], // <-- REQUIRED for your slider images
  },

  webpack(config : any) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withNextIntl(nextConfig);
