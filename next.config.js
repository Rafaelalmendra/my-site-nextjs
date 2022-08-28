const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  images: {
    domains: ["www.datocms-assets.com"],
  },
  env: {
    DATOCMS_READ_ONLY_API_TOKEN: process.env.DATOCMS_READ_ONLY_API_TOKEN,
  },
};
