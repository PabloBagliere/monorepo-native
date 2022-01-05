import React from 'react';
import { Box, Text, Heading, VStack, Link, HStack } from 'native-base';
import { AtomicButton, AtomicInput, FormHistrix } from 'components-app-histrix';

import { LoginApi } from '../services/Api';
export const Login = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const onSubmit = (data) => {
    LoginApi({ password: data.password, username: data.username }).then(
      (info) => {
        console.log(info);
      },
    );
  };

  return (
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Heading
        size="lg"
        fontWeight="600"
        color="coolGray.800"
        _dark={{
          color: 'warmGray.50',
        }}
      >
        RosganNet
      </Heading>
      <Heading
        mt="1"
        _dark={{
          color: 'warmGray.200',
        }}
        color="coolGray.600"
        fontWeight="medium"
        size="xs"
      >
        Iniciar sesion
      </Heading>

      <VStack space={3} mt="5">
        <FormHistrix defaultValues={{}}>
          <AtomicInput
            name="username"
            label="Usuario"
            rules={{
              required: 'Este campo es requerido',
              minLength: {
                value: 2,
                message: 'No puede ser menos de 2 caracteres',
              },
            }}
            type="text"
            message="Este usuario tambien puede ser tu email."
          />
          <AtomicInput
            name="password"
            label="Contraseña"
            type="password"
            rules={{
              required: 'Este campo es requerido',
              minLength: {
                value: 2,
                message: 'No puede ser menos de 2 caracteres',
              },
            }}
          />
          <AtomicButton onPress={onSubmit}> Ingresar </AtomicButton>
        </FormHistrix>
        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}
          >
            No tienes cuenta
          </Text>
          <Link
            _text={{
              color: 'indigo.500',
              fontWeight: 'medium',
              fontSize: 'sm',
            }}
            href="#"
          >
            Registrate
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};
