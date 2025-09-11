import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, concat } from '@apollo/client';
import { API_URL, BASIC_AUTH_USER, BASIC_AUTH_PASSWORD, isProductionEnv } from 'utils/environment';
import 'unfetch/polyfill';

const httpLink = new HttpLink({ uri: `${API_URL}/graphql/`, credentials: 'include' });
const operationNameLink = new ApolloLink((operation, forward) => {
  // @ts-ignore // TODO
  operation.setContext(({ headers }) => {
    const environmentHeaders = {
      ...headers,
      'gql-operation-names': operation.operationName
    };

    if (isProductionEnv) {
      environmentHeaders.authorization = `Basic ${btoa(`${BASIC_AUTH_USER}:${BASIC_AUTH_PASSWORD}`)}`;
    }

    return { headers: environmentHeaders };
  });

  return forward(operation);
});

export default new ApolloClient({
  link: concat(operationNameLink, httpLink),
  cache: new InMemoryCache()
});
