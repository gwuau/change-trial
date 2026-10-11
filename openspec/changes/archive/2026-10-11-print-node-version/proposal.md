# Proposal

## Why

Gavin wants to see which Node version ran the CI tests without having to infer it from setup output.

## What Changes

- Add a named “Print Node version” step after Node setup and directly before the tests.
- Print the active Node version on both existing workflow triggers.
- Keep the Node version selection, tests and all other workflow behaviour unchanged.

## Capabilities

### New Capabilities

None. This is a CI tooling/logging change, not a product capability.

### Modified Capabilities

None. Product behaviour and the multiplication spec are unchanged. Spec deltas are explicitly skipped for this tooling-only change.

## Impact

One extra CI command. No dependencies, services, production deployment or library API changes. The workflow is code-owned and requires Gavin's approval before merge.

## Out of Scope

Changing Node versions, triggers, tests, permissions, action versions, deployment, CODEOWNERS or branch rules.

## Assumptions

- Use the existing test job for both triggers rather than adding a job; it already sets up Node and runs the tests.
- The workflow's named step and log are the agreed test seam; no extra test framework is needed.
