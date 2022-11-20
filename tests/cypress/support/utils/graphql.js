import { DEFAULT_REQUEST_DELAY } from '../constants.js';

const hasOperationName = ({ headers }, operationName) => (
  headers.hasOwnProperty('gql-operation-names') && headers['gql-operation-names'] === operationName
);

export const aliasQuery = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Query`
  }
};

export const aliasMutation = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Mutation`
  }
};

export const mockResponse = ({ request, operationName, fixturePath }) => {
  if (hasOperationName(request, operationName)) {
    request.reply({ fixture: fixturePath, statusCode: 200 });
  }
};

export const delayAndMock = ({ request, operationName, fixturePath, statusCode }) => {
  if (hasOperationName(request, operationName)) {
    return Cypress.Promise
                  .delay(DEFAULT_REQUEST_DELAY)
                  .then(() => request.reply({ fixture: fixturePath, statusCode }));
  }
};
