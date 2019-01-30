import { validate } from '../validation';

it.each`
  description                  | input    | output
  ${'letters are valid'}       | ${'Joe'} | ${true}
  ${'spaces are valid'}        | ${' '}   | ${true}
  ${'single letter valid'}     | ${'a'}   | ${true}
  ${'capital letter valid'}    | ${'A'}   | ${true}
  ${'numbers are invalid'}     | ${'9'}   | ${false}
  ${'letters/numbers invalid'} | ${'a9'}  | ${false}
`('$description', ({ input, output }) => {
  expect(validate(input)).toBe(output);
});
