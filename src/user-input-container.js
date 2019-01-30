import React, { Component } from 'react';
import UserInput from './user-input';
import BannerWrapper from './banner-wrapper';
import { validate } from './validation';

class UserInputContainer extends Component {
  state = {
    valid: true,
    inputValue: '',
    name: '',
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

  getBannerText = () =>
    this.state.name ? `Welcome, ${this.state.name}!` : `Please enter your name`;

  render() {
    const { valid } = this.state;
    return (
      <div>
        <BannerWrapper bannerText={this.getBannerText()}>
          <UserInput
            valid={valid}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </BannerWrapper>
      </div>
    );
  }
}

export default UserInputContainer;
