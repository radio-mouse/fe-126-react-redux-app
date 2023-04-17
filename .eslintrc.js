module.exports = {
  env: { browser: true, es2021: true },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  overrides: [],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react", "prettier"],
  rules: {
    "react/prop-types": 0,
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "no-restricted-exports": 0,
    "object-curly-newline": 0,
    "prettier/prettier": ["error"],
  },
};
