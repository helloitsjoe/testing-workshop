// 1. Input for user to change their name
// 2. Button to submit name
// 3. Input should only accept letters/spaces

import React from 'react';

const UserInput = ({ valid, inputValue, onChange, onSubmit }) => (
  <form>
    <input
      id="name"
      type="text"
      placeholder="Enter name"
      onChange={onChange}
      value={inputValue}
      style={{ borderColor: valid ? 'black' : 'red' }}
    />
    <button id="button" onClick={onSubmit}>
      Change name
    </button>
  </form>
);

export default UserInput;
