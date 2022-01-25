import useSWR from 'swr';
import { useContext } from 'react';

import { T } from '../Interfaces';
import { UserData } from '../Interfaces/api';
import HistrixContext from '../context/HistrixApp';

interface response {
  Me: UserData | undefined;
  isLoading: boolean;
  isError: T;
}

export const useMe: () => response = () => {
  const { isToken } = useContext(HistrixContext);
  const { data, error } = useSWR(
    isToken
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
    isLoading: !error && !data && isToken,
    isError: error,
  };
};
