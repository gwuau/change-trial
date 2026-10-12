# Tasks

## 1. Add powers with a supported-exponent contract

Blocked by: none
Delivers: callers can calculate numeric powers for non-negative integer exponents and catch the agreed error for invalid exponents.

- [x] 1.1 RED: add a positive-base power test through the export; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test power.test.js` fails with missing module.
- [x] 1.2 Add the minimal native power export; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test power.test.js` passes.
- [x] 1.3 RED: add a negative-exponent error test; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test power.test.js` fails with missing expected exception.
- [x] 1.4 Add exponent validation and the agreed RangeError; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test power.test.js` passes.
- [x] 1.5 Add zero and -0 exponents, exponent one, negative/zero/fractional bases, fractional/non-finite/non-number invalid exponents and invalid exponent with zero base one group at a time; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test power.test.js` after each group.
- [x] 1.6 verify: `env -u GITHUB_TOKEN -u GH_TOKEN npm test` and `env -u GITHUB_TOKEN -u GH_TOKEN openspec validate add-power --strict`.

## Workflow follow-up

- Run Standards and Spec reviews; archive and sync specs, then verify full suite and frozen scope on the clean archive commit.
- Open PR, verify checks on Tested-SHA, merge within authority and verify the default branch tree and post-merge checks.
