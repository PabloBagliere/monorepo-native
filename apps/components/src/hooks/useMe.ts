import useSWR from 'swr';
import { isSetToken } from '../config/InstanceApi';

import { T } from '../Interfaces';
import { UserData } from '../Interfaces/api';

interface response {
  Me: UserData | number | undefined;
  isLoading: boolean;
  isError: T;
}

export const useMe: () => response = () => {
  const { data, error } = useSWR( isSetToken ? {
    url: '/me',
    config: {
      method: 'GET',
    },
  }: null);

  return {
    Me: isSetToken ? data : 0,
    isLoading: !error && !data,
    isError: error,
  };
};
