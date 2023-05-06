/* eslint-disable */ 
import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import "../styles/globals.scss";
import { ApolloProvider } from "@apollo/client";
import { Layout } from "../components";
import client from "../apollo-client";

function MyApp({ Component, pageProps }) {
  return (
        // <Router>
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
        // </Router> 
  );
}

export default MyApp;
