import React from 'react';
import axios from 'axios';

import { Token } from '../Interfaces/api/Token';
import { secureDB } from '../config/varibleApi';

export const useAxios = () => {
  const [isToken, setIsSetToken] = React.useState(null);
  const [isInstance, setIsInstance] = React.useState(false);

  const setInstance = (url: string) => {
    axios.defaults.baseURL = url;
    axios.defaults.headers['Content-Type'] = 'application/json';
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        const originalRequest = error.config;
        // RefressToken
        // TODO: Setear bien el refrest token
        if (error.response.status === 403 && !originalRequest._retry) {
          originalRequest._retry = true;
          const newToken = '123';
          axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
          return axios(originalRequest);
        }
        return Promise.reject(error);
      },
    );
    setIsInstance(true);
  };

  const setToken = (token: string) => {
    if (token.length === 0) {
      setIsSetToken(false);
      return;
    }
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setIsSetToken(true);
  };

  const deleteToken = () => {
    delete axios.defaults.headers.common['Authorization'];
    setIsSetToken(false);
  };

  const saveToken = async (token: Token): Promise<boolean> => {
    const { saveSecure } = secureDB;
    const naw = new Date();
    naw.setSeconds(naw.getSeconds() + token.expires_in);
    try {
      await saveSecure('Token-access', token.access_token);
      await saveSecure('Token-refresh', token.refresh_token);
      await saveSecure('Token-expirate', String(naw.valueOf()));
      setToken(token.access_token);
      return true;
    } catch (error) {
      return false;
    }
  };

  return {
    setInstance,
    isReady: isToken !== null && isInstance,
    isToken: isToken ?? false,
    deleteToken,
    saveToken,
    setToken,
  };
};
