# AGENTS.md

This repository is Gavin's small change-agent trial: a CommonJS JavaScript addition function with a Node.js test. Keep adoption and later changes small; do not introduce frameworks or dependency installs for a project that needs only Node's standard library.

## Commands

- Install: none; there are no dependencies.
- Test (all): `npm test` · Test (one file): `node --test sum.test.js`
- Typecheck: not configured · Lint: not configured
- OpenSpec CLI: `1.14.1`, pinned. Upgrades are Gavin's call.
- CI uses Node.js 22 and runs `npm test` in the required `test` job.

## Rules

- Never commit to `main`. Work on `change/<change-id>`.
- New dependencies need a one-line justification in the change journal.
- Tests verify behaviour at the seams agreed in the change's `design.md`. No tests against internals.

## Agent skills

### Issue tracker

OpenSpec change folders are the tracker. A spec is `openspec/changes/<id>/{proposal.md, specs/, design.md}`. Tickets are the `## N.` slices in `tasks.md` with their `Blocked by:` lines. A ticket is done when all of its checkboxes are ticked. Larger efforts are mapped with wayfinder under `openspec/explorations/<effort>/` (local-markdown layout: `map.md` + `issues/NN-<slug>.md`).

### Domain docs

Single-context: `GLOSSARY.md` at the root and ADRs in `docs/adr/`. Create them lazily.

## Merge and preview

- Merge deploys to production: `false`. The checked-in CI only tests pull requests and pushes to `main`; no deployment or hosting config is present.
- PR preview: none. This is a library-only trial with no web app or build artifact. The test run is evidence, not a clickable preview.
- If a user-facing app is added, Gavin must choose and set up a PR preview before it is documented here.
