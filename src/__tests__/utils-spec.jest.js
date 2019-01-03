// 0. Test with if/else
// Note: Use require() instead of import
// 1. Single test for validation logic

import {validateInput} from '../utils';

test('strings are OK', () => {
  expect(validateInput('Joe')).toBe(true);
});

test('numbers are invalid', () => {
  expect(validateInput('777')).toBe(false);
});
