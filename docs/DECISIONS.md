# Architecture Decision Records
> Auto-updated by the agent via `/sync-docs`. Do not manually reorder entries.
> Add new entries at the bottom. ADR numbers are sequential and permanent.

---

## ADR-001: Repository Structure
**Date:** 2026-03-12
**Status:** Accepted
**Context:** Chosen during project bootstrap
**Decision:** Single-app structure — portfolio is purely frontend, no backend services needed.
**Consequences:** Simpler repo, no workspace or monorepo tooling required.

---

## ADR-002: Frontend Stack
**Date:** 2026-03-12
**Status:** Accepted
**Context:** Chosen during project bootstrap
**Decision:** Next.js 15 (App Router) + TypeScript + Tailwind CSS. No component library.
**Consequences:** Server components available by default; `output: "standalone"` enables Docker deployment. Tailwind keeps bundle lean without a component lib.

---

## ADR-003: Backend Stack
**Date:** 2026-03-12
**Status:** Accepted
**Context:** Chosen during project bootstrap
**Decision:** No backend. All portfolio content lives in JSON files at `src/data/` checked into the repo.
**Consequences:** Zero infra cost; no API surface to maintain. Content updates require a rebuild and redeploy.

---

## ADR-004: Docker containerization
**Date:** 2026-03-12
**Status:** Accepted
**Context:** Chosen during project bootstrap
**Decision:** Multi-stage Dockerfile with Next.js standalone output; docker-compose for local runs.
**Consequences:** Portable deployment to any container host. `output: "standalone"` in next.config.ts is required.

---

_New ADRs added below this line by the agent_
