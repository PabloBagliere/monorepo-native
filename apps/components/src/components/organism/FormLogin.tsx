import { Box, Heading, VStack, Center } from 'native-base';
import React, { FC } from 'react';

import { AtomicInput } from '../atomic/Input';
import { Token } from '../../Interfaces/api/Token';
import { CLIENT_NAME } from '../../config/varibleApi';
import { AtomicButton } from '../atomic/Button';
import { LoginApi } from '../../services/Api';
import { T } from '../../Interfaces/anyT';
import { useMessage } from '../../hooks/useMessage';
import { ResponseErrorApi } from '../../Interfaces/api/ResponseErrorApi';
import { useToken } from '../../hooks/useToken';

interface props {
  action: T;
}

export const FormLogin: FC<props> = ({ action }): JSX.Element => {
  const { MessageError, MessageSuccess } = useMessage();
  const { saveToken } = useToken();
  const onSubmit = (data) => {
    LoginApi({ password: data.password, username: data.username })
      .then((info: Token) => {
        MessageSuccess({
          message: 'Felicidades ingresaste',
          options: {
            icon: '👍',
          },
        });
        saveToken(info).then((response) => action(response));
      })
      .catch((error: ResponseErrorApi) => {
        if (error.info.status === 401) {
          MessageError({
            message: 'Usuario o contraseña incorrecto vuelva a intentar',
            options: {
              icon: '❌',
            },
          });
          return;
        }
        MessageError({ message: JSON.stringify(error.info, null, 2) });
      });
  };
  return (
    <Box safeArea p="4" py="8" w="100%" h="100%">
      <Center>
        <Heading
          size="xl"
          fontWeight="700"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}
        >
          {CLIENT_NAME}
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
      </Center>
      <VStack space={3} mt="5" alignItems="center">
        <AtomicInput
          styleLayout={{
            w: '100%',
          }}
          w="1/2"
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
          styleLayout={{
            w: '100%',
          }}
          w="1/2"
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
        <AtomicButton onPress={onSubmit} w="1/3">
          Iniciar sesion
        </AtomicButton>
      </VStack>
    </Box>
  );
};
