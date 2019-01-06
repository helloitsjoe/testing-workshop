// describe/it blocks
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
    wrapper.find('#button').simulate('click');
    expect(wrapper.find('#banner').text()).toBe('Hello, Joe!');
  });

  it('Displays warning on invalid input', () => {
    const wrapper = mount(<UserInputContainer />);
    expect(wrapper.find('#warning').exists()).toBe(false);
    wrapper.find('#name').simulate('change', { target: { value: '9' } });
    expect(wrapper.find('#warning').exists()).toBe(true);
    expect(wrapper.find('#warning').text()).toMatchInlineSnapshot(
      `"Name can only include letters and spaces"`
    );
  });

  it('submit is disabled on invalid input', () => {
    const wrapper = mount(<UserInputContainer />);
    expect(wrapper.find('#banner').text()).toBe('Hello, you!');
    wrapper.find('#name').simulate('change', { target: { value: '9' } });
    wrapper.find('#button').simulate('click');
    expect(wrapper.find('#banner').text()).toBe('Hello, you!');
  });
});
