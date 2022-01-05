import React from 'react';
import { Center, NativeBaseProvider, VStack } from 'native-base';
import {
  theme,
  FormHistrix,
  AtomicInput,
  AtomicButton,
  T,
  AtomicTextarea,
} from 'components-app-histrix';

export default function App() {
  const onSubmit = (data: T) => console.log(data);
  return (
    <NativeBaseProvider theme={theme}>
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
              rules={{
                required: 'Este campo es requerido',
                maxLength: { value: 8, message: 'No puede ser mas de 8' },
                minLength: { value: 2, message: 'No puede ser menos de 2' },
              }}
            />
            <AtomicTextarea name="textarea" />
            <AtomicButton onPress={onSubmit}> Prueba </AtomicButton>
          </FormHistrix>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
