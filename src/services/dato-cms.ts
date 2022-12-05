import { setContext } from "@apollo/client/link/context";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const url = "https://graphql.datocms.com/";
const token = process.env.DATOCMS_READ_ONLY_API_TOKEN;

const httpLink = createHttpLink({
  uri: url,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
