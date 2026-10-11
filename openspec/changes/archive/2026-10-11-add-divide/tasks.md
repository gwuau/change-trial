# Tasks

## 1. Add division with a zero-divisor error

Blocked by: none
Delivers: callers get numeric quotients for nonzero divisors and the agreed RangeError for either sign of zero divisor.

- [x] 1.1 RED: write a positive-quotient test at the exported seam; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test divide.test.js` fails because the module is absent.
- [x] 1.2 Implement the minimal direct export with native division; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test divide.test.js` passes.
- [x] 1.3 RED: add the positive-zero divisor test checking RangeError and exact message; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test divide.test.js` fails because no exception is thrown.
- [x] 1.4 Add the zero-divisor guard and agreed error; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test divide.test.js` passes.
- [x] 1.5 Add negative, zero-numerator, binary-exact fraction, -0 and zero/zero cases one group at a time; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test divide.test.js` after each group.
- [x] 1.6 verify: `env -u GITHUB_TOKEN -u GH_TOKEN npm test` and `env -u GITHUB_TOKEN -u GH_TOKEN openspec validate add-divide --strict`.

## Workflow follow-up

- Run Standards and Spec reviews, archive, then test the clean archive commit and frozen scope.
- Open the PR and wait for required checks on Tested-SHA; merge within authority and verify the default branch tree and post-merge checks.
