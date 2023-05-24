import Head from 'next/head';
import Header from 'components/Header.js';
import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <Head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>xkcd - Comics for developers</title>
        <meta name='description' content='Comics for developers'/>
        <link rel='icon' href=''/>
      </Head>
      <Header/>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
