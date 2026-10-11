const test = require('node:test');
const assert = require('node:assert');
const divide = require('./divide');

test('divides positive numbers', () => {
  assert.strictEqual(divide(6, 3), 2);
});
