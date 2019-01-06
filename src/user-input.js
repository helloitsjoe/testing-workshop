// 1. Input for user to change their name
//   placeholder: 'Enter your name'
//   style: borderColor: valid ? 'black' : 'red'
// 2. Button to submit name
// 3. Warning for invalid input

import React from 'react';

const UserInput = ({ valid, inputValue, onChange, onSubmit }) => (
  <div>
    <input
      id="name"
      placeholder="Enter name"
      onChange={onChange}
      value={inputValue}
      style={{ borderColor: valid ? 'black' : 'red' }}
    />
    <button id="button" onClick={onSubmit}>
      Change name
    </button>
    {!valid && (
      <p id="warning" style={{ color: 'red' }}>
        Name can only include letters and spaces
      </p>
    )}
  </div>
);

export default UserInput;
