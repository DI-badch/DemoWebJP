/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@di/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
