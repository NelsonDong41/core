import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

const legacy = compat.extends(
  "next/core-web-vitals",
);

const config = [...legacy,
{
  ignores: [".next/", "node_modules/", ".turbo/"],
},
{
  rules: {
    'no-console': 'warn',
    "@next/next/no-duplicate-head": "off",
    "import/no-default-export": "off",
  },
},
js.configs.recommended,
...tseslint.configs.recommended,
pluginReact.configs.flat.recommended,
]
export default config;