[![Playwright Tests](https://github.com/jameskip/playzon/actions/workflows/main.yml/badge.svg)](https://github.com/jameskip/playzon/actions/workflows/main.yml)

# playzon

## Conditions

- timebox to ~2 hours
- write tests in javascript or python, in a framework of your choosing
- must use page objects
- must pass all tests
- must include a README with documentation
- could run on ci?

## E2E Testcases

Select one _specific_ product on <https://amazon.com> and:

- [x] verify product(s) can be added to cart
- [x] search by product name/text and verify the expected product is found
- [ ] search by product id (ASIN) and verify the expected product is found
- [ ] stretch goal: time permitting, whatever test you think appropriate/important

## Install

```bash
npm install
```

## Run Tests

```bash
npm test
```

[More information on running tests](https://playwright.dev/docs/running-tests)

## Writing Tests

[More information on writing tests](https://playwright.dev/docs/writing-tests)
| :point_up: | Our implementation uses the [page object model](https://playwright.dev/docs/pom#implementation) |
| ---------- | :---------------------------------------------------------------------------------------------- |
