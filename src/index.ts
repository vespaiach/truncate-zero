/**
 * Default rounding function.
 */
function _round(num: number) {
  return parseInt(num.toFixed(0));
}

/**
 * Format a number as short string by truncating ending zeros: 1k, 2.2k, -45.1m...
 * @param num Number to be formatted
 * @param options (optional) input suffixes: k, m, b, t and the rounding function
 */
export default function truncateZero(
  num: number,
  options?: {
    thousand?: string;
    million?: string;
    billion?: string;
    trillion?: string;
    round?: (n: number) => number;
  }
): string {
  const absNum = Math.abs(num);
  const opts = Object.assign(
    {},
    {
      thousand: 'k',
      million: 'm',
      billion: 'b',
      trillion: 't',
      round: _round,
    },
    options || {}
  );
  const { round = _round, thousand, million, billion, trillion } = opts;

  if (absNum <= 999) {
    return String(round(num));
  } else if (absNum <= 999999) {
    return `${round(num) / 1000}${thousand}`;
  } else if (absNum <= 999999999) {
    return `${round(num) / 1000000}${million}`;
  } else if (absNum <= 999999999999) {
    return `${round(num) / 1000000000}${billion}`;
  } else {
    return `${round(num) / 1000000000000}${trillion}`;
  }
}
