# Spec Delta

## Purpose

Let library callers raise numeric bases to non-negative integer powers and receive a clear error when the exponent is outside the supported range.

## ADDED Requirements

### Requirement: Raise a base to a supported exponent

As a library caller, I want to raise a number to a non-negative integer power, so that I can calculate powers with the arithmetic library. The library SHALL expose power(base, exponent) and return native numeric exponentiation for non-negative integer Number exponents, without additional base validation.

#### Scenario: Positive base and larger exponent
- **GIVEN** the public power function
- **WHEN** the caller raises 2 to exponent 3
- **THEN** the result is strictly equal to 8

#### Scenario: Exponent one
- **GIVEN** the public power function
- **WHEN** the caller raises 5 to exponent 1
- **THEN** the result is strictly equal to 5

#### Scenario: Negative bases
- **GIVEN** the public power function
- **WHEN** the caller raises -2 to exponents 2 and 3
- **THEN** the results are strictly equal to 4 and -8 respectively

#### Scenario: Zero base with positive exponent
- **GIVEN** the public power function
- **WHEN** the caller raises 0 to exponent 3
- **THEN** the result is strictly equal to 0

#### Scenario: Binary-exact fractional base
- **GIVEN** the public power function
- **WHEN** the caller raises 0.5 to exponent 2
- **THEN** the result is strictly equal to 0.25

### Requirement: Treat zero exponents as the identity power

As a library caller, I want a defined result for exponent zero, so that I can handle the boundary consistently. The function SHALL return 1 for either 0 or -0 exponent, including a zero base.

#### Scenario: Zero exponent
- **GIVEN** the public power function
- **WHEN** the caller raises 2, -2 or 0 to exponent 0
- **THEN** each result is strictly equal to 1

#### Scenario: Negative zero exponent
- **GIVEN** the public power function
- **WHEN** the caller raises 2 or 0 to exponent -0
- **THEN** each result is strictly equal to 1

### Requirement: Reject invalid exponents

As a library caller, I want an error for an unsupported exponent, so that I can handle invalid requests. The function SHALL throw RangeError with exact message "Exponent must be a non-negative integer" for any exponent that is not a non-negative integer Number: negative, fractional, non-finite or non-number values.

#### Scenario: Negative or fractional exponent
- **GIVEN** the public power function
- **WHEN** the caller supplies exponent -1, 0.5 or -0.5 with base 2
- **THEN** each call throws RangeError with the exact required message

#### Scenario: Non-finite exponent
- **GIVEN** the public power function
- **WHEN** the caller supplies NaN, Infinity or -Infinity with base 2
- **THEN** each call throws RangeError with the exact required message

#### Scenario: Non-number exponent
- **GIVEN** the public power function
- **WHEN** the caller supplies "2", null, undefined, true, 2n, {}, [] or Symbol("exponent") with base 2
- **THEN** each call throws RangeError with the exact required message

#### Scenario: Invalid exponent with zero base
- **GIVEN** the public power function
- **WHEN** the caller raises 0 to exponent -1
- **THEN** RangeError is thrown with the exact required message
