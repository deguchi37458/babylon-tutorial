import js from "@eslint/js";
import globals from "globals";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";

export default {
  overrides: [
    {
      files: ["*.astro"],
      extends: [
        "eslint:recommended",       // 基本的なESLint推奨設定
        "plugin:astro/recommended", // Astro用の推奨設定
        "prettier",                 // Prettierとの統合
      ],
      rules: {
        // 必要に応じてAstroファイル専用のカスタムルールを追加
      },
    },
    {
      files: ["*.js", "*.ts"],
      extends: [
        "eslint:recommended",   // JavaScriptの推奨設定
        "plugin:prettier/recommended", // Prettierと統合
      ],
      rules: {
        // JavaScript/TypeScript用のカスタムルールを追加
      },
    },
  ],
  languageOptions: {
    globals: {
      ...globals.browser,  // ブラウザ環境のグローバル変数
      dataLayer: false,     // dataLayerを無効化
    },
  },
};
