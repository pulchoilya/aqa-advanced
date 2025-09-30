import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    ignores: [
      "node_modules/**",
      "build/**",
      "coverage/**",
      ".history/**",
      "*.log",
      "*.tmp"
    ],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: { 
        ...globals.browser, 
        ...globals.node,
        ...globals.jest   
      },
    },
  },
  tseslint.configs.recommended
]);