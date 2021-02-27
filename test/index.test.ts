import truncateZero from '../src';

it('hundred', () => {
  expect(truncateZero(100)).toEqual('100');
  expect(truncateZero(-100)).toEqual('-100');
  expect(truncateZero(100.12)).toEqual('100');
  expect(truncateZero(-100.52)).toEqual('-101');
});

it('thounsand', () => {
  expect(truncateZero(1000)).toEqual('1k');
  expect(truncateZero(-1000.1)).toEqual('-1k');
  expect(truncateZero(2768.71)).toEqual('2.769k');
  expect(truncateZero(2800)).toEqual('2.8k');
});

it('million', () => {
  expect(truncateZero(1000000)).toEqual('1m');
  expect(truncateZero(-1000000.2)).toEqual('-1m');
  expect(truncateZero(21100000.499)).toEqual('21.1m');
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
  expect(truncateZero(-1100000000000.6)).toEqual('-1.100000000001t');
});

it('give options', () => {
  expect(truncateZero(1000, { thousand: 'n' })).toEqual('1n');
  expect(truncateZero(1000000, { million: ' l' })).toEqual('1 l');
});

it('give rounding function', () => {
  expect(truncateZero(1000.92, { round: n => Math.trunc(n) })).toEqual('1k');
});
