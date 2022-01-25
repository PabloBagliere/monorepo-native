import React, { createContext, FC, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { ITheme, NativeBaseProvider } from 'native-base';

import config, {
  setAPI_URL,
  setCLIENTE_SECRET,
  setCLIENT_ID,
  setGRANT_TYPE,
  setNOTIFICATION,
  setSecureDB,
  setCLIENT_NAME,
} from '../config/varibleApi';
import { propsSecureDB } from '../Interfaces/secureDB';
import { Message } from '../components/atomic/MessageFeedback';
import { useAxios } from '../hooks/useAxios';

import { SWRCache } from './Caching';
interface propsDefaultSecret {
  API_URL?: string;
  CLIENT_ID?: string;
  CLIENT_SECRET?: string;
  GRANT_TYPE?: string;
  NOTIFICATION_TOKEN?: string | null;
  CLIENT_NAME?: string;
  provider: propsSecureDB;
  theme: ITheme;
}

config();

interface contextProps {
  isToken: boolean;
}

const Context = createContext({} as contextProps);

export const HistrixApp: FC<propsDefaultSecret> = ({
  children,
  API_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  GRANT_TYPE,
  NOTIFICATION_TOKEN,
  provider,
  CLIENT_NAME,
  theme,
}): JSX.Element => {
  const { setToken, setInstance, isReady, isToken } = useAxios();
  useEffect(() => {
    if (API_URL) {
      setAPI_URL(API_URL);
      setInstance(API_URL);
    }
    if (CLIENT_ID) setCLIENT_ID(CLIENT_ID);
    if (CLIENT_SECRET) setCLIENTE_SECRET(CLIENT_SECRET);
    if (GRANT_TYPE) setGRANT_TYPE(GRANT_TYPE);
    if (CLIENT_NAME) setCLIENT_NAME(CLIENT_NAME);
    if (typeof NOTIFICATION_TOKEN !== 'undefined')
      setNOTIFICATION(NOTIFICATION_TOKEN);
    setSecureDB(provider, setToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    API_URL,
    CLIENT_ID,
    CLIENT_NAME,
    CLIENT_SECRET,
    GRANT_TYPE,
    NOTIFICATION_TOKEN,
    provider,
  ]);
  if (!isReady) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <NativeBaseProvider theme={theme}>
      <Context.Provider value={{ isToken: isToken }}>
        <SWRCache>
          {/* <Pages>{children}</Pages> */}
          {children}
          <Message />
        </SWRCache>
      </Context.Provider>
    </NativeBaseProvider>
  );
};

export default Context;
