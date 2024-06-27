import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    ignores: ['node_modules'],
    files: ["**/*.js"], 
    languageOptions: {
      sourceType: "module",
      ecmaVersion: 2021,
      globals: {
        ...globals.node,
        __dirname: 'readonly'
      }
    }},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];