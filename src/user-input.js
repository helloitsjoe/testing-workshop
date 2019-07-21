import React from 'react';

export default function UserInput({}) {
  return null;
}

// Test runner complains about input having a value with no change handler
UserInput.defaultProps = {
  onChange() {},
};
