import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o7gf6c0zkp01xi8hrt3gmr/master',
  cache: new InMemoryCache()
})