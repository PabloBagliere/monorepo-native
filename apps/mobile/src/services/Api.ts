// TODO: Implementar sentry

import axios, { AxiosError } from 'axios';
import {
  API_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  GRANT_TYPE,
  NOTIFICATION_TOKEN,
} from '@env';

import { User, ResponseErrorApi } from '../interfaces';

const instance = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const setToken = (token: string) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const deleteToken = () => {
  delete instance.defaults.headers.common['Authorization'];
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
  }
};

const allCatch = (error: AxiosError): ResponseErrorApi => {
  if (error.response) {
    return {
      data: error.response.data,
      status: error.response.status,
      headers: error.response.headers,
    };
  }
  if (error.request) {
    return {
      data: 'Api no respode',
      status: 600,
      headers: null,
    };
  }
  return {
    data: error.message,
    status: 600,
    headers: null,
  };
};

export default instance;
