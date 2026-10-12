# Proposal

## Why

Library callers need powers alongside the existing arithmetic operations. Non-negative integer exponents give this small addition a clear supported range.

## What Changes

- Expose power(base, exponent), returning native numeric exponentiation for supported exponents without extra base checks.
- Accept non-negative integer Number exponents; treat negative zero as zero.
- Return 1 for exponent zero, including zero raised to zero.
- Reject negative, fractional, non-finite and non-number exponents with RangeError and exact message "Exponent must be a non-negative integer".
- Test the public function with positive, negative, zero and binary-exact fractional bases, zero/one/larger exponents and invalid exponents.

## Capabilities

### New Capabilities

- `exponentiation`: powers with a non-negative integer exponent contract.

### Modified Capabilities

None. Division and multiplication requirements remain unchanged.

## Impact

One additive arithmetic function and its tests. No dependencies, services, production deploy or CI changes.

## Out of Scope

- Negative or fractional exponents.
- Extra base validation, extra numeric types, coercion guarantees, safe-integer restrictions or overflow protection.
- Changes to existing arithmetic functions or CI.

## Assumptions

- Match the existing standalone CommonJS exports and Node standard-library tests, as the arithmetic modules and project guidance prescribe.
- Native exponentiation and standard-library validation need no dependency.
