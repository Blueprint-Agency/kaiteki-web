import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Legacy site reference dump — excluded in tsconfig.json for the same reason.
    "well-known/**",
    // design-sync tooling: shims, staged converters and generated bundles, not app code.
    ".design-sync/**",
    ".ds-sync/**",
    "ds-bundle/**",
  ]),
]);

export default eslintConfig;
