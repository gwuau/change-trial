module.exports = function power(base, exponent) {
  if (!Number.isInteger(exponent) || exponent < 0) {
    throw new RangeError('Exponent must be a non-negative integer');
  }
  return base ** exponent;
};
