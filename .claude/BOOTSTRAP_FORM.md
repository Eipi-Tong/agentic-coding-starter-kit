# BOOTSTRAP FORM
> Fill in this file before running `/project:bootstrap`.
> The agent will read your answers and scaffold the project accordingly.
> Leave any field as `~` if you want the agent to recommend a default.

---

## 1. Project Identity

```
Project name:       Self Portfolio
Short description:  A single-page application self portfolio, including contact information, education, work experience, projects, skills. All information can be changed in json files.
Primary language:   TypeScript        # e.g. TypeScript, Python, Go
Target platform:    web        # e.g. web, mobile-web, desktop, API-only
```

---

## 2. Repository Structure

```
Structure:          single-app        # monorepo | polyrepo | single-app
# monorepo   → frontend/ backend/ packages/ all in one repo
# polyrepo   → separate repos per service (agent will only scaffold one at a time)
# single-app → no backend, frontend only (or backend only)

Top-level dirs:     ~        # only for monorepo — e.g. apps/web, apps/api, packages/ui
```

---

## 3. Frontend

```
Include frontend:   yes        # yes | no

Framework:          Next.js        # Next.js | Remix | SvelteKit | Nuxt | Vite+React | Vue | none
Styling:            Tailwind        # Tailwind | CSS Modules | styled-components | UnoCSS | none
Component lib:      none        # shadcn/ui | Radix | MUI | Chakra | none
State management:   ~        # Zustand | Jotai | Redux Toolkit | React Query | none
Auth (frontend):    none        # NextAuth | Clerk | Supabase Auth | none
```

---

## 4. Backend

```
Include backend:    no        # yes | no

Runtime:            ~        # Node.js | Python | Go | Rust | none
Framework:          ~        # Express | Fastify | Hono | FastAPI | Django | Gin | none
Database:           ~        # PostgreSQL | MySQL | SQLite | MongoDB | none
ORM / query:        ~        # Prisma | Drizzle | SQLAlchemy | GORM | raw SQL | none
Auth (backend):     ~        # JWT | session | Supabase | Auth.js | none
API style:          ~        # REST | tRPC | GraphQL | none
```

---

## 5. Infrastructure & Deployment

```
Containerize:       yes        # yes | no  (generates Dockerfile + docker-compose)
Cloud target:       none        # Vercel | Railway | Fly.io | AWS | GCP | self-hosted | none
CI/CD:              none        # GitHub Actions | GitLab CI | none
Environment vars:   none        # .env.local | Doppler | AWS Secrets | none
```

---

## 6. Tooling

```
Package manager:    yarn        # npm | pnpm | yarn | bun | pip | uv
Linter:             ESLint        # ESLint | Biome | Ruff | none
Formatter:          none        # Prettier | Biome | Black | none
Testing framework:  none        # Vitest | Jest | Pytest | Playwright | none
Git hooks:          none        # Husky + lint-staged | lefthook | none
Commit convention:  none        # Conventional Commits | none
```

---

## 7. Agent Behaviour Preferences

```
Auto-commit:        yes        # yes | no  (agent commits after every completed task)
Doc sync:           yes        # yes | no  (agent updates SPEC.md when code changes)
PR descriptions:    no        # yes | no  (agent writes PR body on push)
Notify on:          never        # commit | pr | never  (when agent should pause for human review)
```

---

## 8. Team & Context

```
Solo or team:       solo        # solo | team
Main branch:        main        # main | master
Protected branches: main        # e.g. main, staging
Code review:        none        # required | optional | none
```

---

## 9. Anything Else

```
Notes for agent:    ~
# Add anything that doesn't fit above — special constraints, existing services to integrate,
# non-standard folder conventions, etc.
```