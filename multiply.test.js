const test = require('node:test');
const assert = require('node:assert');
const multiply = require('./multiply');

test('multiplies positive numbers', () => {
  assert.strictEqual(multiply(2, 3), 6);
});

test('multiplies zero on either side', () => {
  assert.strictEqual(multiply(0, 7), 0);
  assert.strictEqual(multiply(7, 0), 0);
});

test('multiplies negative numbers', () => {
  assert.strictEqual(multiply(-2, 3), -6);
  assert.strictEqual(multiply(-2, -3), 6);
});

test('multiplies binary-exact decimals', () => {
  assert.strictEqual(multiply(1.5, 2), 3);
  assert.strictEqual(multiply(0.5, 0.5), 0.25);
});
