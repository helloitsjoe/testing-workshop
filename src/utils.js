// 1. Validate that input is only letters and spaces

// export const validateInput = () => {};
// export const validateInput = input => true;
// export const validteInput = input => typeof input === 'string';

export const validateInput = input =>
  !input.length || (/[a-zA-Z]+\s*/g.test(input) && !/\d+/g.test(input));
