# Design

## Implementation Decisions

- Match sum and multiply: directly export one CommonJS divide(a, b) function.
- Check b === 0 before division; JavaScript strict equality matches both 0 and -0. Throw RangeError with exact message Cannot divide by zero.
- For other numeric inputs return native a / b. No further checks or extra types.
- Existing functions and CI stay unchanged. No dependencies added.

## Seams Under Test

- The directly exported divide function: catches quotient results, zero-divisor error type/message and module export shape; does not cover out-of-scope input validation or extra numeric types. Gavin approved this seam and contract.

## Testing Decisions

- Prior art: “adds two numbers” and the multiply tests use node:test and node:assert strictEqual through exported functions.
- Tracer bullet 1: positive quotient test fails while module is absent; native division makes it pass.
- Tracer bullet 2: add a zero-divisor assert.throws test, observe missing exception with native division, then add only the zero check and RangeError.
- Add remaining cases one group at a time and check after each: negative operands; zero numerator; binary-exact fractional quotients; -0 and zero/zero error cases.
- Use literal expected results: 6/3 → 2, -6/3 → -2, 6/-3 → -2, -6/-3 → 2, 0/2 → 0, 3/2 → 1.5, 0.25/0.5 → 0.5.
- assert.throws checks RangeError and the exact message; strictEqual checks quotients. No approximate comparisons.
- Full npm test must keep sum and multiply tests green.

## ADRs

None. A small, reversible arithmetic function warrants no ADR.
