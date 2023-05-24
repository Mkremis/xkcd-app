import Header from 'components/Header.js';
import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <Header/>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
