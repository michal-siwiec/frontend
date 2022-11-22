import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, concat } from '@apollo/client';
import { API_GRAPHQL_ROOT } from 'utils/environment.js';
import 'unfetch/polyfill';

const httpLink = new HttpLink({ uri: API_GRAPHQL_ROOT, credentials: 'include' });

const operationNameLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers }) => ({
    headers: {
      ...headers,
      'gql-operation-names': operation.operationName
    }
  }));

  return forward(operation);
});

export default new ApolloClient({
  link: concat(operationNameLink, httpLink),
  cache: new InMemoryCache()
});
