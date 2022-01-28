import { Center, HStack, Spinner, Heading } from 'native-base';
import React, { FC } from 'react';

export const LoadingHistrix: FC = (): JSX.Element => (
  <Center h="100%" w="100%">
    <HStack space={2} alignItems="center">
      <Spinner accessibilityLabel="Loading app" size="lg" />
      <Heading color="primary.500" fontSize="md">
        Cargando...
      </Heading>
    </HStack>
  </Center>
);
