// 1. React component
// 2. React container

import React from 'react';
import { mount } from 'enzyme';
import UserInputContainer from '../user-input-container';

describe('user input', () => {
  it('text is "Hello, you!" by default', () => {
    const wrapper = mount(<UserInputContainer />);
    expect(wrapper.find('#banner').text()).toBe('Hello, you!');
  });

  it('text changes to user name on submit', () => {
    const wrapper = mount(<UserInputContainer />);
    wrapper.find('#name').simulate('change', { target: { value: 'Joe' } });
    wrapper
      .find('#button')
      .hostNodes()
      .simulate('click');
    expect(wrapper.find('#banner').text()).toBe('Hello, Joe!');
  });

  it('validates input', () => {});
});
