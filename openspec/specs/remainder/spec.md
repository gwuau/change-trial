# remainder Specification

## Purpose
Let library callers calculate numeric remainders with JavaScript sign semantics while receiving a clear error for a zero divisor.

## Requirements

### Requirement: Calculate a numeric remainder

As a library caller, I want the remainder of division, so that I can calculate how much is left over. The library SHALL expose modulo(a, b), returning the native JavaScript numeric remainder for nonzero b, including native signed-zero results. No additional input validation SHALL be introduced.

#### Scenario: Positive inputs
- **GIVEN** the exported remainder function
- **WHEN** the caller evaluates modulo(5, 3)
- **THEN** the result is strictly equal to 2

#### Scenario: Negative inputs
- **GIVEN** the exported remainder function
- **WHEN** the caller evaluates modulo(-5, 3), modulo(5, -3) and modulo(-5, -3)
- **THEN** results are strictly equal to -2, 2 and -2 respectively

#### Scenario: Exact multiples and signed zero
- **GIVEN** the exported remainder function
- **WHEN** the caller evaluates modulo(6, 3) and modulo(-6, 3)
- **THEN** results are strictly equal to 0 and -0 respectively

#### Scenario: Zero dividends
- **GIVEN** the exported remainder function
- **WHEN** the caller evaluates modulo(0, 3) and modulo(-0, 3)
- **THEN** results are strictly equal to 0 and -0 respectively

#### Scenario: Binary-exact fractional inputs
- **GIVEN** the exported remainder function
- **WHEN** the caller evaluates modulo(1.5, 1) and modulo(1.25, 0.5)
- **THEN** results are strictly equal to 0.5 and 0.25 respectively

### Requirement: Reject zero divisors

As a library caller, I want a clear error for a zero divisor, so that I can handle invalid remainder requests. The function SHALL throw RangeError with exact message "Cannot modulo by zero" when b is either 0 or -0, including a zero dividend.

#### Scenario: Positive zero divisor
- **GIVEN** the exported remainder function
- **WHEN** the caller evaluates modulo(5, 0)
- **THEN** RangeError is thrown with the exact required message

#### Scenario: Negative zero divisor
- **GIVEN** the exported remainder function
- **WHEN** the caller evaluates modulo(5, -0)
- **THEN** RangeError is thrown with the exact required message

#### Scenario: Zero dividend and divisor
- **GIVEN** the exported remainder function
- **WHEN** the caller evaluates modulo(0, 0) and modulo(0, -0)
- **THEN** each call throws RangeError with the exact required message
