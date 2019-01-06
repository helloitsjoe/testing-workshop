// 1. Validate that input is only letters and spaces
// Start with noop
// return true
// return regex

export const validateInput = input =>
  !input.length || (/[a-zA-Z]+\s*/g.test(input) && !/\d+/g.test(input));
