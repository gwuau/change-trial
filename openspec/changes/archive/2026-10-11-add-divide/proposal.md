# Proposal

## Why

Gavin wants division alongside addition and multiplication, with a clear error for a zero divisor instead of a non-finite result.

## What Changes

- Add a callable divide(a, b) returning normal numeric division for nonzero divisors.
- Throw RangeError with message “Cannot divide by zero” for both positive and negative zero divisors, including zero divided by zero.
- Test the exported function with positive, negative, zero-numerator and binary-exact fractional inputs, plus the zero-divisor error contract.
- Leave addition, multiplication and CI unchanged.

## Capabilities

### New Capabilities

- `division`: numeric division with a clear zero-divisor error.

### Modified Capabilities

None. The existing multiplication specification is unchanged.

## Impact

One new public arithmetic function and its tests. No dependencies, external services, production deployment or CI changes.

## Out of Scope

Other input checks, extra numeric types, type-coercion guarantees, approximate comparison, changes to existing functions or CI, and broader tooling work.

## Assumptions

- Use the existing standalone CommonJS export and standard-library test/assertion conventions.
- Native division and a zero check need no new dependencies.
