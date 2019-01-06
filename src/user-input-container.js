// Create a react app that says "Hello <user>"
// with an input to let the user change their name

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
