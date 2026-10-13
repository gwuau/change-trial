# Design

## Implementation Decisions

- Direct CommonJS export modulo(a, b), matching the existing arithmetic functions.
- Guard b === 0, which covers both signs of zero; throw RangeError with exact message Cannot modulo by zero.
- Otherwise return native a % b. Do not normalize negative results or signed zero. No other checks or dependencies.
- The public name remains modulo as requested; its agreed contract is remainder, not non-negative mathematical modulo.

## Seams Under Test

- Exported modulo function: catches arithmetic results, signs including -0, fractional inputs and zero-divisor error type/message; misses out-of-scope other input validation and extra numeric types. Gavin accepted this seam.

## Testing Decisions

- Prior art: adds two numbers, multiplies binary-exact decimals and rejects a negative zero divisor use node:test and node:assert at exported seams.
- Tracer bullet: positive remainder test fails with missing module, then native remainder makes it green.
- Error tracer bullet: positive-zero divisor test fails with missing expected exception, then add the zero guard and agreed error.
- Add negative inputs, exact multiples, signed-zero dividends, binary-exact fractions and remaining zero-divisor cases one group at a time; verify after each group.
- Strict literal expectations: 5 % 3 gives 2; -5 % 3 gives -2; 5 % -3 gives 2; -5 % -3 gives -2; 6 % 3 gives 0; -6 % 3 gives -0; 1.5 % 1 gives 0.5; 1.25 % 0.5 gives 0.25. Strict assertions distinguish 0 from -0.
- Error assertions check RangeError and the exact message. Use descriptive case names; avoid an abstraction that hides the error contract.
- Full npm test preserves all existing arithmetic tests.

## ADRs

None. This small additive feature is easy to reverse.
