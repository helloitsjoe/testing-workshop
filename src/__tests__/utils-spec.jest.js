// 0. Test with if/else
// Note: Use require() instead of import
// 1. Test for string validation
// 2. Test for number invalidation
// 3. test.each for edge cases:
// String valid
// Number invalid
// Single letter valid
// Single number invalid
// letters with spaces valid
// Mixed letters/numbers invalid
// Symbols invalid
// Only spaces invalid

import { validateInput } from '../utils';

test.each`
  description                 | text           | valid
  ${'string with spaces'}     | ${'Joe Schmo'} | ${true}
  ${'numbers'}                | ${'777'}       | ${false}
  ${'mix of numbers/letters'} | ${'a7b'}       | ${false}
  ${'single letter'}          | ${'a'}         | ${true}
  ${'single number'}          | ${'1'}         | ${false}
  ${'symbol'}                 | ${'-'}         | ${false}
  ${'symbol'}                 | ${' '}         | ${false}
`('$description - valid: $valid', ({ text, valid }) => {
  expect(validateInput(text)).toBe(valid);
});
