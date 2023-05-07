/* eslint-disable */ 
// import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import "../styles/globals.scss";
import { ApolloProvider } from "@apollo/client";
import { Layout } from "../components";
import client from "../apollo-client";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <div style={{zIndex: "2"}}>
        <Layout />
      </div>
      <div style={{ marginTop: "13%", zIndex: 0 }}>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;

