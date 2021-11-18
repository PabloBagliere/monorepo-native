import { Box, Heading, VStack, ScrollView } from 'native-base';
import {
  DynamicForm,
  typeValidation,
  reponseWatch,
} from 'components-app-histrix';
import React, { FC } from 'react';

import { mock } from './data';

const Dynamic: FC = (): JSX.Element => {
  const prueba = (value: any) => {
    console.log(value);
  };

  const watchPrueba = ({ nameUpdate, valueUpdate }: reponseWatch) => {
    console.log(nameUpdate, valueUpdate);
  };
  return (
    <ScrollView
      _contentContainerStyle={{
        px: '20px',
        mb: '4',
        minW: '72',
      }}
    >
      <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto">
        <Heading size="lg" fontWeight="600" color="coolGray.800">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>
        <VStack space={4} mt="5">
          <DynamicForm
            dataInputs={mock}
            watchFuntion={watchPrueba}
            watchList={['passwordInput']}
          >
            <DynamicForm.add
              isRequired
              name="pruebaDynamic"
              defaultValue=""
              validation={[
                {
                  typeBase: 'string',
                  type: typeValidation.REQUIRED,
                  message: 'Es requerido',
                },
                {
                  typeBase: 'string',
                  type: typeValidation.MIN,
                  message: 'Es requerido',
                  value: 5,
                },
              ]}
            >
              <DynamicForm.add.Label>
                Prueba de componente
              </DynamicForm.add.Label>
              <DynamicForm.add.Input />
            </DynamicForm.add>
            <DynamicForm.button onSubmit={prueba}>prueba</DynamicForm.button>
          </DynamicForm>
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default Dynamic;
