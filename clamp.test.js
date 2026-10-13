const test = require('node:test');
const assert = require('node:assert');
const clamp = require('./clamp');

test('limits a value below the range to the lower bound', () => {
  assert.strictEqual(clamp(-2, 0, 10), 0);
});

test('throws a RangeError for reversed finite bounds', () => {
  assert.throws(() => clamp(5, 10, 0), {
    name: 'RangeError',
    message: 'Lower bound must not exceed upper bound',
  });
});

test('returns NaN when the value is NaN even with reversed bounds', () => {
  assert.strictEqual(Number.isNaN(clamp(NaN, 10, 0)), true);
});

test('returns NaN when any input is NaN', () => {
  assert.strictEqual(Number.isNaN(clamp(NaN, 0, 10)), true);
  assert.strictEqual(Number.isNaN(clamp(5, NaN, 10)), true);
  assert.strictEqual(Number.isNaN(clamp(5, 0, NaN)), true);
});

test('keeps values inside the range and caps values above it', () => {
  assert.strictEqual(clamp(5, 0, 10), 5);
  assert.strictEqual(clamp(12, 0, 10), 10);
});

test('treats both endpoints as inside the range', () => {
  assert.strictEqual(clamp(0, 0, 10), 0);
  assert.strictEqual(clamp(10, 0, 10), 10);
});

test('returns the single bound when the bounds are equal', () => {
  assert.strictEqual(clamp(-2, 3, 3), 3);
  assert.strictEqual(clamp(3, 3, 3), 3);
  assert.strictEqual(clamp(12, 3, 3), 3);
});

test('clamps with a wholly negative range', () => {
  assert.strictEqual(clamp(-12, -10, -2), -10);
  assert.strictEqual(clamp(-5, -10, -2), -5);
  assert.strictEqual(clamp(0, -10, -2), -2);
});

test('clamps binary-exact fractional values', () => {
  assert.strictEqual(clamp(0.25, 0.5, 1.5), 0.5);
  assert.strictEqual(clamp(1.25, 0.5, 1.5), 1.25);
  assert.strictEqual(clamp(2, 0.5, 1.5), 1.5);
});

test('clamps infinite values against finite bounds', () => {
  assert.strictEqual(clamp(-Infinity, 0, 10), 0);
  assert.strictEqual(clamp(Infinity, 0, 10), 10);
});

test('clamps values between infinite bounds', () => {
  assert.strictEqual(clamp(-Infinity, -Infinity, Infinity), -Infinity);
  assert.strictEqual(clamp(5, -Infinity, Infinity), 5);
  assert.strictEqual(clamp(Infinity, -Infinity, Infinity), Infinity);
});

test('clamps values with equal infinite bounds', () => {
  assert.strictEqual(clamp(5, Infinity, Infinity), Infinity);
  assert.strictEqual(clamp(5, -Infinity, -Infinity), -Infinity);
});

test('throws a RangeError for reversed infinite bounds', () => {
  assert.throws(() => clamp(5, Infinity, -Infinity), {
    name: 'RangeError',
    message: 'Lower bound must not exceed upper bound',
  });
});
