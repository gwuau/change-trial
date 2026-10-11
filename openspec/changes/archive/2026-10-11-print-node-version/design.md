# Design

## Implementation Decisions

- Add one named step, Print Node version, running `node --version` in the existing test job.
- Place it after setup-node has selected Node 22 and immediately before `npm test`.
- Preserve existing triggers, runner, action versions, Node selection and tests. Do not add permissions or credentials.
- This is tooling only: skip_specs is true; no product spec changes.

## Seams Under Test

- GitHub Actions job steps and log: catches the active runtime version, ordering and actual test success; does not test unrelated runner internals. Gavin approved this seam.

## Testing Decisions

- Prior art: the existing required test job runs `npm test` on pull requests and pushes to main.
- RED: assert that the prior main run's steps contain Print Node version; the assertion must fail before the workflow changes.
- GREEN: run the changed workflow on a pull request, verify the named step succeeds and logs a Node version before test output, and confirm the existing test job succeeds on the exact head SHA.
- Run `env -u GITHUB_TOKEN -u GH_TOKEN npm test` locally as a regression check. Local Node version output is not a substitute for GitHub Actions evidence.
- After archive, repeat the CI log check on the final Tested-SHA. Record the selected run id and verification command in the journal.

## ADRs

None. A reversible logging step has no significant design trade-off.
