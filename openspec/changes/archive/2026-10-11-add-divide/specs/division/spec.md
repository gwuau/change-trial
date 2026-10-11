# Spec Delta

## Purpose

Let library callers divide numeric values while receiving a clear, catchable error when the divisor is positive or negative zero.

## ADDED Requirements

### Requirement: Divide numbers with nonzero divisors

As a library caller, I want to divide two numbers, so that I can calculate their quotient. The library SHALL expose divide(a, b) and return the native numeric quotient when b is nonzero.

#### Scenario: Positive operands
- **GIVEN** the public division function
- **WHEN** the caller divides 6 by 3
- **THEN** the result is strictly equal to 2

#### Scenario: Negative operands
- **GIVEN** the public division function
- **WHEN** the caller divides -6 by 3, 6 by -3, or -6 by -3
- **THEN** the results are strictly equal to -2, -2 and 2 respectively

#### Scenario: Zero numerator
- **GIVEN** the public division function and a nonzero positive divisor
- **WHEN** the caller divides 0 by 2
- **THEN** the result is strictly equal to 0

#### Scenario: Binary-exact fractional quotients
- **GIVEN** the public division function
- **WHEN** the caller divides 3 by 2, or 0.25 by 0.5
- **THEN** the results are strictly equal to 1.5 and 0.5 respectively

### Requirement: Reject zero divisors

As a library caller, I want a clear error for a zero divisor, so that I can handle invalid division. The function SHALL throw RangeError with the exact message "Cannot divide by zero" when b is either 0 or -0, including a zero numerator.

#### Scenario: Positive zero divisor
- **GIVEN** the public division function
- **WHEN** the caller divides 6 by 0
- **THEN** RangeError is thrown with message "Cannot divide by zero"

#### Scenario: Negative zero divisor
- **GIVEN** the public division function
- **WHEN** the caller divides 6 by -0
- **THEN** RangeError is thrown with message "Cannot divide by zero"

#### Scenario: Zero divided by zero
- **GIVEN** the public division function
- **WHEN** the caller divides 0 by 0, or 0 by -0
- **THEN** each call throws RangeError with message "Cannot divide by zero"
