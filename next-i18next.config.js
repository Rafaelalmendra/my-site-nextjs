module.exports = {
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    localePath: path.resolve("./public/locales"),
  },
  reloadOnPrerender: true, // process.env.NODE_ENV !== 'production'
  returnObjects: true,
};
