# Frontend Testing Workshop

This is a live coding workshop to walk through building a small React app using TDD.

### Reference materials

Wayfair JS Testing docs:

- [Overview](https://docs.csnzoo.com/javascript/documentation/Testing%20&%20Static%20Analysis/Testing%20Overview/) (Contains links to Jest and Enzyme docs)
- [React & Redux](https://docs.csnzoo.com/javascript/documentation/Testing%20&%20Static%20Analysis/Testing%20React%20and%20Redux/)
- [Strategy](https://docs.csnzoo.com/javascript/documentation/Testing%20&%20Static%20Analysis/Testing%20Strategy/)
- [Patterns](https://docs.csnzoo.com/javascript/patterns/tests/)

### Preparation

Set up a screen with these windows:

- Code editor
- The [requirements][1]
- A terminal with `npm run test -- --watch` running
- The page you're building (`npm start` will display a `localhost` link, the page will auto reload as you make changes)

### Instructions

You're building an app that has:

- A container with a banner and a presentational component `UserInput`
- `UserInput` component with an input and a submit button, and a warning that displays if the input is invalid
- A validation function - letters/spaces are valid, numbers are invalid

TDD it from the bottom up, starting with the validation function, then the `UserInput` presentational component, and finally the container that handles input validation and form submission.

Use the [requirements][1] as a guide, checking off each box after you've both written tests for and built each feature.

Be prepared to talk through your process, explaining why you're doing certain things, as well as avoiding certain things.

#### `validateInput`

1. Test that it returns true with a string input
2. Create `validateInput` function, return `true`
3. Test that it returns false with a number input
4. Update function with regex: `/[a-z ]*/gi.test(input)`

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
2. Fix regex: /^[a-z ]\*\$/gi.test(input)

### BONUS, if time allows:

#### Refactor tests

1. Show tests break with component mounted once in `describe` scope
2. Write `beforeEach`, `afterEach`

---

### Notes

- Isolate tests - use UserInputContainer as stateful example
- Notice what we're intentionally not testing:
  - `state` and class methods (internals)

---

[1]: https://github.com/helloitsjoe/testing-workshop/issues/3

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
