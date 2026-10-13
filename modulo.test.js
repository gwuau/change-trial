const test = require('node:test');
const assert = require('node:assert');
const modulo = require('./modulo');

test('returns the remainder of positive inputs', () => {
  assert.strictEqual(modulo(5, 3), 2);
});

test('rejects zero dividends with either sign of zero divisor', () => {
  assert.throws(() => modulo(0, 0), {
    name: 'RangeError',
    message: 'Cannot modulo by zero',
  });
  assert.throws(() => modulo(0, -0), {
    name: 'RangeError',
    message: 'Cannot modulo by zero',
  });
});

test('rejects a negative zero divisor', () => {
  assert.throws(() => modulo(5, -0), {
    name: 'RangeError',
    message: 'Cannot modulo by zero',
  });
});

test('returns binary-exact fractional remainders', () => {
  assert.strictEqual(modulo(1.5, 1), 0.5);
  assert.strictEqual(modulo(1.25, 0.5), 0.25);
});

test('preserves signed zero dividends', () => {
  assert.strictEqual(modulo(0, 3), 0);
  assert.strictEqual(modulo(-0, 3), -0);
});

test('preserves signed zero for exact multiples', () => {
  assert.strictEqual(modulo(6, 3), 0);
  assert.strictEqual(modulo(-6, 3), -0);
});

test('preserves the dividend sign with negative inputs', () => {
  assert.strictEqual(modulo(-5, 3), -2);
  assert.strictEqual(modulo(5, -3), 2);
  assert.strictEqual(modulo(-5, -3), -2);
});

test('rejects a positive zero divisor', () => {
  assert.throws(() => modulo(5, 0), {
    name: 'RangeError',
    message: 'Cannot modulo by zero',
  });
});
