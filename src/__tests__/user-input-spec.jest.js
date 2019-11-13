import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserInput from '../user-input';
import Banner from '../banner';
import UserInputContainer from '../user-input-container';

// You can use `describe` blocks to organize tests.
describe('UserInput', () => {
  // Test descriptions should be clear, specific, and read like a sentence:
  // 'it does a specific thing under these conditions'
  it('displays input and submit button', () => {
    const { queryByText, queryByPlaceholderText, debug } = render(<UserInput />);
    expect(queryByText('Submit')).toBeTruthy();
    expect(queryByPlaceholderText('Enter name')).toBeTruthy();

    // NOTE: For debugging tests, the `debug()` method will output the
    // entire DOM so you can see exactly what was mounted.

    // debug(); // <-- uncomment this to see it in action

    // Remove all `debug()` calls before committing your code.
  });

  // Test to make sure your component has the outcome you expect under a certain condition
  it('displays warning if valid is false', () => {
    const { queryByText } = render(<UserInput isValid={false} />);
    expect(queryByText('Numbers are invalid')).toBeTruthy();
  });

  // Test the opposite to make sure it DOESN'T do what you DON'T want to happen
  it('does NOT display warning if valid is true', () => {
    const { queryByText } = render(<UserInput isValid />);
    expect(queryByText('Numbers are invalid')).toBeFalsy();
  });

  it('submit triggers onSubmit', () => {
    // jest.fn() lets you mock a function to make assertions on it: was it called?
    // Was it called with the right parameters?
    const onSubmit = jest.fn();
    const { queryByText } = render(<UserInput onSubmit={onSubmit} />);
    // Make sure your function isn't called before it should be
    expect(onSubmit).not.toBeCalled();
    fireEvent.submit(queryByText('Submit'));
    expect(onSubmit).toBeCalled();
  });

  it('input change triggers onChange', () => {
    const onChange = jest.fn();
    const { queryByPlaceholderText } = render(<UserInput onChange={onChange} />);
    expect(onChange).not.toBeCalled();
    // When simulating events, if the handler takes parameters you should
    // pass those in as arguments. In this case, `onChange` expects an event,
    // so we need to pass in an object in the right shape.
    fireEvent.change(queryByPlaceholderText('Enter name'), { target: { value: 'Joe' } });
    expect(onChange).toBeCalled();
  });
});

describe('Banner', () => {
  it('displays banner with default text', () => {
    // Another way to find a component is by data-enzyme-id
    const { queryByTestId } = render(<Banner />);
    // `.textContent` will return the text from a component.
    expect(queryByTestId('banner').textContent).toBe('Please enter your name');
  });

  it('displays welcome text if name is provided', () => {
    const { queryByTestId } = render(<Banner name="Joe" />);
    expect(queryByTestId('banner').textContent).toBe('Welcome, Joe!');
  });
});

describe('UserInputContainer', () => {
  it('invalid input displays warning message', () => {
    const { queryByPlaceholderText, queryByText } = render(<UserInputContainer />);
    const input = queryByPlaceholderText('Enter name');
    expect(queryByText('Numbers are invalid')).toBeFalsy();
    fireEvent.change(input, { target: { value: '9' } });
    expect(input.value).toBe('9');
    expect(queryByText('Numbers are invalid')).toBeTruthy();
  });

  it('valid submit changes banner to welcome text', () => {
    // There's some repetition in these tests (wrapper.find(), etc),
    // you might be tempted to use helper functions to DRY up your code.
    // Helpers have their uses, but we need to be careful with them.

    // They create abstraction which can lead to tests that are
    // harder to reason about - Google DAMP vs DRY for further reading.

    // ...they also introduce the potential for bugs hiding in your helpers
    // (especially if logic is involved), which can be hard to find/debug.

    // In tests, I personally prefer a bit of repetition over abstraction,
    // but this is not a hard and fast rule.
    const { queryByPlaceholderText, queryByText, queryByTestId } = render(<UserInputContainer />);
    const input = queryByPlaceholderText('Enter name');
    const button = queryByText('Submit');
    const banner = queryByTestId('banner');
    expect(banner.textContent).toBe('Please enter your name');
    fireEvent.change(input, { target: { value: 'Joe' } });
    fireEvent.submit(button);
    expect(banner.textContent).toBe('Welcome, Joe!');
  });

  it('invalid submit does nothing', () => {
    const { queryByPlaceholderText, queryByText, queryByTestId } = render(<UserInputContainer />);
    const input = queryByPlaceholderText('Enter name');
    const button = queryByText('Submit');
    const banner = queryByTestId('banner');
    expect(banner.textContent).toBe('Please enter your name');
    fireEvent.change(input, { target: { value: '9' } });
    fireEvent.submit(button);
    expect(banner.textContent).toBe('Please enter your name');
  });

  it('submit with empty messge resets text to default', () => {
    const { queryByPlaceholderText, queryByText, queryByTestId } = render(<UserInputContainer />);
    const input = queryByPlaceholderText('Enter name');
    const button = queryByText('Submit');
    const banner = queryByTestId('banner');
    expect(banner.textContent).toBe('Please enter your name');
    fireEvent.change(input, { target: { value: 'Joe' } });
    fireEvent.submit(button);
    expect(banner.textContent).toBe('Welcome, Joe!');
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.submit(button);
    expect(banner.textContent).toBe('Please enter your name');
  });
});
