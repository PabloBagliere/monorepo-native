import useSWR from 'swr';
import { useContext } from 'react';

import { T } from '../Interfaces';
import { UserData } from '../Interfaces/api';
import ContextUser from '../context/ContextUser';

interface response {
  Me: UserData | undefined;
  isLoading: boolean;
  isError: T;
}

export const useMe: () => response = () => {
  const { isSetToken } = useContext(ContextUser);
  const { data, error } = useSWR(
    isSetToken
      ? {
          url: '/me',
          config: {
            method: 'GET',
          },
        }
      : null,
  );

  return {
    Me: data,
    isLoading: !error && !data && isSetToken,
    isError: error,
  };
};
