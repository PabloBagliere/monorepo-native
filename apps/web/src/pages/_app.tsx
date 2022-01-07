import Head from 'next/head';
import { AppProps } from 'next/app';
import { NativeBaseProvider } from 'native-base';
import { theme } from 'components-app-histrix';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Head>
        <title>NativeBase Universal App</title>
        <meta
          name="description"
          content="NativeBase starter kit with Next.js and React Native for rapid setup and easy development experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NativeBaseProvider theme={theme}>
        <Component {...pageProps} />
      </NativeBaseProvider>
    </React.StrictMode>
  );
}

export default MyApp;
