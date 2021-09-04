import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { auth } from 'utils/auth';
import { App } from './app';
import 'cirrus-ui';
import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

render(
  <Auth0Provider
    domain={auth.domain}
    clientId={auth.clientId}
    redirectUri={auth.redirectUri}
  >
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Auth0Provider>,
  document.querySelector('#app')
);
