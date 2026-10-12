# Design

## Implementation Decisions

- Directly export a CommonJS power(base, exponent) function, matching the existing arithmetic modules.
- Reject an exponent unless Number.isInteger(exponent) and exponent >= 0. This accepts -0 and rejects NaN, infinities and non-number values without coercion. Throw RangeError with exact message Exponent must be a non-negative integer.
- Return native base ** exponent after the guard. Avoid a multiplication loop: the existing library uses native operators, and exponent size must not cause a linear-time loop.
- No extra base checks, dependencies, safe-integer restriction or overflow handling. Existing arithmetic and CI unchanged.

## Seams Under Test

- Exported power function: catches quotient-free power results, supported exponent boundaries and invalid-exponent error type/message; misses intentionally out-of-scope base validation and extra numeric types. Gavin approved this seam.

## Testing Decisions

- Prior art: adds two numbers, multiplies binary-exact decimals, and division error cases use node:test and node:assert through exported functions.
- First tracer bullet: positive-base power test fails with absent module; minimal native exponentiation makes it green.
- Second tracer bullet: negative-exponent test fails because native exponentiation returns a result; add only the exponent guard and agreed error to make it green.
- Add supported boundary groups and invalid exponent groups one at a time, running the exported-seam tests after each group.
- Known literals: 2^3 = 8; 5^1 = 5; (-2)^2 = 4; (-2)^3 = -8; 0^3 = 0; 0.5^2 = 0.25; exponent 0 or -0 gives 1 including 0^0.
- assert.strictEqual checks results; assert.throws checks RangeError and exact message. Named table cases may keep invalid-input assertions clear without repeated contracts.
- Full npm test must preserve all existing arithmetic tests.

## ADRs

None. The additive arithmetic function is small and easy to revert.
