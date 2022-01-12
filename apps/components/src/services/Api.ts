// TODO: Implementar sentry

import axios, { AxiosError } from 'axios';

import {
  API_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  GRANT_TYPE,
  NOTIFICATION_TOKEN,
} from '../config/varibleApi';
import { User, ResponseErrorApi } from '../Interfaces';

let setTokenBolean = false;

const instance = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const setToken = (token: string) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  setTokenBolean = true;
};

export const deleteToken = () => {
  delete instance.defaults.headers.common['Authorization'];
  setTokenBolean = false;
};
export const LoginApi = async ({ username, password }: User) => {
  try {
    const response = await instance({
      url: '/token',
      method: 'POST',
      data: {
        grant_type: GRANT_TYPE,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        username,
        password,
        notification_token: NOTIFICATION_TOKEN,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response)
      return Promise.reject(allCatch(error));
    return Promise.reject({
      error: true,
      info: { data: error },
    } as ResponseErrorApi);
  }
};

export const infoMe = async () => {
  if (!setTokenBolean)
    return Promise.reject('No se a establecido el token de acceso.');
  try {
    const response = await instance({
      url: '/me',
      method: 'GET',
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response)
      return Promise.reject(allCatch(error));
    return Promise.reject({
      error: true,
      info: { data: error },
    } as ResponseErrorApi);
  }
};

const allCatch = (error: AxiosError): ResponseErrorApi => {
  if (error.response) {
    return {
      error: true,
      info: {
        data: error.response.data,
        status: error.response.status,
        headers: error.response.headers,
      },
    };
  }
  if (error.request) {
    return {
      error: true,
      info: {
        data: 'Api no respode',
        status: 600,
        headers: null,
      },
    };
  }
  return {
    error: true,
    info: {
      data: error.message,
      status: 600,
      headers: null,
    },
  };
};

export default instance;
