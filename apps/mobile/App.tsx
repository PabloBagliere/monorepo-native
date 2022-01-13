// TODO: Implementar sentry

import React from 'react';
import { Center, NativeBaseProvider, Text, VStack } from 'native-base';
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
    >
      <NativeBaseProvider theme={theme}>
        <Center
          _dark={{ bg: 'blueGray.900' }}
          _light={{ bg: 'blueGray.50' }}
          px={4}
          flex={1}
        >
          <VStack space={5} alignItems="center">
            <Text>Hola</Text>
          </VStack>
        </Center>
      </NativeBaseProvider>
    </HistrixApp>
  );
}
