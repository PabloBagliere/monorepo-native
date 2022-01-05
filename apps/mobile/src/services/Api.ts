import axios from 'axios';
import {
  API_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  GRANT_TYPE,
  NOTIFICATION_TOKEN,
} from '@env';

import { User } from '../interfaces/user';

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
  } catch (error: any) {
    for (const key in error) {
      if (Object.prototype.hasOwnProperty.call(error, key)) {
        console.log(error[key]);
      }
    }
    console.log({ error });
  }
};

export default instance;
