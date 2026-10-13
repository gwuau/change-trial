const test = require('node:test');
const assert = require('node:assert');
const modulo = require('./modulo');

test('returns the remainder of positive inputs', () => {
  assert.strictEqual(modulo(5, 3), 2);
});

test('rejects a positive zero divisor', () => {
  assert.throws(() => modulo(5, 0), {
    name: 'RangeError',
    message: 'Cannot modulo by zero',
  });
});
