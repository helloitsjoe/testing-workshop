import UserInput from './user-input';
import Banner from './banner';
import validate from './validation';
import React, { Component } from 'react';

class UserInputContainer extends Component {
  state = {
    valid: true,
    inputValue: '',
    name: ''
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ inputValue: value, valid: validate(value) });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState =>
      prevState.valid ? { name: prevState.inputValue } : prevState
    );
  };

  render() {
    const { valid, name } = this.state;
    return (
      <div>
        <Banner name={name} />
        <UserInput
          valid={valid}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default UserInputContainer;
