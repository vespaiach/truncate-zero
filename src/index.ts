/**
 * Remove tail zero.
 */
function remove(s: string) {
  let i = s.length;
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
export default function truncateZero(
  input: number,
  options?: {
    suffixes?: string[];
  }
): string {
  const opts = Object.assign(
    {},
    {
      suffixes: ['k', 'm', 'b', 't'],
    },
    options || {}
  );

  const { suffixes } = opts;
  const num = Math.trunc(input);
  const sign = Math.sign(num);
  const strNum = String(Math.abs(num));
  const len = strNum.length;

  let pointPos = len % 3 === 0 ? Math.floor(len / 3) - 1 : Math.floor(len / 3);

  if (pointPos > suffixes.length) {
    pointPos = suffixes.length;
  }

  if (pointPos <= 0) {
    return String(num);
  } else {
    const suffix = suffixes[pointPos - 1];

    return (
      (sign < 0 ? '-' : '') +
      remove(
        `${strNum.substring(0, len - pointPos * 3)}.${strNum.substring(
          len - pointPos * 3
        )}`
      ) +
      suffix
    );
  }
}
