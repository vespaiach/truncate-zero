/**
 * Default rounding function.
 */
function _round(num) {
  return parseInt(num.toFixed(0));
}
/**
 * Format a number as short string by truncating ending zeros: 1k, 2.2k, -45.1m...
 * @param num Number to be formatted
 * @param options (optional) input suffixes: k, m, b, t and the rounding function
 */


function truncateZero(num, options) {
  var absNum = Math.abs(num);
  var opts = Object.assign({}, {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't',
    round: _round
  }, options || {});
  var _opts$round = opts.round,
      round = _opts$round === void 0 ? _round : _opts$round,
      thousand = opts.thousand,
      million = opts.million,
      billion = opts.billion,
      trillion = opts.trillion;

  if (absNum <= 999) {
    return String(round(num));
  } else if (absNum <= 999999) {
    return "" + round(num) / 1000 + thousand;
  } else if (absNum <= 999999999) {
    return "" + round(num) / 1000000 + million;
  } else if (absNum <= 999999999999) {
    return "" + round(num) / 1000000000 + billion;
  } else {
    return "" + round(num) / 1000000000000 + trillion;
  }
}

export default truncateZero;
//# sourceMappingURL=truncate-zero.esm.js.map
