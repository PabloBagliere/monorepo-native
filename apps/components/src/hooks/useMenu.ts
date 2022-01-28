import { useContext } from 'react';
import useSWR from 'swr';

import ContextUser from '../context/ContextUser';

export const useMenu = () => {
  const { isSetToken } = useContext(ContextUser);
  const { data, error } = useSWR(
    isSetToken
      ? {
          url: '/menu/phpmen',
          config: {
            method: 'GET',
          },
        }
      : null,
  );

  return {
    Menu: data,
    isLoading: !error && !data && isSetToken,
    isError: error,
  };
};
