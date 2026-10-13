# Tasks

## 1. Add remainder with a zero-divisor error

Blocked by: none
Delivers: callers get native numeric remainders for nonzero divisors and the agreed error for either sign of zero divisor.

- [x] 1.1 RED: add an exported-seam positive remainder test; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test modulo.test.js` fails with missing module.
- [x] 1.2 Add minimal native remainder export; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test modulo.test.js` passes.
- [x] 1.3 RED: add positive-zero divisor error test; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test modulo.test.js` fails with missing expected exception.
- [x] 1.4 Add zero guard and agreed RangeError; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test modulo.test.js` passes.
- [x] 1.5 Add signs, exact multiples, signed-zero dividends, binary-exact fractions, negative-zero divisor and zero/zero errors one group at a time; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test modulo.test.js` after each group.
- [x] 1.6 verify: `env -u GITHUB_TOKEN -u GH_TOKEN npm test` and `env -u GITHUB_TOKEN -u GH_TOKEN openspec validate add-modulo --strict`.

## Workflow follow-up

- Run Standards and Spec reviews; archive and sync specs; test the clean archive commit and frozen scope.
- Open PR, verify exact-head checks, merge within authority and verify default branch tree and post-merge checks.
