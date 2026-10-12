const test = require('node:test');
const assert = require('node:assert');
const power = require('./power');

test('raises a positive base to a larger exponent', () => {
  assert.strictEqual(power(2, 3), 8);
});

test('handles zero and negative zero exponents including zero bases', () => {
  for (const base of [2, -2, 0]) {
    assert.strictEqual(power(base, 0), 1);
    assert.strictEqual(power(base, -0), 1);
  }
});

test('handles exponent one and negative, zero and fractional bases', () => {
  assert.strictEqual(power(5, 1), 5);
  assert.strictEqual(power(-2, 2), 4);
  assert.strictEqual(power(-2, 3), -8);
  assert.strictEqual(power(0, 3), 0);
  assert.strictEqual(power(0.5, 2), 0.25);
});

for (const exponent of [0.5, -0.5, NaN, Infinity, -Infinity]) {
  test(`rejects numeric exponent ${exponent}`, () => {
    assert.throws(() => power(2, exponent), {
      name: 'RangeError',
      message: 'Exponent must be a non-negative integer',
    });
  });
}

test('rejects an invalid exponent with a zero base', () => {
  assert.throws(() => power(0, -1), {
    name: 'RangeError',
    message: 'Exponent must be a non-negative integer',
  });
});

for (const [label, exponent] of [
  ['string', '2'], ['null', null], ['undefined', undefined], ['boolean', true],
  ['bigint', 2n], ['object', {}], ['array', []], ['symbol', Symbol('exponent')],
]) {
  test(`rejects non-number exponent: ${label}`, () => {
    assert.throws(() => power(2, exponent), {
      name: 'RangeError',
      message: 'Exponent must be a non-negative integer',
    });
  });
}

test('rejects a negative exponent', () => {
  assert.throws(() => power(2, -1), {
    name: 'RangeError',
    message: 'Exponent must be a non-negative integer',
  });
});
