// 1. h1 that says "Hello <user>"
// 2. UserInput component with props: valid, inputValue, onChange, onSubmit
// 3. state = {name, inputValue, valid}
// handleChange
// handleSubmit

import React, { Component } from 'react';
import UserInput from './user-input';
import { validateInput } from './utils';

export default class UserInputContainer extends Component {
  state = {
    name: 'you',
    inputValue: '',
    valid: true,
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ valid: validateInput(value), inputValue: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.valid) return;
    this.setState(prevState => ({
      name: prevState.inputValue,
    }));
  };

  render() {
    return (
      <div>
        <h1 id="banner">Hello, {this.state.name}!</h1>
        <UserInput
          valid={this.state.valid}
          inputValue={this.state.inputValue}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
