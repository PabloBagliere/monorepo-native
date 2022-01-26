import { AtomicButton, useMe } from 'components-app-histrix';
import { Text } from 'native-base';
import React, { FC, useEffect, useState } from 'react';

import { providerSecure } from '../utils/SegureStorage';
import { propsHome } from '../Interfaces/routers';

export const HomeScreen: FC<propsHome> = ({ navigation }): JSX.Element => {
  const { Me, isError, isLoading } = useMe();
  const [token, setToken] = useState('');

  useEffect(() => {
    const getToken = async () => {
      try {
        const response = await providerSecure.getSecure('Token-access');
        if (response) {
          setToken(response);
        }
      } catch (error) {
        // TODO: cuando ahi error
      }
    };
    getToken();
  }, []);
  if (isLoading) return <Text>Cargando</Text>;
  if (isError) return <Text>Error:</Text>;

  return (
    <>
      <Text>Home</Text>
      {Me ? (
        <AtomicButton>Deslogear</AtomicButton>
      ) : (
        <AtomicButton onPress={() => navigation.navigate('Login')}>
          Logearse
        </AtomicButton>
      )}
      <Text> {token} </Text>
    </>
  );
};
