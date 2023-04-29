import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-ap-south-1.hygraph.com/v2/clf80qbfd73bl01uma4iyc0ps/master", // replace with your GraphQL server endpoint
  cache: new InMemoryCache(),
});

export default client;
