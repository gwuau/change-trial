# Tasks

## 1. Report the CI Node runtime

Blocked by: none
Delivers: each existing CI trigger prints the selected Node version directly before tests, with unchanged test behaviour.

- [ ] 1.1 RED: verify the existing run lacks the named step with `gh run view 38108818331 --repo gwuau/change-trial --json jobs --jq '.jobs[].steps[].name' | python3 -c 'import sys; assert "Print Node version" in sys.stdin.read()'`; expect assertion failure.
- [ ] 1.2 Add only the named version-print step after setup and before tests; verify `env -u GITHUB_TOKEN -u GH_TOKEN npm test` passes and inspect the workflow diff for no other changes.
- [ ] 1.3 Push the approved branch and open its PR to run CI; verify its head-matching run using `gh run view <actual-run-id> --repo gwuau/change-trial --log`, checking the named step's version output before tests and a passing test job. Record the exact resolved command and run id in the journal.
- [ ] 1.4 verify: `env -u GITHUB_TOKEN -u GH_TOKEN npm test` and `env -u GITHUB_TOKEN -u GH_TOKEN openspec validate print-node-version --strict`.

## Workflow follow-up

- Review Standards and Proposal compliance; archive the tooling-only change without spec deltas.
- Retest the clean archive commit and verify CI version output and ordering on that exact SHA.
- Finish as a green reviewed PR for Gavin's code-owner approval. Do not merge before his verified approval on the tested head.
