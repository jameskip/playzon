[![Playwright Tests](https://github.com/jameskip/playzon/actions/workflows/main.yml/badge.svg)](https://github.com/jameskip/playzon/actions/workflows/main.yml)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/jameskip/playzon/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/jameskip/playzon/tree/main)

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
- [x] search by product id (ASIN) and verify the expected product is found
- [x] stretch goal: time permitting, whatever test you think appropriate/important
  - [x] Add snapshot testing to verify the product page looks as expected
  - [ ] Add cookies to standardize login flow and other settings
  - [x] Run in Github Actions and CircleCI

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
