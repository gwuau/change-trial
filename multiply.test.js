const test = require('node:test');
const assert = require('node:assert');
const multiply = require('./multiply');

test('multiplies positive numbers', () => {
  assert.strictEqual(multiply(2, 3), 6);
});
