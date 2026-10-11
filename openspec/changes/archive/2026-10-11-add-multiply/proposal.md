# Proposal

## Why

Gavin wants a second tiny feature in the trial library so the change-agent workflow can handle a tested addition without changing the existing sum feature.

## What Changes

- Add a callable multiply(a, b) that returns the product of two numbers.
- Test positive numbers, zero, negative numbers, and binary-exact decimals using strict equality.
- Keep the existing sum behaviour unchanged.

## Capabilities

### New Capabilities

- `multiplication`: calculate the product of two numeric inputs.

### Modified Capabilities

None.

## Impact

One new public function and its tests. No dependencies, services, deployment, or CI changes.

## Out of Scope

Input validation, type coercion guarantees, extra numeric types, approximate comparison, changes to sum, and broad documentation or tooling work.

## Assumptions

- Use the existing standard-library test runner and assertions: the current addition test already uses them.
- No new dependencies are needed: JavaScript already provides multiplication.
