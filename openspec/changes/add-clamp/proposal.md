# Proposal

## Why

Change-trial users need to keep a numeric value within a chosen range without repeating boundary logic.

## What Changes

- Expose clamp(x, lo, hi), limiting x to inclusive lower and upper bounds; allow equal bounds.
- Return NaN if any input is NaN, including when the other inputs specify reversed bounds.
- Otherwise throw RangeError with exact message "Lower bound must not exceed upper bound" when lo exceeds hi; do not swap bounds.
- Allow infinite values and bounds, without extra type checks.
- Test the exported function below, inside and above the range, at endpoints/equal bounds, with negative and binary-exact fractional values, NaN/infinities and reversed bounds.

## Capabilities

### New Capabilities

- `clamping`: limit numeric values to an inclusive range.

### Modified Capabilities

None.

## Impact

One standalone helper and public-seam tests. No dependencies, external services, production deploy or CI changes.

## Out of Scope

Type validation, coercion guarantees, extra numeric types, swapping reversed bounds, special signed-zero guarantees, and changes to existing functions or CI.

## Assumptions

- Follow existing CommonJS exports and Node standard-library tests, based on project guidance and arithmetic modules.
- Native numeric comparisons and math functions suffice; no dependency needed.
- NaN takes precedence over reversed bounds, following the accepted promise that any NaN input returns NaN.
