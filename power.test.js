const test = require('node:test');
const assert = require('node:assert');
const power = require('./power');

test('raises a positive base to a larger exponent', () => {
  assert.strictEqual(power(2, 3), 8);
});

test('rejects a negative exponent', () => {
  assert.throws(() => power(2, -1), {
    name: 'RangeError',
    message: 'Exponent must be a non-negative integer',
  });
});
