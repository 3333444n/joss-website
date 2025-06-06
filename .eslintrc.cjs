module.exports = {
  // 1. Set the root to true to prevent ESLint from searching for a configuration file in parent folders.
  root: true,
  // 2. Set the parser to @typescript-eslint/parser to enable TypeScript support.
  parser: "@typescript-eslint/parser",
  // 3. Set the parser options to specify the ECMAScript version, source type, and JSX features.
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  // 4. Set the environment to support browser, ES2021, and Node.js.
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 5. Extend the recommended ESLint and Prettier configurations.
  extends: [
    "eslint:recommended",
    "plugin:astro/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  // 6. Set the plugins to use.
  plugins: ["@typescript-eslint", "prettier"],
  // 7. Set the rules to enforce.
  rules: {
    "prettier/prettier": "error",
    "import/no-unresolved": "off",
    "import/extensions": "off",
  },
  // 8. Set the settings to use.
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  // 9. Set the overrides for specific file types.
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
}; 