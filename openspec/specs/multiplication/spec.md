# multiplication Specification

## Purpose
Let callers calculate the product of two numbers through a small public multiplication function without changing the addition feature.

## Requirements

### Requirement: Multiply numeric inputs

As a library caller, I want to multiply two numbers, so that I can calculate their product. The library SHALL expose multiply(a, b) and return the numeric product of a and b.

#### Scenario: Positive inputs
- **GIVEN** the public multiplication function
- **WHEN** the caller multiplies 2 and 3
- **THEN** the result is strictly equal to 6

#### Scenario: Zero input
- **GIVEN** the public multiplication function
- **WHEN** the caller multiplies 0 and 7, or 7 and 0
- **THEN** each result is strictly equal to 0

#### Scenario: Negative inputs
- **GIVEN** the public multiplication function
- **WHEN** the caller multiplies -2 and 3, or -2 and -3
- **THEN** the results are strictly equal to -6 and 6 respectively

#### Scenario: Binary-exact decimal inputs
- **GIVEN** the public multiplication function and decimal inputs that are exact in binary
- **WHEN** the caller multiplies 1.5 and 2, or 0.5 and 0.5
- **THEN** the results are strictly equal to 3 and 0.25 respectively
