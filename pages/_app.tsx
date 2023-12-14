import type { AppProps } from "next/app";
import createApolloClient from "@/apollo-client";
import { ApolloProvider } from "@apollo/client";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
