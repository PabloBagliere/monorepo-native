import { Center, Heading, HStack, Spinner } from 'native-base';
import React, {
  createContext,
  FC,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { secureDB } from '../config/varibleApi';
import { useToken } from '../hooks/useToken';
import { useAxios } from '../hooks/useAxios';
import { Token } from '../Interfaces/api/Token';

interface propsContext {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  isSetToken: boolean;
  saveToken: (token: Token) => Promise<boolean>;
}

const Context = createContext({} as propsContext);

export const ContextUser: FC = ({ children }): JSX.Element => {
  const [token, setToken] = useState<string | null>(null);
  const [isSetToken, setIsSetToken] = useState<boolean | null>(null);
  const { setTokenAxios, deleteTokenAxios, isReady } = useAxios();
  const { deleteToken, saveTokenSecure } = useToken();
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

  const saveToken = useCallback(
    async (token: Token) => {
      const response = await saveTokenSecure(token);
      if (response) {
        setToken(token.access_token);
      }
      return Promise.resolve(response);
    },
    [saveTokenSecure],
  );

  useEffect(() => {
    if (token) {
      setTokenAxios(token);
      setIsSetToken(true);
      return;
    }
    deleteTokenAxios();
    deleteToken();
    setIsSetToken(false);
  }, [deleteToken, deleteTokenAxios, setTokenAxios, token]);

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
    <Context.Provider value={{ token, setToken, isSetToken, saveToken }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
