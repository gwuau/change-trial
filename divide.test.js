const test = require('node:test');
const assert = require('node:assert');
const divide = require('./divide');

test('divides positive numbers', () => {
  assert.strictEqual(divide(6, 3), 2);
});

test('rejects zero divided by either sign of zero', () => {
  assert.throws(() => divide(0, 0), {
    name: 'RangeError',
    message: 'Cannot divide by zero',
  });
  assert.throws(() => divide(0, -0), {
    name: 'RangeError',
    message: 'Cannot divide by zero',
  });
});

test('rejects a negative zero divisor', () => {
  assert.throws(() => divide(6, -0), {
    name: 'RangeError',
    message: 'Cannot divide by zero',
  });
});

test('returns binary-exact fractional quotients', () => {
  assert.strictEqual(divide(3, 2), 1.5);
  assert.strictEqual(divide(0.25, 0.5), 0.5);
});

test('divides a zero numerator by a nonzero divisor', () => {
  assert.strictEqual(divide(0, 2), 0);
});

test('divides negative numbers', () => {
  assert.strictEqual(divide(-6, 3), -2);
  assert.strictEqual(divide(6, -3), -2);
  assert.strictEqual(divide(-6, -3), 2);
});

test('rejects a positive zero divisor', () => {
  assert.throws(() => divide(6, 0), {
    name: 'RangeError',
    message: 'Cannot divide by zero',
  });
});
