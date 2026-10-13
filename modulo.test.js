const test = require('node:test');
const assert = require('node:assert');
const modulo = require('./modulo');

test('returns the remainder of positive inputs', () => {
  assert.strictEqual(modulo(5, 3), 2);
});
