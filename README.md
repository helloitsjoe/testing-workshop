# Frontend Testing Workshop

Live coding workshop to walk through building a small React app using TDD. It is
not a comprehensive guide to testing, but a starting point to answer some basic
questions:

1. Where do I start?
2. What is this test telling me?
3. How do I know I'm done?

### Reference materials

Wayfair JS Testing docs:

- [Overview](https://docs.csnzoo.com/javascript/documentation/Testing%20&%20Static%20Analysis/Testing%20Overview/)
  (Contains links to Jest and Enzyme docs)
- [React & Redux](https://docs.csnzoo.com/javascript/documentation/Testing%20&%20Static%20Analysis/Testing%20React%20and%20Redux/)
- [Strategy](https://docs.csnzoo.com/javascript/documentation/Testing%20&%20Static%20Analysis/Testing%20Strategy/)
- [Patterns](https://docs.csnzoo.com/javascript/patterns/tests/)

### Instructions

1. From the project root, run `npm install`
2. Start the test runner watching with `npm run test -- --watch`

You're building an app that has:

- `UserInput` component with an input and a submit button, and a warning that
  displays if the input is invalid
- `BannerWrapper` component that wraps children and displays a banner
- `UserInputContainer` that holds state and change/submit handlers for the
  presentational components
- A validation function - letters/spaces are valid, numbers are invalid

TDD it from the bottom up. Start with the validation function to cover the
bascis of Jest, then use Enzyme to unit test the presentational components, then
write integration tests that cover the container's functionality.

Use the [requirements][1] as a guide, checking off each box after you've both
written tests for and built each feature.

# If you're doing this as a presentation

Be prepared to talk through your process, explaining why you're doing certain
things, as well as avoiding certain things.

- Why TDD?
- Avoid internals like `this.state`
- Declarative - Test WHAT it does, not HOW it does it
- Unit/integration test tradeoffs

#### Where do I start?

- Starting from scratch? Write tests first, using requirements as a guide
- Testing existing components? Start with the happy path

#### What is this test telling me?

- Tests are living documentation, they should be clear what behavior is being
  tested, and clear/specific about what's wrong when they fail

#### How do I know I'm done?

- All logic branches have been covered: not a perfect metric, but a good
  guideline

## Preparation

Set up a screen with these windows:

- Code editor with split screen: tests on one side, implementation on the other
  (to avoid jumping around)
- The [requirements][1]
- A terminal

Optional: Update the slide deck in `deck.mdx`. Launch it with `npm run deck`
(see [mdx-deck](https://github.com/jxnblk/mdx-deck) for more info)

## Presentation

- On the `master` branch, open page you're going to build with `npm start`
- Switch to the empty template branch: `git checkout empty`
- Run `npm test -- --watch`
- Explain what we're looking at - requirements, file structure in code editor,
  test watch
- Follow the instructions above until all requirements are checked off. Reveal
  the completed app.
- If bugs come up during the presentation, TDD them away!

### BONUS, if time allows:

#### Refactor tests

1. Refactor individual validation tests into one `test.each` block
2. Show tests break with component mounted once in `describe` scope
3. `beforeAll/Each`, `afterAll/Each`

---

[1]: https://git.csnzoo.com/joboyle/frontend-testing-workshop/issues/1

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).
