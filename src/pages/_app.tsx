import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import '@/styles/globals/globals.css';
import '@/styles/globals/texts.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Odessey Labs - Web research and development company</title>
        <meta
          name="description"
          property="description"
          content="Odessey Design and Research Labs"
        />
        <meta name="keywords" content="Odessey, Kollam, Kerala, Web, HTML, CSS, JavaScript"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Odessey Labs"></meta>
        <meta name="theme-color" content="#319197"></meta>
      </Head>
      <ChakraProvider resetCSS={false}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
export default MyApp;
