import { Box, Heading, VStack } from 'native-base';
import { DynamicForm } from 'components-app-histrix';
import React, { FC } from 'react';

import { mock } from './data';

const Dynamic: FC = (): JSX.Element => {
  const prueba = (value) => {
    console.log(value);
  };
  return (
    <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto">
      <Heading size="lg" fontWeight="600" color="coolGray.800">
        Welcome
      </Heading>
      <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
        Sign in to continue!
      </Heading>
      <VStack space={3} mt="5">
        <DynamicForm dataInputs={mock} onSubmit={prueba} textButton="hola" />
      </VStack>
    </Box>
  );
};

export default Dynamic;
