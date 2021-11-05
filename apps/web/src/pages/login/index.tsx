import { FC, useState } from 'react';
import { LoginForm, propsFormLogin } from 'components-app-histrix';
import { Box, Button, Heading, VStack, WarningOutlineIcon } from 'native-base';
const Login: FC = (): JSX.Element => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const prueba: Array<propsFormLogin> = [
    {
      inputProps: { value: user, onChangeText: setUser, type: 'text' },
      labelProps: {
        _text: { color: 'coolGray.800', fontSize: 'xs', fontWeight: 500 },
      },
      labelString: 'Usuario',
      formProps: { isRequired: true },
      errorMessaje: {
        messaje: 'Usuario Requerido',
        props: { leftIcon: <WarningOutlineIcon size="xs" /> },
      },
      helperMessaje: {
        Messaje: 'El usuario puede ser tambien tu email',
        props: {},
      },
    },
    {
      inputProps: {
        value: password,
        onChangeText: setPassword,
        type: 'password',
      },
      labelProps: {
        _text: { color: 'coolGray.800', fontSize: 'xs', fontWeight: 500 },
      },
      labelString: 'Contraseña',
      formProps: { isRequired: true },
      errorMessaje: {
        messaje: 'Contraseña requerida',
        props: { leftIcon: <WarningOutlineIcon size="xs" /> },
      },
    },
  ];
  const loading = () => {
    console.log('user ', user);
    console.log('password ', password);
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
        <LoginForm Inputs={prueba} />
        <Button onPress={loading}>Login</Button>
      </VStack>
    </Box>
  );
};

export default Login;
