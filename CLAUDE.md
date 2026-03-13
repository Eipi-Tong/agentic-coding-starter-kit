# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repository Is

This is an **agentic coding starter kit** — a reusable template for bootstrapping new projects that will be developed with Claude Code. It is not an application itself; it is a meta-project containing agent governance rules, prompt templates, and documentation scaffolding.

When a developer starts a new project using this kit, the agent's first job is to collect requirements via the bootstrap form, then generate a complete project scaffold (frontend, backend, tooling, docs, agent config) based on the developer's choices.

## Repository Structure

```
.agent/
  rules/
    decision-boundaries.md   # What the agent can decide vs. must ask about
    definition-of-done.md    # Completion criteria for every task
  templates/
    bootstrap-form.md        # Form filled out by the developer to start a new project
    required-artifacts.md    # List of files every generated project must contain
docs/
  requirements/
    project-summary.md       # Filled in after bootstrap; describes the generated project
AGENTS.md                    # Project-specific agent instructions (filled in per project)
```

## Agent Workflow

### Starting a New Project

1. Developer fills out `.agent/templates/bootstrap-form.md` with project name, product type, features, tech stack, and tooling preferences.
2. The agent reviews the form, asks clarifying questions on any blanks, then proposes a project scaffold.
3. The agent generates the structure and populates `docs/requirements/project-summary.md` and `AGENTS.md` with project-specific context.

### Required Artifacts for Every Generated Project

Per `.agent/templates/required-artifacts.md`, every project must include:
- `docs/architecture/project-summary.md`
- `.agent/templates/bootstrap-form.md`
- `.agent/rules/decision-boundaries.md`
- `.agent/rules/definition-of-done.md`
- `.agent/templates/feature-request.md`
- `.agent/templates/bugfix-request.md`
- `.agent/templates/refactor-request.md`
- `README.md`

## Decision Boundaries

From `.agent/rules/decision-boundaries.md`:

**Agent may decide autonomously:**
- Function names, helper utilities, file organization within existing modules
- Test case structure, mock strategies, coverage improvements
- Clarifying comments, usage instructions, architecture summaries
- Internal refactors that preserve behavior, dead code removal

**Agent must ask before:**
- Switching frameworks or changing project structure
- Database schema changes or migrations
- Breaking API contract changes (endpoint renaming, response format)
- Adding large third-party dependencies or infrastructure services
- Any authentication, authorization, or encryption changes
- CI/CD architecture or cloud provider changes

**When uncertain:** Stop, explain the ambiguity, offer 2–3 options, ask the user. Never silently guess architectural decisions.

**Agent must never:** Delete large sections of code without confirmation, introduce secrets into the repo, break the build without noting it, or modify infrastructure config without approval.

## Definition of Done

From `.agent/rules/definition-of-done.md`, a task is complete only when:

1. **Code** — functionality is implemented, follows project conventions, avoids unnecessary complexity
2. **Tests** — added/updated where applicable; existing tests pass (explain if not applicable)
3. **Lint/Type/Build** — project remains in a healthy state; note if checks cannot run
4. **Docs** — updated if the change affects setup, public APIs, architecture decisions, developer workflows, or user-visible behavior
5. **Assumptions** — any assumptions made are documented
6. **Summary** — final summary provided: what was implemented, files changed, remaining risks, suggested next steps
