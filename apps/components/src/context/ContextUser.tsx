import { Center, Heading, HStack, Spinner } from 'native-base';
import React, { createContext, FC, useEffect, useState } from 'react';

import { secureDB } from '../config/varibleApi';
import { useAxios } from '../hooks/useAxios';

interface propsContext {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  isSetToken: boolean;
}

const Context = createContext({} as propsContext);

export const ContextUser: FC = ({ children }): JSX.Element => {
  const [token, setToken] = useState<string | null>(null);
  const [isSetToken, setIsSetToken] = useState<boolean | null>(null);
  const { setTokenAxios, deleteTokenAxios, isReady } = useAxios();
  useEffect(() => {
    const getToken = async () => {
      try {
        const response = await secureDB.getSecure('Token-access');
        if (!response || response.length === 0) {
          setIsSetToken(false);
          return;
        }
        setToken(response);
      } catch (error) {
        // TODO: setError
        setIsSetToken(false);
      }
    };
    getToken();
  }, []);

  useEffect(() => {
    if (token) {
      setTokenAxios(token);
      setIsSetToken(true);
      return;
    }
    deleteTokenAxios();
    setIsSetToken(false);
  }, [deleteTokenAxios, setTokenAxios, token]);

  if (isReady || isSetToken === null) {
    return (
      <Center h="100%" w="100%">
        <HStack space={2} alignItems="center">
          <Spinner accessibilityLabel="Loading app" size="lg" />
          <Heading color="primary.500" fontSize="md">
            Cargando...
          </Heading>
        </HStack>
      </Center>
    );
  }

  return (
    <Context.Provider value={{ token, setToken, isSetToken }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
