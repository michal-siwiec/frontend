import { ApolloClient, InMemoryCache } from '@apollo/client';

export default new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache()
});
