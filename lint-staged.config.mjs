export default {
  "**/*.{ts,tsx,js,mjs,cjs}": (files) => [
    "turbo lint --ui=stream",
    "turbo format --ui=stream",
    `git add ${files.join(" ")}`,
  ],
  "**/*.{json,css,md}": (files) => [
    "turbo format --ui=stream",
    `git add ${files.join(" ")}`,
  ],
}

