import useSWR from 'swr';

import { T } from '../Interfaces';
import { Token, User } from '../Interfaces/api';
import {
  CLIENT_ID,
  CLIENT_SECRET,
  GRANT_TYPE,
  NOTIFICATION_TOKEN,
} from '../config/varibleApi';

interface response {
  token: Token;
  isLoading: boolean;
  isError: T;
}

export const useToken: (user: User) => response = ({ username, password }) => {
  const { data, error } = useSWR({
    url: '/token',
    config: {
      method: 'POST',
      data: {
        grant_type: GRANT_TYPE,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        username,
        password,
        notification_token: NOTIFICATION_TOKEN,
      },
    },
  });

  return {
    token: data,
    isLoading: !error && !data,
    isError: error,
  };
};
