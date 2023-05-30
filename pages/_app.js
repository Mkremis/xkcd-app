
import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';
import { I18NProvider } from 'context/i18n';




function MyApp({ Component, pageProps }) {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <I18NProvider>
        <Component {...pageProps} />
      </I18NProvider>
    </NextUIProvider>
  )
}

export default MyApp;
