import React, { useCallback } from 'react';
import axios from 'axios';

export const useAxios = () => {
  const [isInstance, setIsInstance] = React.useState(false);

  const setInstance = useCallback((url: string) => {
    axios.defaults.baseURL = url;
    axios.defaults.headers['Content-Type'] = 'application/json';
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        const originalRequest = error.config;
        // RefressToken
        // TODO: Setear bien el refrest token
        if (error.response) {
          if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;
            const newToken = '123';
            axios.defaults.headers.common[
              'Authorization'
            ] = `Bearer ${newToken}`;
            return axios(originalRequest);
          }
        }
        return Promise.reject(error);
      },
    );
    setIsInstance(true);
  }, []);

  const setTokenAxios = useCallback((token: string) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }, []);

  const deleteTokenAxios = useCallback(() => {
    if (axios.defaults.headers.common['Authorization']) {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, []);

  return {
    setInstance,
    isReady: isInstance,
    deleteTokenAxios,
    setTokenAxios,
  };
};
