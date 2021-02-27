/**
 * Format a number as short string by truncating ending zeros: 1k, 2.2k, -45.1m...
 * @param num Number to be formatted
 * @param options (optional) input suffixes: k, m, b, t and the rounding function
 */
export default function truncateZero(num: number, options?: {
    thousand?: string;
    million?: string;
    billion?: string;
    trillion?: string;
    round?: (n: number) => number;
}): string;
