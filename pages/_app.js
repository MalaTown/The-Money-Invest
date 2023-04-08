import React from 'react';
import '../styles/globals.scss';
import { ApolloProvider } from '@apollo/client';
import { Layout } from '../components';
import client from '../apollo-client';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
