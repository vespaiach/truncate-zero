'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Remove tail zero.
 */
function remove(s) {
  var i = s.length;

  for (; i--; i >= 0) {
    if (s[i] !== '0') {
      break;
    }
  }

  if (s[i] === '.') {
    i -= 1;
  }

  return s.substring(0, i + 1);
}
/**
 * Make number as short string by truncating ending zero characters and add suffixes: 1k, 2.2k, -45.1m...
 * @param num Number to be formatted
 * @param options (optional) input suffixes: k, m, b, t and the rounding function
 */


function truncateZero(input, options) {
  var opts = Object.assign({}, {
    suffixes: ['k', 'm', 'b', 't']
  }, options || {});
  var suffixes = opts.suffixes;
  var num = Math.trunc(input);
  var sign = Math.sign(num);
  var strNum = String(Math.abs(num));
  var len = strNum.length;
  var pointPos = len % 3 === 0 ? Math.floor(len / 3) - 1 : Math.floor(len / 3);

  if (pointPos > suffixes.length) {
    pointPos = suffixes.length;
  }

  if (pointPos <= 0) {
    return String(num);
  } else {
    var suffix = suffixes[pointPos - 1];
    return (sign < 0 ? '-' : '') + remove(strNum.substring(0, len - pointPos * 3) + "." + strNum.substring(len - pointPos * 3)) + suffix;
  }
}

exports.default = truncateZero;
//# sourceMappingURL=truncate-zero.cjs.development.js.map
