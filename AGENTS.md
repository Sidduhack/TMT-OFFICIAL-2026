# TMT OFFICIAL — Project Rules

## Project status
This repository is being built from scratch. Do not assume existing app code, dependencies, infrastructure, or environment configuration unless verified in the repository.

## Product direction
TMT OFFICIAL is a Free Fire esports and tournament platform. Build in small, verified stages. Prioritize a responsive, premium dark esports interface and accessible, maintainable code.

## Stack
- React + TypeScript + Vite for the web client.
- Supabase for PostgreSQL, Auth, Row Level Security, Storage, and Edge Functions.
- Cloudflare Pages/Workers for hosting and server-side edge workloads.
- GitHub for source control.

## Hard rules
- Free-tier-first. Do not introduce paid services or usage commitments without explicit approval.
- Never commit secrets, API keys, service-role keys, access tokens, or real user data.
- Supabase service-role credentials must only exist in trusted server-side environments.
- Do not claim a feature is secure or complete without tests or verification.
- Avoid unnecessary dependencies. Explain why a new dependency is needed.
- Keep changes focused and buildable. Verify before moving to the next stage.
- Preserve existing user work. Inspect before replacing or deleting files.

## Collaboration roles
- Product/architecture: define scope, constraints, routes, and data boundaries.
- UI implementation: build responsive components and states from approved requirements.
- Backend/security: design database, RLS, auth, and server-side validation.
- QA/release: run checks, review regressions, and document deployment steps.

## Coordination
- Use this file as the canonical project policy.
- Keep `agentinstructions.md` aligned with this file.
- Before implementation, state the goal and files to change.
- After implementation, report files changed, checks run, and unresolved issues.
- Do not silently change product scope, providers, branding, or deployment architecture.
- Do not merge pull requests unless explicitly asked.
