# Agentic Coding Starter Kit

A reusable Claude Code starter kit for web projects. Drop it into any new repo and get a structured agent workflow out of the box — with consistent commits, living docs, and clear rules for what the agent does versus what you decide.

---

## What's included

```
CLAUDE.md                        ← Agent's operating manual (read every session)
SPEC.md                          ← Living project spec (human + agent co-own)
docs/
  DECISIONS.md                   ← Architecture decision log (ADRs)
.claude/
  BOOTSTRAP_FORM.md              ← Fill this once to configure your project
  rules/
    approval-gates.md            ← Actions that require human sign-off
    commit-rules.md              ← Conventional Commits enforcement
    definition-of-done.md        ← Checklist the agent runs before every commit
    doc-sync.md                  ← How the agent keeps docs in sync with code
  skills/
    bootstrap/SKILL.md           ← /bootstrap — scaffold a new project
    new-feature/SKILL.md         ← /new-feature — plan and build a feature
    refactor/SKILL.md            ← /refactor — plan and execute a refactor (behaviour preserved)
    sync-docs/SKILL.md           ← /sync-docs — update spec and decision log
    commit/SKILL.md              ← /commit — guided Conventional Commit
```

---

## Getting started

**1. Fill in the bootstrap form**

Open `.claude/BOOTSTRAP_FORM.md` and fill in your tech stack choices. Every field you leave as `~` will be asked about interactively during bootstrap.

**2. Run bootstrap**

Open Claude Code in the project root and run:

```
/bootstrap
```

The agent will read your form, scaffold the directory structure, generate starter config files, initialise git, and populate `SPEC.md` and `docs/DECISIONS.md`.

**3. Add your first features to SPEC.md**

Open `SPEC.md` and add feature descriptions under `### Backlog`. These are yours to write — the agent only updates status markers and the changelog.

**4. Start building**

Use `/new-feature` to kick off any feature. The agent will ask one clarifying question if needed, present a plan for your approval, then execute step by step with commits along the way.

---

## Slash commands

| Command | What it does |
|---|---|
| `/bootstrap` | Scaffold a new project from `.claude/BOOTSTRAP_FORM.md` |
| `/new-feature` | Plan and build a feature request |
| `/refactor` | Plan and execute a refactor with preserved behaviour |
| `/sync-docs` | Update `SPEC.md` and `docs/DECISIONS.md` after code changes |
| `/commit` | Create a well-formed Conventional Commit with pre-commit checks |

---

## How ownership is divided

| Agent does autonomously | Human must approve |
|---|---|
| Write and edit code | Tech stack choices |
| Run lint, type-check, tests | Architecture decisions |
| Commit on non-protected branches | Merges to protected branches |
| Update `SPEC.md` status and changelog | Feature descriptions and acceptance criteria |
| Log ADRs to `DECISIONS.md` | Decisions that contradict existing ADRs |
| Generate boilerplate and config | New dependencies not in the original stack |

A full list of approval gates is in `.claude/rules/approval-gates.md`.

---

## How to request a feature

Use this template when prompting the agent:

```
## Feature Request

**What:** <one sentence — what the feature does>

**Why:** <user story or business reason>

**Acceptance criteria:**
- [ ] <testable outcome 1>
- [ ] <testable outcome 2>

**Scope:**
- In: <what to build>
- Out: <what NOT to touch>

**Notes:** <edge cases, API contracts, design constraints>
```

Or just run `/new-feature` and the agent will ask you the right questions.

---

## Design principles

**Lean context.** `CLAUDE.md` is kept under 30 lines and acts as an index. Detail lives in `.claude/rules/` and `.claude/skills/`, loaded on demand rather than injected into every session.

**Rules vs skills.** Rules (`.claude/rules/`) are reference content the agent reads passively when relevant. Skills (`.claude/skills/`) are task workflows invoked explicitly with a slash command.

**Human owns decisions, agent owns execution.** The agent never chooses a tech stack, expands scope, or merges to a protected branch. `SPEC.md` has explicit ownership comments so neither side overwrites the other's work.

**Commit discipline.** Every commit follows [Conventional Commits](https://www.conventionalcommits.org/). The `/commit` skill runs lint and type-check before staging anything, and shows the commit message for confirmation before writing it.

---

## Reusing this kit

Copy the entire `.claude/` directory, `CLAUDE.md`, and `SPEC.md` into any new project. Then:

1. Clear `SPEC.md` down to the template placeholders
2. Re-fill `.claude/BOOTSTRAP_FORM.md` for the new project's stack
3. Run `/bootstrap`

Everything else carries over unchanged.

---

## Contributing
 
Contributions welcome. Good places to start:
 
- Add rules for a workflow not yet covered (e.g. code review, hotfix, release)
- Add an example project for a stack not yet represented
- Improve the wording of existing rules or skills for clarity and consistency
