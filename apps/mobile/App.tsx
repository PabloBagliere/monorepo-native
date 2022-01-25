// TODO: Implementar sentry

import React from 'react';
import { theme, HistrixApp } from 'components-app-histrix';
import {
  API_URL,
  CLIENT_ID,
  CLIENT_NAME,
  CLIENT_SECRET,
  GRANT_TYPE,
  NOTIFICATION_TOKEN,
} from '@env';

import { providerSecure } from './src/utils';
import { Navigations } from './src/Navigations';
// import * as Sentry from 'sentry-expo';

// if (SENTRY_DSN) {
//   Sentry.init({
//     dsn: SENTRY_DSN,
//     enableInExpoDevelopment: true,
//     debug: true,
//   });
// }

export default function App() {
  return (
    <HistrixApp
      provider={providerSecure}
      API_URL={API_URL}
      CLIENT_ID={CLIENT_ID}
      CLIENT_SECRET={CLIENT_SECRET}
      GRANT_TYPE={GRANT_TYPE}
      CLIENT_NAME={CLIENT_NAME}
      NOTIFICATION_TOKEN={NOTIFICATION_TOKEN}
      theme={theme}
    >
      <Navigations />
    </HistrixApp>
  );
}
