import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {ApolloProvider as ApolloHooksProvider} from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://faker.graphqleditor.com/imbera/resfy/graphql',
  cache: new InMemoryCache(),
});
const Main = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <App />
    </ApolloHooksProvider>
  </ApolloProvider>
);
AppRegistry.registerComponent(appName, () => Main);
