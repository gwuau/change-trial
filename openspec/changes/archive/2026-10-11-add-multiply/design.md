# Design

## Implementation Decisions

- Match sum: a standalone CommonJS module exporting the multiply(a, b) function directly.
- Use native numeric multiplication. No argument checks or extra types.
- Leave the existing addition module and tests unchanged.
- No dependencies, service calls, or CI changes.

## Seams Under Test

- The directly exported multiply function: catches wrong numeric results and export shape; does not cover input validation or other numeric types, which are outside scope. Gavin approved this seam in round 1.

## Testing Decisions

- Prior art: the existing “adds two numbers” test uses node:test and node:assert with strictEqual.
- Positive case: 2 × 3 = 6.
- Zero cases: 0 × 7 = 0 and 7 × 0 = 0.
- Negative cases: -2 × 3 = -6 and -2 × -3 = 6.
- Decimal cases: 1.5 × 2 = 3 and 0.5 × 0.5 = 0.25. Gavin chose binary-exact decimals so strictEqual needs no tolerance.
- Work one tracer bullet at a time: first test goes red because the module is absent; minimal implementation makes it green; add the remaining behaviour cases without inventing implementation complexity.
- Full npm test keeps the existing addition test green.

## ADRs

None. These conventional, reversible choices do not warrant an ADR.
