import React from 'react';

const UserInput = ({ value, isValid, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input value={value} onChange={onChange} placeholder="Enter name" />
    <button>Submit</button>
    {!isValid && <p>Numbers are invalid</p>}
  </form>
);

export default UserInput;
