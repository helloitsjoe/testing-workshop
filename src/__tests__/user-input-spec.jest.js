import React from 'react';
import { mount } from 'enzyme';
import UserInput from '../user-input';
import Banner from '../banner';
import UserInputContainer from '../user-input-container';

// You can give components a data-enzyme-id prop so they can be specifically
// identified in tests. `.find()` will return multiple compnents if it finds
// multiple matches - for example, `wrapper.find('p')` will return
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

    // NOTE: For debugging tests, the `.debug()` method will output the entire
    // React component tree, so you can see exactly what was mounted. Just be sure
    // to remove the `.debug()` calls before committing your code.

    // console.log(wrapper.debug()) <-- logs React component tree
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

  it('submit triggers onSubmit', () => {
    // jest.fn() lets you mock a function to make assertions on it: was it called?
    // Was it called with the right parameters?
    const onSubmit = jest.fn();
    const wrapper = mount(<UserInput onSubmit={onSubmit} />);
    // Make sure your function isn't called before it should be
    expect(onSubmit).not.toBeCalled();
    wrapper.find(FORM).simulate('submit');
    expect(onSubmit).toBeCalled();
  });

  it('input change triggers onChange', () => {
    const onChange = jest.fn();
    const wrapper = mount(<UserInput onChange={onChange} />);
    expect(onChange).not.toBeCalled();
    // When simulating events, if the handler takes parameters you should
    // pass those in as arguments. In this case, `onChange` expects an event,
    // so we need to pass in an object in the right shape.
    wrapper.find(INPUT).simulate('change', { target: { value: 'Joe' } });
    expect(onChange).toBeCalled();
  });
});

describe('Banner', () => {
  it('displays banner with default text', () => {
    const wrapper = mount(<Banner />);
    // `.text()` will return all text from a component and its descendants
    expect(wrapper.find(BANNER).text()).toBe(DEFAULT_TEXT);
  });

  it('displays welcome text if name is provided', () => {
    const wrapper = mount(<Banner name='Joe' />);
    expect(wrapper.find(BANNER).text()).toBe('Welcome, Joe!');
  });
});

describe('UserInputContainer', () => {
  let wrapper;

  beforeEach(() => {
    // `.beforeAll/Each`/`.afterAll/Each` (see the Jest docs):
    // These can be helpful when refactoring tests, but we need to make sure they
    // aren't leaking state between tests. I personally use them sparingly, and
    // always keep readability in mind.
    wrapper = mount(<UserInputContainer />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('displays Banner', () => {
    expect(wrapper.find(Banner).exists()).toBe(true);
  });

  it('displays UserInput', () => {
    expect(wrapper.find(UserInput).exists()).toBe(true);
  });

  it('valid submit changes banner to welcome text', () => {
    // There's some repetition in these tests (wrapper.find(), etc),
    // you might be tempted to use helper functions to DRY up your code.
    // Helpers have their uses, but we need to be careful with them.

    // Something like this:

    // const simulateEvent = (component, event) => {
    //   wrapper.find(component).simulate(event);
    // };

    // DRYs things up, but it doesn't save you from writing much code:
    // simulateEvent(FORM, 'submit');
    // wrapper.find(FORM).simulate('submit');

    // ...and it creates abstraction which can lead to tests that are
    // harder to reason about - Google DAMP vs DRY for further reading.

    // ...it also introduces the potential for bugs hiding in your helpers
    // (especially if logic is involved), which can be hard to find/debug.

    // In tests, I personally prefer a bit of repetition over abstraction,
    // but this is not a hard and fast rule.

    // The helpers in `test-helpers.js` have been vetted and are fine to use.
    wrapper.find(INPUT).simulate('change', { target: { value: 'Joe' } });
    wrapper.find(FORM).simulate('submit');
    expect(wrapper.find(BANNER).text()).toBe(`Welcome, Joe!`);
  });

  it('invalid submit does nothing', () => {
    wrapper.find(INPUT).simulate('change', { target: { value: '9' } });
    wrapper.find(FORM).simulate('submit');
    expect(wrapper.find(BANNER).text()).toBe(DEFAULT_TEXT);
  });

  it('submit with empty messge resets text to default', () => {
    wrapper.find(INPUT).simulate('change', { target: { value: 'Joe' } });
    wrapper.find(FORM).simulate('submit');
    wrapper.find(INPUT).simulate('change', { target: { value: '' } });
    wrapper.find(FORM).simulate('submit');
    expect(wrapper.find(BANNER).text()).toBe(DEFAULT_TEXT);
  });
});
