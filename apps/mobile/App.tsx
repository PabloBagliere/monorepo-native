import React from 'react';
import { Center, NativeBaseProvider, VStack } from 'native-base';
import { theme } from 'components-app-histrix';

import { SWRCache } from './src/context/SWRCahce';
import { Login } from './src/pages/Login';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
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
    </NativeBaseProvider>
  );
}
