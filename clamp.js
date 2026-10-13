module.exports = function clamp(x, lo, hi) {
  if (Number.isNaN(x) || Number.isNaN(lo) || Number.isNaN(hi)) {
    return NaN;
  }
  if (lo > hi) {
    throw new RangeError('Lower bound must not exceed upper bound');
  }
  return Math.min(Math.max(x, lo), hi);
};
