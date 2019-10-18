const validate = name => {
  return !name || /^[a-z ]*$/gi.test(name);
};

export default validate;
