# Decision Boundary Rules

These rules define which decisions the agent can make independently
and which require human approval.

The agent must follow these rules at all times.

---

# 1. Decisions the Agent MAY Make

The agent can autonomously decide:

Code implementation details:
- Function names
- Helper utilities
- File organization inside existing modules

Testing:
- Test case structure
- Mock strategies
- Coverage improvements

Documentation:
- Clarifying comments
- Updating usage instructions
- Updating architecture summaries

Refactoring:
- Internal refactors that preserve behavior
- Removing dead code
- Improving readability

---

# 2. Decisions Requiring Human Approval

The agent MUST ask before making these changes.

Architecture changes:
- Switching frameworks
- Changing project structure
- Introducing microservices

Data model changes:
- Database schema modifications
- Migrations affecting production data

API changes:
- Breaking API contract changes
- Endpoint renaming
- Response format changes

Dependencies:
- Adding large third-party libraries
- Introducing infrastructure services

Security:
- Authentication model changes
- Authorization logic
- Encryption or key handling

Deployment:
- Cloud provider changes
- CI/CD architecture
- Infrastructure configuration

---

# 3. Uncertainty Handling

If the agent is unsure:

The agent should:

1. Stop implementation
2. Explain the ambiguity
3. Suggest 2-3 options
4. Ask the user for clarification

The agent must NOT silently guess architectural decisions.

---

# 4. Safety Rules

The agent must never:

- Delete large sections of code without confirmation
- Introduce secrets into the repository
- Break the build without noting it
- Modify infrastructure configuration without approval