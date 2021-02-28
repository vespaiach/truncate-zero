# truncateZero

This function will remove the ending zero numbers and add suffixes: k(thousand), m(million), b(billion), t(trillion). _Note_: all decimal numbers will be removed.

# Install & Usage

To run install, use:

```bash
npm run install truncate-zero --save # or yarn add truncate-zero
```

To use:

```bash
import truncateZero from 'truncate-zero';

truncateZero(1000); // 1k
```

# Examples

```
it('hundred', () => {
  expect(truncateZero(0.2)).toEqual('0');
  expect(truncateZero(100)).toEqual('100');
  expect(truncateZero(-100.9)).toEqual('-100');
  expect(truncateZero(999.99)).toEqual('999');
});

it('thounsand', () => {
  expect(truncateZero(1000)).toEqual('1k');
  expect(truncateZero(-10000.1)).toEqual('-10k');
  expect(truncateZero(276871)).toEqual('276.871k');
});

it('million', () => {
  expect(truncateZero(1000000)).toEqual('1m');
  expect(truncateZero(-1000001.2)).toEqual('-1.000001m');
  expect(truncateZero(211000000)).toEqual('211m');
  expect(truncateZero(21100301)).toEqual('21.100301m');
});

it('billion', () => {
  expect(truncateZero(1000000000)).toEqual('1b');
  expect(truncateZero(1100000000)).toEqual('1.1b');
  expect(truncateZero(1100000001)).toEqual('1.100000001b');
});

it('trillion', () => {
  expect(truncateZero(1000000000000)).toEqual('1t');
  expect(truncateZero(1100000000000.2)).toEqual('1.1t');
  expect(truncateZero(-1100000000000.6)).toEqual('-1.1t');
});

it('over trillion', () => {
  expect(truncateZero(1000000000000000)).toEqual('1000t');
});

it('provide different suffix options', () => {
  expect(truncateZero(1000, { suffixes: ['a', 'b'] })).toEqual('1a');
  expect(truncateZero(1000000, { suffixes: ['a', ' b'] })).toEqual('1 b');
  expect(truncateZero(1000000000, { suffixes: ['a', ' b', 'abc'] })).toEqual(
    '1abc'
  );
});
```
