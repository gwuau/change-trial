# Design

## Implementation Decisions

- Direct CommonJS export clamp(x, lo, hi), following the existing helper convention.
- Check numeric NaN in each position first and return NaN, preserving the agreed any-NaN rule even with reversed bounds.
- Then reject lo > hi with RangeError and exact message Lower bound must not exceed upper bound.
- Return Math.min(Math.max(x, lo), hi) for other inputs; native math handles inclusive/equal bounds and infinities. No type checks or dependencies.
- NaN detection is propagation, not rejection. Special signed-zero and non-number/coercion contracts stay out of scope.

## Seams Under Test

- Exported clamp function: catches range results, endpoint/equal-bound behavior, NaN precedence, infinities and error type/message; misses deliberately out-of-scope type validation, coercion and special signed-zero guarantees. Gavin accepted the exported seam.

## Testing Decisions

- Prior art: adds two numbers, multiplies binary-exact decimals and rejects a positive zero divisor use node:test and node:assert at exported seams.
- Tracer bullet: below-range test fails with absent module, then minimal native clamp makes it green.
- Error tracer bullet: reversed-bound test fails with missing expected exception, then the agreed guard makes it green.
- NaN tracer bullet: NaN x with reversed bounds fails due to the guard, then NaN-first handling makes it green.
- Add remaining range, endpoint/equal-bound, negative/fractional and non-finite groups one at a time, checking the exported seam after each.
- Expected results are independent literals from the scenarios. Use strictEqual for numbers, Number.isNaN for NaN, and an error predicate checking instanceof RangeError plus exact message.
- Full npm test keeps all existing helpers green.

## ADRs

None. A small additive helper has no hard-to-reverse design decision.
