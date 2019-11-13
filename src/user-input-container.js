import UserInput from './user-input';
import Banner from './banner';
import validate from './validation';
import React, { Component } from 'react';

class UserInputContainer extends Component {
  state = {
    name: '',
    value: '',
    isValid: true,
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value, isValid: validate(value) });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.isValid) return;
    this.setState(prevState => ({ name: prevState.value }));
  };

  render() {
    const { isValid, value, name } = this.state;
    return (
      <>
        <Banner name={name} />
        <UserInput
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={value}
          isValid={isValid}
        />
      </>
    );
  }
}

export default UserInputContainer;
