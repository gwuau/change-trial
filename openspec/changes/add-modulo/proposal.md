# Proposal

## Why

Library callers need a remainder operation alongside the existing arithmetic functions, with a clear error for zero divisors.

## What Changes

- Expose modulo(a, b) using JavaScript remainder semantics, not a normalized mathematical modulo: the result follows the dividend's sign, including negative zero.
- Throw RangeError with exact message "Cannot modulo by zero" for either sign of zero divisor, including a zero dividend.
- Test the exported function for positive and negative inputs, exact multiples, zero dividends, binary-exact fractions and zero-divisor errors.
- Preserve existing arithmetic functions and CI.

## Capabilities

### New Capabilities

- `remainder`: numeric remainder with a clear zero-divisor error.

### Modified Capabilities

None.

## Impact

One standalone arithmetic function and its public-seam tests. No dependencies, services or production deployment.

## Out of Scope

Normalized mathematical modulo, other input checks, extra numeric types, coercion guarantees, overflow protection, and changes to existing functions or CI.

## Assumptions

- Follow existing CommonJS exports and Node standard-library tests, as project guidance and arithmetic modules prescribe.
- Native remainder and a zero check need no dependency.
