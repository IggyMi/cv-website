import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import { globalIgnores } from "eslint/config"
import onlyWarn from "eslint-plugin-only-warn"
import turboPlugin from "eslint-plugin-turbo"
import tseslint from "typescript-eslint"

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  // Baseline JS rules
  // https://eslint.org/docs/latest/rules/
  js.configs.recommended,
  // Disables ESLint rules that conflict with Prettier
  // https://github.com/prettier/eslint-config-prettier
  eslintConfigPrettier,
  // Strict type-aware TS rules
  // https://typescript-eslint.io/users/configs#strict-type-checked
  ...tseslint.configs.strictTypeChecked,
  {
    plugins: {
      turbo: turboPlugin,
    },
    languageOptions: {
      parserOptions: {
        projectService: {
          // Config files (eslint.config.js, postcss.config.mjs, etc.) sit alongside
          // tsconfig.json but are not included in it. allowDefaultProject lets
          // strictTypeChecked lint them without requiring tsconfig changes.
          allowDefaultProject: ["*.config.*"],
        },
      },
    },
    rules: {
      // Prevents undeclared env var access in turbo tasks
      // https://github.com/vercel/turbo/tree/main/packages/eslint-plugin-turbo
      "turbo/no-undeclared-env-vars": "warn",
      // Prevents [object Object] in template literals; primitives are allowed as they produce meaningful strings
      // https://typescript-eslint.io/rules/restrict-template-expressions
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowNumber: true,
          allowBoolean: true,
          allowRegExp: true,
        },
      ],
      // Enforces consistent identifier naming across the codebase
      // https://typescript-eslint.io/rules/naming-convention
      "@typescript-eslint/naming-convention": [
        "error",
        // camelCase for everything not matched by a more specific rule below
        {
          selector: "default",
          format: ["camelCase"],
        },
        // PascalCase for types, interfaces, classes, enums and their members
        {
          selector: ["typeLike", "enumMember"],
          format: ["PascalCase"],
        },
        // PascalCase allowed alongside camelCase for React components and named imports
        {
          selector: ["variable", "function", "import"],
          format: ["camelCase", "PascalCase"],
        },
        // Unused parameters must be prefixed with _ as per TS convention
        {
          selector: "parameter",
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "objectLiteralProperty",
          modifiers: ["requiresQuotes"],
          // Properties that require quotes (e.g. "@tailwindcss/postcss", "Content-Type")
          // contain characters that make camelCase impossible — skip format enforcement
          format: null,
        },
      ],
    },
  },
  {
    plugins: {
      // Demotes all errors to warnings; CI enforcement is handled by TypeScript and the build pipeline
      // https://github.com/bfanger/eslint-plugin-only-warn
      onlyWarn,
    },
  },
  globalIgnores(["dist/**", ".next/**", "**/.turbo/**", "**/coverage/**"]),
]
