module.exports = (a, b) => {
  if (b === 0) {
    throw new RangeError('Cannot divide by zero');
  }
  return a / b;
};
