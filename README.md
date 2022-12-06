# Budoman-front

## About project

Budoman-front is a frontend part-creating microservice for construction shop.
This is developed using:

- [React](https://reactjs.org/) (17.0.2)
- [Graphql](https://graphql.org/) (16.2.0)
- [Redux](https://redux.js.org/) (4.2.0)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress) (11.0.1)
- [RTL](https://testing-library.com/docs/react-testing-library/intro/) (12.0.0)

## Requirements

- Node.js 12.6.0

## Setup

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
cp .env.sample .env
```

## Usage

To start app use:
```bash
npm run start
```

## Code quality

I use linters for js && scss files. To run linters:

```bash
npm run js-lint
npm run css-lint
```

## Tests

### Unit
```bash
npm run react-test
```

### e2e
```bash
npm run e2e-test # to run CLI
npm run open-e2e-test # to run in browser
```

### CI-CD

I use github actions to test and automatically deploy code to production server. After each commit linters and tests are called automatically.
