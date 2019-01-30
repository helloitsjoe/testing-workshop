import React from 'react';
import { mount } from 'enzyme';
import UserInput from '../user-input';
import UserInputContainer from '../user-input-container';

const WARNING = '[data-enzyme-id="WARNING"]';
const BUTTON = '[data-enzyme-id="BUTTON"]';
const FORM = '[data-enzyme-id="FORM"]';
const INPUT = '[data-enzyme-id="INPUT"]';
const BANNER = '[data-enzyme-id="BANNER"]';

const DEFAULT_TEXT = 'Please enter your name';

describe('UserInput', () => {
  it('displays input and submit button with text', () => {
    const wrapper = mount(<UserInput />);
    expect(wrapper.find(BUTTON).exists()).toBe(true);
    expect(wrapper.find(INPUT).exists()).toBe(true);
    expect(wrapper.find(BUTTON).text()).toBe('Submit');
  });

  it('displays warning if valid is false', () => {
    const wrapper = mount(<UserInput valid={false} />);
    expect(wrapper.find(WARNING).exists()).toBe(true);
  });

  it('does NOT display warning if valid is true', () => {
    const wrapper = mount(<UserInput valid={true} />);
    expect(wrapper.find(WARNING).exists()).toBe(false);
  });
});

describe('UserInputContainer', () => {
  it('display banner with default text', () => {
    const wrapper = mount(<UserInputContainer />);
    expect(wrapper.find(BANNER).exists()).toBe(true);
    expect(wrapper.find(BANNER).text()).toBe(DEFAULT_TEXT);
  });

  it('banner updates to welcome text on valid submit', () => {
    const wrapper = mount(<UserInputContainer />);
    wrapper.find(INPUT).simulate('change', { target: { value: 'Joe' } });
    wrapper.find(FORM).simulate('submit', { preventDefault: () => {} });
    expect(wrapper.find(BANNER).text()).toBe('Welcome, Joe!');
  });

  it('banner does nothing on submit if invalid', () => {
    const wrapper = mount(<UserInputContainer />);
    wrapper.find(INPUT).simulate('change', { target: { value: '9' } });
    wrapper.find(FORM).simulate('submit');
    expect(wrapper.find(BANNER).text()).toBe(DEFAULT_TEXT);
  });

  it('banner resets if no input', () => {
    const wrapper = mount(<UserInputContainer />);
    wrapper.find(INPUT).simulate('change', { target: { value: 'Joe' } });
    wrapper.find(FORM).simulate('submit');
    wrapper.find(INPUT).simulate('change', { target: { value: '' } });
    wrapper.find(FORM).simulate('submit');
    expect(wrapper.find(BANNER).text()).toBe(DEFAULT_TEXT);
  });
});
