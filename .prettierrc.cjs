module.exports = {
  // 1. Set the plugins to use.
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  // 2. Set the overrides for specific file types.
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}; 