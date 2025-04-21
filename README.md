# Budoman-front

## About project

Budoman-front is a frontend application representing construction shop.
This is developed using:

- [React](https://reactjs.org/) (17.0.2)
- [Graphql](https://graphql.org/) (16.2.0)
- [Redux](https://redux.js.org/) (4.2.0)
- [RTL](https://testing-library.com/docs/react-testing-library/intro/) (12.0.0)

## Requirements

- Node.js 12.6.0

## Application setup
1. Make sure that you have filled .env file
2. Make sure that you have Docker installed on your local machine
3. Run the following command to start the application:

To start app use:
```bash
SSH_PUB_KEY=$(cat ~/.ssh/id_rsa.pub) docker-compose build # Build images (perform only once)
docker-compose up # App should be available on port 3003
```

## Code quality
```bash
npm run lint:css # to launch linter for css files
npm run lint:js # to launch linter for js files
npm run test:unit:jest # to launch unit tests written with JEST
npm run test:unit:rtl # to launch unit tests written with RTL
npm run test:integration # to launch integration tests written with RTL
```

## Deploy
To make a deploy on PROD env use:
```bash
bin/deploy.sh
```
