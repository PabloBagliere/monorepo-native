// TODO: Implementar sentry

import React from 'react';
import { Center, NativeBaseProvider, VStack } from 'native-base';
import { theme } from 'components-app-histrix';
// import * as Sentry from 'sentry-expo';
// import { SENTRY_DSN } from '@env';

import { SWRCache } from './src/context/SWRCahce';
import { Login } from './src/pages/Login';
import { ContextAuth } from './src/context/Login';

// if (SENTRY_DSN) {
//   Sentry.init({
//     dsn: SENTRY_DSN,
//     enableInExpoDevelopment: true,
//     debug: true,
//   });
// }

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <ContextAuth>
        <SWRCache>
          <Center
            _dark={{ bg: 'blueGray.900' }}
            _light={{ bg: 'blueGray.50' }}
            px={4}
            flex={1}
          >
            <VStack space={5} alignItems="center">
              <Login />
            </VStack>
          </Center>
        </SWRCache>
      </ContextAuth>
    </NativeBaseProvider>
  );
}
