import React from 'react';
import { mount } from 'enzyme';
import Banner from '../banner';
import UserInput from '../user-input';
import UserInputContainer from '../user-input-container';

describe('UserInput', () => {
  // Enzyme!
  // Implement a UserInput presentational component that displays a form with a text input and submit button.
  // It should display a warning if props.valid is false, and NOT display a warning if true
  // It should call props.onSubmit when the form is submitted
  // It should call props.onChange when the input is changed
  // **Remember to unmount your components!**

  it('displays form with text input and submit button', () => {});

  // it('displays warning if props.valid is false', () => {});

  // it('does NOT display warning if props.valid is true', () => {});

  // it('calls props.onSubmit when the form is submitted', () => {});

  // it('calls props.onChange when the input is changed', () => {});
});

describe('Banner', () => {
  // Implement a Banner presentational component that displays `Please enter your name` by default
  // It should display `Welcome, ${name}!` if props.name is provided

  // it('displays default text', () => {});

  // it('displays welcome text if name is provided', () => {});
});

describe('UserInputContainer', () => {
  // Implement a container for UserInput and BannerWrapper that holds state and handler logic
  // It should manage the UserInput value
  // It should update the banner text when a valid name is submitted
  // It should not update the banner text when an invalid name is submitted
  // It should reset the banner text to default if an empty string is submitted

  // it('changes input value when input changes', () => {});

  // it('updates banner text when valid name is submitted', () => {});

  // it('does NOT update banner text when invalid name is submitted', () => {});

  // it('resets banner text to default if empty string is submitted', () => {});
});
