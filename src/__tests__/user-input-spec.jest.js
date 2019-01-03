// 1. React component
// 2. React container

import {mount} from 'enzyme';

describe('user input', () => {
  it('text is "Hello, you!" by default', () => {
    const wrapper = mount(<UserInputContainer />);
    expect(wrapper.find('[data-enzyme-id]="banner"').text()).toBe('Hello, you!');
  });
});
