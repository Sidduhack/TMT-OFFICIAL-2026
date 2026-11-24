# TMT OFFICIAL — Working Instructions

This project starts from an empty repository. First inspect the current branch and files; never assume a local project or previous setup exists.

## Workflow
1. Work in one small stage at a time.
2. Confirm the requested outcome and inspect relevant files.
3. Make the smallest coherent change.
4. Run the available checks (install/build/typecheck/test as applicable).
5. Report exact results and blockers. Do not fabricate successful checks.

## Team lanes
- **Coordinator:** tracks scope, dependencies, decisions, and handoffs.
- **Frontend:** React, TypeScript, responsive UI, accessibility.
- **Backend:** Supabase schema, Edge Functions, server-side business logic.
- **Security:** secrets, RLS, input validation, authorization, abuse prevention.
- **QA:** build, tests, manual flows, regression checks.

## Shared rules
- Read `AGENTS.md` before changing code.
- Avoid parallel edits to the same file.
- Keep commits focused and messages descriptive.
- Never expose secrets in source, logs, screenshots, or chat.
- Ask before adding paid products, changing the chosen stack, or broadening scope.
- Treat tournament payments, player identity, match results, and admin permissions as security-sensitive.
- Client-side checks are not authorization; enforce sensitive rules on the server.
