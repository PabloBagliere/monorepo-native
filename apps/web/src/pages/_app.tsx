import '../Styles/global.css';

import Head from 'next/head';
import { AppProps } from 'next/app';
import { theme, HistrixApp } from 'components-app-histrix';
import React from 'react';

import { secureDB } from '../utils/provider';

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
      <HistrixApp
        provider={secureDB}
        API_URL={process.env.NEXT_PUBLIC_API_URL}
        CLIENT_ID={process.env.NEXT_PUBLIC_CLIENT_ID}
        CLIENT_SECRET={process.env.NEXT_PUBLIC_CLIENT_SECRET}
        GRANT_TYPE={process.env.NEXT_PUBLIC_GRANT_TYPE}
        CLIENT_NAME={process.env.NEXT_PUBLIC_CLIENT_NAME}
        NOTIFICATION_TOKEN={process.env.NEXT_PUBLIC_NOTIFICATION_TOKEN}
        theme={theme}
      >
        <Component {...pageProps} />
      </HistrixApp>
    </React.StrictMode>
  );
}

export default MyApp;
