/* eslint-disable */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    "standard"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
    indent: ["error", "tab"],
    quotes: [2, "double", { "avoidEscape": true }]
  }
}
