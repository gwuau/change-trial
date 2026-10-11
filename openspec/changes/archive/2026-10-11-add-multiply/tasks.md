# Tasks

## 1. Add numeric multiplication

Blocked by: none
Delivers: callers can multiply positive, zero, negative and binary-exact decimal numbers through a directly exported function.

- [x] 1.1 RED: add the positive-number test at the agreed public seam; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test multiply.test.js` fails because the multiply module does not exist.
- [x] 1.2 Implement the minimal exported multiplication function; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test multiply.test.js` passes.
- [x] 1.3 Add zero, negative and binary-exact decimal cases one case at a time with literal expected values; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test multiply.test.js` after each addition.
- [x] 1.4 verify: `env -u GITHUB_TOKEN -u GH_TOKEN npm test`.

## Workflow follow-up

- Run the two-axis code review and strict OpenSpec validation.
- Archive the approved change and retest the clean archive commit.
- Open the PR, wait for required checks, then merge within authority and verify the default-branch result.
