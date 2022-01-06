import React, { createContext, FC, useEffect, useState } from 'react';

import { UserData } from '../interfaces';
import { infoMe, setToken } from '../services/Api';
import { getSecure, saveSecure } from '../utils';

import { SWRCache } from './SWRCahce';

interface ContextAuthProps {
  me: null | UserData;
  getMe: () => Promise<boolean>;
}

const Context = createContext({
  me: null,
  getMe: () => Promise.resolve(true),
} as ContextAuthProps);

const SetterData = async (): Promise<boolean> => {
  try {
    const value = await getSecure('token-access');
    if (value) {
      getSecure('Token-expirate').then((data) => {
        if (!data) return;
        const today = new Date();
        const expirate = new Date(parseInt(data));
        if (expirate < today) {
          console.log('Token expirado');
          return false;
        }
        setToken(value);
        return true;
      });
    }
    return false;
  } catch (error) {
    return false;
  }
};

export const ContextAuth: FC = ({ children }) => {
  const [me, setMe] = useState<null | UserData>(null);
  useEffect(() => {
    SetterData().then((value) => {
      if (value) {
        getMe();
      }
    });
  }, []);
  const getMe = async (): Promise<boolean> => {
    try {
      const value = await getSecure('Me');
      if (value) {
        setMe(JSON.parse(value));
        return true;
      }
      const data = await infoMe();
      setMe(data);
      saveSecure('Me', JSON.stringify(data));
      return true;
    } catch (error) {
      return false;
    }
  };

  return <Context.Provider value={{ me, getMe }}>{children}</Context.Provider>;
};

export default Context;
