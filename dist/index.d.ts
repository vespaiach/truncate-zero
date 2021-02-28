/**
 * Make number as short string by truncating ending zero characters and add suffixes: 1k, 2.2k, -45.1m...
 * @param num Number to be formatted
 * @param options (optional) input suffixes: k, m, b, t and the rounding function
 */
export default function truncateZero(input: number, options?: {
    suffixes?: string[];
}): string;
