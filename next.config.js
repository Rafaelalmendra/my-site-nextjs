const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: ["www.datocms-assets.com"],
  },
  env: {
    DATOCMS_READ_ONLY_API_TOKEN: process.env.DATOCMS_READ_ONLY_API_TOKEN,
  },
};

module.exports = nextConfig;
