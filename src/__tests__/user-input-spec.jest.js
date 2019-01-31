import React from 'react';
import { mount } from 'enzyme';
import UserInput from '../user-input';
import UserInputContainer from '../user-input-container';

// You can give components a data-enzyme-id prop so they can be
// specifically identified in tests. `wrapper.find('p')` will return
// a list of all `p` tags in the tree
const FORM = '[data-enzyme-id="FORM"]';
const INPUT = '[data-enzyme-id="INPUT"]';
const BANNER = '[data-enzyme-id="BANNER"]';
const BUTTON = '[data-enzyme-id="BUTTON"]';
const WARNING = '[data-enzyme-id="WARNING"]';

const DEFAULT_TEXT = 'Please enter your name';

// You can use `describe` blocks to organize tests.
describe('UserInput', () => {
  // Test descriptions should be clear, specific, and read like a sentence:
  // 'it does a specific thing under these conditions'
  it('displays input and submit button', () => {
    const wrapper = mount(<UserInput />);
    // `.exists()` will return true if at least one component is found.
    expect(wrapper.find(INPUT).exists()).toBe(true);
    expect(wrapper.find(BUTTON).exists()).toBe(true);
  });

  // Test to make sure your component has the outcome you expect under a certain condition
  it('displays warning if valid is false', () => {
    const wrapper = mount(<UserInput valid={false} />);
    expect(wrapper.find(WARNING).exists()).toBe(true);
  });

  // Test the opposite to make sure it DOESN'T do what you DON'T want to happen
  it('does NOT display warning if valid is true', () => {
    const wrapper = mount(<UserInput valid />);
    expect(wrapper.find(WARNING).exists()).toBe(false);
  });
});

describe('UserInputContainer', () => {
  it('displays banner with default text', () => {
    const wrapper = mount(<UserInputContainer />);
    expect(wrapper.find(BANNER).exists()).toBe(true);
    // `.text()` will return all text from a component and its descendants
    // `.debug()` is useful for debugging, but we avoid using it in tests
    // because it makes tests brittle
    expect(wrapper.find(BANNER).text()).toBe(DEFAULT_TEXT);
  });

  it('valid submit changes banner to welcome text', () => {
    const wrapper = mount(<UserInputContainer />);

    // When simulating events, if the handler takes parameters you should
    // pass those in as arguments. In this case, `onChange` expects `value
    // to be on `e.target`, so we need to pass in an object in that shape.
    wrapper.find(INPUT).simulate('change', { target: { value: 'Joe' } });
    wrapper.find(FORM).simulate('submit');
    expect(wrapper.find(BANNER).text()).toBe(`Welcome, Joe!`);
  });

  it('invalid submit does nothing', () => {
    const wrapper = mount(<UserInputContainer />);
    wrapper.find(INPUT).simulate('change', { target: { value: '9' } });
    wrapper.find(FORM).simulate('submit');
    expect(wrapper.find(BANNER).text()).toBe(DEFAULT_TEXT);
  });

  it('submit with empty messge resets text to default', () => {
    const wrapper = mount(<UserInputContainer />);
    wrapper.find(INPUT).simulate('change', { target: { value: 'Joe' } });
    wrapper.find(FORM).simulate('submit');
    wrapper.find(INPUT).simulate('change', { target: { value: '' } });
    wrapper.find(FORM).simulate('submit');
    expect(wrapper.find(BANNER).text()).toBe(DEFAULT_TEXT);
  });
});
