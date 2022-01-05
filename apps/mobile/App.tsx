import React from 'react';
import { Center, NativeBaseProvider, VStack } from 'native-base';
import {
  theme,
  FormHistrix,
  AtomicInput,
  AtomicButton,
  T,
} from 'components-app-histrix';

import { SWRCache } from './src/context/SWRCahce';

export default function App() {
  const onSubmit = (data: T) => console.log(data);
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
            <FormHistrix defaultValues={{}}>
              <AtomicInput
                name="prueba"
                placeholder="prueba"
                label="Prueba del label"
                rules={{
                  required: 'Este campo es requerido',
                  maxLength: { value: 8, message: 'No puede ser mas de 8' },
                  minLength: { value: 2, message: 'No puede ser menos de 2' },
                }}
                message="Este es un mensaje de prueba xd"
              />
              <AtomicButton onPress={onSubmit}> Prueba </AtomicButton>
            </FormHistrix>
          </VStack>
        </Center>
      </SWRCache>
    </NativeBaseProvider>
  );
}
