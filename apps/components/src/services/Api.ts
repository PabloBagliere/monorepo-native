// TODO: Implementar sentry

import axios, { AxiosError } from 'axios';

import {
  CLIENT_ID,
  CLIENT_SECRET,
  GRANT_TYPE,
  NOTIFICATION_TOKEN,
} from '../config/varibleApi';
import { UserApi, ResponseErrorApi } from '../Interfaces';

export const LoginApi = async ({ username, password }: UserApi) => {
  try {
    const response = await axios({
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
