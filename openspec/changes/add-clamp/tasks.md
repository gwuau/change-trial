# Tasks

## 1. Add inclusive clamping with a clear range contract

Blocked by: none
Delivers: callers limit values to inclusive bounds, propagate NaN, allow infinities and catch reversed-range errors.

- [ ] 1.1 RED: add an exported-seam below-range test; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test clamp.test.js` fails with missing module.
- [ ] 1.2 Add minimal native clamp export; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test clamp.test.js` passes.
- [ ] 1.3 RED: add reversed-range error test; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test clamp.test.js` fails with missing expected exception.
- [ ] 1.4 Add range guard and agreed RangeError; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test clamp.test.js` passes.
- [ ] 1.5 RED: add NaN with reversed bounds test; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test clamp.test.js` fails due to unexpected RangeError.
- [ ] 1.6 Add NaN-first propagation; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test clamp.test.js` passes.
- [ ] 1.7 Add inside/above, endpoints/equal bounds, negatives, binary-exact fractions, NaN positions, finite/infinite values/bounds and reversed infinite bounds one group at a time; verify `env -u GITHUB_TOKEN -u GH_TOKEN node --test clamp.test.js` after each group.
- [ ] 1.8 verify: `env -u GITHUB_TOKEN -u GH_TOKEN npm test` and `env -u GITHUB_TOKEN -u GH_TOKEN openspec validate add-clamp --strict`.

## Workflow follow-up

- Run Standards and Spec reviews; archive and sync specs; verify full suite and frozen scope on the clean archive commit.
- Open PR, check exact-head CI, merge within authority and verify the default branch tree and post-merge CI.
