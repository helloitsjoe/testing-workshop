import validate from '../validation';

// test.each is good for unit testing many variations/edge cases into a function.

// The headers in the test.each template string are passed to the
// test as variables. You can refer to them in the description by prefixing
// with `$`, and refer to them in the test as properties on an object.

// See test.each in Jest documentation for more information.
test.each`
  description                            | input      | output
  ${'letters are valid'}                 | ${'Joe'}   | ${true}
  ${'letters with spaces are valid'}     | ${'Joe B'} | ${true}
  ${'empty is valid'}                    | ${''}      | ${true}
  ${'numbers are invalid'}               | ${'9'}     | ${false}
  ${'mixed letters/numbers are invalid'} | ${'Joe9'}  | ${false}
`('$description', ({ input, output }) => {
  expect(validate(input)).toBe(output);
});
