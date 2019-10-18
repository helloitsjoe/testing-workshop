import React from 'react';

const UserInput = ({ valid, onChange, onSubmit }) => (
  <form data-enzyme-id='FORM' onSubmit={onSubmit}>
    <input data-enzyme-id='INPUT' onChange={onChange} />
    <button data-enzyme-id='BUTTON'>Submit</button>
    {!valid && <p data-enzyme-id='WARNING'>Numbers are invalid!</p>}
  </form>
);

export default UserInput;
