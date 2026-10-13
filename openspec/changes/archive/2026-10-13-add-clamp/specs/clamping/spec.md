# Spec Delta

## Purpose

Let library users keep numeric values within inclusive lower and upper bounds, with clear handling of invalid ranges and non-finite numbers.

## ADDED Requirements

### Requirement: Limit a value to an inclusive numeric range

As a library user, I want to limit a number to a range, so that it stays within chosen bounds. The library SHALL expose clamp(x, lo, hi). For ordered numeric bounds and non-NaN inputs, it SHALL return lo below the range, hi above it, and x within it. Equal bounds SHALL be allowed. No additional type checks SHALL be introduced.

#### Scenario: Below, inside and above the range
- **GIVEN** bounds 0 and 10
- **WHEN** the caller clamps -2, 5 and 12
- **THEN** results are strictly equal to 0, 5 and 10 respectively

#### Scenario: Inclusive endpoints
- **GIVEN** bounds 0 and 10
- **WHEN** the caller clamps 0 and 10
- **THEN** results are strictly equal to 0 and 10 respectively

#### Scenario: Equal bounds
- **GIVEN** bounds 3 and 3
- **WHEN** the caller clamps -2, 3 and 12
- **THEN** each result is strictly equal to 3

#### Scenario: Negative range
- **GIVEN** bounds -10 and -2
- **WHEN** the caller clamps -12, -5 and 0
- **THEN** results are strictly equal to -10, -5 and -2 respectively

#### Scenario: Binary-exact fractional range
- **GIVEN** bounds 0.5 and 1.5
- **WHEN** the caller clamps 0.25, 1.25 and 2
- **THEN** results are strictly equal to 0.5, 1.25 and 1.5 respectively

### Requirement: Propagate NaN and allow infinities

As a library user, I want clear non-finite numeric behavior, so that I can use native numeric values without extra validation. The function SHALL return NaN if any input is NaN, even if the remaining bounds are reversed. Otherwise infinities SHALL be allowed and limited by the same inclusive range rules.

#### Scenario: NaN in any position
- **GIVEN** the exported clamp function
- **WHEN** the caller supplies (NaN, 0, 10), (5, NaN, 10) or (5, 0, NaN)
- **THEN** each result is NaN

#### Scenario: NaN with reversed bounds
- **GIVEN** bounds 10 and 0
- **WHEN** the caller clamps NaN
- **THEN** the result is NaN rather than an exception

#### Scenario: Infinite value with finite bounds
- **GIVEN** bounds 0 and 10
- **WHEN** the caller clamps -Infinity and Infinity
- **THEN** results are strictly equal to 0 and 10 respectively

#### Scenario: Infinite bounds
- **GIVEN** bounds -Infinity and Infinity
- **WHEN** the caller clamps -Infinity, 5 and Infinity
- **THEN** results are strictly equal to -Infinity, 5 and Infinity respectively

#### Scenario: Equal infinite bounds
- **GIVEN** the exported clamp function
- **WHEN** the caller evaluates clamp(5, Infinity, Infinity) and clamp(5, -Infinity, -Infinity)
- **THEN** results are strictly equal to Infinity and -Infinity respectively

### Requirement: Reject reversed bounds

As a library user, I want an error for a reversed range, so that mistakes are not silently hidden. For inputs with no NaN, the function SHALL throw RangeError with exact message "Lower bound must not exceed upper bound" when lo is greater than hi.

#### Scenario: Reversed finite bounds
- **GIVEN** the exported clamp function
- **WHEN** the caller evaluates clamp(5, 10, 0)
- **THEN** RangeError is thrown with the exact required message

#### Scenario: Reversed infinite bounds
- **GIVEN** the exported clamp function
- **WHEN** the caller evaluates clamp(5, Infinity, -Infinity)
- **THEN** RangeError is thrown with the exact required message
