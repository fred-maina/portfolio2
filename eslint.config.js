import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["dist", "index.html"] },
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
    rules: js.configs.recommended.rules,
  },
];
