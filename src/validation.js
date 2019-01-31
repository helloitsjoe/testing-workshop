export const validate = name => {
  return !name || /^[a-z ]*$/gi.test(name);
};
