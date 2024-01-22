import { FC } from "react";
import SoftSkills from "./views/SoftSkills";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const App: FC = () => (
  <ApolloProvider client={client}>
    <SoftSkills />
  </ApolloProvider>
);

export default App;
