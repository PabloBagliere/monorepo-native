import React, { FC, useEffect } from 'react';
import { ITheme, NativeBaseProvider } from 'native-base';
import { ActivityIndicator } from 'react-native';

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
import { ContextUser } from './ContextUser';
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
  const { setInstance, isReady } = useAxios();
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
    setSecureDB(provider);
  }, [
    API_URL,
    CLIENT_ID,
    CLIENT_NAME,
    CLIENT_SECRET,
    GRANT_TYPE,
    NOTIFICATION_TOKEN,
    provider,
    setInstance,
  ]);

  if (!isReady) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <NativeBaseProvider theme={theme}>
      <SWRCache>
        <ContextUser>
          {children}
          <Message />
        </ContextUser>
      </SWRCache>
    </NativeBaseProvider>
  );
};
