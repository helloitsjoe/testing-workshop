import React from 'react';

const UserInput = ({}) => null;

// Note: input gives a warning if 'value' is provided without 'onChange'
UserInput.defaultProps = {
  onChange() {}
};

export default UserInput;
