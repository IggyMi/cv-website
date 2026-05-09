import type { KnipConfig } from "knip"

const config: KnipConfig = {
  tags: ["-lintignore"],
  // postcss-load-config appears only as a JSDoc @type annotation in postcss.config.mjs, not a runtime import
  ignoreDependencies: ["postcss-load-config"],
  workspaces: {
    ".": {
      // ESLint resolves eslint.config.js via its own file discovery, not through explicit imports
      ignore: ["eslint.config.js"],
      // Each workspace declares @workspace/eslint-config in its own package.json; root doesn't import it
      ignoreDependencies: ["@workspace/eslint-config"],
    },
    "apps/web": {
      ignoreDependencies: [
        "lucide-react", // shadcn basic setup
        // postcss.config.mjs re-exports from @workspace/ui, which owns @tailwindcss/postcss directly
        "@tailwindcss/postcss",
      ],
    },
    "packages/ui": {
      ignoreDependencies: [
        "lucide-react", // shadcn basic setup
        "next-themes", // shadcn basic setup; consumed by apps/web, not this package
        "zod", // shadcn basic setup
        "@turbo/gen", // shadcn basic setup
      ],
    },
    "packages/eslint-config": {
      // @typescript-eslint/* are transitively provided as peers by the typescript-eslint unified package
      ignoreDependencies: [
        "@typescript-eslint/eslint-plugin",
        "@typescript-eslint/parser",
      ],
    },
    "packages/typescript-config": {
      // 'next' is referenced as a TS language service plugin in nextjs.json; it's resolved at the
      // app level (apps/web), not within this config package
      ignoreDependencies: ["next"],
    },
  },
}

export default config
