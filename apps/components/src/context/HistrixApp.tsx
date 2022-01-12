import React, { FC } from 'react';
import { ToastProvider } from 'react-native-toast-notifications';

import config, {
  setAPI_URL,
  setCLIENTE_SECRET,
  setCLIENT_ID,
  setGRANT_TYPE,
  setNOTIFICATION,
} from '../config/varibleApi';

import { SWRCache } from './Caching';

interface contextHistrixAppProps {
  API_URL?: string;
  CLIENT_ID?: string;
  CLIENT_SECRET?: string;
  GRANT_TYPE?: string;
  NOTIFICATION_TOKEN?: string | null;
}

config();
export const HistrixApp: FC<contextHistrixAppProps> = ({
  children,
  API_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  GRANT_TYPE,
  NOTIFICATION_TOKEN,
}): JSX.Element => {
  if (API_URL) setAPI_URL(API_URL);
  if (CLIENT_ID) setCLIENT_ID(CLIENT_ID);
  if (CLIENT_SECRET) setCLIENTE_SECRET(CLIENT_SECRET);
  if (GRANT_TYPE) setGRANT_TYPE(GRANT_TYPE);
  if (typeof NOTIFICATION_TOKEN !== 'undefined')
    setNOTIFICATION(NOTIFICATION_TOKEN);
  return (
    <ToastProvider>
      <SWRCache>{children}</SWRCache>
    </ToastProvider>
  );
};
