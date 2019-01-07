# Frontend Testing Workshop

### Instructions:

Fulfill [requirements](https://github.com/helloitsjoe/testing-workshop/issues/3)

#### `validateInput`

1. Test that it returns true with a string input
2. Create `validateInput` function, return `true`
3. Test that it returns false with a number input
4. Update function to check isNaN

#### `UserInput`

1. Write a test that it displays input and button
2. Create component, make test pass
3. Test for warning text on invalid input and vice versa
4. Update component with `valid` prop

#### `UserInputContainer`

1. Update `index.js` to render `UserInputContainer`
2. Make tests pass again
3. Test that default text is 'Please enter your name'
4. Create component, make it pass
5. Test that submit changes banner text to 'Welcome, [user]!'
6. Make test pass
7. Test that submit resets banner text if no input
8. Make test pass
9. Integration test: warning on invalid input, button is disabled

#### Back to `validateInput`
1. Write test for bug - mix of letters and numbers
2. Update function with regex

#### Refactor tests
1. Show tests break with component mounted once in `describe` scope
2. Write `beforeEach`, `afterEach`

---

### Notes:

- Isolate tests - use UserInputContainer as stateful example
- Notice what we're intentionally not testing:
  - `state` and class methods (internals)
  - `className`s - (not a functional concern)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
