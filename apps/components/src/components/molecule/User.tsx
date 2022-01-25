import { Avatar, Center, HStack, Skeleton, Text, VStack } from 'native-base';
import React, { FC } from 'react';

import { AtomicButton } from '../atomic/Button';
import { useMe } from '../../hooks';

export const User: FC = (): JSX.Element => {
  const { Me, isLoading, isError } = useMe();
  if (isLoading) {
    return (
      <Center w="100%">
        <HStack
          w="90%"
          maxW="400"
          space={8}
          rounded="md"
          _dark={{
            borderColor: 'coolGray.500',
          }}
          _light={{
            borderColor: 'coolGray.200',
          }}
        >
          <Skeleton
            borderWidth={1}
            borderColor="coolGray.200"
            endColor="warmGray.50"
            size="20"
            rounded="full"
          />
          <VStack>
            <Skeleton.Text lines={2} ml={-5} alignItems="center" />
            <Skeleton w="40" rounded="20" mt={5} ml={-6} />
          </VStack>
        </HStack>
      </Center>
    );
  }
  if (isError) {
    return (
      <Center w="100%">
        <Text>Error:</Text>
      </Center>
    );
  }
  if (Me) {
    return (
      <Center w="100%">
        <HStack
          w="90%"
          maxW="400"
          space={8}
          rounded="md"
          _dark={{
            borderColor: 'coolGray.500',
          }}
          _light={{
            borderColor: 'coolGray.200',
          }}
        >
          <Center>
            <Avatar bg="gray.400" size={55}>
              {Me.first_name?.charAt(0).toUpperCase()}
              {Me.last_name?.charAt(0).toUpperCase()}
            </Avatar>
          </Center>
          <VStack>
            <Text>{Me.fullname}</Text>
            <Text>{Me.email}</Text>
            <AtomicButton w="40" size="xs" rounded="20" mt={1} ml={-3}>
              Salir
            </AtomicButton>
          </VStack>
        </HStack>
      </Center>
    );
  }
  return (
    <Center w="100%">
      <AtomicButton w="40" rounded="20" mt={5} ml={-6}>
        Ingresar
      </AtomicButton>
    </Center>
  );
};
