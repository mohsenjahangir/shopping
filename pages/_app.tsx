import Layout from "../components/layouts/Layout";
import "@/styles/globals.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "https://api.almas-pro.ir/",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Head>
        <link rel="icon"   type="image/svg+xml"  href="https://s.cafebazaar.ir/images/icons/com.digikala.seller-5be3f0ae-a16d-412d-adb6-f684be28f9ca_512x512.webp"/>
        <title className="text-2xl font-bold text-gray-800">فروشگاه  اینترنتی ویتسل</title>
      </Head>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}