# cv-website

CV presented as an SSG website made through Next.JS, setup on AWS through Terraform, and deployed through Github Actions.

## Tech Stack

| Concern | Added | Technology | Purpose |
|---|:---:|---|---|
| Animation | ❌ | Framer Motion | Animations and page transitions |
| CI/CD | ❌ | GitHub Actions | Deploy and infra pipelines |
| Code Quality | ✅ | ESLint | Shared config in `shared/` |
| Code Quality | ✅ | Prettier | Shared formatting config in `shared/` |
| Code Quality | ✅ | Husky | Git hooks (commit-msg) |
| Code Quality | ✅ | lint-staged | Pre-commit linting and formatting enforcement |
| Code Quality | ✅ | commitlint | Conventional commit message validation |
| Code Quality | ✅ | commitizen + cz-git | Interactive CLI prompt for conventional commits |
| Code Quality | ✅ | Knip | Dead code and unused dependency detection |
| Code Quality | ❌ | action-semantic-pull-request | PR title validation against Conventional Commits spec |
| Code Review | ❌ | claude-code-action | Claude AI agent for PR review and code assistance via @claude mentions |
| Code Review | ❌ | claude-code-security-review | Automated security vulnerability scanning on every PR |
| Components | ✅ | shadcn/ui | Component library, sourced into `shared/` |
| Dev Environment | ❌ | Docker | Isolated local dev with hot-reload |
| Email | ❌ | Resend | Contact form email delivery |
| Forms | ❌ | React Hook Form + Zod | Contact form and validation |
| Framework | ✅ | Next.js | SSG (`output: 'export'`) |
| Framework | ✅ | React | Via Next.js |
| Geolocation | ❌ | ipinfo.io | Client-side location for availability badge |
| Infrastructure | ❌ | Terraform | AWS resource management |
| Infrastructure | ❌ | AWS S3 | Static file hosting |
| Infrastructure | ❌ | AWS CloudFront | CDN and HTTPS |
| Infrastructure | ❌ | AWS ACM | HTTPS certificate (us-east-1) |
| Infrastructure | ❌ | AWS Route 53 | DNS management |
| Language | ✅ | TypeScript | Across all packages and apps |
| Monorepo | ✅ | TurboRepo | Task orchestration and build caching |
| Monorepo | ✅ | npm | Package management |
| Styling | ✅ | Tailwind CSS | Utility-first styling |
| Testing | ❌ | Playwright | End-to-end testing (stretch goal) |
| Theming | ✅ | next-themes | Dark/light mode management |