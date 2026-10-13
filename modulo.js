module.exports = (a, b) => {
  if (b === 0) {
    throw new RangeError('Cannot modulo by zero');
  }
  return a % b;
};
