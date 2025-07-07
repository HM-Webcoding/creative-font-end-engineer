import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable unused variable errors
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // Disable type-related rules
      "@typescript-eslint/ban-types": "off", // Allow {} and other banned types
      "@typescript-eslint/no-explicit-any": "off", // Allow use of 'any' type
      "@typescript-eslint/explicit-module-boundary-types": "off", // Don't require return types
    },
  },
];

export default eslintConfig;
