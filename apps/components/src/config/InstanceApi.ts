import axios, { AxiosInstance } from 'axios';

export let instance: AxiosInstance;

export let isSetToken = false;

export const setInstance = (url: string) => {
  instance = axios.create({
    baseURL: url,
    headers: { 'Content-Type': 'application/json' },
  });
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      const originalRequest = error.config;
      // RefressToken
      // TODO: Setear bien el refrest token
      if (error.response.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;
        const newToken = '123';
        instance.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${newToken}`;
        return instance(originalRequest);
      }
      return Promise.reject(error);
    },
  );
};

export const setToken = (token: string) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  isSetToken = true;
};

export const deleteToken = () => {
  delete instance.defaults.headers.common['Authorization'];
  isSetToken = false;
};
