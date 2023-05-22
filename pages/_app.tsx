
import Layout from "../components/layouts/Layout";
import "@/styles/globals.css";
import { ApolloProvider,ApolloClient,InMemoryCache} from "@apollo/client";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  const client = new ApolloClient({
    uri: 'https://api.almas-pro.ir/',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider  client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </ApolloProvider>
  );
}
